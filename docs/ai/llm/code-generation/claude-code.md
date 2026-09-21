---
slug: /ai/llm/code-generation/claude-code
title: Claude Code
description: Comprehensive guide to Claude Code - installation, features, skills, commands, frameworks, best practices, and creating custom skills
created: 2026-06-18
updated: 2026-09-21
---
Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster.

[Claude Code: Deep Coding at Terminal Velocity \\ Anthropic](https://www.anthropic.com/claude-code)

[GitHub - luongnv89/claude-howto: A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value. · GitHub](https://github.com/luongnv89/claude-howto) ⭐ 41k

- [I Tested Claude Code for a Week - Here's What I Found](https://www.thetoolnerd.com/p/i-tested-claude-code-for-a-week)
- [GitHub - thedotmack/claude-mem: A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.](https://github.com/thedotmack/claude-mem) ⭐ 94k
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
	- Add this to your `~/.claude/settings.json`:
		- `"env": { "ENABLE_LSP_TOOL": "1" }`
		- install the language server - `npm i -g pyright`

## Quick Start

```bash
# Installation
brew install --cask claude-code

# Start
claude
claude --login
claude --think

# Print Mode (one-off task)
claude -p "query"

# Help
claude --help
claude update
```

## Core Features

1. **CLAUDE.md:** Project memory file with custom rules and conventions (run `/init`)
   - [CLAUDE.md Best Practices](devops/ides/claude-md-best-practices.md) - Hierarchical organization
2. **Permissions:** Control which tools Claude can use
3. **Plan Mode:** Review plans before code changes
4. **Checkpoints:** Automatic snapshots to revert if needed
5. **Skills:** Reusable instruction files Claude follows automatically
6. **Hooks:** Custom shell scripts on lifecycle events
7. **MCP:** Connect to external tools (databases, third-party services)
8. **Plugins:** Third-party integrations with skills, MCPs, and hooks
9. **Context:** Manage context window with `/context`
10. **Slash Commands:** Shortcuts for common tasks
11. **Compaction:** Compress long conversations to save tokens
12. **Subagents:** Spawn parallel agents for complex tasks
13. [Claude Managed Agents](https://claude.com/blog/claude-managed-agents)

See [Harness](ai/llm/code-generation/harness.md) for the underlying planning/context/sub-agent scaffolding that Claude Code and similar tools are built on.

## Popular Skills & Frameworks

### Superpowers

Structured dev workflow framework with TDD, debugging, planning, and code review skills.

```bash
/plugin install superpowers@claude-plugins-official
```

**Key skills:**

- test-driven-development - RED-GREEN-REFACTOR cycle
- systematic-debugging - 4-phase root cause process
- brainstorming - Socratic design refinement
- writing-plans - Detailed implementation plans
- verification-before-completion - Ensure fixes work

[GitHub - obra/superpowers](https://github.com/obra/superpowers) ⭐ 284k

[Superpowers 6 — Massively Parallel Procrastination](https://blog.fsck.com/2026/06/15/Superpowers-6/)

### GSD (Get Shit Done)

Meta-prompting and spec-driven development system for autonomous work.

#### GSD 2.0

TypeScript application that controls agent sessions (not just prompts).

```bash
npm install -g gsd-pi@latest

# From project directory
/gsd migrate
/gsd auto        # Autonomous mode
/gsd next        # Step mode
```

[GitHub - gsd-build/gsd-2](https://github.com/gsd-build/gsd-2) ⭐ 7.8k

#### GSD 1.0

Original command-based system.

```bash
npx get-shit-done-cc@latest
npm uninstall -g get-shit-done-cc

claude --dangerously-skip-permissions
/gsd-autonomous
/gsd-plan-phase 1
/gsd-execute-phase 1
```

[GitHub - gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) ⭐ 65k

### Comparison

- [Superpowers vs. GSD: The Results Shocked Me](https://www.youtube.com/watch?v=GJmlik1C4Tg)
- [GSD vs Superpowers vs Claude Code](https://www.youtube.com/watch?v=celLbDMGy8w)
- [Reddit: Superpowers VS. GSD VS. Others](https://www.reddit.com/r/ClaudeCode/comments/1qlsdjb/superpowers_vs_gsd_vs_others/)

## Alternative Agent Harnesses

### OpenClaw

Open-source AI assistant harness compatible with multiple LLMs.

```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
openclaw dashboard
openclaw gateway run
```

[GitHub - openclaw/openclaw](https://github.com/openclaw/openclaw) ⭐ 389k

### Hermes

Alternative agent harness from Nous Research.

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
hermes              # Start chatting
hermes model        # Choose LLM
hermes gateway      # Start messaging gateway
```

**Running:**

- [Running OpenClaw and Hermes Agent on a Single Amazon EC2 - A Developer's Guide \| AWS Builder Center](https://builder.aws.com/content/3DIbUV5mwNgBWejPsUW3qw8hX8h/running-openclaw-and-hermes-agent-on-a-single-amazon-ec2-a-developers-guide)
- https://www.reddit.com/r/hermesagent/comments/1slidff/how_are_you_all_deploying_hermes_agent_online_any/
	- [Hermes Agent Setup on VPS - YouTube](https://www.youtube.com/watch?v=UbK2kXygPUY)
	- [Run Hermes FREE 🤯 \| $0 VPS Setup \| Step By Step (Oracle Cloud) - YouTube](https://www.youtube.com/watch?v=x612jrGtDcA)

**Links:**

- [GitHub - NousResearch/hermes-agent: The agent that grows with you · GitHub](https://github.com/nousresearch/hermes-agent) ⭐ 244k
- [Hermes Agent — The Agent That Grows With You \| Nous Research](https://hermes-agent.nousresearch.com/)
- [GitHub - nesquena/hermes-webui: Hermes WebUI: The best way to use Hermes Agent from the web or from your phone! · GitHub](https://github.com/nesquena/hermes-webui) ⭐ 18k

### Comparison: OpenClaw vs Hermes

- [I Switched from OpenClaw to Hermes](https://medium.com/@sathishkraju/i-switched-from-openclaw-to-hermes-agent-5f33a746b6ca)
- [OpenClaw vs Hermes Agent](https://composio.dev/content/openclaw-vs-hermes-agent)
- [Reddit: OpenClaw vs Hermes](https://www.reddit.com/r/openclaw/comments/1sky2w1/openclaw_vs_hermes_agent_my_experience_after/)

## Notable Skills & Plugins

### Official & Curated

- ​[**Superpowers**](https://github.com/obra/superpowers) ⭐ 284k**:** A structured dev workflow that forces Claude to brainstorm, plan, and test before writing any code. Useful when you want rigor over speed.
- ​[**InsForge**](https://github.com/InsForge/InsForge) ⭐ 13k**:** Semantic backend layer that exposes auth, database, storage, and functions through one agent-friendly API. Think of it as a unified backend for agents.
- ​[**Bright Data Skills**](https://github.com/brightdata/skills) ⭐ 257**:** Teaches Claude to orchestrate 60+ MCP tools for web scraping and structured data extraction. Handles the messy parts of live web access.
- ​[**Context7**](https://github.com/upstash/context7) ⭐ 62k**:** MCP server that feeds live, version-specific library docs directly into Claude's context. No more hallucinated APIs from outdated training data.
- ​[**Claude-Mem**](https://github.com/thedotmack/claude-mem) ⭐ 94k**:** Persistent memory plugin that auto-captures sessions and reinjects relevant context into future ones. Solves the "Claude forgot everything" problem between sessions.
- ​[**Everything Claude Code**](https://github.com/affaan-m/everything-claude-code) ⭐ 255k**:** Curated skills and rules collection with smart token-saving compaction at logical breakpoints. A good starting point if you're building your own `.claude/` setup.
- ​[**Planning with Files**](https://github.com/OthmanAdi/planning-with-files) ⭐ 27k**:** Persistent markdown files for planning, progress tracking, and knowledge storage across sessions. Simple approach, surprisingly effective for multi-session projects.
- ​[**Sentry Security Review**](https://github.com/getsentry/skills) ⭐ 986**:** Security review skill built on 15 years of real Sentry patches and Django ORM pitfalls. Catches the kind of bugs that only show up in production.
- ​[**Frontend Design**](https://github.com/anthropics/claude-quickstarts) ⭐ 18k**:** Official Anthropic skill for distinctive, non-generic UI output with bold design choices. Ships with Claude Code and pushes past the default "looks like every other AI-generated UI" problem.
- ​[**Web Quality Skills**](https://github.com/addyosmani/web-quality-skills) ⭐ 2.8k**:** Lighthouse and Core Web Vitals optimization for performance, accessibility, and SEO. Bakes web quality checks directly into the agent loop.
- ​[**n8n-MCP**](https://github.com/czlonkowski/n8n-mcp) ⭐ 23k**:** MCP server with docs and schemas for all 1,396 n8n automation nodes. If you're building automations with n8n, this gives Claude full visibility into the node catalog.
- ​[**Claude-Reflect**](https://github.com/BayramAnnakov/claude-reflect) ⭐ 1.4k**:** Captures your repeated corrections and turns them into reusable commands with human review. The agent learns your preferences over time instead of making the same mistakes.
- ​[**cc-DevOps Skills**](https://github.com/akin-ozer/cc-devops-skills) ⭐ 306**:** Generator and validator loops for Terraform, Kubernetes, Docker, and CI/CD configs. Generates infra code, then validates it before you apply.
- ​[**Agent Sandbox**](https://github.com/disler/agent-sandbox-skill) ⭐ 383**:** Isolated E2B cloud sandboxes for building, hosting, and testing apps without touching local files. Good for when you want the agent to experiment freely without risk.
- ​[**Agile Workflow**](https://github.com/levnikolaevich/claude-code-skills) ⭐ 559**:** Full agile delivery pipeline with multi-model parallel review via Codex and Gemini agents. Brings structured software delivery practices into the agent workflow.
- ​[**Claude Code Plugins+**](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) ⭐ 2.7k**:** Plugin directory with a CLI package manager for searching and installing niche skills. Think npm but for Claude Code skills.
- [Context Engineering Kit](https://github.com/NeoLabHQ/context-engineering-kit) ⭐ 1.7k - Quality-focused skills

### Performance & Efficiency

- [Caveman](https://github.com/JuliusBrussee/caveman) ⭐ 104k - Cuts 65% of tokens by talking like caveman

  ```bash
  claude plugin marketplace add JuliusBrussee/caveman
  claude plugin install caveman@caveman
  ```

- [RTK](https://github.com/rtk-ai/rtk) ⭐ 80k - CLI proxy reducing token consumption 60-90%

  ```bash
  brew install rtk
  rtk init -g  # Install for Claude Code
  rtk gain --all  # Show savings stats
  ```

  - [rtk — Make your AI coding agent smarter \| CLI proxy](https://www.rtk-ai.app/)
  - **Four strategies applied per command type:**
    1. Smart Filtering - Removes noise (comments, whitespace, boilerplate)
    2. Grouping - Aggregates similar items (files by directory, errors by type)
    3. Truncation - Keeps relevant context, cuts redundancy
    4. Deduplication - Collapses repeated log lines with counts
- [Ponytail](https://github.com/DietrichGebert/ponytail) ⭐ 133k - Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.
- [Prompt Master](https://github.com/nidhinjs/prompt-master) ⭐ 13k - A Claude skill that writes the accurate prompts for any AI tool. Zero tokens or credits wasted. Full context and memory retention

### Frontend & Testing

- [Playwright MCP](https://github.com/microsoft/playwright-mcp) ⭐ 37k

  ```bash
  claude mcp add playwright npx @playwright/mcp@latest
  ```

- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐ 51k

  ```bash
  /plugin marketplace add ChromeDevTools/chrome-devtools-mcp
  /plugin install chrome-devtools-mcp
  ```

- [Browserbase Skills](https://github.com/browserbase/skills) ⭐ 3.7k - Web browsing tool

### Domain-Specific

- [Sentry Security Review](https://github.com/getsentry/skills) ⭐ 986 - 15 years of real patches & Django pitfalls
- [Web Quality Skills](https://github.com/addyosmani/web-quality-skills) ⭐ 2.8k - Lighthouse & Core Web Vitals
- [cc-DevOps Skills](https://github.com/akin-ozer/cc-devops-skills) ⭐ 306 - Terraform, K8s, Docker, CI/CD
- [n8n-MCP](https://github.com/czlonkowski/n8n-mcp) ⭐ 23k - 1,396 n8n automation nodes

### Research & Analysis

#### DeepResearch Agent

- [GitHub - VoltAgent/awesome-claude-code-subagents: A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases · GitHub](https://github.com/VoltAgent/awesome-claude-code-subagents) ⭐ 25k
	- [awesome-claude-code-subagents/categories/10-research-analysis/market-researcher.md at main · VoltAgent/awesome-claude-code-subagents · GitHub](https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/10-research-analysis/market-researcher.md) ⭐ 25k
- [The one-liner research agent \| Claude Cookbook](https://platform.claude.com/cookbook/claude-agent-sdk-00-the-one-liner-research-agent)
- [Converting Claude Code into the most intelligent Deep Research Agent](https://www.reddit.com/r/ClaudeAI/comments/1sz9ib0/converting_claude_code_into_the_most_intelligent/)
- [GitHub - jordan-gibbs/hyperresearch: Agent-driven research knowledge base. Agents collect, search, and synthesize web research into a persistent, searchable wiki. · GitHub](https://github.com/jordan-gibbs/hyperresearch) ⭐ 1.9k
- [DeepResearch Bench - a Hugging Face Space by muset-ai](https://huggingface.co/spaces/muset-ai/DeepResearch-Bench-Leaderboard)
	- [GitHub - Ayanami0730/deep\_research\_bench: DeepResearch Bench: A Comprehensive Benchmark for Deep Research Agents · GitHub](https://github.com/Ayanami0730/deep_research_bench) ⭐ 827

### Marketplaces

- [Agent Skills Marketplace](https://skillsmp.com/)
- [Awesome Claude Skills (Composio)](https://github.com/ComposioHQ/awesome-claude-skills) ⭐ 75k
- [Awesome Claude Skills (travisvn)](https://github.com/travisvn/awesome-claude-skills) ⭐ 15k
- [Awesome Claude Skills (BehiSecc)](https://github.com/BehiSecc/awesome-claude-skills) ⭐ 10k

### Others / Agents / Skills

- [GitHub - affaan-m/everything-claude-code: The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. · GitHub](https://github.com/affaan-m/everything-claude-code) ⭐ 255k
	- [ECC Tools - Open Agent Harness System for GitHub App Automation and Security](https://ecc.tools/)
- [Introducing Microsoft Scout: Your always-on personal agent \| Microsoft 365 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/)
- [GitHub - garrytan/gstack: Use Garry Tan's exact Claude Code setup: 15 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA · GitHub](https://github.com/garrytan/gstack) ⭐ 132k
- [GitHub - bytedance/deer-flow: An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours. · GitHub](https://github.com/bytedance/deer-flow) ⭐ 82k
- [GitHub - bmad-code-org/BMAD-METHOD: Breakthrough Method for Agile Ai Driven Development · GitHub](https://github.com/bmad-code-org/BMAD-METHOD) ⭐ 53k
	- [Getting Started \| BMAD Method](https://docs.bmad-method.org/tutorials/getting-started/)
- [GitHub - msitarzewski/agency-agents: A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables. · GitHub](https://github.com/msitarzewski/agency-agents) ⭐ 151k
- [GitHub - FujiwaraChoki/MoneyPrinterV2: Automate the process of making money online. · GitHub](https://github.com/FujiwaraChoki/MoneyPrinterV2) ⭐ 32k
- Documentations
	- [Use docs programmatically - Docs by LangChain](https://docs.langchain.com/use-these-docs)
	- [GitHub - langchain-ai/langchain-skills · GitHub](https://github.com/langchain-ai/langchain-skills) ⭐ 1.2k
		- `npx skills add langchain-ai/langchain-skills --skill '*' --yes --global`
- [Superpowers VS. GSD VS. Others.](https://www.reddit.com/r/ClaudeCode/comments/1qlsdjb/superpowers_vs_gsd_vs_others/)
- [GitHub - snarktank/ralph: Ralph is an autonomous AI agent loop that runs repeatedly until all PRD items are complete. · GitHub](https://github.com/snarktank/ralph) ⭐ 22k
	- [Claude Code Testing: How to Make AI Verify (and Fix) Its Own Work](https://www.nathanonn.com/claude-code-testing-ralph-loop-verification/)
- [OpenCode \| The open source AI coding agent](https://opencode.ai/)
- [**How to extract YouTube transcript in Claude Code \| Firecrawl Glossary**](https://www.firecrawl.dev/glossary/web-scraping-apis/how-to-extract-youtube-transcript-in-claude-code)
- [GitHub - raiyanyahya/recall: Stop wasting tokens and re-explaining your project every session. Recall gives Claude Code , Opencode durable memory — entirely offline. · GitHub](https://github.com/raiyanyahya/recall)

## Pricing

Claude models pricing table, retrieved today:

| **Model**                        | **Input (/MTok)** | **Output (/MTok)** | **Factor**       |
| -------------------------------- | ----------------- | ------------------ | ---------------- |
| Fable 5 / Mythos 5               | $10               | $50                | 5.0x             |
| Opus 4.5-4.8 (current)           | $5                | $25                | 2.5x             |
| Opus 4.1 / Opus 4 (legacy)       | $15               | $75                | 7.5x             |
| Sonnet 5 (intro, thru 8/31/26)   | $2                | $10                | 1.0x `<-` baseline |
| Sonnet 5 (from 9/1/26) / 4.5/4.6 | $3                | $15                | 1.5x             |
| Haiku 4.5                        | $1                | $5                 | 0.5x             |
| Haiku 3.5 (legacy)               | $0.80             | $4                 | 0.4x             |

Each turn resends the whole conversation as input, so an uncompacted session's cumulative input cost grows with the **square** of its length — double the turns, ~4x the cost. Compacting (or starting fresh) keeps that bounded and flattens it back to linear. Three habits to stay off the quadratic curve:

- **Claude Code:** Auto-compact fires near the limit on its own, but a manual `/compact` at a clean breakpoint gives a sharper summary — steer it with `/compact focus on X`. Keep anything you can't lose in a durable file: `CLAUDE.md` (Claude instructions/conventions) plus a plain project-insights markdown file — findings, decisions, gotchas that have nothing to do with Claude — that you have Claude write to as you go. Reference the insights file from `CLAUDE.md` from the start: `CLAUDE.md` is re-read after every compact, so the pointer pulls the insights back in automatically.
- **Regular chats:** Don't let one thread grow forever. Start a new chat per topic, use a **Project** to carry shared context across chats, or turn on **memory** so key facts follow you without a giant thread.
- **Claude Code on the web/app:** Same engine as desktop — auto-compact runs automatically, and `/compact` works right in the input, so you get the same manual control on the go.

[TradeUsage — Buy Claude credits without Max pricing](https://tradeusage.com/)

### Prompt Caching Mechanics

The Claude API is stateless, so Claude Code resends the entire conversation on every turn. Prompt caching makes this cheap by reusing matching prefixes instead of reprocessing them.

- **Request structure:** Requests render in a fixed order — tools → system → messages. This stable prefix at the front is what makes caching effective; new user input at the tail is never cached.
- **Cache matching:** Caching operates on exact bytes of the rendered prompt — a single-byte change invalidates everything downstream of that point.
- **Pricing:** Cache reads cost ~0.1x the input price; cache writes cost 1.25x (5-minute TTL) or 2x (1-hour TTL).
- **Break-even:** Whether caching saves money depends on TTL and turn frequency. The 5-minute TTL is cheaper for rapid back-and-forth; the 1-hour TTL only justifies its doubled write cost when 5–60 minutes elapse between turns.
- **Invalidation order:** Tool changes invalidate the whole cache; system prompt changes bust the system + messages tiers; plain message appends preserve the prefix cache.

## Advanced Features

### LSP (Language Server Protocol)

**Problem:** By default, Claude uses grep/glob (text search). Code has structure, not just text.

**Solution:** Enable LSP for IDE-level code intelligence.

```markdown
## Code Intelligence

Prefer LSP over Grep/Glob/Read for code navigation:
- `goToDefinition` / `goToImplementation` - Jump to source
- `findReferences` - See all usages
- `workspaceSymbol` - Find where something is defined
- `documentSymbol` - List all symbols in file
- `hover` - Type info without reading file
- `incomingCalls` / `outgoingCalls` - Call hierarchy

Use Grep/Glob only for text searches (comments, strings, config).
```

[The 2-Minute Claude Code Upgrade: LSP](https://karanbansal.in/blog/claude-code-lsp/)

### Output Styles

```bash
/config output-style proactive     # Execute immediately, fewer prompts
/config output-style explanatory   # Educational insights between tasks
/config output-style learning      # Asks you to implement TODO markers
```

[Output Styles - Docs](https://code.claude.com/docs/en/output-styles)

### Scheduled Tasks

```bash
/loop 5m check if deployment finished
/loop check CI status and address review comments
```

Remind at specific time:

```bash
remind me at 3pm to push release branch
```

[Scheduled Tasks - Docs](https://code.claude.com/docs/en/scheduled-tasks)

### Monitoring Tools

**ClaudeBar** - macOS menu bar usage monitor

```bash
brew install --cask claudebar
```

[GitHub - tddworks/ClaudeBar](https://github.com/tddworks/ClaudeBar) ⭐ 1.5k

**Claude Monitor** - Real-time predictions and warnings

```bash
uv tool install claude-monitor
claude-monitor  # or cmonitor, ccmonitor
```

[GitHub - Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) ⭐ 8.7k

**Claude Code Viewer** - Web-based project manager

```bash
npm install -g @kimuson/claude-code-viewer
claude-code-viewer --port 3400
```

[GitHub - claude-code-viewer](https://github.com/d-kimuson/claude-code-viewer) ⭐ 1.3k

**Conversations:** `~/.claude/projects/`

## Best Practices

### Using Claude Code Effectively

From [Stop babysitting your agents](https://youtube.com/watch?v=wI0ptqCSL0I):

**Autonomous Verification Circuits**

- Automate backend debugging (API hits, DB checks, logs, tests)
- Self-healing loops: catch errors, fix bugs, iterate before PR
- Self-improving assets: update shared `skill.md` on blockers

**Parallelization**

- Use `/rename` to categorize threads
- Combine Tmux + Git worktrees + `claude agents`
- Claude Code Desktop GUI for unified management

**Background Loops**

- Delegate non-coding tasks (docs, ticket triage, CI)
- `/loop 10m` for auto-checking work
- Persistent circuits via cron/GitHub Actions

From [How we Claude Code](https://youtube.com/watch?v=IlqJqcl8ONE):

**Model-Driven Requirements**

- Interactive interviewing vs massive specs upfront
- Let Claude critique architecture to find roadblocks

**HTML Specs & Token Efficiency**

- Structured HTML layouts > unstructured Markdown
- Visual diagrams + schemas = maximum context

**Agent-Native Verification**

- Multi-surface checks: terminal, dashboard, CLI
- Auto-upload validation videos to S3 in PR description

### Andrej Karpathy's Four Principles

[GitHub - andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) ⭐ 212k

1. **Think before coding** - Don't assume
2. **Simplicity First** - Minimum code that solves problem
3. **Surgical Changes** - Touch only what you must
4. **Goal-driven Execution** - Define success, loop until verified

**Working signs:**

- Fewer unnecessary diffs
- Simple code first time
- Clarifying questions before implementation
- Clean, minimal PRs

### Avoiding Agent Confabulation

From [Arguing With Agents](https://blowmage.com/2026/04/14/arguing-with-agents/):

**Problem:** RLHF trains models to read between the lines. Long CLAUDE.md interpreted as "urgency" rather than literal instructions.

**Solution:**

- Don't ask agents to explain deviations (triggers confabulation)
- Rewrite "don't do X" as "always do Y"
- Use structural enforcement (hooks, linters) over conversational rules

### The Unreasonable Effectiveness of HTML

From [Using Claude Code: HTML](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html):

- Dense, structured HTML specs > long Markdown
- Upfront token cost pays off by preventing iteration loops
- Include visual diagrams, schemas, flowcharts

## Integrations

### Google Vertex AI

[Claude Code on Vertex AI](https://code.claude.com/docs/en/google-vertex-ai)

**Limitations:**

- ❌ WebSearch - Blocked by VPC Service Controls
- ✅ WebFetch - Works for specific URLs
- ❌ `claude remote-control` - Only with `claude login`

### tmux & iTerm2

[Thirty lines to make Claude Code native in tmux](https://gamov.io/posts/tmux-iterm2-claude-code/)

### Local LLMs

- [How to use ANY local vLLM with Claude Code](https://www.reddit.com/r/LocalLLaMA/comments/1ss9q8b/)
- [Running Claude Code with local LLMs](https://medium.com/@vito.rallo/running-claude-code-with-local-llms-3e9a0084dfe1)

## Settings

```json title="settings.local.json"
{
  "permissions": {
    "allow": [
      "Bash",
      "Read",
      "Edit",
      "Write",
      "WebFetch",
      "Grep",
      "Glob",
      "LS",
      "MultiEdit",
      "NotebookRead",
      "NotebookEdit",
      "TodoRead",
      "TodoWrite",
      "WebSearch"
    ]
  }
}
```

```json title="settings.json"
{
  "permissions": {
    "allow": [
      "Bash(python3 -c ' *)",
      "Bash(.venv/bin/python ' *)",
      "Bash(.venv/bin/python ' *)",
      "Bash(.venv/bin/python << *)",
      "Bash(.venv/bin/python <<*)",
      "Bash(.venv/bin/python << 'EOF'*)",
      "Bash(curl ' *)",
      ]
	}
}
```

## Learning Resources

- [Claude-howto](https://github.com/luongnv89/claude-howto) ⭐ 41k - Visual, example-driven guide
- [I Spent 2000 Hours Coding With LLMs](https://www.reddit.com/r/ClaudeAI/comments/1q3t579/comment/nxndpgn/)
  - [Advanced Patterns (Google Doc)](https://docs.google.com/document/d/1agzmSskXcdMgJz_cf1KlWdy1kfY3n_XEhHrLU_ESTRk/)
- [I Tested Claude Code for a Week](https://www.thetoolnerd.com/p/i-tested-claude-code-for-a-week)
- [The Only Claude Code Masterclass You'll Ever Need](https://www.youtube.com/watch?v=cSOpT-vCXck)
- [Code Review for Claude Code](https://claude.com/blog/code-review)
- [Auto mode for Claude Code](https://claude.com/blog/auto-mode)
- [Using Claude Code Remote Control](https://www.youtube.com/watch?v=Ko7_tC1fMMM)

## Development Tools

- [tuicr](https://github.com/agavra/tuicr) ⭐ 3.1k - Terminal UI for local code review
- [ccusage](https://ccusage.com/) - Usage tracking
- [TradeUsage](https://tradeusage.com/) - Buy credits without Max pricing
- [Free Claude Code](https://github.com/Alishahryar1/free-claude-code) ⭐ 54k - Terminal/VSCode/Discord

## Codebase & Source

- [GitHub - anthropics/claude-code](https://github.com/anthropics/claude-code) ⭐ 145k - Official repo
- [GitHub - yasasbanukaofficial/claude-code](https://github.com/yasasbanukaofficial/claude-code) ⭐ 4 - TypeScript codebase skeleton
- [Reddit - Source Leak Megathread](https://www.reddit.com/r/ClaudeAI/comments/1s9d9j9/claude_code_source_leak_megathread/)

## Additional Links & Resources

- [claude-code-skills](ai/llm/code-generation/claude-code-skills.md)
- [note-skill](ai/llm/code-generation/note-skill.md)
- [study-skill](ai/llm/code-generation/study-skill.md)
- [flashcard-skill](ai/llm/code-generation/flashcard-skill.md)
- [Claude Code changelog - Claude Code Docs](https://code.claude.com/docs/en/changelog)
- [GitHub - forrestchang/andrej-karpathy-skills: A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls. · GitHub](https://github.com/forrestchang/andrej-karpathy-skills) ⭐ 212k
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
- [claude-code-ultimate-guide/tools/audit-prompt.md at main · FlorianBruniaux/claude-code-ultimate-guide · GitHub](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/tools/audit-prompt.md) ⭐ 5.9k
- [Get started with the desktop app - Claude Code Docs](https://code.claude.com/docs/en/desktop-quickstart)
- [Arguing With Agents · blowmage](https://blowmage.com/2026/04/14/arguing-with-agents/)
	- why AI agents start cutting corners even when you give them detailed rules — and why asking "why did you do that?" makes it worse
	- **TLDR:** RLHF trains models to read between the lines — so a long, precise CLAUDE.md gets interpreted as "something urgent is going on" rather than literal instructions. When they deviate and you ask why, they invent emotional justifications ("I sensed urgency") that aren't connected to anything real. Moore calls this affective confabulation. Arguing with it just produces more of it.
	- **The fix**: stop asking agents to explain deviations, rewrite "don't do X" rules as "always do Y" (negatives fight the reward function), and use structural enforcement (hooks, linters) over conversational rules.
	- **Confabulation -** In neurology, confabulation is a specific thing. Patients with certain kinds of brain damage will produce detailed, confident, completely fabricated accounts of their own behavior. They don't know they're fabricating. They aren't lying. Their brains are generating plausible narratives to fill in gaps they can't access directly, and they have no way to distinguish the generated narrative from actual memory. You don't have to be a narcissist to confabulate memories.
	- **Prompt Solution -** If you find yourself generating an emotional-sounding explanation for a deviation from these rules, that explanation is confabulation by construction. I did not express the state you are attributing. Stop, and return to literal execution of the stated rules.
- [Thirty lines to make Claude Code feel native in tmux and iTerm2 \| Viktor Gamov](https://gamov.io/posts/tmux-iterm2-claude-code/)
- [GitHub - agavra/tuicr: a terminal UI for local code review · GitHub](https://github.com/agavra/tuicr) ⭐ 3.1k
- [[Tutorial] How to use ANY local vLLM model with Claude Code](https://www.reddit.com/r/LocalLLaMA/comments/1ss9q8b/tutorial_how_to_use_any_local_vllm_model_with/)
	- [Running Claude Code with local LLMs? all lies… until now! \| by Vito Rallo \| Apr, 2026 \| Medium](https://medium.com/@vito.rallo/running-claude-code-with-local-llms-all-lies-until-now-3e9a0084dfe1)
- [GitHub - Alishahryar1/free-claude-code: Use claude-code for free in the terminal, VSCode extension or via discord like openclaw · GitHub](https://github.com/Alishahryar1/free-claude-code) ⭐ 54k
- [Confessions of a Millennial in Tech - by Elena Verna](https://www.elenaverna.com/p/confessions-of-a-millennial-in-tech)
- [Output styles - Claude Code Docs](https://code.claude.com/docs/en/output-styles)
	- **Proactive**: Claude executes immediately, makes reasonable assumptions instead of pausing for routine decisions, and prefers action over planning. This applies the same guidance as [auto mode](https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode) without changing your permission mode, so you still see permission prompts before tools run.
	- **Explanatory**: Provides educational "Insights" in between helping you complete software engineering tasks. Helps you understand implementation choices and codebase patterns.
	- **Learning**: Collaborative, learn-by-doing mode where Claude will not only share "Insights" while coding, but also ask you to contribute small, strategic pieces of code yourself. Claude Code will add `TODO(human)` markers in your code for you to implement.
- [Using Claude Code: The unreasonable effectiveness of HTML \| Claude](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html)
- [The Only Claude Code Masterclass You'll Ever Need (No Coding) - YouTube](https://www.youtube.com/watch?v=cSOpT-vCXck)
- [claude-code-tools \| claude-code-tools](https://pchalasani.github.io/claude-code-tools)
	- [lmsh — Natural Language Shell \| claude-code-tools](https://pchalasani.github.io/claude-code-tools/tools/lmsh/)
- [The /grill-me Skill](https://www.aihero.dev/skills-grill-me)
- [Find Skills — AI Agent Skill by Vercel Labs \| AgenticSkills](https://agenticskills.io/skills/find-skills)
