---
slug: /aws-reinvent-2025-announcements
title: AWS re:Invent 2025 - Major Announcements
description: Transformative AWS updates from re:Invent 2025 including autonomous AI agents, Lambda Durable Functions, Graviton5, Trainium3, and multi-cloud interconnects
created: 2026-07-05
updated: 2026-07-05
---

AWS re:Invent 2025 marked a paradigm shift from incremental cloud improvements to fundamental architectural transformations. These announcements redefine autonomous operations, serverless boundaries, cost efficiency, and foundational infrastructure capabilities.

## 1. AWS Transform (Autonomous Tech Debt Remediation)

For decades, cloud modernization required hiring massive systems-integrator teams spending years rewriting legacy systems. AWS Transform breaks this paradigm with agentic AI-driven autonomous modernization.

**Architecture Game-Changer:**
- Acts as 24/7 autonomous engineer
- Full-stack modernization of entire legacy portfolios
- Auto-converts COBOL mainframes to cloud-native Java
- Refactors .NET applications
- Migrates massive VMware workloads
- Up to 5x faster than traditional approaches

**Continuous Remediation:**
- Autonomously detects architectural tech debt
- Prioritizes fixes at scale
- Patches as developers push code
- Cuts execution time by up to 80%

**Capabilities:**
- Windows application modernization (5x faster)
- Mainframe reimagination with automated testing
- Reduces modernization timelines from years to months

## 2. AWS Lambda Managed Instances

Historically, architects faced a binary choice: Lambda's simplicity with hardware limitations, or EC2/ECS with massive management overhead.

**Architecture Game-Changer:**
- Run serverless Lambda workloads on specialized EC2 compute clusters
- Retain serverless simplicity (AWS manages scaling, patching, availability)
- Gain access to specialized GPU/AI chips
- Use unique EC2 pricing models
- Leverage specific hardware optimizations

## 3. AWS Lambda Durable Functions

Native stateful orchestration and automatic checkpointing directly in Lambda eliminates complex Step Function management.

**Capabilities:**
- Build applications coordinating multiple steps reliably
- Duration: seconds to up to one year
- Pause, resume, track state natively within serverless containers
- Multi-step processes without external databases
- Long-running AI agent workflows

**Impact:**
- Complex business logic with built-in retries
- State management directly in Lambda
- Reduced reliance on external orchestrators

## 4. Native Cross-Cloud High-Speed Interconnects (AWS-GCP)

AWS and Google Cloud launched native, open-standard, private high-speed interconnect breaking multi-cloud barriers.

**Architecture Game-Changer:**
- Eliminated complex third-party network providers (Megaport)
- Removed massive ingress/egress financial penalties
- Native multi-cloud architecture support

**Benefits:**
- Seamlessly split workloads between clouds
- Store datasets in AWS S3 data lake
- Run real-time analytics on Google Cloud infrastructure
- Ultra-low latency
- Minimized data-transfer friction

## 5. Custom Next-Gen AI Silicon

### AWS Graviton5

Fifth-generation CPU providing best price-performance for broad workload range in EC2.

**Performance:**
- 25% better raw compute performance vs previous generation
- Radical energy efficiency enhancements
- 192 cores (M9g instances)

### AWS Trainium3

Deployed via Trn3 UltraServers using 3nm architecture.

**AI Compute Capabilities:**
- 4x performance boost for multi-billion parameter AI models
- 30-40% better price-to-performance ratio vs standard GPUs
- Makes massive AI workloads financially viable for corporate budgets
- First 3nm AI chip from AWS

**Complementary Hardware:**
- NVIDIA GB300 UltraServers on EC2
- Massive on-demand scale for high-throughput inference

## 6. Amazon S3 Enhancements

### 50TB Object Size Limit

Increased from 5TB to 50TB per individual object.

**Impact:**
- Fundamentally changes AI training pipeline data ingestion
- Massive raw media dataset handling
- Eliminates complexity of splitting/tracking/reconstructing multi-part files

### S3 Vectors (Generally Available)

Vector storage and querying built directly into S3.

**Capabilities:**
- Support up to 2 billion vectors per index
- 100ms query latencies
- Reduces RAG costs by up to 90% vs specialized databases
- Pulls AI data gravity to fundamental storage layer

**S3 Tables:**
- Replication support
- Intelligent-Tiering

**S3 Storage Lens:**
- Performance metrics
- Support for billions of prefixes
- Export to S3 Tables

## 7. Autonomous Frontier Agents

AI shifting from request-response APIs to persistent autonomous actors.

### AWS Frontier Agents

**Kiro Autonomous Agent:**
- Virtual developer working autonomously for days
- Manages state
- Reviews architectural designs
- Fixes bugs without human intervention

**AWS Security Agent (Preview):**
- AI-powered design reviews
- Code analysis
- Contextual penetration testing

**AWS DevOps Agent (Preview):**
- Acts as autonomous on-call engineer
- Analyzes CloudWatch, GitHub, ServiceNow data

