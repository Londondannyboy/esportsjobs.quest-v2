import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL not configured");
  }
  return neon(process.env.DATABASE_URL);
}

/**
 * GET /api/connections?userId=xxx
 * Get all connections for a user
 */
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const status = request.nextUrl.searchParams.get("status"); // Optional filter

  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  try {
    const sql = getDb();

    // Get connections where user is either the initiator or recipient
    let connections;
    if (status) {
      connections = await sql`
        SELECT
          c.id,
          c.connected_user_id,
          c.status,
          c.connection_type,
          c.initiated_by,
          c.created_at,
          ut.user_type,
          ut.bio,
          ut.verified
        FROM connections c
        LEFT JOIN user_types ut ON ut.user_id = c.connected_user_id
        WHERE c.user_id = ${userId} AND c.status = ${status}
        ORDER BY c.created_at DESC
      `;
    } else {
      connections = await sql`
        SELECT
          c.id,
          c.connected_user_id,
          c.status,
          c.connection_type,
          c.initiated_by,
          c.created_at,
          ut.user_type,
          ut.bio,
          ut.verified
        FROM connections c
        LEFT JOIN user_types ut ON ut.user_id = c.connected_user_id
        WHERE c.user_id = ${userId}
        ORDER BY c.created_at DESC
      `;
    }

    // Also get pending requests TO this user
    const pendingRequests = await sql`
      SELECT
        c.id,
        c.user_id as requester_id,
        c.connection_type,
        c.created_at,
        ut.user_type,
        ut.bio
      FROM connections c
      LEFT JOIN user_types ut ON ut.user_id = c.user_id
      WHERE c.connected_user_id = ${userId} AND c.status = 'pending'
      ORDER BY c.created_at DESC
    `;

    return NextResponse.json({
      connections,
      pendingRequests,
      counts: {
        total: connections.length,
        pending: pendingRequests.length,
        accepted: connections.filter((c) => (c as { status: string }).status === "accepted").length,
      },
    });
  } catch (error) {
    console.error("Error fetching connections:", error);
    return NextResponse.json({ error: "Failed to fetch connections" }, { status: 500 });
  }
}

/**
 * POST /api/connections
 * Create a new connection request
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, targetUserId, connectionType = "network" } = body;

    if (!userId || !targetUserId) {
      return NextResponse.json(
        { error: "userId and targetUserId required" },
        { status: 400 }
      );
    }

    if (userId === targetUserId) {
      return NextResponse.json(
        { error: "Cannot connect to yourself" },
        { status: 400 }
      );
    }

    const sql = getDb();

    // Check if connection already exists
    const existing = await sql`
      SELECT id, status FROM connections
      WHERE (user_id = ${userId} AND connected_user_id = ${targetUserId})
         OR (user_id = ${targetUserId} AND connected_user_id = ${userId})
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Connection already exists", existing: existing[0] },
        { status: 409 }
      );
    }

    // Create bidirectional connection records
    await sql`
      INSERT INTO connections (user_id, connected_user_id, status, initiated_by, connection_type)
      VALUES
        (${userId}, ${targetUserId}, 'pending', ${userId}, ${connectionType}),
        (${targetUserId}, ${userId}, 'pending', ${userId}, ${connectionType})
    `;

    return NextResponse.json({
      success: true,
      message: "Connection request sent",
    });
  } catch (error) {
    console.error("Error creating connection:", error);
    return NextResponse.json({ error: "Failed to create connection" }, { status: 500 });
  }
}

/**
 * PATCH /api/connections
 * Accept or reject a connection request
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, connectionId, action } = body; // action: 'accept' | 'reject' | 'block'

    if (!userId || !connectionId || !action) {
      return NextResponse.json(
        { error: "userId, connectionId, and action required" },
        { status: 400 }
      );
    }

    if (!["accept", "reject", "block"].includes(action)) {
      return NextResponse.json(
        { error: "Invalid action. Use: accept, reject, or block" },
        { status: 400 }
      );
    }

    const sql = getDb();

    const newStatus = action === "accept" ? "accepted" : action === "block" ? "blocked" : "rejected";

    // Update both sides of the connection
    await sql`
      UPDATE connections
      SET status = ${newStatus}, updated_at = NOW()
      WHERE id = ${connectionId}
         OR (user_id = (SELECT connected_user_id FROM connections WHERE id = ${connectionId})
             AND connected_user_id = (SELECT user_id FROM connections WHERE id = ${connectionId}))
    `;

    return NextResponse.json({
      success: true,
      status: newStatus,
    });
  } catch (error) {
    console.error("Error updating connection:", error);
    return NextResponse.json({ error: "Failed to update connection" }, { status: 500 });
  }
}

/**
 * DELETE /api/connections?connectionId=xxx&userId=xxx
 * Remove a connection
 */
export async function DELETE(request: NextRequest) {
  const connectionId = request.nextUrl.searchParams.get("connectionId");
  const userId = request.nextUrl.searchParams.get("userId");

  if (!connectionId || !userId) {
    return NextResponse.json(
      { error: "connectionId and userId required" },
      { status: 400 }
    );
  }

  try {
    const sql = getDb();

    // Delete both sides of the connection
    await sql`
      DELETE FROM connections
      WHERE id = ${parseInt(connectionId)}
         OR (user_id = (SELECT connected_user_id FROM connections WHERE id = ${parseInt(connectionId)})
             AND connected_user_id = (SELECT user_id FROM connections WHERE id = ${parseInt(connectionId)}))
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting connection:", error);
    return NextResponse.json({ error: "Failed to delete connection" }, { status: 500 });
  }
}
