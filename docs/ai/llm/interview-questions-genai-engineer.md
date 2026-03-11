# Interview Questions GenAI Engineer

## Top 10 Development & Agentic RAG Questions

1. How do you implement **Semantic Router** logic to decide between multiple specialized RAG pipelines?
    
2. What are the trade-offs between **Recursive Character** vs. **Semantic** chunking strategies for unstructured PDFs?
    
3. How do you handle **"Lost in the Middle"** phenomena when passing large amounts of retrieved context to an LLM?
    
4. What is the difference between a **ReAct** (Reason+Act) loop and a **Plan-and-Execute** agent architecture?
    
5. How would you design a **State Machine** (e.g., using LangGraph) to handle multi-turn agentic workflows with cycles?
    
6. In a production RAG system, how do you implement **Hybrid Search** combining dense vectors with BM25 keyword matching?
    
7. What metrics would you use from the **RAGAS** framework to evaluate "Faithfulness" vs. "Answer Relevance"?
    
8. How do you implement **Tool Retrieval** when your agent has access to hundreds of potential function calls?
    
9. What is **Parent Document Retrieval**, and how does it solve the context-fragmentation issue of small chunks?
    
10. How do you manage **Asynchronous Callbacks** and streaming events in a multi-agent orchestration system to maintain low perceived latency?

### Core Technical Comparison

When developing agentic systems, choosing the right "memory" and "search" strategy is critical for performance.

|**Feature**|**Vector Search (Dense)**|**Keyword Search (Sparse)**|**Hybrid Search**|
|---|---|---|---|
|**Matching Logic**|Semantic meaning/intent|Exact word overlap|Combined score (Reciprocal Rank Fusion)|
|**Best For**|Paraphrased questions|Acronyms, Product IDs, Names|General enterprise search|
|**Latency**|Medium (requires embedding)|Low (inverted index)|Medium-High|

**Pro-Tip:** In 2026 interviews, focus on **Observability**. Mentioning tools like LangSmith, Arize Phoenix, or custom "Agent Traces" to debug why an agent went into a loop will set you apart from junior candidates.

## Answers

### 1. Semantic Router Logic

**Question:** How do you implement **Semantic Router** logic to decide between multiple specialized RAG pipelines?

**Answer:** You implement a semantic router by creating a "routing layer" before the retriever. This layer contains a set of **predefined "routes"**, each represented by a list of sample user queries (utterances). When a user query arrives, you embed it and calculate the **cosine similarity** against the embeddings of these routes. If the similarity exceeds a threshold (e.g., 0.8), the query is directed to a specialized pipeline (e.g., a "Legal RAG" vs. "HR RAG"). This avoids using a slow LLM for classification, reducing latency from ~2s to ~50ms.

### 2. Recursive vs. Semantic Chunking

**Question:** What are the trade-offs between **Recursive Character** vs. **Semantic** chunking strategies for unstructured PDFs?

**Answer:** **Recursive Character Chunking** is fast and reliable; it splits text based on a hierarchy of separators (e.g., `\n\n`, `\n`, `.` ) to keep related text together while staying under a token limit. **Semantic Chunking** is more "intelligent" but slower; it uses sentence embeddings to find "topic shifts" and splits only when the semantic meaning changes. For PDFs with complex layouts, Recursive is often safer to avoid breaking tables, whereas Semantic is better for long narrative reports where topic continuity is key.

### 3. "Lost in the Middle" Mitigation

**Question:** How do you handle **"Lost in the Middle"** phenomena when passing large amounts of retrieved context to an LLM?

**Answer:** This phenomenon describes how LLMs are better at processing info at the very beginning or end of a prompt than the middle. To mitigate this, you should:

1. **Re-rank results:** Use a cross-encoder (like BGE-Reranker) to ensure the most relevant chunks are placed at the top (beginning) of the context.
2. **Context Trimming:** Only send the top-K chunks that meet a high relevance score rather than filling the entire context window.
3. **Long-context specific models:** Use models specifically trained with "Middle-of-sequence" loss objectives.

