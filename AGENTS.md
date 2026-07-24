<!-- CODEGRAPH_START -->
## CodeGraph

In repositories indexed by CodeGraph (a .codegraph/ directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tool** (when available): codegraph_explore answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them, including dynamic-dispatch hops grep can't follow. Name a file or symbol in the query to read its current line-numbered source. If it's listed but deferred, load it by name via tool search.
- **Shell** (always works): codegraph explore "<symbol names or question>" prints the same output.

If there is no .codegraph/ directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->

<!-- CONVENTIONAL_START -->
## Conventional Git

When preparing to commit or create a branch, load the relevant skill to generate spec-compliant names. These skills are also invoked when editing this file to ensure consistent conventions across project configuration.

- **Committing**: Load the conventional-commit skill to generate a commit message matching the [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) spec. It provides the required structure (<type>[scope]: <description>), valid types, and breaking change notation. Follow its examples rather than inferring conventions from the commit history. Before committing, the agent must check the current branch. The agent must think and confirm if the branch is `main` or `master` and confirm this to the user. If the branch is not `main` or `master`, the agent must verify if the current branch is correct for the commit being made, and if not, request confirmation from the user.
- **Branching**: When agents need to create a Git branch, they MUST load and use the `conventional-branch` skill to generate a conforming branch name matching the [Conventional Branch 1.1.0](https://conventionalbranch.org/) spec, and MUST present this name to the user for confirmation BEFORE executing the git branch creation command. It provides valid prefixes (feature/, fix/, hotfix/, 
elease/, chore/, and AI agent prefixes), the ABNF grammar, and formatting rules.

If the skill is not yet loaded (e.g., the user asks to stage and commit as a single step), invoke it implicitly — load the skill, apply its rules, then proceed with the git operation.
<!-- CONVENTIONAL_END -->
