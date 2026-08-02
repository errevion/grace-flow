# Lead the tarnished agents, straight to Grace.

> A simple, lightweight, and opinionated starter template built exclusively for OpenCode.

## Project Aims

Grace Flow provides the Guidance of Grace to your development workflow, designed with a clear hierarchy of priorities:
1. **Minimize Agent Drift**: Keeping your tarnished agents on track and focused on their destined tasks.
2. **Optimize Token Usage**: Ensuring communication and context remain efficient, saving your hard-earned runes.

The result is a highly customizable, anti-bloated foundation for your OpenCode projects.

## Features

### **Orchestrator-Worker Dynamic** 
A highly agentic, multi-agent workflow featuring 6 specialized agents designed around the OpenSpec SDD lifecycle.
<img width="2816" height="726" alt="clazy-crop (1)" src="https://github.com/user-attachments/assets/69d19799-935b-4b33-8086-6fb5271ea9bd" />
  | Agent | Role | Description |
  | :--- | :--- | :--- |
  | **Radagon** | Master Orchestrator | The central driver. Coordinates the entire lifecycle by analyzing requirements and dispatching tasks to specialized sub-agents (`Ranni`, `Radahn`, `Malenia`, `Godfrey`) to carry out the four main OpenSpec operations: Propose, Apply, Sync, and Archive. |
  | **Marika** | The Ideator | Operates before the formal specification stage. Serves as a conversational sounding board for early-stage brainstorming, conceptual exploration, and feasibility checks, dispatching Ranni or Radahn when technical details are needed. |
  | **Ranni** | Explorer & Researcher | Specializes in deep codebase discovery, tracing execution flows from entry points to data stores, and mapping design patterns. Conducts external web research to solve technical hurdles. |
  | **Radahn** | The Architect | Analyzes codebase patterns to make decisive design decisions, generating complete architectural blueprints, component specifications, data flows, and phased implementation maps within `openspec/*`. |
  | **Malenia** | The Implementer | Executes atomic tasks delegated by Radagon or Radahn. Handles precise code changes following established conventions, runs verification testing/QA, and gathers execution evidence. Can also be dispatched solo for one-time tasks. |
  | **Godfrey** | The Auditor | Verifies the correctness, completeness, consistency, and security of specifications in `openspec/` before syncing and archiving. Does not modify codebase files. |
  
### **[OpenSpec](https://github.com/Fission-AI/openspec) Integration**
Built-in support for the popular and lightweight Software Design Document (SDD) tool.
<img width="2424" height="616" alt="51ff2e7c7f294223a3b8601fc239dde1" src="https://github.com/user-attachments/assets/8dc48fc2-2c5c-44d8-a668-fe6543036868" />
| Stage | Description / Purpose | Key Agents involved |
| :--- | :--- | :--- |
| **Explore** | Initial brainstorming, tracing existing code implementations, and determining feasibility. | Marika, Ranni, Radahn |
| **Propose** | Constructing detailed architectural blueprints and mapping file changes under `openspec/`. | Radagon, Ranni, Radahn |
| **Apply** | Executing code changes, running test commands, and gathering verification evidence. | Radagon, Malenia |
| **Sync** | Reviewing specifications for correctness and merging delta specs into main files. | Radagon, Godfrey, Malenia |
| **Archive** | Archiving completed proposal history once code changes are validated and active. | Radagon, Malenia |

### **[Graphify](https://github.com/Graphify-Labs/graphify)**
Map your project's knowledge into an easily navigable dependency graph.
<img width="1400" height="343" alt="graph-hero" src="https://github.com/user-attachments/assets/edf79b6a-3f55-406a-b28b-4e99afb5dcd8" />

