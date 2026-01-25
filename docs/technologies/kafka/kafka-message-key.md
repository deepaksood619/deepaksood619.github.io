# Kafka Message Key

Kafka message key is crucial for partitioning, ensuring message order, and distributing load.

A Kafka message key is an attribute that you can assign to a message in a Kafka topic. Each Kafka message consists of two primary components: a **key** and a **value**. While the value is the actual data payload, the key determines which partition the message will go to. Kafka uses the key to generate a hash, which determines the specific partition to which the message will be routed.

Kafka message key plays a crucial role in deciding which partition a specific message will be sent to. Kafka uses the key to apply a hashing function that assigns a message to a partition deterministically.

In cases where no key is provided, Kafka assigns messages to partitions in a round-robin manner. However, when a key is present, Kafka ensures that all messages with the same key are routed to the same partition, preserving message order within that partition.

## When a Key is Present

If the producer specifies a key, Kafka applies a hash function to the key, which results in a numerical value. This hash value is then used to determine which partition the message will be sent to. In simpler terms, Kafka uses the key to ensure that all messages with the same key are sent to the same partition, allowing for grouping of related messages.

For instance, if a Kafka producer sends messages about various users, and it uses the user ID as the key, Kafka will ensure that all messages related to a specific user are routed to the same partition. This ensures that messages for that user are processed in the correct order and kept together.

## When No Key is Provided

If the producer doesn’t provide a key (i.e., the key is set to null), Kafka will assign the message to partitions using a round-robin algorithm. This means that messages will be distributed evenly across partitions without considering any logical grouping. This approach maximizes throughput but does not maintain order or consistency across related messages.

Imagine a Kafka topic with three partitions: Partition 0, Partition 1, and Partition 2. When a producer sends messages with different keys (e.g., user1, user2, and user3), Kafka will hash these keys and assign each one to a partition based on the hash result:

- Messages with the key user1 might be assigned to Partition 0.
- Messages with the key user2 might be assigned to Partition 1.
- Messages with the key user3 might be assigned to Partition 2.

Now, every time the producer sends a message with the key user1, it will always go to Partition 0. This consistency in partitioning ensures that messages related to user1 are kept together and processed in the correct order within the same partition.

## Use Cases for Kafka Message Key

- Log Aggregation
- Order Processing
- Sensor Data Streaming
- User Activity Tracking
- Ensuring Order in Financial Transactions

## Best Practices and Partitioning Strategies

- Consistent Keys
- Hash-based Partitioning
- Custom Partitioning
- Monitor Partition Size
- When to Use a Message Key - If your application does not require consuming messages in the same order as they were produced, it may be best not to specify a key. This approach allows Kafka to use its default message distribution method, which can **enhance throughput** and balance the load across partitions.
- Considerations for Message Order

## Best Practices in Confluent for Message Keys

To optimize your Kafka deployment in Confluent, consider the following best practices for message keys:

- **Key Selection:** Always select a key that aligns with your use case. For instance, use user ID or transaction ID for financial transactions to ensure message order.
- **Even Distribution:** Avoid choosing keys that may result in uneven partitioning. For instance, if 90% of your users are in a single geographic region, avoid using that region as a key, as it could lead to partition imbalances and overload specific consumers.
- **Composite Keys:** When handling complex multi-dimensional data (e.g., multi-tenant systems with varying data types), consider using composite keys to maintain flexibility in processing and aggregation.

Whether you’re working with ordered data, and managing multi-tenant systems, using message keys effectively can ensure that your Kafka-based architecture is robust, scalable, and performant.

