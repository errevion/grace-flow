---
name: creating-and-editing-code
description: Use when creating or editing code to ensure it complies with the vibe-check security checklist.
---

# Code Security Verification

When creating or editing any code, you MUST cross-reference the changes with the security rules outlined in `./references/vibe-check.md`. Ensure that none of the vulnerabilities listed (e.g. secrets exposure, missing auth middleware, SQL injection, bad CORS) are introduced. Check the code against each category in the reference file.
