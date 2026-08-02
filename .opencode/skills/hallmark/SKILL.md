---
name: hallmark
description: "Anti-AI-slop design skill for greenfield pages, audits, redesigns, and design extraction from URLs or screenshots. Use when the user asks to build a new app or landing page, wants to redesign something, invokes Hallmark by name, or uses audit/redesign/study."
license: MIT
compatibility: opencode
metadata:
  scope: ui-design
  category: design
---

# Anti-AI-Slop Design Skill (`hallmark`)

## Overview & Quick Reference

Hallmark encodes rules drawn from anti-AI-slop design consensus (Anthropic's frontend-design skill, Claude cookbook on frontend aesthetics, 2026 "tactile rebellion" movement). It insists on **structural variety** — two pages for two briefs MUST feel like different sites, not colour-swaps of the same template. See [`references/structure.md`](references/structure.md).

| Invocation | Goal | Key References | Steps |
| :--- | :--- | :--- | :--- |
| *(default)* | Build something new — full Design flow | `macrostructures.md`, `component-cookbook.md`, genre files | Steps 0–7 |
| `hallmark audit <target>` | Score target against anti-pattern list, return punch list. **No edits.** | `verbs/audit.md` | Load verb file |
| `hallmark redesign <target>` | Redesign visual structure inside existing implementation boundaries | `verbs/redesign.md` | Load verb file |
| `hallmark study <screenshot \| URL>` | Extract DNA (macrostructure, archetypes, type-pairing, colour anchor) from reference | `study.md` | Load study file |

---

## Decision Logic: Workflow Routing

- **IF** input does not clearly map to `audit`, `redesign`, or `study` → treat as **default** (Design flow).
- **IF** user attaches image or pastes URL without verb prefix → ASK: *"Should I `study` this (extract the DNA), or treat it as a reference for a fresh build?"*
- **IF** brief names a single UI element (button, input, card, modal, etc.) AND brief is ≤ 30 words or targets a single component file → route to **Component-scope flow** (see below).
- **IF** two component-scope signals fire → route component. **IF** only page signals fire → stay in Design flow.
- **IF** ambiguous between component and page → ASK: *"One [element], or the whole [element] page?"* Default to **component** on silence.
- **IF** `audit`, `study`, or `redesign --mood` → skip the Design-context gate (Step 1). Those verbs read context from the target.
- **IF** `design.md` / `DESIGN.md` found at project root → this is a system-managed project. Skip catalog/custom dispatch; defer to locked design system.

---

## Execution Sequence

### Step 0: Pre-flight Scan

1. **IF** project has code (`package.json`, `tailwind.config.*`, `index.html`, any CSS) → read BEFORE asking user anything.
2. Scan six signal sources in order: `design.md` → font stack → palette → microinteraction stance → spacing scale → framework.
3. Emit pre-flight findings block with file:line citations.
4. Write findings to `.hallmark/preflight.json`. Re-use cache unless user says "refresh pre-flight" or config mtimes are newer.

| Signal | Where to Look |
| :--- | :--- |
| Font stack | `package.json` (`next/font`, `@fontsource/*`, `geist`), Google Fonts `<link>`, `tailwind.config` `fontFamily` |
| Palette | `:root` OKLCH/HSL/hex, `tailwind.config` `colors`, `tokens.json`, DTCG files |
| Motion stance | `framer-motion`, `gsap`, `motion`, `lenis`, `lottie-react`, `@react-spring/*`, `auto-animate` in deps |
| Spacing | Tailwind `spacing`, CSS `--space-*` pattern, 4-pt / 8-pt scale |
| Framework | `next`, `astro`, `vue`, `svelte`, `@remix-run/*`, or vanilla HTML |

- **IF** `design.md` found → emit notice, read in full, use as source of truth. Skip Step 1 catalog/custom dispatch.
- **IF** no signals found → emit: *"No pre-flight signals — proceeding with full Hallmark stack."*
- **IF** conflicting signals → flag conflict explicitly with file:line references.
- **IF** user said "ignore the existing project" → skip pre-flight entirely.

### Step 1: Design-Context Gate

1. **ALWAYS** ask three questions (Audience, Use case, Tone) before designing — even on short briefs.
2. Send prompt **once**, in one message. Bold the three labels.
3. **IF** user opts out ("go ahead", "you pick", "skip") → infer from brief/domain/context. State inferences in one sentence.
4. Pick **genre** before themes: editorial (default) · modern-minimal · atmospheric · playful. Load ONLY the picked genre file from `references/genres/`.
5. Detect **theme route** signal: catalog (default, 20 named themes) vs custom (only when brief carries creative-intent signal). See [`references/custom-theme.md`](references/custom-theme.md).
6. **IF** no custom signal fires → proceed with catalog silently. NEVER mention the fork.

### Step 2: Macrostructure Pick

1. Read slim index at [`references/macrostructures.md`](references/macrostructures.md). Pick ONE name.
2. Load ONLY `references/macrostructures/<NN-slug>.md` for that pick. NEVER load more than one per-macro file.
3. **Diversification rule (mandatory):** Check existing `/* Hallmark · macrostructure: */` stamps and `.hallmark/log.json`. Pick MUST differ from last 3 macrostructures.
4. **Theme-diversification rule:** Consecutive themes MUST differ on ≥1 of: paper band (dark/mid/light), display style, accent hue.
5. Pick nav archetype (N1a–N13) and footer archetype (Ft1–Ft8) from [`references/component-cookbook.md`](references/component-cookbook.md). Default AWAY from N1a and Ft3.
6. State picks in plain text: *"Macrostructure: X. Nav: Y. Footer: Z. Theme: W. Differs from last on: [axes]."*

### Step 2.5: Project Memory

1. **IF** `.hallmark/log.json` exists → read it. Use last 3–5 entries for diversification.
2. State rotation in plain text before picking.
3. **IF** no `log.json` → first run, no constraint. File created at Step 6.

### Step 2.6: Theme Route Dispatch

1. **IF** study diagnosis exists and user says "build with this DNA" → **studied-DNA** route. Skip catalog/custom.
2. **IF** user confirmed custom → load [`references/custom-theme.md`](references/custom-theme.md). Two depths: tuned (palette + fonts) or bespoke (palette + fonts + structure).
3. **IF** user confirmed catalog or silence → pick from 20 named themes per diversification rule.
4. **IF** neither discussed → default to **catalog** silently.

### Step 3: Load Visual Ruleset

Load references with discipline — over-eager loading is the largest avoidable cost.

| Load Category | Files | When |
| :--- | :--- | :--- |
| **Always-load** | Genre file (picked in Step 1), theme spec file (if exists) | Every build |
| **Index-then-pick** | `macrostructures.md` (index → one per-macro file), `component-cookbook.md` (index → 5-7 archetype files) | Every build |
| **Per-build universal** | `typography.md`, `color.md`, `layout-and-space.md`, `motion.md`, `copy.md`, `anti-patterns.md` | Every build |
| **Conditional** | `microinteractions.md`, `interaction-and-states.md`, `responsive.md`, `structure.md`, `hero-enrichment.md`, `custom-craft.md`, `assets.md`, `custom-theme.md`, `design-md.md`, `preview-examples.md` | Only when page needs it |
| **End-only** | `slop-test.md` (Step 7 only), `contract.md` (handoff), `export-formats.md` (if `design.md` project) | NEVER pre-load |
| **Verb-specific** | `verbs/audit.md`, `verbs/redesign.md`, `study.md` | Only when that verb runs |

### Step 4: Hero Enrichment

1. Default is **typography-only**. NEVER auto-load `hero-enrichment.md`.
2. **IF** brief signals imagery need → run image-need table at `hero-enrichment.md`.
3. State decision in one sentence: *"Enrichment: E1 Clipped-Edge Demo Video, Tier-A."* or *"Enrichment: none — typography only."*
4. Enrichment hierarchy (non-negotiable): typography only → Tier A CSS art → Tier B hand-built SVG → Tier C generated still → Tier D library → Tier E Lottie (last resort).

### Step 5: Preview

1. Emit tight summary BEFORE any code. Six required bullets:
   - **Macrostructure** — named pick
   - **Theme** — name + one-line palette summary
   - **Enrichment** — archetype + tier, or *none*
   - **Sections** — section names in DOM order, separated by ` · `
   - **Motion** — primitives (≤ 3), or *none*
   - **Slop test** — `58 / 58 ✓` or `N / 58 — fails: <gates>`
2. Add CTA line: *"System portable? Say `lock the system` to extract into a `design.md`."* (Skip if component-scope or `design.md` exists.)
3. **IF** slop-test gate fails at Step 7 → fix and re-emit preview with corrected row.

### Step 6: Build

1. Emit code matching tone and structural fingerprint.
2. **ALWAYS:** Use OKLCH for every colour. Declare tokens as CSS custom properties at `:root`.
3. **ALWAYS:** Use 4pt spacing scale with semantic names.
4. **ALWAYS:** Pick distinctive display face + refined body face pairing.
5. **ALWAYS:** Design every interactive element for 8 states (default, hover, focus-visible, active, disabled, loading, error, success).
6. **ALWAYS:** Animate `transform` and `opacity` only. Support `prefers-reduced-motion: reduce`.
7. **ALWAYS:** Include `:focus-visible` with visible ring at ≥3:1 contrast. NEVER animate ring appearance.
8. **ALWAYS:** Stamp output as first line of CSS: `/* Hallmark · macrostructure: <name> · tone: <tone> · anchor hue: <hue> */`
9. **ALWAYS:** Append to `.hallmark/log.json` (create if missing, trim to last 20 entries).
10. **ALWAYS:** Emit `tokens.css` at project root with all token declarations.
11. **NEVER** clobber existing global stylesheet — append-only. Keep `@tailwind` / `@import` directives.
12. Hero headline: ≤ 7 words, ≤ 50 chars. Apply size-by-length brackets from `typography.md`.
13. Section tags/eyebrows: default **OFF**. Emit ONLY if user explicitly asked or macrostructure requires it. Tag-left / heading-right two-column pattern is **banned** (slop-test gate 54).

### Step 7: Slop Test

1. Load [`references/slop-test.md`](references/slop-test.md) at this step — NEVER earlier.
2. Run output through 58-gate slop test. Every answer MUST be **no**.
3. **IF** any gate fails → fix, then re-emit preview block with corrected slop-test row. NEVER ship slop.

---

## Component-Scope Flow

**IF** brief names a single UI element AND ≤ 30 words or targets single component file → use this flow instead of full Design flow.

**Keeps from page flow:** Step 0 (pre-flight), Step 1 (genre), Step 2.6 (theme route), 2+1 font discipline, 8-state discipline (STRICTER — all 8 states mandatory).

**Skips:** Macrostructure pick, nav/footer archetypes, hero polish (HP1–HP4), enrichment, multi-section preview, project-memory append.

**Emits two files:**
1. Component artifact — single self-contained file matching project conventions, consuming Hallmark tokens by name.
2. 8-state demo wrapper — `<ComponentName>.preview.html` showing all 8 states stacked vertically, each labelled.

**Stamp format:** `/* Hallmark · component: <type> · genre: <genre> · theme: <theme> · states: default · hover · focus · active · disabled · loading · error · success · contrast: pass (46–50) */`

---

## Verb: `audit`

Load [`references/verbs/audit.md`](references/verbs/audit.md) and follow it.

---

## Verb: `redesign`

Load [`references/verbs/redesign.md`](references/verbs/redesign.md) and follow it.

---

## Verb: `study`

1. Load [`references/study.md`](references/study.md) BEFORE invoking. NEVER work from intuition.
2. Source-mode detection: `http://` or `https://` → URL mode. Otherwise → image mode.
3. Pipeline: refuse-or-proceed check → extraction pass → diagnosis report → confirmation question → branch on response.
4. **IF** "build with DNA" → run build step, stamp with `studied: yes`.
5. **IF** "lock the DNA" → emit `design.md`. URL mode: run attestation step first.
6. **IF** silence → stop at diagnosis.
7. NEVER copy pixels. ALWAYS name limits (font ID unreliable in image mode, no imagery copying, rhythm is URL-mode blind spot).

---

## ⚠️ Hard Constraints & Negative Rules

### Implementation Safety
- **NEVER** delete production files, route trees, component directories, or old website unless user explicitly asks or approves file-level plan listing deletions.
- **ALWAYS** default to in-place edits or additive new components. **IF** redesign requires removing multiple components → STOP and ask confirmation.
- **NEVER** copy PDFs, README files, `.md` briefs, docs, transcripts, or pitch decks word-for-word unless user explicitly says to use that text verbatim.
- **ALWAYS** state exact files to modify/create/delete before editing. Deletions ALWAYS require explicit confirmation.

### Universal Disciplines
- **ALWAYS** run pre-emit self-critique (score 1–5 on Philosophy, Hierarchy, Execution, Specificity, Restraint, Variety). Anything < 3 triggers revision. Stamp scores: `/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V5 */`. See `references/slop-test.md`.
- **NEVER** fabricate metrics, testimonials, logos, or case-study counts. Use real numbers, placeholder (`—`), or different macrostructure.
- **ALWAYS** reference named tokens (`var(--color-accent)`, `var(--font-display)`). NEVER use inline OKLCH/hex/rgb values or `font-family` bypassing token block.
- **NEVER** hand-build fake browser bars, phone frames, fake code-block windows, or fake IDE chrome. Use real screenshots in `<figure>` or omit.
- **ALWAYS** verify mobile responsiveness at 320 / 375 / 414 / 768 px: no horizontal scroll, no two-line clickable text, `minmax(0, 1fr)` on image tracks, `overflow-wrap: anywhere; min-width: 0` on display headers, one-column section heads on mobile.
- **NEVER** use italic on headings or display type. Emphasis via weight, accent colour, or drawn underline only. Italic ONLY in body-copy emphasis.

### Loading Discipline
- **NEVER** pre-load `slop-test.md` before Step 7.
- **NEVER** load more than one per-macro file from `references/macrostructures/` per build.
- **NEVER** load the whole component cookbook end-to-end — pick 5-7 archetype files only.

---

## Output Format

### CSS Stamp (first line of produced CSS)
```css
/* Hallmark · macrostructure: <name> · tone: <tone> · anchor hue: <hue> */
```

### Project Memory (`.hallmark/log.json`)
```json
[
  { "date": "<YYYY-MM-DD>", "macrostructure": "<name>", "theme": "<name>", "enrichment": "<E# name or 'none'>", "brief": "<one-line summary>" }
]
```

### Preview Block (Step 5 — Markdown bullets)
```
**Hallmark**
- **Macrostructure** · <name>
- **Theme** · <name> (<palette summary>)
- **Enrichment** · <archetype + tier> or none
- **Sections** · <names separated by · in DOM order>
- **Motion** · <primitives> or none
- **Slop test** · 58 / 58 ✓
```

### Output Contract & Scope
Load [`references/contract.md`](references/contract.md) at handoff time for full output contract and scope-of-skill rules.
