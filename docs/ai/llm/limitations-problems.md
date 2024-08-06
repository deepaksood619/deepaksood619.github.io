# Model Limitations / Problems

## Hallucinations

Makes statements that sound plausible but are not true

### Reducing hallucinations

First find relevant information, then answer the question based on the relevant information

[Hallucination (artificial intelligence) - Wikipedia](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence))

- Researchers have recognized this issue, and by 2023, analysts estimated that chatbots hallucinate as much as 27% of the time, with factual errors present in 46% of their responses.

## Problems with LLM

- **Not Updated to the latest information:** Generative Al uses large language models to generate texts and these models have information only to date they are trained. If data is requested beyond that date, accuracy/output may be compromised.
- **Hallucinations:** Hallucinations refer to the output which is factually incorrect or nonsensical. However, the output looks coherent and grammatically correct. This information could be misleading and could have a major impact on business decision-making.
- **Domain-specific most accurate information:** LLMs' output lacks accurate information many times when specificity is more important than generalized output. For instance, organizational HR policies tailored to specific employees may not be accurately addressed by LLM-based Al due to its tendency towards generic responses.

- **Source Citations:** In Generative Al responses, we don't know what source it is referring to generate a particular response. So citations become difficult and sometimes it is not ethically correct to not cite the source of information and give due credit.
- **Updates take Long training time:** information is changing very frequently and if you think to re-train those models with new information it requires huge resources and long training time which is a computationally intensive task.

- Presenting false information when it does not have the answer.
- Non-deterministic - same request can give different response/solution/output
- Confidence is low because of hallucination

## Reversal Curse

If a model is trained on a sentence of the form "A is B", it will not automatically generalize to the reverse direction "B is A". This is the Reversal Curse. For instance, if a model is trained on "Valentina Tereshkova was the first woman to travel to space", it will not automatically be able to answer the question, "Who was the first woman to travel to space?". Moreover, the likelihood of the correct answer ("Valentina Tershkova") will not be higher than for a random name.

[What can LLMs never do? - by Rohit Krishnan](https://www.strangeloopcanon.com/p/what-can-llms-never-do)

## Links

- [Machine Unlearning in 2024 - Ken Ziyu Liu - Stanford Computer Science](https://ai.stanford.edu/~kzliu/blog/unlearning)
