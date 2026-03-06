# Identity Bible Audit: Candid Agent Tools Site

**Source:** All TSX/TS files under `projects/candid-agent-tools/src/`
**Reviewed:** 2026-03-05
**Reviewer:** content-reviewer agent
**Reference:** `/docs/author-identity-bible.md` (canonical source of truth)
**Verdict:** Needs revision -- 3 critical issues, 5 high issues, 4 medium issues

---

## Executive Summary

The site is in strong shape overall. The vast majority of content is philosophically aligned with the Identity Bible and maintains proper anonymity. However, three critical issues remain from the known issues list in Section 8 of the Bible -- all on the Expectations and Conversations pages. These involve the use of "Randy" (the real name that must never appear on any public platform), an incorrect pronoun ("their life" instead of "his life"), and a Bob story retelling that shifts from first-person to third-person in a way that implies knowledge of the client's identity. Additionally, several Bob story retellings across the Conversations page use generalized framing ("a family") that departs from the canonical facts in ways that need attention.

**Issue count by severity:**
- CRITICAL: 3
- HIGH: 5
- MEDIUM: 4
- LOW: 0

---

## Critical Issues

### CRITICAL-1: "Randy" appears in Expectations education callout

**File:** `src/lib/expectations/opening.ts` (line 10)
**Exact text:**
> `Bob didn't win Randy's business by being available 24/7. He won it by spending an hour asking about their life before showing a single listing.`

**Identity Bible rule violated:** Section 1 ("Never use: Randy in any public-facing content across any platform"), Section 7 ("Expectations page currently says 'Randy' -- NEEDS FIX"), Section 8 (Known Issues table, row 1 and row 2)

**Correct version:** Replace "Randy's business" with anonymous framing. Since the platform identity is "The Candid Agent" (anonymous), this should reference the story without naming anyone. Example:
> `Bob didn't win his client's business by being available 24/7. He won it by spending an hour asking about his client's life before showing a single listing.`

**Severity:** CRITICAL -- This is a privacy violation. The real name "Randy" must never appear on any public-facing platform.

---

### CRITICAL-2: "Randy" appears in Conversations discovery category description

**File:** `src/lib/conversations/discovery.ts` (line 8)
**Exact text:**
> `Bob spent an hour asking about Randy's life before showing a single listing. He asked about family, goals, fears, and dreams. Then he pulled out an adding machine tape and showed what different price points would mean for their monthly life. That is the Bob Method -- putting the person before the property.`

**Identity Bible rule violated:** Section 1 ("Never use: Randy in any public-facing content across any platform"), Section 6 (Cross-Platform Rules: "Never use 'Randy' in any public content")

**Correct version:** Remove "Randy's" and use anonymous framing:
> `Bob spent an hour asking about his client's life before showing a single listing. He asked about family, goals, fears, and dreams. Then he pulled out an adding machine tape and showed what different price points would mean for the client's monthly life. That is the Bob Method -- putting the person before the property.`

**Severity:** CRITICAL -- Same privacy violation as CRITICAL-1.

---

### CRITICAL-3: "their life" pronoun error in Expectations education callout

**File:** `src/lib/expectations/opening.ts` (line 10)
**Exact text:**
> `He won it by spending an hour asking about their life before showing a single listing.`

**Identity Bible rule violated:** Section 1 ("Pronouns: he/him -- never use 'their' or 'they' when referring to JR individually"), Section 3 Embellishment Watch ("Bob asked about JR's life -- not 'their' life"), Section 8 (Known Issues table, row 3)

**What the correct version should be:** Since the name must also be anonymized (see CRITICAL-1), the combined fix would use "his client's life" -- or if framed from the anonymous author's perspective: "my life." However, given that this platform is anonymous and cannot use first person for JR's story, "his client's life" is the correct anonymous third-person form.

**Severity:** CRITICAL -- This is a known issue explicitly flagged in the Identity Bible.

---

## High Issues

### HIGH-1: Bob story retelling shifts to "a family" -- departs from canonical facts

**File:** `src/components/conversations/ConversationsLanding.tsx` (lines 16-19)
**Exact text:**
> `Bob spent an hour asking about a family's life before ever showing a listing. He pulled out an adding machine tape and showed what different price points would mean for their monthly budget. He steered them toward spending less than they qualified for.`

**Identity Bible rule violated:** Section 3 (Bob Story canonical facts: JR was single in 1998, not a family), Section 3 Embellishment Watch ("The hour is accurate"), Section 6 ("Never let narrative effect override factual accuracy")

