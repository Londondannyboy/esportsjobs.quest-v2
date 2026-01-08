"""
User Context Tools - Neon DB + Zep Memory Integration

Provides tools for:
- User profile (skills, experience, preferences) from Neon
- Job interests tracking from Neon
- Conversation memory from Zep
"""

import os
import sys
import json
from typing import Optional, List
import psycopg2
from psycopg2.extras import RealDictCursor

# Zep Cloud client
try:
    from zep_cloud.client import Zep
    ZEP_AVAILABLE = True
except ImportError:
    ZEP_AVAILABLE = False
    print("[UserContext] Zep not available", file=sys.stderr)


def get_db_connection():
    """Get database connection from environment."""
    db_url = os.getenv("DATABASE_URL")
    if not db_url:
        return None
    return psycopg2.connect(db_url)


def get_zep_client() -> Optional["Zep"]:
    """Get Zep client if available."""
    if not ZEP_AVAILABLE:
        return None
    api_key = os.getenv("ZEP_API_KEY")
    if not api_key:
        return None
    return Zep(api_key=api_key)


# =====
# Neon DB Tools
# =====

def get_user_profile(user_id: str) -> dict:
    """Get user profile from Neon database."""
    try:
        conn = get_db_connection()
        if not conn:
            return {"found": False, "error": "Database not configured"}

        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("""
                SELECT id, email, name, skills, experience_years,
                       preferred_categories, preferred_locations, bio
                FROM user_profiles
                WHERE id = %s
            """, (user_id,))
            row = cur.fetchone()

        conn.close()

        if row:
            return {
                "found": True,
                "profile": dict(row)
            }
        return {"found": False, "message": "Profile not found"}
    except Exception as e:
        print(f"[UserContext] DB error: {e}", file=sys.stderr)
        return {"found": False, "error": str(e)}


def save_user_profile(user_id: str, email: str = None, name: str = None,
                     skills: List[str] = None, experience_years: int = None,
                     preferred_categories: List[str] = None,
                     preferred_locations: List[str] = None, bio: str = None) -> dict:
    """Create or update user profile in Neon database."""
    try:
        conn = get_db_connection()
        if not conn:
            return {"success": False, "error": "Database not configured"}

        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO user_profiles (id, email, name, skills, experience_years,
                                          preferred_categories, preferred_locations, bio, updated_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, NOW())
                ON CONFLICT (id) DO UPDATE SET
                    email = COALESCE(EXCLUDED.email, user_profiles.email),
                    name = COALESCE(EXCLUDED.name, user_profiles.name),
                    skills = COALESCE(EXCLUDED.skills, user_profiles.skills),
                    experience_years = COALESCE(EXCLUDED.experience_years, user_profiles.experience_years),
                    preferred_categories = COALESCE(EXCLUDED.preferred_categories, user_profiles.preferred_categories),
                    preferred_locations = COALESCE(EXCLUDED.preferred_locations, user_profiles.preferred_locations),
                    bio = COALESCE(EXCLUDED.bio, user_profiles.bio),
                    updated_at = NOW()
            """, (user_id, email, name, skills, experience_years,
                  preferred_categories, preferred_locations, bio))

        conn.commit()
        conn.close()

        return {"success": True, "message": "Profile saved"}
    except Exception as e:
        print(f"[UserContext] DB error saving profile: {e}", file=sys.stderr)
        return {"success": False, "error": str(e)}


def get_user_job_interests(user_id: str, limit: int = 10) -> dict:
    """Get jobs the user has shown interest in."""
    try:
        conn = get_db_connection()
        if not conn:
            return {"found": False, "error": "Database not configured"}

        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("""
                SELECT ji.job_id, ji.interest_type, ji.created_at,
                       j.title, j.company, j.location, j.category
                FROM user_job_interests ji
                JOIN jobs j ON j.id = ji.job_id
                WHERE ji.user_id = %s
                ORDER BY ji.created_at DESC
                LIMIT %s
            """, (user_id, limit))
            rows = cur.fetchall()

        conn.close()

        return {
            "found": True,
            "interests": [dict(row) for row in rows],
            "count": len(rows)
        }
    except Exception as e:
        print(f"[UserContext] DB error: {e}", file=sys.stderr)
        return {"found": False, "error": str(e)}


def save_job_interest(user_id: str, job_id: str, interest_type: str = "viewed") -> dict:
    """Save user's interest in a job."""
    try:
        conn = get_db_connection()
        if not conn:
            return {"success": False, "error": "Database not configured"}

        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO user_job_interests (user_id, job_id, interest_type)
                VALUES (%s, %s, %s)
                ON CONFLICT (user_id, job_id) DO UPDATE SET
                    interest_type = EXCLUDED.interest_type,
                    created_at = NOW()
            """, (user_id, job_id, interest_type))

        conn.commit()
        conn.close()

        return {"success": True, "message": f"Saved {interest_type} interest"}
    except Exception as e:
        print(f"[UserContext] DB error saving interest: {e}", file=sys.stderr)
        return {"success": False, "error": str(e)}


# =====
# Zep Memory Tools
# =====

def get_conversation_memory(user_id: str, limit: int = 5) -> dict:
    """Get recent conversation history from Zep."""
    try:
        client = get_zep_client()
        if not client:
            return {"found": False, "error": "Zep not configured"}

        # Get memory for user
        memory = client.memory.get(session_id=f"esports_{user_id}")

        if memory and memory.messages:
            messages = []
            for msg in memory.messages[-limit:]:
                messages.append({
                    "role": msg.role,
                    "content": msg.content[:200],  # Truncate for context
                    "timestamp": str(msg.created_at) if hasattr(msg, 'created_at') else None
                })

            return {
                "found": True,
                "messages": messages,
                "summary": memory.summary.content if memory.summary else None
            }

        return {"found": False, "message": "No conversation history"}
    except Exception as e:
        print(f"[UserContext] Zep error: {e}", file=sys.stderr)
        return {"found": False, "error": str(e)}


def save_conversation_to_zep(user_id: str, role: str, content: str) -> dict:
    """Save a message to Zep conversation memory."""
    try:
        client = get_zep_client()
        if not client:
            return {"success": False, "error": "Zep not configured"}

        from zep_cloud.types import Message

        client.memory.add(
            session_id=f"esports_{user_id}",
            messages=[Message(role=role, content=content)]
        )

        return {"success": True}
    except Exception as e:
        print(f"[UserContext] Zep error saving: {e}", file=sys.stderr)
        return {"success": False, "error": str(e)}


def search_user_memories(user_id: str, query: str, limit: int = 3) -> dict:
    """Search user's conversation history in Zep."""
    try:
        client = get_zep_client()
        if not client:
            return {"found": False, "error": "Zep not configured"}

        results = client.memory.search(
            session_id=f"esports_{user_id}",
            text=query,
            limit=limit
        )

        if results:
            return {
                "found": True,
                "results": [{"content": r.message.content[:200], "score": r.score} for r in results]
            }

        return {"found": False, "message": "No relevant memories found"}
    except Exception as e:
        print(f"[UserContext] Zep search error: {e}", file=sys.stderr)
        return {"found": False, "error": str(e)}


