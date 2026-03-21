# Kafka Producers

This module details the tools used to send data into Kafka topics, ranging from basic console inputs to serialized data formats and performance testing.

### Core Producer Commands

- `kafka-console-producer` Starts a standard CLI-based producer to send text data to a specific topic.
- `kafka-producer-perf-test` Measures producer throughput and latency by generating a high volume of synthetic messages.
- `kafka-verifiable-producer` A tool used for testing cluster reliability by producing a stream of messages and verifying their delivery.

### Serialized & Schema-Based Producers (Confluent-Specific)

- `kafka-avro-console-producer` Sends data to Kafka using the Avro serialization format, integrated with the Schema Registry.
- `kafka-json-schema-console-producer` Produces messages validated against a JSON schema to ensure data consistency.
- `kafka-protobuf-console-producer` Produces messages using Google Protocol Buffers (Protobuf) for efficient, structured data streaming.

### Advanced Ingestion & Management

- `kafka-mirror-maker` A utility for replicating data between two Kafka clusters (typically for cross-region disaster recovery).
- `kafka-rest-start` / `kafka-rest-stop` Manages the Kafka REST Proxy, allowing producers to send data over HTTP/HTTPS rather than the native protocol.
- `kafka-transactions` A tool to inspect and manage transactional state for producers using "exactly-once" semantics.

### Pro-Tip: Producing with Keys

When debugging partition logic, always include the key to ensure messages land in the expected partition.

```bash
# Produce messages with a key/value separator
kafka-console-producer --bootstrap-server localhost:9092 \
  --topic sample_data_orders \
  --property "parse.key=true" \
  --property "key.separator=:"
# Input: order123:{"status":"shipped"}

# producer
kafka-console-producer --bootstrap-server localhost:9092 --topic sample_data_orders

kafka-consumer-perf-test \
  --bootstrap-server 10.0.138.255:9092,10.0.131.122:9092,10.0.139.2:9092 \
  --consumer.config target.properties \
  --topic orders \
  --group deeptest \
  --threads 8 \
  --messages 1000000

time kafka-console-consumer \
  --bootstrap-server 10.0.138.255:9092,10.0.131.122:9092,10.0.139.2:9092 \
  --topic orders \
  --partition 0 \
  --offset 0 \
  --max-messages 1 \
  --timeout-ms 15000 2>/dev/null
```
