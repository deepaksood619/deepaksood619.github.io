---
slug: /cloud/aws/ai/bedrock
title: Bedrock
description: Explore Amazon Bedrock and its powerful agents, knowledge bases, and RAG solutions for enhanced AI-driven applications and workflows.
created: 2025-04-03
updated: 2026-10-19
---

## Recent Announcements

**See**: [AWS re:Invent 2025 - Bedrock Updates](cloud/aws/aws-reinvent-2025-announcements.md#8-amazon-bedrock--openai-partnership) - Major partnership expansion bringing GPT-5.5, Codex, Nova 2 family (Sonic, Lite, Forge, Omni, Act), AgentCore enhancements, 18 new open weight models, and reinforcement fine-tuning capabilities.

- [Agents for Amazon Bedrock - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html)
- [How Agents for Amazon Bedrock works - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-how.html)
- [amazon-bedrock-workshop/02\_KnowledgeBases\_and\_RAG/1\_managed-rag-kb-retrieve-generate-api.ipynb at a7e62b80669378de1bae414e0b646399c7934f8e · aws-samples/amazon-bedrock-workshop · GitHub](https://github.com/aws-samples/amazon-bedrock-workshop/blob/a7e62b80669378de1bae414e0b646399c7934f8e/02_KnowledgeBases_and_RAG/1_managed-rag-kb-retrieve-generate-api.ipynb) ⭐ 2.2k
- [amazon-bedrock-samples/rag-solutions/contextual-chatbot-using-knowledgebase at main · aws-samples/amazon-bedrock-samples · GitHub](https://github.com/aws-samples/amazon-bedrock-samples/tree/main/rag-solutions/contextual-chatbot-using-knowledgebase) ⭐ 1.5k
- [Create a Superpowered AI Chatbot: Integrating Tools with Amazon Bedrock Converse API - YouTube](https://www.youtube.com/watch?v=oaIAyYLuZQw)
- [Setting up AWS Bedrock for API-based text inference \| by Péter Harang \| Medium](https://medium.com/@harangpeter/setting-up-aws-bedrock-for-api-based-text-inference-dc25ab2b216b)
- [How content chunking works for knowledge bases - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-chunking.html)
- [Amazon Bedrock Knowledge Bases now supports advanced parsing, chunking, and query reformulation giving greater control of accuracy in RAG based applications \| AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-knowledge-bases-now-supports-advanced-parsing-chunking-and-query-reformulation-giving-greater-control-of-accuracy-in-rag-based-applications/)
- [Crawl web pages for your knowledge base - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/webcrawl-data-source-connector.html)
- [Retrieve data and generate AI responses with Amazon Bedrock Knowledge Bases - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html)
- [Build a RAG based Generative AI Chatbot in 20 mins using Amazon Bedrock ...](https://youtu.be/hnyDDfo8e9Q)

## Web Crawl

- [Crawl web pages for your knowledge base - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/webcrawl-data-source-connector.html)
- [Implement web crawling in Amazon Bedrock Knowledge Bases \| AWS Machine Learning Blog](https://aws.amazon.com/blogs/machine-learning/implement-web-crawling-in-knowledge-bases-for-amazon-bedrock/)

## Memory using Agents

- [Agents for Amazon Bedrock now support memory retention and code interpretation (preview) \| AWS News Blog](https://aws.amazon.com/blogs/aws/agents-for-amazon-bedrock-now-support-memory-retention-and-code-interpretation-preview/)
- [Retain conversational context across multiple sessions using memory - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-memory.html)
- If memory is enabled, your agent retains the sessions in the memory for up to 365 days. You can optionally configure the retention period by specifying a duration between 1 and 365 days. All session summaries beyond this duration will be deleted.
- [View memory sessions - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-memory-view.html)
- [Enable agent memory - Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-configure-memory.html)

## Cost Optimization

From the AWS Cloud Intelligence Dashboards session [Maximize Cost Effectiveness of generative AI workloads](https://youtu.be/4Tt4Wx5lHKs) (Aug 2026); prices quoted there are approximate. FinOps for AI was the top forward-looking priority in the FinOps Foundation's State of FinOps 2026 (up six places).

- **Billing basics:** Bedrock bills input and output tokens, and tokenization is model-specific, so the same text costs differently across models. Choose by modality, context window, cost, latency (time to first token), regional availability and per-model quotas (requests and tokens per minute); over-provisioning a model is like over-sizing an EC2 instance. Example: 20M input + 1M output tokens is about $25 on Haiku 4.5 vs about $125 on Opus 4.6 with reasoning
- **Inference routing:** in-region keeps data in the region but limits quota; a geographic cross-region profile (US/EU/APAC prefix) raises throughput while keeping residency within the geography; a global profile is about 10% cheaper with no residency guarantee (fine for dev and synthetic data)
- **Capacity options:** on-demand with a `service_tier` of standard, flex (discounted, higher latency, back of the queue) or priority (front of the queue, higher price); a reserved tier (1 or 3 month commitment to fixed RPM/TPM, paid whether used or not, guaranteed throughput, but no discount); batch inference (`CreateModelInvocationJob`, prompts in S3, results within 24h) at 50% off on-demand
- **Cut input tokens:** strip whitespace, boilerplate and pleasantries; condense long inputs with a small model first; for chat, keep a sliding window of the last N turns or summarize history, since models are stateless and history is resent on every call
- **Cut output tokens:** ask for concise answers, prefer CSV over JSON, and set `max_tokens` near the real average, because quota is reserved against `max_tokens`, not actual output (5,000 max vs 1,000 actual is billed at 1,000 but counts 5,000 against quota)
- **Prompt caching:** add cache points; cache writes cost about 10% more than input tokens and reads are about 90% cheaper; default TTL is 5 minutes (up to 1 hour on some models)
- **Intelligent prompt routing:** a router over a cheaper and a stronger model with a quality threshold; use the router ARN as the model id, and `invokedModelId` in the response shows which model answered. Build evaluation in from the start, because changing models changes answer quality
- **Monitoring:** CloudWatch has tokens, requests, latency, throttles and cache hits but no cost. In Cost Explorer, third-party models (e.g. Anthropic) bill as AWS Marketplace spend, and Cost Anomaly Detection does not cover Marketplace spend, so use Budgets or CloudWatch alarms. CUR 2.0 adds a `line_item_iam_principal` column. The open-source Cloud Intelligence Dashboards (CloudFormation plus QuickSight, about 25-30 min to deploy, typically under $100 a month) include a Bedrock section with cost per 1M tokens and spend by model, usage type, tag, inference profile and region
- **Cost allocation:** individual API calls cannot be tagged; tag inference profiles, tag IAM roles/principals, or use IAM session tags via `AssumeRole`, all of which propagate to CUR and Cost Explorer with no application changes
- **Governance:** enable only approved models (least privilege), set budgets and anomaly alerts (agent loops burn tokens), and track unit economics (cost per customer, call or task) and ROI rather than cost per 1M tokens alone

## Learning

- Amazon Bedrock Getting Started - https://explore.skillbuilder.aws/learn/course/external/view/elearning/17508/amazon-bedrock-getting-started
- Building Generative AI Applications Using Amazon Bedrock - https://explore.skillbuilder.aws/learn/course/external/view/elearning/17904/building-generative-ai-applications-using-amazon-bedrock

## Links

- [Agents Tools & Function Calling with Amazon Bedrock (How-to) - YouTube](https://www.youtube.com/watch?v=2L_XE6g3atI)
- [Integrating Generative AI Models with Amazon Bedrock - YouTube](https://www.youtube.com/watch?v=nSQrY-uPWLY)
- [Generative AI In AWS-AWS Bedrock Crash Course #awsbedrock #genai - YouTube](https://www.youtube.com/watch?v=2maPaQutcWs)
