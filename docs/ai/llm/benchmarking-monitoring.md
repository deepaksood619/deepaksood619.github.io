# Benchmarking / Monitoring

## LLM Monitoring

- [GitHub - langfuse/langfuse: 🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23](https://github.com/langfuse/langfuse) ⭐ 24k
	- [Langfuse](https://langfuse.com/)
	- [10 min Walkthrough of Langfuse – Open Source LLM Observability, Evaluation, and Prompt Management - YouTube](https://www.youtube.com/watch?v=2E8iTvGo9Hs)
	- [LLM-as-a-Judge Evaluation - Langfuse](https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge)
	- [LLM Monitoring and Observability: Hands-on with Langfuse \| Towards Data Science](https://towardsdatascience.com/llm-monitoring-and-observability-hands-on-with-langfuse/)
- [Langtrace](https://www.langtrace.ai/)
- [Adaline - Iterate, evaluate, deploy, and monitor prompts](https://www.adaline.ai/)
- [LangSmith](https://www.langchain.com/langsmith)
	- Not opensource like langfuse
	- [GitHub - langchain-ai/langsmith-sdk: LangSmith Client SDK Implementations · GitHub](https://github.com/langchain-ai/langsmith-sdk)
- [Keywords AI / LLM Observability platform for AI teams](https://www.keywordsai.co) - a full-stack LLM engineering platform for observability, prompt management, evals, and LLM inferencing.
- [Helicone / LLM-Observability for Developers](https://www.helicone.ai/)
- [GitHub - confident-ai/deepteam: The LLM Red Teaming Framework](https://github.com/confident-ai/deepteam) ⭐ 1.4k
- [GitHub - comet-ml/opik: Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, automated evaluations, and production-ready dashboards.](https://github.com/comet-ml/opik) ⭐ 18k
- [GitHub - traceloop/openllmetry: Open-source observability for your LLM application, based on OpenTelemetry](https://github.com/traceloop/openllmetry) ⭐ 7.0k
- [GitHub - evidentlyai/evidently: Evidently is ​​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.](https://github.com/evidentlyai/evidently) ⭐ 7.3k
- [3 Ways to Monitor Spending on Your OpenAI Account \| Torii](https://www.toriihq.com/articles/how-to-monitor-spending-openai)

### Leaderboards

- [LMSYS Chatbot Arena (Multimodal): Benchmarking LLMs and VLMs in the Wild](https://lmarena.ai/)
- [Hugging Face Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
- [Alpaca Eval Leaderboard](https://tatsu-lab.github.io/alpaca_eval/)
- [Overview Leaderboard \| LMArena](https://lmarena.ai/leaderboard)
- [GitHub - protectai/llm-guard: The Security Toolkit for LLM Interactions](https://github.com/protectai/llm-guard) ⭐ 2.7k

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

## Benchmarks

[Decoding AI Benchmarks: The 7 Essential LLM Benchmarks You Need to Understand](https://www.thetoolnerd.com/p/decoding-ai-benchmarks-the-7-essential-llm-benchmarks-thetoolnerd)

| Benchmark Name                          | Organizer / Source                         | Format / Dataset                                                                  | Task Type / Content                                                                               | Evaluation / Context                                                                                 | Reference / Link                     |
| --------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Agentic Coding (SWE-bench)**          | SWE-bench team                             | 2,294 real GitHub issues & PRs from 12 Python repos                               | Bug fixes, feature implementation, multi-file codebase edits                                      | Pass/fail via test suites; requires codebase understanding, multi-file coordination, long-context    | swebench.com                         |
| **Agentic Terminal Coding**             | Terminal Bench team                        | Suite of tasks: English descriptions, Docker envs, test scripts (T-Bench-Core-vO) | Compiling code, server management, software install, system-level reasoning in sandboxed terminal | Pass/fail via test scripts; one attempt per task; real terminal, no external tool access             | tbench.ai                            |
| **Graduate-level** **Reasoning (GPQA)** | GPQA research team                         | 448 (main), 546 (extended), 198 (diamond) MCQs in biology, chemistry, physics     | Graduate-level, Google-proof, expert-created MCQs                                                 | Accuracy vs. PhD experts (65-74%) & non-experts (34%); hardest: "Diamond" subset                     | arxiv.org/abs/231 1.12022            |
| **Agentic Tool Use (TAU Bench)**        | TAU-bench research team                    | Simulated users, realistic databases, policy docs, API tools (retail/airline)     | Customer support, workflow automation, multi-step reasoning, tool/API use, policy following       | Correct end-state in database; must follow domain-specific rules; multi-turn, multi-tool interaction | arxiv.org/pdf/240 6.12045            |
| **MMMLU (Multilingual MMLU)**           | MMMLU research team                        | 57 subjects, 14 languages, elementary to advanced professional level              | Multiple-choice, zero/few-shot, broad subject coverage (STEM, humanities, law, ethics, etc.)      | Accuracy across subjects/languages; identifies model blind spots                                     | mmmu- benchmark.githu b.io           |
| **Visual Reasoning (MMMU)**             | MMMU research team                         | 11,500 college-level problems, 6 disciplines, 30 subjects                         | Visual & textual reasoning: charts, diagrams, tables, maps, music sheets, chemical structures     | Perception, knowledge, reasoning in multimodal (text+image) context; expert-level subject knowledge  | mmmu- benchmark.githu b.io           |
| **High School Math (AIME 2025)**     | Mathematic al Association of America (MAA) | 15 questions, 3 hours; 3-digit integer answers; no calculators                    | Algebra, geometry, combinatorics, number theory, probability; creative problem-solving            | One attempt per student/year (AIME I or Il); high school competition level                           | vals.ai/benchmar ks/aime-2025- 03-13 |

## Links

- [Benchmarking LLMs: TPS, TTFT, GPU Usage \| Medium](https://rumn.medium.com/benchmarking-llm-performance-token-per-second-tps-time-to-first-token-ttft-and-gpu-usage-8c50ee8387fa)