[Kafka Message Key: A Comprehensive Guide](https://www.confluent.io/learn/kafka-message-key/#what-is-a-kafka-message-key)

## Kafka Message Headers

Kafka message headers are **key-value pairs of metadata attached to a message**, separate from the main message key and payload. Introduced in Apache Kafka version 0.11.0.0, they provide context for message processing, routing, and tracing without needing to deserialize the main data.

| Concept                | Description                                                                                                                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kafka headers          | Key-value pairs that you add to Kafka messages outside of the payload.                                                                                                                          |
| Header value data type | Kafka header values are stored as byte arrays (`byte[]`)                                                                                                                                        |
| Serialization          | The process of converting other data types to the header data type.                                                                                                                             |
| Deserialization        | The process of converting the header data type back to its original data format.                                                                                                                |
| Use cases              | Message routing, Metadata storage, Tracing and logging, Custom processing, Security and authentication, Priority and routing, Interoperability, Stream processing |

[Kafka Headers—Use cases, best practices, and alternatives](https://www.redpanda.com/guides/kafka-cloud-kafka-headers)

## Kafka Message Size

Apache Kafka key’s default maximum message size is 1 MB, a limit designed to help brokers manage memory effectively. While Kafka can process larger batches if there’s sufficient disk space, this often reduces throughput and is generally seen as inefficient—very large messages are considered an anti-pattern in Kafka. Although you can increase this message size limit by adjusting default settings, many recommend against it to preserve platform stability.

Confluent Cloud, a managed Kafka service, has specific message size limits to support various use cases without extensive configurations. The default limit in Confluent Cloud is typically up to 2 MB per message for all types of clusters. The maximum size for basic and standard clusters is 8MB and for enterprise-level clusters, the maximum size is 20MB. For clients managing large messages in Confluent Cloud, adjusting application logic, partition strategies, and potential compression are recommended to optimize usage.

### Kafka Configuration Parameters for Message Size

Kafka provides several configuration parameters that influence message size limits at both the broker and producer levels. Here’s a look at the key parameters:

#### Broker-Level Parameters

- **message.max.bytes**: Sets the maximum size for a message that can be accepted by the broker. The default is 1 MB.
- **replica.fetch.max.bytes**: Controls the maximum size of a message that a broker replica can fetch. This setting should be at least as large as message.max.bytes to prevent issues during replication.
- **max.message.bytes** (Confluent Cloud): This is the message size limit set in Confluent Cloud, typically up to 10 MB.

#### Producer-Level Parameters

- **max.request.size**: Defines the largest message size a producer can send. Setting this appropriately prevents producers from encountering message rejection errors when sending large messages.
- **buffer.memory**: Controls the total amount of memory available to a producer, indirectly impacting how large messages are handled.

#### Consumer-Level Parameters

- **fetch.max.bytes**: Determines the maximum size of data a consumer can fetch in a single request. It’s useful for consumers expecting large messages.
- **max.partition.fetch.bytes**: This parameter sets the maximum size of data that can be fetched per partition, which can prevent issues when consuming large messages.

### How Kafka Handles Large Messages

By default, Kafka is designed to handle small to moderate message sizes. When messages exceed the default limit of 1 MB, Kafka will reject them unless configurations are modified.

- **Compression**: Kafka supports compression methods (e.g., gzip, snappy, lz4) that can reduce message sizes, allowing larger payloads to fit within set limits.
- **Batched Messages**: Kafka producers can send multiple small messages in a batch to optimize for throughput rather than increasing individual message sizes.
- **Error Handling**: If a message exceeds configured limits, Kafka will log an error, and the producer can be configured to retry or skip problematic messages.

### Increasing Kafka’s Message Size Limit

Increasing Kafka’s message size limit involves modifying both the producer and broker configuration parameters to accept larger messages. Here’s a step-by-step guide:

1. **Adjust Broker Settings**: Update message.max.bytes to a value greater than the default 1 MB. This should reflect the largest message size anticipated in your Kafka cluster. Ensure replica.fetch.max.bytes is equal to or larger than message.max.bytes to allow brokers to replicate larger messages.
2. **Configure Producer Settings:** Set max.request.size to a size larger than the anticipated message payload. This allows producers to send larger messages without rejection.
3. **Update Consumer Settings:** Adjust fetch.max.bytes and max.partition.fetch.bytes on the consumer side to handle larger messages during data consumption.
4. **Restart Kafka Services:** After updating configuration parameters, restart the Kafka brokers, producers, and consumers for changes to take effect

### Metrics

- **RecordsPerRequestAvg:** Tracks average records per request, indicating if large messages are creating bottlenecks.
- **RequestSizeAvg and RequestSizeMax:** Monitor request sizes to ensure they remain within acceptable ranges.
- **FetchSizeAvg and FetchSizeMax:** Measure consumer fetch sizes to identify potential issues when consuming large messages.

[Apache Kafka Message Size Limit: Best Practices & Config Guide](https://www.confluent.io/learn/kafka-message-size-limit/)
