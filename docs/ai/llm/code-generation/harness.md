---
slug: /ai/llm/code-generation/harness
title: Harness
description: Discover how an AI harness enhances LLMs into autonomous agents, improving accuracy, reducing review toil, and optimizing tool usage for quality systems.
created: 2026-06-18
updated: 2026-08-06
---
A harness in AI/LLM is the infrastructure, tools, and orchestration code that surrounds a Large Language Model (LLM) to transform it from a chatbot into an autonomous agent. It acts as the "control plane" that manages the model's memory, context, tool usage (APIs, search), and safety boundaries.

A well-built outer harness serves two goals: it increases the probability that the agent gets it right in the first place, and it provides a feedback loop that self-corrects as many issues as possible before they even reach human eyes. Ultimately it should reduce the review toil and increase the system quality, all with the added benefit of fewer wasted tokens along the way.

## Key Aspects of an AI Harness

- **Agent = Model + Harness:** While the LLM provides reasoning/intelligence, the harness provides "hands and eyes"—the capability to take action in real-world systems. In coding contexts, the harness splits further into the agent builder's *internal* harness (the tool loop, system prompt, sandboxing) and the user's *outer* harness (repo-level guides and sensors layered on top).
- **Orchestration Loop (ReAct):** The harness typically runs a "Thought-Action-Observation" loop, allowing the model to act, see the result, and decide on the next step, rather than simply responding once.
- **Tool Integration:** It connects the LLM to external data (databases) and action systems (code execution, file writing, web browsing).
- **State Management:** It manages what information (context) is fed to the model at each step, crucial for long-running tasks.
- **Examples:** Examples include frameworks like LangChain and AutoGPT, or specialized coding agents like Claude Code.
- **Every component encodes an assumption:** each scaffold (context resets, sprint contracts, evaluator agents) exists because the harness engineer believes the model can't reliably do that part alone. Those assumptions should be stress-tested as models improve—the minimal sufficient harness moves rather than shrinks over time.

## Feedforward and Feedback

To harness a coding agent we both anticipate unwanted outputs and try to prevent them, and we put sensors in place to allow the agent to self-correct:

- **Guides (feedforward controls)** - anticipate the agent's behaviour and aim to steer it *before* it acts. Guides increase the probability that the agent creates good results in the first attempt. Examples: `AGENTS.md`/`CLAUDE.md` conventions, Skills, LSP/type-checker context exposed as MCP servers, codemods (e.g. OpenRewrite recipes) that constrain the solution space computationally.
- **Sensors (feedback controls)** - observe *after* the agent acts and help it self-correct. Particularly powerful when they produce signals that are optimised for LLM consumption, e.g. custom linter messages that include instructions for the self-correction - a positive kind of prompt injection.

Separately, you get either an agent that keeps repeating the same mistakes (feedback-only) or an agent that encodes rules but never finds out whether they worked (feed-forward-only).

### Computational vs. Inferential Controls

Both guides and sensors can be executed two ways, and mature harnesses combine both:

| Type | Execution | Speed | Examples |
| --- | --- | --- | --- |
| Computational | Deterministic | `<1s`–seconds, run on every change | tests, linters, type checkers, ArchUnit-style structural rules, coverage/mutation testing |
| Inferential | Semantic, non-deterministic | Slow, run post-integration or selectively | AI code review, LLM-as-judge, custom linter messages with embedded self-correction instructions |

Computational sensors gate obvious/irreversible problems cheaply; inferential sensors catch semantic issues (over-engineering, misunderstood intent, brute-force solutions) that no deterministic rule can express, but do so unreliably and expensively. Shift what you can left into pre-commit/pre-integration computational checks, and reserve inferential review for post-integration or continuous drift detection (dead code, coverage-quality decay, dependency drift, SLO degradation).

Harnessability isn't uniform across a codebase: strong typing, enforced module boundaries, and codified service topologies ("80% of the common patterns become harness templates") make a system easier to guide and sense. Legacy, high-debt codebases are the hardest to harness despite needing it most.

## Handling Multi-Step Instructions

Naive tool-calling loops are "shallow": they degrade once a task spans dozens of steps, because the model loses track of the overall goal, over- or under-scopes work, or declares victory prematurely. Harness engineering addresses this with explicit decomposition rather than hoping a bigger context window fixes it.

### Spec-first decomposition

Rather than having the agent code directly off a one-line user prompt, a **planner** step expands the brief into a detailed spec (features, user stories, data model, technical constraints) that becomes the source of truth for every later step. The planner is prompted to be *ambitious on scope* but *high-level on implementation detail*, so it doesn't cascade wrong low-level decisions into the plan. Downstream agents refer back to the spec instead of the original one-line prompt, which keeps long chains of sub-tasks aligned to the same intent.

