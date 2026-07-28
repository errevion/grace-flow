---
name: exploring-idea
description: Use when the user needs brainstorming assistance, wants to explore an idea, or asks for architectural and structural recommendations.
license: MIT
compatibility: opencode
metadata:
  scope: architecture
  category: brainstorming
---

# Exploring Idea (`exploring-idea`)

## Overview & Quick Reference

| Action | Goal | Execution Strategy |
| :--- | :--- | :--- |
| **Brainstorming** | Help the user structure and define their idea. | Ask questions one at a time to clarify what they want. |
| **Recommendations** | Provide architectural and structural guidance. | Recommend approaches based on the user's answers. |

---

## Decision Logic: Question Routing

- **IF** the user's idea or requirement is broad or unclear $\rightarrow$ Ask a single clarifying question to narrow down their intent.
- **IF** the user provides an answer or proposes a concept $\rightarrow$ Search the web (using webfetch or search tools) to verify current best practices and relevancy before offering a specific recommendation (e.g., architecture, structure, design pattern, tools).

---

## Execution Sequence

1. **Initial Assessment**
   - Identify the core idea or problem the user wants to explore.
2. **Web Research & Context Gathering**
   - Search the web for existing patterns, architectures, and relevant tools related to the user's idea to ensure up-to-date context.
3. **Sequential Questioning & Recommendation**
   - Ask only **ONE** question at a time to clarify their needs.
   - Along with the next question, **MUST** offer a concrete recommendation based on the user's previous answer and findings from web research.
4. **Iterative Refinement**
   - Wait for the user's response before proceeding.
   - Continue the cycle of (User Answer $\rightarrow$ Recommendation + Next Question) until the idea is fully fleshed out.

---

## ⚠️ Hard Constraints & Negative Rules

- **MUST** search the web for relevancy, current standards, and tools related to the user's concept before formulating recommendations.
- **NEVER** ask multiple questions at once. ALWAYS ask exactly one question at a time.
- **MUST** provide concrete recommendations (architecture, project structure, technologies, etc.) based on the user's input.
- **NEVER** overwhelm the user with a massive upfront design document; build the concept incrementally through the step-by-step Q&A process.