**What is wrong:** The canonical story is about a single person (JR), not a family. JR was single, a database developer in Wilmington. The text says "a family's life" and "steered them toward spending less" -- both imply a couple or family. This is an embellishment that changes a core fact. Additionally, "He steered them toward spending less" violates the principle that Bob SHOWED, never TOLD/steered. Per the Bible: "Bob did NOT tell JR he couldn't afford $250K -- he showed JR what it would cost and let JR see it himself. No pressure, no judgment."

**Correct version:**
> `Bob spent an hour asking about his client's life before ever showing a listing. He pulled out a printing calculator and showed what different price points would mean for his client's monthly budget. He showed the numbers and let the client see the truth for himself.`

**Severity:** HIGH -- Factual inaccuracy (single person presented as family) and violation of the "Bob showed, never told" principle.

---

### HIGH-2: Bob story says "steered" -- Bob showed, never told

**File:** `src/components/conversations/ConversationsLanding.tsx` (line 19)
**Exact text:**
> `He steered them toward spending less than they qualified for.`

**Identity Bible rule violated:** Section 3 (Embellishment watch: "Bob did NOT tell JR he couldn't afford $250K -- he showed JR what it would cost and let JR see it himself"), Section 6 ("Bob showed, he didn't told -- the approach was never pressure or judgment"), Section 6 ("Never: Say Bob 'told JR he couldn't afford it' -- Bob showed JR the numbers and let him see for himself")

**What is wrong:** "Steered" implies active direction/pressure. The canonical story is that Bob ran the numbers and let JR see the reality himself. The distinction between showing and steering is core to the Bob Method.

**Correct version:** Replace "steered" with language that reflects Bob's actual approach of letting the client see the truth through the numbers.

**Severity:** HIGH -- Directly contradicts a core principle of the Bob story.

---

### HIGH-3: Discovery description also uses "their monthly life" (pronoun + family framing)

**File:** `src/lib/conversations/discovery.ts` (line 8)
**Exact text:**
> `Then he pulled out an adding machine tape and showed what different price points would mean for their monthly life.`

**Identity Bible rule violated:** Section 1 (pronouns), Section 3 (canonical facts -- JR was single)

**What is wrong:** "Their" is incorrect -- JR was a single person. This also appears in a paragraph that already uses "Randy" (see CRITICAL-2), compounding the issue. The pronoun should be "his" if referring to JR, or "his client's" in anonymous framing.

**Severity:** HIGH -- Pronoun error combined with factual inaccuracy about JR being single.

---

### HIGH-4: Budget category description says "showed the family" -- JR was single

**File:** `src/lib/conversations/budget.ts` (line 8)
**Exact text:**
> `Bob pulled out an adding machine tape and showed the family what different price points meant for their monthly life. He was not selling a house -- he was protecting a family.`

**Identity Bible rule violated:** Section 3 (Canonical facts: JR was single in 1998, not a family)

**What is wrong:** "The family" and "protecting a family" are factually wrong. The canonical Bob story involves a single man (JR). The text says "family" twice. This is a significant embellishment -- it changes the emotional resonance of the story in a way that is not factually accurate.

**Correct version:**
> `Bob pulled out a printing calculator and showed his client what different price points meant for his monthly life. He was not selling a house -- he was protecting his client's future.`

**Note:** Even if the site wants to generalize Bob's approach for agent audiences, the direct retelling must match the canonical version. The generalized application (agents should do this for families too) is fine, but the story itself must be accurate.

**Severity:** HIGH -- Repeated factual inaccuracy about a canonical story.

---

### HIGH-5: "adding machine tape" should be "printing calculator" (minor factual accuracy)

**Files:** `src/lib/conversations/discovery.ts` (line 8), `src/lib/conversations/budget.ts` (line 8), `src/components/conversations/ConversationsLanding.tsx` (line 17)

**Exact text (all three):**
> `adding machine tape`

**Identity Bible rule violated:** Section 3 (Canonical facts: "Bob used a printing calculator with paper tape")

**What is correct:** The canonical term is "printing calculator with paper tape" -- not "adding machine tape." An adding machine and a printing calculator are essentially the same thing, so this is a minor accuracy issue. However, the Bible uses "printing calculator" specifically, and since the content-reviewer's job is to flag departures from the canonical version, this should be noted.

