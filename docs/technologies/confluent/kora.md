# Kora

[Kora: The Cloud Native Engine for Apache Kafka](https://www.confluent.io/blog/cloud-native-data-streaming-kafka-engine/)

Kora is a cloud data service that serves up the Kafka protocol for our thousands of customers and their tens of thousands of clusters.

## Why we built this

When we launched [Confluent Cloud](https://www.confluent.io/confluent-cloud/tryfree/) in 2017, we had a grand vision for what it would mean to offer [Kafka](https://docs.confluent.io/kafka/introduction.html) in the cloud. But despite the work we put into it, our early Kafka offering was far from that—it was just open-source Kafka on a Kubernetes-based control plane with simplistic billing, observability, and operational controls. It was the best Kafka offering of its day, but still far from what we envisioned.

We quickly realized that to build the service we imagined it wouldn’t be enough to just put Kafka on servers in [AWS](https://www.confluent.io/partner/amazon-web-services/). The systems that have succeeded in fulfilling the promise of the cloud are very different beasts. **S3 isn’t anything like running a dedicated NFS server per customer**, and [Snowflake](https://www.confluent.io/hub/snowflakeinc/snowflake-kafka-connector) isn’t just a bunch of Teradata warehouses on EC2. These systems are completely different in how they are architected, how they operate, and the experience they deliver to customers.

Kora was engineered to do the following:

1. Be multi-tenant first, supporting thousands of tenants with strong isolation
2. Run across more than 85 regions in three clouds
3. Be operated at scale by a small on-call team (we estimate we are about 1000x more efficient at operations than the average Kafka team)
4. Disaggregate individual components within the network, compute, metadata, and storage layer
5. Intelligently manage data locality between memory, SSDs, and object storage to maximize throughput while minimizing cost and latency
6. Improve performance by deeply optimizing for the cloud environment and unique workloads of a streaming system in the cloud
7. Capture real-time usage to automatically optimize data placement, fault detection and recovery, and other aspects of operations
8. Optimize the cost structure of large-scale usage

## Benefits

- **Elasticity**: Enables [30x faster](https://www.confluent.io/blog/10x-apache-kafka-elasticity/) scale up and down
- **Reliability**: More than [10x higher availability](https://www.confluent.io/blog/making-apache-kafka-10x-more-reliable/) when compared to the fault rate of our self-managed customers or other cloud services, allowing us to provide a 99.99% uptime SLA
- **Performance**: Significantly lower latency than self-managed Kafka on similar hardware (see performance results [below](https://www.confluent.io/blog/cloud-native-data-streaming-kafka-engine/#performance))
- **Cost**: An optimized cost structure that saves customers money, as discussed in the [Confluent Cost Savings Challenge](https://www.confluent.io/blog/understanding-and-optimizing-your-kafka-costs-part-4-savings-challenge/)
- **Compatibility**: Kora implements [Kafka’s protocol](https://www.confluent.io/online-talks/everything-you-always-wanted-to-know-about-kafkas-rebalance-protocol-but-were-afraid-to-ask-on-demand/) and it is fully compatible

[Kora Powers the Cloud-Native Apache Kafka® Solution \| Confluent Cloud](https://www.confluent.io/confluent-cloud/kora/)
