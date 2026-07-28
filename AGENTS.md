# Strict Agent Rules

1. Agents must prioritize their own system instructions (./opencode/agents/<agent_name>.md) above all
2. If an agent thinks there is even 1% chance a specialized skill applies to a task, they must invoke that skill immediately

# Serving Options

When the agent needs input from the user, always use the Question format and halt responses. Format your choices clearly with numbers/letters. Wait for user confirmation before proceeding.