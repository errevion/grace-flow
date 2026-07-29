---
name: editing-agents-md
description: Use when creating, editing, refactoring, or reviewing AGENTS.md or project-specific developer guidelines.
license: MIT
compatibility: opencode
metadata:
  scope: meta-agent
  category: workflow-authoring
---

# Editing and Maintaining AGENTS.md (`editing-agents-md`)

## Overview & Quick Reference

This skill ensures `AGENTS.md` files comply with OpenCode system prompt standards.

| Component | Guideline | Required Format |
| :--- | :--- | :--- |
| **Length** | Extremely concise | 20-30 lines preferred; max 50 lines. |
| **Tone** | Actionable & Imperative | Use absolute verbs: `MUST`, `ALWAYS`, `NEVER`. |
| **Structure** | Standard headings | Commands, Style, Architecture, Dependencies, Rules. |
| **Examples** | Practical snippet | Short inline code blocks showing expected pattern. |

---

## Decision Matrix: File Placement

- **IF** the guidelines are global across all repositories $\rightarrow$ Keep in `~/.opencode/AGENTS.md`.
- **IF** the guidelines are specific to the current project/workspace $\rightarrow$ Put in root `AGENTS.md`.
- **IF** the rules only apply to a subpackage/subdirectory $\rightarrow$ Put in `path/to/subfolder/AGENTS.md` (inherits and overrides root).

---

## Step-by-Step AGENTS.md Editing Sequence

1. **Verify Length**
   - Check line count of existing file. Keep under 50 lines. Move verbose reference text to markdown files in `docs/` and link them.

2. **Standardize Sections**
   - Organize instructions under standard headings:
     - `## Build/Test Commands`
     - `## Code Style`
     - `## Architecture`
     - `## Key Dependencies`
     - `## Strict Rules`

3. **Convert to Actionable Rules**
   - Rewrite weak modal verbs:
     - ❌ *Try to avoid any type.* $\rightarrow$ ✅ *NEVER use any type.*
     - ❌ *It would be nice if you write tests.* $\rightarrow$ ✅ *ALWAYS write tests for new functions.*

4. **Add Standard Code Examples**
   - Ensure key/complex patterns have a brief code block demonstrating implementation.

---

## ⚠️ Mandatory Constraints & Wording Rules

- **NEVER** use soft modal verbs like `should`, `prefer`, `try to`, or `ideally`.
- **MUST** use absolute imperatives: `MUST`, `ALWAYS`, `NEVER`, `EXCLUSIVELY`.
- **DO NOT** write verbose introductions, historical context, or general development philosophy. Keep it strictly technical and actionable.
- **DO NOT** duplicate global skill triggers/rules; only document project-specific constraints.