**Correct version:** Use "printing calculator" to match the canonical language.

**Severity:** HIGH -- The Identity Bible Section 3 Embellishment Watch says "Any retelling of this story on any platform must be checked against this table." The canonical term is "printing calculator with paper tape."

---

## Medium Issues

### MEDIUM-1: Generic Bob retellings generalize beyond canonical scope

**Files:** Multiple files in `src/lib/conversations/` and `src/lib/expectations/`
**Pattern:** The Bob story is used as a general teaching framework ("The Bob Method") across the Expectations and Conversations tools, with phrases like "Start the relationship the way Bob did" and "The Bob Method."

**Identity Bible context:** The Bible does not prohibit using Bob as a teaching framework -- in fact, the tools site exists to package "The Bob Method" for agents. However, Section 3 says "Any retelling of this story on any platform must be checked against this table."

**Assessment:** The use of "The Bob Method" as a framework label is appropriate. The issue is specifically when the Bob story is directly retold (as in CRITICAL-1/2 and HIGH-1/2/3/4) and those retellings depart from canonical facts. The framework references ("Start the relationship the way Bob did -- with the client's life, not the listing sheet" on the Expectations page hero at line 33 of `src/app/expectations/page.tsx`) are fine because they describe the approach without retelling the story.

**Recommendation:** No changes needed for framework references. Only the direct retellings flagged above need correction.

**Severity:** MEDIUM -- Informational. The boundary between "framework reference" and "retelling" should be kept clear.

---

### MEDIUM-2: Expectations page hero references Bob without context

**File:** `src/app/expectations/page.tsx` (lines 31-34)
**Exact text:**
> `Start the relationship the way Bob did -- with the client's life, not the listing sheet.`

**Identity Bible context:** This is a framework reference, not a retelling, so it does not violate the retelling accuracy rules. However, for someone unfamiliar with the consumer site, "Bob" appears without introduction. On the tools site (agent-facing), agents may not know who Bob is.

**Assessment:** The consumer site tells the Bob story in full. The tools site references it as a known concept. If the tools site is intended to be standalone, some context may be helpful. If it is always accessed by agents who have read the consumer site, this is fine.

**Severity:** MEDIUM -- Context/UX consideration, not a Bible violation.

---

### MEDIUM-3: "We" voice in several places -- who is "we"?

**Files:** Multiple
- `src/components/home/HomeClosingCta.tsx` line 20: "What We Believe"
- `src/components/landing/ManifestoSection.tsx` line 7: "What We Believe"
- `src/components/landing/PhilosophySection.tsx` line 23: "We measure it in margin."
- `src/components/landing/ManifestoSection.tsx` line 37: "We do not collect your information. We do not track your usage. We do not know who you are"
- `src/components/home/HomeClosingCta.tsx` line 33: "We have nothing to sell you -- and we like it that way."

**Identity Bible context:** Section 1 says the author identity for Candid Agent Tools is "The Candid Agent" (anonymous, "the platform IS the author"). Using "we" is consistent with a platform voice. The Bible does not prohibit "we" for this platform.

**Assessment:** The "we" voice is consistent and intentional -- it represents the platform, not a specific person. This is appropriate for an agent-facing tools site. No change needed, but noting it for completeness.

**Severity:** MEDIUM -- No violation. Documented for awareness.

---

### MEDIUM-4: Enough Calculator uses "Joseph Reserve" without explanation

**File:** `src/components/enough/EnoughResults.tsx` (lines 81-82)
**Exact text:**
> `Joseph Reserve (+20%)`
> `Build reserves during good seasons so lean seasons are not crises.`

**Identity Bible context:** The Identity Bible does not mention "Joseph Reserve" for the Candid Agent Tools platform. "Joseph Principle" is noted in the Bible as a Storehouse feature name (Section 7: "Joseph Principle is the specific feature name"). The Bible does not address whether this terminology should appear on the tools site.

**Assessment:** The biblical reference (Joseph storing grain during plenty) is subtle enough for this platform, and the description ("Build reserves during good seasons") provides sufficient context without requiring biblical knowledge. Per the Bible's faith visibility table, Candid Agent Tools should have "Minimal/indirect" faith -- "faith shows through values, not language." "Joseph Reserve" is borderline -- it is a name that a non-religious person might not recognize, but also might not flag as religious.

**Recommendation:** This is a judgment call for Randy. The name could be changed to something like "Lean Season Buffer" for fully neutral language, or kept as-is if Randy wants the subtle faith thread. Either is defensible under the Bible's guidelines.

