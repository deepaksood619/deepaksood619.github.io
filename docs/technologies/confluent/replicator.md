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

## Execution modes

### 1. Executable Mode (Standalone CLI)

This is what you used in our session. You run a single binary command (`replicator`) that spins up its own internal Kafka Connect worker.

- **How it works:** It reads your properties files and launches a "hidden" Connect cluster consisting of just one node.
- **Best For:** Quick migrations, development testing, or "Bridge" scenarios where you don't want to manage a full Connect cluster.
- **Default Port:** **8083**. If you have another Connect instance running, this mode will fail to bind to the port.

```bash
replicator --consumer.config source.properties --producer.config target.properties --replication.config replication.properties
```

### 2. Connector Mode (Plugin / Distributed)

In this mode, you treat Replicator as just another connector (like a JDBC or S3 connector) and install it into an **existing** Kafka Connect cluster.

- **How it works:** You download the Replicator JARs/ZIP from Confluent Hub, put them in your Connect `plugin.path`, and restart Connect. You then "submit" a JSON configuration to the Connect REST API.
- **Best For:** Production environments. It allows Replicator to scale across multiple Connect workers and be managed via Control Center.
- **Key Advantage:** High Availability. If one Connect worker dies, another worker in the cluster picks up the replication task.

```bash
curl -X POST -H "Content-Type: application/json" --data @replicator.json http://localhost:8083/connectors
```

### 3. Docker / Container Mode

Confluent provides a specific Docker image for Replicator (`cp-enterprise-replicator`). This is essentially an automated version of **Mode 1**.

- **How it works:** You pass your configurations as Environment Variables or mount them as volumes.
- **Best For:** Kubernetes (k8s) or automated CI/CD pipelines.
- **Configuration Logic:** Environment variables follow a specific naming convention (e.g., `REPLICATOR_BOOTSTRAP_SERVERS`).

### Comparison Matrix

| Feature           | Executable (CLI)       | Connector (Plugin)           | Docker                       |
| ----------------- | ---------------------- | ---------------------------- | ---------------------------- |
| **Ease of Setup** | High (Single command)  | Medium (Needs Connect setup) | High (If using k8s/Compose)  |
| **Scalability**   | Vertical (One process) | Horizontal (Cluster-wide)    | Vertical/Horizontal          |
| **Management**    | Terminal / CLI         | Control Center / REST API    | Container Orchestrator       |
| **Isolation**     | Completely isolated    | Shares Connect resources     | Isolated Container           |
| **Reliability**   | Manual restart needed  | Auto-failover                | Auto-restart by Orchestrator |

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

## Commands

```bash
replicator \
 --consumer.config ./consumer.properties \
 --producer.config ./producer.properties \
 --cluster.id replicator \
 --replication.config ./replication.properties
```

## Configurations

```properties title="replication.properties"
# The topics you want to pull down from the Cloud
topic.whitelist=sample_data_orders_1

# Since local is the destination, we store offsets/configs locally
config.storage.topic=replicator-configs
offset.storage.topic=replicator-offsets
status.storage.topic=replicator-status

# Local clusters usually have replication factor 1
config.storage.replication.factor=1
offset.storage.replication.factor=1
status.storage.replication.factor=1
confluent.license.replication.factor=1

# Enable Replicator to create topics on the destination
topic.auto.create=true

# Ensure Replicator also syncs partition increases if they happen on source
topic.preserve.partitions=true

# Ensure Replicator syncs config changes (like cleanup.policy)
topic.preserve.config=true
```

## Links

- [Replicator Overview | Confluent Documentation](https://docs.confluent.io/platform/current/multi-dc-deployments/replicator/index.html)