### 4. ReAct vs. Plan-and-Execute

**Question:** What is the difference between a **ReAct** (Reason+Act) loop and a **Plan-and-Execute** agent architecture?

**Answer:** **ReAct** is an iterative loop where the agent thinks, acts (calls a tool), and observes the result _one step at a time_. It is great for dynamic, unpredictable tasks. **Plan-and-Execute** separates the logic: a **Planner** first generates a full list of steps, and an **Executor** runs them. This is more efficient for complex tasks as it reduces "reasoning overhead" between every tool call and allows for parallel execution of independent steps.

### 5. State Machines in LangGraph

**Question:** How would you design a **State Machine** (e.g., using LangGraph) to handle multi-turn agentic workflows with cycles?

**Answer:** You define a **Shared State** (schema) that acts as the "short-term memory" of the system. You then create **Nodes** (Python functions) for specific tasks (e.g., "retrieve", "validate", "respond") and **Edges** to define the flow. To handle cycles, you use **Conditional Edges** that check the state; for example, if a "validator" node sees an error, the edge routes the flow back to the "retriever" node to try again, creating a self-correcting loop.

### 6. Implementing Hybrid Search

**Question:** In a production RAG system, how do you implement **Hybrid Search** combining dense vectors with BM25 keyword matching?

**Answer:** You run two parallel searches: one using **Vector Search** (captures semantic intent) and one using **BM25** (captures exact keywords like product IDs or names). Since their scores are on different scales, you merge them using **Reciprocal Rank Fusion (RRF)**. RRF calculates a new score based on the rank position in both lists rather than the raw similarity scores, ensuring that a result appearing high in _either_ list stays at the top of the final result.

### 7. RAGAS Evaluation Metrics

**Question:** What metrics would you use from the **RAGAS** framework to evaluate "Faithfulness" vs. "Answer Relevance"?

**Answer:**

- **Faithfulness:** Measures if the answer is grounded _only_ in the retrieved context. It is calculated by dividing the number of claims in the answer that can be inferred from the context by the total number of claims.
- **Answer Relevance:** Measures how well the answer addresses the original query. It is calculated by taking the generated answer, using an LLM to "guess" what the original question was, and then measuring the cosine similarity between the "guessed" question and the _actual_ user query.

### 8. Large-Scale Tool Retrieval

**Question:** How do you implement **Tool Retrieval** when your agent has access to hundreds of potential function calls?

**Answer:** You cannot fit hundreds of tool descriptions into a single prompt. Instead, you index the **tool names and descriptions** into a vector database. When a user query arrives, the agent first performs a **similarity search** to retrieve the top 5–10 most relevant tools. Only those 10 tool definitions are then dynamically injected into the LLM prompt for the final function calling decision.

### 9. Parent Document Retrieval

**Question:** What is **Parent Document Retrieval**, and how does it solve the context-fragmentation issue of small chunks?

**Answer:** In standard RAG, small chunks (e.g., 200 tokens) are great for precise retrieval but often lack the surrounding context needed for a good answer. **Parent Document Retrieval** indexes small "child" chunks for the vector search but stores them with a reference to a larger "parent" chunk (e.g., 1000 tokens). When a child is found, the system actually retrieves the **parent context** to give the LLM the full picture.

### 10. Async & Streaming in Orchestration

**Question:** How do you manage **Asynchronous Callbacks** and streaming events in a multi-agent orchestration system?

**Answer:** You use an **Event-Driven architecture** (often using Python's `asyncio`). You implement `AsyncCallbackHandler` (in LangChain/LangGraph) to capture events like `on_tool_start` or `on_llm_new_token`. These events are pushed to a **Stream** (like Server-Sent Events or WebSockets) so the UI can display the agent’s "thinking" process or partial answers in real-time, preventing the user from staring at a loading spinner for 30 seconds.
