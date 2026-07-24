---
name: conventional-commit
description: Generate valid Conventional Commit messages per v1.0.0 spec. Use when writing commit messages, especially when editing AGENTS.md or other project configuration files where consistent commit style matters.
allowed-tools: Bash(git)
metadata:
  source: https://www.conventionalcommits.org/en/v1.0.0/
  specification: Conventional Commits 1.0.0
  license: CC-BY-3.0
---

Generate commit messages following the Conventional Commits 1.0.0 specification.

## Structure

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Required Rules

1. **Type prefix required** — commits MUST be prefixed with a type (noun like `feat`, `fix`), followed by an OPTIONAL scope, OPTIONAL `!`, and REQUIRED colon + space.
2. **`feat`** — a new feature (correlates with MINOR in SemVer).
3. **`fix`** — a bug fix (correlates with PATCH in SemVer).
4. **Scope** — MAY be provided after type in parentheses, e.g., `fix(parser):`.
5. **Description** — MUST immediately follow the colon+space after type/scope prefix. A short summary of the code change.
6. **Body** — MAY follow after one blank line. Free-form, MAY have multiple paragraphs.
7. **Footers** — MAY follow after one blank line after body. Each footer: word token, `: ` or ` #` separator, string value (git trailer convention). Use `-` for multi-word tokens except `BREAKING CHANGE`.
8. **Breaking changes** — indicated by `!` before `:` in type/scope prefix, OR by `BREAKING CHANGE:` footer. If `!` is used, the `BREAKING CHANGE:` footer MAY be omitted.
9. **Case** — types and descriptions are NOT case-sensitive (except `BREAKING CHANGE` MUST be uppercase). Stay consistent.

## Recommended Types

| Type       | Usage                                          |
|------------|------------------------------------------------|
| `feat`     | A new feature                                  |
| `fix`      | A bug fix                                      |
| `build`    | Changes to build system or dependencies        |
| `chore`    | Other changes that don't modify src or tests   |
| `ci`       | CI configuration changes                       |
| `docs`     | Documentation only                             |
| `perf`     | A code change that improves performance        |
| `refactor` | A code change that neither fixes a bug nor adds a feature |
| `style`    | Changes that do not affect the meaning of the code |
| `test`     | Adding missing or correcting existing tests    |

## Examples

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

```
feat!: send an email to the customer when a product is shipped
```

```
feat(api)!: send an email to the customer when a product is shipped
```

```
docs: correct spelling of CHANGELOG
```

```
fix: prevent racing of requests

Introduce a request id to correlate the latest request. Dismiss incoming responses
other than from the latest request.

Reviewed-by: Z
Refs: #123
```

## Usage

Before committing, load the `conventional-branch` skill to verify if the current branch matches Conventional Branch rules. If the current branch is NOT the intended target branch and is `main` or `master`, confirm with the user to prevent accidental commits to production. Always require explicit confirmation if the current branch name does not align with Conventional Branch conventions, unless the user has explicitly instructed otherwise (e.g., 'Commit to this main/ branch').

When the user asks to commit, stage files and present a Conventional Commit message for confirmation before executing `git commit`. Follow the structure above — use the correct type for the change, include a concise description, and add body/footers when they add context.
