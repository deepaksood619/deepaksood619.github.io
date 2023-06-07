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

RLHF: Reinforcement Learning with Human Feedback

Helpful, Honest, Harmless

Prompt - What is the capital of France?

Ans - The capital of France is Paris.

### Prompting Principles

#### Principle 1: Write clear and specific instructions

##### Tactic 1: Use delimiters to clearly indicate distinct parts of the input

- Delimiters can be anything like: , `"""`, `< >`, `<tag> </tag>`, `:`

##### Tactic 2: Ask for a structured output

- JSON, HTML

##### Tactic 3: Ask the model to check whether conditions are satisfied

##### Tactic 4: "Few-shot" prompting

#### Principle 2: Give the model time to “think”

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

## Prompt Examples

![ChatGPT Ultimate Prompting Guide](../../media/chatgpt-promt-engineering.png)

![ChatGPT Prompts Commands](../../media/chatgpt-prompts.png)

Share the most important leadership lessons and insights from the book {insert book} by {insert author}. For each insight suggest an actionable way I can embody it.

## Learning

[Large Language Models and Cybersecurity – What You Should Know](https://www.freecodecamp.org/news/large-language-models-and-cybersecurity/)

[Understanding Large Language Models - by Sebastian Raschka](https://magazine.sebastianraschka.com/p/understanding-large-language-models?utm_source=substack&utm_medium=email)

[The Art of Prompt Design: Use Clear Syntax | by Scott Lundberg | May, 2023 | Towards Data Science](https://towardsdatascience.com/the-art-of-prompt-design-use-clear-syntax-4fc846c1ebd5)

[Prompt Engineering - Google Slides](https://docs.google.com/presentation/d/1wNm1uQs5JnmnxR7es2pb4koEELZ9k_CeTdjvTa38cT8/edit?usp=sharing)
