---
name: skill-creator
description: Guide for creating effective skills. Use when creating or updating a skill to extend AI agent capabilities with specialized knowledge, workflows, or tool integrations.
---

Generate and structure skills according to this core instruction format.

## About Skills

Skills are modular, self-contained packages providing specialized knowledge, workflows, and tools. They act as procedural guides for specific domains or tasks.

### What Skills Provide

1. Specialized workflows - Multi-step procedures
2. Tool integrations - Instructions for specific file formats or APIs
3. Domain expertise - Specific knowledge, schemas, business logic
4. Bundled resources - Scripts, references, assets

## Structure

```
skill-name/
+-- SKILL.md (required)
¦   +-- YAML frontmatter metadata (required)
¦   ¦   +-- name: (required)
¦   ¦   +-- description: (required)
¦   +-- Markdown instructions (required)
+-- Bundled Resources (optional)
    +-- scripts/          - Executable code (Python/Bash/etc.)
    +-- references/       - Documentation to be loaded into context as needed
    +-- assets/           - Files used in output (templates, icons, fonts, etc.)
```

## Required Rules

1. **Metadata Quality** - `name` and `description` in YAML frontmatter MUST be specific. They determine when the skill triggers.
2. **Writing Style** - Write the entire skill using **imperative/infinitive form** (verb-first instructions), not second person. Use objective, instructional language (e.g., "To accomplish X, do Y").
3. **SKILL.md Content** - Keep SKILL.md lean (<5k words). Answer: What is the purpose? When should it be used? How should the agent use it? Reference all bundled resources.
4. **Avoid Duplication** - Information MUST live in either SKILL.md or references files, not both. Prefer references for large detailed information.

## Bundled Resources Guidelines

### Scripts (`scripts/`)
Executable code for repetitive or deterministic tasks. Token efficient. May be executed without loading into context.

### References (`references/`)
Documentation to inform process/thinking. Loaded as needed. Good for schemas, policies, API docs, detailed workflows. Keep SKILL.md lean. Include grep search patterns in SKILL.md for large files (>10k words).

### Assets (`assets/`)
Files used in final output (templates, branding, boilerplate). Not intended for context loading.

## Creation Process

1. **Understand** - Analyze concrete examples to define expected functionality and triggers.
2. **Plan Resources** - Identify reusable scripts, references, and assets needed to execute the workflows repeatedly.
3. **Initialize/Edit** - Create directory structure, write metadata, author SKILL.md using imperative style.
4. **Format Match** - STRICTLY match the formatting and styling of existing skills in `.opencode/skills`. Include a styling rule in the skill instructions.
5. **Iterate** - Refine based on execution results.

## Usage

When asked to create or update a skill, use this format to construct the skill structure and contents. Ask clarifying questions one at a time if the skill functionality or required resources are ambiguous.
