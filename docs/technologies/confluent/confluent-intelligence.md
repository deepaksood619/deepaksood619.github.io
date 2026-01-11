# Confluent Intelligence

Confluent Intelligence enables you to seamlessly integrate large-language models (LLMs), machine learning (ML), retrieval-augmented generation (RAG), and agentic AI into your streaming data workflows.

Confluent Intelligence is a suite of the following features.

- [Streaming Agents](https://docs.confluent.io/cloud/current/ai/overview.html#ai-overview-streaming-agents): Use Streaming Agents to build AI workflows that can invoke tools to interact with external systems, perform actions, or retrieve information as part of an AI workflow.
- [Real-time Context Engine](https://docs.confluent.io/cloud/current/ai/overview.html#ai-overview-realtime-context-engine): The Real-time Context Engine continuously materializes enriched enterprise data sets into a fast, in-memory cache and serves them to AI systems by using the [Model Context Protocol (MCP)](https://www.confluent.io/blog/ai-agents-using-anthropic-mcp/?session_ref=direct&url_ref=https%3A%2F%2Fdocs.confluent.io%2Fcloud%2Fcurrent%2Fai%2Foverview.html), all fully managed within Confluent Cloud.
- [Built-in machine learning (ML) functions](https://docs.confluent.io/cloud/current/ai/overview.html#ai-overview-ml-functions): Confluent Cloud for Apache Flink provides built-in functions for building ML workflows, like [ML_DETECT_ANOMALIES](https://docs.confluent.io/cloud/current/flink/reference/functions/model-inference-functions.html#flink-sql-ml-anomaly-detect-function) and [ML_FORECAST](https://docs.confluent.io/cloud/current/flink/reference/functions/model-inference-functions.html#flink-sql-ml-forecast-function).

## Streaming Agents

![Streaming Agents overview](https://docs.confluent.io/cloud/current/_images/streaming-agents-overview.svg)

The key to agentic AI isn’t building better LLMs – it’s data readiness.

Streaming Agents bridge the gap between enterprise data and AI capabilities by providing:

- **Real-time data access**: Fresh, contextualized data for AI decision-making
- **Unified data processing**: Seamless integration of streaming and batch data
- **Enterprise data utilization**: Effective use of existing enterprise data assets
- **Context-aware automation**: Agents that understand and act on current business context

With Streaming Agents, you can:

- Unify stream processing and agentic AI workflows using familiar Flink APIs, simplifying development and enabling every engineer to be an AI engineer.
- Integrate seamlessly with any tool, model, and data system.
- Access real-time context to enable agents to operate dynamically on live operational events and effectively use LLMs as reasoning engines to plan, decide, and act.
- Ensure agents are secure and trustworthy with full visibility, control, and secure, governed event flows.

## Real-time Context Engine

![Real-time Context Engine overview](https://docs.confluent.io/cloud/current/_images/realtime-context-engine.svg)

The Real-time Context Engine enables AI agents to query the most up-to-date context, grounding their responses in real-time data. It supports structured data with lookup by primary key. The Real-time Context Engine is available to AI agents by using MCP and works with any agent, hosted anywhere, as long as it supports MCP.

Real-time Context Engine tables are always loaded in memory, so they provide low-latency response times for agent queries. AI agents require fast access to relevant data to make informed decisions and provide accurate responses. The Real-time Context Engine provides the low-latency data access needed for real-time AI agent context serving.

## Built-in machine learning (ML) functions

![Built-in machine-learning (ML) functions with Confluent Cloud for Apache Flink](https://docs.confluent.io/cloud/current/_images/built-in-ml-functions.svg)

Simplify complex data science tasks into Flink SQL statements. Built-in ML functions enable forecasting and anomaly detection with Flink SQL functions to derive real-time insights, with no ML expertise or model building needed.

- Do continuous forecasting on time-series streaming data, with out-of-the-box configuration (Auto-ARIMA) or custom user configuration, like training size, seasonality, and forecast horizon.
- Perform anomaly detection for each new event.
- See real-time visualizations, like time-series charts and graphs showing forecasted values and anomalies.

Built-in ML Functions provide time-series Forecasting and Anomaly Detection SQL functions for streaming data, enabling you to derive real-time insights. These functions simplify complex data science tasks into Flink SQL, providing a familiar yet powerful way to apply AI to streaming data. Built on top of popular ML algorithms like ARIMA optimized for real-time performance, the functions deliver accurate forecasts and reliable anomaly detection.

With built-in ML functions, you can:

- Eliminate the need for batch processes
- Bridge the gap between data analysis and machine learning
- Gain real-time, actionable insights

Built-in ML functions make it easier for you to harness the full potential of AI-driven analytics. SQL functions enable real-time analysis, reduce complexity, and speed up decision-making by delivering insights immediately as the data is ingested. Built-in forecasting and anomaly detection make real-time AI accessible to everyone, enabling agents and teams to make smarter decisions faster.

Common use cases include:

- **Operational monitoring:** Detect system failures or performance issues in real time, minimizing downtime.
- **Financial forecasting:** Predict trends and identify irregular transactions in streaming financial data.
- **IoT analytics:** Monitor sensor data in industrial settings to detect equipment malfunctions or predict maintenance needs.
- **Retail analytics:** Forecast demand and optimize inventory by identifying purchasing trends in real time.
- **Marketing:** Monitor marketing campaign performance in real-time.

[Build AI with Confluent Intelligence in Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/ai/overview.html)

[Introducing Real-Time Context Engine for AI](https://www.confluent.io/blog/introducing-real-time-context-engine-ai/)

[Confluent Intelligence: Real-Time AI With Apache Kafka® and Apache Flink®](https://www.confluent.io/product/confluent-intelligence/)

[Confluent Intelligence - YouTube](https://www.youtube.com/watch?v=AcAxoF-Qj68)
