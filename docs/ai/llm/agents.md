# Agents

- Presentation - [Automating the Future: Build Powerful AI Agents - Google Slides](https://docs.google.com/presentation/d/1nRNP7h89k-8FTCP2kMSMbAa0zIJ6r0COm7voa1JT6Sc/edit?usp=sharing)
- An LLM Agent is a software entity capable of reasoning and autonomously executing tasks.
- [GitHub - viktoriasemaan/multi-agent: Examples of AI Multi-Agent Solutions](https://github.com/viktoriasemaan/multi-agent) ⭐ 204
- [Building LLM Agents with Tool Use - YouTube](https://youtu.be/5drn2DO7gNY)
- [AI Agents Are Changing AWS Cost Prediction - YouTube](https://youtu.be/_cjuQlc62uc)

## Concepts

1. **Agent:** An autonomous entity that perceives, reasons, and acts in an environment to achieve goals.
2. **Environment:** The surrounding context or sandbox in which the agent operates and interacts.
3. **Perception:** The process of interpreting sensory or environmental data to build situational awareness.
4. **State:** The agent’s current internal condition or representation of the world.
5. **Memory:** Storage of recent or historical information for continuity and learning.
6. **Large Language Models:** Foundation models powering language understanding and generation.
7. **Reflex Agent:** A simple type of agent that makes decisions based on predefined “condition-action” rules.
8. **Knowledge Base:** Structured or unstructured data repository used by agents to inform decisions.
9. **CoT (Chain of Thought):** A reasoning method where agents articulate intermediate steps for complex tasks.
10. **ReACT:** A framework that combines step-by-step reasoning with direct environmental actions.
11. **Tools:** APIs or external systems that agents use to augment their capabilities.
12. **Action:** Any task or behavior executed by the agent as a result of its reasoning.
13. **Planning:** Devising a sequence of actions to reach a specific goal.
14. **Orchestration:** Coordinating multiple steps, tools, or agents to fulfill a task pipeline.
15. **Handoffs:** The transfer of responsibilities or tasks between different agents.
16. **Multi-Agent System:** A framework where multiple agents operate and collaborate in the same environment.
17. **Swarm:** Emergent intelligent behavior from many agents following local rules without central control.
18. **Agent Debate:** A mechanism where agents argue opposing views to refine or improve outcomes.
19. **Evaluation:** Measuring the effectiveness or success of an agent’s actions and outcomes.
20. **Learning Loop:** The cycle where agents improve performance by continuously learning from feedback or outcomes.

## Building

How to Build an AI Agent (7-Step Blueprint)

1. **System Prompt -** Define the agent’s goals, role, and instructions. A thoughtful prompt shapes behavior from the ground up.
2. **LLM Selection -** Pick your reasoning engine (e.g. GPT-4, Claude, Gemini) and tune it with parameters like temperature and max tokens.
3. **Tools -** Give your agent abilities: from calling APIs to using other agents as tools. This is where agents move from “talking” to “doing”.
4. **Memory -** Short-term and long-term memory (episodic, vector DBs, file stores) allow agents to remember, learn, and personalize over time.
5. **Orchestration -** This is the brain behind the brain — workflows, triggers, A2A protocols, and message queues to structure intelligent behavior.
6. **User Interface -** A good interface (chat, voice, web) brings your agent to life. It’s not just about function — it’s about trust and usability.
7. **AI Evaluations -** Agents need feedback loops. Measure performance, learn from failure, and improve continuously.

## Agentic AI Architectures

Core agentic patterns such as ReAct, Reflection, Planning, and Tool Use

### ReAct Pattern

ReAct — Reasoning and Acting — is the most foundational agentic design pattern and the right default for most complex, unpredictable tasks. It combines chain-of-thought reasoning with external tool use in a continuous feedback loop.

The structure alternates between three phases:

- **Thought:** the agent reasons about what to do next
- **Action:** the agent invokes a tool, calls an API, or runs code
- **Observation:** the agent processes the result and updates its plan

This repeats until the task is complete or a stopping condition is reached.

![ReAct Pattern](../../media/Pasted%20image%2020260412162513.png)

### Next Step: Adding Reflection to Improve Output Quality

Reflection gives an agent the ability to evaluate and revise its own outputs before they reach the user. The structure is a **generation-critique-refinement** cycle: the agent produces an initial output, assesses it against defined quality criteria, and uses that assessment as the basis for revision. The cycle runs for a set number of iterations or until the output meets a defined threshold.

![Reflection Pattern](../../media/Pasted%20image%2020260412162631.png)

### Next Step: Making Tool Use a First-Class Architectural Decision

Tool use is the pattern that turns an agent from a knowledge system into an action system. Without it, an agent has no current information, no access to external systems, and no ability to trigger actions in the real world. With it, an agent can call APIs, query databases, execute code, retrieve documents, and interact with software platforms. For almost every production agent handling real-world tasks, tool use is the foundation everything else builds upon.

![Tool Use](../../media/Pasted%20image%2020260412162746.png)

### Planning

Planning is the pattern for tasks where complexity or coordination requirements are high enough that ad-hoc reasoning through a ReAct loop is not sufficient. Where ReAct improvises step by step, planning breaks the goal into ordered subtasks with explicit dependencies before execution begins.

There are two broad implementations:

- **Plan-and-Execute**: an LLM generates a complete task plan, then a separate execution layer works through the steps.
- **Adaptive Planning**: the agent generates a partial plan, executes it, and re-evaluates before generating the next steps.

### Multi-Agent Collaboration

Multi-agent systems distribute work across specialized agents, each with focused expertise, a specific tool set, and a clearly defined role. A coordinator manages routing and synthesis; specialists handle what they are optimized for.

![Multi-Agent Collaboration](../../media/Pasted%20image%2020260412162842.png)

The benefits are real — better output quality, independent improvability of each agent, and more scalable architecture — but so is the coordination complexity. Getting this right requires answering key questions early.

**Ownership** — which agent has write authority over shared state — must be defined explicitly. **Routing logic** determines whether the coordinator uses an LLM or deterministic rules. Most production systems use a hybrid approach. **Orchestration topology** shapes how agents interact:

[The Roadmap to Mastering Agentic AI Design Patterns](https://machinelearningmastery.com/the-roadmap-to-mastering-agentic-ai-design-patterns/)

## Examples / Learning

- [I built an agent that tells you exactly how to sell to anyone - just from their name. Here's what it does: → Takes a name as input (provide company too if common name) → Finds their entire digital… \| Ethan Kinnan \| 1,490 comments](https://www.linkedin.com/posts/ethan-kinnan_i-built-an-agent-that-tells-you-exactly-how-ugcPost-7371962445747253248-bzCS/)
- [GitHub - NirDiamant/agents-towards-production: This repository delivers end-to-end, code-first tutorials covering every layer of production-grade GenAI agents, guiding you from spark to scale with proven patterns and reusable blueprints for real-world launches.](https://github.com/NirDiamant/agents-towards-production) ⭐ 18k

## References

- [Agents \| Kaggle](https://www.kaggle.com/whitepaper-agents)
- [Agentic Design Patterns - Antonio Gulli - Google Docs](https://docs.google.com/document/d/1rsaK53T3Lg5KoGwvf8ukOUvbELRtH-V0LnOIFDxBryE/preview?tab=t.0)
	- [Sign in - Google Accounts](https://notebooklm.google.com/notebook/44bc8819-958d-4050-8431-e7efe2dbd16e)
- [Building effective agents \\ Anthropic](https://www.anthropic.com/research/building-effective-agents)
- [Google's Blueprint to Building Powerful Agents - YouTube](https://www.youtube.com/watch?v=Z8vTgJkwyA0)
- [Get started  \|  Genkit  \|  Firebase](https://firebase.google.com/docs/genkit/get-started)
- [oscar - Git at Google](https://go.googlesource.com/oscar/)
- [LLM Agents - Explained! - YouTube](https://www.youtube.com/watch?v=5CLNoPiMbUc)
- [Agents 101: How to build your first AI Agent in 30 minutes!⚡️ - DEV Community](https://dev.to/copilotkit/agents-101-how-to-build-your-first-ai-agent-in-30-minutes-1042)
- [Generative AI Fine Tuning LLM Models Crash Course - YouTube](https://youtu.be/t-0s_2uZZU0)
- [Real Terms for AI - YouTube](https://www.youtube.com/playlist?list=PLIivdWyY5sqLvGdVLJZh2EMax97_T-OIB)
- [Multi-Agent Portfolio Collaboration with OpenAI Agents SDK](https://cookbook.openai.com/examples/agents_sdk/multi-agent-portfolio-collaboration/multi_agent_portfolio_collaboration)
- [\[2505.10468\] AI Agents vs. Agentic AI: A Conceptual Taxonomy, Applications and Challenges](https://arxiv.org/abs/2505.10468)
- [How we built our multi-agent research system \\ Anthropic](https://www.anthropic.com/engineering/built-multi-agent-research-system)
- [Enabling customers to deliver production-ready AI agents at scale \| Artificial Intelligence](https://aws.amazon.com/blogs/machine-learning/enabling-customers-to-deliver-production-ready-ai-agents-at-scale/)
- [Mixture-of-Agents (MoA): A Breakthrough in LLM Performance - MarkTechPost](https://www.marktechpost.com/2025/08/09/mixture-of-agents-moa-a-breakthrough-in-llm-performance/)
- [Design Systems And AI: Why MCP Servers Are The Unlock \| Figma Blog](https://www.figma.com/blog/design-systems-ai-mcp/)
- [Agentic Systems 101: Fundamentals, Building Blocks, and How to Build Them (Part A)](https://www.dailydoseofds.com/ai-agents-crash-course-part-1-with-implementation/)
	- [ai-engineering-hub/agent-with-mcp-memory at main · patchy631/ai-engineering-hub · GitHub](https://github.com/patchy631/ai-engineering-hub/tree/main/agent-with-mcp-memory) ⭐ 33k

## Links

- [agents-framework-tools](ai/llm/agents-framework-tools.md)
- [agentic-frameworks-deep-dive-analysis](ai/llm/agentic-frameworks-deep-dive-analysis.md)
- [langgraph-vs-semantic-kernel](ai/llm/langgraph-vs-semantic-kernel.md)
- [frontend-ui-frameworks-libraries](ai/llm/frontend-ui-frameworks-libraries.md)
