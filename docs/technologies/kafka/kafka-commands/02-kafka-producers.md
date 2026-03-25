# Kafka Producers

This module details the tools used to send data into Kafka topics, ranging from basic console inputs to serialized data formats and performance testing.

## Core Producer Commands

- `kafka-console-producer` Starts a standard CLI-based producer to send text data to a specific topic.
- `kafka-producer-perf-test` Measures producer throughput and latency by generating a high volume of synthetic messages.
- `kafka-verifiable-producer` A tool used for testing cluster reliability by producing a stream of messages and verifying their delivery.

## Serialized & Schema-Based Producers (Confluent-Specific)

- `kafka-avro-console-producer` Sends data to Kafka using the Avro serialization format, integrated with the Schema Registry.
- `kafka-json-schema-console-producer` Produces messages validated against a JSON schema to ensure data consistency.
- `kafka-protobuf-console-producer` Produces messages using Google Protocol Buffers (Protobuf) for efficient, structured data streaming.

## Advanced Ingestion & Management

- `kafka-mirror-maker` A utility for replicating data between two Kafka clusters (typically for cross-region disaster recovery).
- `kafka-rest-start` / `kafka-rest-stop` Manages the Kafka REST Proxy, allowing producers to send data over HTTP/HTTPS rather than the native protocol.
- `kafka-transactions` A tool to inspect and manage transactional state for producers using "exactly-once" semantics.

## Buffer Memory in kafka-console-producer

The Kafka producer has a built-in memory buffer. If the broker goes down, the producer will hold the messages in its local RAM and keep retrying until the broker is back or a timeout is reached.

### How the Buffering Works

When you use the `kafka-console-producer`, it relies on two main configurations to handle a broker restart:

1. **`buffer.memory`**: This is the total bytes of memory the producer can use to buffer messages waiting to be sent (default is 32MB). If the broker is down long enough to fill this, the producer will start blocking or throwing errors.

2. **`delivery.timeout.ms`**: This is the "patience" of your producer. By default, it is **2 minutes** (120,000 ms). If the broker stays down longer than this, the producer will give up and the messages in the buffer will be lost.

3. **`retries`**: The producer will automatically attempt to resend failed messages. In modern Kafka versions, this is set to a very high number (effectively infinite) by default, restricted only by the timeout mentioned above.

## Pro-Tip: Producing with Keys

When debugging partition logic, always include the key to ensure messages land in the expected partition.

```bash
# Produce messages with a key/value separator
kafka-console-producer --bootstrap-server localhost:9092 \
  --topic sample_data_orders \
  --property "parse.key=true" \
  --property "key.separator=:"
# Input: order123:{"status":"shipped"}

# producer
kafka-console-producer --bootstrap-server localhost:9092 --topic sample_data_orders --producer.config proxy.properties

# without key, random number
while true; do
  echo "$(date +%Y-%m-%d\ %H:%M:%S), $RANDOM";
  sleep 1;
done | kafka-console-producer --bootstrap-server localhost:9092 --topic your-topic-name

# with key, random number
while true; do
  echo "key1:$(date +%T),$RANDOM";
  sleep 1;
done | kafka-console-producer --bootstrap-server localhost:9092 --topic your-topic-name \
--property "parse.key=true" \
--property "key.separator=:"

# without key, sequential number
i=1; while true; do
  echo "$(date +%Y-%m-%d\ %H:%M:%S), $i";
  ((i++));
  sleep 1;
done | tee /dev/tty | kafka-console-producer --bootstrap-server localhost:9092 --topic your-topic-name --producer.config proxy.properties

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
