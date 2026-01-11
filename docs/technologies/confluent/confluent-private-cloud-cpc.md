# Confluent Private Cloud (CPC)

Confluent Private Cloud is a new deployment model for platform teams in large, regulated organizations or service providers operating Kafka at scale across multiple lines of business, developer teams, or clients.

Confluent Private Cloud is a platform that helps you get more out of your hardware, reduce manual toil, and run Kafka at scale without giving up control. The outcomes are similar to what we’ve achieved in our cloud: **You can reduce your overall Kafka infrastructure and operating costs by up to 50%.**

## What Is Confluent Private Cloud?

Confluent Private Cloud is designed to bring the operational advantages of cloud-native Kafka to your own infrastructure without forcing you to compromise on control or compliance. It’s a complete platform designed to solve the biggest challenges of running a private, multi-tenant service—whether for internal lines of business, self-service developer teams, or end customers.

With Confluent Private Cloud, you can:

- **Accelerate Kafka performance at scale with Intelligent Replication.** Deliver consistent low-latency and high-throughput streaming as your workloads and partition counts grow.
- **Centralize governance, access, and policy enforcement with Confluent Private Cloud Gateway.** Route, secure, and migrate applications without asking developers to update their code.
- **Govern data streams consistently across both on-prem and cloud environments with Unified Stream Manager (USM).** Manage hybrid compliance and troubleshooting from a single interface.

With Confluent Private Cloud, you’re not just wrangling clusters anymore. You’re running Kafka-as-a-service for your whole organization, ready to scale and support multiple application teams and diverse workloads.

## What’s Next for Confluent Private Cloud

Looking ahead, the vision for Confluent Private Cloud is to make running Kafka at scale on your own infrastructure as simple and reliable as it is in the cloud. The goal is to take the heavy lifting out of day-to-day operations so that platform teams can focus on delivering value to their businesses, not building custom tooling or wrestling with manual processes.

The roadmap is focused on deeper automation, smarter scaling, and stronger security. Think true Day 2 operational simplicity, all powered by the cloud-native design principals we’ve perfected in Confluent Cloud.

Here’s what’s on the horizon:

- **Bin Packing for Maximum Efficiency:** Intelligent workload scheduling will automatically place workloads across your Kubernetes infrastructure to maximize resource utilization and efficiency. By packing workloads more effectively, you’ll reduce hardware sprawl, cut down on wasted capacity, and get more out of your existing infrastructure, ultimately lowering your total cost of ownership.
- **Fleet Manager for Day 2 Simplicity:** This serves as a dedicated control plane that will give your team blueprint templates for deploying and managing your entire data streaming platform on Kubernetes. This will abstract away the complexity of configuration, orchestration, and life cycle management, making it easier to operate at scale.
- **Built-in Multi-Tenancy and Resource Isolation:** Features such as Client Quotas and Logical Namespaces will let you safely host hundreds of teams on shared infrastructure without worrying about noisy neighbor issues. Each workload gets the performance and isolation it needs.

The future is about giving your developers a stable, well-governed platform where they can move fast and build with confidence, knowing the heavy lifting of operations, scaling, and security is being handled behind the scenes.

## Getting Started: Deploying Confluent Private Cloud

The architecture for Confluent Private Cloud is based on running on Kubernetes infrastructure. To get started, you’ll need a Confluent Private Cloud subscription. This unlocks access to the software and support you’ll need to operate at scale. For a new deployment, here’s the quickstart path to getting your new DSP-as-a-Service up and running:

- **Begin by setting up your Kubernetes infrastructure.** You’ll need an existing Kubernetes environment as the foundation for your deployment.
- **Deploy the Confluent for Kubernetes (CFK) Operator** using the provided Helm chart on your Kubernetes cluster. The operator streamlines the management and orchestration of Confluent components.
- **With the operator in place, you can use CFK’s custom resources** to deploy your Confluent Private Cloud, Kafka Connect, and Apache Flink® clusters. This approach ensures consistent, automated provisioning and management of your streaming platform components.
- **Set up the Confluent Private Cloud Gateway** in front of your Kafka clusters to centralize client access and policy enforcement and make it easier to manage security and migrations.
- **Finally, point your client applications to the Confluent Private Cloud Gateway endpoint.** This step allows clients to connect without any changes to their code while you maintain full control over routing and access.

