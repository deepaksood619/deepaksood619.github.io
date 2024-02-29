# Migration / Mirroring

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

## MirrorMaker 2.0

MirrorMaker, is simple a Kafka consumer and producer, linked together with a queue. Can aggregate messages from two local clusters into an aggregate cluster, and then copying that cluster to other datacenters.

### Architecture components

To successfully understand how MirrorMaker 2 works, one needs to keep in mind that MirrorMaker 2 is built on top of Kafka Connect. Kafka Connect is a framework within Apache Kafka that eases the integration of Kafka with other systems. Indeed, it allows developers to stream data to Kafka from various external sources and vice versa (i.e., from Kafka to external systems). Kafka Connect operates in a scalable and fault-tolerant manner using connector plugins. MirrorMaker 2 relies on three key Kafka Connectors to perform data and offset replications. These special connectors are as follows:

- **Source Connector** is responsible for replicating the data between Kafka clusters.
- **Checkpoint Connector** is responsible for consumer groups offsets translation.
- **Heartbeat Connector** enables the monitoring of the health of a MirrorMaker 2 instance.

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

The offset translation is great feature to serve the foundation of migrating or failing over downstream consumers (including Kafka stream applications) from the primary to the backup cluster, as the consumers will use the translated offsets to resume the consumption from where they left off at the primary cluster, without losing messages or consuming many duplicate messages. This expectation essentially contributes to a smooth and transparent one-time migration of consumers from one to another cluster, or the failover of consumers from primary to backup cluster.

To achieve the above transition, there are two important steps: (1) consumer offsets can be translated into the ones that make sense in another cluster, which is already done by the current MM 2.0. (2) periodically synchronize the translated offsets to the  `___consumer_offsets_` topic, so that when the consumers switch over to the other cluster, they can start off from the last known and translated offsets.

[KIP-545: support automated consumer offset sync across clusters in MM 2.0 - Apache Kafka - Apache Software Foundation](https://cwiki.apache.org/confluence/display/KAFKA/KIP-545%3A+support+automated+consumer+offset+sync+across+clusters+in+MM+2.0)

### Links

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

## Confluent Replicator vs MirrorMaker 2.0

- [apache kafka - Mirrormaker2.0 vs confluent replicator - Stack Overflow](https://stackoverflow.com/questions/60211903/mirrormaker2-0-vs-confluent-replicator)
- [Migrate from Apache Kafka MirrorMaker to Confluent Replicator | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/migrate-replicator.html)
- [Confluent Replicator vs MirrorMaker2.0 (open source) for multi-data center data Replication](https://www.linkedin.com/pulse/confluent-replicator-vs-mirrormaker20-open-source-center-ishan-gandhi/)

## Migration

- **[How to Migrate Kafka Cluster with Zero Downtime | by Dheeraj Kulakarni | MiQ Tech and Analytics | Medium](https://medium.com/miq-tech-and-analytics/how-to-migrate-kafka-cluster-with-zero-downtime-38653dfe9a76)**
- [Migrate Applications from Kafka On-Premise to Confluent Cloud](https://blogit.michelin.io/migrate-your-applications-from-kafka-onprem-to-a-manage-service/)
- [Migration Tool and Tips of Kafka cross-cluster replication: MirrorMaker | by Ning.Zhang | Towards Data Science](https://towardsdatascience.com/migration-tool-and-tips-of-kafka-cross-cluster-replication-mirrormaker-7e0157eecf19)
- [Migrate Your Kafka Cluster with Minimal Downtime - YouTube](https://www.youtube.com/watch?v=oqRiagSnYfQ)
- [MirrorMaker 2: Replicate Data Between Multicloud Kafka Clusters | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=epfif3Vnd0s&ab_channel=Confluent)
- [Replicate Data Between Multicloud Kafka Clusters with Confluent | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=cZatGgveaLg&ab_channel=Confluent)
- [Learn about Confluent Cluster Linking | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=D8VeBdDg7xI&ab_channel=Confluent)
- [Apache Kafka Migration: How to Migrate to Apache Kafka by Rafe Colburn (Etsy) - YouTube](https://www.youtube.com/watch?v=Q0eH9xhZUjg&ab_channel=DataCouncil)
- [AWS re:Invent 2020: Guide to Apache Kafka replication and migration with Amazon MSK - YouTube](https://www.youtube.com/watch?v=CmcJb9Ge3jI&ab_channel=AWSEvents)
