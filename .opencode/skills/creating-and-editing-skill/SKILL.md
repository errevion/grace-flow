---
name: creating-and-editing-skill
description: Use when creating, authoring, auditing, or refactoring an Agent Skill (SKILL.md) for OpenCode.
license: MIT
compatibility: opencode
metadata:
  scope: meta-agent
  category: workflow-authoring
---

# Creating & Editing Agent Skills (`creating-and-editing-skill`)

## Overview & Quick Reference

| Component | Target Location | Maximizing Agent Compliance |
| :--- | :--- | :--- |
| **Trigger Frontmatter** | `SKILL.md` (Top) | Single "Use when..." sentence focused on activation conditions. |
| **Quick Reference Map** | `SKILL.md` (Section 1) | Tables for fast pattern matching and tool routing. |
| **Decision Logic** | `SKILL.md` (Section 2) | Deterministic `IF / THEN` trees for workflow routing. |
| **Execution Sequence** | `SKILL.md` (Section 3) | Strict, ordered steps for execution. |
| **Hard Constraints** | `SKILL.md` (Section 4) | Explicit `MUST` / `NEVER` boundaries and gotchas. |
| **Deep Docs / Assets** | `references/`, `assets/` | Supplementary files offloaded to keep `SKILL.md` under 500 lines. |

---

## Decision Matrix: File Architecture

- **IF** the skill instructions fit in under 500 lines $\rightarrow$ Keep everything within `SKILL.md`.
- **IF** detailed background docs or schemas exceed 100 lines $\rightarrow$ Offload to `references/<topic>.md` and link dynamically.
- **IF** reusable code templates or boilerplate are required $\rightarrow$ Place in `assets/`.
- **IF** deterministic execution is required $\rightarrow$ Provide executable scripts in `scripts/` instead of asking the agent to generate them on the fly.

---

## Step-by-Step Skill Authoring Sequence

1. **Define Scope & Directory Structure**
   - Identify a single, focused operational domain.
   - Create directory structure:
     ```bash
     mkdir -p <skill-name>/{references,assets,scripts}
     ```

2. **Draft Trigger-Optimized Frontmatter**
   - Write a frontmatter block in `SKILL.md`.
   - The `description` field **MUST** state exact conditions when the skill should activate (e.g., `"Use when generating, refactoring, or reviewing..."`). Do not describe *how* it works in the description, only *when* to use it.

3. **Build Structural Reference Table**
   - Create a lookup table mapping core concepts, target paths, and allowed tool permissions.

4. **Implement Deterministic Decision Trees & Workflow**
   - Use `IF / THEN` clauses to resolve ambiguous operational choices.
   - Use numbered lists for execution steps where sequence order is critical.

5. **Establish Hard Boundaries & Negative Constraints**
   - Add a dedicated section with uppercase imperatives (`MUST`, `NEVER`, `STRICTLY FORBIDDEN`).
   - Define fallback behavior (what the agent **MUST** do if a tool or command fails).

6. **Refactor for Context Efficiency**
   - Run a token audit: Keep `SKILL.md` under 500 lines.
   - Move static reference material to `references/` files using progressive disclosure:
     > *"If complex edge case X occurs, read `references/edge-cases.md` before proceeding."*

---

## ⚠️ Mandatory Constraints & Wording Rules

- **NEVER** write broad, vague descriptions in frontmatter (e.g., ❌ *"This skill helps with database tasks."* $\rightarrow$ ✅ *"Use when writing, executing, or troubleshooting PostgreSQL migrations."*).
- **NEVER** use soft modal verbs like `should`, `prefer`, `try to`, or `ideally`.
- **MUST** use absolute imperatives: `MUST`, `ALWAYS`, `NEVER`, `EXCLUSIVELY`.
- **MUST** provide alternative redirection when forbidding an action (e.g., *"Do not edit files directly; output the code block in chat instead."*).
- **DO NOT** duplicate information between `SKILL.md` and linked `references/` files.