# RAG Interview Questions

### 1. Corrective RAG (CRAG) vs. Self-RAG

**Question:** How does a **Corrective RAG (CRAG)** strategy improve reliability compared to a standard pipeline when the retriever returns low-quality or irrelevant documents?

**Answer:** CRAG introduces a **lightweight retrieval evaluator** (usually a T5 model or a small LLM) that scores the relevance of each retrieved chunk.

- **If relevant:** The chunks are passed to the generator.

- **If irrelevant:** The system triggers a **web search fallback** or an alternative knowledge base search.

- **If ambiguous:** It performs a mix of internal context and external search.

    Unlike standard RAG, which forces the LLM to "make do" with whatever it gets, CRAG acts as a quality gate, significantly reducing hallucination caused by "noise" in the retrieval.

### 2. Multi-Hop Reasoning with GraphRAG

**Question:** Why does **GraphRAG** (Knowledge Graph + Vector Search) outperform pure Vector RAG for "global" queries like _"What are the recurring themes across all 500 research papers?"_

**Answer:** Vector search is inherently **local**; it finds specific snippets that are semantically similar to the query. It cannot "connect the dots" across an entire corpus. **GraphRAG** extracts entities and relationships into a Knowledge Graph and pre-summarizes "communities" (clusters) of nodes.

- For **local queries**, it uses graph traversal to find related entities.

- For **global queries**, it aggregates those pre-generated community summaries.

    This allows the model to answer questions that require a high-level synthesis of the entire dataset rather than just a specific page.

### 3. Handling "Lost in the Middle" in Long Context

**Question:** With context windows now reaching 1M+ tokens, is RAG still necessary? How do you solve the **"Lost in the Middle"** problem in long-context models?

**Answer:** Yes, RAG remains critical for **cost** (1M tokens per query is expensive) and **latency**. Even with large windows, LLMs struggle to recall information buried in the middle of a massive prompt.

Advanced solutions include:

1. **Contextual Compression:** Using a model to summarize retrieved chunks specifically in relation to the query before stuffing them into the prompt.

2. **Long-Context Re-ranking:** Re-ordering the top-K results so that the most relevant information is at the **extreme beginning or end** of the prompt, where attention heads are most effective.

### 4. Agentic RAG and "Plan-and-Execute"

**Question:** How do you implement a **Plan-and-Execute** agent for RAG, and how does it handle multi-step queries like _"Compare the Q3 revenue of Company A and Company B, then explain the trend"_?

**Answer:** A single retrieval step fails here because the model doesn't know the revenue values yet. A **Plan-and-Execute** agent:

1. **Planner:** Breaks the query into sub-tasks: (a) Retrieve Co-A Q3 revenue, (b) Retrieve Co-B Q3 revenue, (c) Compare and analyze.

2. **Executor:** A worker agent calls the RAG tool specifically for each sub-task.

3. **Re-planner:** After each step, the agent checks if it has enough info.

    This **Agentic Loop** allows for "multi-hop" reasoning where the output of one retrieval informs the next query.

### 5. Evaluation with RAGAS "Faithfulness" vs. "Relevance"

**Question:** In the **RAGAS** framework, explain the mathematical or logical difference between **Faithfulness** and **Answer Relevance**.

**Answer:**

- **Faithfulness (Groundedness):** Measures if the answer is derived _only_ from the retrieved context.

    - _Method:_ Extract claims from the answer $\rightarrow$ verify each claim against the context using an LLM.

    - _Goal:_ Stop the model from using its "internal knowledge" to fill gaps.

- **Answer Relevance:** Measures if the answer actually addresses the user's question, regardless of whether it's true.

    - _Method:_ The LLM generates 3 potential questions that the _answer_ could be responding to, then calculates the cosine similarity between those and the _actual_ user query.
