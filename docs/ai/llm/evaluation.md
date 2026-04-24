# Evaluation

- [GitHub - openai/evals: Evals is a framework for evaluating LLMs and LLM systems, and an open-source registry of benchmarks.](https://github.com/openai/evals) ⭐ 18k
- [**DeepEval**](https://github.com/confident-ai/deepeval) ⭐ 14k - a simple-to-use, open-source evaluation framework for LLM applications.
- [Galileo AI: The Generative AI Evaluation Company](https://galileo.ai/)
- [Evaluating LLM Models: A Guide to Popular Frameworks](https://medium.com/@abhghoshsgp/evaluating-llm-models-a-guide-to-popular-frameworks-59f236542d46)
	- [MLflow LLM Evaluation (Legacy) \| MLflow](https://mlflow.org/docs/latest/genai/eval-monitor/llm-evaluation)
	- [GitHub - explodinggradients/ragas: Supercharge Your LLM Application Evaluations 🚀](https://github.com/explodinggradients/ragas) ⭐ 14k
	- [Model Evaluation Suite Quickstart — Deepchecks Documentation](https://docs.deepchecks.com/en/stable/tabular/auto_tutorials/quickstarts/plot_quick_model_evaluation.html)
	- [GitHub - Arize-ai/phoenix: AI Observability & Evaluation](https://github.com/Arize-ai/phoenix) ⭐ 9.1k
	- [TruLens for LLMs](https://www.trulens.org/)
- [GitHub - tatsu-lab/alpaca\_eval: An automatic evaluator for instruction-following language models. Human-validated, high-quality, cheap, and fast.](https://github.com/tatsu-lab/alpaca_eval) ⭐ 2.0k
- [Eureka: OSS Framework to evaluate LLMs - by Bugra Akyildiz](https://mlops.substack.com/p/eureka-oss-framework-to-evaluate)
- [The Needle In a Haystack Test. Evaluating the performance of RAG… | by Aparna Dhinakaran | Towards Data Science](https://towardsdatascience.com/the-needle-in-a-haystack-test-a94974c1ad38)
	- [GitHub - gkamradt/LLMTest\_NeedleInAHaystack: Doing simple retrieval from LLM models at various context lengths to measure accuracy](https://github.com/gkamradt/LLMTest_NeedleInAHaystack) ⭐ 2.2k
	- [The Needle In a Haystack Test: Evaluating the Performance of LLM RAG Systems - Arize AI](https://arize.com/blog-course/the-needle-in-a-haystack-test-evaluating-the-performance-of-llm-rag-systems/)
	- [Unlocking precision: The "Needle-in-a-Haystack" test for LLM evaluation](https://labelbox.com/guides/unlocking-precision-the-needle-in-a-haystack-test-for-llm-evaluation/)
	- [The Needle in the Haystack Test and How Gemini Pro Solves It | Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/the-needle-in-the-haystack-test-and-how-gemini-pro-solves-it)
- [GitHub - huggingface/evaluation-guidebook: Sharing both practical insights and theoretical knowledge about LLM evaluation that we gathered while managing the Open LLM Leaderboard and designing lighteval!](https://github.com/huggingface/evaluation-guidebook) ⭐ 2.1k
- [**Fiddler Auditor**](https://github.com/fiddler-labs/fiddler-auditor) ⭐ 189 - a tool to evaluate the robustness of language models.
- [**ragas**](https://github.com/explodinggradients/ragas) ⭐ 14k - Evaluation framework for your Retrieval Augmented Generation (RAG) pipelines.
	- Objective metrics, intelligent test generation, and data-driven insights for LLM apps
	- [Evaluating RAG Applications with RAGAs | by Leonie Monigatti | Towards Data Science](https://towardsdatascience.com/evaluating-rag-applications-with-ragas-81d67b0ee31a)
- [**tvalmetrics**](https://github.com/TonicAI/tvalmetrics) ⭐ 325 - Metrics to evaluate the quality of responses of your Retrieval Augmented Generation (RAG) applications.
- [GitHub - langchain-ai/openevals: Readymade evaluators for your LLM apps · GitHub](https://github.com/langchain-ai/openevals) ⭐ 1.0k
- [GitHub - strands-agents/evals: A comprehensive evaluation framework for AI agents and LLM applications. · GitHub](https://github.com/strands-agents/evals)
- [AutoEval](https://auto-eval.github.io/)

## Key Aspects of LLM Evaluation

1. **Accuracy and Quality**: Measures how well the model predicts or generates correct outputs for tasks like text generation, translation, or summarization.
2. **Bias and Fairness**: Assesses the presence of biases related to gender, race, or other demographics to ensure ethical AI.
3. **Robustness**: Tests the model’s resilience to noisy or adversarial inputs, ensuring consistent performance across diverse contexts.
4. **Generalization**: Evaluates how well the model can adapt to new, unseen data outside its training set.
5. **Efficiency**: Checks the computational cost, memory usage, and inference time, ensuring scalability.
6. **Interpretability**: Examines whether the model’s decision-making process is understandable, allowing developers to trace and reason about its outputs.
7. **Alignment**: Verifies whether the model’s outputs align with human values and expected behaviors, particularly important for applications like conversational AI.

### Others

- correctness
- completeness
- tool_usage
- data_accuracy
- actionability
- reasoning

## RAG Evaluation Metrics

### Faithfulness

Faithfulness in RAG evaluation measures if an LLM's answer is directly supported by retrieved context, preventing hallucinations. It calculates the proportion of truthful claims to total claims.

**Key benefits:**

- Prevents LLM hallucinations by grounding answers in retrieved documents
- Ensures generated responses are factually accurate
- Validates that claims made in answers are verifiable from source context

### Groundedness

Groundedness evaluation in Large Language Models (LLMs)—often referred to as faithfulness or attribution—**measures the extent to which an AI's generated response is directly supported by provided source material**, such as retrieved documents in a Retrieval-Augmented Generation (RAG) system. A grounded response sticks to the given context, avoiding hallucinations or external, unverified information.

### Key RAG Evaluation Metrics (Beyond Faithfulness)

- **Answer Relevancy**: Assesses how pertinent the generated answer is to the original user query
- **Contextual Precision**: Evaluates if the most relevant documents are ranked highest in retrieved results
- **Contextual Recall**: Measures if all necessary information to answer the query was retrieved
- **Answer Correctness**: Measures accuracy compared to a ground truth (golden dataset)
- **Multi-modal Faithfulness**: Ensures answers are grounded in both text and visual context

### Methods for Measuring Faithfulness

- **LLM-based Evaluation**: Tools like DeepEval and Ragas use a second LLM to break down answers into claims and verify them against the context
- **Semantic Similarity**: Comparing embedding vectors of the response and retrieved context to determine overlap
- **Post-hoc Evaluation**: Analyzing input modifications to see if a model's prediction changes when provided with alternative (counterfactual) information
- **RAGAS Framework**: Combines faithfulness, relevance, and precision into a single framework

### Common RAG Evaluation Frameworks & Tools

- [**Ragas**](https://github.com/explodinggradients/ragas) - Popular framework for evaluating RAG systems
- [**DeepEval**](https://github.com/confident-ai/deepeval) - Tool for testing faithfulness and other metrics
- [**Haystack**](https://docs.haystack.deepset.ai/) - Features a FaithfulnessEvaluator node
- [**IBM Watsonx**](https://www.ibm.com/watsonx) - Provides tools for AI governance and evaluation

## Text Generation Metrics

- **BLEU** - Measures n-gram overlap between generated and reference text, widely used for translation
- **ROUGE** - Recall-oriented metric comparing overlap of n-grams, commonly used for summarization
- **METEOR** - Considers synonyms and stemming beyond exact matches, more human-correlated than BLEU
- **BERTScore** - Uses contextual embeddings to measure semantic similarity between texts
- **Perplexity** - Measures how well a probability model predicts a sample, lower is better
- **Cross-Entropy Loss** - Quantifies difference between predicted and actual probability distributions

## Retrieval & Ranking Metrics

- **Precision@k** - Proportion of relevant items in top-k results
- **Recall@k** - Proportion of total relevant items found in top-k results
- **Mean Reciprocal Rank (MRR)** - Average of reciprocal ranks of first relevant result
- **Normalized Discounted Cumulative Gain (NDCG)** - Measures ranking quality with position-based discount
- **Mean Average Precision (MAP)** - Average precision across all queries
- **Hit Rate** - Percentage of queries with at least one relevant result in top-k

## Code Generation Metrics

- **Pass@k** - Percentage of problems solved by at least one of k generated solutions
- **Compilation Success Rate** - Percentage of generated code that compiles without errors
- **Test Pass Rate** - Percentage of generated code passing unit tests
- **Cyclomatic Complexity** - Measures code complexity through control flow paths
- **Code Coverage** - Percentage of code paths exercised by tests
- **Functional Correctness** - Whether code produces correct output for test cases

## Safety & Security Evaluation

- **Red Teaming** - Adversarial testing to find model vulnerabilities and unsafe behaviors
- **Jailbreak Resistance** - Testing robustness against prompt injection and system message overrides
- **Toxicity Detection** - Measuring harmful, offensive, or inappropriate content using tools like Perspective API
- **Prompt Injection Testing** - Validating resistance to malicious prompts trying to override instructions
- **Data Leakage Detection** - Checking if model exposes training data or sensitive information
- **PII Exposure** - Testing for personally identifiable information in outputs
- **Bias Testing** - Measuring demographic biases across protected attributes
- **Adversarial Robustness** - Resilience to adversarial inputs designed to fool the model

## Human Evaluation Methods

- **Inter-Annotator Agreement** - Measures consistency between human raters using Cohen's kappa or Fleiss' kappa
- **Pairwise Comparison** - Humans compare two outputs to select the better one
- **ELO Ratings** - Chess-style ranking system for comparing model outputs
- **Likert Scale Ratings** - Humans rate outputs on fixed scales (1-5, 1-7)
- **Expert Domain Evaluation** - Domain experts assess specialized outputs
- **Crowdsourcing Platforms** - Services like MTurk, Scale AI, Labelbox for large-scale human evaluation
- **Think-Aloud Protocol** - Users verbalize thoughts while interacting with system

## Agent-Specific Evaluation

- **Tool Use Correctness** - Whether agent selects and invokes appropriate tools
- **Multi-Step Reasoning** - Validates logical coherence across reasoning chains
- **Planning Accuracy** - Measures quality of generated plans to achieve goals
- **Goal Completion Rate** - Percentage of tasks successfully completed end-to-end
- **Action Sequence Evaluation** - Assesses validity and efficiency of action sequences
- **ReAct Evaluation** - Evaluates reasoning and acting patterns in agent workflows
- **Trajectory Scoring** - Rates entire interaction paths from start to completion
- **Subgoal Achievement** - Tracks completion of intermediate objectives

## Production Monitoring Metrics

- **Drift Detection** - Monitors changes in input/output distributions over time
- **User Feedback Loops** - Collects thumbs up/down, ratings, corrections from users
- **A/B Testing** - Compares model variants on real traffic
- **Latency Metrics** - p50, p95, p99 response times
- **Throughput** - Requests per second handled by system
- **Cost Per Query** - Token usage and inference cost tracking
- **Cache Hit Rate** - Percentage of requests served from cache
- **Error Rates** - 4xx, 5xx, timeout, and model failure rates
- **RLHF Metrics** - Reinforcement learning from human feedback quality scores

## Task-Specific Metrics

### Summarization

- **Compression Ratio** - Ratio of summary length to source document length
- **Coverage** - How much of source content is represented in summary
- **Factual Consistency** - Whether summary contains only facts from source
- **Abstractiveness** - Degree of novel phrasing vs copying from source

### Translation

- **chrF** - Character n-gram F-score, language-agnostic metric
- **TER (Translation Edit Rate)** - Number of edits needed to match reference
- **COMET** - Neural metric trained on human judgments
- **BLEURT** - BERT-based learned metric for translation quality

### Dialog & Conversation

- **Turn Coherence** - Logical flow between conversation turns
- **Context Retention** - Maintaining information across dialogue history
- **Slot Filling Accuracy** - Correctly extracting task-relevant information
- **Dialog Success Rate** - Percentage of conversations achieving user goal
- **Average Turns to Completion** - Efficiency of task-oriented dialogs

### Classification

- **Confusion Matrix** - Grid showing predicted vs actual classes
- **ROC-AUC** - Area under receiver operating characteristic curve
- **Precision/Recall/F1** - Standard classification quality metrics
- **Macro/Micro Averaging** - Aggregation methods for multi-class metrics

## Statistical Rigor

- **Confidence Intervals** - Range of plausible values for metrics with uncertainty
- **Statistical Significance** - T-tests, bootstrap methods to validate improvements
- **Sample Size Requirements** - Minimum data needed for reliable conclusions
- **Train/Val/Test Splits** - Proper data partitioning to avoid overfitting
- **Cross-Validation** - k-fold validation for robust evaluation on small datasets
- **Multiple Comparison Correction** - Bonferroni, FDR for testing multiple hypotheses

## Ground Truth & Dataset Creation

- **Golden Datasets** - Curated high-quality reference sets for evaluation
- **Synthetic Data Generation** - Programmatically creating evaluation examples
- **Data Augmentation** - Expanding test sets through transformations
- **Active Learning** - Selecting most informative examples to label
- **Few-Shot Examples** - Small labeled sets for quick evaluation
- **Adversarial Examples** - Edge cases and failure modes to test robustness

## Cost & Efficiency Metrics

- **Token Usage** - Input and output tokens consumed per request
- **Model Size** - Parameter count and memory footprint
- **Inference Time** - Time to generate response
- **Dollar Cost** - Actual API or compute costs per query
- **Energy Consumption** - Power usage for environmental impact
- **Batch Efficiency** - Throughput when processing multiple requests

## Multimodal Evaluation

- **Image-Text Alignment** - Coherence between visual and textual content
- **Visual Question Answering (VQA)** - Accuracy on questions about images
- **Image Captioning Metrics** - BLEU, CIDEr, SPICE for caption quality
- **OCR Accuracy** - Text extraction correctness from images
- **Video Understanding** - Temporal reasoning and event detection
- **Audio Transcription** - Word Error Rate (WER) for speech-to-text

## Domain-Specific Benchmarks

- **Medical**: MedQA, PubMedQA, USMLE - Clinical reasoning and medical knowledge
- **Legal**: LegalBench - Legal reasoning and case analysis
- **Code**: HumanEval, MBPP, CodeContests - Programming ability
- **Math**: GSM8K, MATH - Mathematical reasoning
- **Science**: MMLU, ARC - Scientific knowledge across domains
- **Reasoning**: HellaSwag, PIQA, WinoGrande - Common sense reasoning

## Emerging Evaluation Paradigms

- **Constitutional AI** - Evaluating alignment with written principles
- **Debate-Based Evaluation** - Two models debate answers, judge selects winner
- **Self-Consistency** - Sampling multiple outputs and measuring agreement
- **Chain-of-Thought Evaluation** - Assessing intermediate reasoning steps
- **Calibration** - How well model confidence matches actual accuracy
- **Uncertainty Quantification** - Measuring model confidence and ambiguity

## Benchmarks vs Evals vs Tests

- **Benchmarks provide a consistent point of comparison**. They are standardized datasets and tasks used to measure the general capabilities of models across the industry. For example, benchmarks like SQuAD or WMT test LLMs on tasks like question-answering or translation, giving a sense of overall performance. However, benchmarks are static and limited — they likely won’t capture the unique challenges or context your specific application faces.
- **Evals focus on understanding** how your LLM-powered components behave in your specific application environment. While benchmarks offer a general comparison, evals go deeper into the intricacies of the system’s performance on real-world tasks. For example, if your GenAI system is a chatbot, your evals might include how well it maintains context in long conversations, detects user emotions, or handles ambiguous queries. Evals allow you to probe deeper into the “why” behind system behaviors, offering insights into failure modes, edge cases, and emergent properties that are specific to the involvement of an LLM.
- **Tests are all about validation**. They ensure that the system or software behaves as expected, often using pass/fail criteria. You might imagine, then, that in order to **validate** you must first **understand** the requirements of the system in the production environment. In LLM-powered systems, it would make sense to create tests on top of evals to action on the understanding.

**In summary:**

- Use benchmarks (with grains of salt) to compare model capabilities directly
- Use evals to measure and understand the performance characteristics of your system
- Use tests to validate and action upon these learnings (e.g. “fail” if some set of metrics dip below acceptable thresholds)

[LLM benchmarks, evals and tests. A mental model \| by Thoughtworks \| Medium](https://thoughtworks.medium.com/llm-benchmarks-evals-and-tests-9bf2826f6c55)

## Evaluation Methods

Evaluation methods are the functions that score traces, observations, sessions, or dataset runs. You can use a variety of evaluation methods to add [scores](https://langfuse.com/docs/evaluation/experiments/data-model#scores).

|Method|What|Use when|
|---|---|---|
|[LLM-as-a-Judge](https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge)|Use an LLM to evaluate outputs based on custom criteria|Subjective assessments at scale (tone, accuracy, helpfulness)|
|[Scores via UI](https://langfuse.com/docs/evaluation/evaluation-methods/scores-via-ui)|Manually add scores to traces directly in the Langfuse UI|Quick quality spot checks, reviewing individual traces|
|[Annotation Queues](https://langfuse.com/docs/evaluation/evaluation-methods/annotation-queues)|Structured human review workflows with customizable queues|Building ground truth, systematic labeling, team collaboration|
|[Scores via API/SDK](https://langfuse.com/docs/evaluation/evaluation-methods/scores-via-sdk)|Programmatically add scores using the Langfuse API or SDK|Custom evaluation pipelines, deterministic checks, automated workflows|

- [Concepts - Langfuse](https://langfuse.com/docs/evaluation/core-concepts)
- [Evaluation of LLM Applications - Langfuse](https://langfuse.com/docs/evaluation/overview)
- [Automated Evaluations of LLM Applications - Langfuse](https://langfuse.com/blog/2025-09-05-automated-evaluations)
- [Langfuse Intro - Evaluations Deep Dive - YouTube](https://www.youtube.com/watch?v=hlgfW0IyREc)

## Links

- [What is AI Agent Evaluation? \| IBM](https://www.ibm.com/think/topics/ai-agent-evaluation)
- [Everything You Need to Know About LLM Evaluation Metrics - MachineLearningMastery.com](https://machinelearningmastery.com/everything-you-need-to-know-about-llm-evaluation-metrics/)
- [A Gentle Introduction to LLM Evaluations - Elena Samuylova - YouTube](https://www.youtube.com/live/ac6ZB5QEwGU)
