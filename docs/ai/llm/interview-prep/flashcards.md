---
slug: /ai/llm/interview-prep/flashcards
title: LLM Interview Prep Flashcards
description: Comprehensive flashcards for LLM/GenAI engineer interviews covering architecture, training, RAG, agents, and production deployment
created: 2026-06-18
updated: 2026-06-26
total_cards: 67
difficulty_distribution:
  beginner: 30   # L1 cards
  intermediate: 25  # L2 cards
  advanced: 12  # L3 cards
source_notes:
  - ai/llm/interview-prep/interview-questions-genai-engineer.md
  - ai/llm/interview-prep/interview-questions-top-50.md
  - ai/llm/interview-prep/interview-questions.md
  - ai/llm/interview-prep/interview-questions-hr.md
---
  Distribution:
  - 30 L1 (Recall) cards - definitions, formulas, facts
  - 25 L2 (Understanding) cards - why/how, intuitions, trade-offs
  - 12 L3 (Boundaries) cards - limitations, when techniques fail

  Coverage by topic:
  - Core LLM Concepts (5 cards) - tokenization, context windows
  - Training & Fine-tuning (8 cards) - pretraining, MLM, NSP, LoRA
  - Transformer Architecture (9 cards) - attention, encodings, complexity
  - Decoding & Generation (5 cards) - beam search, temperature, sampling
  - Encoder vs Decoder Models (4 cards) - BERT vs GPT characteristics
  - Embeddings & Tokenization (5 cards) - BPE, WordPiece, OOV handling
  - RAG (9 cards) - chunking, hybrid search, RAGAS metrics
  - Agents & Orchestration (9 cards) - ReAct, state management, error handling
  - Advanced Techniques (8 cards) - MoE, CoT, transfer learning
  - Production & Deployment (5 cards) - challenges, alignment, serving costs

## Core LLM Concepts

^learnkit-516236471
T | Tokenization Definition |
Q | What is tokenization in the context of LLMs? |
A | Breaking down text into smaller units (tokens) such as words, subwords, or characters that LLMs can process as numerical representations. |
I | Example: "artificial" → "art", "ific", "ial". Enables handling of diverse languages and rare words. | Source: interview-questions-top-50.md#tokenization |

^learnkit-900191272
T | Token-to-Text Ratio |
Q | What is the approximate ratio of tokens to text for English? |
A | 1 token ≈ 4 characters or 0.75 words for English text. |
I | Used to estimate API costs and context window usage | Source: interview-questions.md#tokens |

^learnkit-983642966
T | Context Window Purpose |
Q | What is the context window in LLMs? |
A | The number of tokens an LLM can process at once, defining its "memory" for understanding or generating text. |
I | Larger windows (e.g., 32K tokens) improve coherence but increase computational costs | Source: interview-questions-top-50.md#context-window |

^learnkit-125704008
T | Why Tokenization Enables Rare Words |
Q | Why is tokenization critical for handling rare or unknown words in LLMs? |
A | Subword tokenization (like BPE) breaks unknown words into known subword units, allowing LLMs to process words never seen during training. |
I | Example: "cryptocurrency" → "crypto" + "currency" | Source: interview-questions-top-50.md#tokenization |

^learnkit-743413059
T | Context Window Trade-off |
Q | What is the main trade-off when increasing context window size in LLMs? |
A | Larger windows provide more context and better coherence, but significantly increase computational costs and memory requirements. |
I | Quadratic complexity in self-attention: O(n²) where n is sequence length | Source: interview-questions-top-50.md#context-window |

## Training & Fine-tuning

^learnkit-418718899
T | LLM Pretraining Definition |
Q | What happens during the pretraining stage of an LLM? |
A | Model learns general language patterns from massive text corpora (~10TB), using thousands of GPUs over days to weeks, producing a base model. |
I | Most computationally intensive phase; base model has no task-specific behaviors yet | Source: interview-questions-genai-engineer.md#training |

^learnkit-195087672
T | LLM Finetuning Definition |
Q | What is finetuning in LLM training? |
A | Adapting a pretrained base model to specific tasks using labeled data (typically 100K examples), taking ~1 day, to improve performance and safety. |
I | Faster and cheaper than pretraining; adds task-specific behaviors | Source: interview-questions-genai-engineer.md#training |

