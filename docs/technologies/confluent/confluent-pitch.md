# Confluent Pitch

1. Data at Rest is no longer a complete solution to today's problems.
2. Kafka allows you to use data as it's being created, allowing systems to operate in real time. This is Data in Motion.
3. Confluent is pioneered Data in Motion, using Apache Kafka, Confluent has set the standard for Data in Motion by building a platform which is:
	1. **Cloud Native:** Apache Kafka, fully managed and re-architected to harness the power of the cloud.
	2. **Complete:** Go beyond Kafka with all the essential tools for a complete data streaming platform.
	3. **Everywhere:** Connect your data in real time with a platform that spans from on-prem to cloud and across clouds.

- Data In Motion (DIM)
- Data Streaming Platform (DSP)

## Elevator Pitch - The "Data in Motion" Pitch

- **Audience:** Pre-Buyer Architect
- **Goal:** Shift mindset from database-centric to event-centric.

### 1. The Problem: Why Data at Rest Fails

As architects, we’ve spent decades building systems around 'Data at Rest'—storing data in a database and querying it later. But the world doesn't wait for a query. By the time you run that end-of-day report, the fraud has already happened, the customer has already churned, and the inventory is already wrong. Today's problems require immediate reaction, not retrospective analysis.

### 2. The Solution: How Kafka Sets Data in Motion

Apache Kafka solves this by treating data as a continuous stream of events, not static rows. It acts as a central nervous system for your architecture, decoupling your producers from consumers. This allows you to capture an event once—like a payment or a click—and fan it out in real-time to every microservice, analytics engine, or app that needs it, ensuring consistency and massive scalability without building brittle point-to-point integrations.

### 3. The Confluent Advantage: Why Us?

While Kafka provides the engine, Confluent provides the complete car. We remove the heavy operational burden of managing Zookeepers and brokers so your team can focus on building apps, not infrastructure. We give you the 'complete platform'—including 120+ pre-built connectors to unlock your legacy systems, enterprise-grade security, and ksqlDB/Flink to process streams with simple SQL. We turn raw Kafka into a cloud-native, governance-ready platform that accelerates your time-to-market from months to weeks.

### 4. The "Flip Card" Example: Action & Reaction

- **The Old Way (Data at Rest):** You swipe your credit card. That transaction sits in a database. Tonight, a batch job runs. Tomorrow, the bank realizes the transaction was fraudulent.
    - _The Result:_ You lost money, and the bank lost trust.
- **The Confluent Way (Data in Motion):**
    - **Action:** You swipe your credit card.
    - **Reaction:** That event hits Confluent immediately.
    - **Reaction 1:** The Fraud Service analyzes it against your history in milliseconds and blocks it if suspicious.
    - **Reaction 2:** The Notification Service instantly texts you a confirmation.
    - **Reaction 3:** The Ledger Service updates your balance.

## How does Confluent fit with AI/ML pipelines?

AI models are only as strong as the freshness and quality of their data. Most organizations still rely on batch pipelines, which can make features stale by the time they reach the model.

Confluent enables **real-time feature streaming** into AI/ML systems. For example:

- Streaming **transactional data for fraud detection** in milliseconds.
- Feeding **user activity streams into recommendation models** for personalization.
- Serving **IoT data to predictive maintenance models** without delay.

Confluent integrates with feature stores, data lakes, and warehouses, but it acts as the **real-time backbone** that ensures models are operating on the most current data.

## What do you think about Confluent’s “data in motion” vision?

Traditionally, data has been treated as something you collect, store, and query later — that’s data at rest. Confluent’s vision of ‘data in motion’ shifts this paradigm: data is continuously flowing and can be acted upon immediately.

This approach is becoming critical because businesses don’t just want to _know what happened_ — they want to _react as it happens_. Whether it’s personalizing an app experience in real time or flagging fraudulent transactions instantly, data in motion is what makes those possible.

Confluent’s mission is to make streaming as easy and ubiquitous as traditional databases, and that’s where its long-term impact lies.

## Give me an example of a real-world problem where Confluent delivers clear business value

A classic example is fraud detection in financial services. With a batch system, suspicious activity might be flagged hours later, after the fraud has already occurred.

With Confluent, every transaction stream can be analyzed in real time. Rules or ML models can immediately detect anomalies — like an unusual login location or abnormal transfer pattern — and trigger an action before money is lost.

The business value is obvious: reduced fraud losses, better compliance, and improved customer trust.
