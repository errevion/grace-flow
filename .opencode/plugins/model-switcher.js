import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join, extname, basename } from "path";
import os from "os";

function findAgentFile(directory, agentName) {
  const agentDirs = [];
  agentDirs.push(join(directory, ".opencode", "agents"));
  agentDirs.push(join(directory, ".opencode", "agent"));

  const xdg = process.env.XDG_CONFIG_HOME;
  const globalConfigDir = xdg ? join(xdg, "opencode") : join(os.homedir(), ".config", "opencode");
  agentDirs.push(join(globalConfigDir, "agents"));
  agentDirs.push(join(globalConfigDir, "agent"));

  for (const dir of agentDirs) {
    if (!existsSync(dir)) continue;
    try {
      const files = readdirSync(dir);
      for (const file of files) {
        if (extname(file).toLowerCase() === ".md") {
          const nameWithoutExt = basename(file, ".md");
          if (nameWithoutExt.toLowerCase() === agentName.toLowerCase()) {
            return join(dir, file);
          }
        }
      }
    } catch (err) {
      // Ignore directory read errors
    }
  }
  return null;
}

function updateAgentModel(filePath, newModel) {
  try {
    const content = readFileSync(filePath, "utf8");
    const hasCR = content.includes("\r\n");
    const lines = content.split(/\r?\n/);

    if (lines[0] !== "---") {
      const newContent = `---\nmodel: ${newModel}\n---\n\n` + content;
      writeFileSync(filePath, newContent, "utf8");
      return true;
    }

    let endIdx = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === "---") {
        endIdx = i;
        break;
      }
    }

    if (endIdx === -1) {
      return false;
    }

    let modelLineIdx = -1;
    for (let i = 1; i < endIdx; i++) {
      const trimmed = lines[i].trim();
      if (trimmed.startsWith("model:")) {
        modelLineIdx = i;
        break;
      }
    }

    if (modelLineIdx !== -1) {
      const match = lines[modelLineIdx].match(/^(\s*)model:\s*(.*)$/);
      const indent = match ? match[1] : "";
      lines[modelLineIdx] = `${indent}model: ${newModel}`;
    } else {
      lines.splice(endIdx, 0, `model: ${newModel}`);
    }

    writeFileSync(filePath, lines.join(hasCR ? "\r\n" : "\n"), "utf8");
    return true;
  } catch (err) {
    return false;
  }
}

export const ModelSwitcherPlugin = async ({ directory }) => {
  return {
    "chat.message": async (_input, output) => {
      if (!output || !output.parts) return;

      for (const part of output.parts) {
        if (part && part.type === "text" && part.text) {
          const text = part.text.trim();
          // Match commands like: /radagon 9router/Tempest-Low
          // Or any other agent name that matches an agent file (e.g. /malenia, /ranni, etc.)
          const commandMatch = text.match(/^\/([a-zA-Z0-9_-]+)\s+(\S+)$/);
          if (commandMatch) {
            const agentName = commandMatch[1];
            const newModel = commandMatch[2];

            const filePath = findAgentFile(directory, agentName);
            if (filePath) {
              const success = updateAgentModel(filePath, newModel);
              if (success) {
                // Return status via TUI feedback
                // Modifying output.parts to display notification to the user
                part.text = `[model-switcher] Updated agent "${agentName}" file (${basename(filePath)}) to use model: ${newModel}`;
              } else {
                part.text = `[model-switcher] Failed to update agent "${agentName}" file frontmatter.`;
              }
            }
          }
        }
      }
    },
  };
};

export default ModelSwitcherPlugin;
