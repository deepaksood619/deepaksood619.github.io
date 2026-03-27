# Migration / Mirroring / Replication

[**20240425-EB-Migrating\_From\_Kafka\_To\_Confluent.pdf**](https://assets.confluent.io/m/2745775bbd1fa224/original/20240425-EB-Migrating_From_Kafka_To_Confluent.pdf)

## Cross-Cluster Data Mirroring

- Multicluster architecture
    - Hub-and-Spokes architecture
    - Active-Active architecture
    - Active-standby architecture
    - Stretch clusters
- MirrorMaker1 and MirrorMaker2
	- [mirrormaker](technologies/kafka/mirrormaker.md)
- Other cross-cluster mirroring solutions
    - Uber uReplicator
    - [replicator](technologies/confluent/replicator.md)
    - Multi-Region Clusters
    - [Cluster Linking](technologies/confluent/cluster-linking.md)

## Comparisons

### Confluent Replicator vs MirrorMaker 2.0

| Feature                         | MirrorMaker 2.0 (MM2)                                                            | Confluent Replicator                                                                 |
| ------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Core Engine**                 | Kafka Connect (Source / Checkpoint / Heartbeat connectors)                       | Kafka Connect (proprietary optimized engine)                                         |
| **Offset Management**           | Maps offsets via **checkpoint** topics; requires client-side logic to translate. | Automatic Offset Translation; consumers can switch clusters without manual mapping.  |
| **Topic Sync**                  | Syncs data and some metadata; requires manual tuning for complex configs.        | Dynamic Topic Sync; automatically mirrors partitions, ACLs, and retention policies.  |
| **Loop Prevention**             | Uses topic renaming (e.g., source.topic) or internal heartbeats.                 | Uses Provenance Headers; allows for active-active without changing topic names.      |
| **Cost**                        | Open Source (Apache 2.0)                                                         | Commercial (Requires Confluent Enterprise License)                                   |
| **Consumer Group Migration**    | Only syncs offsets for the group; doesn't manage group state well.               | Automated Group Failover; syncs both offsets and group metadata.                     |
| **Schema Registry Integration** | Requires manual setup of Schema Linking or separate sync.                        | Built-in Schema Validation & automatic schema migration between registries.          |
| **Active-Active Topic Naming**  | Topic Renaming Required: Topics must be prefixed (e.g., A.topic1, B.topic1).     | Identical Topic Names: Uses Provenance Headers to keep names identical across sites. |
| **Security (ACLs)**             | Does not natively sync ACLs; requires external automation.                       | Native ACL Synchronization: Syncs access rights along with the data.                 |
| **Resource Efficiency**         | Higher overhead; runs as a collection of multiple connectors.                    | High-Efficiency Engine: Single process optimized for low-latency batching.           |
| **Header Manipulation**         | Basic support for header copying.                                                | Advanced Header Handling: Preserves or modifies metadata for routing logic.          |

#### Architectural Differences

**MirrorMaker 2.0**

MM2 is built as a set of three Kafka Connectors. It relies on a "remote topic" naming convention (e.g., us-east.orders) to prevent circular loops. While powerful, it often requires additional "RemoteClusterUtils" code in your applications to find the correct offset when failing over.

**Confluent Replicator**

Replicator is designed to make the destination cluster look exactly like the source. It preserves original topic names, making it easier for applications to switch clusters during a DR event. It is particularly superior in its ability to handle consumer group migration automatically.

#### Data Routing & Loop Prevention (Active-Active)

In a global setup where Cluster A and Cluster B both produce and consume data, preventing "infinite loops" (where A replicates to B, then B replicates that same data back to A) is critical.

**MirrorMaker 2.0**

It uses a renaming strategy. Data from Cluster A is written to A.orders on Cluster B. Because the name is different, MM2 knows not to pull A.orders back to Cluster A. However, this forces applications to be "cluster-aware" and consume from multiple topics.

**Confluent Replicator**

It uses Provenance Headers. A small piece of metadata is attached to the message identifying its origin. Replicator checks this header and simply ignores any message that originated from the target cluster. This allows for identical topic names across the globe, making client configuration much simpler.

#### Exactly-Once Semantics (EOS)

**MirrorMaker 2.0**

Supports "at-least-once" delivery by default. Achieving exactly-once requires specific Connect configurations and can be complex to tune.

**Confluent Replicator**

Specifically optimized to work with Kafka’s transactional API, ensuring that even if a replication task fails and restarts, the data is not duplicated on the destination cluster.

#### Links

- [apache kafka - Mirrormaker2.0 vs confluent replicator - Stack Overflow](https://stackoverflow.com/questions/60211903/mirrormaker2-0-vs-confluent-replicator)
- [Migrate from Apache Kafka MirrorMaker to Confluent Replicator | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/migrate-replicator.html)
- [Confluent Replicator vs MirrorMaker2.0 (open source) for multi-data center data Replication](https://www.linkedin.com/pulse/confluent-replicator-vs-mirrormaker20-open-source-center-ishan-gandhi/)

### Multi-Region Clusters vs Confluent Replicator

Confluent offers two approaches to multi-datacenter replication: [Multi-Region Clusters](https://docs.confluent.io/current/multi-dc-deployments/multi-region.html) and [Confluent Replicator](https://docs.confluent.io/current/connect/kafka-connect-replicator/index.html). The main difference between these two approaches is that a Multi-Region Cluster is a single cluster spanning multiple datacenters, whereas Replicator operates on two separate clusters. Multi-Region Clusters are built into Confluent Server, so they can greatly simplify setup and management of replication flows, particularly in failover/failback scenarios. For a Multi-Region Cluster to operate reliably, the datacenters must be physically close to each other, with a stable, low-latency, and high-bandwidth connection.

Ultimately, the best approach to use depends on your individual use cases and resilience requirements. For more information about using Multi-Region Clusters with Confluent Server, see David Arthur’s excellent post [Multi-Region Clusters with Confluent Platform 5.4](https://www.confluent.io/blog/multi-region-data-replication). Confluent provides a proven, feature-rich solution for multi-cluster scenarios with Confluent Replicator, a Kafka Connect connector that provides a high-performance and resilient way to copy topic data between clusters. You can deploy Replicator into existing Connect clusters, launch it as a standalone process, or deploy it on Kubernetes using Confluent Operator.

### Confluent Replicator vs Cluster Linking

The most important difference: **Cluster Linking is a broker-level, real-time, byte-for-byte replication** solution that is simpler and more efficient for supported scenarios, while **Confluent Replicator is a Kafka Connect-based tool** offering more flexibility, compatibility, and transformation options.

#### Key Differences

| Feature/Aspect               | Cluster Linking                                | Confluent Replicator                          |
| ---------------------------- | ---------------------------------------------- | --------------------------------------------- |
| Mechanism                    | Broker-level, native Kafka protocol            | Kafka Connect source connector                |
| Setup                        | No Connect cluster needed; built into brokers  | Requires Kafka Connect cluster                |
| Data Fidelity                | Byte-for-byte, globally consistent offsets     | Topic-level, may not preserve all metadata    |
| Latency                      | Extremely low, near real-time                  | Higher, depends on Connect and network        |
| Topic Access                 | Mirror topics are read-only during replication | Full read/write access on destination topics  |
| Schema Replication           | No (use Schema Linking separately)             | Yes, can migrate schemas                      |
| Consumer Offsets             | Preserved, globally consistent                 | Can replicate, but not always exact           |
| Transformations              | Not supported                                  | Supports filtering, renaming, transformations |
| Source Compatibility         | Confluent Platform 6.0+ only                   | Any Kafka (self-managed, MSK, etc.)           |
| Use with Private Networking  | Limited                                        | Supported (can run in same VPC)               |
| Managed Service Availability | Yes (Confluent Cloud)                          | No (must self-manage Connect)                 |
| Active-Active Support        | Yes (with caveats on ordering)                 | Yes (bi-directional setup)                    |
| ACL/Config Replication       | Yes (Cloud-to-Cloud only, not CP/MSK)          | No                                            |
| Monitoring                   | Basic (metrics API)                            | Advanced (via Connect/Control Center)         |

#### Limitations and Considerations

- Cluster Linking does not support all message formats (e.g., v0/v1), and will fail for those topics. Replicator can be used in such cases.
- Replicator does not copy ACLs or RBAC settings.
- Schema replication with Cluster Linking requires Schema Linking as a separate step.
- Replicator may replicate aborted transactions unless configured with `isolation.level=read_committed`, but even then, transactional markers are not preserved.
- Cluster Linking is generally easier to manage and monitor, but Replicator offers more advanced monitoring and transformation options.

## Migration

- **[How to Migrate Kafka Cluster with Zero Downtime | by Dheeraj Kulakarni | MiQ Tech and Analytics | Medium](https://medium.com/miq-tech-and-analytics/how-to-migrate-kafka-cluster-with-zero-downtime-38653dfe9a76)**
- [Migrate Applications from Kafka On-Premise to Confluent Cloud](https://blogit.michelin.io/migrate-your-applications-from-kafka-onprem-to-a-manage-service/)
- [Migration Tool and Tips of Kafka cross-cluster replication: MirrorMaker | by Ning.Zhang | Towards Data Science](https://towardsdatascience.com/migration-tool-and-tips-of-kafka-cross-cluster-replication-mirrormaker-7e0157eecf19)
- [Migrate Your Kafka Cluster with Minimal Downtime - YouTube](https://www.youtube.com/watch?v=oqRiagSnYfQ)
- [MirrorMaker 2: Replicate Data Between Multicloud Kafka Clusters | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=epfif3Vnd0s&ab_channel=Confluent)
- [Replicate Data Between Multicloud Kafka Clusters with Confluent | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=cZatGgveaLg&ab_channel=Confluent)
- [Apache Kafka Migration: How to Migrate to Apache Kafka by Rafe Colburn (Etsy) - YouTube](https://www.youtube.com/watch?v=Q0eH9xhZUjg&ab_channel=DataCouncil)
- [AWS re:Invent 2020: Guide to Apache Kafka replication and migration with Amazon MSK - YouTube](https://www.youtube.com/watch?v=CmcJb9Ge3jI&ab_channel=AWSEvents)

### [GitHub - confluentinc/kafka-metrics-extractor](https://github.com/confluentinc/kafka-metrics-extractor) ⭐ 6

`kafka-metrics-extractor` is a tool designed to pull raw usage from Kafka providers such as MSK, OSK and others (currently supports MSK clusters only). The script for extracting MSK usage, it uses MSK permissions to list and describe the clusters only and then collects the usage data from CloudWatch and CostExplorer in order to avoid any cluster disruption.

### [GitHub - confluentinc/kcp](https://github.com/confluentinc/kcp) ⭐ 25 (Kafka Copy Paste)

- Simplify and streamline your Kafka migration journey to Confluent Cloud!
- kcp helps you migrate your Kafka setups to Confluent Cloud by providing tools to:
	- **Scan** and identify resources in existing Kafka deployments.
	- **Create** reports for migration planning and cost analysis.
	- **Generate** migration assets and infrastructure configurations.

```bash
kcp discover --region ap-south-1

kcp scan clusters --state-file state.json --credentials-file credentials.yaml

kcp create-asset migration-infrastructure
```

- [Demo: Migrate to Confluent Cloud with Kafka Copy Paste (KCP) - YouTube](https://www.youtube.com/watch?v=9EflgaCNzhE)

#### Zero-cut Migrations

With **Zero-cut Migrations**, clients make one change: update the bootstrap URL to point at the gateway. That's done in advance, no urgency. When the operator is ready to cut over, could be days later, could be weeks, they run one command. KCP fences traffic, waits for lag to hit zero, promotes the topics, flips routing to Confluent Cloud, and resumes traffic. Clients resume on CC. Operator is in full control the whole time: pick a single topic, a group of topics, or the whole cluster.

- Fully orchestrated cutover: gateway fencing, mirror topic promotion, traffic routing flip, all automated
- Real-time lag and offset monitoring so you pick the right window before and during the migration
- Auth swap built in: unauthenticated clusters can migrate to Confluent cloud with minimal client changes
- Works for any Kafka cluster migration that is Kafka compatible
- Single bootstrap URL change for clients. That's the entire ask for clients.
  
One gap: IAM is not supported by CC gateway at the moment.

## Scaling

[Is there anyway to activate auto scaling or some form of auto scaling with Strimzi? · strimzi · Discussion #6635 · GitHub](https://github.com/orgs/strimzi/discussions/6635)

Auto-scaling Kafka is complicated. It usually cannot be done just based on some CPU utilization etc.

- If you want to scale consumers, you need to understand their consumer group membership and which topics are they consuming. Because the maximum number of replicas is for example limited with number of partitions from which they are consuming. You need to use tools such as for example [KEDA](https://keda.sh/) to autoscale them which have some additional logic to take these things into account.
- If you want to auto-scale components such as Connect, Connectors, Bridge etc., Strimzi gives you the `scale` subresources to plug it into Kubernetes HPA and tools like KEDA. These are basically consumers and producers in a special packaging. So the same rules as described above apply for them.
- For Kafka brokers, auto-scaling is complicated because of their architecture. Adding or removing brokers is simple. But directing some load to them is complicated because they are in a way form of data storage. And moving the whole partitions between brokers is expensive. The partitions often contain huge amounts of data which need to be shifted from one broker to another - that will take time, it will have a performance penalty on the other traffic and possibly cost even real money for the data transfers. Plus it still might not work because if your bottleneck is for example a topic with 5 partitions, it might not matter whether you have 5 or 10 brokers. So from my experience, only rarely autoscaling of Kafka brokers makes sense.

## Others

- [Install \| Lenses Docs](https://docs.lenses.io/latest/k2k/install)
- [Migrating away from Confluent Kafka – real-world experience with Redpanda / Pulsar / others? : apachekafka](https://old.reddit.com/r/apachekafka/comments/1qmvzyl/migrating_away_from_confluent_kafka_realworld/)

## Links

- [mirrormaker](technologies/kafka/mirrormaker.md)
- [cluster-linking](technologies/confluent/cluster-linking.md)
- [replicator](technologies/confluent/replicator.md)