^learnkit-705651351
T | LoRA vs QLoRA |
Q | What is the difference between LoRA and QLoRA for fine-tuning? |
A | LoRA adds low-rank matrices to model layers for efficient adaptation. QLoRA extends LoRA by adding quantization (4-bit precision) to further reduce memory. |
I | QLoRA can fine-tune 70B parameter models on single GPU | Source: interview-questions-top-50.md#lora |

^learnkit-953379180
T | Masked Language Modeling |
Q | What is masked language modeling (MLM)? |
A | A pretraining technique that hides random tokens in a sequence and trains the model to predict them based on bidirectional context. |
I | Used in BERT; enables understanding of semantic relationships | Source: interview-questions-top-50.md#mlm |

^learnkit-124469219
T | Next Sentence Prediction |
Q | What is next sentence prediction (NSP) in BERT training? |
A | Training the model to determine if two sentences are consecutive or unrelated, using 50% positive and 50% negative pairs. |
I | Improves coherence in dialogue and document tasks; without NSP, BERT performs worse on all metrics | Source: interview-questions.md#nsp |

^learnkit-675905894
T | Why MLM is Bidirectional |
Q | Why does masked language modeling enable bidirectional understanding? |
A | By masking tokens in the middle of sequences, the model must use context from both left and right sides simultaneously to make predictions. |
I | Unlike autoregressive models that only see prior tokens | Source: interview-questions-top-50.md#mlm |

^learnkit-318987549
T | BERT Training Limitation |
Q | What happens to BERT performance when Next Sentence Prediction is removed? |
A | BERT performs worse on every single metric, showing NSP is critical for understanding sentence relationships. |
I | NSP teaches longer-term dependencies across sentences | Source: interview-questions.md#nsp |

^learnkit-399344501
T | Fine-tuning Downsides |
Q | What are three major downsides of fine-tuning LLMs? |
A | Requires large manual data creation, model may memorize data, and it's more expensive than prompt engineering. |
I | Every new capability needs new data + retraining cycle | Source: interview-questions.md#finetuning-downsides |

## Transformer Architecture

^learnkit-461702712
T | Transformer Encoder-Decoder |
Q | What are the two main components of the Transformer architecture? |
A | An encoding component (stack of N encoders) and a decoding component (stack of N decoders), connected via attention mechanisms. |
I | Encoder processes input, decoder generates output | Source: interview-questions.md#transformer-architecture |

^learnkit-984341642
T | Self-Attention Mechanism |
Q | What is self-attention in transformers? |
A | A mechanism that enhances input embeddings by including contextual information, weighing the importance of different elements in a sequence. |
I | Enables the model to focus on relevant tokens dynamically | Source: interview-questions.md#self-attention |

^learnkit-346663170
T | Multi-Head Attention Purpose |
Q | Why is multi-head attention needed in transformers? |
A | Single attention may miss relevant relationships. Multiple heads can focus on different aspects (grammar, semantics, entities) simultaneously. |
I | Example: "Bark is cute and he is a dog" - different heads link 'dog' to name, gender, description | Source: interview-questions.md#multi-head-attention |

^learnkit-110726984
T | Positional Encoding Purpose |
Q | Why do transformers need positional encodings? |
A | Transformers process words in parallel (not sequentially), so positional encodings add sequence order information that self-attention lacks. |
I | Without it, "I am good" and "good am I" would be identical | Source: interview-questions.md#positional-encoding |

^learnkit-733883799
T | Attention Score Calculation |
Q | What is the formula for calculating attention scores in transformers? |
A | Attention(Q,K,V) = softmax(QK^T / √dk) × V |
I | Scaled dot product measures relevance, softmax normalizes to probabilities | Source: interview-questions-top-50.md#attention-formula |

^learnkit-399388007
T | Transformer vs RNN Advantage |
Q | What is the main advantage of transformers over RNNs for long sequences? |
A | Transformers process all tokens in parallel using self-attention, while RNNs must process sequentially, making RNNs slower and prone to vanishing gradients. |
I | Transformers solve long-term dependency problem that plagues RNNs | Source: interview-questions.md#transformer-vs-rnn |

