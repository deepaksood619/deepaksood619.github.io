# Design patterns

## In-context learning

The core idea of in-context learning is to use LLMs off the shelf (i.e., without any fine-tuning), then control their behavior through clever prompting and conditioning on private "contextual" data.

For example, say you’re building a chatbot to answer questions about a set of legal documents. Taking a naive approach, you could paste all the documents into a ChatGPT or GPT-4 prompt, then ask a question about them at the end. This may work for very small datasets, but it doesn’t scale. The biggest GPT-4 model can only process ~50 pages of input text, and performance (measured by inference time and accuracy) degrades badly as you approach this limit, called a **context window.**

In-context learning solves this problem with a clever trick: instead of sending all the documents with each LLM prompt, it sends only a handful of the most relevant documents. And the most relevant documents are determined with the help of . . . you guessed it . . . LLMs.

At a very high level, the workflow can be divided into three stages:

- **Data preprocessing / embedding:** This stage involves storing private data (legal documents, in our example) to be retrieved later. Typically, the documents are broken into chunks, passed through an embedding model, then stored in a specialized database called a vector database.
- **Prompt construction / retrieval:** When a user submits a query (a legal question, in this case), the application constructs a series of prompts to submit to the language model. A compiled prompt typically combines a prompt template hard-coded by the developer; examples of valid outputs called few-shot examples; any necessary information retrieved from external APIs; and a set of relevant documents retrieved from the vector database.
- **Prompt execution / inference:** Once the prompts have been compiled, they are submitted to a pre-trained LLM for inference-including both proprietary model APIs and open-source or self-trained models. Some developers also add operational systems like logging, caching, and validation at this stage.

This looks like a lot of work, but it’s usually easier than the alternative: training or fine-tuning the LLM itself. You don’t need a specialized team of ML engineers to do in-context learning. You also don’t need to host your own infrastructure or buy an expensive dedicated instance from OpenAI. This pattern effectively reduces an AI problem to a data engineering problem that most startups and big companies already know how to solve. It also tends to outperform fine-tuning for relatively small datasets-since a specific piece of information needs to occur at least ~10 times in the training set before an LLM will remember it through fine-tuning-and can incorporate new data in near real time.

