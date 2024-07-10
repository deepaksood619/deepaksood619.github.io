# ChatGPT Prompt Engineering for Developers

## Introduction

Two types of large language models (LLMs)

### Base LLM

Predicts next word, based on text training data

Prompt - What is the capital of France?

Ans - What is France's largest city?

Ans - What is France's population?

### Instruction Tuned LLM

Tries to follow instructions

Fine-tune on instructions and good attempts at following those instructions.

RLHF: Reinforcement Learning with Human Feedback - [Human Feedback in AI: The Essential Ingredient for Success | Label Studio](https://labelstud.io/blog/human-feedback-in-ai/) [Create a High-Quality Dataset for RLHF | Label Studio](https://labelstud.io/blog/create-a-high-quality-rlhf-dataset/)

Helpful, Honest, Harmless

Prompt - What is the capital of France?

Ans - The capital of France is Paris.

### Prompting Principles

#### Prompts

- [https://snackprompt.com](https://snackprompt.com/)
- [GitHub - f/awesome-chatgpt-prompts: This repo includes ChatGPT prompt curation to use ChatGPT better.](https://github.com/f/awesome-chatgpt-prompts)
- [Awesome ChatGPT Prompts | This repo includes ChatGPT prompt curation to use ChatGPT better.](https://prompts.chat/)

##### LinkedIn post prompt

Write a LinkedIn post about your recent accomplishment in # Your Industry, detailing how you achieved it, and sharing the impact it had on your # career or organization.

Generate LinkedIn Post on Topic # Topic/Title .I am assigning you as Social Media Manager Role. So, take the responsibility. Tell this as I am doing myself and want to tell the world about it. Please use related emojis. Also, try to engage the audience in the post + try something that other users want to comment on the post. Try to keep Lines short and engaging. Also, keep in mind LinkedIn SEO and try to fulfil all needs. Make sure that content is 100% Original and Plagiarism free. After that Also give 15 related hashtags for LinkedIn.

Generate a LinkedIn post related to # Topic. Generate 3 paragraphs with max 3 sentences. Start each with one matching emoji to the content of the paragraph. Highlight the following # Aspects

Generate a LinkedIn post discussing # Your Chosen Topic. Share my insights, experiences, or opinions in a concise and engaging manner. Encourage my network to join the conversation by commenting with their thoughts or experiences. Use relevant hashtags to increase visibility. # LinkedIn # # Additional Hashtags

##### ChatGPT prompt to write error free

`{paste your writing}`

Prompt: "Proofread my writing above. Fix grammar and spelling mistakes. And make suggestions that will improve the clarity of my writing"

##### Learn-fast prompt using the 80/20 principle to knowledge

Prompt: "I want to learn about `{insert topic}`. Identify and share the most important 20% of learnings from this topic that will help me understand 80% of it."

##### Learning / Q&A / Test / Interview

I'm currently learning about snowflake. Ask me a series of 50 questions, one at a time, that will test my knowledge. Wait for my response before proceeding to the next question, ask the next question after your explanation of the answers. Identify knowledge gaps in my answers and give me better answers to fill those gaps. When finish show me the quantity of correct answers and the quantity of failed answers

#### Create Test

Create 30 MCQ (with 4 options each and 1 correct answer) for a finance intern for a 40 min test. The finance intern should have below skills

- ﻿﻿Ability to decode RBI guidelines
- ﻿﻿Proficiency in crafting easily understandable directives for tech teams
- ﻿﻿Previous IT experience is a plus

Questions should also focus on compliances, audits. Add 10 aptitude and logical reasoning questions. Add 5 data analytics using tables questions. Other 15 questions should be around - Certified banking compliance professional program.

Make sure to

1. don't mention finance intern anywhere
2. questions should be direct and with medium difficulty, the given questions are very easy and novice
3. Share all 30 questions

Create 15 mcq questions (with 4 options each and 1 correct answer) around below topics

##### Presentation

Create a presentation for presenting to top management of the company on title "Data Engineering". I as an owner to data engineering vertical working in service based company, have to tell the management about how we can create a Data Engineering vertical.

Start with importance of data and about the data industry. 1 one slide on what are different areas in Data like Data Engineering, Data Science, Data Analytics, ML, AI, etc. Then deep dive into data engineering. Also add on how we can start the vertical by building case studies, finding clients, checking competitive landscape. How much to invest and ROI, whom to hire and how many people to start with. What tools and technologies to focus on.

Presentation should be 30 mins long with 10-15 slides. I am aiming for a script that is persuasive, highlighting the different areas that can be tapped in Data Engineering, and how can we sell these as a service to other companies, and solve other company problems.

ChatGPT, could you aid me in crafting a compelling proposal presentation script for a project centered around integrating AI customer service solutions for Client's Name? I am aiming for a script that is persuasive, highlighting the advantages of our proposed solutions distinctively.

#### Principle 1: Write clear and specific instructions

##### Tactic 1: Use delimiters to clearly indicate distinct parts of the input

- Delimiters can be anything like: , `"""`, `< >`, `<tag> </tag>`, `:`

##### Tactic 2: Ask for a structured output

- JSON, HTML

##### Tactic 3: Ask the model to check whether conditions are satisfied

##### Tactic 4: "Few-shot" prompting

#### Principle 2: Give the model time to "think"

##### Tactic 1: Specify the steps required to complete a task

##### Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion

### Imitating

- In the style of x write about x

### Model Limitations

##### Hallucinations

Makes statements that sound plausible but are not true

##### Reducing hallucinations

First find relevant information, then answer the question based on the relevant information

## Other Topics

- Iterative
- Summarizing
- Inferring
- Transforming
- Expanding
- Chatbot
- Conclusion

[ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)

## Prompting Techniques

![prompt-techniques](../media/Screenshot%202024-04-16%20at%207.00.28%20PM.jpg)

### Chain-of-thought

_Chain-of-thought_ (CoT) prompting is a technique that allows [large language models](https://en.wikipedia.org/wiki/Large_language_models "Large language models") (LLMs) to solve a problem as a series of intermediate steps before giving a final answer. Chain-of-thought prompting improves reasoning ability by inducing the model to answer a multi-step problem with steps of reasoning that mimic a [train of thought](https://en.wikipedia.org/wiki/Train_of_thought "Train of thought"). It allows large language models to overcome difficulties with some reasoning tasks that require [logical thinking](https://en.wikipedia.org/wiki/Logical_reasoning "Logical reasoning") and multiple steps to solve, such as [arithmetic](https://en.wikipedia.org/wiki/Arithmetic "Arithmetic") or [commonsense reasoning](https://en.wikipedia.org/wiki/Commonsense_reasoning "Commonsense reasoning") questions.

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

## Prompt Examples

![ChatGPT Ultimate Prompting Guide](../media/chatgpt-promt-engineering.png)

![ChatGPT Prompts Commands](../media/chatgpt-prompts.png)

Share the most important leadership lessons and insights from the book `{insert book}` by `{insert author}`. For each insight suggest an actionable way I can embody it.

## Parameters

### Temperature

Controls the randomness of the model's output. A higher temperature makes the output more random, while a lower temperature makes it more deterministic.

[Understanding OpenAI's Temperature Parameter | Colt Steele](https://www.coltsteele.com/tips/understanding-openai-s-temperature-parameter)

## Assistant APIs

The Assistants API allows you to build AI assistants within your own applications. An Assistant has instructions and can leverage models, tools, and knowledge to respond to user queries. The Assistants API currently supports three types of [tools](https://platform.openai.com/docs/assistants/tools): Code Interpreter, Retrieval, and Function calling.

At a high level, a typical integration of the Assistants API has the following flow:

1. Create an [Assistant](https://platform.openai.com/docs/api-reference/assistants/createAssistant) in the API by defining its custom instructions and picking a model. If helpful, enable tools like Code Interpreter, Retrieval, and Function calling.
2. Create a [Thread](https://platform.openai.com/docs/api-reference/threads) when a user starts a conversation.
3. Add [Messages](https://platform.openai.com/docs/api-reference/messages) to the Thread as the user ask questions.
4. [Run](https://platform.openai.com/docs/api-reference/runs) the Assistant on the Thread to trigger responses. This automatically calls the relevant tools.

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
