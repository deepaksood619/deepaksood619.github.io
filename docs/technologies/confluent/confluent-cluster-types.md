# Confluent Cluster types

Confluent Cloud offers these Kafka cluster types:

- **Basic clusters -** Used for experimentation, early development and basic use cases.
- **Standard clusters -** Used for production-ready features and functionality.
- **Enterprise clusters -** Used for production-ready functionality that requires private networking capabilities.
- **Dedicated clusters -** Used for critical production workloads with high traffic or private networking requirements.
- **Freight clusters -** Used for high-throughput, relaxed latency workloads that are less expensive than self-managed open source Kafka.

## Cluster provisioning and scaling

Confluent uses billing units to provision and scale clusters.

### Elastic scaling

Basic, Standard, Enterprise, and Freight clusters are elastic, shrinking and expanding automatically based on load. You don’t resize these clusters (unlike Dedicated clusters). When you need more capacity, your cluster expands up to the fixed ceiling. If you’re not using capacity above the minimum, you’re not paying for it. If you’re at zero capacity, you don’t pay for anything. For more information, see [Elastic Confluent Unit for Kafka](https://docs.confluent.io/cloud/current/billing/overview.html#e-cku-definition) and [eCKU/CKU comparison](https://docs.confluent.io/cloud/current/clusters/cluster-types.html?_ga=2.105087683.1569428443.1713164733-1694025920.1701714516&_gl=1*1twk7ik*_ga*MTY5NDAyNTkyMC4xNzAxNzE0NTE2*_ga_D2D3EGKSGD*MTcxMzQ1NTkzMC4yNDQuMS4xNzEzNDYxMjI0LjU3LjAuMA..#e-cku-details).

### Freight clusters scaling considerations

Freight clusters are elastic, scaling automatically based on load, so you only pay for the eCKUs you use. However, Freight clusters may not scale as quickly as other eCKU clusters. In general, Freight clusters can support an additional 4 eCKU of capacity (240 MBps of ingress / 720 MBps of egress) every 10 minutes. If you workload grows faster than this, you may experience higher latency or failed requests. As your workload decreases, you pay for your actual eCKU usage.

In scenarios where you expect a large, rapid increase in traffic, consider contacting your account team to get Confluent to work with you to meet your request.

### Fast scaling for Enterprise clusters

All Enterprise clusters support fast scaling up to 10 eCKUs, which is similar to how elastic scaling has worked in the past. Beyond 10 eCKUs, Enterprise clusters support _on-demand_ scaling, which may be limited to a growth rate of approximately 20 minutes per eCKU.

#### Considerations:

- To provision Enterprise clusters with a maximum of 32 eCKU on AWS, your cluster networking must use Private Network Interface (PNI).
- Enterprise clusters that use PrivateLink networking on AWS are limited to a maximum of 10 eCKU.
- If you have workloads that require fast scaling beyond 10 eCKU or workloads larger than 32 eCKU, reach out to Confluent to request to have your cluster enabled.

### Manual scaling

Dedicated clusters are provisioned and billed in terms of Confluent Unit for Kafka (CKU). CKUs are a unit of horizontal scalability in Confluent Cloud that provide a preallocated amount of resources. How much you can ingest and stream per CKU depends on a variety of factors including client application design and partitioning strategy. For more information, see [Monitor Dedicated Clusters in Confluent Cloud](https://docs.confluent.io/cloud/current/monitoring/cluster-load-metric.html#monitor-dedicated-clusters) and [Dedicated Cluster Performance and Expansion in Confluent Cloud](https://docs.confluent.io/cloud/current/monitoring/monitor-performance.html#cloud-cluster-monitor-performance).

## Features

All clusters have the following features:

- [Kafka ACLs](https://docs.confluent.io/cloud/current/security/access-control/acls/overview.html#acl-manage)
- [Fully-managed replica placement](https://docs.confluent.io/cloud/current/clusters/resilience.html#confluent-cloud-resilience)
- [User interface to manage consumer lag](https://docs.confluent.io/cloud/current/monitoring/monitor-lag.html#cloud-monitoring-lag)
- [Topic management](https://docs.confluent.io/cloud/current/topics/overview.html#cloud-topics-manage)
- [Fully-Managed Connectors](https://docs.confluent.io/cloud/current/connectors/overview.html#kafka-connect-cloud)
- [View and consume Connect logs](https://docs.confluent.io/cloud/current/connectors/logging-cloud-connectors.html#ccloud-connector-logging)
- [Stream Governance](https://docs.confluent.io/cloud/current/stream-governance/index.html#cloud-dg)
- [Stream Catalog](https://docs.confluent.io/cloud/current/stream-governance/stream-catalog.html#cloud-stream-catalog)
- [Stream Lineage](https://docs.confluent.io/cloud/current/stream-governance/stream-lineage.html#cloud-stream-lineage)
- [Encryption-at-rest](https://confluent.safebase.us/?itemUid=ef061e5b-a2f4-469e-92bc-ab973e3d7842&source=title)
- [TLS for data in transit](https://docs.confluent.io/cloud/current/security/encrypt/tls.html#manage-data-in-transit-with-tls)    
- [Role-based Access Control (RBAC)](https://docs.confluent.io/cloud/current/security/access-control/rbac/overview.html#cloud-rbac) (Basic clusters do not support RBAC roles for resources within the Kafka cluster)

## Links

[Kafka Cluster Types in Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/clusters/cluster-types.html)
