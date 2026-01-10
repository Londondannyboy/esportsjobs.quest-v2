# MVP Actor - Current State & Next Steps

## Project Status (Jan 2025)

### COMPLETED

#### Phase 1: Rebrand to MVP Actor
- [x] Domain propagation (mvp.actor live)
- [x] Updated metadata in layout.tsx (title, description, OpenGraph, Twitter cards, JSON-LD)
- [x] Bulk replaced esportsjobs.quest → mvp.actor in 86 files
- [x] Updated agent branding in main.py (system prompt, health check)
- [x] Added redirects in next.config.ts (/esports-jobs → /jobs, etc.)
- [x] Deployed to Vercel (mvp.actor showing new branding)
- [x] Updated robots.txt with mvp.actor sitemap URL

#### Phase 2: Gamification Enhancement
- [x] Refactored 4-character system (Repo, Trinity, Velo, Reach)
- [x] Moved skills from Trinity to Repo
- [x] Added character stages (Ungrounded → Planted → Rooted → Anchored, etc.)
- [x] Created celebration components:
  - CharacterUnlockCelebration (full-screen with confetti)
  - XPNotification (floating +XP animation)
  - BadgeUnlockToast (toast notification)
- [x] Enhanced AchievementBadges with click-to-scroll navigation
- [x] Added highlight-pulse CSS animation
- [x] Created connections API (/api/connections)
- [x] Created messages API (/api/messages)
- [x] Created SQL migration script for networking tables
- [x] Added new agent tools (save_career_mission, save_user_values, etc.)
- [x] Wired up celebrations to profile page

### PENDING - Manual Steps Required

#### 1. Railway Backend Redeploy
The Railway CLI is not logged in locally. User needs to:
1. Go to https://railway.app/dashboard
2. Find the esports-v2-agent project
3. Click "Deploy" or "Redeploy" on the service
4. Verify at: https://esports-v2-agent-production.up.railway.app/health

#### 2. Run Networking SQL in Neon
DATABASE_URL is only available in Vercel/Railway environments. User needs to:
1. Go to Neon console (https://console.neon.tech)
2. Select the esportsjobs database
3. Open SQL Editor
4. Run the contents of: `scripts/create-networking-tables.sql`

This creates tables for:
- `connections` - User-to-user connections with status
- `messages` - Direct messages with conversation threading
- `user_types` - User type (seeker/coach/recruiter) + verification

---

## Architecture Overview

### Frontend (Next.js 15 on Vercel)
- **URL**: https://mvp.actor
- **Domain aliases**: gomvp.quest, esportsjobs.quest (redirects)
- **Key pages**:
  - `/` - Homepage with CopilotKit AI chat
  - `/profile` - 4-character gamified profile
  - `/jobs` - Job listings (formerly /esports-jobs)
  - `/auth/*` - Authentication flows

### Backend (Pydantic AI on Railway)
- **URL**: https://esports-v2-agent-production.up.railway.app
- **Endpoints**:
  - `/agui/` - AG-UI protocol for CopilotKit
  - `/chat/completions` - CLM endpoint
  - `/health` - Health check

### Database (Neon PostgreSQL)
- **App DB**: esportsjobs
- **Auth DB**: quest-users (shared across apps)

---

## The 4 Characters

| Character | Theme | Required Fields | Stages |
|-----------|-------|-----------------|--------|
| **REPO** | Foundation | location, role, 3+ skills | Ungrounded → Planted → Rooted → Anchored |
| **TRINITY** | Soul/Purpose | career_mission | Searching → Awakening → Enlightened |
| **VELO** | Journey | experience_years, career_timeline | Standing Still → Walking → Running → Flying |
| **REACH** | Network | (always complete) | Solo → Connected → Networked |

---

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage with CopilotKit integration |
| `app/profile/page.tsx` | Profile page with 4 characters + celebrations |
| `lib/character-config.ts` | Character definitions, stages, completion logic |
| `lib/gamification.ts` | XP, levels, achievements |
| `agent/main.py` | Pydantic AI backend with tools |
| `next.config.ts` | Redirects, image patterns |
| `CLAUDE.md` | Claude Code documentation |

---

## Future Work (Not Started)

### Networking System
- Implement connections UI in Reach character
- Build messaging inbox/conversation views
- Add coach directory with filtering
- Real-time notifications for messages

### Real-time Updates
- WebSocket/SSE for live profile updates
- Graph animation when AI adds items
- Push notifications for achievements

### Additional Gamification
- Leaderboards
- Weekly challenges
- Career streaks
