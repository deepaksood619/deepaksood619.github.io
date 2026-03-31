# Evaluation

- [**DeepEval**](https://github.com/confident-ai/deepeval) ⭐ 14k - a simple-to-use, open-source evaluation framework for LLM applications.
- [Galileo AI: The Generative AI Evaluation Company](https://galileo.ai/)
- [Evaluating LLM Models: A Guide to Popular Frameworks](https://medium.com/@abhghoshsgp/evaluating-llm-models-a-guide-to-popular-frameworks-59f236542d46)
	- [MLflow LLM Evaluation (Legacy) \| MLflow](https://mlflow.org/docs/latest/genai/eval-monitor/llm-evaluation)
	- [GitHub - explodinggradients/ragas: Supercharge Your LLM Application Evaluations 🚀](https://github.com/explodinggradients/ragas) ⭐ 13k
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
- [**ragas**](https://github.com/explodinggradients/ragas) ⭐ 13k - Evaluation framework for your Retrieval Augmented Generation (RAG) pipelines.
	- Objective metrics, intelligent test generation, and data-driven insights for LLM apps
	- [Evaluating RAG Applications with RAGAs | by Leonie Monigatti | Towards Data Science](https://towardsdatascience.com/evaluating-rag-applications-with-ragas-81d67b0ee31a)
- [**tvalmetrics**](https://github.com/TonicAI/tvalmetrics) ⭐ 325 - Metrics to evaluate the quality of responses of your Retrieval Augmented Generation (RAG) applications.
- [GitHub - openai/evals: Evals is a framework for evaluating LLMs and LLM systems, and an open-source registry of benchmarks.](https://github.com/openai/evals) ⭐ 18k
- [GitHub - langchain-ai/openevals: Readymade evaluators for your LLM apps · GitHub](https://github.com/langchain-ai/openevals) ⭐ 1.0k
- [GitHub - strands-agents/evals: A comprehensive evaluation framework for AI agents and LLM applications. · GitHub](https://github.com/strands-agents/evals)

## Key Aspects of LLM Evaluation

1. **Accuracy and Quality**: Measures how well the model predicts or generates correct outputs for tasks like text generation, translation, or summarization.
2. **Bias and Fairness**: Assesses the presence of biases related to gender, race, or other demographics to ensure ethical AI.
3. **Robustness**: Tests the model’s resilience to noisy or adversarial inputs, ensuring consistent performance across diverse contexts.
4. **Generalization**: Evaluates how well the model can adapt to new, unseen data outside its training set.
5. **Efficiency**: Checks the computational cost, memory usage, and inference time, ensuring scalability.
6. **Interpretability**: Examines whether the model’s decision-making process is understandable, allowing developers to trace and reason about its outputs.
7. **Alignment**: Verifies whether the model’s outputs align with human values and expected behaviors, particularly important for applications like conversational AI.

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
[Concepts - Langfuse](https://langfuse.com/docs/evaluation/core-concepts)

[Evaluation of LLM Applications - Langfuse](https://langfuse.com/docs/evaluation/overview)

[Automated Evaluations of LLM Applications - Langfuse](https://langfuse.com/blog/2025-09-05-automated-evaluations)

## Links

- [What is AI Agent Evaluation? \| IBM](https://www.ibm.com/think/topics/ai-agent-evaluation)
- [Everything You Need to Know About LLM Evaluation Metrics - MachineLearningMastery.com](https://machinelearningmastery.com/everything-you-need-to-know-about-llm-evaluation-metrics/)
- [A Gentle Introduction to LLM Evaluations - Elena Samuylova - YouTube](https://www.youtube.com/live/ac6ZB5QEwGU)
