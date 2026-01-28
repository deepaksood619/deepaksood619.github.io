# Kafka Configurations

## Broker Configurations

|**Configuration**|**Description**|
|---|---|
|**`log.retention.hours`**|The number of hours to keep a log file before deleting it (default is 168 hours / 7 days).|
|**`log.retention.bytes`**|The maximum size of the log before messages are deleted (applied per partition).|
|**`default.replication.factor`**|The default number of replicas created for automatically created topics.|
|**`num.partitions`**|The default number of log partitions per topic if not specified at creation.|
|**`min.insync.replicas`**|The minimum number of replicas that must acknowledge a write for it to be considered successful (critical for durability).|
|**`auto.create.topics.enable`**|If true, enables automatic creation of topics when producers write to them (often set to false in production).|
|**`advertised.listeners`**|The hostname and port the broker advertises to clients (producers/consumers) to connect to.|
|**`log.segment.bytes`**|The maximum size of a single log file segment; once reached, a new segment is created.|
|**`unclean.leader.election.enable`**|Indicates whether out-of-sync replicas can become leaders, trading data consistency for availability (default is false).|

## Producer Configurations

| **Configuration**        | **Description**                                                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **`bootstrap.servers`**  | A list of host/port pairs to use for establishing the initial connection to the Kafka cluster.                                            |
| **`acks`**               | Determines how many partition replicas must acknowledge a record before the producer considers the write successful (`0`, `1`, or `all`). |
| **`linger.ms`**          | The time (in milliseconds) the producer waits for more records to arrive to batch them together before sending.                           |
| **`batch.size`**         | The maximum size (in bytes) of a batch of records sent to a partition.                                                                    |
| **`compression.type`**   | The compression algorithm used for batches of data (e.g., `gzip`, `snappy`, `lz4`, `zstd`).                                               |
| **`retries`**            | The number of times the producer will attempt to resend a message if the send fails transiently.                                          |
| **`enable.idempotence`** | Ensures that messages are delivered exactly once to a partition in order, preventing duplicates.                                          |
| **`buffer.memory`**      | The total bytes of memory the producer can use to buffer records waiting to be sent to the server.                                        |
| **`max.request.size`**   | The maximum size of a request in bytes; limits the size of the largest message or batch sent.                                             |
| **`key.serializer`**                        | **(Required)** The class used to convert the key object into bytes (e.g., `StringSerializer`).                       |
| **`value.serializer`**                      | **(Required)** The class used to convert the value object into bytes.                                                |
| **`max.in.flight.requests.per.connection`** | Max unacknowledged requests sent to a single broker; set to `1` for strict ordering (if `enable.idempotence=false`). |
| **`max.block.ms`**                          | How long `producer.send()` blocks when the buffer is full or metadata is unavailable before throwing an exception.   |

## Consumer Configurations

| **Configuration**           | **Description**                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **`group.id`**              | A unique string that identifies the consumer group this consumer belongs to.                                                    |
| **`auto.offset.reset`**     | What to do when there is no initial offset in Kafka or if the current offset does not exist (`earliest` or `latest`).           |
| **`enable.auto.commit`**    | If true, the consumer's offset will be periodically committed in the background.                                                |
| **`max.poll.records`**      | The maximum number of records returned in a single call to `poll()`.                                                            |
| **`session.timeout.ms`**    | The maximum time the broker waits for a heartbeat before considering the consumer dead and rebalancing the group.               |
| **`heartbeat.interval.ms`** | The expected time between heartbeats to the consumer coordinator (must be lower than `session.timeout.ms`).                     |
| **`fetch.min.bytes`**       | The minimum amount of data the server should return for a fetch request (helps reduce request overhead).                        |
| **`isolation.level`**       | Controls how transactional messages are read (`read_committed` skips aborted transactions, `read_uncommitted` sees everything). |

## Common / Client Configurations

These settings apply to **both Producers and Consumers** (and Admin clients) to manage network connections and timeouts.

| **Configuration**          | **Description**                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **`client.id`**            | A logical identifier string passed to the server to track the source of requests in logs and metrics.        |
| **`request.timeout.ms`**   | The maximum time the client waits for a response from the broker before giving up and retrying (or failing). |
| **`receive.buffer.bytes`** | The size of the TCP receive buffer (SO_RCVBUF) to use when reading data.                                     |
| **`send.buffer.bytes`**    | The size of the TCP send buffer (SO_SNDBUF) to use when sending data.                                        |

## Best Practices

[Common Apache Kafka Mistakes to Avoid - YouTube](https://www.youtube.com/watch?v=HkUfzavcLj0)

- It's a problem to use multiple producers in a single service
- The trade off between throughput and latency with batching
- What is linger.ms
- Enable compression
- Define Producer Callbacks
- One consumer per thread in a single service instance
- Trogdor
- Over Committing
- Provide a `ConsumerRebalanceListener`
- Undersized per Kafka Consumer instances

## Links

- [librdkafka/CONFIGURATION.md at master · confluentinc/librdkafka · GitHub](https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md)
