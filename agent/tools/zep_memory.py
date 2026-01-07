"""
Zep Memory Integration for EsportsJobs.quest

Provides:
- User conversation memory across sessions
- Fact extraction (job preferences, interests)
- Context retrieval for personalized responses
"""

import os
import sys
from typing import Optional, List, Dict
from zep_cloud.client import AsyncZep
from zep_cloud.types import Message

# Initialize Zep client
ZEP_API_KEY = os.getenv("ZEP_API_KEY")
zep_client: Optional[AsyncZep] = None

if ZEP_API_KEY:
    zep_client = AsyncZep(api_key=ZEP_API_KEY)
    print("[Zep] Client initialized", file=sys.stderr)
else:
    print("[Zep] WARNING: ZEP_API_KEY not set - memory disabled", file=sys.stderr)


async def ensure_user_exists(user_id: str, user_name: str = None, email: str = None) -> bool:
    """Ensure user exists in Zep, create if not."""
    if not zep_client:
        return False

    try:
        # Try to get user
        try:
            await zep_client.user.get(user_id)
            return True
        except Exception:
            pass

        # Create user if doesn't exist
        await zep_client.user.add(
            user_id=user_id,
            first_name=user_name,
            email=email,
            metadata={"source": "esportsjobs.quest"}
        )
        print(f"[Zep] Created user: {user_id}", file=sys.stderr)
        return True
    except Exception as e:
        print(f"[Zep] Error ensuring user: {e}", file=sys.stderr)
        return False


async def ensure_thread_exists(user_id: str, thread_id: str) -> bool:
    """Ensure thread exists for user."""
    if not zep_client:
        return False

    try:
        # Try to get thread
        try:
            await zep_client.thread.get(thread_id)
            return True
        except Exception:
            pass

        # Create thread
        await zep_client.thread.create(
            user_id=user_id,
            thread_id=thread_id,
            metadata={"type": "voice_session"}
        )
        print(f"[Zep] Created thread: {thread_id}", file=sys.stderr)
        return True
    except Exception as e:
        print(f"[Zep] Error ensuring thread: {e}", file=sys.stderr)
        return False


async def add_message_to_memory(
    thread_id: str,
    role: str,  # "user" or "assistant"
    content: str,
    user_name: str = None
) -> Optional[str]:
    """
    Add a message to Zep memory.
    Zep automatically extracts facts and entities.
    Returns context if available.
    """
    if not zep_client:
        return None

    try:
        name = user_name if role == "user" else "Esports AI"

        response = await zep_client.thread.add_messages(
            thread_id=thread_id,
            messages=[
                Message(
                    role=role,
                    role_type=role,
                    content=content,
                    name=name
                )
            ],
            return_context=True  # Get context immediately
        )

        print(f"[Zep] Added {role} message to thread {thread_id[:8]}", file=sys.stderr)

        # Return context if available
        if response and hasattr(response, 'context') and response.context:
            return response.context
        return None
    except Exception as e:
        print(f"[Zep] Error adding message: {e}", file=sys.stderr)
        return None


async def get_user_context(thread_id: str, last_n: int = 5) -> Dict:
    """
    Get user context from Zep including:
    - Recent conversation summary
    - Extracted facts (job preferences, interests)
    - Relevant entities
    """
    if not zep_client:
        return {"available": False, "reason": "Zep not configured"}

    try:
        context_response = await zep_client.thread.get_user_context(
            thread_id=thread_id,
            last_n=last_n
        )

        result = {
            "available": True,
            "context": context_response.context if context_response.context else "",
            "facts": [],
            "entities": []
        }

        # Extract facts if available
        if hasattr(context_response, 'facts') and context_response.facts:
            result["facts"] = [f.fact for f in context_response.facts]

        # Extract entities if available
        if hasattr(context_response, 'entities') and context_response.entities:
            result["entities"] = [
                {"name": e.name, "type": e.entity_type}
                for e in context_response.entities
            ]

        print(f"[Zep] Retrieved context with {len(result['facts'])} facts", file=sys.stderr)
        return result
    except Exception as e:
        print(f"[Zep] Error getting context: {e}", file=sys.stderr)
        return {"available": False, "reason": str(e)}


async def search_user_memory(user_id: str, query: str, limit: int = 5) -> List[Dict]:
    """
    Search user's memory for relevant information.
    Useful for finding past job interests, preferences, etc.
    """
    if not zep_client:
        return []

    try:
        # Search across user's memory graph
        results = await zep_client.graph.search(
            user_id=user_id,
            query=query,
            limit=limit
        )

        if not results or not hasattr(results, 'edges'):
            return []

        return [
            {
                "fact": edge.fact if hasattr(edge, 'fact') else str(edge),
                "score": edge.score if hasattr(edge, 'score') else 0
            }
            for edge in results.edges[:limit]
        ]
    except Exception as e:
        print(f"[Zep] Error searching memory: {e}", file=sys.stderr)
        return []


async def get_job_preferences(user_id: str) -> Dict:
    """
    Get user's job preferences from Zep memory.
    Searches for facts about roles, locations, companies they're interested in.
    """
    if not zep_client:
        return {"available": False}

    preferences = {
        "available": True,
        "roles": [],
        "locations": [],
        "companies": [],
        "categories": []
    }

    try:
        # Search for job-related facts
        job_searches = await search_user_memory(user_id, "job role position career", 10)
        location_searches = await search_user_memory(user_id, "location country city work", 5)
        company_searches = await search_user_memory(user_id, "company team organization", 5)

        # Extract relevant info
        for item in job_searches:
            if item.get("fact"):
                preferences["roles"].append(item["fact"])

        for item in location_searches:
            if item.get("fact"):
                preferences["locations"].append(item["fact"])

        for item in company_searches:
            if item.get("fact"):
                preferences["companies"].append(item["fact"])

        return preferences
    except Exception as e:
        print(f"[Zep] Error getting preferences: {e}", file=sys.stderr)
        return {"available": False, "error": str(e)}


def generate_thread_id(user_id: str, session_id: str = None) -> str:
    """Generate a consistent thread ID for a user session."""
    if session_id:
        return f"esports_{user_id}_{session_id}"
    return f"esports_{user_id}_default"
