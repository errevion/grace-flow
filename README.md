# clazy-ai

**Clazy: Crazy results for lazy people.**

This repository functions as a boilerplate/base template for structured, spec-driven AI-assisted development workflows using **OpenCode**, **OpenSpec**, and **CodeGraph** to automate and guide AI coding agents.

## Core Components

### 1. OpenCode Agents (`.opencode/agents/`)
Pre-configured roles that coding assistants assume based on the task:
- **Architect**: For high-level system design and decision-making.
- **Executor**: For writing code and implementing features.
- **Explorer**: For codebase discovery and pattern mapping.
- **Reviewer**: For verification and quality assurance.

### 2. OpenSpec Workflow (`.opencode/commands/` & `openspec/`)
A structured process for planning and implementing codebase modifications:
- `opsx-propose`: Create design and change proposals.
- `opsx-apply`: Run implementation tasks sequentially.
- `opsx-sync`: Synchronize delta specifications with main specs.
- `opsx-archive`: Finalize and clean up changes.

### 3. Integrated Skills (`.opencode/skills/`)
Custom specialized workflows that can be loaded dynamically by agents:
- `conventional-commit`: Generates spec-compliant [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) messages.
- `conventional-branch`: Generates spec-compliant [Conventional Branch v1.1.0](https://conventionalbranch.org/) names.
- `openspec-explore` & others: Dedicated skills for managing the OpenSpec planning cycle.

### 4. Agent Instructions (`AGENTS.md`)
Declares system-wide guidelines and rules for agents, including:
- When to use **CodeGraph** for codebase navigation instead of grep/find.
- When to trigger the `conventional-commit` and `conventional-branch` skills during Git operations.

## How to Use This Base

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd clazy-ai
   ```
2. **Install OpenCode/OpenSpec Dependencies**:
   OpenCode and OpenSpec use node packages inside the `.opencode/` folder to run custom scripts.
   ```bash
   cd .opencode
   npm install
   cd ..
   ```
3. **Configure Your Workflow**:
   - Customize agent behavior in `.opencode/agents/` and `AGENTS.md`.
   - Update `opencode.jsonc` and `openspec/config.yaml` to match your project needs.
