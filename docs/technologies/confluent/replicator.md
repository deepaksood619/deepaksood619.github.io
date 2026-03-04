# Replicator

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

## Provenance Headers

**Confluent Replicator uses provenance headers to avoid cyclic message replication.** When provenance headers are enabled (`provenance.header.enable=true`), Replicator adds a header to each replicated message that records the origin cluster, topic, and timestamp. This allows Replicator to detect if a message has already been replicated to a cluster, and thus prevents it from being replicated again, which would otherwise cause cycles or infinite loops in active-active (bi-directional) replication setups

### How it works

- **Provenance headers** are added to every message Replicator copies, containing:
    - The origin cluster ID
    - The original topic name
    - The timestamp when Replicator first copied the record
- Replicator checks these headers before replicating a message. If the destination cluster and topic match the origin in the header, the message is skipped, thus preventing cycles.
- This mechanism is especially important in bi-directional or active-active replication, where messages could otherwise endlessly loop between clusters

### Key configuration

- Enable provenance headers: `provenance.header.enable=true`
- For human-readable headers, set: `header.converter=io.confluent.connect.replicator.util.ByteArrayConverter`
- For bi-directional replication, also set: `offset.start=consumer` and `offset.topic.commit=true` to ensure correct offset management when messages are skipped due to provenance headers

## Links

- [Replicator Overview | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/index.html)