### Sprint contracts

For work broken into units ("sprints" / features), the generator and an evaluator negotiate a **contract** before code is written: a small, testable list of deliverables and success criteria (a real example: 27 concrete criteria for a single "level editor" sprint, covering UI interactions, API route correctness, and data-model integrity). The contract bridges the gap between a high-level spec and implementation without over-specifying up front, and gives the evaluator something concrete to grade against instead of a vague "is this good?".

### Planning/TODO tools

Coding agents (Claude Code, and similarly-shaped harnesses) expose an explicit planning tool—a structured task list the model writes to before acting and updates as it progresses—rather than relying on the model to silently track multi-step plans in its own context. This externalizes the plan into state the harness (and the user) can inspect, interrupt, and resume, and prevents the model from silently dropping steps under context pressure. `deepagents` (below) implements this as one of its four core primitives.

### Sub-agent delegation

Splitting a large task across sub-agents with narrow, well-defined scopes (one feature, one file, one review dimension) keeps each individual context window focused and makes failures isolable — a sub-agent that goes off the rails only pollutes its own context, not the parent's. This is the same principle behind Deep Research/Manus/Claude Code style "deep agents" (see below) and behind evaluator/generator separation: a dedicated critic is far more tractable to tune toward skepticism than trying to make one agent critical of its own work.

## Context Management Across Long Sessions

Long-running agents eventually fill their context window; how the harness bridges that boundary determines whether work continues coherently or a session starts "half-implemented and undocumented."

- **Context resets vs. compaction:** Compaction (summarizing the conversation in place) preserves continuity but doesn't eliminate "context anxiety"—models start wrapping up prematurely as the limit approaches. A full context reset (clear the window, hand off state via structured artifacts) gives a clean slate at the cost of orchestration overhead. Which is load-bearing is model-dependent: it mattered for some model generations and became unnecessary for later ones as models improved at working coherently across a long single session.
- **State handoff artifacts:** agents pass state between sessions/sub-agents through files, not memory - a feature list, a progress log, git commit history. A feature-list entry is often kept as JSON rather than Markdown specifically because models are less likely to inappropriately rewrite a JSON file's structure; the agent is only permitted to flip a `passes: false` -> `true` field, with the instructions explicitly forbidding deleting/editing the tests themselves.
- **Session startup sequence:** a recurring session establishes its own boundaries cheaply before doing any new work: check the working directory, read git log + progress file for recent context, read the feature/task list for the next incomplete item, run an init script, and run a basic end-to-end verification before starting new work. This "saves tokens in every session since it doesn't have to figure out how to test the code" from scratch.
- **Incremental scoping:** explicitly prompting an agent to work on "only one feature at a time" (rather than the whole project) is a directly effective guardrail against a session running out of context mid-implementation.

```json
{
  "category": "functional",
  "description": "New chat button creates a fresh conversation",
  "steps": [
    "Navigate to main interface",
    "Click the 'New Chat' button",
    "Verify a new conversation is created",
    "Check that chat area shows welcome state",
    "Verify conversation appears in sidebar"
  ],
  "passes": false
}
```

## Multi-Agent Harness Architectures

For tasks that sit beyond what a single model can do reliably solo, harnesses compose multiple specialized agent roles instead of scaling up one agent's prompt:

- **Generator–Evaluator loop:** separates producing work from judging it. The evaluator can use browser-automation MCP tools (Playwright MCP, Puppeteer MCP) to interact with a running application like a real user would - navigating, screenshotting, checking API responses and database state - rather than scoring a static artifact. Subjective quality (design coherence, originality, craft) is made gradable by decomposing it into explicit criteria and calibrating the evaluator with few-shot graded examples; a threshold/any-criterion-fails rule keeps grading strict.
- **Three-agent system (Planner → Generator → Evaluator):** the planner expands the brief into a spec, the generator implements one feature/unit at a time and self-evaluates before handoff, the evaluator grades against the sprint contract and returns detailed feedback that loops back into the next generator iteration (observed ranges: 5-15 cycles for frontend/design work, multiple QA rounds for full-stack features).
- **Cost/quality tradeoff is real and measurable**, not just qualitative — in one benchmarked comparison, a solo agent finished a "game maker" app in ~20 minutes for ~$9 with broken core functionality, while the full Planner/Generator/Evaluator harness took ~6 hours and ~$200 to reach feature-complete, polished output. The harness is worth its overhead exactly when the task exceeds what the model can do reliably alone.
- **Progressive simplification:** as a new model generation ships, remove one harness component at a time and re-measure — sprint decomposition, context resets, or the evaluator step may stop being load-bearing. The evaluator specifically is only worth keeping when the task sits beyond the model's solo reliability; otherwise it's pure overhead.

