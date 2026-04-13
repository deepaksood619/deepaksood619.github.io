# Harness

A harness in AI/LLM is the infrastructure, tools, and orchestration code that surrounds a Large Language Model (LLM) to transform it from a chatbot into an autonomous agent. It acts as the "control plane" that manages the model's memory, context, tool usage (APIs, search), and safety boundaries.

A well-built outer harness serves two goals: it increases the probability that the agent gets it right in the first place, and it provides a feedback loop that self-corrects as many issues as possible before they even reach human eyes. Ultimately it should reduce the review toil and increase the system quality, all with the added benefit of fewer wasted tokens along the way.

## Key Aspects of an AI Harness

- **Agent = Model + Harness:** While the LLM provides reasoning/intelligence, the harness provides "hands and eyes"—the capability to take action in real-world systems.
- **Orchestration Loop (ReAct):** The harness typically runs a "Thought-Action-Observation" loop, allowing the model to act, see the result, and decide on the next step, rather than simply responding once.
- **Tool Integration:** It connects the LLM to external data (databases) and action systems (code execution, file writing, web browsing).
- **State Management:** It manages what information (context) is fed to the model at each step, crucial for long-running tasks.
- **Examples:** Examples include frameworks like LangChain and AutoGPT, or specialized coding agents like Claude Code.

## Feedforward and Feedback

To harness a coding agent we both anticipate unwanted outputs and try to prevent them, and we put sensors in place to allow the agent to self-correct:

- **Guides (feedforward controls)** - anticipate the agent's behaviour and aim to steer it _before_ it acts. Guides increase the probability that the agent creates good results in the first attempt
- **Sensors (feedback controls)** - observe _after_ the agent acts and help it self-correct. Particularly powerful when they produce signals that are optimised for LLM consumption, e.g. custom linter messages that include instructions for the self-correction - a positive kind of prompt injection.

Separately, you get either an agent that keeps repeating the same mistakes (feedback-only) or an agent that encodes rules but never finds out whether they worked (feed-forward-only).

## DeepAgents

Using an LLM to call tools in a loop is the simplest form of an agent. This architecture, however, can yield agents that are "shallow" and fail to plan and act over longer, more complex tasks.

Applications like "Deep Research", "Manus", and "Claude Code" have gotten around this limitation by implementing a combination of four things: a **planning tool**, **sub agents**, access to a **file system**, and a **detailed prompt**.

`deepagents` is a Python package that implements these in a general purpose way so that you can easily create a Deep Agent for your application.

[GitHub - langchain-ai/deepagents: Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks. · GitHub](https://github.com/langchain-ai/deepagents)

[deepagents \| LangChain Reference](https://reference.langchain.com/python/deepagents)

## Links

- [Effective harnesses for long-running agents \\ Anthropic](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Harness design for long-running application development \\ Anthropic](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Harness engineering for coding agent users](https://martinfowler.com/articles/harness-engineering.html)
- [What is AI Harness Engineering? Your Guide to Controlling Autonomous Systems \| by Mohit Sewak, Ph.D. \| Be Open - Writers & Readers Pub \| Mar, 2026 \| Medium](https://medium.com/be-open/what-is-ai-harness-engineering-your-guide-to-controlling-autonomous-systems-30c9c8d2b489)
- [Harness Engineering: Turning AI Agents Into Reliable Engineers](https://www.reddit.com/r/ArtificialInteligence/comments/1sc3m1t/harness_engineering_turning_ai_agents_into/)
- [Harness capabilities - Docs by LangChain](https://docs.langchain.com/oss/python/deepagents/harness)
