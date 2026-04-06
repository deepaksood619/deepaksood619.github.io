# Claude Code

[Claude Code: Deep Coding at Terminal Velocity \\ Anthropic](https://www.anthropic.com/claude-code)

- [I Tested Claude Code for a Week - Here's What I Found](https://www.thetoolnerd.com/p/i-tested-claude-code-for-a-week)
- [GitHub - thedotmack/claude-mem: A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.](https://github.com/thedotmack/claude-mem) ⭐ 45k
- [ccusage](https://ccusage.com/)
- [I Spent 2000 Hours Coding With LLMs in 2025. Here are my Favorite Claude Code Usage Patterns : r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1q3t579/comment/nxndpgn/)
	- [Advanced Claude Code Patterns That Move the Needle - Google Docs](https://docs.google.com/document/d/1agzmSskXcdMgJz_cf1KlWdy1kfY3n_XEhHrLU_ESTRk/edit?usp=sharing)
- [Code Review for Claude Code \| Claude](https://claude.com/blog/code-review)
- [Using Claude Code Remote Control - YouTube](https://www.youtube.com/watch?v=Ko7_tC1fMMM)
	- `claude remote-control`
	- Only available with `claude login` and not with VertexAI
- [Auto mode for Claude Code \| Claude](https://claude.com/blog/auto-mode)
	- Auto mode provides a safer long-running alternative to --dangerously-skip-permissions.
- [Claude Code on Google Vertex AI - Claude Code Docs](https://code.claude.com/docs/en/google-vertex-ai)

## Claude Code Features

1. **CLAUDE.md:** A project memory file to define custom rules and conventions. Claude reads at the start of every session.
2. **Permissions:** Control which tools Claude can and can't use.
3. **Plan Mode:** Claude plans before it acts. You can review them before any code changes.
4. **Checkpoints:** Automatic snapshots of your project to revert to if something goes wrong.
5. **Skills:** Reusable instruction files Claude follows automatically.
6. **Hooks:** Run custom shell scripts on lifecycle events like PreToolUse or PostToolUse.
7. **MCP:** Connect Claude to any external tools like databases and third-party services.
8. **Plugins:** Extend Claude with third-party integrations containing skills, MCPs, and hooks.
9. **Context:** Feed Claude what it needs and manage the current context window with /context.
10. **Slash Commands:** Create shortcuts for tasks you run often. Type / and pick from your saved commands.
11. **Compaction:** Compress long conversations to save tokens.
12. **Subagents:** Spawn parallel agents for complex tasks. Divide large multi-step workflows and run them simultaneously.

## Commands

```bash
brew install --cask claude-code

claude
claude --login
claude --think
# Print Mode: Runs a one-off task (e.g., "fix tests") and exits.
claude -p "query"
```

- **/compact**: Manually shrinks the conversation history to save tokens while preserving key context.
- **/init**: Initializes a `CLAUDE.md` file in your project to store local coding standards and instructions.
	- [Writing a good CLAUDE.md \| HumanLayer Blog](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- **/model**: Quickly switch between models (e.g., switching to `haiku` for fast tasks or `opus` for complex logic).
- **/review**: Triggers a code review of your current changes or a specific file.
- **/rewind**: (Double-tap `Esc` or type `/rewind`) Opens a menu to undo recent code changes or revert the conversation.
- **/mcp**: Manages Model Context Protocol servers (connecting Claude to tools like Jira, Slack, or databases).
- **/clear:** This wipes the old context
- **/powerup:** interactive lessons teaching Claude Code features with animated demos

## Monitoring

- **/cost:** It will display a breakdown of **Input Tokens**, **Output Tokens**, and **Cache Hits/Misses**, along with a total USD estimate for the current session.
- **/stats**: Displays your current token usage and rate limit status.

[GitHub - Maciek-roboblog/Claude-Code-Usage-Monitor: Real-time Claude Code usage monitor with predictions and warnings · GitHub](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) ⭐ 7.4k

```bash
# Install directly from PyPI with uv (easiest)
uv tool install claude-monitor

# Run from anywhere
claude-monitor  # or cmonitor, ccmonitor for short
```

[GitHub - hoangsonww/Claude-Code-Agent-Monitor: A real-time monitoring dashboard for Claude Code agents, built with Node.js, Express, React, and WebSockets. It tracks sessions, agent activity, tool usage, and subagent orchestration through Claude Code hooks, providing live analytics, a Kanban status board, status notifications, and an interactive web interface. · GitHub](https://github.com/hoangsonww/Claude-Code-Agent-Monitor) ⭐ 49

Conversations - `~/.claude/projects/`

[GitHub - d-kimuson/claude-code-viewer: A full-featured web-based Claude Code client that provides complete interactive functionality for managing Claude Code projects · GitHub](https://github.com/d-kimuson/claude-code-viewer) ⭐ 1.0k

```bash
npm install -g @kimuson/claude-code-viewer
claude-code-viewer --port 3400
```

## GSD

### GSD 2.0

The original GSD was a collection of markdown prompts installed into `~/.claude/commands/`. It relied entirely on the LLM reading those prompts and doing the right thing. That worked surprisingly well — but it had hard limits:

- **No context control.** The LLM accumulated garbage over a long session. Quality degraded.
- **No real automation.** "Auto mode" was the LLM calling itself in a loop, burning context on orchestration overhead.
- **No crash recovery.** If the session died mid-task, you started over.
- **No observability.** No cost tracking, no progress dashboard, no stuck detection.

GSD v2 solves all of these because it's not a prompt framework anymore — it's a TypeScript application that _controls_ the agent session.

```bash
npm install -g gsd-pi@latest

# From within the project directory
/gsd migrate

# Or specify a path
/gsd migrate ~/projects/my-old-project

/gsd auto

`/gsd` and `/gsd next` # — Step Mode
```

[GitHub - gsd-build/gsd-2: A powerful meta-prompting, context engineering and spec-driven development system that enables agents to work for long periods of time autonomously without losing track of the big picture · GitHub](https://github.com/gsd-build/gsd-2) ⭐ 4.5k

[GSD - Get Shit Done \| AI Coding Framework](https://gsd.build/)

### GSD 1.0

[GitHub - gsd-build/get-shit-done: A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES. · GitHub](https://github.com/gsd-build/get-shit-done) ⭐ 47k

```bash
# start claude
claude --dangerously-skip-permissions
claude --enable-auto-mode

/gsd:update
/gsd:autonomous
/gsd:new-project
/gsd:discuss-phase 1
/gsd:plan-phase 1
/gsd:execute-phase 1
/gsd:verify-work 1
/gsd:resume-work

/gsd:do
/gsd:quick
/gsd:fast

/gsd:new-milestone

/gsd:stats
/gsd:progress
/gsd:settings

/gsd:settings workflow.skip_discuss false
/gsd:autonomous

# see all workflows of GSD
ls ~/.claude/get-shit-done/workflows/
```

```json title="~/.gsd/defaults.json"
{
  "mode": "yolo",
  "granularity": "coarse",
  "model_profile": "balanced",
  "commit_docs": true,
  "parallelization": true,
  "git": {
    "branching_strategy": "none",
    "quick_branch_template": null
  },
  "workflow": {
    "research": false,
    "plan_check": false,
    "verifier": false,
    "auto_advance": true,
    "nyquist_validation": false,
    "ui_phase": false,
    "ui_safety_gate": false,
    "research_before_questions": true,
    "skip_discuss": true
  },
  "hooks": {
    "context_warnings": false
  }
}
```

[Agent System Overview - Get Shit Done](https://www.mintlify.com/gsd-build/get-shit-done/agents/overview)

## Others / Agents / Skills

- [GitHub - affaan-m/everything-claude-code: The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. · GitHub](https://github.com/affaan-m/everything-claude-code) ⭐ 141k
	- [ECC Tools - Open Agent Harness System for GitHub App Automation and Security](https://ecc.tools/)
- [GitHub - garrytan/gstack: Use Garry Tan's exact Claude Code setup: 15 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA · GitHub](https://github.com/garrytan/gstack) ⭐ 65k
- [GitHub - obra/superpowers: An agentic skills framework & software development methodology that works. · GitHub](https://github.com/obra/superpowers) ⭐ 136k
- [GitHub - bytedance/deer-flow: An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours. · GitHub](https://github.com/bytedance/deer-flow) ⭐ 58k
- [GitHub - openclaw/openclaw: Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞 · GitHub](https://github.com/openclaw/openclaw) ⭐ 349k
	- [The OpenClaw Effect: Why Every AI Company is Racing to Your Desktop](https://www.thetoolnerd.com/p/the-openclaw-effect-why-every-ai)
- [GitHub - msitarzewski/agency-agents: A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables. · GitHub](https://github.com/msitarzewski/agency-agents) ⭐ 72k
- [GitHub - FujiwaraChoki/MoneyPrinterV2: Automate the process of making money online. · GitHub](https://github.com/FujiwaraChoki/MoneyPrinterV2) ⭐ 29k
- Documentations
	- [Use docs programmatically - Docs by LangChain](https://docs.langchain.com/use-these-docs)
	- [GitHub - langchain-ai/langchain-skills · GitHub](https://github.com/langchain-ai/langchain-skills) ⭐ 492
		- `npx skills add langchain-ai/langchain-skills --skill '*' --yes --global`
- [Superpowers VS. GSD VS. Others.](https://www.reddit.com/r/ClaudeCode/comments/1qlsdjb/superpowers_vs_gsd_vs_others/)
- [GitHub - nidhinjs/prompt-master: A Claude skill that writes the accurate prompts for any AI tool. Zero tokens or credits wasted. Full context and memory retention · GitHub](https://github.com/nidhinjs/prompt-master)

### Frontend Agents

- [GitHub - microsoft/playwright-mcp: Playwright MCP server · GitHub](https://github.com/microsoft/playwright-mcp) ⭐ 30k
	- `claude mcp add playwright npx @playwright/mcp@latest`
- `claude plugin install frontend-design@claude-plugins-official`
- `claude plugin install context7@claude-plugins-official`
- `claude plugin install code-simplifier@claude-plugins-official`
- [GitHub - ChromeDevTools/chrome-devtools-mcp: Chrome DevTools for coding agents · GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐ 33k
- `/plugin marketplace add ChromeDevTools/chrome-devtools-mcp`
	- `/plugin install chrome-devtools-mcp`
	- Ex - Check the performance of https://developers.chrome.com
- [GitHub - browserbase/skills: Claude Agent SDK with a web browsing tool · GitHub](https://github.com/browserbase/skills)
- [How frontend developer is using Claude Code for automated UI bug fixing and browser testing?](https://www.reddit.com/r/ClaudeCode/comments/1q5r5yz/how_frontend_developer_is_using_claude_code_for/)

## Codebase

- [GitHub - yasasbanukaofficial/claude-code: 🚀 Open source Claude Code CLI source code. Advanced AI Agent for developers. Includes TypeScript codebase for LLM tool-calling, agentic workflows, and terminal UI. Remember this is just the skeleton not the brain itself. Found by Chaofan Shou. · GitHub](https://github.com/yasasbanukaofficial/claude-code) ⭐ 407
- [GitHub - codeaashu/claude-code: Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. · GitHub](https://github.com/codeaashu/claude-code) ⭐ 746
- [Reddit - Claude Code Source Leak Megathread](https://www.reddit.com/r/ClaudeAI/comments/1s9d9j9/claude_code_source_leak_megathread/)
