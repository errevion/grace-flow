---
name: conventional-branch
description: Generate valid Conventional Branch names per v1.1.0 spec. Use when creating or naming Git branches, especially when editing AGENTS.md or other project configuration files where consistent branch naming matters.
allowed-tools: Bash(git)
metadata:
  source: https://conventionalbranch.org/
  specification: Conventional Branch 1.1.0
  license: CC-BY-4.0
---

Generate branch names following the Conventional Branch 1.1.0 specification.

## Structure

```
<type>/<description>
```

## Prefixes

### Purpose Prefixes

| Prefix            | Usage                                    |
|-------------------|------------------------------------------|
| `feature/` or `feat/` | A new feature                        |
| `bugfix/` or `fix/`   | A bug fix                            |
| `hotfix/`         | An urgent fix                             |
| `release/`        | Preparing a release (e.g., `release/v1.2.0`) |
| `chore/`          | Non-code tasks (deps, docs, etc.)         |

### AI Agent Source Prefixes (v1.1.0)

| Prefix      | Agent                  | Vendor      |
|-------------|------------------------|-------------|
| `ai/`       | Any AI agent           | —           |
| `claude/`   | Claude Code            | Anthropic   |
| `codex/`    | OpenAI Codex           | OpenAI      |
| `copilot/`  | GitHub Copilot         | GitHub      |
| `cursor/`   | Cursor                 | Anysphere   |

Trunk branches (`main`, `master`, `develop`) do not use a prefix.

## Rules

1. **Lowercase only** — use `a-z`, `0-9`, and hyphens `-` to separate words. No uppercase, underscores, or spaces.
2. **No consecutive, leading, or trailing hyphens/dots** — e.g., `feature/new--login` or `feature/-new-login` are invalid.
3. **Clear and concise** — descriptive enough to understand the branch purpose.
4. **Ticket numbers** — include if applicable: `feature/issue-123-new-login`.
5. **Dots only for versions** — in release branches: `release/v1.2.0`.

## Formal Grammar (ABNF)

```
branch-name     = trunk-branch / prefixed-branch
trunk-branch    = "main" / "master" / "develop"
prefixed-branch = type "/" description
type            = "feature" / "feat" / "bugfix" / "fix"
                / "hotfix" / "release" / "chore"
                / "ai" / "copilot" / "cursor"
                / "claude" / "codex"
description     = desc-segment *("-" desc-segment)
desc-segment    = 1*(ALPHA / DIGIT) *("." 1*(ALPHA / DIGIT))
ALPHA           = %x61-7A   ; lowercase a-z
DIGIT           = %x30-39   ; 0-9
```

## Examples

| Branch Name                        | Valid | Notes                          |
|------------------------------------|-------|--------------------------------|
| `main`                             | ✓     | Trunk branch                   |
| `develop`                          | ✓     | Trunk branch                   |
| `feature/add-login-page`           | ✓     | New feature                    |
| `feat/add-login-page`              | ✓     | Short alias for feature        |
| `fix/header-bug`                   | ✓     | Bug fix                        |
| `bugfix/fix-header-bug`            | ✓     | Bug fix (long form)            |
| `hotfix/security-patch`            | ✓     | Urgent fix                     |
| `release/v1.2.0`                   | ✓     | Release with version           |
| `chore/update-dependencies`        | ✓     | Non-code task                  |
| `feature/issue-123-new-login`      | ✓     | Feature with ticket number     |
| `ai/refactor-auth-flow`            | ✓     | Generic AI agent               |
| `claude/update-docs`               | ✓     | Claude Code                    |
| `Feature/Add-Login`                | ✗     | Uppercase not allowed          |
| `feature/new--login`               | ✗     | Consecutive hyphens            |
| `fix/header_bug`                   | ✗     | Underscores not allowed        |

## Usage

When the user asks to create a new Git branch, or when a branch needs naming during commit/setup operations, generate a valid Conventional Branch name. Present it for confirmation before executing `git checkout -b <name>` or `git switch -c <name>`.