## DeepAgents

Using an LLM to call tools in a loop is the simplest form of an agent. This architecture, however, can yield agents that are "shallow" and fail to plan and act over longer, more complex tasks.

Applications like "Deep Research", "Manus", and "Claude Code" have gotten around this limitation by implementing a combination of four things: a **planning tool**, **sub agents**, access to a **file system**, and a **detailed prompt**.

`deepagents` is a Python package that implements these in a general purpose way so that you can easily create a Deep Agent for your application.

[GitHub - langchain-ai/deepagents: Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks. · GitHub](https://github.com/langchain-ai/deepagents) ⭐ 24k

[deepagents \| LangChain Reference](https://reference.langchain.com/python/deepagents)

## Tools and Open Source Libraries

Building blocks that show up repeatedly when implementing a harness rather than just an agent framework:

- **[Claude Agent SDK](ai/llm/code-generation/claude-code.md)** - the same harness that powers Claude Code, exposed for building custom long-running agents; handles the tool-use loop, automatic context compaction, and sub-agent spawning.
- **LangGraph checkpointers** - snapshot the entire graph state at every "super-step," enabling "time-travel debugging": list past checkpoints, fetch one, mutate it, and resume execution from that point. This is the closest open-source equivalent to the state-handoff artifacts described above, implemented as a first-class primitive rather than files on disk. See [Agents - Framework / Tools](ai/llm/agents/agents-framework-tools.md).
- **Sandboxed execution environments** for the "acting environment" separate from the "thinking environment" (the LLM API): Docker (container-based, shares host kernel, needs seccomp/AppArmor hardening), and microVM isolation like Firecracker/E2B (hardware-level isolation, dedicated kernel per session, sub-200ms cold starts on the fastest platforms). Sandbox lifetime is typically capped and destroyed after a timeout so no malicious/runaway code can persist.
- **Browser-automation MCP servers** (Playwright MCP, Puppeteer MCP) - give an evaluator or QA agent the ability to click through a running app as a human tester would, rather than relying on unit/API-level tests alone. Known gap: some MCP browser tools can't see native browser `alert()`/`confirm()` modals, so features that depend on them tend to be under-tested.
- **Structural/architecture enforcement:** ArchUnit-style structural tests for module-boundary violations, OpenRewrite recipes as computational codemods, semgrep/eslint as fast pre-commit sensors.
- **Durable execution engines** (Temporal) for enterprise-scale durability - "replay-based fault tolerance" lets a workflow survive API failures, restarts, and deployments without losing progress, and lets a Human-in-the-Loop approval step "sleep" indefinitely without keeping the process alive.
- **[swarmd](https://github.com/richardartoul/swarmd)** - multi-tenant runtime for running background agents safely; agents are defined in YAML and run as goroutines behind a virtual shell with custom tools.

## Links

- [Effective harnesses for long-running agents \\ Anthropic](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Harness design for long-running application development \\ Anthropic](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html)
- [What is AI Harness Engineering? Your Guide to Controlling Autonomous Systems \| by Mohit Sewak, Ph.D. \| Be Open - Writers & Readers Pub \| Mar, 2026 \| Medium](https://medium.com/be-open/what-is-ai-harness-engineering-your-guide-to-controlling-autonomous-systems-30c9c8d2b489)
- [Harness Engineering: Turning AI Agents Into Reliable Engineers](https://www.reddit.com/r/ArtificialInteligence/comments/1sc3m1t/harness_engineering_turning_ai_agents_into/)
- [Harness capabilities - Docs by LangChain](https://docs.langchain.com/oss/python/deepagents/harness)
- [GitHub - richardartoul/swarmd: \`swarmd\` is a multi-tenant runtime for running background Agents in a safe and secure manner. Agents are defined in YAML and run as goroutines in a multi-tenant server with a virtual shell and custom tools. · GitHub](https://github.com/richardartoul/swarmd) ⭐ 31
- [Architectural fitness function - ThoughtWorks Technology Radar](https://www.thoughtworks.com/en-de/radar/techniques/architectural-fitness-function)
- [Approved Fixtures pattern](https://lexler.github.io/augmented-coding-patterns/patterns/approved-fixtures/)
