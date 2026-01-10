# MVP Actor (formerly EsportsJobs.quest) - Claude Code Documentation

## CURRENT PROJECT: Two-Phase Moonshot

**Phase 1: Rebrand to MVP Actor**
- Primary domain: mvp.actor
- Secondary: gomvp.quest (redirect)
- Legacy: esportsjobs.quest (redirect)

**Phase 2: Enhanced Gamification & Networking**
- Refined 4-character system (Repo, Trinity, Velo, Reach)
- LinkedIn-style messaging
- Career coaching integration
- Real-time AI → Graph updates

See full plan: `.claude/plans/sharded-twirling-volcano.md`

---

## THE 4 CHARACTERS (Updated Jan 2025)

| Character | Theme | Fields | Required | Stages |
|-----------|-------|--------|----------|--------|
| **REPO** | Foundation | location, role, skill | All + 3 skills | Ungrounded → Planted → Rooted → Anchored |
| **TRINITY** | Soul/Purpose | career_mission, values, long_term_vision | mission | Searching → Awakening → Enlightened |
| **VELO** | Journey | experience_years, career_timeline | years + timeline | Standing Still → Walking → Running → Flying |
| **REACH** | Network | connections, messages, coach | None (always complete) | Solo → Connected → Networked |

**Key Changes (Jan 2025):**
- Skills moved from Trinity to Repo (Foundation now includes abilities)
- Trinity now focuses on deep purpose (mission, values, vision)
- Each character has progression stages
- Reach now includes messaging and coach directory tabs

### Character Stages
Characters progress through stages as users complete fields. Stage names are shown in the UI status badge.

### New Profile Item Types
- `career_mission` - User's "why" (Trinity)
- `values` - Core values (Trinity)
- `long_term_vision` - 5-10 year vision (Trinity)
- `career_timeline` - Career milestones with optional year (Velo)
- `career_context` - What user learned from their journey (Velo)

---

## BREAKTHROUGH: CopilotKit + Pydantic AI User Context (Jan 2025)

### THE KEY INSIGHT 🔑

**The LLM cannot directly see AG-UI state. It needs a TOOL to access user data.**

When using CopilotKit with Pydantic AI via AG-UI protocol:
- Frontend syncs user to `state.user` via `useCoAgent` + `setState`
- AG-UI protocol sends `state.user` in request body
- BUT the LLM doesn't see this state directly in its context
- **SOLUTION: Create a `get_my_profile` tool that reads from `ctx.deps.state.user`**

### What WORKS ✅

```python
@agent.tool
def get_my_profile(ctx: RunContext[StateDeps[AppState]]) -> dict:
    """Get the current user's profile info (name, email, id).

    ALWAYS call this tool when user asks: "what is my name", "what is my email", etc.
    """
    state = ctx.deps.state
    user = state.user

    if user and user.id:
        return {
            "found": True,
            "name": user.firstName or user.name,
            "email": user.email,
            "id": user.id
        }
    return {"found": False, "message": "User not logged in"}
```

Combined with system prompt:
```python
system_prompt=dedent("""
    ## CRITICAL: ALWAYS USE YOUR TOOLS!

    **MANDATORY TOOL USAGE:**
    | User asks... | TOOL TO CALL |
    |--------------|--------------|
    | "What is my name?" | get_my_profile |
    | "What is my email?" | get_my_profile |
    | "Who am I?" | get_my_profile |
""")
```

### What FAILED ❌

#### 1. Static system prompt telling LLM to use "instructions context"
```python
# FAILED - LLM doesn't actually receive the CopilotKit instructions
system_prompt="""
The frontend passes you CRITICAL USER CONTEXT in the system instructions...
Answer directly from that context!
"""
```
**Why it failed:** AG-UI protocol doesn't pass `instructions` prop as a system message. The `instructions` prop is only used for CopilotKit's internal prompting, not passed to the Pydantic AI agent.

#### 2. Middleware caching user from AG-UI body
```python
# PARTIALLY WORKS - caches user, but LLM still can't see it
@main_app.middleware("http")
async def extract_user_middleware(request, call_next):
    body = json.loads(await request.body())
    state_user = body.get("state", {}).get("user", {})
    if state_user:
        _cached_user_context = state_user  # Cached!
```
**Why it partially failed:** The middleware caches correctly, but the LLM still needs a tool to access the cached data. The cache alone doesn't help.

