---
slug: /about-deepak-sood/projects/26-wso2-real-time-fraud-detection
title: WSO2 Real-Time Fraud Detection
description: Explore a cloud-native architecture utilizing WSO2 for real-time fraud
  detection and efficient transaction routing.
created: '2026-04-28'
last_update: '2026-05-04'
---

# Real-Time Fraud Detection & Transaction Routing

### 1. The Architecture Stack

The deployment was entirely cloud-native, running on a managed Kubernetes service (EKS) to ensure high availability.

- **API Gateway:** WSO2 API Manager (handling OAuth2 token validation, rate limiting).
- **Integration Layer:** WSO2 Micro Integrator (MI) deployed as Docker containers.
- **Event Broker:** Apache Kafka cluster (3 brokers for high availability).
- **Downstream Microservices:** Java Spring Boot applications (Fraud, AML, Limit Check).
- **State Store:** Redis (for fast, temporary transaction state caching) and PostgreSQL (for permanent ledger).

### 2. Kafka Topic Topology

We designed a specific topic structure to handle the asynchronous flow:

- `tx-initiated` (Partitions: 6) – High-throughput topic for incoming payment requests.
- `tx-fraud-results` (Partitions: 3) – Fraud service publishes scores here.
- `tx-aml-results` (Partitions: 3) – AML service publishes clearance here.
- `tx-final-status` (Partitions: 3) – Final aggregated decision topic.

### 3. Step-by-Step Technical Workflow

#### Phase 1: Ingestion and Publishing (WSO2 as Producer)

1. **API Invocation:** The mobile app calls a REST API: `POST /api/v1/payments`. WSO2 API Manager validates the JWT token and routes the request to a WSO2 MI REST API.
2. **Enrichment:** WSO2 MI receives the JSON payload. Using the **Property Mediator**, it generates a unique `Transaction_ID` and a `Correlation_ID` (for distributed tracing across logs).
3. **State Initialization:** WSO2 MI makes a quick asynchronous call to Redis to set the transaction state to `PENDING`.
4. **Publishing to Kafka:**
    - WSO2 MI utilizes the **Kafka Connector**.
    - We configured the connector's `init` operation with `bootstrap.servers` and set `acks="all"` to ensure data was written to all Kafka replicas before WSO2 considered it successful.
    - WSO2 uses the `publishMessages` operation to send the enriched JSON payload to the `tx-initiated` topic.
5. **Immediate Response:** WSO2 immediately returns an `HTTP 202 Accepted` to the mobile app, containing the `Transaction_ID`. (The app uses this ID to poll for status or listen via WebSockets).

#### Phase 2: Parallel Processing (Microservices)

- The Fraud, AML, and Limit Check microservices act as **Consumer Groups** listening to `tx-initiated`.
- Because they belong to different consumer groups, each service gets a copy of the event and processes it simultaneously.
- Upon completion, each service publishes its result (e.g., `{"Transaction_ID": "123", "status": "CLEARED"}`) to its respective result topic (`tx-fraud-results`, etc.).

#### Phase 3: Aggregation and Finalization (WSO2 as Consumer)

1. **Inbound Endpoints:** We configured WSO2 MI with multiple **Kafka Inbound Endpoints** listening to the result topics. These endpoints are configured with `auto.commit.enable="false"` to manually control message acknowledgment and prevent message loss during processing failures.
2. **The Aggregator Pattern:** As messages arrive from the fraud and AML topics, WSO2 injects them into a sequence utilizing the **Aggregate EIP (Enterprise Integration Pattern)**.
    - WSO2 waits until it receives responses from _all_ required services for a specific `Correlation_ID`, or until a timeout is reached.
3. **Routing & Final State:**
    - If all services report `CLEARED`, WSO2 MI uses a **DB Report Mediator** to update PostgreSQL, setting the status to `APPROVED`.
    - WSO2 then publishes a final message to the `tx-final-status` topic, which triggers the actual money movement gateway.

### 4. Handling Failures and Edge Cases (Resiliency)

Building distributed systems requires handling failures gracefully. Here is how we used WSO2 to protect the architecture:

- **Kafka Broker Outage (Store and Forward):** If the Kafka cluster became unreachable, the WSO2 Kafka Connector would throw an error. We wrapped the publish call in a **Fault Sequence**. If a fault occurred, WSO2 routed the payload to an internal **Message Store** (backed by a database). A **Message Processor** continuously polled this store and forwarded the messages to Kafka once the brokers were back online, ensuring zero dropped transactions.
- **Downstream Service Timeout:** If the Fraud service took too long and the WSO2 Aggregator timed out, WSO2 was configured to automatically default the transaction to `SUSPENDED`, update the database, and trigger an alert to the manual review team.
- **Security:** The connection between WSO2 MI and Kafka was secured using **SASL_SSL** authentication. We stored the truststore passwords and Kafka credentials securely in the **WSO2 Secure Vault**, ensuring no hardcoded secrets existed in the integration code (Synapse XML).

### 5. Performance Metrics Achieved

- **Throughput:** Scaled to handle **2,500 TPS** (Transactions Per Second) during peak hours.
- **Latency:** The initial API response time (Phase 1) dropped to **under 50ms**, vastly improving the mobile app's user experience.
