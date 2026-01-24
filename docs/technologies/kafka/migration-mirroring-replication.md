# Migration / Mirroring / Replication

[**20240425-EB-Migrating\_From\_Kafka\_To\_Confluent.pdf**](https://assets.confluent.io/m/2745775bbd1fa224/original/20240425-EB-Migrating_From_Kafka_To_Confluent.pdf)

## Cross-Cluster Data Mirroring

- Multicluster architecture
    - Hub-and-Spokes architecture
    - Active-Active architecture
    - Active-standby architecture
    - Stretch clusters
- MirrorMaker1 and MirrorMaker2
- Other cross-cluster mirroring solutions
    - Uber uReplicator
    - Confluent's Replicator - [Replicator Overview | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/index.html)
    - Multi-Region Clusters
    - Cluster Linking

## MirrorMaker 2.0

MirrorMaker, is simple a Kafka consumer and producer, linked together with a queue. Can aggregate messages from two local clusters into an aggregate cluster, and then copying that cluster to other datacenters.

### Architecture components

To successfully understand how MirrorMaker 2 works, one needs to keep in mind that MirrorMaker 2 is built on top of Kafka Connect. Kafka Connect is a framework within Apache Kafka that eases the integration of Kafka with other systems. Indeed, it allows developers to stream data to Kafka from various external sources and vice versa (i.e., from Kafka to external systems). Kafka Connect operates in a scalable and fault-tolerant manner using connector plugins. MirrorMaker 2 relies on three key Kafka Connectors to perform data and offset replications. These special connectors are as follows:

- **Source Connector** is responsible for replicating the data between Kafka clusters.
- **Checkpoint Connector** is responsible for consumer groups offsets translation.
- **Heartbeat Connector** enables the monitoring of the health of a MirrorMaker 2 instance.

[Demystifying Kafka MirrorMaker 2: Use cases and architecture | Red Hat Developer](https://developers.redhat.com/articles/2023/11/13/demystifying-kafka-mirrormaker-2-use-cases-and-architecture#architecture_design_scenarios)

### Highlights of the Mirror Maker 2.0

- Leverages the Kafka Connect framework and ecosystem.
- Includes both source and sink connectors.
- Includes a high-level driver that manages connectors in a dedicated cluster.
- Detects new topics, partitions.
- Automatically syncs topic configuration between clusters.
- Manages downstream topic ACL.
- Supports "active/active" cluster pairs, as well as any number of active clusters.
- Supports cross-datacenter replication, aggregation, and other complex topologies.
- Provides metrics including end-to-end replication latency across multiple data centers/clusters
- **Emits offsets required to migrate consumers between clusters.**
- Tooling for offset translation.
- No data or partition rebalancing, guarantees ordering within partition

### MirrorMaker 2 Limitations

- MirrorMaker 2 does not expose replication lag or throughput metrics
- Automatically sync offset, but need to create a system for offset translation
- Limited documentation for monitoring, tuning, and securing your MirrorMaker 2 Configuration
- Failover logic is application-specific and can be time-consuming to set up and maintain
- Changes to MirrorMaker 2 must be made on the properties file and requires the restart of the connect cluster
- Scaling requires significant overhead
    - Requires 4 connectors and 3 internal topics
    - Each destination cluster needs a MirrorMaker 2 connector configured

### Offset Mapping

MM2 uses 2 internal topics to track the mapping of source and target offsets as well as the mapping between the source consumer_offsets to the target offset. The offset_sync topic at the target cluster maps the source topic, partition and offset with the corresponding offset at the target. MM2 gets the target offset from the RecordMetadata returned by `producer.send()`.

For consumers relying on the `__consumer_offsets` topic to track progress, MM2 maps the consumer offsets in a separate log compacted `__checkpoint` topic per source cluster. MM2 periodically queries the source cluster for all committed offsets from all consumer groups, filters for those topics and consumer groups that need to be replicated and emits a message to the internal checkpoints topic at the target cluster. These checkpoint records are emitted at a configurable interval that can be dynamically controlled.

Using the checkpoint topic, a consumer, on failover, can directly determine (using the MM2 utilities) the target offset corresponding to the source committed offset that it needs to start consuming from.

#### Offset Translation

The offset translation is great feature to serve the foundation of migrating or failing over downstream consumers (including Kafka stream applications) from the primary to the backup cluster, as the consumers will use the translated offsets to resume the consumption from where they left off at the primary cluster, without losing messages or consuming many duplicate messages. This expectation essentially contributes to a smooth and transparent one-time migration of consumers from one to another cluster, or the failover of consumers from primary to backup cluster.

To achieve the above transition, there are two important steps: (1) consumer offsets can be translated into the ones that make sense in another cluster, which is already done by the current MM 2.0. (2) periodically synchronize the translated offsets to the  `___consumer_offsets_` topic, so that when the consumers switch over to the other cluster, they can start off from the last known and translated offsets.

[KIP-545: support automated consumer offset sync across clusters in MM 2.0 - Apache Kafka - Apache Software Foundation](https://cwiki.apache.org/confluence/display/KAFKA/KIP-545%3A+support+automated+consumer+offset+sync+across+clusters+in+MM+2.0)

### Links

- [Apache Kafka Mirrormaker Configs Documentation](https://kafka.apache.org/documentation/#mirrormakerconfigs)
- [Kafka Replication: The case for MirrorMaker 2.0 - Cloudera Blog](https://blog.cloudera.com/kafka-replication-the-case-for-mirrormaker-2-0/)
- [A look inside Kafka Mirrormaker 2 - Cloudera Blog](https://blog.cloudera.com/a-look-inside-kafka-mirrormaker-2/)
- [Kafka migration from on-prem to Confluent | by SADA | The SADA Engineering Blog](https://engineering.sada.com/kafka-migration-from-on-prem-to-confluent-1bd03c3689f3)
- [Use Confluent for Kubernetes to configure Kafka Replicator | Confluent Documentation](https://docs.confluent.io/operator/current/co-configure-replicator.html)
- [Replicator Overview | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/index.html)
- [MirrorMaker 2: Replicate Data Between Multicloud Kafka Clusters | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=epfif3Vnd0s)
- [Migrating Kafka with Mirror Maker 2 and Kafka Connect: A Step-by-Step Guide | by Mayank Patel | Medium](https://medium.com/@maxy_ermayank/migrating-kafka-with-mirror-maker-2-and-kafka-connect-a-step-by-step-guide-c43e1b91555a)
- [KIP-545: support automated consumer offset sync across clusters in MM 2.0 - Apache Kafka - Apache Software Foundation](https://cwiki.apache.org/confluence/display/KAFKA/KIP-545%3A+support+automated+consumer+offset+sync+across+clusters+in+MM+2.0)
- [Disaster Recovery with MirrorMaker 2.0 - Confluent](https://www.confluent.io/kafka-summit-lon19/disaster-recovery-with-mirrormaker-2-0/)
- [How to setup MirrorMaker 2.0 on Apache Kafka multi-cluster environment | by Mauro Roiter | LARUS | Medium](https://medium.com/larus-team/how-to-setup-mirrormaker-2-0-on-apache-kafka-multi-cluster-environment-87712d7997a4)
- [How to migrate Kafka clusters without downtime | The Write Ahead Log](https://platformatory.io/blog/How-to-migrate-kafka-clusters-without-downtime/)
- [Setting up Mirror Maker](https://www.instaclustr.com/support/documentation/kafka/kafka-cluster-operations/setting-up-mirror-maker/)
- [Demystifying Kafka MirrorMaker 2: Use cases and architecture | Red Hat Developer](https://developers.redhat.com/articles/2023/11/13/demystifying-kafka-mirrormaker-2-use-cases-and-architecture#)

## Comparisons

### Confluent Replicator vs MirrorMaker 2.0

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

### Tools

#### [GitHub - confluentinc/kafka-metrics-extractor](https://github.com/confluentinc/kafka-metrics-extractor)

`kafka-metrics-extractor` is a tool designed to pull raw usage from Kafka providers such as MSK, OSK and others (currently supports MSK clusters only). The script for extracting MSK usage, it uses MSK permissions to list and describe the clusters only and then collects the usage data from CloudWatch and CostExplorer in order to avoid any cluster disruption.

#### [GitHub - confluentinc/kcp](https://github.com/confluentinc/kcp) (Kafka Copy Paste)

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

## Cluster Linking

Cluster Linking allows you to directly connect clusters and perfectly mirror topics, consumer offsets, and ACLs from one cluster to another.

Cluster Linking on Confluent Cloud is a fully-managed service for replicating data from one Confluent cluster to another. Programmatically, it creates perfect copies of your topics and keeps data in sync across clusters. Cluster Linking is a powerful geo-replication technology for:

- **Multi-cloud and global architectures** powered by real-time data in motion
- **Data sharing** between different teams, lines of business, or organizations
- **High Availability (HA)/Disaster Recovery (DR)** during an outage of a cloud provider’s region
- **Data and workload migration** from a Apache Kafka® cluster to Confluent Cloud or Confluent Platform cluster to Confluent Cloud
- **Protect Tier 1, customer-facing applications and workloads from disruption** by creating a read-replica cluster for lower-priority applications and workloads
- **Hybrid cloud architectures** that supply real-time data to applications across on-premises datacenters and the cloud
- Syncing data between production environments and staging or development environments

```bash
confluent kafka link create tokyo-sydney
  --source-bootstrap-server pkc-abc.ap-south-1.aws.confluent.cloud:9092
  --source-cluster lkc-42492
  --source-api-key AP1K3Y
  --source-api-secret ********

confluent kafka mirror create clickstream.tokyo
   --link tokyo-sydney
```

### Bidirectional mode

Cluster Linking bidirectional mode (a bidirectional cluster link) enables better Disaster Recovery and active/active architectures, with data and metadata flowing bidirectionally between two or more clusters.

- By default, a cluster link is a one-way bridge: topics go from a source cluster to a destination cluster, with data and metadata always flowing from source to destination.
- In contrast, a bidirectional cluster link is a two-way bridge: topics on either side can go to the other cluster, with data and metadata flowing in both directions.

#### Consumer-last migrations

Bidirectional cluster links are useful for certain types of migrations, where consumers are migrated after producers.

- In most migrations from an old cluster to a new cluster, a default cluster link suffices because consumers are migrated before or at the same time as producers.
- If there are straggling consumers on the old cluster, a bidirectional cluster link can help by ensuring their consumer offsets flow to the new cluster and are available when these consumers need to migrate. A default cluster link does not do this.

### Restrictions and limitations

To use bidirectional mode for Cluster Linking, both clusters must be one of these types:

- [Dedicated or Enterprise cluster on Confluent Cloud](https://docs.confluent.io/cloud/current/clusters/cluster-types.html)
- [Confluent Platform 7.5 or later](https://docs.confluent.io/platform/current/installation/versions-interoperability.html)

Bidirectional mode is not supported if either of the clusters is a Basic or Standard Confluent Cloud cluster, a version of Confluent Platform 7.4 or earlier, or open source Apache Kafka®.

Consumer group prefixing cannot be enabled for bidirectional links. Setting `consumer.group.prefix.enable` to `true` on a bidirectional cluster link will result in an “invalid configuration” error stating that the cluster link cannot be validated due to this limitation.

### Links

- [Learn about Confluent Cluster Linking | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=D8VeBdDg7xI&ab_channel=Confluent)
- [Hands-on Course - Introduction to Hybrid and Multicloud Architecture](https://developer.confluent.io/courses/hybrid-cloud/intro/)
- [Overview of Cluster Linking Confluent Platform | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/cluster-linking/index.html)
- [Cluster Linking on Confluent Cloud for data sharing across multi-region clusters | Confluent Documentation](https://docs.confluent.io/cloud/current/multi-cloud/cluster-linking/index.html)
- [Managing and Configuring Cluster Links on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/multi-cloud/cluster-linking/cluster-links-cc.html)

## Confluent Replicator

[15 Things You Should Know About Replicator](https://www.confluent.io/blog/15-facts-about-confluent-replicator-and-multi-cluster-kafka-deployment/)

1. Replicator enables hybrid cloud architectures
2. Replicator supports out-of-the-box configuration with Confluent Control Center
3. Confluent Control Center enables Replicator monitoring
4. Replicator can migrate schemas between Confluent Schema Registry clusters
5. Replicator supports Role-Based Access Control (RBAC)
6. Replicator helps applications recover after a disaster
7. Replicator can aggregate messages from multiple clusters
8. Replicator supports topic renaming during replication
9. Replicator prevents cyclic replication
10. Replicator can run as an executable
11. Replicator can start from any position within the source partitions
12. Replicator supports complex topic replication requirements
13. Replicator synchronizes topic configuration
14. Replicator supports Single Message Transforms (SMTs) - This feature was deprecated as of CP 7.5
15. Replicator verification tool

### Provenance Headers

**Confluent Replicator uses provenance headers to avoid cyclic message replication.** When provenance headers are enabled (`provenance.header.enable=true`), Replicator adds a header to each replicated message that records the origin cluster, topic, and timestamp. This allows Replicator to detect if a message has already been replicated to a cluster, and thus prevents it from being replicated again, which would otherwise cause cycles or infinite loops in active-active (bi-directional) replication setups

#### How it works

- **Provenance headers** are added to every message Replicator copies, containing:
    - The origin cluster ID
    - The original topic name
    - The timestamp when Replicator first copied the record
- Replicator checks these headers before replicating a message. If the destination cluster and topic match the origin in the header, the message is skipped, thus preventing cycles.
- This mechanism is especially important in bi-directional or active-active replication, where messages could otherwise endlessly loop between clusters

#### Key configuration

- Enable provenance headers: `provenance.header.enable=true`
- For human-readable headers, set: `header.converter=io.confluent.connect.replicator.util.ByteArrayConverter`
- For bi-directional replication, also set: `offset.start=consumer` and `offset.topic.commit=true` to ensure correct offset management when messages are skipped due to provenance headers

## Scaling

[Is there anyway to activate auto scaling or some form of auto scaling with Strimzi? · strimzi · Discussion #6635 · GitHub](https://github.com/orgs/strimzi/discussions/6635)

Auto-scaling Kafka is complicated. It usually cannot be done just based on some CPU utilization etc.

- If you want to scale consumers, you need to understand their consumer group membership and which topics are they consuming. Because the maximum number of replicas is for example limited with number of partitions from which they are consuming. You need to use tools such as for example [KEDA](https://keda.sh/) to autoscale them which have some additional logic to take these things into account.
- If you want to auto-scale components such as Connect, Connectors, Bridge etc., Strimzi gives you the `scale` subresources to plug it into Kubernetes HPA and tools like KEDA. These are basically consumers and producers in a special packaging. So the same rules as described above apply for them.
- For Kafka brokers, auto-scaling is complicated because of their architecture. Adding or removing brokers is simple. But directing some load to them is complicated because they are in a way form of data storage. And moving the whole partitions between brokers is expensive. The partitions often contain huge amounts of data which need to be shifted from one broker to another - that will take time, it will have a performance penalty on the other traffic and possibly cost even real money for the data transfers. Plus it still might not work because if your bottleneck is for example a topic with 5 partitions, it might not matter whether you have 5 or 10 brokers. So from my experience, only rarely autoscaling of Kafka brokers makes sense.

## Others

- [Install \| Lenses Docs](https://docs.lenses.io/latest/k2k/install)