Confluent Private Cloud is a premium solution built for central platform teams, managed service providers, and cloud service providers who want to offer a robust data streaming service on their own managed infrastructures. For detailed deployment instructions and best practices, refer to the [product documentation](https://docs.confluent.io/platform/current/private-cloud/overview.html) and reach out to the Confluent team for support.

[Introducing Confluent Private Cloud](https://www.confluent.io/blog/introducing-confluent-private-cloud/)

[Confluent Private Cloud \| Confluent Documentation](https://docs.confluent.io/platform/current/private-cloud/overview.html)

[Confluent Private Cloud \| Confluent](https://www.confluent.io/product/confluent-private-cloud/)

## Confluent Private Cloud Gateway Overview

Confluent Private Cloud Gateway (Confluent Gateway) is a cloud-native Kafka proxy solution designed to simplify client connectivity, secure access, and cluster management across distributed Kafka environments. It provides a stable, protocol-aware entry point for Kafka clients—abstracting away complex broker lists, inconsistent security settings, and the operational overhead of managing direct client-to-cluster connections.

When deployed between clients and Kafka clusters, Confluent Gateway acts as an intelligent routing layer. As a self-managed solution, it gives you full control over deployment, configuration, and operations, while integrating seamlessly with your existing streaming infrastructure.

Confluent Gateway abstracts the complexity of Kafka connectivity, making modern, secure, and highly available Kafka operations possible for enterprise environments.

Confluent Gateway enables the following use cases:

- Future migrations of on-premises clients to Confluent Cloud without client changes.
- On-premises disaster recovery switchover from one unhealthy cluster to another healthy cluster without client changes, achieving a significant reduction in recovery time.
- Secure external partner access for a private cluster.
- Custom domains for your Kafka listeners.
- Blue-green upgrades from an earlier Kafka version to the latest Kafka version.

You deploy Confluent Gateway using Confluent for Kubernetes (CFK).

### High-level architecture

When Kafka client applications connect to the Confluent Gateway using the Kafka protocol, the Confluent Gateway intercepts and routes these protocol messages securely to the appropriate upstream Kafka clusters. The Confluent Gateway rewrites Kafka responses (including metadata and broker addresses) to present only virtualized endpoints to clients, ensuring that cluster changes remain seamless and transparent to applications.

- **Routes:** Confluent Gateway endpoints where client applications connect to stream data.
	- Confluent Gateway uses Routes to create an abstraction layer between client applications and Kafka clusters. These routing abstractions help decouple the client applications and Kafka brokers.
- **Streaming Domains:** Logical representations of your Kafka clusters at the Confluent Gateway

### Supported features

The following features are supported in the current release of Confluent Gateway:

- Virtual bootstrap and broker endpoints for simplified client setup
- Transparent protocol proxying (no client-side changes required)
- Multiple authentication methods, Identity Pass-through, and Authentication Swapping
- Secure credential storage and retrieval
- Metrics, tracing, and simplified troubleshooting
- Compatibility with Kafka protocol versions 3.x and 4.x
- No support for legacy protocol versions, sidecar deployment, or Schema Registry in the current release

[Deploy and Manage Confluent Private Cloud Gateway \| Confluent Documentation](https://docs.confluent.io/private-cloud-gateway/current/overview.html)

[gateway-images/examples at master · confluentinc/gateway-images · GitHub](https://github.com/confluentinc/gateway-images/tree/master/examples)

## Unified Stream Manager in Confluent Platform

Unified Stream Manager (USM) is a hybrid solution designed to integrate your self-managed Confluent Platform cluster deployment with Confluent Cloud. It provides a unified interface within the Confluent Cloud UI, allowing you to monitor, manage, and govern both self-managed (on-premises) and fully-managed cloud clusters from a single location.

USM establishes Confluent Cloud as the authoritative control plane for governance tasks, while your on-premises Confluent Platform continues to serve as the data plane for data processing. This operational model empowers organizations to centralize control without moving actual message data to the cloud.

The primary benefits of USM include the following:

- **Reduce operational overhead**. You can gain a single, unified view of your entire hybrid data streaming landscape. By monitoring the health, performance, and configuration of all your clusters from one place, you can simplify troubleshooting and decreases the management burden.
- **Strengthen data governance**. You can centrally manage and enforce consistent rules across all your on-premises and cloud clusters. This approach establishes a single source of truth for schemas, data quality, and security policies.
- **Accelerate your cloud migration**. You can manage on-premises and cloud clusters as a single system. This unique operational model lets you migrate data streams and applications incrementally, which reduces the complexity and risk of the transition.

## Key capabilities

USM extends Confluent Cloud’s advanced features to your self-managed environment, enabling you to:

- **Unify schema management**. Combines your on-premises and cloud Schema Registries into a single, global registry managed from Confluent Cloud. This establishes a single source of truth for all schemas across your hybrid landscape.
- **Monitor your self-managed clusters**: Observe and monitor your on-premises clusters from a unified view within the Confluent Cloud UI.
- **Discover topics and schemas globally**: Enable developers to search for and discover topics and schemas across both self-managed and cloud infrastructure through a global, searchable data catalog.
- **Visualize your end-to-end data lineage**. Get a complete view of your data’s journey with stream lineage graphs that visualize data flows for topics, connectors, and applications within your connected on-premises clusters.
- **Define comprehensive data contracts**. Enforce data quality by bundling a schema, validation rules, and metadata into a single, enforceable definition called a data contract.
- **Protect sensitive data with field-level encryption**. Centrally manage encryption keys and policies in the Confluent Cloud UI. These policies are automatically enforced on clients connected to your on-premises clusters.
- **Organize data with metadata tagging**. Apply tags and other metadata to resources from the Confluent Cloud UI to improve organization and discoverability across your entire hybrid environment.

[Unified Stream Manager (USM) overview for Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/usm/overview.html)

[Unified Stream Manager GA in Confluent Platform 8.1](https://www.confluent.io/blog/introducing-unified-stream-manager/)
