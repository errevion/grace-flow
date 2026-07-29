---
name: design-md
description: Use when analyzing a codebase, website, or UI project to synthesize a semantic design system into a DESIGN.md file.
license: MIT
compatibility: opencode
metadata:
  scope: design-system
  category: documentation
---

# Semantic DESIGN.md Skill (`design-md`)

## Overview & Quick Reference

This skill facilitates the analysis of web, app, or generalized UI projects, translating technical code, CSS, Tailwind classes, and theme configurations into a semantic design system documented in `DESIGN.md`.

| Target Operation | Goal | Allowed Tools | Reference / Steps |
| :--- | :--- | :--- | :--- |
| **Source Discovery** | Identify stylesheets, HTML templates, or UI config files | `glob`, `list_dir` | Section 3, Step 1 |
| **Asset Retrieval** | Read file contents or fetch live URLs | `Read`, `web_fetch` | Section 3, Step 2 |
| **Analysis & Synthesis** | Translate technical elements to descriptive design language | None (Logic-only) | Section 3, Step 3 |
| **File Generation** | Write the synthesized DESIGN.md file | `Write` | Section 3, Step 4 & Section 5 |

---

## Decision Logic: Workflow Routing

- **IF** analyzing a local project $\rightarrow$ MUST use `glob` to find CSS, SCSS, Tailwind config, or HTML files.
- **IF** a live URL is provided $\rightarrow$ MUST use `web_fetch` to retrieve the HTML/DOM source code.
- **IF** Tailwind classes or custom CSS are parsed $\rightarrow$ MUST translate technical values into descriptive natural language (e.g., `rounded-full` to "Pill-shaped", `rounded-lg` to "Subtly rounded corners", `rounded-none` to "Sharp, squared-off edges").
- **IF** colors are identified in the system $\rightarrow$ MUST map them by Descriptive Name, Hex Code, and Functional Role.

---

## Execution Sequence

### Step 1: Source Discovery
1. Identify the scope of the design analysis (e.g., a specific component, a full webpage, or a complete repository).
2. If local: Use `glob` to locate styling files (`*.css`, `tailwind.config.js`, `*.tsx`, etc.).
3. If remote: Identify the target URL provided by the user.

### Step 2: Asset Retrieval
1. For local files: Call `Read` on the identified stylesheets, configuration files, or markup templates.
2. For remote targets: Call `web_fetch` to download the HTML source code.
3. Look for explicit theme configurations (color palettes, typography settings, design tokens).

### Step 3: Analysis & Translation
1. Parse the retrieved code for utility classes, custom CSS variables, layout structures, and component styling.
2. Evaluate the theme's colors, fonts, geometry, and elevation.
3. Translate all technical tokens:
   - **Colors**: Assign a descriptive, evocative name to each color, find its hex code, and determine its exact functional role.
   - **Geometry**: Translate `border-radius` and layout spacing into physical descriptions.
   - **Elevation**: Describe shadows and depth hierarchy.

### Step 4: File Generation
1. Format the translated information according to the `DESIGN.md` output structure.
2. Write the content to `DESIGN.md` in the root of the project directory (or the requested directory).

---

## ⚠️ Hard Constraints & Negative Rules

- **NEVER** use soft modal verbs like `should`, `prefer`, `try to`, or `ideally`.
- **MUST** use absolute imperatives: `MUST`, `ALWAYS`, `NEVER`, `EXCLUSIVELY`.
- **MUST** include exact hex codes in parentheses after natural language descriptions (e.g., "Deep Muted Teal-Navy (#294056)").
- **NEVER** write raw technical classes (e.g., `rounded-xl`, `mx-4`) or CSS properties directly in `DESIGN.md` without translating them into physical descriptions (e.g., "generously rounded corners", "wide margins").
- **MUST** explain the functional role of every color and style element documented.
- **NEVER** leave empty sections or placeholders in the generated `DESIGN.md`. If metadata is missing, MUST explicitly state that it was not found in the source.
- **MUST** rely on standard semantic UI/UX terminology to describe the design system.

---

## Output Format (DESIGN.md Structure)

The generated `DESIGN.md` file MUST follow this exact Markdown structure:

```markdown
# Design System: [Project Title]

## 1. Visual Theme & Atmosphere
(Description of the mood, density, and aesthetic philosophy based on the codebase or site.)

## 2. Color Palette & Roles
(List colors by Descriptive Name + Hex Code + Functional Role.)

## 3. Typography Rules
(Description of font family, weight usage for headers vs. body, and letter-spacing character.)

## 4. Component Stylings
* **Buttons:** (Shape description, color assignment, behavior).
* **Cards/Containers:** (Corner roundness description, background color, shadow depth).
* **Inputs/Forms:** (Stroke style, background).

## 5. Layout Principles
(Description of whitespace strategy, margins, and grid alignment.)
```
