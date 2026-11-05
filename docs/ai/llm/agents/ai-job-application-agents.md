---
slug: /ai/llm/agents/ai-job-application-agents
title: AI Job Application Agents
description: Open-source AI agents that search, score and tailor job applications on your own machine, compared with star counts, licenses, hardware needs and how much runs locally.
created: 2026-10-29
updated: 2026-10-29
---
Open-source tools that use an LLM agent (mostly a coding CLI such as Claude Code) to find jobs, score fit against a CV, tailor a CV and cover letter, prepare for interviews and track applications. Star counts below were pulled from the GitHub API on 2026-10-29.

## Comparison

| Tool | Stars | License | What it is | Who submits the application | Needs |
| --- | --- | --- | --- | --- | --- |
| [career-ops](https://github.com/career-ops-hq/career-ops) | ⭐ 78k | MIT | Job search agent: scan boards, score 1-5, tailor CV and cover letter, interview prep, tracker | You (it drafts every field and never submits) | Node 22+, an AI CLI (Claude Code, Codex, OpenCode, Qwen and others), Playwright Chromium for PDFs |
| [ai-job-search](https://github.com/ai-job-search-dev/ai-job-search) | ⭐ 67k | MIT | Claude Code framework: setup, scrape, rank, apply, interview, outcome | Not stated in the README; it tailors CV and cover letter | Claude Code (subscription or API credits), Python 3.10+, Bun, LaTeX |
| [invisible_dots](https://github.com/feder-cr/invisible_dots) | ⭐ 32k | MIT | General self-hosted agent that runs tasks on its own VM; **not** a job applier | n/a | Node 24+, Go 1.25+, QEMU and hardware virtualization, an OpenRouter key |

> [!WARNING]
> `feder-cr/invisible_dots` is not a job-application tool. The old URLs `feder-cr/Jobs_Applier_AI_Agent_AIHawk` and `AIHawk-FOSS/Auto_Jobs_Applier_AI_Agent` (the AIHawk LinkedIn auto-applier) now redirect to it, and its README describes a general-purpose agent. Its star count includes whatever the earlier repo accumulated. If you want AIHawk-style auto-apply, look for a fork or archive; this note does not verify one.

## career-ops

- Runs inside the AI CLI you already use; CV, profile and tracker stay on disk as markdown, YAML and TSV.
- Modes: scan job boards, evaluate one posting (score 1-5 against your CV), PDF CV and cover letter (HTML plus Playwright), contact discovery, application email drafts, batch evaluation with headless CLI workers, and a live apply assistant that fills forms but does not submit.
- Human-in-the-loop by design: the README states it never submits an application.
- Cost control: a `spend_tier` setting in `config/profile.yml` (economy, standard, premium) picks the model tier. A docs page covers running it on custom or local models and a free tier.
- Onboarding: open the CLI in the folder and it asks for your CV, profile and target roles by chat. `npm run doctor` checks setup.

```bash
git clone https://github.com/career-ops-hq/career-ops.git
cd career-ops && npm install
npx playwright install chromium   # only for PDF generation
claude                            # or codex / opencode / qwen
```

## ai-job-search

- A Claude Code workflow with six commands: `/setup` (profile), `/scrape` (find postings), `/rank` (shortlist), `/apply` (tailored CV and cover letter), `/interview` (prep for each round) and `/outcome` (track results).
- The core flow is language- and country-agnostic, but the bundled job-portal search skills target the Danish market (Jobindex, Jobnet and similar), so other countries need their own scrapers.
- Needs Claude Code with a paid plan or API credits, plus LaTeX (`lualatex` or `xelatex`) for the CV output.
- The README says it is independent and not affiliated with Anthropic, and that the author's own search with it ended in a hire.

## invisible_dots

- A self-hosted agent that gives each "Dot" its own hardware-accelerated Linux VM with a persistent disk, a browser with separate identities, memory and skills, MCP servers, permissions (allow, ask, deny), a task queue and automations. Reachable from a web UI, CLI, HTTP API, Telegram or WhatsApp.
- It markets a patched Firefox built to avoid anti-bot detection. Sites' terms of service and local law still apply to anything you automate.
- Model calls go through OpenRouter, so it is self-hosted but not offline.

## Running it locally

- All three are open source (MIT) and keep your data on your machine, but none is offline by default.
- career-ops with Claude Code on a subscription needs no API key, though model calls still go to Anthropic.
- A fully local setup needs an AI CLI that can point at a local model (OpenCode or Qwen CLI with Ollama). Results depend heavily on the model size.

## Setup notes (career-ops, 2026-10-29)

- Cloned and installed on a Mac with Node 24; `npm run doctor` passes once `cv.md`, `config/profile.yml`, `modes/_profile.md` and `portals.yml` exist.
- Its test suite assumes a fresh checkout. Five tests fail only because the scaffolded config files exist, and they pass when those files are moved aside.
- PDF generation refuses to write outside the project folder; write to `output/`.
- A headless `claude -p` evaluation of a sample posting worked. Without Bash permission it printed the evaluation but saved no report or tracker row.

## Also seen

- [neonwatty/job-apply-plugin](https://github.com/neonwatty/job-apply-plugin) (⭐ 131, MIT): Claude Code and Codex plugin that fills LinkedIn Easy Apply, Greenhouse, Ashby, Lever, Rippling and Workday forms in a visible browser.
- [GodsScion/Auto_job_applier_linkedIn](https://github.com/GodsScion/Auto_job_applier_linkedIn) (⭐ 3k, MIT): LinkedIn Selenium auto-apply bot.
- [proficientlyjobs/proficiently-claude-skills](https://github.com/proficientlyjobs/proficiently-claude-skills) (⭐ 438): Claude Code skills tied to a commercial service.
- Several small Ollama-based local projects with 0-1 stars, for example [xbrxr03/AutoJobSearch](https://github.com/xbrxr03/AutoJobSearch) and [Gildaciolopes/autoapply](https://github.com/Gildaciolopes/autoapply). Unproven.

## Related

- [Agents - Framework / Tools](agents-framework-tools.md)
- [Agentic Frameworks Deep Dive Analysis](agentic-frameworks-deep-dive-analysis.md)
