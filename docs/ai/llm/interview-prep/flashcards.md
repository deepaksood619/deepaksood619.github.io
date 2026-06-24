---
slug: /ai/llm/interview-prep/flashcards
title: LLM Flashcards
description: LLM Flashcards
created: 2026-06-18
updated: 2026-06-18
---
^learnkit-339921152
T | LLM 'Reversal Curse' Example |
Q | What is the 'reversal curse' illustrated by the example involving Tom Cruise's mother? |
A | An LLM knows the answer to 'Who is Tom Cruise's mother?' but fails to answer the reversed question 'Who is Mary Lee Pfeiffer's son?', showing imperfect knowledge representation. |
I | This example demonstrates that LLMs may have knowledge but lack consistent relational understanding, leading to errors in reversed queries. |

^learnkit-477801696
T | LLM Decoding Strategy: Beam Search |
Q | What is beam search in the context of Large Language Models? |
A | A decoding strategy that explores multiple potential output sequences simultaneously, keeping track of the most promising sequences at each step to find the most likely output. |
I | Beam search improves output quality by considering multiple candidate sequences rather than greedy selection of the single best token. |

^learnkit-602070424
T | LLM Training Stage 1: Pretraining |
Q | What are the key steps involved in the pretraining stage of training a ChatGPT-like model? |
A | Download ~10TB of text, use a cluster of ~6,000 GPUs, compress the text into a neural network over ~12 days, and obtain the base model. |
I | Pretraining is the computationally intensive phase where the model learns general language patterns from massive text data. |

^learnkit-812711929
T | LLM Training Stage 2: Finetuning |
Q | What happens during the finetuning stage of training a ChatGPT-like model? |
A | Collect 100K high-quality Q&A or comparison data, finetune the base model on this data (~1 day), evaluate, deploy, and monitor for improvements. |
I | Finetuning adapts the pretrained model to specific tasks or behaviors using labeled data to improve performance and safety. |
