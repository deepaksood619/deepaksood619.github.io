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

### Links

- [Kafka Replication: The case for MirrorMaker 2.0 - Cloudera Blog](https://blog.cloudera.com/kafka-replication-the-case-for-mirrormaker-2-0/)
- [A look inside Kafka Mirrormaker 2 - Cloudera Blog](https://blog.cloudera.com/a-look-inside-kafka-mirrormaker-2/)
- [Kafka migration from on-prem to Confluent | by SADA | The SADA Engineering Blog](https://engineering.sada.com/kafka-migration-from-on-prem-to-confluent-1bd03c3689f3)
- [Use Confluent for Kubernetes to configure Kafka Replicator | Confluent Documentation](https://docs.confluent.io/operator/current/co-configure-replicator.html)
- [Replicator Overview | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/index.html)
- [MirrorMaker 2: Replicate Data Between Multicloud Kafka Clusters | Hybrid and Multicloud Architecture - YouTube](https://www.youtube.com/watch?v=epfif3Vnd0s)

## Confluent Replicator vs MirrorMaker 2.0

- [apache kafka - Mirrormaker2.0 vs confluent replicator - Stack Overflow](https://stackoverflow.com/questions/60211903/mirrormaker2-0-vs-confluent-replicator)
- [Migrate from Apache Kafka MirrorMaker to Confluent Replicator | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/migrate-replicator.html)
- [Confluent Replicator vs MirrorMaker2.0 (open source) for multi-data center data Replication](https://www.linkedin.com/pulse/confluent-replicator-vs-mirrormaker20-open-source-center-ishan-gandhi/)

## Migration

[How to Migrate Kafka Cluster with Zero Downtime | by Dheeraj Kulakarni | MiQ Tech and Analytics | Medium](https://medium.com/miq-tech-and-analytics/how-to-migrate-kafka-cluster-with-zero-downtime-38653dfe9a76)

