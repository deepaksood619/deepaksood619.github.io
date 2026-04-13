# Context Engineering

Context engineering is rapidly becoming a crucial skill for AI engineers. It's no longer just about clever prompting; it's about the systematic orchestration of context.

Here’s the current problem:

Most AI agents (or LLM apps) fail not because the models are bad, but because they lack the right context to succeed.

For instance, a RAG workflow is typically 80% retrieval and 20% generation.

![image](https://ci3.googleusercontent.com/meips/ADKq_NawHeuGU9RNFgDbhABJQcRClhRiFu9RDM3zrfRui-OFXrgOH1dTuGb40USos99WXirsMzv5cQbx8Krjo2vQmkKCISDlIeLtEQXyRiJl_gyLuN_FDHY1UUpS0HBHxZpXnOskmMHMcUm2I3nGB-sCn5Iuq3kzCzePePPvR6mUrKl3NiAJbb14Fk-fxfBDVF6K2_Msj74BiAurJ1ArsYgvq6staznkcpnzVBGiXb8AGtF8Fl35QFNs1f_p3TcVEYbVBxKnF6XH9t-yl_oJXCntlLM4w-sMgJP2rhakU4iMKhg2MargLddS3MtP_CS63DoK15MYAg=s0-d-e1-ft#https://substackcdn.com/image/fetch/$s_!Hosz!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd3b905e0-5aca-4b6e-beb0-1ebc798800f0_942x393.gif)

Thus:

- Good retrieval could still work with a weak LLM.
- But bad retrieval can NEVER work with even with the best of LLMs.

If your RAG isn't working, most likely, it's a context retrieval issue.

In the same way, LLMs aren't mind readers. They can only work with what you give them.

Context engineering involves creating dynamic systems that offer:

- The right information
- The right tools
- In the right format

This ensures the LLM can effectively complete the task.

But why was traditional prompt engineering not enough?

Prompt engineering primarily focuses on “magic words” with an expectation of getting a better response.

But as AI applications grow complex, complete and structured context matters far more than clever phrasing.

![image](https://ci3.googleusercontent.com/meips/ADKq_NYBnd0b8hGDzUxQwpd9F2XF-NJ9U29VB7qaAJx9Zx4eVNJUCSp6_pwV8yLGCW7Wu11NHMiraXrW91vWUiAjU9EKoQAlgCjQPLhAmvEWH15_d8aSq2tFfsaInEiEHVZ5Gu0Vw8ezO0kqyUkStNuQO9wX8V6rejn1UeM7WBZggW3gX4XZh5JP3QfKj4cTLcmjZNRD3PA9SM91bGqqaoBLR0sBotAVCdd_B8zbWc0W_MzbQSzTy60oJ_blfYx9P8f4Ztrn0AMOAbB_UiIKjGPOYZTinjSzoFMA_UpIRGaNLBRfxmFcZ908ip0E9hp__vYlMPW79A=s0-d-e1-ft#https://substackcdn.com/image/fetch/$s_!t6Dc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F282b5f76-6c6c-4f64-a713-c1b903419b7a_898x440.gif)

These are the 4 key components of a context engineering system:

1. **Dynamic information flow:** Context comes from multiple sources: users, previous interactions, external data, and tool calls. Your system needs to pull it all together intelligently.
2. **Smart tool access:** If your AI needs external information or actions, give it the right tools. Format the outputs so they're maximally digestible.
3. **Memory management:**
	1. Short-term: Summarize long conversations
	2. Long-term: Remember user preferences across sessions
4. **Format optimization:** A short, descriptive error message beats a massive JSON blob every time.

Context engineering is becoming the new core skill since it addresses the real bottleneck, which is not model capability, but **setting up an architecture of information.**

## Providing Context

6 ways to provide context to AI Agents

### INSTRUCTIONS - Set the stage clearly

- Who: Give your AI a role ("Act as a senior developer")
- Why: Explain the bigger picture and business value
- What: Define success criteria and expected outcomes

### REQUIREMENTS - The "how-to" blueprint

- Step-by-step processes
- Style guidelines and coding standards
- Performance constraints and security requirements
- Response formats (JSON, plain text, etc.)
- Examples of what TO do and what NOT to do
- Pro tip: Negative examples are gold for fixing common mistakes!

### KNOWLEDGE - Feed your AI the right information

- External context: Industry knowledge, business models, market facts
- Task context: Workflows, documentation, structured data
- Think of it as giving your AI a comprehensive briefing

### MEMORY - Enable your AI to remember

- Short-term: Chat history, current reasoning steps
- Long-term: User preferences, past experiences, learned procedures
- Note: Memory isn't just prompt text—it's managed by your orchestration layer

### TOOLS - Describe available functions clearly

- What each tool does
- How to use it properly
- Expected parameters and return values
- Remember: Tool descriptions are micro-prompts that guide AI reasoning!

### TOOL RESULTS - The feedback loop

- AI requests tool execution in special format
- System responds with results
- AI continues with enriched context

My opinion: Context engineering is no longer optional, it's a key pillar in building reliable AI agents.

[Context Engineering is the secret to reliable AI Agents \| Om Nalinde \| 52 comments](https://www.linkedin.com/posts/that-aum_context-engineering-is-the-secret-to-reliable-activity-7357259604847656960-Sxvc/)

[The RIGHT Method for Context Engineering (+3 Advanced Techniques) - YouTube](https://www.youtube.com/watch?v=BkfLE6gMmM4&ab_channel=ArsenyShatokhin)

![context-engineering](../../media/Screenshot%202025-09-13%20at%204.17.21%20PM.jpg)

![context engineering](https://substackcdn.com/image/fetch/$s_!GjNA!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9534a00d-5563-42ba-82e9-6c1a2aa1f04f_2526x1518.png)

## Core Strategies

Developers have converged on four broad strategies for managing context, [categorized](https://blog.langchain.com/context-engineering-for-agents/) as write, select, compress, and isolate. Each one is a direct response to a specific constraint we’ve already covered.

### Write: Save Context Externally

The constraint it addresses is that the context window is finite, and statelessness means information is lost between calls.

Instead of trying to keep everything inside the context window, save important information to external storage and bring it back when needed. This takes two main forms.

- The first is scratchpads, where an agent saves intermediate plans, notes, or reasoning steps to external storage during a long-running task. [Anthropic’s multi-agent research system](https://www.anthropic.com/engineering/building-effective-agents) does exactly this. The lead researcher agent writes its plan to external memory at the start of a task, because if the context window exceeds 200,000 tokens, it gets truncated and the plan would be lost.
- The second form is long-term memory, which involves persisting information across sessions. ChatGPT auto-generates user preferences from conversations, Cursor and Windsurf learn coding patterns and project context, and Claude Code uses CLAUDE.md files as persistent instruction memory. All of these systems treat external storage as the real memory layer, with the context window serving as a temporary workspace.

### Select: Pull In Only What’s Relevant

The constraint it addresses is that more context isn’t better, and the model needs the right information rather than all available information.

The most important technique here is Retrieval-Augmented Generation, or RAG. Instead of stuffing all your knowledge into the context window, we store it externally in a searchable database. At query time, retrieve only the chunks most relevant to the current question and inject those into the context, giving the model targeted knowledge without the noise of everything else.

![image](https://substackcdn.com/image/fetch/$s_!Bdgk!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feadec10f-1ecc-4644-b35c-8627ddc69acb_2526x1518.png)

Selection also applies to tools. When an agent has dozens of available tools, listing every tool description in every prompt wastes tokens and confuses the model. A better approach is to retrieve only the tool descriptions relevant to the current task.

The critical tradeoff with selection is precision. If the retrieval pulls in documents that are almost relevant but not quite, they become distractors that add tokens and push important context into low-attention zones. The retrieval step itself has to be good, or the whole strategy backfires.

### Compress: Keep Only What You Need

The constraint it addresses is the context rot and the escalating cost of attention across more tokens.

As agent workflows span dozens or hundreds of steps, the context window fills up with accumulated conversation history and tool outputs. Compression strategies reduce this bulk while trying to preserve the essential information.

Conversation summarization is the most common approach. Claude Code, for instance, triggers an “auto-compact” process when the context hits 95% capacity, summarizing the entire interaction history into a shorter form. Cognition, the company behind the Devin coding agent, [trained a separate, dedicated model specifically for summarization](https://blog.langchain.com/context-engineering-for-agents/) at agent-to-agent boundaries. The fact that they built a separate model just for this step tells us how consequential bad compression can be, since a specific decision or detail that gets summarized away is gone permanently.

Simpler forms of compression include trimming (removing older messages from the history) and tool output compression (reducing verbose search results or code outputs to their essentials before they enter the context).

### Isolate: Split Context Across Agents

The constraint it addresses is that of attention dilution and context poisoning when too many types of information compete in one window.

Instead of one agent trying to handle everything in a single bloated context window, this strategy splits the work across multiple specialized agents, each with its own clean, focused context. A “researcher” agent gets a context loaded with search tools and retrieved documents, while a “writer” agent gets a context loaded with style guides and formatting rules, so neither is distracted by the other’s information.

[Anthropic demonstrated this with their multi-agent research system](https://www.anthropic.com/engineering/building-effective-agents), where a lead Opus 4 agent delegated sub-tasks to Sonnet 4 sub-agents. The system achieved a 90.2% improvement over a single Opus 4 agent on research tasks, despite using the same underlying model family. The entire performance gain came from how context was managed, not from a more powerful model.

![](https://substackcdn.com/image/fetch/$s_!hrla!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4ce09eed-d88b-456b-a7c3-3ee5929a6067_4002x2368.png)

## Tradeoffs

These strategies are powerful, but they involve trade-offs with no universal right answers:

- **Compression versus information loss:** Every time you summarize, you risk losing a detail that turns out to matter later. The more aggressively you compress, the more you save on tokens, but the higher the chance of permanently destroying something important.
- **Single agent versus multi-agent:** Anthropic’s multi-agent results are impressive, but others, [notably Cognition](https://blog.langchain.com/context-engineering-for-agents/), have argued that a single agent with good compression delivers more stability and lower cost. Both sides are debating the same core question of how to manage context effectively, and the answer depends on task complexity, cost tolerance, and reliability requirements.
- **Retrieval precision versus noise:** RAG adds knowledge, but imprecise retrieval adds distractors. If the documents you retrieve aren’t genuinely relevant, they consume tokens and push important content into low-attention positions, so the retrieval system itself has to be well-engineered, or RAG makes things worse.
- **Cost versus richness:** Every token costs money and processing time. The disproportionate scaling of attention means longer contexts get expensive fast, and context engineering is partly an economics problem of figuring out where the return on additional tokens stops being worth the cost.

## Advanced Context Engineering Methods

- Async Context Synchronization
- Agentic Scratchpad Updates
- Multi-Agent Context

## Links

[A Guide to Context Engineering for LLMs](https://blog.bytebytego.com/p/a-guide-to-context-engineering-for)
