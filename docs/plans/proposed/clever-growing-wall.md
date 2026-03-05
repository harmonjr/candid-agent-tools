# Sprint 1a: Auth + Database Infrastructure (Turso + Auth.js)

**Project:** candid-agent-tools
**Session:** 126
**Parent plan:** Phase 3 (Plan #89)
**Pivots from:** Original Supabase plan to Turso + Auth.js v5

## Context

Phases 1-2 delivered 8 client-side tools. Phase 3 adds auth, persistence, certification, and publishing. Randy hit the Supabase free tier limit, so we're pivoting to Turso (paid plan, $5/mo in harmon-creative org) + Auth.js v5 for authentication. This pattern will also transfer to RiseWell when it needs auth.

Sprint 1a delivers the auth infrastructure. The board stays public with localStorage — Sprint 1b adds database-backed persistence for logged-in users.

## Architecture Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Database | Turso (libSQL) in harmon-creative org | Already paid, RiseWell reuse |
| ORM | Drizzle ORM + @libsql/client | Type-safe queries, official Auth.js adapter |
| Auth | Auth.js v5 (next-auth@beta) | Google OAuth + Resend magic link |
| Sessions | JWT strategy | No DB round-trip per request, simpler, Turso is remote |
| Route protection | `proxy.ts` (Next.js 16 convention) | Replaces middleware.ts, runs on Node.js runtime |
| Access control | App-level checks (no RLS in SQLite) | `requireAuth()` / `requireProfile()` helpers |
| Migrations | Manual SQL via `turso db shell` | Per hub rules — never auto-migrate |

## Randy's Manual Setup (Before Implementation)

1. **Google OAuth credentials** — Google Cloud Console → new OAuth 2.0 client
   - Redirect URI: `http://localhost:3000/api/auth/callback/google`
   - Copy Client ID + Secret
2. **Resend account** — resend.com → create API key (free tier: 100 emails/day)
3. **AUTH_SECRET** — run `openssl rand -base64 32`
4. **Turso token** — already created this session

## Dependencies to Install

```
npm install next-auth@beta @auth/drizzle-adapter drizzle-orm @libsql/client
npm install -D drizzle-kit
```

## Environment Variables (.env.local)

```
TURSO_DATABASE_URL=libsql://candid-agent-tools-harmon-creative.aws-us-east-2.turso.io
TURSO_AUTH_TOKEN=<token>
AUTH_SECRET=<openssl rand -base64 32>
AUTH_GOOGLE_ID=<from Google Cloud Console>
AUTH_GOOGLE_SECRET=<from Google Cloud Console>
AUTH_RESEND_KEY=<from resend.com>
```

## Database Schema

Auth.js requires 4 tables (user, account, session, verificationToken). App adds agent_profile and board_client (Sprint 1b uses board_client).

### File: `data/migrations/001-initial-schema.sql`

**Auth.js tables** — user, account, session, verificationToken with exact column names required by `@auth/drizzle-adapter` SQLite schema.

**App tables:**
- `agent_profile` — user_id (FK to user), display_name, slug, bio, markets (JSON text), tier (free/certified/admin), is_admin, capacity, certification_status, onboarding_completed
- `board_client` — agent_id (FK to agent_profile), name, life_context, next_action, stage, display_order, stage_entered_at

**SQLite translations from original PostgreSQL plan:**
- UUID → TEXT
- TIMESTAMPTZ → TEXT (ISO 8601) or INTEGER (timestamp_ms for Auth.js)
- JSONB → TEXT (JSON string)
- SERIAL → INTEGER PRIMARY KEY AUTOINCREMENT
- BOOLEAN → INTEGER (0/1)
- No RLS — access control in application code
- No GIN indexes — standard indexes only

Applied manually: `turso db shell candid-agent-tools < data/migrations/001-initial-schema.sql`

## File Structure (New Files)

```
src/lib/db/
  client.ts              — libSQL + Drizzle singleton
  schema.ts              — Drizzle table definitions (Auth.js + app)

src/lib/auth.ts          — NextAuth config (providers, adapter, JWT callbacks)
src/lib/auth/
  require-auth.ts        — Server-side: requireAuth(), requireProfile(), requireAdmin()
  session-helpers.ts     — Client-side: useCurrentUser() hook

src/app/api/auth/[...nextauth]/route.ts  — Auth.js route handler

src/proxy.ts             — Route protection (Next.js 16 convention)

src/app/login/page.tsx               — Login UI
src/app/onboarding/page.tsx          — First-time profile setup
src/app/auth/verify-request/page.tsx — "Check your email" page
src/app/auth/error/page.tsx          — Auth error page

src/components/providers/SessionProvider.tsx — Client wrapper
src/components/auth/LoginForm.tsx     — Google + email form
src/components/auth/UserMenu.tsx      — Header dropdown
src/components/auth/OnboardingForm.tsx — Profile creation

data/migrations/001-initial-schema.sql
drizzle.config.ts        — For introspection only (NOT auto-migrate)
.env.example
```

## Modified Files

- `src/app/layout.tsx` — Wrap with SessionProvider
- `src/components/audit/SiteHeader.tsx` — Add UserMenu (desktop + mobile)
- `CLAUDE.md` — Fix "Next.js 15" → "Next.js 16", add Turso + Auth.js to tech stack

## Route Protection Strategy (proxy.ts)

**Public (no auth check):** `/`, `/audit`, `/enough`, `/true-cost`, `/expectations`, `/board`, `/boundaries`, `/conversations`, `/templates`, `/login`, `/auth/*`, `/api/auth/*`, `/_next/*`, `/favicon.ico`

**Protected (redirect to /login):** `/onboarding`, `/training/*`, `/publish/*`, `/admin/*`, `/certification/*`, `/profile/*`

**Note:** `/board` stays public — it uses localStorage. Sprint 1b adds database sync for logged-in users without gating access.

## Auth Flow

1. User clicks "Sign in" → `/login`
2. Chooses Google OAuth or enters email for magic link
3. Google: OAuth flow → callback → Auth.js creates user record
4. Email: Resend sends magic link → `/auth/verify-request` → click link → Auth.js verifies
5. JWT callback checks: does `agent_profile` exist for this user?
   - No → set `needsOnboarding: true` in JWT → proxy redirects to `/onboarding`
   - Yes → set `agentProfileId` + `isAdmin` in JWT → proceed to requested page
6. Onboarding: fill name, slug, markets → server action creates agent_profile → update JWT → redirect to `/board`

## Access Control Pattern (Replacing RLS)

Every server action starts with an auth check. The ownership filter in WHERE clauses IS the access control:

```
requireAuth()    → returns session or redirects to /login
requireProfile() → returns session + agent_profile or redirects to /onboarding
requireAdmin()   → returns session + profile, throws if not is_admin
```

All queries include `WHERE agent_id = profile.id` — no query ever omits the ownership filter.

## Implementation Tasks (Ordered)

### Phase A: Foundation (database-engineer + api-engineer)

**Task 1: Database schema + Drizzle client** — database-engineer
- Create `data/migrations/001-initial-schema.sql`
- Create `src/lib/db/schema.ts` (Drizzle table definitions)
- Create `src/lib/db/client.ts` (libSQL + Drizzle singleton)
- Create `drizzle.config.ts`
- Create `.env.example`

**Task 2: Auth.js configuration** — api-engineer
- Create `src/lib/auth.ts` (NextAuth config with Google + Resend + DrizzleAdapter + JWT callbacks)
- Create `src/app/api/auth/[...nextauth]/route.ts`
- Create `src/lib/auth/require-auth.ts` (requireAuth, requireProfile, requireAdmin)
- Create `src/lib/auth/session-helpers.ts` (useCurrentUser client hook)

**Task 3: Route protection** — api-engineer
- Create `src/proxy.ts` (exported function named `proxy`, matcher for protected routes)

### Phase B: UI (frontend-designer)

**Task 4: Session provider + layout**
- Create `src/components/providers/SessionProvider.tsx`
- Update `src/app/layout.tsx` to wrap with provider

**Task 5: Login page**
- Create `src/app/login/page.tsx` + `src/components/auth/LoginForm.tsx`
- Editorial design: Newsreader headline, sharp corners, candid accent, no shadows

**Task 6: Auth callback pages**
- Create `src/app/auth/verify-request/page.tsx` ("Check your email")
- Create `src/app/auth/error/page.tsx`

**Task 7: Onboarding flow**
- Create `src/app/onboarding/page.tsx` + `src/components/auth/OnboardingForm.tsx`
- Server action creates agent_profile, updates JWT session

**Task 8: User menu in SiteHeader**
- Create `src/components/auth/UserMenu.tsx`
- Update `src/components/audit/SiteHeader.tsx` — desktop: menu right of nav; mobile: items in hamburger

### Phase C: Cleanup

**Task 9: Documentation**
- Update `CLAUDE.md` — fix Next.js version, add Turso/Auth.js to tech stack

## Verification

1. `npm run build` — compiles without errors
2. Google OAuth: click Sign In → Google flow → returns to app with session
3. Email magic link: enter email → check email → click link → logged in
4. First login: redirected to /onboarding → fill form → redirected to /board
5. Return login: skips onboarding, goes to requested page
6. User menu: shows name + dropdown with sign out
7. Protected route: visit /onboarding while logged out → redirected to /login
8. Public tools: all 8 tools remain accessible without login

## Not in Sprint 1a

- Board migration to database (Sprint 1b)
- Certification/training tables and UI (Sprint 2)
- Articles/publishing (Sprint 3)
- Agent profiles/directory (Sprint 4)
- Production deployment
