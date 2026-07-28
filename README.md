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
  | **Godfrey** | The Auditor | Verifies the correctness, completeness, consistency, and security of specifications in `docs/openspec` before syncing and archiving. Does not modify codebase files. |
  
### **[OpenSpec](https://github.com/Fission-AI/openspec) Integration**
Built-in support for the popular and lightweight Software Design Document (SDD) tool.
<img width="1401" height="401" alt="51ff2e7c7f294223a3b8601fc239dde1" src="https://github.com/user-attachments/assets/b44f3480-6b57-43ec-ae3c-fd8c11a934e5" />
| Stage | Description / Purpose | Key Agents involved |
| :--- | :--- | :--- |
| **Explore** | Initial brainstorming, tracing existing code implementations, and determining feasibility. | Marika, Ranni, Radahn |
| **Propose** | Constructing detailed architectural blueprints and mapping file changes under `openspec/`. | Radagon, Ranni, Radahn |
| **Apply** | Executing code changes, running test commands, and gathering verification evidence. | Radagon, Malenia |
| **Sync** | Reviewing specifications for correctness and merging delta specs into main files. | Radagon, Godfrey, Malenia |
| **Archive** | Archiving completed proposal history once code changes are validated and active. | Radagon, Malenia |

### **[Graphify](https://github.com/Graphify-Labs/graphify)**
Map your project's knowledge into an easily navigable dependency graph.
<img width="1400" height="343" alt="graph-hero" src="https://github.com/user-attachments/assets/61ac0e47-5cee-456b-be60-8842bfcf1652" />

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

## Prerequisites

Before setting out on your quest to restore the codebase, ensure your local environment has the required toolchains:

### Toolchains & Runtimes
| Toolchain | Description | Installation |
| :--- | :--- | :--- |
| **Node.js & NPM** | JavaScript runtime and package manager. Required to run OpenCode and install OpenSpec. | [Install Node.js & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) |
| **uv** | Fast, standalone Python package installer and tool manager. **Does not require a pre-installed system Python**, as `uv` automatically downloads and manages Python environments internally. | `curl -LsSf https://astral.sh/uv/install.sh | sh` (Unix) or `irm https://astral.sh/uv/install.ps1 | iex` (Windows) |

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