#### 3. Dynamic @agent.system_prompt function reading from state
```python
# FAILED - state.user is often None or not populated in time
@agent.system_prompt
async def build_system_prompt(ctx):
    user = ctx.deps.state.user
    if user:
        return f"You are speaking with {user.name}..."
```
**Why it failed:** The AG-UI adapter's state management timing is complex. The dynamic prompt function was called but `state.user` was often None.

#### 4. Relying on `disableSystemMessage={true}` alone
```tsx
<CopilotSidebar
  disableSystemMessage={true}
  instructions={agentInstructions}
>
```
**Why it failed:** `disableSystemMessage` only prevents CopilotKit's default system message. The `instructions` prop still isn't passed to the Pydantic AI agent via AG-UI.

### The Complete Working Pattern

#### Frontend (app/page.tsx)
```tsx
const { state, setState } = useCoAgent<AgentState>({
  name: "esports_agent",
  initialState: { jobs: [], search_query: "", user: undefined },
});

// Sync user from auth to agent state
useEffect(() => {
  if (user && !state?.user?.id) {
    setState((prev) => ({
      jobs: prev?.jobs ?? [],
      search_query: prev?.search_query ?? "",
      user: {
        id: user.id,
        name: user.name || undefined,
        firstName: firstName || undefined,
        email: user.email || undefined,
      },
    }));
  }
}, [user?.id, state?.user?.id, firstName, setState]);

// CopilotSidebar with disableSystemMessage
<CopilotSidebar
  defaultOpen={true}
  disableSystemMessage={true}
  instructions={agentInstructions}
>
```

#### Backend (agent/main.py)
```python
# State model must match frontend
class UserProfile(BaseModel):
    id: Optional[str] = None
    name: Optional[str] = None
    firstName: Optional[str] = None
    email: Optional[str] = None

class AppState(BaseModel):
    jobs: list[Job] = Field(default_factory=list)
    search_query: str = ""
    user: Optional[UserProfile] = None

# Agent with static system prompt
agent = Agent(
    model=GoogleModel('gemini-2.0-flash'),
    deps_type=StateDeps[AppState],
    system_prompt=dedent("""
        ## CRITICAL: ALWAYS USE YOUR TOOLS!
        | User asks... | TOOL TO CALL |
        |--------------|--------------|
        | "What is my name?" | get_my_profile |
        | "What is my email?" | get_my_profile |
    """).strip(),
)

# THE KEY TOOL - reads from ctx.deps.state.user
@agent.tool
def get_my_profile(ctx: RunContext[StateDeps[AppState]]) -> dict:
    """Get the current user's profile info."""
    user = ctx.deps.state.user
    if user and user.id:
        return {
            "found": True,
            "name": user.firstName or user.name,
            "email": user.email,
            "id": user.id
        }
    return {"found": False, "message": "Not logged in"}

# AG-UI app export
ag_ui_app = agent.to_ag_ui(deps=StateDeps(AppState()))
main_app.mount("/agui", ag_ui_app)
app = main_app
```

### AG-UI Protocol Details

When CopilotKit sends a request to `/agui/`, the body looks like:
```json
{
  "threadId": "...",
  "runId": "...",
  "tools": [],
  "context": [],
  "forwardedProps": {},
  "state": {
    "jobs": [],
    "search_query": "",
    "user": {
      "id": "953aa3aa-bae4-4fd9-abc2-7ee78c8e549d",
      "name": "Dan Keegan",
      "firstName": "Dan",
      "email": "keegan.dan@gmail.com"
    }
  },
  "messages": [{"id": "...", "role": "user", "content": "what is my name"}]
}
```

Key observations:
- `state.user` contains the synced user from frontend
- `context: []` is empty (instructions NOT passed here)
- `messages` only contains user messages, no system message with instructions
- The Pydantic AI `to_ag_ui()` adapter updates `deps.state` with incoming state
- Tools can access this via `ctx.deps.state.user`

### Deployment URLs

| Service | URL |
|---------|-----|
| Frontend (Vercel) | https://mvp.actor (pending rebrand) |
| Current Frontend | https://esportsjobsquest-v2.vercel.app |
| Backend (Railway) | https://esports-v2-agent-production.up.railway.app |
| AG-UI Endpoint | /agui/ |
| CLM Endpoint | /chat/completions |

### Environment Variables (Railway)