# =====
# Profile Items (Skills, Role, Location, etc.)
# =====

def ensure_profile_items_table():
    """Create user_profile_items table if it doesn't exist."""
    try:
        conn = get_db_connection()
        if not conn:
            return False

        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS user_profile_items (
                    id SERIAL PRIMARY KEY,
                    user_id TEXT NOT NULL,
                    item_type TEXT NOT NULL,
                    value TEXT NOT NULL,
                    metadata JSONB DEFAULT '{}',
                    confirmed BOOLEAN DEFAULT false,
                    created_at TIMESTAMPTZ DEFAULT NOW(),
                    updated_at TIMESTAMPTZ DEFAULT NOW(),
                    UNIQUE(user_id, item_type, value)
                );
                CREATE INDEX IF NOT EXISTS idx_profile_items_user ON user_profile_items(user_id);
                CREATE INDEX IF NOT EXISTS idx_profile_items_type ON user_profile_items(item_type);
            """)
        conn.commit()
        conn.close()
        print("[UserContext] Profile items table ready", file=sys.stderr)
        return True
    except Exception as e:
        print(f"[UserContext] Table creation error: {e}", file=sys.stderr)
        return False


def get_profile_items(user_id: str, item_type: str = None) -> dict:
    """Get user profile items, optionally filtered by type."""
    try:
        conn = get_db_connection()
        if not conn:
            return {"found": False, "error": "Database not configured"}

        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            if item_type:
                cur.execute("""
                    SELECT item_type, value, metadata, confirmed, created_at
                    FROM user_profile_items
                    WHERE user_id = %s AND item_type = %s
                    ORDER BY created_at DESC
                """, (user_id, item_type))
            else:
                cur.execute("""
                    SELECT item_type, value, metadata, confirmed, created_at
                    FROM user_profile_items
                    WHERE user_id = %s
                    ORDER BY item_type, created_at DESC
                """, (user_id,))
            rows = cur.fetchall()

        conn.close()

        # Group by type
        items_by_type = {}
        for row in rows:
            t = row['item_type']
            if t not in items_by_type:
                items_by_type[t] = []
            items_by_type[t].append({
                'value': row['value'],
                'metadata': row['metadata'] or {},
                'confirmed': row['confirmed'],
                'created_at': str(row['created_at'])
            })

        return {
            "found": True,
            "items": items_by_type,
            "total": len(rows)
        }
    except Exception as e:
        print(f"[UserContext] Error getting profile items: {e}", file=sys.stderr)
        return {"found": False, "error": str(e)}


def save_profile_item(user_id: str, item_type: str, value: str,
                     metadata: dict = None, confirmed: bool = False,
                     replace_existing: bool = False) -> dict:
    """
    Save a profile item.

    Args:
        user_id: User ID
        item_type: 'skill', 'location', 'role', 'salary_min', 'salary_max', 'experience_years'
        value: The value to save
        metadata: Optional metadata (e.g., {proficiency: 'expert'})
        confirmed: Whether user confirmed this (HITL)
        replace_existing: If True, delete existing items of this type first (for single-value fields)
    """
    try:
        conn = get_db_connection()
        if not conn:
            return {"success": False, "error": "Database not configured"}

        # Single-value fields should replace existing
        single_value_types = ['location', 'role', 'salary_min', 'salary_max', 'experience_years']
        should_replace = replace_existing or item_type in single_value_types

        with conn.cursor() as cur:
            # Delete existing if this is a single-value field
            if should_replace:
                cur.execute("""
                    DELETE FROM user_profile_items
                    WHERE user_id = %s AND item_type = %s
                """, (user_id, item_type))

            # Insert new item
            cur.execute("""
                INSERT INTO user_profile_items (user_id, item_type, value, metadata, confirmed, updated_at)
                VALUES (%s, %s, %s, %s, %s, NOW())
                ON CONFLICT (user_id, item_type, value) DO UPDATE SET
                    metadata = COALESCE(EXCLUDED.metadata, user_profile_items.metadata),
                    confirmed = EXCLUDED.confirmed,
                    updated_at = NOW()
            """, (user_id, item_type, value, json.dumps(metadata or {}), confirmed))

        conn.commit()
        conn.close()

        return {
            "success": True,
            "type": item_type,
            "value": value,
            "confirmed": confirmed,
            "replaced": should_replace
        }
    except Exception as e:
        print(f"[UserContext] Error saving profile item: {e}", file=sys.stderr)
        return {"success": False, "error": str(e)}


def delete_profile_item(user_id: str, item_type: str, value: str) -> dict:
    """Delete a profile item."""
    try:
        conn = get_db_connection()
        if not conn:
            return {"success": False, "error": "Database not configured"}

        with conn.cursor() as cur:
            cur.execute("""
                DELETE FROM user_profile_items
                WHERE user_id = %s AND item_type = %s AND value = %s
            """, (user_id, item_type, value))
            deleted = cur.rowcount

        conn.commit()
        conn.close()

        return {"success": True, "deleted": deleted > 0}
    except Exception as e:
        print(f"[UserContext] Error deleting profile item: {e}", file=sys.stderr)
        return {"success": False, "error": str(e)}


def get_profile_completeness(user_id: str) -> dict:
    """Check how complete the user's profile is."""
    items = get_profile_items(user_id)
    if not items.get("found"):
        return {"complete": False, "percent": 0, "missing": ["skills", "location", "role"]}

    items_by_type = items.get("items", {})

    has_skills = len(items_by_type.get("skill", [])) >= 1
    has_location = len(items_by_type.get("location", [])) >= 1
    has_role = len(items_by_type.get("role", [])) >= 1
    has_experience = len(items_by_type.get("experience_years", [])) >= 1

    missing = []
    if not has_skills:
        missing.append("skills")
    if not has_location:
        missing.append("location")
    if not has_role:
        missing.append("role")
    if not has_experience:
        missing.append("experience")

    total_fields = 4
    completed = total_fields - len(missing)
    percent = int((completed / total_fields) * 100)

    return {
        "complete": len(missing) == 0,
        "percent": percent,
        "skills_count": len(items_by_type.get("skill", [])),
        "has_location": has_location,
        "has_role": has_role,
        "has_experience": has_experience,
        "missing": missing,
        "items": items_by_type
    }


# =====
# Combined Context
# =====

def get_full_user_context(user_id: str) -> dict:
    """Get complete user context: profile + interests + memory."""
    context = {
        "user_id": user_id,
        "profile": None,
        "job_interests": [],
        "conversation_summary": None,
        "recent_messages": []
    }

    # Get profile
    profile_result = get_user_profile(user_id)
    if profile_result.get("found"):
        context["profile"] = profile_result["profile"]

    # Get job interests
    interests_result = get_user_job_interests(user_id, limit=5)
    if interests_result.get("found"):
        context["job_interests"] = interests_result["interests"]

    # Get conversation memory
    memory_result = get_conversation_memory(user_id, limit=3)
    if memory_result.get("found"):
        context["conversation_summary"] = memory_result.get("summary")
        context["recent_messages"] = memory_result.get("messages", [])

    return context
