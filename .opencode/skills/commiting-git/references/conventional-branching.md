# Conventional Branch Specification

Documented from [conventionalbranch.org](https://conventionalbranch.org/).

## Format
```
<type>/<description>
```

### Trunk Branches (No Prefix)
- `main`
- `master`
- `develop`

### Purpose Prefixes
- **`feature/`** (or **`feat/`**): For new features (e.g., `feature/add-login-page`, `feat/add-login-page`)
- **`bugfix/`** (or **`fix/`**): For bug fixes (e.g., `bugfix/fix-header-bug`, `fix/header-bug`)
- **`hotfix/`**: For urgent fixes (e.g., `hotfix/security-patch`)
- **`release/`**: For branches preparing a release (e.g., `release/v1.2.0`)
- **`chore/`**: For non-code tasks like dependency, docs updates (e.g., `chore/update-dependencies`)

### AI Agent Source Prefixes
- **`ai/`**: Generic AI agent
- **`copilot/`**: GitHub Copilot
- **`cursor/`**: Cursor
- **`claude/`**: Claude Code
- **`codex/`**: OpenAI Codex

## Basic Rules
1. **Lowercase, Hyphens, and Dots**: Always use lowercase letters (`a-z`), numbers (`0-9`), and hyphens (`-`). Dots (`.`) allowed in version numbers (e.g., `release/v1.2.0`). No special characters, underscores, or spaces.
2. **No Consecutive or Boundary Separators**: No consecutive hyphens/dots (`--` or `.-`). No leading or trailing hyphens/dots in the description segment.
3. **Concise**: Clearly indicate the purpose of work.
4. **Ticket Numbers**: Put ticket/issue number in prefix if applicable (e.g., `feature/issue-123-new-login`).

## Grammar
```abnf
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
