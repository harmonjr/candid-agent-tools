# Candid Agent Tools

Agent-facing platform for The Candid Agent ecosystem. Lives at `agents.thecandidagent.com`.

## Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (subdomain of thecandidagent.com)

## Brand Design System

This is a sibling site to thecandidagent.com. It must feel like the same brand while being a dynamic app rather than an editorial site.

### Color Palette (from the editorial site)
| Token | Hex | Usage |
|-------|-----|-------|
| cream | #FDFBF7 | Primary light background |
| cream-alt | #EDE8DE | Secondary background, cards |
| ink | #2C2825 | Primary text, dark sections |
| ink-muted | #6B635B | Secondary text |
| candid | #B8652A | Brand accent (burnt orange) |
| accent | #8B5A2B | Links, CTA hover |
| accent-hover | #6B4423 | Darker accent on hover |
| border | #E5DFD5 | Light borders, dividers |
| highlight | #FEF3E2 | Highlight backgrounds |

### Typography
- **Serif:** Newsreader (headlines, editorial text) -- weight 300 for headlines
- **Sans:** Plus Jakarta Sans (UI, labels, buttons, inputs)
- Headlines are large, light-weight serif. Labels are small, semibold, uppercase, tracked-out sans-serif in candid color.

### Key Patterns
- Sharp corners (rounded-none) -- no border radius on buttons/inputs
- Flat design (no shadows, no gradients)
- Warm earth tones, no blue anywhere
- Generous whitespace
- `border-t-2 border-candid` accent borders on cards
- Subtle paper-grain noise texture on backgrounds

## Architecture
- `/src/app/` -- Next.js App Router pages
- `/src/components/` -- Shared UI components
- `/src/lib/` -- Utilities and helpers

## Rules
- No auth required for free tools (Margin Practice Audit)
- Tools are client-side first (no backend until needed)
- Must set `turbopack.root` in next.config.ts (nested in hub)
