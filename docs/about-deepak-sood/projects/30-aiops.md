# AIOps

## Top challenges organizations face when managing a complicated IT infrastructure

Managing the additional complexity of a hybrid multicloud environment across multiple tools, systems and processes ranked among the top three primary challenges faced by IT leaders surveyed. It was cited as the primary challenge by 60% of respondents. The primary challenges indicated by the MD&I survey fall into three main areas:

- Lack of visibility
- Excessive complexity and cost
- Lack of insight into IT health and problems

## Solution

1. Pod out of memory, 2nd order debugging
	1. Check metrics
		1. Why memory is increasing
		2. Thread dumps
			1. Processes
	2. Check Deployments
	3. Create SOPs and RCAs
2. Code reviews
	1. Kubernetes manifest suggestions
	2. Like no request or memory provided
3. Configuration Validation
	1. Env based validation
	2. DB, DNS if dev pointing or not
4. Pod crashbackloopoff
	1. Why it happened in easy format
5. IT Inventory Matured view
	1. Service Map
	2. UpStream, Downstream
6. AI Alerts

Database alerts, Kubernetes events, middleware events
Consume
Hit - 98%
Create dependency graph - manual graph
Check dependent problems
Make correlation

Deep Check - JSON
or epbf

## Prompt

Create a detailed proposal for building an advanced GenAI observability (AIOps System) and auto remediation system for Airtel Africa, a Telecom giant. The system will consume events from disparate sources like

- Database alerts
- Kubernetes events
- Middleware events
- etc

System will also have a dependency graph, where it will have whole inventory and relationship between these assets both upstream and downstream, these can be either automated discovery process or manual feed, or a combination of two.

Then using these events and alerts if will find out anomalies and all impacted systems to create an automated RCA, and then also help debug the issues by 2nd order debugging and share remediation steps.

The system will be self learning and will learn from each incident.

### Data

1. Metrics
2. Logs
3. Infra inventory

## Tools

- [Robusta](https://home.robusta.dev/)
- [Coroot is an open-source observability platform built for simplicity - Coroot](https://coroot.com/)
- [Powerful Workflow Automation Software & Tools - n8n](https://n8n.io/)
- [Eyer - headless AIOps](https://www.eyer.ai/)
- [Ops AI by Middleware - Observability copilot to resolve production issues instantly - YouTube](https://www.youtube.com/watch?v=xKHsS2XKseA)
- [OpsAI by Middleware – AI-Powered Observability Co-Pilot](https://middleware.io/product/ops-ai/)
- [From Stateful Stream Processing to Stateful Sandbox \| by Yingjun Wu \| Feb, 2026 \| Data Engineer Things](https://blog.dataengineerthings.org/from-stateful-stream-processing-to-stateful-sandbox-de18f2849ebb)

## References

- [Root cause analysis with logs: Elastic Observability's AIOps Labs](https://www.elastic.co/observability-labs/blog/observability-logs-machine-learning-aiops)
- Deploy LLM locally to use as API - Ollama
- Langfuse monitoring
- Langchain / LlamaIndex / Langsmith / LangGraph
- OpenWebUI
- RAG + Agents
- [Harness Developer Hub](https://developer.harness.io/docs/platform/harness-aida/harness-mcp-server/)
- **AIOps - Prometheus, Logs, Kubernetes Metrics, RAG - RCAs**
- https://n8n.io/workflows/3066-automate-multi-platform-social-media-content-creation-with-ai/
- Nofire.ai
- Model - lingam
- Medical use cases
- Causal
- Regression
- Automatic Root Cause Analysis
- Time Travel Troubleshooting
- ChatOps
- https://www.kyndryl.com/content/dam/kyndrylprogram/cs_ar_as/AIOps_AS_USEN.pdf
- [From Stateful Stream Processing to Stateful Sandbox \| by Yingjun Wu \| Feb, 2026 \| Data Engineer Things](https://blog.dataengineerthings.org/from-stateful-stream-processing-to-stateful-sandbox-de18f2849ebb)
