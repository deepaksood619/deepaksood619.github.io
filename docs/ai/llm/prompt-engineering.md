# Prompt Engineering

[Prompt Engineering \| Kaggle](https://www.kaggle.com/whitepaper-prompt-engineering)

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

### Others

- Imitating - In the style of x write about y
- At the end of prompts add - make it catchy!

## Prompting Techniques

![prompt-techniques](../../media/Screenshot%202024-04-16%20at%207.00.28%20PM.jpg)

### Chain-of-thought

_Chain-of-thought_ (CoT) prompting is a technique that allows [large language models](https://en.wikipedia.org/wiki/Large_language_models "Large language models") (LLMs) to solve a problem as a series of intermediate steps before giving a final answer. Chain-of-thought prompting improves reasoning ability by inducing the model to answer a multi-step problem with steps of reasoning that mimic a [train of thought](https://en.wikipedia.org/wiki/Train_of_thought "Train of thought"). It allows large language models to overcome difficulties with some reasoning tasks that require [logical thinking](https://en.wikipedia.org/wiki/Logical_reasoning "Logical reasoning") and multiple steps to solve, such as [arithmetic](https://en.wikipedia.org/wiki/Arithmetic "Arithmetic") or [commonsense reasoning](https://en.wikipedia.org/wiki/Commonsense_reasoning "Commonsense reasoning") questions.

### Least to most prompting

Least-to-most prompting is a prompt engineering technique where complex problems are broken down into smaller, simpler subproblems, and then solved sequentially. This approach is particularly effective in tasks involving symbolic manipulation, compositional generalization, and mathematical reasoning, often exceeding the performance of Chain-of-Thought prompting on more difficult problems.

Here's a breakdown of how it works:

1. **Problem Decomposition:** The initial prompt guides the Large Language Model (LLM) to decompose a complex problem into a series of simpler subproblems.
2. **Sequential Solving:** The LLM then solves each subproblem sequentially, utilizing the solutions to previous subproblems to guide the next step.
3. **Enhanced Reasoning:** By breaking down complex tasks into simpler components, least-to-most prompting allows LLMs to leverage their reasoning capabilities more effectively, leading to improved performance, especially on challenging problems.

[Least-to-Most Prompting](https://learnprompting.org/docs/intermediate/least_to_most)

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

### Summarization

```xml
{
    "anthropic_version": "bedrock-2023-05-31",
    "messages": [
        {
            "role" : "user",
            "content" : "You will be given a conversation between a user and an AI assistant.
             When available, in order to have more context, you will also be give summaries you previously generated.
             Your goal is to summarize the input conversation.

             When you generate summaries you ALWAYS follow the below guidelines:
             <guidelines>
             - Each summary MUST be formatted in XML format.
             - Each summary must contain at least the following topics: 'user goals', 'assistant actions'.
             - Each summary, whenever applicable, MUST cover every topic and be place between <topic name='$TOPIC_NAME'></topic>.
             - You AlWAYS output all applicable topics within <summary></summary>
             - If nothing about a topic is mentioned, DO NOT produce a summary for that topic.
             - You summarize in <topic name='user goals'></topic> ONLY what is related to User, e.g., user goals.
             - You summarize in <topic name='assistant actions'></topic> ONLY what is related to Assistant, e.g., assistant actions.
             - NEVER start with phrases like 'Here's the summary...', provide directly the summary in the format described below.
             </guidelines>

             The XML format of each summary is as it follows:
            <summary>
                <topic name='$TOPIC_NAME'>
                    ...
                </topic>
                ...
            </summary>

            Here is the list of summaries you previously generated.

            <previous_summaries>
            $past_conversation_summary$
            </previous_summaries>

            And here is the current conversation session between a user and an AI assistant:

            <conversation>
            $conversation$
            </conversation>

            Please summarize the input conversation following above guidelines plus below additional guidelines:
            <additional_guidelines>
            - ALWAYS strictly follow above XML schema and ALWAYS generate well-formatted XML.
            - NEVER forget any detail from the input conversation.
            - You also ALWAYS follow below special guidelines for some of the topics.
            <special_guidelines>
                <user_goals>
                    - You ALWAYS report in <topic name='user goals'></topic> all details the user provided in formulating their request.
                </user_goals>
                <assistant_actions>
                    - You ALWAYS report in <topic name='assistant actions'></topic> all details about action taken by the assistant, e.g., parameters used to invoke actions.
                </assistant_actions>
            </special_guidelines>
            </additional_guidelines>
            "
        }
    ]
}
```

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
- [GitHub - dair-ai/Prompt-Engineering-Guide: 🐙 Guides, papers, lecture, notebooks and resources for prompt engineering](https://github.com/dair-ai/Prompt-Engineering-Guide)
