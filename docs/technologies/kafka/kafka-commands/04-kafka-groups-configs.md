# Kafka Group Configs

This module focuses on the administrative side of Kafka: managing consumer group offsets, broker/topic configurations, and cluster-wide security and maintenance.

### Consumer Group Management

- `kafka-consumer-groups --list` Displays all active and inactive consumer groups recognized by the cluster.
- `kafka-consumer-groups --describe` Shows detailed state, including which members are assigned to which partitions and their current "lag" (how far behind the producer they are).
- `kafka-consumer-groups --reset-offsets` Allows manual intervention to move a group's position backward (to replay data) or forward (to skip data).
- `kafka-consumer-groups --delete` Removes a consumer group's metadata from the cluster.
- `kafka-consumer-groups --delete-offsets` Specifically removes offset data for a particular topic within a group.

### Configuration & Entity Management

- `kafka-configs --describe` Lists the current dynamic configurations for brokers, topics, users, or clients.
- `kafka-configs --alter` Dynamically updates configurations (like `retention.ms` or `max.message.bytes`) without requiring a broker restart.
- `kafka-features` Used in modern Kafka versions to manage and inspect upgradeable feature flags within the cluster.
- `kafka-storage` Essential for KRaft mode; used to format storage directories and manage cluster IDs.

### Cluster Maintenance & Security

- `kafka-acls` The primary tool for managing Access Control Lists to secure topics and groups.
- `kafka-leader-election` Manually triggers leader elections for partitions to ensure optimal distribution.
- `kafka-rebalance-cluster` A Confluent-specific tool to automate the movement of replicas for even load distribution.
- `kafka-log-dirs` Queries the status and size of log directories across all brokers to monitor disk usage.

### Administrative Example: Checking Lag

As a DevOps engineer, this is your most frequent command for troubleshooting slow data processing:

```bash
kafka-consumer-groups --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 --command-config target.properties --describe --all-groups

kafka-consumer-groups \
  --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 \
  --command-config target.properties \
  --group consumer_group \
  --describe

# reset offsets, delete topic from a consumer group
kafka-consumer-groups \
  --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 \
  --command-config target.properties \
  --group consumer_group \
  --topic orders \
  --delete-offsets

# Identify if a specific consumer group is falling behind
kafka-consumer-groups --bootstrap-server <bootstrap_url> \
  --command-config target.properties \
  --group analytics_engine_v1 \
  --describe

## Kafka Configs
## Describe a topic
kafka-configs --bootstrap-server ke-cp-kafka-headless:9092 --entity-type brokers --entity-default --describe
kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name smap_telemetry_data --describe

## Add config
kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name smap_telemetry_data --alter --add-config retention.ms=604800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name druid_telemetry_data --alter --add-config retention.ms=172800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name test_smap_telemetry_data --alter --add-config retention.ms=172800000

kafka-configs --zookeeper ke-cp-zookeeper-headless:2181 --entity-type topics --entity-name dev_druid_telemetry_data --alter --add-config retention.ms=172800000

```