**Severity:** MEDIUM -- Judgment call on faith visibility level for this platform.

---

## Cross-File Consistency: Bob Story Retellings

The Bob story appears in four places across the tools site. Here is how each compares to the canonical version:

| Location | File | Who is the client? | What did Bob use? | What did Bob do? | Accuracy |
|----------|------|-------------------|-------------------|------------------|----------|
| Expectations callout | `expectations/opening.ts:10` | "Randy" (WRONG) | Not mentioned | "won it by spending an hour asking about their life" (WRONG pronoun) | FAILS -- name leak + pronoun |
| Conversations landing | `ConversationsLanding.tsx:16-19` | "a family" (WRONG -- JR was single) | "adding machine tape" (MINOR) | "steered them toward spending less" (WRONG -- Bob showed, not steered) | FAILS -- family, steered, instrument |
| Discovery description | `conversations/discovery.ts:8` | "Randy" (WRONG) | "adding machine tape" (MINOR) | "showed what different price points would mean for their monthly life" (showed = CORRECT, but pronoun WRONG) | FAILS -- name leak, pronoun, instrument |
| Budget description | `conversations/budget.ts:8` | "the family" (WRONG) | "adding machine tape" (MINOR) | "showed the family" (showed = CORRECT, family = WRONG) | PARTIALLY FAILS -- family, instrument |

**Canonical version summary (for comparison):**
- Client: JR, a single database developer
- Instrument: Printing calculator with paper tape
- Approach: Bob showed (never told, steered, or pressured)
- Duration: Approximately one hour
- Pronoun: his (not their)

---

## Clean Files (no issues found)

The following pages and components passed review with no Identity Bible violations:

**Pages:** `page.tsx` (home), `landing/page.tsx`, `boundaries/page.tsx`, `audit/page.tsx`, `true-cost/page.tsx`, `templates/page.tsx`, `enough/page.tsx`, `board/page.tsx`, `layout.tsx`

**Components:** All `home/` components, all `landing/` components, all `audit/` components, all `boundaries/` components, all `templates/` components, all `enough/` components (except MEDIUM-4), all `board/` components, all `true-cost/` components, `shared/PullQuote.tsx`, `shared/FullWidthTool.tsx`

**Data files:** `tool-data.ts`, `audit-questions.ts`, `scoring.ts`, `boundaries-config.ts`, `template-generator.ts`, `enough-calculator.ts`, `true-cost-calculator.ts`, all `templates/*.ts` files, `conversations/budget.ts` (HIGH-4 only), `conversations/hard-truths.ts`, `conversations/true-cost.ts`, `conversations/post-close.ts`

**Expectations data files:** `framework.ts`, `commitment.ts`, `protection.ts`, `pushback.ts` -- all clean

---

## Summary of Required Changes

### Must fix (3 files, 4 instances of "Randy", 1 pronoun, 2 "family" errors, 1 "steered"):

| # | File | Line | What to Change | Priority |
|---|------|------|----------------|----------|
| 1 | `src/lib/expectations/opening.ts` | 10 | Remove "Randy's" -- use anonymous reference | CRITICAL |
| 2 | `src/lib/expectations/opening.ts` | 10 | Change "their life" to "his client's life" | CRITICAL |
| 3 | `src/lib/conversations/discovery.ts` | 8 | Remove "Randy's" -- use anonymous reference | CRITICAL |
| 4 | `src/lib/conversations/discovery.ts` | 8 | Change "their monthly life" to "his client's monthly life" | HIGH |
| 5 | `src/components/conversations/ConversationsLanding.tsx` | 16 | Change "a family's life" to "his client's life" | HIGH |
| 6 | `src/components/conversations/ConversationsLanding.tsx` | 19 | Change "steered them" to "showed him" / "let him see" | HIGH |
| 7 | `src/lib/conversations/budget.ts` | 8 | Change "the family" (x2) to "his client" / "his client's future" | HIGH |
| 8 | `src/lib/conversations/discovery.ts` | 8 | Change "adding machine tape" to "printing calculator" | HIGH |
| 9 | `src/lib/conversations/budget.ts` | 8 | Change "adding machine tape" to "printing calculator" | HIGH |
| 10 | `src/components/conversations/ConversationsLanding.tsx` | 17 | Change "adding machine tape" to "printing calculator" | HIGH |