### Agentic Amazon Connect

Specialized agent-driven workflows:
- **Connect Decisions:** Supply chain automation
- **Connect Talent:** Hiring workflows
- **Connect Health:** Healthcare operations
- Turns AI into proactive operational teammates

### Amazon Quick

Desktop AI assistant:
- Generates visual assets
- Builds custom dashboards via natural language
- Integrates with external workspaces

## 8. Amazon Bedrock & OpenAI Partnership

Early 2026 partnership expansion reshaping enterprise AI consumption.

### GPT-5.5 and Codex on Bedrock

- Access state-of-the-art reasoning within AWS security boundary
- Keep data entirely within AWS trust perimeter
- Native integration with AWS environments

### Bedrock Managed Agents (OpenAI-powered)

- Combines OpenAI harness with AWS infrastructure
- Build production-ready agents without stitching clouds
- No disparate environment management

### Amazon Nova Family

**Nova 2 Sonic (Speech-to-Speech):**
- Multilingual conversations
- Dynamic speech control
- Crossmodal inputs
- Improved telephony integration

**Nova 2 Lite:**
- Fast, cost-effective everyday tasks
- Extended thinking capabilities
- Built-in tools
- Million-token context window

**Nova Forge:**
- Build custom frontier models
- Deep domain expertise embedding
- Without traditional cost/compute/time barriers
- "Open training" - blend proprietary data with Nova 2 checkpoints

**Nova 2 Omni (Preview):**
- All-in-one multimodal reasoning and image generation
- Text, images, video, speech inputs
- Text and image outputs

**Nova Act (Generally Available):**
- Automate browser-based tasks
- Form filling, search & extract, shopping & booking, QA testing
- Over 90% reliability

### Bedrock AgentCore

- Enhanced policy controls
- Quality monitoring
- Improved memory
- Natural conversation abilities

### Model Additions

- 18 fully managed open weight models
- Mistral Large 3 and Ministral 3 (3B, 8B, 14B)
- Models from Google, Kimi AI, MiniMax AI, Mistral AI, NVIDIA, OpenAI, Qwen

### Reinforcement Fine-Tuning

- 66% accuracy gains over base models
- No large labeled datasets required
- No deep ML expertise needed

## 9. Compute & Containers

### Amazon EC2 Enhancements

**X8aedz Instances:**
- 5th Gen AMD EPYC processors
- Up to 5 GHz processor speeds
- 3 TiB memory

### Amazon EKS

- Fully managed platform capabilities
- Workload orchestration
- Cloud resource management

## 10. Database Innovations

### Database Savings Plans

New pricing model across AWS Databases.

### Amazon RDS

- Developer Edition support for SQL Server
- M7i/R7i instance support with optimized CPU
- Storage expansion up to 256 TiB

## 11. AI/ML Infrastructure

### Amazon SageMaker AI

- Serverless MLflow integration
- Checkpointless and elastic training on HyperPod
- Instant recovery from failures
- Automatic scaling based on resource availability
- New serverless customization

### Amazon OpenSearch Service

- GPU acceleration for vector databases
- 10x faster performance
- Quarter of the cost
- Auto-optimization capabilities

## 12. Security & Governance

### AWS Security Hub (GA)

- Near real-time analytics
- Risk prioritization

### Amazon GuardDuty

- Extended Threat Detection for EC2 and ECS
- Unified visibility across VM and container environments

### IAM Policy Autopilot

- Open source MCP server
- Analyzes code to generate valid IAM policies

## 13. Storage & Networking

### Amazon FSx for NetApp ONTAP

- S3 integration for seamless data access
- Access file system data through S3

### Amazon Route 53 Global Resolver (Preview)

- Unified service resolving public and private domains globally
- Secure, anycast-based resolution

## 14. AWS AI Factories

Deploy fully managed AWS AI infrastructure in your data centers:
- Pre-integrated foundation models
- Specialized hardware
- AWS services on-premises

## 15. Management & Monitoring

### Amazon CloudWatch

- Unified data management and analytics
- Operations, security, compliance
- Native OCSF and Apache Iceberg format support

### AWS Support Plans

- AI-powered insights with expert guidance
- Faster response times
- Proactive monitoring (performance, security, cost)

## 16. AWS Clean Rooms

Privacy-enhancing synthetic dataset generation:
- ML model training datasets
- Preserve statistical patterns
- Protect individual privacy
- Configurable noise levels
- Protection against re-identification

## Links

- [Top announcements of AWS re:Invent 2025 | AWS News Blog](https://aws.amazon.com/blogs/aws/top-announcements-of-aws-reinvent-2025/)
- [AWS Transform](https://aws.amazon.com/transform/)
- [Navigating the future: Solutions architecture in the age of AI (YouTube)](https://www.youtube.com/watch?v=DAh1JHOe56w)
- [AWS re:Invent 2024 Announcements](cloud/aws/intro.md#aws-reinvent-2024-highlights)