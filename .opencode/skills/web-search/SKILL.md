---
name: web-search
description: Provide guidelines and instructions for conducting web research using the webfetch tool. Use when searching the web for technical information, best practices, or API documentation.
---

## About Web Search

Web research enables agents to gather external information required to implement features, solve problems, or learn about new technologies. It relies on accessing standard search engines and web content using the `webfetch` tool.

## Search Methods

The primary approach for AI agents to perform web research is using **DuckDuckGo's HTML search interface (`html.duckduckgo.com`)** via the `webfetch` tool. This method is preferred because it works reliably without requiring API keys, specialized MCP servers, or complex setup.

### Required Flow

1. **Formulate Query**: Construct a precise search query.
2. **Execute Search**: Use `webfetch` to access `https://html.duckduckgo.com/html/?q=URL_ENCODED_QUERY`.
3. **Parse Results**: Analyze the returned markdown to identify relevant result links.
4. **Fetch Content**: Use `webfetch` on the specific result URLs to retrieve detailed information.
5. **Synthesize**: Combine the findings and apply them to the task.

## Execution Rules

- **URL Encoding**: Ensure search queries are properly URL-encoded (e.g., spaces replaced by `+` or `%20`) before appending to the DuckDuckGo URL.
- **Targeted Fetching**: Do not blindly fetch all results. Read the search result snippets first, then fetch only the 1-3 most promising links.
- **Timeouts**: If a specific site hangs or fails, move on to the next result rather than retrying indefinitely.
- **Synthesis over Dumping**: Digest the fetched information and provide a concise summary or directly apply the knowledge. Do not dump large blocks of raw fetched text into responses.