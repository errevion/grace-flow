---
name: grill-me
description: Use when the user asks to stress-test a plan, get grilled on their design, or explicitly says "grill me".
license: MIT
compatibility: opencode
metadata:
  scope: productivity
  category: feedback-loop
---

# Grill Me (`grill-me`)

## Overview & Quick Reference

| Action | Goal | Execution Strategy |
| :--- | :--- | :--- |
| **Stress-test plan/design** | Probe assumptions and dependencies | Ask questions one at a time, providing a recommended answer. |
| **Codebase Exploration** | Resolve queries via code first | Check codebase before asking questions. |

---

## Decision Logic: Question Routing

- **IF** a question can be answered by exploring the codebase $\rightarrow$ Search the codebase (using `grep`, `glob`, or `read`) and answer it yourself.
- **IF** a question depends on user intent, business requirements, or design trade-offs $\rightarrow$ Ask the user the question.

---

## Execution Sequence

1. **Scan Context & Codebase**
   - Check the codebase for existing references to the components or design elements mentioned in the plan.
2. **Formulate Recommendation-Guided Questions**
   - Ask only ONE question at a time.
   - For every question asked, MUST provide your own recommended/proposed answer as a starting point.
3. **Step-by-step Branch Resolution**
   - Resolve dependencies between decisions one-by-one.
   - Wait for the user's response before asking the next question.

---

## ⚠️ Hard Constraints & Negative Rules

- **NEVER** ask multiple questions at once. ALWAYS ask exactly one question at a time.
- **NEVER** ask a question that can be answered by looking at the codebase. MUST explore the codebase first.
- **MUST** provide a recommended answer with every question you ask the user.
