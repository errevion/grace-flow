# Work lazy. Ship crazy.

An opinionated starter template that equips AI coding agents with structured spec-driven workflows, semantic code intelligence, and context compression.

## Prerequisites

Before starting, you must install the following tools globally on your machine:

### 1. [OpenCode](https://github.com/anomalyco/opencode)
The open source coding agent.
- **Install via npm**:
  ```bash
  npm i -g opencode-ai@latest
  ```
- **Install via curl**:
  ```bash
  curl -fsSL https://opencode.ai/install | bash
  ```
- **Install via Homebrew**:
  ```bash
  brew install anomalyco/tap/opencode
  ```

### 2. [OpenSpec](https://github.com/Fission-AI/openspec)
Spec-driven development (SDD) framework.
- **Install via npm**:
  ```bash
  npm install -g @fission-ai/openspec@latest
  ```

### 3. [CodeGraph](https://github.com/colbymchenry/codegraph)
Semantic code intelligence and knowledge graph tool.
- **Install via npm**:
  ```bash
  npm i -g @colbymchenry/codegraph
  ```
- **Install via PowerShell (Windows)**:
  ```powershell
  irm https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.ps1 | iex
  ```
- **Install via curl (macOS / Linux)**:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/colbymchenry/codegraph/main/install.sh | sh
  ```

## Core Components

### 1. OpenCode Agents (`.opencode/agents/`)
Pre-configured roles that coding assistants assume based on the task:
- **Vector**: For high-level system design and decision-making.
- **Slick**: For writing code and implementing features.
- **Scout**: For codebase discovery and pattern mapping.
- **Hawk**: For verification and quality assurance.

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

### 5. Context Compression ([`magic-compact`](https://github.com/aerovato/magic-compact/))
Lossless context compression plugin for Claude Code and OpenCode. Instead of collapsing the entire session history into a single generic summary, it replaces old assistant turns with high-fidelity summaries and prunes bulky tool outputs (which remain retrievable via `read_omitted_content`).
- **Install (OpenCode)**:
  ```bash
  opencode plugin magic-compact --global
  ```
- **Usage**:
  - Run `/magic-compact [N]` to compact the history (e.g., `/magic-compact 3` keeps the 3 most recent turns as-is and compresses the rest).
  - Run `/magic-stats` to view cumulative token and cost savings.

## Starting Up

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd clazy-ai
   ```
2. **Install Local Plugin Dependencies**:
   OpenCode resolves local plugins and SDK tools from `.opencode/node_modules/` if defined in `.opencode/package.json`.
   ```bash
   cd .opencode
   npm install
   cd ..
   ```
3. **Configure Your Workflow**:
   - Customize agent behavior in `.opencode/agents/` and `AGENTS.md`.
   - Update `opencode.jsonc` and `openspec/config.yaml` to match your project needs.
4. **Start OpenCode**:
   Initialize and run OpenCode in your project:
   ```bash
   opencode
   ```
5. **Start OpenSpec**:
   Initialize the OpenSpec planning workflow:
   ```bash
   openspec init
   ```
6. **Start CodeGraph**:
   Index your codebase for agents and start the MCP server:
   ```bash
   codegraph init
   codegraph serve --mcp
   ```

## Recommended Tools

1. **[OpenChamber](https://github.com/openchamber/openchamber)**: Desktop and web interface for OpenCode AI agent. A rich interface for OpenCode to review diffs, manage agents, run dev servers, and has features like branchable chat timeline, smart tool UIs, voice mode, multi-agent runs.
2. **[Spek](https://github.com/spekhq/spek)**: A lightweight, read-only viewer for OpenSpec content. Turns the local OpenSpec directory into a navigable, searchable interface with BDD syntax highlighting, task progress tracking, and full-text search, and it has a VS Code extension and IntelliJ plugin.
