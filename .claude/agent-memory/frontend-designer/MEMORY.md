# Frontend Designer Memory - Candid Agent Tools

## Brand Overrides vs Harmon Defaults
- This project uses **sharp corners** (`rounded-none`) -- no border radius anywhere
- **No shadows, no gradients** -- flat editorial design
- These override the standard Harmon warm-modern defaults (rounded-xl, shadow-xs, etc.)
- The aesthetic is "editorial print magazine" not "modern SaaS dashboard"

## Color Tokens
- All defined in `src/app/globals.css` via `@theme` block
- Score zones: green (#4A7C59), amber (#C4913B), red (#C65D4A) -- muted earth tones, not traffic lights
- Brand accent is `candid` (#B8652A) burnt orange

## Typography
- Newsreader (serif) for headlines, weight 300 (light)
- Plus Jakarta Sans for UI/labels/buttons
- Labels pattern: `font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid`

## Component Architecture
- All audit components in `src/components/audit/`
- Question data in `src/lib/audit-questions.ts` (data-only, no UI)
- Scoring logic in `src/lib/scoring.ts` (pure functions)
- Wizard state in `AuditWizard.tsx` using useState/useCallback

## Scoring Weights
- Financial: 40%, Time: 35%, Client Load: 25%
- Zones: 70+ green, 40-69 amber, 0-39 red
