# Evaluation / Benchmarking

## LLM Evaluation / Monitoring

- [GitHub - langfuse/langfuse: 🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23](https://github.com/langfuse/langfuse)
	- [Langfuse](https://langfuse.com/)
- [**DeepEval**](https://github.com/confident-ai/deepeval) - a simple-to-use, open-source evaluation framework for LLM applications.
- [Adaline - Iterate, evaluate, deploy, and monitor prompts](https://www.adaline.ai/)
- [LangSmith](https://www.langchain.com/langsmith)
- [Galileo AI: The Generative AI Evaluation Company](https://galileo.ai/)
- [Helicone / LLM-Observability for Developers](https://www.helicone.ai/)
- [GitHub - confident-ai/deepteam: The LLM Red Teaming Framework](https://github.com/confident-ai/deepteam)
- [Evaluating LLM Models: A Guide to Popular Frameworks](https://medium.com/@abhghoshsgp/evaluating-llm-models-a-guide-to-popular-frameworks-59f236542d46)
	- [MLflow LLM Evaluation (Legacy) \| MLflow](https://mlflow.org/docs/latest/genai/eval-monitor/llm-evaluation)
	- [GitHub - explodinggradients/ragas: Supercharge Your LLM Application Evaluations 🚀](https://github.com/explodinggradients/ragas)
	- [Model Evaluation Suite Quickstart — Deepchecks Documentation](https://docs.deepchecks.com/en/stable/tabular/auto_tutorials/quickstarts/plot_quick_model_evaluation.html)
	- [GitHub - Arize-ai/phoenix: AI Observability & Evaluation](https://github.com/Arize-ai/phoenix)
	- [TruLens for LLMs](https://www.trulens.org/)

## Key Aspects of LLM Evaluation

1. **Accuracy and Quality**: Measures how well the model predicts or generates correct outputs for tasks like text generation, translation, or summarization.
2. **Bias and Fairness**: Assesses the presence of biases related to gender, race, or other demographics to ensure ethical AI.
3. **Robustness**: Tests the model’s resilience to noisy or adversarial inputs, ensuring consistent performance across diverse contexts.
4. **Generalization**: Evaluates how well the model can adapt to new, unseen data outside its training set.
5. **Efficiency**: Checks the computational cost, memory usage, and inference time, ensuring scalability.
6. **Interpretability**: Examines whether the model’s decision-making process is understandable, allowing developers to trace and reason about its outputs.
7. **Alignment**: Verifies whether the model’s outputs align with human values and expected behaviors, particularly important for applications like conversational AI.

## Metrics

- Token Per Second (TPS)
- Time to first token (TTFT)
- GPU Usage

### Time to first token (TTFT)

It refers to the amount of time an LLM takes to generate the first token in its response after receiving an input or prompt. It is typically measured in seconds or milliseconds, and a lower TTFT indicates faster model responsiveness.

**Why TTFT Matters for Performance Benchmarking?**

TTFT is a key metric for understanding a model’s responsiveness, especially when input complexity varies. It helps benchmark how efficiently the model handles different types of inputs.

### Token Per Second (TPS)

TPS refers to the number of tokens that a LLM can generate or process in one second. A higher TPS indicates faster model responses.

**TPS is generally calculated using the formula:**

> **TPS = (Input Tokens + Output Tokens) / Total Turnaround Time (TAT in seconds)**

This value represents the **average TPS**, accounting for both the input and output tokens over the total time taken.

However, it’s also important to evaluate **Output TPS**, which specifically measures how many tokens the model generates per second, independent of the input tokens.

**Output TPS can be calculated as:**

> Output TPS = Output Tokens / Time to Generate Output Tokens (TAT in seconds)

Output TPS is a more focused metric that excludes input token processing. It provides a clear measure of the model’s raw generation speed, offering insights into how efficiently the model produces output regardless of the complexity or size of the input.

### GPU Usage

GPU usage benchmarking is critical for two main reasons: it helps you avoid performance bottlenecks in production and ensures you’re not overpaying for unused resources. Without proper GPU benchmarking, you might end up with a model that either crashes due to insufficient resources or wastes money on underutilized hardware.

When measuring GPU usage, we look at two key metrics:

**Volatile GPU Utilization (0–100%) :**

This shows how hard your GPU is working during model inference. Think of it like your GPU’s ‘effort level’ — it sits at 0% when idle and ramps up as the model generates output. We need to know:

- What percentage of GPU power the model typically uses
- How utilization varies with different batch sizes and input lengths
- Peak utilization during heavy loads

**GPU Memory Usage:**

This tells us how much VRAM your model needs. It’s crucial to measure:

- Base memory required just to load the model (idle state)
- Peak memory usage during generation
- Memory patterns with different input sizes
- How memory usage scales with batch processing

Understanding both metrics helps you right-size your infrastructure and avoid nasty surprises in production like out-of-memory errors or performance degradation.

> Using these metrics (TTFT, TPS, and GPU usage) together helps us make a smart comparison between different GPUs and infrastructure options. This way, we can pick the setup that gives us the best performance for our specific use case without overspending.

## Links

- [Benchmarking LLMs: TPS, TTFT, GPU Usage \| Medium](https://rumn.medium.com/benchmarking-llm-performance-token-per-second-tps-time-to-first-token-ttft-and-gpu-usage-8c50ee8387fa)
- [What is AI Agent Evaluation? \| IBM](https://www.ibm.com/think/topics/ai-agent-evaluation)
