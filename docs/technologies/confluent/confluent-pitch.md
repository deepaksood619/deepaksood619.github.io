# Confluent Pitch

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

## Offerings & Pricing

[Confluent’s Offerings \| Apache Kafka 101 (2025 Edition) - YouTube](https://www.youtube.com/watch?v=Nz9OmfQeM-Q)

[Confluent Pricing–Save on Kafka Costs \| Confluent](https://www.confluent.io/confluent-cloud/pricing/)

### FAQs

#### What are Elastic CKUs (eCKUs) and why are they important?

Elastic Confluent Units for Kafka (eCKUs) are a unit of horizontal scalability in Confluent Cloud. eCKUs autoscale up to meet spikes in demand and back down based on workload with no user intervention required, and you only pay for the resources you use when you actually need them. Never worry about cluster sizing and provisioning or overpaying for resources again. Autoscaling eCKUs provide a truly serverless experience to save you time and money, enabling you to focus on innovation and business logic while simultaneously lowering costs.

### How is my monthly bill calculated?

Confluent monthly bills are based upon resource consumption, i.e., you are only charged for the resources you use when you actually use them:

- **Stream:** Kafka clusters are billed for [eCKUs](https://docs.confluent.io/cloud/current/billing/overview.html#elastic-confluent-unit-for-kafka)/[CKUs](https://docs.confluent.io/cloud/current/billing/overview.html#confluent-unit-for-kafka) (`$/hour`), networking (`$/GB`), and storage (`$/GB-hour`).
- **Connect:** Use of connectors is billed based on throughput (`$/GB`), and a task base price (`$/task/hour`).
- **Process:** Use of stream processing with Confluent Cloud for Apache Flink is calculated based on [CFUs](https://docs.confluent.io/cloud/current/flink/operate-and-deploy/flink-billing.html#flink-sql-cfus) (`$/minute`).
- **Govern:** Use of Stream Governance is billed based on environment (`$/hour`).

Confluent storage and throughput is calculated in binary gigabytes (GB), where 1 GB is 2^30 bytes. This unit of measurement is also known as a gibibyte (GiB). Please also note that all prices are stated in United States Dollars unless specifically stated otherwise.

All billing computations are conducted in Coordinated Universal Time (UTC).
