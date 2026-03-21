# Kakfa Topics

This module covers the lifecycle of Kafka topics, including creation, inspection, and modification.

### Topic Management Commands

- `kafka-topics --create` Used to initialize a new topic with specific partitions and replication factors.
- `kafka-topics --list` Displays all existing topics within the cluster for a given bootstrap server or Zookeeper.
- `kafka-topics --describe` Provides detailed metadata for a topic, including partition count, leader location, and ISR status.
- `kafka-topics --alter` Updates topic-level configurations or increases the number of partitions.
- `kafka-topics --delete` Marks a topic for deletion (requires `delete.topic.enable=true` on the broker).
- `kafka-topics --version` Displays the current version of the Kafka topics CLI tool.

### Specialized Topic Tools (from Confluent/Advanced)

- `kafka-add-brokers` Assists in expanding the cluster by introducing new broker IDs to the metadata.
- `kafka-reassign-partitions` Used to move partitions between brokers to balance the cluster load.
- `kafka-replica-verification` Validates that replicas across different brokers are in sync and consistent.
- `kafka-preferred-replica-election` Manually triggers an election to ensure the preferred leader is active for each partition.
- `kafka-delete-records` Deletes older messages in a topic up to a specific offset.

### Standard Usage Example

```bash
# Create a topic with 30 partitions for high throughput
kafka-topics --bootstrap-server <bootstrap_url> --command-config target.properties --create --topic dev.orders --partitions 30 --replication-factor 3

# topics
kafka-topics --bootstrap-server localhost:9092 --topic sample_data_orders --create --partitions 3

kafka-topics.sh --bootstrap-server localhost:9092 --topic <topic-name> --alter --partitions <number>

kafka-topics --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 --command-config server.properties --list

# describe topic
kafka-topics --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 --command-config target.properties --topic dev.orders --describe

# create topic
kafka-topics \
 --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 \
 --command-config target.properties \
 --create --topic dev.orders \
 --partitions 30 --replication-factor 3
 
# increase / alter partitions
kafka-topics \
  --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 \
  --command-config target.properties \
  --topic dev.orders --alter --partitions 30
```

### Docker Commands

```bash
## Create topic
docker run
--net=example-docker
--rm confluentinc/cp-kafka:5.1.0
kafka-topics --create --topic smap_telemetry_data --partitions 3 --replication-factor 1 --config retention.ms=-1
--if-not-exists --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

## Alter topic
docker run
--net=example-docker
--rm confluentinc/cp-kafka:5.1.0
kafka-topics --alter --topic smap_telemetry_data --partitions 3 -config retention.ms=-1 --zookeeper zookeeper1:2181,zookeeper2:2181,zookeeper3:2181

docker run
--net=example-docker
--rm confluentinc/cp-kafka:5.1.0
kafka-topics --alter --topic iot_data --config retention.ms=-1 --zookeeper zookeeper1:2181,zookeeper2:2181,zookeeper3:2181

## Delete topic
# Topic is marked for deletion and if kafka is configured with KAFKA_DELETE_TOPIC_ENABLE:"true" then it is deleted

docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0

kafka-topics --delete --topic _schemas --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

## Show all Topics
docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-topics --describe --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-topics --describe --topic smap_telemetry_data --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183

docker run
--net=example-docker
--rm
confluentinc/cp-kafka:5.1.0
kafka-topics --describe --topic smap_telemetry_data --zookeeper zookeeper1:2181,zookeeper2:2182,zookeeper3:2183
```