^learnkit-919203434
T | Transformer vs CNN |
Q | Why are transformers better than CNNs for capturing long-term dependencies? |
A | CNNs require many stacked layers to connect distant tokens. Transformers use attention to directly connect any two positions in one step. |
I | CNN approach becomes impractically large for long dependencies | Source: interview-questions.md#transformer-vs-cnn |

^learnkit-179033066
T | Vanishing Gradient Mitigation |
Q | How do transformers address the vanishing gradient problem? |
A | Through self-attention (avoiding sequential dependencies), residual connections (direct gradient flow), and layer normalization (stabilizing updates). |
I | Unlike RNNs which suffer from exponential decay over long sequences | Source: interview-questions-top-50.md#vanishing-gradients |

^learnkit-202627774
T | Transformer Quadratic Complexity |
Q | What is the main computational limitation of standard transformers? |
A | O(n²) complexity in sequence length due to full attention matrix computation, making long sequences expensive. |
I | Why efficient transformers (Linformer, Performer) exist | Source: interview-questions-top-50.md#complexity |

## Decoding & Generation

^learnkit-402142442
T | Beam Search Definition |
Q | What is beam search in LLM decoding? |
A | A decoding strategy that keeps the top k candidate sequences at each step, exploring multiple paths simultaneously to find the most likely output. |
I | More coherent than greedy decoding which only picks single best token | Source: interview-questions-top-50.md#beam-search |

^learnkit-168540234
T | Temperature Parameter |
Q | What does the temperature parameter control in LLM generation? |
A | The randomness of token selection - low temp (0.3) favors high-probability tokens for predictability, high temp (1.5) increases diversity. |
I | Temperature=0 is deterministic, temperature=1 uses raw probabilities | Source: interview-questions.md#temperature |

^learnkit-300880513
T | Top-k vs Top-p Sampling |
Q | What is the difference between top-k and top-p sampling? |
A | Top-k samples from k most probable tokens (fixed size). Top-p samples from smallest set whose cumulative probability exceeds p (adaptive size). |
I | Top-p adapts to context - narrow distribution when confident, wide when uncertain | Source: interview-questions-top-50.md#sampling |

^learnkit-501175404
T | Temperature Use Cases |
Q | When should you use low vs high temperature for LLM generation? |
A | Low (0-0.3) for extraction/standardization tasks, medium (0.5) for writing, high (0.7-1) for creative/marketing copy. |
I | Task determines optimal randomness level | Source: interview-questions.md#temperature-use-cases |

^learnkit-147286139
T | Greedy Decoding Limitation |
Q | What is the main limitation of greedy decoding compared to beam search? |
A | Greedy decoding only considers the single most probable next token, potentially missing globally better sequences that start with locally suboptimal tokens. |
I | Beam search explores multiple hypotheses to find better overall coherence | Source: interview-questions-top-50.md#beam-search |

## Encoder vs Decoder Models

^learnkit-640696520
T | Encoder Model Characteristics |
Q | What are the key characteristics of encoder-only models like BERT? |
A | Use only encoder from transformers, attention layers access all words bidirectionally, best for understanding tasks (classification, NER, QA). |
I | Pretraining corrupts sentences (masking) and reconstructs them | Source: interview-questions.md#encoder-decoder |

^learnkit-672783874
T | Decoder Model Characteristics |
Q | What are the key characteristics of decoder-only models like GPT? |
A | Use only decoder, attention layers access only previous tokens (causal attention), best for text generation tasks. |
I | Pretraining predicts next word in sequence (autoregressive) | Source: interview-questions.md#encoder-decoder |

^learnkit-489805737
T | Autoregressive vs Masked Models |
Q | How do autoregressive and masked models differ in their training objectives? |
A | Autoregressive (GPT) predicts tokens sequentially based on prior tokens. Masked (BERT) predicts masked tokens using bidirectional context. |
I | Shapes strengths: generation vs comprehension | Source: interview-questions-top-50.md#training-objectives |

^learnkit-613281782
T | When Encoder-Decoder for Translation |
Q | Why use encoder-decoder RNNs instead of plain sequence-to-sequence for translation? |
A | Plain seq2seq translates word-by-word immediately, producing nonsense. Encoder-decoder reads the whole sentence first, then translates. |
I | Example: "Je vous en prie" → "You are welcome" not "I you in pray" | Source: interview-questions.md#translation |

