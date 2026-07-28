---
name: commiting-git
description: Use when committing changes, changing git branches, or creating new branches to ensure standard naming compliance.
license: MIT
compatibility: git
metadata:
  scope: git-workflow
  category: code-quality
---

# Committing & Branching Git (`commiting-git`)

## Quick Reference Map

| Target Operation | Verification Steps | Reference Docs |
| :--- | :--- | :--- |
| **Commit Changes** | Verify message prefix and breaking changes | `references/conventional-commits.md` |
| **Switch/Create Branch** | Check current branch name and format new branch | `references/conventional-branching.md` |

---

## Decision Logic

1. **IF** the target branch is `main` or `master` (or starts with `main/` / `master/`) or the current branch name does not align with `references/conventional-branching.md` $\rightarrow$ Halt execution and prompt the user to confirm via chat before committing/pushing. Suggest making a new branch instead.
2. **IF** creating a new branch $\rightarrow$ Generate branch name according to `references/conventional-branching.md`.
3. **IF** committing changes $\rightarrow$ Compose the commit title and description according to `references/conventional-commits.md`.

---

## Execution Sequence

### Step 1: Branch Verification & Confirmation
1. Run `git branch --show-current` to retrieve active branch name.
2. **IF** branch is `main` or `master` or starts with `main/` or `master/` OR does not follow `<type>/<description>` format (unless it is exactly `develop` or `staging` if treated as trunk):
   - **MUST** ask user via chat to confirm intent.
   - Suggest creating a new compliant branch.
   - **NEVER** bypass this step without explicit user confirmation.

### Step 2: Change-Branch Alignment Check
1. Run `git diff --cached --stat` (or `git diff --stat` if nothing staged yet) to list changed files.
2. Parse the branch name to extract the `<type>` prefix and `<description>` keywords (e.g., `feat/add-auth` → type=feature, keywords=auth).
3. Review the changed files and their diff content. Estimate what percentage of the changes relate to the branch's declared purpose (type + description keywords).
4. **IF** approximately >50% of the changes do NOT align with the branch name:
   - Scan local branches with `git branch --format="%(refname:short)"` to find an existing branch whose name aligns with the changes.
   - **IF** a matching local branch exists:
     - Present it to the user as an alternative: "Existing branch `<matching-branch>` aligns with these changes."
     - Suggest switching to it: `git checkout <matching-branch>`.
   - **MUST** ask user via chat to confirm intent before proceeding.
   - Present the misalignment: list the branch name, summarize what the changes actually do, and note the approximate mismatch percentage.
   - Suggest alternatives in order: switch to existing matching branch (if found), commit on current branch anyway, or create a new branch.
   - **NEVER** bypass this step without explicit user confirmation.
5. **IF** changes align sufficiently (≤50% mismatch) → proceed to next step.

### Step 3: Branch Creation (If Required)
1. Determine appropriate branch type prefix (e.g., `feature/`, `bugfix/`, `chore/`).
2. Format description: lowercase, alphanumeric, separated by single hyphens, no trailing/leading hyphens.
3. Example command: `git checkout -b feature/configure-authentication`.

### Step 4: Commit Composition
1. Identify the primary change category (e.g., `feat`, `fix`, `docs`, `chore`, `refactor`).
2. Draft commit title containing type, optional scope in parentheses, optional `!` if breaking, and short description starting with a lowercase character. Max length 72 chars recommended.
3. Write body and footers if changes are significant or include breaking changes.
4. Execute commit: `git commit -m "<title>" -m "<body>"`.

---

## Hard Constraints

- **MUST** check branch name before staging/committing.
- **MUST** verify staged changes align with branch name before committing. Prompt user if >50% mismatch detected.
- **NEVER** commit directly to `main` or `master` without explicit user confirmation.
- **MUST** write commit titles and messages in lowercase types (`feat:`, `fix:`, etc.).
- **NEVER** use interactive Git commands (like interactive rebase or interactive add) that require terminal input prompts; use structured CLI arguments instead.
- **MUST** refer to `references/conventional-branching.md` and `references/conventional-commits.md` in this directory to resolve rules.
