# Kafka Consumers

This module covers the tools used to read data from Kafka, ranging from simple console output to complex, schema-aware stream consumption.

### Core Consumer Commands

- `kafka-console-consumer` - Reads and displays messages from a topic in real-time.
- `kafka-consumer-perf-test` - Tests the consumption throughput of a cluster by reading a large volume of messages and reporting performance metrics.
- `kafka-verifiable-consumer` - A specialized tool used to verify that a consumer group is receiving all messages without duplicates or gaps.
- `kafka-get-offsets` - Retrieves the beginning, end, or specific timestamp-based offsets for a given topic-partition.

### Advanced Consumer Tools

- `kafka-mirror-maker` - Acts as a consumer on a source cluster to replicate data to a target cluster.
- `kafka-streams-application-reset` - Resets a Kafka Streams application by deleting its intermediate topics and resetting offsets.
- `control-center-console-consumer` - A specialized consumer used internally by Confluent Control Center to monitor stream health.

### Standard Usage Example

To debug a consumer group and see exactly which partitions are being read, use the following formatting properties:

```bash
kafka-console-consumer \
  --bootstrap-server <bootstrap_url> \
  --topic orders \
  --group my-debug-group \
  --property print.key=true \
  --property print.partition=true \
  --property print.offset=true \
  --from-beginning

# consumer
kafka-console-consumer --bootstrap-server localhost:9092 --consumer.config config.properties --topic sample_data_orders --property "print.key=true"

kafka-console-consumer --bootstrap-server localhost:9092 --topic sample_data_orders --group my-consumer-group --from-beginning

kafka-console-consumer --bootstrap-server localhost:9092 --topic sample_data_orders --from-beginning

kafka-console-consumer \
  --bootstrap-server lkc-abc.ap-northeast-2.aws.accesspoint.glb.confluent.cloud:9092 \
  --topic orders \
  --group consumer_group \
  --consumer.config target.properties \
  --property print.key=true \
  --property print.offset=true \
  --property print.partition=true \
  --max-messages 10
```