## Embeddings & Tokenization

^learnkit-397846710
T | Word Embeddings Definition |
Q | What are embeddings in LLMs? |
A | Dense vectors representing tokens in continuous space, capturing semantic and syntactic properties, initialized randomly or pretrained then fine-tuned. |
I | Example: "dog" embedding evolves during training to reflect pet-related contexts | Source: interview-questions-top-50.md#embeddings |

^learnkit-879715421
T | WordPiece vs BPE |
Q | What is the key difference between WordPiece and BPE tokenization? |
A | BPE iteratively merges most frequent character pairs greedily. WordPiece uses a statistical model to choose pairs that maximize training data likelihood. |
I | Both are subword tokenization reaching desired vocabulary size | Source: interview-questions.md#tokenization-algorithms |

^learnkit-660991978
T | BERT Embedding Types |
Q | What are the three types of embeddings combined in BERT input? |
A | Token embeddings (word vectors), segment embeddings (sentence markers), and positional embeddings (position in sequence). |
I | Combined to distinguish sentences and preserve word order | Source: interview-questions.md#bert-embeddings |

^learnkit-536288131
T | Positional Encoding vs Embedding |
Q | What is the difference between positional encoding and positional embedding? |
A | Positional encoding is a static mathematical function (sinusoidal). Positional embedding is a learned lookup table trained with the model. |
I | Encoding captures inherent position relationships mathematically | Source: interview-questions.md#positional-encoding-vs-embedding |

^learnkit-931089393
T | Out-of-Vocabulary Handling |
Q | How do LLMs handle out-of-vocabulary (OOV) words? |
A | Using subword tokenization (like BPE) to break OOV words into known subword units from the vocabulary. |
I | Example: "cryptocurrency" → "crypto" + "currency" | Source: interview-questions-top-50.md#oov |

## RAG (Retrieval-Augmented Generation)

^learnkit-968308666
T | RAG Definition |
Q | What is Retrieval-Augmented Generation (RAG)? |
A | A technique combining retrieval of relevant documents with LLM generation to improve factual accuracy using external knowledge. |
I | Steps: index, retrieve, rank, generate using retrieved context | Source: interview-questions-top-50.md#rag |

^learnkit-629934281
T | Recursive vs Semantic Chunking |
Q | What is the trade-off between recursive character chunking and semantic chunking? |
A | Recursive is fast and reliable (splits on separators like \\n\\n), safe for complex layouts. Semantic is slower but better for narrative (splits on topic shifts). |
I | Recursive for PDFs with tables, semantic for long reports | Source: interview-questions-genai-engineer.md#chunking |

^learnkit-780465225
T | Hybrid Search Definition |
Q | What is hybrid search in RAG systems? |
A | Combining dense vector search (semantic meaning) with BM25 keyword search (exact words), merged using Reciprocal Rank Fusion (RRF). |
I | Best for general enterprise search covering both paraphrased questions and exact terms | Source: interview-questions-genai-engineer.md#hybrid-search |

^learnkit-164416089
T | Parent Document Retrieval |
Q | What is parent document retrieval and what problem does it solve? |
A | Indexes small "child" chunks for precise retrieval but retrieves larger "parent" chunks to provide full context to the LLM. |
I | Solves context-fragmentation issue of small chunks (200 tokens) lacking surrounding information | Source: interview-questions-genai-engineer.md#parent-retrieval |

^learnkit-779964212
T | Lost in the Middle Mitigation |
Q | How do you handle the "Lost in the Middle" phenomenon in RAG? |
A | Re-rank results to place most relevant chunks at beginning/end, trim to top-K high-scoring chunks, or use models trained with middle-of-sequence loss. |
I | LLMs process info at beginning/end better than middle of prompt | Source: interview-questions-genai-engineer.md#lost-in-middle |

^learnkit-549606744
T | RAGAS Faithfulness Metric |
Q | How does RAGAS measure faithfulness in RAG systems? |
A | Number of claims in the answer that can be inferred from retrieved context divided by total claims in answer. |
I | Ensures answer is grounded only in retrieved documents, not hallucinated | Source: interview-questions-genai-engineer.md#ragas |

