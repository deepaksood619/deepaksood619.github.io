---
slug: /about-deepak-sood/projects/27-wso2-case-studies
title: "WSO2 Case Studies: Fintech Solutions"
description: Explore how a mid-sized digital bank improved fraud detection and transaction processing with WSO2's event-driven architecture.
created: 2026-04-28
updated: 2026-04-28
---
## Case Study 1: Fintech - Real-Time Fraud Detection & Transaction Routing

**The Challenge:** A mid-sized digital bank was struggling with high latency in their fraud detection system. Their existing architecture used synchronous REST calls, meaning the customer’s payment would "hang" while several security checks were performed. If any one check failed or timed out, the entire transaction failed.

**The Solution:** We implemented an **Event-Driven Architecture (EDA)** using WSO2 Micro Integrator as the central orchestrator and Kafka as the high-speed message backbone.

- **The Flow:** When a user initiates a payment, the **WSO2 Integrator** receives the request and immediately publishes a "Transaction Initiated" event to a **Kafka Topic**.
- **Parallel Processing:** Multiple downstream microservices (Fraud Score, AML Check, and Limit Validation) consume this event simultaneously from Kafka.
- **Asynchronous Response:** Instead of waiting, the WSO2 Integrator moves the transaction to a "Pending" state and responds to the mobile app instantly. Once the security services publish their "Clearance" events back to a response topic in Kafka, WSO2 consumes them and updates the final transaction status.

**Business Outcome:**

- **Reduced Latency:** Average transaction processing time dropped by **65%**.
- **Resiliency:** If the Fraud service goes down, the message stays safely in Kafka; WSO2 retries the connection automatically once the service is back online, preventing data loss.

## Case Study 2: Insurance - Automated "Straight-Through" Claims Processing

**The Challenge:** A large insurance provider had a "fragmented" claims process. When a customer submitted a car accident claim, data had to be pulled from legacy mainframes, external vehicle valuation APIs, and police record databases. This manual orchestration took days.

**The Solution:** We utilized **WSO2 Micro Integrator** to wrap the legacy systems and used **Kafka** to manage the "Claims Lifecycle" events.

- **The Flow:** A new claim submission triggers WSO2 to gather initial data. WSO2 then pushes a "Claim Scrubbed" event into a **Kafka Cluster**.
- **Automated Validation:** A "Rules Engine" (Siddhi) listens to the Kafka topic. If the claim meets certain criteria (e.g., damage < $2,000 and clear police report), it publishes an "Auto-Approved" event.
- **Legacy Integration:** The WSO2 Integrator consumes the "Auto-Approved" event and performs the complex task of writing that data back into the company’s 20-year-old COBOL-based mainframe via an IBM MQ connector.

**Business Outcome:**

- **Operational Efficiency:** Achieved **40% Straight-Through Processing (STP)**, meaning 4 out of 10 claims were settled in minutes without human intervention.
- **Customer Satisfaction:** Customers received payout notifications via the mobile app (triggered by WSO2 via Kafka) almost immediately after uploading their accident photos.

## Why our WSO2 experience mattered

In both cases, we didn't just "plug things in." We leveraged WSO2’s specific strengths:

1. **Fault Tolerance:** We configured **Dead Letter Channels (DLC)** in WSO2 so that if Kafka was unreachable, the transactions were stored locally and re-tried, ensuring 100% data integrity.
2. **Security:** We secured the Kafka-WSO2 connection using **SSL/SASL** and integrated it with **WSO2 Identity Server** for role-based access to the integration dashboards.
3. **Observability:** We set up the **WSO2 MI Dashboard** so the clients' IT teams could see exactly where a message was sitting in the Kafka queue in real-time.
