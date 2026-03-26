# Interview Questions HR

## Agent Orchestration

### 1. The "What & Why" Question

**Question:** "What is the main difference between a simple LLM chain (like a basic chatbot) and an **Agent Orchestration** system?"

|**What the Recruiter should listen for**|**Why it matters**|
|---|---|
|**"Autonomous" / "Agency"**|Agents make their own decisions; chains follow a fixed path.|
|**"Tool Calling" / "Function Calling"**|Agents use external tools (Google Search, Python, APIs).|
|**"Iterative" / "Loops"**|Agents can go back and fix mistakes; chains usually move one way.|

### 2. The "Design Pattern" Question

**Question:** "Can you name a few common **orchestration patterns** or ways multiple agents work together?"

|**What the Recruiter should listen for**|**Why it matters**|
|---|---|
|**"Hierarchical" (Manager-Worker)**|One 'manager' agent assigns tasks to specialized 'worker' agents.|
|**"Sequential"**|Agent A finishes, then passes the result to Agent B.|
|**"DAG" (Directed Acyclic Graph)**|A technical way of describing a complex, mapped-out workflow.|
|**"Joint Collaboration" / "Peer-to-peer"**|Agents talking back and forth freely to solve a problem.|

### 3. The "State Management" Question

**Question:** "How do you handle **'State' or Memory** when you have four or five different agents working on one project?"

|**What the Recruiter should listen for**|**Why it matters**|
|---|---|
|**"Shared State"**|A central 'blackboard' or database all agents can read from.|
|**"Short-term vs. Long-term memory"**|Knowing what happened 2 minutes ago vs. remembering user preferences.|
|**"Persistence" / "Checkpoints"**|Saving progress so the system can resume if it crashes.|

### 4. The "Reliability" Question

**Question:** "Agents are known for 'hallucinating' or getting stuck in loops. How do you implement **error handling** in orchestration?"

|**What the Recruiter should listen for**|**Why it matters**|
|---|---|
|**"Self-Reflection" / "Critique"**|One agent checks another agent’s work for mistakes.|
|**"Human-in-the-loop" (HITL)**|Pausing the agent to ask a human for approval before acting.|
|**"Retries" / "Fallback"**|If a tool fails, the agent tries a different approach or a simpler model.|

### 5. The "Tools of the Trade" Question

**Question:** "Which **orchestration frameworks** have you used, and why did you choose them over others?"

|**What the Recruiter should listen for**|**Why it matters**|
|---|---|
|**"LangGraph"**|Great for complex loops and very popular right now.|
|**"CrewAI"**|Good for role-playing agents (e.g., 'Researcher' and 'Writer').|
|**"AutoGen"**|Microsoft’s framework; heavy on conversational agents.|
|**"PydanticAI" / "Semantic Kernel"**|Newer or enterprise-grade tools for stricter data control.|

**Pro-Tip for the Recruiter:** If a candidate mentions **"Token Cost"** or **"Latency"** without being asked, that’s a huge bonus. It shows they care about the company's budget and the actual user experience, not just the "cool" tech.

## Others

- What is Retrieval-Augmented Generation (RAG), and what limitations of LLMs does it address?
- What is chunking in a RAG pipeline, and how does chunk size affect retrieval quality and model performance?
- What is hybrid search in RAG systems, and why is combining keyword and semantic search beneficial?
- What is the difference between extractive and abstractive summarization?
- What is Named Entity Recognition (NER), and what are some common entity categories used in practice?
- What is overfitting, and what techniques can be used to prevent it?
- Explain the bias–variance tradeoff and its impact on model performance.
- What is concept drift, and why is monitoring it important in production ML systems?
- Why is serving large language models more computationally expensive than traditional machine learning models?
- What is the ReAct pattern in AI agents, and how does it improve reasoning and decision-making?