```
DATABASE_URL=postgresql://...@neon.tech/neondb
GOOGLE_API_KEY=AIza...
CLM_AUTH_SECRET=esports-clm-secret-2025
```

### Files Modified for This Fix

| File | Change |
|------|--------|
| `agent/main.py` | Added `get_my_profile` tool, updated system prompt |
| `app/page.tsx` | Added `disableSystemMessage={true}`, user state sync |

---

## Project Structure

```
esportsjobs.quest-v2/   →   mvp.actor (after rebrand)
├── app/                    # Next.js 15 frontend
│   ├── page.tsx           # Main page with CopilotKit
│   ├── profile/           # Profile page with 4 characters
│   ├── components/
│   │   ├── CharacterSection.tsx
│   │   ├── CharacterModel.tsx     # 3D character rendering
│   │   ├── characters/            # Repo, Trinity, Velo, Reach
│   │   ├── graphs/                # ZEP network graphs
│   │   └── gamification/          # XP, badges, levels
│   ├── providers/         # CopilotProvider
│   └── api/
│       ├── copilotkit/    # CopilotKit runtime route
│       ├── user-profile/  # Profile CRUD
│       ├── connections/   # Networking (Phase 2)
│       └── messages/      # Messaging (Phase 2)
├── agent/                  # Pydantic AI backend
│   ├── main.py            # FastAPI app with AG-UI + CLM
│   └── tools/             # Job search, user context, profile
├── lib/
│   ├── character-config.ts # 4 characters definitions
│   └── gamification.ts     # XP, levels, badges
├── public/
│   └── models/Soldier.glb  # 3D character model
└── CLAUDE.md              # This file
```

## Database (Neon PostgreSQL)

### App Database (esportsjobs)
Tables:
- `jobs` - Job listings with title, company, location, category
- `user_profile_items` - Flexible profile data (location, skills, etc.)
- `connections` - User connections (Phase 2)
- `messages` - Direct messages (Phase 2)

### Central Auth Database (quest-users)
- Shared authentication across all Quest apps
- `neon_auth.users_sync` - User accounts

## Gamification Components (Jan 2025)

### Celebration Components
Located in `app/components/gamification/`:

| Component | Purpose |
|-----------|---------|
| `BadgeUnlockToast` | Toast notification when achievement unlocked |
| `XPNotification` | Floating +XP animation |
| `CharacterUnlockCelebration` | Full-screen celebration when character completed |
| `Confetti` | Canvas-based confetti animation |

### Usage
```tsx
import { useCharacterCelebration, useXPNotifications } from '@/app/components/gamification';

// In your component:
const { activeCharacter, showCelebration, handleComplete } = useCharacterCelebration();
const { notifications, showXPGain, removeNotification } = useXPNotifications();

// Trigger celebrations:
showCelebration('Repo');  // Full screen character unlock
showXPGain(100, 'Skill added');  // Floating XP notification
```

### Badge Click Actions
- **Locked badges** → Open modal with requirement + "Start Working Towards This!" CTA
- **Unlocked badges** → Scroll to related character section with highlight animation

### Real-time Graph Animations
`TrinitySkillsGraph` (now used by Repo) detects new skills and shows:
- "+" banner animation
- Node highlight effect
- Callback when animation completes

---

## New API Routes (Jan 2025)

### Connections API (`/api/connections`)
- `GET` - List user's connections
- `POST` - Send connection request
- `PATCH` - Accept/reject connection
- `DELETE` - Remove connection

### Messages API (`/api/messages`)
- `GET` - Get conversation or inbox
- `POST` - Send message (requires connection)
- `PATCH` - Mark messages as read
- `DELETE` - Delete your message

### Database Tables
Run `scripts/create-networking-tables.sql` to create:
- `connections` - User-to-user connections with status
- `messages` - Direct messages with conversation threading
- `user_types` - User type (seeker/coach/recruiter) + verification

---

## Key Learnings

1. **AG-UI ≠ CLM**: AG-UI protocol is different from OpenAI-compatible chat completions
2. **State sync works**: `useCoAgent` + `setState` successfully syncs to `ctx.deps.state`
3. **LLM needs tools**: The LLM cannot see AG-UI state directly - it needs tools
4. **System prompt guides tool use**: Tell the LLM exactly which tool to call for which question
5. **Testing is essential**: Always check Railway logs to see what the agent actually receives
