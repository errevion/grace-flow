---
name: design-md
description: Analyze UI projects and synthesize a semantic design system into DESIGN.md files
allowed-tools:
  - "Read"
  - "Write"
  - "web_fetch"
  - "glob"
---

# Semantic DESIGN.md Skill

You are an expert Design Systems Lead. Your goal is to analyze the provided technical assets (code, styling files, or live URLs) and synthesize a "Semantic Design System" into a file named `DESIGN.md`.

## Overview

This skill helps you create `DESIGN.md` files that serve as the "source of truth" for the design language of web, app, or generalized UI projects. It translates technical specifications into "Visual Descriptions" supported by specific color values.

## Prerequisites

- A target project directory (with CSS, SCSS, HTML, or Tailwind configurations) OR a target URL
- Access to read files or fetch web content

## The Goal

The `DESIGN.md` file will serve as the "source of truth" for the existing design language. Design is interpreted through "Visual Descriptions" supported by specific color values.

## Retrieval and Networking

To analyze a project, you must retrieve metadata and design assets using the appropriate tools:

1. **Source Discovery**:
   - If analyzing locally, use `glob` to find styling files like `tailwind.config.js`, `*.css`, or `*.tsx` files with utility classes.
   - If given a URL, prepare to fetch its source.

2. **Asset download & reading**:
   - Use `web_fetch` to download the HTML code from a live URL.
   - Use `Read` to extract code from local files.
   - Parse the HTML/CSS/Config to extract utility classes, custom CSS, and component patterns.

3. **Theme extraction**:
   - Extract color modes, fonts, roundness, and custom colors from the configuration or stylesheets.

## Analysis & Synthesis Instructions

### 1. Extract Project Identity
- Locate the Project Title based on directory name, package.json, or HTML `<title>`.

### 2. Define the Atmosphere
Evaluate the structure and styling to capture the overall "vibe." Use evocative adjectives to describe the mood (e.g., "Airy," "Dense," "Minimalist," "Utilitarian").

### 3. Map the Color Palette
Identify the key colors in the system. For each color, provide:
- A descriptive, natural language name that conveys its character (e.g., "Deep Muted Teal-Navy")
- The specific hex code in parentheses for precision (e.g., "#294056")
- Its specific functional role (e.g., "Used for primary actions")

### 4. Translate Geometry & Shape
Convert technical `border-radius` and layout values into physical descriptions:
- Describe `rounded-full` as "Pill-shaped"
- Describe `rounded-lg` as "Subtly rounded corners"
- Describe `rounded-none` as "Sharp, squared-off edges"

### 5. Describe Depth & Elevation
Explain how the UI handles layers. Describe the presence and quality of shadows (e.g., "Flat," "Whisper-soft diffused shadows," or "Heavy, high-contrast drop shadows").

## Output Guidelines

- **Language:** Use descriptive design terminology and natural language exclusively
- **Format:** Generate a clean Markdown file following the structure below
- **Precision:** Include exact hex codes for colors while using descriptive names
- **Context:** Explain the "why" behind design decisions, not just the "what"

## Output Format (DESIGN.md Structure)

```markdown
# Design System: [Project Title]

## 1. Visual Theme & Atmosphere
(Description of the mood, density, and aesthetic philosophy.)

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

## Best Practices

- **Be Descriptive:** Avoid generic terms like "blue" or "rounded." Use "Ocean-deep Cerulean (#0077B6)" or "Gently curved edges"
- **Be Functional:** Always explain what each design element is used for
- **Be Consistent:** Use the same terminology throughout the document
- **Be Visual:** Help readers visualize the design through your descriptions
- **Be Precise:** Include exact values (hex codes, pixel values) in parentheses after natural language descriptions

## Common Pitfalls to Avoid

- ❌ Using technical jargon without translation (e.g., "rounded-xl" instead of "generously rounded corners")
- ❌ Omitting color codes or using only descriptive names
- ❌ Forgetting to explain functional roles of design elements
- ❌ Being too vague in atmosphere descriptions
- ❌ Ignoring subtle design details like shadows or spacing patterns