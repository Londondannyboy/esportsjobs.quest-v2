import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not configured");
  }
  return neon(process.env.DATABASE_URL);
}

/**
 * Generate consistent conversation ID for two users
 */
function generateConversationId(userId1: string, userId2: string): string {
  return userId1 < userId2 ? `${userId1}_${userId2}` : `${userId2}_${userId1}`;
}

/**
 * GET /api/messages?userId=xxx&conversationId=xxx
 * Get messages for a conversation or list all conversations
 */
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const conversationId = request.nextUrl.searchParams.get("conversationId");
  const limit = parseInt(request.nextUrl.searchParams.get("limit") || "50");

  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  try {
    const sql = getDb();

    if (conversationId) {
      // Get messages for a specific conversation
      const messages = await sql`
        SELECT id, sender_id, recipient_id, content, read_at, created_at
        FROM messages
        WHERE conversation_id = ${conversationId}
          AND (sender_id = ${userId} OR recipient_id = ${userId})
        ORDER BY created_at ASC
        LIMIT ${limit}
      `;

      // Mark messages as read
      await sql`
        UPDATE messages
        SET read_at = NOW()
        WHERE conversation_id = ${conversationId}
          AND recipient_id = ${userId}
          AND read_at IS NULL
      `;

      return NextResponse.json({ messages });
    } else {
      // Get all conversations (inbox view)
      const conversations = await sql`
        WITH latest_messages AS (
          SELECT
            conversation_id,
            MAX(created_at) as last_message_at
          FROM messages
          WHERE sender_id = ${userId} OR recipient_id = ${userId}
          GROUP BY conversation_id
        ),
        unread_counts AS (
          SELECT
            conversation_id,
            COUNT(*) as unread_count
          FROM messages
          WHERE recipient_id = ${userId} AND read_at IS NULL
          GROUP BY conversation_id
        )
        SELECT DISTINCT ON (m.conversation_id)
          m.conversation_id,
          m.content as last_message,
          m.sender_id,
          m.recipient_id,
          m.created_at as last_message_at,
          COALESCE(uc.unread_count, 0) as unread_count,
          CASE
            WHEN m.sender_id = ${userId} THEN m.recipient_id
            ELSE m.sender_id
          END as other_user_id
        FROM messages m
        JOIN latest_messages lm ON m.conversation_id = lm.conversation_id
          AND m.created_at = lm.last_message_at
        LEFT JOIN unread_counts uc ON m.conversation_id = uc.conversation_id
        WHERE m.sender_id = ${userId} OR m.recipient_id = ${userId}
        ORDER BY m.conversation_id, m.created_at DESC
      `;

      // Get total unread count
      const unreadTotal = await sql`
        SELECT COUNT(*) as count
        FROM messages
        WHERE recipient_id = ${userId} AND read_at IS NULL
      `;

      return NextResponse.json({
        conversations,
        unreadTotal: parseInt(unreadTotal[0]?.count || "0"),
      });
    }
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

/**
 * POST /api/messages
 * Send a new message
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { senderId, recipientId, content } = body;

    if (!senderId || !recipientId || !content) {
      return NextResponse.json(
        { error: "senderId, recipientId, and content required" },
        { status: 400 }
      );
    }

    if (senderId === recipientId) {
      return NextResponse.json(
        { error: "Cannot send message to yourself" },
        { status: 400 }
      );
    }

    const sql = getDb();

    // Check if users are connected
    const connection = await sql`
      SELECT id FROM connections
      WHERE user_id = ${senderId}
        AND connected_user_id = ${recipientId}
        AND status = 'accepted'
    `;

    if (connection.length === 0) {
      return NextResponse.json(
        { error: "You must be connected to send messages" },
        { status: 403 }
      );
    }

    const conversationId = generateConversationId(senderId, recipientId);

    const result = await sql`
      INSERT INTO messages (conversation_id, sender_id, recipient_id, content)
      VALUES (${conversationId}, ${senderId}, ${recipientId}, ${content})
      RETURNING id, conversation_id, sender_id, recipient_id, content, created_at
    `;

    return NextResponse.json({
      success: true,
      message: result[0],
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

/**
 * PATCH /api/messages
 * Mark messages as read
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, conversationId, messageIds } = body;

    if (!userId) {
      return NextResponse.json({ error: "userId required" }, { status: 400 });
    }

    const sql = getDb();

    if (messageIds && messageIds.length > 0) {
      // Mark specific messages as read
      await sql`
        UPDATE messages
        SET read_at = NOW()
        WHERE id = ANY(${messageIds})
          AND recipient_id = ${userId}
          AND read_at IS NULL
      `;
    } else if (conversationId) {
      // Mark all messages in conversation as read
      await sql`
        UPDATE messages
        SET read_at = NOW()
        WHERE conversation_id = ${conversationId}
          AND recipient_id = ${userId}
          AND read_at IS NULL
      `;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error marking messages as read:", error);
    return NextResponse.json({ error: "Failed to update messages" }, { status: 500 });
  }
}

/**
 * DELETE /api/messages?messageId=xxx&userId=xxx
 * Delete a message (soft delete - only hides for the deleting user in future)
 * For now, just removes the message entirely
 */
export async function DELETE(request: NextRequest) {
  const messageId = request.nextUrl.searchParams.get("messageId");
  const userId = request.nextUrl.searchParams.get("userId");

  if (!messageId || !userId) {
    return NextResponse.json(
      { error: "messageId and userId required" },
      { status: 400 }
    );
  }

  try {
    const sql = getDb();

    // Only allow deleting your own messages
    await sql`
      DELETE FROM messages
      WHERE id = ${parseInt(messageId)} AND sender_id = ${userId}
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
