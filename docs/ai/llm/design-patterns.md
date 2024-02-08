# Design patterns

## In-context learning

The core idea of in-context learning is to use LLMs off the shelf (i.e., without any fine-tuning), then control their behavior through clever prompting and conditioning on private “contextual” data.

For example, say you’re building a chatbot to answer questions about a set of legal documents. Taking a naive approach, you could paste all the documents into a ChatGPT or GPT-4 prompt, then ask a question about them at the end. This may work for very small datasets, but it doesn’t scale. The biggest GPT-4 model can only process ~50 pages of input text, and performance (measured by inference time and accuracy) degrades badly as you approach this limit, called a **context window.**

In-context learning solves this problem with a clever trick: instead of sending all the documents with each LLM prompt, it sends only a handful of the most relevant documents. And the most relevant documents are determined with the help of . . . you guessed it . . . LLMs.

At a very high level, the workflow can be divided into three stages:

- **Data preprocessing / embedding:** This stage involves storing private data (legal documents, in our example) to be retrieved later. Typically, the documents are broken into chunks, passed through an embedding model, then stored in a specialized database called a vector database.
- **Prompt construction / retrieval:** When a user submits a query (a legal question, in this case), the application constructs a series of prompts to submit to the language model. A compiled prompt typically combines a prompt template hard-coded by the developer; examples of valid outputs called few-shot examples; any necessary information retrieved from external APIs; and a set of relevant documents retrieved from the vector database.
- **Prompt execution / inference:** Once the prompts have been compiled, they are submitted to a pre-trained LLM for inference-including both proprietary model APIs and open-source or self-trained models. Some developers also add operational systems like logging, caching, and validation at this stage.

This looks like a lot of work, but it’s usually easier than the alternative: training or fine-tuning the LLM itself. You don’t need a specialized team of ML engineers to do in-context learning. You also don’t need to host your own infrastructure or buy an expensive dedicated instance from OpenAI. This pattern effectively reduces an AI problem to a data engineering problem that most startups and big companies already know how to solve. It also tends to outperform fine-tuning for relatively small datasets-since a specific piece of information needs to occur at least ~10 times in the training set before an LLM will remember it through fine-tuning-and can incorporate new data in near real time.

One of the biggest questions around in-context learning is: What happens if we just change the underlying model to increase the context window? This is indeed possible, and it is an active area of research (e.g., see the [Hyena paper](https://arxiv.org/abs/2302.10866) or this [recent post](https://blog.gopenai.com/how-to-speed-up-llms-and-use-100k-context-window-all-tricks-in-one-place-ffd40577b4c)). But this comes with a number of tradeoffs-primarily that cost and time of inference scale quadratically with the length of the prompt. Today, even linear scaling (the best theoretical outcome) would be cost-prohibitive for many applications. A single GPT-4 query over 10,000 pages would cost hundreds of dollars at current API rates. So, we don’t expect wholesale changes to the stack based on expanded context windows

[Emerging Architectures for LLM Applications | Andreessen Horowitz](https://a16z.com/2023/06/20/emerging-architectures-for-llm-applications/)

[The Secret Sauce behind 100K context window in LLMs: all tricks in one place | by Galina Alperovich | GoPenAI](https://blog.gopenai.com/how-to-speed-up-llms-and-use-100k-context-window-all-tricks-in-one-place-ffd40577b4c)
