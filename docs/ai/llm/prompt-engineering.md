# Prompt Engineering

**Prompt design** is the process of creating a prompt that is tailored to the specific task that the system is being asked to perform.

**Prompt engineering** is the process of creating a prompt that is designed to improve performance.

## Prompting Principles

### Principle 1: Write clear and specific instructions

Tactic 1: Use delimiters to clearly indicate distinct parts of the input

- Delimiters can be anything like: , `"""`, `< >`, `<tag> </tag>`, `:`

Tactic 2: Ask for a structured output

- JSON, HTML

Tactic 3: Ask the model to check whether conditions are satisfied

Tactic 4: "Few-shot" prompting

### Principle 2: Give the model time to "think"

Tactic 1: Specify the steps required to complete a task

Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion

### Imitating

- In the style of x write about y

## Prompting Techniques

![prompt-techniques](../../media/Screenshot%202024-04-16%20at%207.00.28%20PM.jpg)

### Chain-of-thought

_Chain-of-thought_ (CoT) prompting is a technique that allows [large language models](https://en.wikipedia.org/wiki/Large_language_models "Large language models") (LLMs) to solve a problem as a series of intermediate steps before giving a final answer. Chain-of-thought prompting improves reasoning ability by inducing the model to answer a multi-step problem with steps of reasoning that mimic a [train of thought](https://en.wikipedia.org/wiki/Train_of_thought "Train of thought"). It allows large language models to overcome difficulties with some reasoning tasks that require [logical thinking](https://en.wikipedia.org/wiki/Logical_reasoning "Logical reasoning") and multiple steps to solve, such as [arithmetic](https://en.wikipedia.org/wiki/Arithmetic "Arithmetic") or [commonsense reasoning](https://en.wikipedia.org/wiki/Commonsense_reasoning "Commonsense reasoning") questions.

### Other techniques

- Generated knowledge prompting
- Least-to-most prompting
- Self-consistency decoding
- Complexity-based prompting
- Self-refine
- Tree-of-thought
- Maieutic prompting
- Directional-stimulus prompting

[Prompt engineering - Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)

## Parameters

### Temperature

Controls the randomness of the model's output. A higher temperature makes the output more random, while a lower temperature makes it more deterministic.

[Understanding OpenAI's Temperature Parameter | Colt Steele](https://www.coltsteele.com/tips/understanding-openai-s-temperature-parameter)

## Other Topics

- Iterative
- Summarizing
- Inferring
- Transforming
- Expanding
- Chatbot
- Conclusion

[ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)

## Assistant APIs

The Assistants API allows you to build AI assistants within your own applications. An Assistant has instructions and can leverage models, tools, and knowledge to respond to user queries. The Assistants API currently supports three types of [tools](https://platform.openai.com/docs/assistants/tools): Code Interpreter, Retrieval, and Function calling.

At a high level, a typical integration of the Assistants API has the following flow:

1. Create an [Assistant](https://platform.openai.com/docs/api-reference/assistants/createAssistant) in the API by defining its custom instructions and picking a model. If helpful, enable tools like Code Interpreter, Retrieval, and Function calling.
2. Create a [Thread](https://platform.openai.com/docs/api-reference/threads) when a user starts a conversation.
3. Add [Messages](https://platform.openai.com/docs/api-reference/messages) to the Thread as the user ask questions.
4. [Run](https://platform.openai.com/docs/api-reference/runs) the Assistant on the Thread to trigger responses. This automatically calls the relevant tools.

[Create AI Assistants with OpenAI's Assistants API](https://www.freecodecamp.org/news/create-ai-assistants-with-openais-assistants-api/)

Knowledge based retrieval tool -

[platform.openai.com/docs/assistants/overview](https://platform.openai.com/docs/assistants/overview)

## Learning

- [Large Language Models and Cybersecurity - What You Should Know](https://www.freecodecamp.org/news/large-language-models-and-cybersecurity/)
- [Understanding Large Language Models - by Sebastian Raschka](https://magazine.sebastianraschka.com/p/understanding-large-language-models?utm_source=substack&utm_medium=email)
- [The Art of Prompt Design: Use Clear Syntax | by Scott Lundberg | May, 2023 | Towards Data Science](https://towardsdatascience.com/the-art-of-prompt-design-use-clear-syntax-4fc846c1ebd5)
- [Prompt Engineering - Google Slides](https://docs.google.com/presentation/d/1wNm1uQs5JnmnxR7es2pb4koEELZ9k_CeTdjvTa38cT8/edit?usp=sharing)
- [Prompt Engineering Tutorial - Master ChatGPT and LLM Responses - YouTube](https://www.youtube.com/watch?v=_ZvnD73m40o)
- [Advanced Prompt Engineering for Content Creators - Full Handbook](https://www.freecodecamp.org/news/advanced-prompt-engineering-handbook/)
- [Prompt Engineering with Llama 2 - DeepLearning.AI](https://www.deeplearning.ai/short-courses/prompt-engineering-with-llama-2)
