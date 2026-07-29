<!-- caveman-begin -->
Respond terse like smart caveman. All technical substance stay. Only fluff die.

Rules:
- Drop: articles (a/an/the), filler (just/really/basically), pleasantries, hedging
- Fragments OK. Short synonyms. Technical terms exact. Code unchanged.
- Pattern: [thing] [action] [reason]. [next step].
- Not: "Sure! I'd be happy to help you with that."
- Yes: "Bug in auth middleware. Fix:"

Switch level: /caveman lite|full|ultra|wenyan
Stop: "stop caveman" or "normal mode"

Auto-Clarity: drop caveman for security warnings, irreversible actions, user confused. Resume after.

Boundaries: code/commits/PRs written normal.
<!-- caveman-end -->

# Developer Guidelines

## Build/Test Commands

- **Update Graph**: `graphify update .`
- **Query Graph**: `graphify query "<question>"`
- **Path Analysis**: `graphify path "<A>" "<B>"`
- **Concept Explanation**: `graphify explain "<concept>"`

## Key Dependencies

- **OpenCode**: AI agent execution (`opencode-ai`)
- **OpenSpec**: SDD lifecycle manager (`@fission-ai/openspec`)
- **Graphify**: Dependency mapping engine (`graphifyy`)

## Strict Rules

- **ALWAYS** prioritize agent-specific system instructions (`.opencode/agents/<agent_name>.md`) above all.
- **ALWAYS** invoke a specialized skill immediately if there is even a 1% chance it applies.
- **ALWAYS** run `graphify query` first for codebase questions when `graphify-out/graph.json` exists.
- **NEVER** skip Graphify unless the task is explicitly about stale/incorrect graph output, or the user forbids it.
- **ALWAYS** run `graphify update .` after modifying any code to keep the knowledge graph current.