^learnkit-561151998
T | RAGAS Answer Relevance |
Q | How does RAGAS measure answer relevance? |
A | LLM guesses the original question from the generated answer, then measures cosine similarity between guessed question and actual user query. |
I | Tests how well answer addresses the query | Source: interview-questions-genai-engineer.md#ragas |

^learnkit-965397111
T | Semantic Router Purpose |
Q | Why use a semantic router in RAG systems? |
A | To decide between multiple specialized RAG pipelines (e.g., Legal vs HR) using cosine similarity to route embeddings, reducing latency from 2s to 50ms. |
I | Faster than using an LLM for classification | Source: interview-questions-genai-engineer.md#semantic-router |

^learnkit-435085976
T | Hybrid Search Limitation |
Q | What is the main limitation of hybrid search combining vector and keyword search? |
A | Requires merging scores on different scales - solved using Reciprocal Rank Fusion (RRF) which uses rank positions instead of raw scores. |
I | RRF: result high in either list stays at top of final result | Source: interview-questions-genai-engineer.md#hybrid-search |

## Agents & Orchestration

^learnkit-799757812
T | ReAct vs Plan-and-Execute |
Q | What is the difference between ReAct and Plan-and-Execute agent architectures? |
A | ReAct iterates (think-act-observe) one step at a time. Plan-and-Execute separates planning (generates full step list) from execution (runs steps, possibly in parallel). |
I | ReAct for dynamic tasks, Plan-and-Execute for complex tasks with parallelizable steps | Source: interview-questions-genai-engineer.md#agents |

^learnkit-851794892
T | State Machine in LangGraph |
Q | How do state machines handle multi-turn agentic workflows with cycles? |
A | Shared state schema acts as short-term memory, nodes are tasks, conditional edges check state to route flow back (creating self-correcting loops). |
I | Example: validator node routes back to retriever on error | Source: interview-questions-genai-engineer.md#state-machine |

^learnkit-697883059
T | Tool Retrieval for Large Tool Sets |
Q | How do you implement tool retrieval when an agent has hundreds of tools? |
A | Index tool names/descriptions in vector DB, retrieve top 5-10 most relevant tools via similarity search, inject only those into LLM prompt. |
I | Can't fit hundreds of tool descriptions in a single prompt | Source: interview-questions-genai-engineer.md#tool-retrieval |

^learnkit-922029924
T | Async Callbacks in Orchestration |
Q | How do you manage asynchronous callbacks in multi-agent orchestration? |
A | Use event-driven architecture with AsyncCallbackHandler to capture events (on_tool_start, on_llm_new_token) and stream to UI via SSE/WebSockets. |
I | Prevents user from staring at 30s loading spinner | Source: interview-questions-genai-engineer.md#async |

^learnkit-140042937
T | Agent Orchestration vs Chain |
Q | What is the main difference between LLM chains and agent orchestration? |
A | Chains follow fixed paths. Agents have autonomy - they make decisions, call tools/APIs, and iterate in loops to fix mistakes. |
I | Agents can adapt and self-correct dynamically | Source: interview-questions-hr.md#orchestration |

^learnkit-337383617
T | Hierarchical Agent Pattern |
Q | What is hierarchical (manager-worker) agent orchestration? |
A | One 'manager' agent assigns tasks to specialized 'worker' agents, coordinating overall workflow. |
I | Clear delegation model for complex multi-step tasks | Source: interview-questions-hr.md#patterns |

^learnkit-161187926
T | Shared State in Multi-Agent |
Q | How do you handle state when multiple agents work on one project? |
A | Use shared state (central blackboard/database all agents read from), distinguish short-term vs long-term memory, and persist checkpoints to resume on crash. |
I | Prevents agents from losing context of what others did | Source: interview-questions-hr.md#state-management |

^learnkit-903824098
T | Agent Error Handling Strategies |
Q | What are three strategies for handling agent hallucinations and loops? |
A | Self-reflection (one agent critiques another), human-in-the-loop (pause for approval), and retries/fallbacks (try different tool or simpler model). |
I | Reliability critical for production agent systems | Source: interview-questions-hr.md#reliability |

^learnkit-867350503
T | ReAct Pattern Definition |
Q | What is the ReAct pattern in AI agents? |
A | Reason + Act pattern - agent thinks (reasons about what to do), acts (calls a tool), and observes the result in an iterative loop. |
I | Improves reasoning and decision-making over single-shot generation | Source: interview-questions-hr.md#react |