### **Token Optimization**
Integrated with [Dynamic Context Pruning](https://github.com/Opencode-DCP/opencode-dynamic-context-pruning) and the [Caveman](https://github.com/juliusbrussee/caveman) plugin to drastically reduce token consumption without losing technical accuracy.

## Ashes of War (Skills)

This template comes pre-configured with several essential OpenCode skills to enhance their capabilities:

| Skill | Description | Trigger Conditions |
| :--- | :--- | :--- |
| `commiting-git` | Standardizes git branching and commits according to conventional styling. Warns if changes don't align with the branch's declared purpose. | Triggers when staging files, creating new branches, or committing. Enforces lowercase type prefixes (e.g., `feat:`, `fix:`) and branch structures (`<type>/<description>`). |
| `exploring-idea` | Facilitates early-stage project ideation, conceptual brainstorming, and architectural recommendation through incremental Q&A. | Triggers when exploring a feature concept or requesting tech recommendations. Researches best practices online, then asks exactly *one* clarifying question at a time. |
| `creating-and-editing-skill` | Enforces structural guidelines, deterministic decision routing, and token efficiency limits when building or editing OpenCode agent skills. | Triggers when authoring or refactoring any `.opencode/skills/**/*.md` file. Requires trigger-focused frontmatter, logic matrices, and keeping `SKILL.md` under 500 lines. |
| `creating-and-editing-code` | Performs safety checks ("vibe-checks") against the codebase security requirements before files are created or modified. | Triggers automatically during file edits or creation. Cross-references changes with `./references/vibe-check.md` to prevent secrets exposure, SQL injection, and bad CORS. |
| `reflecting-plan` | Stress-tests implementation designs and plans, uncovering hidden dependencies and assumptions before coding begins. | Triggers when reviewing design blueprints or executing non-spec plans. Explores the codebase first, then presents one question at a time paired with a recommended solution. |
| `design-md` | Use when analyzing a codebase, website, or UI project to synthesize a semantic design system into a DESIGN.md file. | Triggers when analyzing local styling files or remote URLs to extract visual themes, colors, typography, layout, and component aesthetics into a structured design system. |
| `editing-agents-md` | Enforces compliance with OpenCode system prompt standards when editing or maintaining agent developer guidelines. | Triggers when modifying AGENTS.md or project-specific developer guidelines. Enforces strict length limits (under 50 lines) and absolute imperatives (`ALWAYS`, `NEVER`). |
| `caveman` | Ultra-compressed communication mode. Cuts output tokens ~65% by speaking tersely while keeping full technical accuracy. Supports multiple intensity levels. | Triggers when user says "caveman mode", invokes `/caveman`, or requests token efficiency. |
| `graphify` | Turns codebase content into a persistent knowledge graph with community detection and query/path/explain tools. | Triggers for any codebase architecture question, especially when `graphify-out/` exists. Also triggered via `/graphify` command. |
| `hallmark` | Anti-AI-slop design skill for greenfield pages, audits, redesigns, and design extraction from URLs or screenshots. | Triggers when building new apps/landing pages, redesigning, or invoking Hallmark by name. |
| `openspec-explore` | Enter explore mode for thinking through ideas, investigating problems, and clarifying requirements before or during a change. | Triggers when user wants to brainstorm or explore before formal specification. |
| `openspec-propose` | Propose a new change with all artifacts (design, specs, tasks) generated in one step. | Triggers when user describes what they want to build and needs a complete proposal. |
| `openspec-apply-change` | Implement tasks from an OpenSpec change, executing code modifications following the spec. | Triggers when user wants to start or continue implementing tasks from a proposal. |
| `openspec-sync-specs` | Sync delta specs from a change to main specs without archiving. | Triggers when user wants to update main specs with delta changes. |
| `openspec-archive-change` | Archive a completed change after implementation is validated. | Triggers when user wants to finalize and archive a completed change. |

## Prerequisites

Before setting out on your quest to restore the codebase, ensure your local environment is configured with the necessary tools:

> [!NOTE]
> The packages below require [**Node.js / NPM**](https://nodejs.org/en/download) (for OpenCode and OpenSpec) and [**uv**](https://docs.astral.sh/uv/getting-started/installation/) (for Graphify) to be installed on your system.

### Required Packages
| Package | Description | Installation Command |
| :--- | :--- | :--- |
| **OpenCode** | The primary CLI engine for running agentic tasks. | `npm i -g opencode-ai` |
| **OpenSpec** | The Software Design Document (SDD) management CLI. | `npm install -g @fission-ai/openspec@latest` |
| **Graphify** | Analyzes the codebase and updates the dependency graph. | `uv tool install graphifyy` |

## Getting Started

Follow the guidance of grace to set up your agentic workspace:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd grace-flow
   ```
2. **Initialize OpenSpec** (if starting fresh):
   ```bash
   openspec init
   ```
3. **Build the knowledge graph** via Graphify:
   ```bash
   graphify update .
   ```
4. **Configure Agent LLM Models** (Optional):
   The agent definition files located in `.opencode/agents/` are pre-configured to use specific LLMs (e.g., `model: 9router/Prime-High` or `model: 9router/Tempest-Low` in their frontmatter header). If you want to use different models, open each agent's configuration file (e.g., `Radagon.md`, `Malenia.md`, etc.) and replace the `model` field with your preferred model identifier. Alternatively, you can delete the `model` line entirely from the frontmatter to let OpenCode use your default system model.
   ```md
      ---
   mode: subagent
   description: Verifies specifications before syncing and archiving changes.
   permission:
   edit: deny
   bash: ask
   external_directory: ask
   glob: allow
   grep: allow
   read: allow
   skill: allow
   task: deny
   todowrite: allow
   >>> model: 9router/Prime-High <<<
   ---
   ```

5. **Launch OpenCode**:
   Run the OpenCode CLI inside the root directory to activate the agentic workspace:
   ```bash
   opencode
   ```

## Recommended Tools

To get the most out of Grace Flow, we recommend using the following tools in conjunction with this template:
- **[OpenChamber](https://github.com/openchamber/openchamber)**: A feature-rich desktop and web client for OpenCode agents. It provides a branchable chat timeline, smart diff displays, voice interactions, secure Cloudflare tunnel sharing, and multi-agent management interfaces to keep you in control as the agents build.
- **[Spek](https://github.com/spekhq/spek)**: A lightweight, read-only local viewer for OpenSpec content. It parses and visualizes specifications and active changes into a dashboard, Gantt timeline, and searchable browser with BDD keyword highlighting—perfect for verifying progress across multiple parallel git worktrees.
