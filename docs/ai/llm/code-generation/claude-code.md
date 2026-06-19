# Claude Code

[Claude Code: Deep Coding at Terminal Velocity \\ Anthropic](https://www.anthropic.com/claude-code)

[GitHub - luongnv89/claude-howto: A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value. · GitHub](https://github.com/luongnv89/claude-howto) ⭐ 37k

- [I Tested Claude Code for a Week - Here's What I Found](https://www.thetoolnerd.com/p/i-tested-claude-code-for-a-week)
- [GitHub - thedotmack/claude-mem: A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.](https://github.com/thedotmack/claude-mem) ⭐ 83k
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

```markdown
## Code Intelligence

Prefer LSP over Grep/Glob/Read for code navigation:
- `goToDefinition` / `goToImplementation` to jump to source
- `findReferences` to see all usages across the codebase
- `workspaceSymbol` to find where something is defined
- `documentSymbol` to list all symbols in a file
- `hover` for type info without reading the file
- `incomingCalls` / `outgoingCalls` for call hierarchy

Before renaming or changing a function signature, use `findReferences` to find all call sites first.

Use Grep/Glob only for text/pattern searches (comments, strings, config values) where LSP doesn't help.

After writing or editing code, check LSP diagnostics before moving on. Fix any type errors or missing imports immediately.
```

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

claude mcp list
claude update
claude --help
```

- **/compact**: Manually shrinks the conversation history to save tokens while preserving key context.
- **/init**: Initializes a `CLAUDE.md` file in your project to store local coding standards and instructions.
	- [andrej-karpathy-skills/CLAUDE.md at main · forrestchang/andrej-karpathy-skills · GitHub](https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md) ⭐ 176k
	- [Writing a good CLAUDE.md \| HumanLayer Blog](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- **/model**: Quickly switch between models (e.g., switching to `haiku` for fast tasks or `opus` for complex logic).
- **/review**: Triggers a code review of your current changes or a specific file.
- **/rewind**: (Double-tap `Esc` or type `/rewind`) Opens a menu to undo recent code changes or revert the conversation.
- **/mcp**: Manages Model Context Protocol servers (connecting Claude to tools like Jira, Slack, or databases).
- **/clear:** This wipes the old context
- **/powerup:** interactive lessons teaching Claude Code features with animated demos

![Claude Command Cheatsheet](media/claude-commands-cheatsheet.png)

## Monitoring

- **/cost:** It will display a breakdown of **Input Tokens**, **Output Tokens**, and **Cache Hits/Misses**, along with a total USD estimate for the current session.
- **/stats**: Displays your current token usage and rate limit status.

[GitHub - tddworks/ClaudeBar: A macOS menu bar application that monitors AI coding assistant usage quotas. Keep track of your Claude, Codex, Antigravity ,and Gemini usage at a glance. · GitHub](https://github.com/tddworks/ClaudeBar) ⭐ 1.2k

- `brew install --cask claudebar`

[GitHub - Maciek-roboblog/Claude-Code-Usage-Monitor: Real-time Claude Code usage monitor with predictions and warnings · GitHub](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) ⭐ 8.2k

```bash
# Install directly from PyPI with uv (easiest)
uv tool install claude-monitor

# Run from anywhere
claude-monitor  # or cmonitor, ccmonitor for short
```

[GitHub - hoangsonww/Claude-Code-Agent-Monitor: A real-time monitoring dashboard for Claude Code agents, built with Node.js, Express, React, and WebSockets. It tracks sessions, agent activity, tool usage, and subagent orchestration through Claude Code hooks, providing live analytics, a Kanban status board, status notifications, and an interactive web interface. · GitHub](https://github.com/hoangsonww/Claude-Code-Agent-Monitor) ⭐ 462

Conversations - `~/.claude/projects/`

[GitHub - d-kimuson/claude-code-viewer: A full-featured web-based Claude Code client that provides complete interactive functionality for managing Claude Code projects · GitHub](https://github.com/d-kimuson/claude-code-viewer) ⭐ 1.2k

```bash
npm install -g @kimuson/claude-code-viewer
claude-code-viewer --port 3400
```

## Using Claude Code Effectively / Tips

**Video 1:** **[Stop babysitting your agents](https://youtube.com/watch?v=wI0ptqCSL0I)**

- **Autonomous Verification Circuits**
    - **Automate the Playbook:** Translate backend debugging habits (API hits, DB checks, reading logs, running unit tests) directly into automated agent circuits using Playwright or your backend APIs.
    - **Self-Healing Loops:** Instruct Claude to write code, catch execution log errors, fix its own bugs, and repeatedly iterate _before_ it bugs a human for a PR review.
    - **Self-Improving Assets:** Have Claude dynamically update a shared `skill.md` file whenever it hits env blockers (like expired mock auth or data seeding issues) to build team-wide automation skills.
- **Parallelization (Multi-Clauding)**
    - **Isolate Context:** Use the `/rename` command immediately to categorize active agent threads and avoid mental overload from tracking multiple streams.
    - **Terminal Multi-Tasking:** Combine Tmux panels with Git worktrees, and run `claude agents` to view active threads sorted by the level of human attention they require.
    - **Desktop Interface:** Use the unified Claude Code Desktop GUI to cleanly manage tasks, tabs, worktrees, and active background jobs in one window.
    - _Internal Note: The web code interface and mobile remote-control features are still in review at Confluent. Stick to local CLI/Desktop for now._
- **Background Loops**
    - **Delegate Chores:** Completely offload non-coding bookkeeping tasks (docs generation, ticket triaging, minor CI greening) to background loops.
    - **Interval Triggers:** Use `/loop 10m` inside a active session to force Claude to check its own work, rebase, or resolve PR comments automatically every 10 minutes.
    - **Persistent Routines:** Stand up persistent backend circuits triggered via cron, internal API endpoints, or GitHub Actions completely independent of your machine.

**Video 2:** **[How we Claude Code](https://youtube.com/watch?v=IlqJqcl8ONE)**

- **Model-Driven Requirement Extraction**
    - **Interactive Interviewing:** Avoid typing massive specs upfront; use open-ended prompts + the `askUserQuestion` tool to let Claude interview you and surface hidden backend edge cases.
    - **Architectural Critiques:** Task Claude to critique your existing schemas or specs to uncover hidden technical roadblocks and system alternatives.
- **HTML Specs & Token Efficiency**
    - **Structure Your Context:** Pack specification documentation into dense, structured HTML layouts instead of long, unstructured Markdown files.
    - **The Token Math:** A comprehensive spec costs tokens upfront but dramatically cuts total token waste by preventing long, endless trial-and-error iteration loops later.
    - **Dense Inputs:** Provide visual architecture diagrams, database schemas, or system flowcharts alongside text descriptions to feed it maximum context.
- **Agent-Native Verification**
    - **Multi-Surface Checks:** Ensure code successfully clears terminal test matrices, human dashboards, and automated headless CLI checkpoints (like `bun verify` in CI).
    - **Frictionless Human Review:** Configure Claude to auto-upload video clips or recordings of its successful validation runs to S3 and link them in the PR description, giving human reviewers instant proof of logic success.

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

[GitHub - gsd-build/gsd-2: A powerful meta-prompting, context engineering and spec-driven development system that enables agents to work for long periods of time autonomously without losing track of the big picture · GitHub](https://github.com/gsd-build/gsd-2) ⭐ 7.7k

[GSD - Get Shit Done \| AI Coding Framework](https://gsd.build/)

### GSD 1.0

[GitHub - gsd-build/get-shit-done: A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES. · GitHub](https://github.com/gsd-build/get-shit-done) ⭐ 64k

```bash
# install
npx get-shit-done-cc@latest

# uninstall
npx get-shit-done-cc --claude --global --uninstall

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

## Superpowers

[GitHub - obra/superpowers: An agentic skills framework & software development methodology that works. · GitHub](https://github.com/obra/superpowers) ⭐ 229k

```bash
/plugin install superpowers@claude-plugins-official
```

**Testing**

- **test-driven-development** - RED-GREEN-REFACTOR cycle (includes testing anti-patterns reference)

**Debugging**

- **systematic-debugging** - 4-phase root cause process (includes root-cause-tracing, defense-in-depth, condition-based-waiting techniques)
- **verification-before-completion** - Ensure it's actually fixed

**Collaboration**

- **brainstorming** - Socratic design refinement
- **writing-plans** - Detailed implementation plans
- **executing-plans** - Batch execution with checkpoints
- **dispatching-parallel-agents** - Concurrent subagent workflows
- **requesting-code-review** - Pre-review checklist
- **receiving-code-review** - Responding to feedback
- **using-git-worktrees** - Parallel development branches
- **finishing-a-development-branch** - Merge/PR decision workflow
- **subagent-driven-development** - Fast iteration with two-stage review (spec compliance, then code quality)

**Meta**

- **writing-skills** - Create new skills following best practices (includes testing methodology)
- **using-superpowers** - Introduction to the skills system

## Comparision

- [Superpowers vs. GSD: The Results Shocked Me - YouTube](https://www.youtube.com/watch?v=GJmlik1C4Tg)
- [GSD vs Superpowers vs Claude Code: A New AI King? - YouTube](https://www.youtube.com/watch?v=celLbDMGy8w)

## OpenClaw

[GitHub - openclaw/openclaw: Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞 · GitHub](https://github.com/openclaw/openclaw) ⭐ 379k

- `openclaw dashboard`
- [The OpenClaw Effect: Why Every AI Company is Racing to Your Desktop](https://www.thetoolnerd.com/p/the-openclaw-effect-why-every-ai)
- [Red Hat's OpenClaw maintainer just made enterprise Claw deployments a lot safer \| TechCrunch](https://techcrunch.com/2026/04/28/red-hats-openclaw-maintainer-just-made-enterprise-claw-deployments-a-lot-safer/)
- [GitHub - NVIDIA/NemoClaw: Run OpenClaw more securely inside NVIDIA OpenShell with managed inference · GitHub](https://github.com/NVIDIA/NemoClaw) ⭐ 21k
- [Buda — Run Your Agent Company — Cloud-Native AI Workforce](https://buda.im/)

```bash
# windows - powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

## Install (recommended)
npm install -g openclaw@latest
# or: pnpm add -g openclaw@latest

openclaw onboard --install-daemon

# Quick start (TL;DR)
openclaw onboard --install-daemon


openclaw update

openclaw dashboard
openclaw dashboard --no-open
openclaw tui

openclaw config get gateway.auth.token
grep "token" ~/.openclaw/openclaw.json

openclaw doctor --generate-gateway-token
openclaw doctor --fix

openclaw gateway status
nohup openclaw gateway run > /tmp/openclaw.log 2>&1 &
openclaw gateway stop
openclaw gateway run
openclaw reset
openclaw onboard --install-daemon
# hatch in browser

# In your agent's system prompt (or `SOUL.md`), explicitly instruct the AI to only respond when `@openclaw` is type

openclaw logs --follow

openclaw plugins enable workboard
openclaw gateway restart

openclaw hooks list
openclaw hooks enable <name>
openclaw hooks disable <name>

export NODE_COMPILE_CACHE=/var/tmp/openclaw-compile-cache
mkdir -p /var/tmp/openclaw-compile-cache
export OPENCLAW_NO_RESPAWN=1

openclaw uninstall
```

- [OpenClaw Meets AWS: End-to-End Testing and Deployment - DEV Community](https://dev.to/aws-builders/openclaw-meets-aws-end-to-end-testing-and-deployment-1ig1)
- [Mastering OpenClaw on AWS: Fine-Tuning Personality, Memory, and Soul - DEV Community](https://dev.to/aws-builders/mastering-openclaw-on-aws-fine-tuning-personality-memory-and-soul-37ig)

## Hermes

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

source ~/.bashrc    # reload shell (or: source ~/.zshrc)
hermes              # start chatting!

hermes              # Interactive CLI — start a conversation
hermes model        # Choose your LLM provider and model
hermes tools        # Configure which tools are enabled
hermes config set   # Set individual config values
hermes gateway      # Start the messaging gateway (Telegram, Discord, etc.)
hermes setup        # Run the full setup wizard (configures everything at once)
hermes claw migrate # Migrate from OpenClaw (if coming from OpenClaw)
hermes update       # Update to the latest version
hermes doctor       # Diagnose any issues

hermes gateway install
hermes gateway start
hermes logs gateway --follow

hermes dashboard
# http://127.0.0.1:9119
```

### Running

- [Running OpenClaw and Hermes Agent on a Single Amazon EC2 - A Developer's Guide \| AWS Builder Center](https://builder.aws.com/content/3DIbUV5mwNgBWejPsUW3qw8hX8h/running-openclaw-and-hermes-agent-on-a-single-amazon-ec2-a-developers-guide)
- https://www.reddit.com/r/hermesagent/comments/1slidff/how_are_you_all_deploying_hermes_agent_online_any/
	- [Hermes Agent Setup on VPS - YouTube](https://www.youtube.com/watch?v=UbK2kXygPUY)
	- [Run Hermes FREE 🤯 \| $0 VPS Setup \| Step By Step (Oracle Cloud) - YouTube](https://www.youtube.com/watch?v=x612jrGtDcA)

### Links

- [GitHub - NousResearch/hermes-agent: The agent that grows with you · GitHub](https://github.com/nousresearch/hermes-agent) ⭐ 194k
- [Hermes Agent — The Agent That Grows With You \| Nous Research](https://hermes-agent.nousresearch.com/)
- [GitHub - nesquena/hermes-webui: Hermes WebUI: The best way to use Hermes Agent from the web or from your phone! · GitHub](https://github.com/nesquena/hermes-webui)

## Hermes vs OpenClaw

- [I Switched from OpenClaw to Hermes Agent. Here’s What Nobody Told Me | Medium](https://medium.com/@sathishkraju/i-switched-from-openclaw-to-hermes-agent-heres-what-nobody-told-me-5f33a746b6ca)
- [OpenClaw vs Hermes Agent: The best agent harness in 2026 \| Composio](https://composio.dev/content/openclaw-vs-hermes-agent)
- https://www.reddit.com/r/openclaw/comments/1sky2w1/openclaw_vs_hermes_agent_my_experience_after/

## Others / Agents / Skills

- [GitHub - affaan-m/everything-claude-code: The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. · GitHub](https://github.com/affaan-m/everything-claude-code) ⭐ 216k
	- [ECC Tools - Open Agent Harness System for GitHub App Automation and Security](https://ecc.tools/)
- [Introducing Microsoft Scout: Your always-on personal agent \| Microsoft 365 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/02/introducing-microsoft-scout-your-always-on-personal-agent/)
- [GitHub - garrytan/gstack: Use Garry Tan's exact Claude Code setup: 15 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA · GitHub](https://github.com/garrytan/gstack) ⭐ 110k
- [GitHub - bytedance/deer-flow: An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours. · GitHub](https://github.com/bytedance/deer-flow) ⭐ 71k
- [GitHub - bmad-code-org/BMAD-METHOD: Breakthrough Method for Agile Ai Driven Development · GitHub](https://github.com/bmad-code-org/BMAD-METHOD) ⭐ 49k
	- [Getting Started \| BMAD Method](https://docs.bmad-method.org/tutorials/getting-started/)
- [GitHub - msitarzewski/agency-agents: A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables. · GitHub](https://github.com/msitarzewski/agency-agents) ⭐ 113k
- [GitHub - FujiwaraChoki/MoneyPrinterV2: Automate the process of making money online. · GitHub](https://github.com/FujiwaraChoki/MoneyPrinterV2) ⭐ 31k
- Documentations
	- [Use docs programmatically - Docs by LangChain](https://docs.langchain.com/use-these-docs)
	- [GitHub - langchain-ai/langchain-skills · GitHub](https://github.com/langchain-ai/langchain-skills) ⭐ 800
		- `npx skills add langchain-ai/langchain-skills --skill '*' --yes --global`
- [Superpowers VS. GSD VS. Others.](https://www.reddit.com/r/ClaudeCode/comments/1qlsdjb/superpowers_vs_gsd_vs_others/)
- [GitHub - nidhinjs/prompt-master: A Claude skill that writes the accurate prompts for any AI tool. Zero tokens or credits wasted. Full context and memory retention · GitHub](https://github.com/nidhinjs/prompt-master) ⭐ 9.4k
- [GitHub - NeoLabHQ/context-engineering-kit: Hand-crafted Claude Code Skills focused on improving agent results quality. Compatible with OpenCode, Cursor, Antigravity, Gemini CLI, and others. · GitHub](https://github.com/NeoLabHQ/context-engineering-kit) ⭐ 1.1k
- **[GitHub - JuliusBrussee/caveman: 🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman · GitHub](https://github.com/JuliusBrussee/caveman) ⭐ 73k**
	- `claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman`
- [GitHub - DietrichGebert/ponytail: Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote. · GitHub](https://github.com/DietrichGebert/ponytail) ⭐ 15k
- [GitHub - rtk-ai/rtk: CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies · GitHub](https://github.com/rtk-ai/rtk) ⭐ 63k
	- `brew install rtk`
	- `rtk gain --all # Should show token savings stats`
	- `rtk init -g # install for Claude Code / Copilot (default)`
	- [rtk — Make your AI coding agent smarter \| CLI proxy](https://www.rtk-ai.app/)
	- **Four strategies applied per command type:**
		1. Smart Filtering - Removes noise (comments, whitespace, boilerplate)
		2. Grouping - Aggregates similar items (files by directory, errors by type)
		3. Truncation - Keeps relevant context, cuts redundancy
		4. Deduplication - Collapses repeated log lines with counts
- [GitHub - snarktank/ralph: Ralph is an autonomous AI agent loop that runs repeatedly until all PRD items are complete. · GitHub](https://github.com/snarktank/ralph) ⭐ 20k
	- [Claude Code Testing: How to Make AI Verify (and Fix) Its Own Work](https://www.nathanonn.com/claude-code-testing-ralph-loop-verification/)
- [OpenCode \| The open source AI coding agent](https://opencode.ai/)
- [TradeUsage — Buy Claude credits without Max pricing](https://tradeusage.com/)

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

### DeepResearch Agent

- [GitHub - VoltAgent/awesome-claude-code-subagents: A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases · GitHub](https://github.com/VoltAgent/awesome-claude-code-subagents) ⭐ 22k
	- [awesome-claude-code-subagents/categories/10-research-analysis/market-researcher.md at main · VoltAgent/awesome-claude-code-subagents · GitHub](https://github.com/VoltAgent/awesome-claude-code-subagents/blob/main/categories/10-research-analysis/market-researcher.md) ⭐ 22k
- [The one-liner research agent \| Claude Cookbook](https://platform.claude.com/cookbook/claude-agent-sdk-00-the-one-liner-research-agent)
- [Converting Claude Code into the most intelligent Deep Research Agent](https://www.reddit.com/r/ClaudeAI/comments/1sz9ib0/converting_claude_code_into_the_most_intelligent/)
- [GitHub - jordan-gibbs/hyperresearch: Agent-driven research knowledge base. Agents collect, search, and synthesize web research into a persistent, searchable wiki. · GitHub](https://github.com/jordan-gibbs/hyperresearch) ⭐ 462
- [DeepResearch Bench - a Hugging Face Space by muset-ai](https://huggingface.co/spaces/muset-ai/DeepResearch-Bench-Leaderboard)
	- [GitHub - Ayanami0730/deep\_research\_bench: DeepResearch Bench: A Comprehensive Benchmark for Deep Research Agents · GitHub](https://github.com/Ayanami0730/deep_research_bench) ⭐ 756

### Marketplace

- [Agent Skills Marketplace - Claude, Codex & ChatGPT Skills \| SkillsMP](https://skillsmp.com/)
- [GitHub - ComposioHQ/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows · GitHub](https://github.com/ComposioHQ/awesome-claude-skills) ⭐ 65k
- [GitHub - travisvn/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows — particularly Claude Code · GitHub](https://github.com/travisvn/awesome-claude-skills) ⭐ 13k
- [GitHub - BehiSecc/awesome-claude-skills: A curated list of Claude Skills. · GitHub](https://github.com/BehiSecc/awesome-claude-skills) ⭐ 9.5k

### Frontend Agents

- [GitHub - microsoft/playwright-mcp: Playwright MCP server · GitHub](https://github.com/microsoft/playwright-mcp) ⭐ 34k
	- `claude mcp add playwright npx @playwright/mcp@latest`
- `claude plugin install frontend-design@claude-plugins-official`
- `claude plugin install context7@claude-plugins-official`
- `claude plugin install code-simplifier@claude-plugins-official`
- [GitHub - ChromeDevTools/chrome-devtools-mcp: Chrome DevTools for coding agents · GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐ 44k
- `/plugin marketplace add ChromeDevTools/chrome-devtools-mcp`
	- `/plugin install chrome-devtools-mcp`
	- Ex - Check the performance of https://developers.chrome.com
- [GitHub - browserbase/skills: Claude Agent SDK with a web browsing tool · GitHub](https://github.com/browserbase/skills) ⭐ 3.6k
- [How frontend developer is using Claude Code for automated UI bug fixing and browser testing?](https://www.reddit.com/r/ClaudeCode/comments/1q5r5yz/how_frontend_developer_is_using_claude_code_for/)

### Others

[Run prompts on a schedule - Claude Code Docs](https://code.claude.com/docs/en/scheduled-tasks)

- In an active session, run: /loop 5m check if the deployment finished and summarize the result for me
- Or: /loop check whether CI passed and address any new review comments on my open PRs
- Set a one-time reminder in natural language: remind me at 3pm to push the release branch once CI is green

**WebSearch vs WebFetch**

  - ❌ WebSearch - Blocked by VPCSC VPC Service Controls (Google Cloud security boundary)
  - ✅ WebFetch - Works fine for specific URLs

## Skills vs Slash Commands

| Feature              | **Slash Commands**                                                                   | **Skills**                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Invocation**       | **Manual**: You type `/command` to trigger a specific action.                        | **Automatic**: Claude detects when it needs a skill based on your request or context.                          |
| **Best For**         | One-off actions, session control, or explicit shortcuts (e.g., `/cost`, `/compact`). | Complex, multi-step workflows or domain expertise (e.g., security audits, code refactoring).                   |
| **Data Structure**   | Typically a single `.md` file in `.claude/commands/`.                                | A folder containing `SKILL.md` plus supporting scripts and templates.                                          |
| **Token Efficiency** | The entire prompt is added to the context every time it's invoked.                   | **Progressive Disclosure**: Only the name/description load initially; full instructions load only when needed. |

[Understanding CLAUDE.md vs Skills vs Slash Commands vs Plugins](https://www.reddit.com/r/ClaudeAI/comments/1ped515/understanding_claudemd_vs_skills_vs_slash/)

## Codebase

- [GitHub - yasasbanukaofficial/claude-code: 🚀 Open source Claude Code CLI source code. Advanced AI Agent for developers. Includes TypeScript codebase for LLM tool-calling, agentic workflows, and terminal UI. Remember this is just the skeleton not the brain itself. Found by Chaofan Shou. · GitHub](https://github.com/yasasbanukaofficial/claude-code) ⭐ 3.5k
- [GitHub - codeaashu/claude-code: Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. · GitHub](https://github.com/codeaashu/claude-code) ⭐ 2.9k
- [Reddit - Claude Code Source Leak Megathread](https://www.reddit.com/r/ClaudeAI/comments/1s9d9j9/claude_code_source_leak_megathread/)
- [GitHub - anthropics/claude-code: Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands. · GitHub](https://github.com/anthropics/claude-code) ⭐ 133k

## Links

- [GitHub - forrestchang/andrej-karpathy-skills: A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls. · GitHub](https://github.com/forrestchang/andrej-karpathy-skills) ⭐ 176k
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
- [claude-code-ultimate-guide/tools/audit-prompt.md at main · FlorianBruniaux/claude-code-ultimate-guide · GitHub](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/tools/audit-prompt.md) ⭐ 5.0k
- [Get started with the desktop app - Claude Code Docs](https://code.claude.com/docs/en/desktop-quickstart)
- [Arguing With Agents · blowmage](https://blowmage.com/2026/04/14/arguing-with-agents/)
	- why AI agents start cutting corners even when you give them detailed rules — and why asking "why did you do that?" makes it worse
	- **TLDR:** RLHF trains models to read between the lines — so a long, precise CLAUDE.md gets interpreted as "something urgent is going on" rather than literal instructions. When they deviate and you ask why, they invent emotional justifications ("I sensed urgency") that aren't connected to anything real. Moore calls this affective confabulation. Arguing with it just produces more of it.
	- **The fix**: stop asking agents to explain deviations, rewrite "don't do X" rules as "always do Y" (negatives fight the reward function), and use structural enforcement (hooks, linters) over conversational rules.
	- **Confabulation -** In neurology, confabulation is a specific thing. Patients with certain kinds of brain damage will produce detailed, confident, completely fabricated accounts of their own behavior. They don’t know they’re fabricating. They aren’t lying. Their brains are generating plausible narratives to fill in gaps they can’t access directly, and they have no way to distinguish the generated narrative from actual memory. You don’t have to be a narcissist to confabulate memories.
	- **Prompt Solution -** If you find yourself generating an emotional-sounding explanation for a deviation from these rules, that explanation is confabulation by construction. I did not express the state you are attributing. Stop, and return to literal execution of the stated rules.
- [Thirty lines to make Claude Code feel native in tmux and iTerm2 \| Viktor Gamov](https://gamov.io/posts/tmux-iterm2-claude-code/)
- [GitHub - agavra/tuicr: a terminal UI for local code review · GitHub](https://github.com/agavra/tuicr) ⭐ 908
- [[Tutorial] How to use ANY local vLLM model with Claude Code](https://www.reddit.com/r/LocalLLaMA/comments/1ss9q8b/tutorial_how_to_use_any_local_vllm_model_with/)
	- [Running Claude Code with local LLMs? all lies… until now! \| by Vito Rallo \| Apr, 2026 \| Medium](https://medium.com/@vito.rallo/running-claude-code-with-local-llms-all-lies-until-now-3e9a0084dfe1)
- [GitHub - Alishahryar1/free-claude-code: Use claude-code for free in the terminal, VSCode extension or via discord like openclaw · GitHub](https://github.com/Alishahryar1/free-claude-code) ⭐ 35k
- [Confessions of a Millennial in Tech - by Elena Verna](https://www.elenaverna.com/p/confessions-of-a-millennial-in-tech)
- [Output styles - Claude Code Docs](https://code.claude.com/docs/en/output-styles)
	- **Proactive**: Claude executes immediately, makes reasonable assumptions instead of pausing for routine decisions, and prefers action over planning. This applies the same guidance as [auto mode](https://code.claude.com/docs/en/permission-modes#eliminate-prompts-with-auto-mode) without changing your permission mode, so you still see permission prompts before tools run.
	- **Explanatory**: Provides educational “Insights” in between helping you complete software engineering tasks. Helps you understand implementation choices and codebase patterns.
	- **Learning**: Collaborative, learn-by-doing mode where Claude will not only share “Insights” while coding, but also ask you to contribute small, strategic pieces of code yourself. Claude Code will add `TODO(human)` markers in your code for you to implement.
- [Using Claude Code: The unreasonable effectiveness of HTML \| Claude](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html)
- [The Only Claude Code Masterclass You'll Ever Need (No Coding) - YouTube](https://www.youtube.com/watch?v=cSOpT-vCXck)