## Advanced Techniques

^learnkit-963222231
T | Transfer Learning in LLMs |
Q | What are the three main transfer learning techniques in LLMs? |
A | Feature-based (use pretrained model as feature extractor), fine-tuning (adapt to specific task), and multi-task learning (train on multiple tasks simultaneously). |
I | Enables customization without retraining entire model | Source: interview-questions.md#transfer-learning |

^learnkit-484781030
T | Mixture of Experts |
Q | How does Mixture of Experts (MoE) enhance LLM scalability? |
A | Gating function activates specific expert sub-networks per input, using only ~10% of parameters per query, enabling billion-parameter models to run efficiently. |
I | Reduces computational load while maintaining performance | Source: interview-questions-top-50.md#moe |

^learnkit-660085661
T | Chain-of-Thought Prompting |
Q | What is Chain-of-Thought (CoT) prompting? |
A | Guiding LLMs to solve problems step-by-step, breaking down calculations into logical steps to improve accuracy and interpretability. |
I | Mimics human reasoning for complex multi-step tasks | Source: interview-questions-top-50.md#cot |

^learnkit-369499779
T | Zero-Shot Learning |
Q | What is zero-shot learning in LLMs? |
A | Performing untrained tasks using only general knowledge from pretraining, without task-specific training data or examples. |
I | Example: "Classify this review as positive/negative" without sentiment training | Source: interview-questions-top-50.md#zero-shot |

^learnkit-795034493
T | Few-Shot Learning Benefits |
Q | What are the main benefits of few-shot learning in LLMs? |
A | Reduced data needs, faster adaptation to new tasks, and cost efficiency by leveraging pretrained knowledge. |
I | Ideal for niche tasks like specialized classification | Source: interview-questions-top-50.md#few-shot |

^learnkit-708854252
T | Adaptive Softmax Benefit |
Q | How does Adaptive Softmax optimize LLMs? |
A | Groups words by frequency, reducing computations for rare words, speeding up training/inference while maintaining accuracy for large vocabularies. |
I | Reduces cost of handling 50K+ token vocabularies | Source: interview-questions.md#adaptive-softmax |

^learnkit-174561831
T | Knowledge Graph Integration |
Q | How do knowledge graphs improve LLMs? |
A | Provide structured factual data to reduce hallucinations, improve reasoning via entity relationships, and enhance context for better responses. |
I | Valuable for question answering and entity recognition | Source: interview-questions-top-50.md#knowledge-graphs |

^learnkit-968475271
T | PEFT for Catastrophic Forgetting |
Q | How does Parameter-Efficient Fine-Tuning (PEFT) mitigate catastrophic forgetting? |
A | Updates only a small subset of parameters while freezing the rest, preserving pretrained knowledge while adapting to new tasks. |
I | Techniques like LoRA maintain performance across domains | Source: interview-questions-top-50.md#peft |

## Production & Deployment

^learnkit-210106883
T | LLM Deployment Challenges |
Q | What are four major challenges in deploying LLMs to production? |
A | Resource intensity (computational demands), bias (perpetuating training data biases), interpretability (hard to explain), and privacy (data security concerns). |
I | Must be addressed for ethical and effective use | Source: interview-questions-top-50.md#deployment-challenges |

^learnkit-642410531
T | Alignment Problem Manifestations |
Q | How does the alignment problem manifest in LLMs? |
A | Lack of helpfulness (not following instructions), hallucinations (making up facts), lack of interpretability, and generating biased/toxic output. |
I | Extent to which model goals align with human values | Source: interview-questions.md#alignment |

^learnkit-514781038
T | Fixing Biased Outputs |
Q | What are three steps to fix LLMs generating biased or incorrect outputs? |
A | Analyze patterns to identify bias sources, enhance data with balanced datasets and debiasing techniques, and fine-tune with curated data or adversarial methods. |
I | Improves fairness and accuracy systematically | Source: interview-questions-top-50.md#bias-fixing |

^learnkit-174782408
T | Context Memory Storage |
Q | How do you make an LLM "remember" past conversations? |
A | Include past conversations in the prompt, managing token limits (e.g., 4096 for text-davinci-003). |
I | Only way at the moment - no persistent external memory mechanism | Source: interview-questions.md#context-memory |