One of the biggest questions around in-context learning is: What happens if we just change the underlying model to increase the context window? This is indeed possible, and it is an active area of research (e.g., see the [Hyena paper](https://arxiv.org/abs/2302.10866) or this [recent post](https://blog.gopenai.com/how-to-speed-up-llms-and-use-100k-context-window-all-tricks-in-one-place-ffd40577b4c)). But this comes with a number of tradeoffs-primarily that cost and time of inference scale quadratically with the length of the prompt. Today, even linear scaling (the best theoretical outcome) would be cost-prohibitive for many applications. A single GPT-4 query over 10,000 pages would cost hundreds of dollars at current API rates. So, we don’t expect wholesale changes to the stack based on expanded context windows

[Emerging Architectures for LLM Applications | Andreessen Horowitz](https://a16z.com/2023/06/20/emerging-architectures-for-llm-applications/)

[The Secret Sauce behind 100K context window in LLMs: all tricks in one place | by Galina Alperovich | GoPenAI](https://blog.gopenai.com/how-to-speed-up-llms-and-use-100k-context-window-all-tricks-in-one-place-ffd40577b4c)

[Exploring real-time streaming for generative AI Applications | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/exploring-real-time-streaming-for-generative-ai-applications/)

## LoRA (Low Rank Adaptation)

- [Mastering Low-Rank Adaptation (LoRA): Enhancing Large Language Models for Efficient Adaptation | DataCamp](https://www.datacamp.com/tutorial/mastering-low-rank-adaptation-lora-enhancing-large-language-models-for-efficient-adaptation)
- [LoRA](https://huggingface.co/docs/diffusers/main/en/training/lora)
- [GitHub - microsoft/LoRA: Code for loralib, an implementation of "LoRA: Low-Rank Adaptation of Large Language Models"](https://github.com/microsoft/LoRA)
- [LoRA - Explained! - YouTube](https://www.youtube.com/watch?v=Bq9zqTJDsjg)

## HSNW (Hierarchical Navigable Small Worlds)

- [System Design of ChatGPT | Mock interview @gkcs - YouTube](https://www.youtube.com/watch?v=H9Qdm8_JBAs)
- [Hierarchical Navigable Small Worlds (HNSW) | Pinecone](https://www.pinecone.io/learn/series/faiss/hnsw/)
- [Similarity Search, Part 4: Hierarchical Navigable Small World (HNSW) | by Vyacheslav Efimov | Towards Data Science](https://towardsdatascience.com/similarity-search-part-4-hierarchical-navigable-small-world-hnsw-2aad4fe87d37)
- [HSNW Intuitively Explained: The Best Algorithm for Billion Scale Vector Search | by Vansh Kharidia | Medium](https://medium.com/@vanshkharidia7/hsnw-intuitively-explained-the-best-algorithm-for-billion-scale-vector-search-540527e5278e)

## FAISS (Facebook AI Similarity Search)

Faiss is a library for efficient similarity search and clustering of dense vectors. It contains algorithms that search in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting code for evaluation and parameter tuning. Faiss is written in C++ with complete wrappers for Python/numpy. Some of the most useful algorithms are implemented on the GPU. It is developed primarily at Meta's [Fundamental AI Research](https://ai.facebook.com/) group.

- [GitHub - facebookresearch/faiss: A library for efficient similarity search and clustering of dense vectors.](https://github.com/facebookresearch/faiss)
- [What Is Faiss (Facebook AI Similarity Search)?](https://www.datacamp.com/blog/faiss-facebook-ai-similarity-search)
- [FAISS](https://ai.meta.com/tools/faiss/)
- [Faiss: A library for efficient similarity search - Engineering at Meta](https://engineering.fb.com/2017/03/29/data-infrastructure/faiss-a-library-for-efficient-similarity-search/)
- [Welcome to Faiss Documentation — Faiss documentation](https://faiss.ai/index.html)
- [Faiss | 🦜️🔗 LangChain](https://python.langchain.com/docs/integrations/vectorstores/faiss/)

## Model Context Protocol (MCP)

A protocol for seamless integration between LLM applications and external data sources

The Model Context Protocol (MCP) is an open protocol that enables seamless integration between LLM applications and external data sources and tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating custom AI workflows, MCP provides a standardized way to connect LLMs with the context they need.

- [Model Context Protocol · GitHub](https://github.com/modelcontextprotocol)
- [The Model Context Protocol (MCP) Explained (and one cool code example.) - YouTube](https://www.youtube.com/watch?v=5ZWeCKY5WZE&ab_channel=Underfitted)
- [Is MCP Becoming The Next BIG Thing in AI - YouTube](https://www.youtube.com/watch?v=japoGcdbZGw&ab_channel=RobShocks)
- [What is MCP & why it's a big (huge) deal: Detailed explanation for both… \| John Rush \| 10 comments](https://www.linkedin.com/posts/johnrushx_what-is-mcp-why-its-a-big-huge-deal-activity-7303421262440112129-iJWV)
- [GitHub - punkpeye/awesome-mcp-servers: A collection of MCP servers.](https://github.com/punkpeye/awesome-mcp-servers)
- [Awesome MCP Servers](https://mcpservers.org/)
- [Top 5 MCP Servers to Automate Daily Tasks and Workflows with Prompts \| by Pedro Aquino \| Medium](https://medium.com/@pedro.aquino.se/top-5-mcp-servers-to-automate-daily-tasks-and-workflows-with-prompts-039fe50570fd)
- [Building Agents with Model Context Protocol - Full Workshop with Mahesh Murag of Anthropic - YouTube](https://www.youtube.com/watch?v=kQmXtrmQ5Zg&ab_channel=AIEngineer)
- [What is Model Context Protocol (MCP)? How it simplifies AI integrations compared to APIs \| AI Agents That Work](https://norahsakal.com/blog/mcp-vs-api-model-context-protocol-explained/)

## Links

- [AWS re:Invent 2023 - Generative AI: Architectures and applications in depth (BOA308) - YouTube](https://www.youtube.com/watch?v=aEA6X_IElpc)
- [AWS re:Invent 2023 - SaaS meets AI/ML & generative AI: Multi-tenant patterns & strategies (SAS306) - YouTube](https://www.youtube.com/watch?v=oBhP44wowoY)
