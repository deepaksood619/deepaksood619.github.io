# Context Engineering

What is context engineering?

And why is everyone talking about it?

Let’s understand today!

Context engineering is rapidly becoming a crucial skill for AI engineers. It's no longer just about clever prompting; it's about the systematic orchestration of context.

Here’s the current problem:

Most AI agents (or LLM apps) fail not because the models are bad, but because they lack the right context to succeed.

For instance, a RAG workflow is typically 80% retrieval and 20% generation.

![](https://ci3.googleusercontent.com/meips/ADKq_NawHeuGU9RNFgDbhABJQcRClhRiFu9RDM3zrfRui-OFXrgOH1dTuGb40USos99WXirsMzv5cQbx8Krjo2vQmkKCISDlIeLtEQXyRiJl_gyLuN_FDHY1UUpS0HBHxZpXnOskmMHMcUm2I3nGB-sCn5Iuq3kzCzePePPvR6mUrKl3NiAJbb14Fk-fxfBDVF6K2_Msj74BiAurJ1ArsYgvq6staznkcpnzVBGiXb8AGtF8Fl35QFNs1f_p3TcVEYbVBxKnF6XH9t-yl_oJXCntlLM4w-sMgJP2rhakU4iMKhg2MargLddS3MtP_CS63DoK15MYAg=s0-d-e1-ft#https://substackcdn.com/image/fetch/$s_!Hosz!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd3b905e0-5aca-4b6e-beb0-1ebc798800f0_942x393.gif)

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

These are the 4 key components of a context engineering system:

1) Dynamic information flow: Context comes from multiple sources: users, previous interactions, external data, and tool calls. Your system needs to pull it all together intelligently.

![](https://ci3.googleusercontent.com/meips/ADKq_NYBnd0b8hGDzUxQwpd9F2XF-NJ9U29VB7qaAJx9Zx4eVNJUCSp6_pwV8yLGCW7Wu11NHMiraXrW91vWUiAjU9EKoQAlgCjQPLhAmvEWH15_d8aSq2tFfsaInEiEHVZ5Gu0Vw8ezO0kqyUkStNuQO9wX8V6rejn1UeM7WBZggW3gX4XZh5JP3QfKj4cTLcmjZNRD3PA9SM91bGqqaoBLR0sBotAVCdd_B8zbWc0W_MzbQSzTy60oJ_blfYx9P8f4Ztrn0AMOAbB_UiIKjGPOYZTinjSzoFMA_UpIRGaNLBRfxmFcZ908ip0E9hp__vYlMPW79A=s0-d-e1-ft#https://substackcdn.com/image/fetch/$s_!t6Dc!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F282b5f76-6c6c-4f64-a713-c1b903419b7a_898x440.gif)

2) Smart tool access: If your AI needs external information or actions, give it the right tools. Format the outputs so they're maximally digestible.

3) Memory management:

- Short-term: Summarize long conversations
- Long-term: Remember user preferences across sessions

4) Format optimization: A short, descriptive error message beats a massive JSON blob every time.

The bottom line is…

Context engineering is becoming the new core skill since it addresses the real bottleneck, which is not model capability, but **setting up an architecture of information.**

## Providing Context

6 ways to provide context to AI Agents

### INSTRUCTIONS - Set the stage clearly

➜ Who: Give your AI a role ("Act as a senior developer")
➜ Why: Explain the bigger picture and business value
➜ What: Define success criteria and expected outcomes

### REQUIREMENTS - The "how-to" blueprint

➜ Step-by-step processes
➜ Style guidelines and coding standards
➜ Performance constraints and security requirements
➜ Response formats (JSON, plain text, etc.)
➜ Examples of what TO do and what NOT to do
➜ Pro tip: Negative examples are gold for fixing common mistakes!

### KNOWLEDGE - Feed your AI the right information

➜ External context: Industry knowledge, business models, market facts
➜ Task context: Workflows, documentation, structured data
➜ Think of it as giving your AI a comprehensive briefing

### MEMORY - Enable your AI to remember

➜ Short-term: Chat history, current reasoning steps
➜ Long-term: User preferences, past experiences, learned procedures
➜ Note: Memory isn't just prompt text—it's managed by your orchestration layer

### TOOLS - Describe available functions clearly

➜ What each tool does
➜ How to use it properly
➜ Expected parameters and return values
➜ Remember: Tool descriptions are micro-prompts that guide AI reasoning!

### TOOL RESULTS - The feedback loop

➜ AI requests tool execution in special format
➜ System responds with results
➜ AI continues with enriched context

My opinion: Context engineering is no longer optional, it's a key pillar in building reliable AI agents.

[Context Engineering is the secret to reliable AI Agents \| Om Nalinde \| 52 comments](https://www.linkedin.com/posts/that-aum_context-engineering-is-the-secret-to-reliable-activity-7357259604847656960-Sxvc/)

[The RIGHT Method for Context Engineering (+3 Advanced Techniques) - YouTube](https://www.youtube.com/watch?v=BkfLE6gMmM4&ab_channel=ArsenyShatokhin)

![context-engineering](../../media/Screenshot%202025-09-13%20at%204.17.21%20PM.jpg)

**Advanced Context Engineering Methods**

- ﻿﻿Async Context Synchronization
- ﻿﻿Agentic Scratchpad Updates
- ﻿﻿Multi-Agent Context