^learnkit-825745511
T | LLM Serving Expense |
Q | Why is serving LLMs more expensive than traditional ML models? |
A | Billions of parameters require massive memory and compute, autoregressive generation is sequential (can't fully parallelize), and large batch inference has memory bottlenecks. |
I | Typical LLM: 7B-175B parameters vs traditional ML: millions | Source: interview-questions-hr.md#serving |

## Evaluation & Metrics

^learnkit-864977186
T | Perplexity Metric |
Q | What is perplexity in language model evaluation? |
A | Geometric average of inverse probability of words predicted by the model - measures how "surprised" the model is by new data. |
I | Lower perplexity = better training. 10-20% reduction is noteworthy. | Source: interview-questions.md#perplexity |

^learnkit-285982543
T | Intrinsic vs Extrinsic Evaluation |
Q | What is the difference between intrinsic and extrinsic evaluation of LLMs? |
A | Intrinsic evaluates how well the model captures what it should (probabilities, perplexity). Extrinsic evaluates usefulness in a specific task. |
I | Intrinsic: model-centric. Extrinsic: task-centric (e.g., speech recognition accuracy). | Source: interview-questions.md#evaluation |

## Model Comparisons

^learnkit-218898588
T | GPT-4 vs GPT-3 |
Q | What are three key improvements in GPT-4 over GPT-3? |
A | Multimodal input (text + images), larger context (25K vs 4K tokens), and enhanced accuracy (fewer factual errors through better fine-tuning). |
I | Expands use cases to visual QA and complex dialogues | Source: interview-questions-top-50.md#gpt4-vs-gpt3 |

^learnkit-619963800
T | Gemini Optimization |
Q | How does Gemini optimize multimodal LLM training over GPT-4? |
A | Unified architecture (combines text/image processing), advanced attention (improves cross-modal stability), and data efficiency (self-supervised techniques). |
I | More stable and scalable multimodal training | Source: interview-questions-top-50.md#gemini |

## Loss Functions & Optimization

^learnkit-739656372
T | Cross-Entropy Loss Purpose |
Q | Why is cross-entropy loss used in language modeling? |
A | Measures divergence between predicted and true token probabilities, penalizing incorrect predictions to encourage accurate next-token selection. |
I | Formula: L = -Σ yi log(ŷi) | Source: interview-questions-top-50.md#cross-entropy |

^learnkit-637849513
T | ReLU Derivative Significance |
Q | What is the derivative of ReLU and why is it significant for LLMs? |
A | f'(x) = 1 if x>0, else 0. Its sparsity and non-linearity prevent vanishing gradients, making it computationally efficient. |
I | Widely used in LLM architectures for robust training | Source: interview-questions-top-50.md#relu |

^learnkit-861395929
T | KL Divergence in LLMs |
Q | How is KL divergence used in LLMs? |
A | Quantifies difference between two probability distributions (model predictions vs true distributions), guiding fine-tuning to improve output quality. |
I | Formula: DKL(P||Q) = Σ P(x)log(P(x)/Q(x)) | Source: interview-questions-top-50.md#kl-divergence |

## Domain-Specific Knowledge

^learnkit-756911897
T | Reversal Curse Example |
Q | What is the reversal curse in LLMs? |
A | LLM knows "Who is Tom Cruise's mother?" but fails "Who is Mary Lee Pfeiffer's son?", showing imperfect knowledge representation. |
I | Demonstrates lack of consistent relational understanding | Source: flashcards.md#reversal-curse |

^learnkit-869100748
T | Overfitting Prevention |
Q | What are three techniques to prevent overfitting in LLMs? |
A | Regularization (L1/L2 penalties), dropout (randomly disable neurons), and early stopping (halt when validation plateaus). |
I | Ensures robust generalization to unseen data | Source: interview-questions-top-50.md#overfitting |

^learnkit-959648557
T | Generative vs Discriminative Models |
Q | What distinguishes generative from discriminative models in NLP? |
A | Generative (GPT) models joint probabilities to create data. Discriminative (BERT for classification) models conditional probabilities to distinguish classes. |
I | Generative: creation. Discriminative: classification. | Source: interview-questions-top-50.md#generative-vs-discriminative |
