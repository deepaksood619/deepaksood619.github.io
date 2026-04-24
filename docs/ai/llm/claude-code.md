# Claude Code

[Claude Code: Deep Coding at Terminal Velocity \\ Anthropic](https://www.anthropic.com/claude-code)

[GitHub - luongnv89/claude-howto: A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value. · GitHub](https://github.com/luongnv89/claude-howto) ⭐ 28k

- [I Tested Claude Code for a Week - Here's What I Found](https://www.thetoolnerd.com/p/i-tested-claude-code-for-a-week)
- [GitHub - thedotmack/claude-mem: A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.](https://github.com/thedotmack/claude-mem) ⭐ 65k
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
- **IMP - [The 2-Minute Claude Code Upgrade You're Probably Missing: LSP - Karan Bansal](https://karanbansal.in/blog/claude-code-lsp/)**
	- By default, Claude Code navigates your codebase with text search tools: Grep, Glob, and Read. It's the same as having a very fast developer with grep and find at a terminal. Smart pattern matching, but fundamentally just matching text. The core problem: grep treats code as text. But code is not text. It has structure, meaning, and relationships. When you ask "where is getUserById defined?", you want the one function definition, not the 50 places that call it plus the 12 comments that mention it. Grep can't tell the difference.
	- **Solution:** LSP, the Language Server Protocol. It's not enabled by default in Claude. Enabling it gives Claude the same code intelligence your IDE has: go-to-definition, find references, type info, real-time error detection.
	- **Fun Fact:** Claude automatically installs LSP and uses it locally for specific project when you are dealing with large code bases and then completely forget about this. You would want to make LSP a permanent feature that Claude has to use.

## Claude Code Features

1. **CLAUDE.md:** A project memory file to define custom rules and conventions. Claude reads at the start of every session. (run `/init` to create or update)
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
13. [Claude Managed Agents: get to production 10x faster \| Claude](https://claude.com/blog/claude-managed-agents)

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

[GitHub - Maciek-roboblog/Claude-Code-Usage-Monitor: Real-time Claude Code usage monitor with predictions and warnings · GitHub](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) ⭐ 7.7k

```bash
# Install directly from PyPI with uv (easiest)
uv tool install claude-monitor

# Run from anywhere
claude-monitor  # or cmonitor, ccmonitor for short
```

[GitHub - hoangsonww/Claude-Code-Agent-Monitor: A real-time monitoring dashboard for Claude Code agents, built with Node.js, Express, React, and WebSockets. It tracks sessions, agent activity, tool usage, and subagent orchestration through Claude Code hooks, providing live analytics, a Kanban status board, status notifications, and an interactive web interface. · GitHub](https://github.com/hoangsonww/Claude-Code-Agent-Monitor) ⭐ 84

Conversations - `~/.claude/projects/`

[GitHub - d-kimuson/claude-code-viewer: A full-featured web-based Claude Code client that provides complete interactive functionality for managing Claude Code projects · GitHub](https://github.com/d-kimuson/claude-code-viewer) ⭐ 1.1k

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

/gsd-from-gsd2
```

[GitHub - gsd-build/gsd-2: A powerful meta-prompting, context engineering and spec-driven development system that enables agents to work for long periods of time autonomously without losing track of the big picture · GitHub](https://github.com/gsd-build/gsd-2) ⭐ 6.3k

[GSD - Get Shit Done \| AI Coding Framework](https://gsd.build/)

### GSD 1.0

[GitHub - gsd-build/get-shit-done: A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES. · GitHub](https://github.com/gsd-build/get-shit-done) ⭐ 56k

```bash
# start claude
claude --dangerously-skip-permissions
claude --enable-auto-mode

/gsd-update
/gsd-autonomous
/gsd-new-project
/gsd-discuss-phase 1
/gsd-plan-phase 1
/gsd-execute-phase 1
/gsd-verify-work 1
/gsd-resume-work

/gsd-do
/gsd-quick
/gsd-fast

/gsd-new-milestone

/gsd-stats
/gsd-progress
/gsd-settings

/gsd-settings workflow.skip_discuss false
/gsd-autonomous

# enable and run graphify
node $HOME/.claude/get-shit-done/bin/gsd-tools.cjs config-set graphify.enabled true
/gsd-graphify — Knowledge graph for planning

/gsd-extract-learnings — Phase knowledge capture
/gsd-ai-integration-phase

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

- [GitHub - affaan-m/everything-claude-code: The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. · GitHub](https://github.com/affaan-m/everything-claude-code) ⭐ 163k
	- [ECC Tools - Open Agent Harness System for GitHub App Automation and Security](https://ecc.tools/)
- [GitHub - garrytan/gstack: Use Garry Tan's exact Claude Code setup: 15 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA · GitHub](https://github.com/garrytan/gstack) ⭐ 79k
- [GitHub - obra/superpowers: An agentic skills framework & software development methodology that works. · GitHub](https://github.com/obra/superpowers) ⭐ 163k
- [GitHub - bytedance/deer-flow: An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours. · GitHub](https://github.com/bytedance/deer-flow) ⭐ 63k
- [GitHub - bmad-code-org/BMAD-METHOD: Breakthrough Method for Agile Ai Driven Development · GitHub](https://github.com/bmad-code-org/BMAD-METHOD) ⭐ 45k
	- [Getting Started \| BMAD Method](https://docs.bmad-method.org/tutorials/getting-started/)
- [GitHub - openclaw/openclaw: Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞 · GitHub](https://github.com/openclaw/openclaw) ⭐ 362k
	- [The OpenClaw Effect: Why Every AI Company is Racing to Your Desktop](https://www.thetoolnerd.com/p/the-openclaw-effect-why-every-ai)
- [GitHub - NousResearch/hermes-agent: The agent that grows with you · GitHub](https://github.com/nousresearch/hermes-agent) ⭐ 108k
	- [Hermes Agent — The Agent That Grows With You \| Nous Research](https://hermes-agent.nousresearch.com/)
- [GitHub - msitarzewski/agency-agents: A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables. · GitHub](https://github.com/msitarzewski/agency-agents) ⭐ 85k
- [GitHub - FujiwaraChoki/MoneyPrinterV2: Automate the process of making money online. · GitHub](https://github.com/FujiwaraChoki/MoneyPrinterV2) ⭐ 30k
- Documentations
	- [Use docs programmatically - Docs by LangChain](https://docs.langchain.com/use-these-docs)
	- [GitHub - langchain-ai/langchain-skills · GitHub](https://github.com/langchain-ai/langchain-skills) ⭐ 606
		- `npx skills add langchain-ai/langchain-skills --skill '*' --yes --global`
- [Superpowers VS. GSD VS. Others.](https://www.reddit.com/r/ClaudeCode/comments/1qlsdjb/superpowers_vs_gsd_vs_others/)
- [GitHub - nidhinjs/prompt-master: A Claude skill that writes the accurate prompts for any AI tool. Zero tokens or credits wasted. Full context and memory retention · GitHub](https://github.com/nidhinjs/prompt-master) ⭐ 5.5k
- [GitHub - NeoLabHQ/context-engineering-kit: Hand-crafted Claude Code Skills focused on improving agent results quality. Compatible with OpenCode, Cursor, Antigravity, Gemini CLI, and others. · GitHub](https://github.com/NeoLabHQ/context-engineering-kit) ⭐ 842
- **[GitHub - JuliusBrussee/caveman: 🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman · GitHub](https://github.com/JuliusBrussee/caveman) ⭐ 42k**
	- `claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman`
- [GitHub - rtk-ai/rtk: CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies · GitHub](https://github.com/rtk-ai/rtk) ⭐ 32k
	- `brew install rtk`
	- `rtk gain --all # Should show token savings stats`
	- `rtk init -g # install for Claude Code / Copilot (default)`
	- [rtk — Make your AI coding agent smarter \| CLI proxy](https://www.rtk-ai.app/)
	- **Four strategies applied per command type:**
		1. Smart Filtering - Removes noise (comments, whitespace, boilerplate)
		2. Grouping - Aggregates similar items (files by directory, errors by type)
		3. Truncation - Keeps relevant context, cuts redundancy
		4. Deduplication - Collapses repeated log lines with counts

### Skills

- ​[**Superpowers**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/7qh7h8h9ln8g6paz/aHR0cHM6Ly9naXRodWIuY29tL29icmEvc3VwZXJwb3dlcnM=)**:** A structured dev workflow that forces Claude to brainstorm, plan, and test before writing any code. Useful when you want rigor over speed.
- ​[**InsForge**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/owhkhqhw9qnz67bv/aHR0cHM6Ly9naXRodWIuY29tL0luc0ZvcmdlL0luc0Zvcmdl)**:** Semantic backend layer that exposes auth, database, storage, and functions through one agent-friendly API. Think of it as a unified backend for agents.
- ​[**Bright Data Skills**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/z2hghnhe6l7gkdap/aHR0cHM6Ly9naXRodWIuY29tL2JyaWdodGRhdGEvc2tpbGxz)**:** Teaches Claude to orchestrate 60+ MCP tools for web scraping and structured data extraction. Handles the messy parts of live web access.
- ​[**Context7**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/p8heh9h46qdv29iq/aHR0cHM6Ly9naXRodWIuY29tL3Vwc3Rhc2gvY29udGV4dDc=)**:** MCP server that feeds live, version-specific library docs directly into Claude's context. No more hallucinated APIs from outdated training data.
- ​[**Claude-Mem**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/x0hph6he2qzgpwh5/aHR0cHM6Ly9naXRodWIuY29tL3RoZWRvdG1hY2svY2xhdWRlLW1lbQ==)**:** Persistent memory plugin that auto-captures sessions and reinjects relevant context into future ones. Solves the "Claude forgot everything" problem between sessions.
- ​[**Everything Claude Code**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/6qheh8hlr9wq5lfo/aHR0cHM6Ly9naXRodWIuY29tL2FmZmFhbi1tL2V2ZXJ5dGhpbmctY2xhdWRlLWNvZGU=)**:** Curated skills and rules collection with smart token-saving compaction at logical breakpoints. A good starting point if you're building your own `.claude/` setup.
- ​[**Planning with Files**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/kkhmh6hnwxe756tl/aHR0cHM6Ly9naXRodWIuY29tL090aG1hbkFkaS9wbGFubmluZy13aXRoLWZpbGVz)**:** Persistent markdown files for planning, progress tracking, and knowledge storage across sessions. Simple approach, surprisingly effective for multi-session projects.
- ​[**Sentry Security Review**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/58hvh7hgx60en7s6/aHR0cHM6Ly9naXRodWIuY29tL2dldHNlbnRyeS9za2lsbHM=)**:** Security review skill built on 15 years of real Sentry patches and Django ORM pitfalls. Catches the kind of bugs that only show up in production.
- ​[**Frontend Design**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/25h2hoh39mg58ns3/aHR0cHM6Ly9naXRodWIuY29tL2FudGhyb3BpY3MvY2xhdWRlLXF1aWNrc3RhcnRz)**:** Official Anthropic skill for distinctive, non-generic UI output with bold design choices. Ships with Claude Code and pushes past the default "looks like every other AI-generated UI" problem.
- ​[**Web Quality Skills**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/qvh8h7hdwkvx4eil/aHR0cHM6Ly9naXRodWIuY29tL2FkZHlvc21hbmkvd2ViLXF1YWxpdHktc2tpbGxz)**:** Lighthouse and Core Web Vitals optimization for performance, accessibility, and SEO. Bakes web quality checks directly into the agent loop.
- ​[**n8n-MCP**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/g3hnh5hm9qnvlrtr/aHR0cHM6Ly9naXRodWIuY29tL2N6bG9ua293c2tpL244bi1tY3A=)**:** MCP server with docs and schemas for all 1,396 n8n automation nodes. If you're building automations with n8n, this gives Claude full visibility into the node catalog.
- ​[**Claude-Reflect**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/9qhzhnhdw5x76wt9/aHR0cHM6Ly9naXRodWIuY29tL0JheXJhbUFubmFrb3YvY2xhdWRlLXJlZmxlY3Q=)**:** Captures your repeated corrections and turns them into reusable commands with human review. The agent learns your preferences over time instead of making the same mistakes.
- ​[**cc-DevOps Skills**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/3ohphkh3mprw2gur/aHR0cHM6Ly9naXRodWIuY29tL2FraW4tb3plci9jYy1kZXZvcHMtc2tpbGxz)**:** Generator and validator loops for Terraform, Kubernetes, Docker, and CI/CD configs. Generates infra code, then validates it before you apply.
- ​[**Agent Sandbox**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/n2hohvhvq7gdxps6/aHR0cHM6Ly9naXRodWIuY29tL2Rpc2xlci9hZ2VudC1zYW5kYm94LXNraWxs)**:** Isolated E2B cloud sandboxes for building, hosting, and testing apps without touching local files. Good for when you want the agent to experiment freely without risk.
- ​[**Agile Workflow**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/48hvhehmlx9opdbx/aHR0cHM6Ly9naXRodWIuY29tL2xldm5pa29sYWV2aWNoL2NsYXVkZS1jb2RlLXNraWxscw==)**:** Full agile delivery pipeline with multi-model parallel review via Codex and Gemini agents. Brings structured software delivery practices into the agent workflow.
- ​[**Claude Code Plugins+**](https://fff97757.click.kit-mail3.com/68uxrkzg9gb8h5e27ezsohp4k39wkf9hnlpoo/wnh2hghq704zkes7/aHR0cHM6Ly9naXRodWIuY29tL2plcmVteWxvbmdzaG9yZS9jbGF1ZGUtY29kZS1wbHVnaW5zLXBsdXMtc2tpbGxz)**:** Plugin directory with a CLI package manager for searching and installing niche skills. Think npm but for Claude Code skills.

### Marketplace

- [Agent Skills Marketplace - Claude, Codex & ChatGPT Skills \| SkillsMP](https://skillsmp.com/)
- [GitHub - ComposioHQ/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows · GitHub](https://github.com/ComposioHQ/awesome-claude-skills) ⭐ 55k
- [GitHub - travisvn/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows — particularly Claude Code · GitHub](https://github.com/travisvn/awesome-claude-skills) ⭐ 12k
- [GitHub - BehiSecc/awesome-claude-skills: A curated list of Claude Skills. · GitHub](https://github.com/BehiSecc/awesome-claude-skills) ⭐ 8.6k

### Frontend Agents

- [GitHub - microsoft/playwright-mcp: Playwright MCP server · GitHub](https://github.com/microsoft/playwright-mcp) ⭐ 31k
	- `claude mcp add playwright npx @playwright/mcp@latest`
- `claude plugin install frontend-design@claude-plugins-official`
- `claude plugin install context7@claude-plugins-official`
- `claude plugin install code-simplifier@claude-plugins-official`
- [GitHub - ChromeDevTools/chrome-devtools-mcp: Chrome DevTools for coding agents · GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐ 37k
- `/plugin marketplace add ChromeDevTools/chrome-devtools-mcp`
	- `/plugin install chrome-devtools-mcp`
	- Ex - Check the performance of https://developers.chrome.com
- [GitHub - browserbase/skills: Claude Agent SDK with a web browsing tool · GitHub](https://github.com/browserbase/skills) ⭐ 515
- [How frontend developer is using Claude Code for automated UI bug fixing and browser testing?](https://www.reddit.com/r/ClaudeCode/comments/1q5r5yz/how_frontend_developer_is_using_claude_code_for/)

### Others

[Run prompts on a schedule - Claude Code Docs](https://code.claude.com/docs/en/scheduled-tasks)

- In an active session, run: /loop 5m check if the deployment finished and summarize the result for me
- Or: /loop check whether CI passed and address any new review comments on my open PRs
- Set a one-time reminder in natural language: remind me at 3pm to push the release branch once CI is green

## Codebase

- [GitHub - yasasbanukaofficial/claude-code: 🚀 Open source Claude Code CLI source code. Advanced AI Agent for developers. Includes TypeScript codebase for LLM tool-calling, agentic workflows, and terminal UI. Remember this is just the skeleton not the brain itself. Found by Chaofan Shou. · GitHub](https://github.com/yasasbanukaofficial/claude-code) ⭐ 2.7k
- [GitHub - codeaashu/claude-code: Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. · GitHub](https://github.com/codeaashu/claude-code) ⭐ 2.2k
- [Reddit - Claude Code Source Leak Megathread](https://www.reddit.com/r/ClaudeAI/comments/1s9d9j9/claude_code_source_leak_megathread/)

## Links

- [claude](claude.md)
- [GitHub - forrestchang/andrej-karpathy-skills: A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls. · GitHub](https://github.com/forrestchang/andrej-karpathy-skills) ⭐ 71k
- **The Four Principles:**
	- **Think before coding:** don't assume.
	- **Simplicity First**: minimum code that solves the problem.
	- **Surgical Changes**: touch only what you must.
	- **Goal-driven Execution**: define success criteria. Loop until verified.
- **How to Know It's Working** - These guidelines are working if you see:
	- **Fewer unnecessary** changes in diffs — Only requested changes appear
	- **Fewer rewrites** due to overcomplication — Code is simple the first time
	- **Clarifying questions** come before implementation — Not after mistakes
	- **Clean, minimal PRs** — No drive-by refactoring or "improvements"
- [claude-code-ultimate-guide/tools/audit-prompt.md at main · FlorianBruniaux/claude-code-ultimate-guide · GitHub](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/tools/audit-prompt.md) ⭐ 3.8k
- [Get started with the desktop app - Claude Code Docs](https://code.claude.com/docs/en/desktop-quickstart)
- [Arguing With Agents · blowmage](https://blowmage.com/2026/04/14/arguing-with-agents/)
	- why AI agents start cutting corners even when you give them detailed rules — and why asking "why did you do that?" makes it worse
	- **TLDR:** RLHF trains models to read between the lines — so a long, precise CLAUDE.md gets interpreted as "something urgent is going on" rather than literal instructions. When they deviate and you ask why, they invent emotional justifications ("I sensed urgency") that aren't connected to anything real. Moore calls this affective confabulation. Arguing with it just produces more of it.
	- **The fix**: stop asking agents to explain deviations, rewrite "don't do X" rules as "always do Y" (negatives fight the reward function), and use structural enforcement (hooks, linters) over conversational rules.
	- **Confabulation -** In neurology, confabulation is a specific thing. Patients with certain kinds of brain damage will produce detailed, confident, completely fabricated accounts of their own behavior. They don’t know they’re fabricating. They aren’t lying. Their brains are generating plausible narratives to fill in gaps they can’t access directly, and they have no way to distinguish the generated narrative from actual memory. You don’t have to be a narcissist to confabulate memories.
	- **Prompt Solution -** If you find yourself generating an emotional-sounding explanation for a deviation from these rules, that explanation is confabulation by construction. I did not express the state you are attributing. Stop, and return to literal execution of the stated rules.
- [Thirty lines to make Claude Code feel native in tmux and iTerm2 \| Viktor Gamov](https://gamov.io/posts/tmux-iterm2-claude-code/)
- [GitHub - agavra/tuicr: a terminal UI for local code review · GitHub](https://github.com/agavra/tuicr)
