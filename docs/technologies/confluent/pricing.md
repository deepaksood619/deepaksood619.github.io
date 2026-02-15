# Pricing

[Confluent’s Offerings \| Apache Kafka 101 (2025 Edition) - YouTube](https://www.youtube.com/watch?v=Nz9OmfQeM-Q)

![Confluent's Offerings](../../media/Screenshot%202025-12-18%20at%206.50.07%20PM.png)

![Confluent Cloud Clusters](../../media/Screenshot%202025-12-18%20at%206.50.43%20PM.png)

## Pricing

### Confluent Cloud

- Basic - Starting at $0/Month
- Standard - Starting at ~$385/Month
- Enterprise - Starting at ~$895/Month
- Freight - Starting at ~$2,300/Month
- Dedicated - Custom Pricing

[Confluent Pricing–Save on Kafka Costs \| Confluent](https://www.confluent.io/confluent-cloud/pricing/)

[Estimate Confluent Cloud Costs with Our Calculator](https://www.confluent.io/pricing/cost-estimator/)

### Connectors

| Category                                                                                        | Task                                                                                         | Data Transfer |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------- |
| Standard                                                                                        | [$0.017 - $0.30/hour](https://www.confluent.io/?modal=volume_pricing_section&pillar=connect) | $0.025/GB     |
| Standard (CDC V2)                                                                               | [Contact us](https://www.confluent.io/contact/)                                              | $0.025/GB     |
| Premium                                                                                         | [Contact us](https://www.confluent.io/contact/)                                              | $0.025/GB     |
| [Custom](https://docs.confluent.io/cloud/current/connectors/bring-your-connector/overview.html) | [$0.10 - $0.20/hour](https://www.confluent.io/?modal=volume_pricing_section&pillar=connect)  | $0.025/GB     |

## FAQs

### What are Elastic CKUs (eCKUs) and why are they important?

**Elastic Confluent Units for Kafka (eCKUs)** are a unit of horizontal scalability in Confluent Cloud. eCKUs autoscale up to meet spikes in demand and back down based on workload with no user intervention required, and you only pay for the resources you use when you actually need them. Never worry about cluster sizing and provisioning or overpaying for resources again. Autoscaling eCKUs provide a truly serverless experience to save you time and money, enabling you to focus on innovation and business logic while simultaneously lowering costs.

### How is my monthly bill calculated?

Confluent monthly bills are based upon resource consumption, i.e., you are only charged for the resources you use when you actually use them:

- **Stream:** Kafka clusters are billed for [eCKUs](https://docs.confluent.io/cloud/current/billing/overview.html#elastic-confluent-unit-for-kafka)/[CKUs](https://docs.confluent.io/cloud/current/billing/overview.html#confluent-unit-for-kafka) (`$/hour`), networking (`$/GB`), and storage (`$/GB-hour`).
- **Connect:** Use of connectors is billed based on throughput (`$/GB`), and a task base price (`$/task/hour`).
- **Process:** Use of stream processing with Confluent Cloud for Apache Flink is calculated based on [CFUs](https://docs.confluent.io/cloud/current/flink/operate-and-deploy/flink-billing.html#flink-sql-cfus) (`$/minute`).
- **Govern:** Use of Stream Governance is billed based on environment (`$/hour`).

Confluent storage and throughput is calculated in binary gigabytes (GB), where 1 GB is 2^30 bytes. This unit of measurement is also known as a gibibyte (GiB). Please also note that all prices are stated in United States Dollars unless specifically stated otherwise.

All billing computations are conducted in Coordinated Universal Time (UTC).

## Capacity Planning

[Capacity Planning Your Apache Kafka Cluster](https://developer.confluent.io/learn-more/podcasts/capacity-planning-your-apache-kafka-cluster/?)

## Links

- [Manage Billing in Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/billing/overview.html)
