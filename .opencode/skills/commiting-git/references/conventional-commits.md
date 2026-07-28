# Conventional Commits Specification

Documented from [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/).

## Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Structural Rules
1. **Type Prefix**: Must be prefixed with a lowercase noun type (`feat`, `fix`, etc.), followed by optional scope in parentheses, optional `!`, and required `: ` (colon + space).
2. **Standard Types**:
   - `feat`: Adds new feature (Semantic Versioning MINOR bump).
   - `fix`: Patches bug (Semantic Versioning PATCH bump).
   - Other types allowed: `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`.
3. **Breaking Changes**:
   - Must append `!` to type/scope (e.g. `feat!: ...` or `feat(api)!: ...`) and/or write `BREAKING CHANGE: <description>` in footer.
   - Triggers Semantic Versioning MAJOR bump.
4. **Description**: Short summary of changes, immediately following the colon and space.
5. **Body**: Optional. Starts one blank line after description. Free-form text.
6. **Footers**: Optional. Starts one blank line after body. Follows git trailer format (`Token: value` or `Token #value`). Token must use hyphens instead of spaces, except for `BREAKING CHANGE`. Value can span multiple paragraphs.
7. **Casing**: Case-insensitive for structural units, except `BREAKING CHANGE` or `BREAKING-CHANGE` which MUST be uppercase.
