# Others

## Storage formats: Serialization and deserialization of events

Events are serialized when they are written to a topic and deserialized when they are read. These operations turn binary data into the forms you and I understand, and vice versa. Importantly, these operations are done solely by the Kafka clients, i.e., producing and consuming applications such as ksqlDB, Kafka Streams, or a microservice using the Go client for Kafka, for example. As such, there is no single "storage format" in Kafka. Common serialization formats used by Kafka clients include Apache Avro™ (with the [Confluent Schema Registry](https://docs.confluent.io/current/schema-registry/index.html)), Protobuf, and JSON.

Kafka brokers, on the other hand, are agnostic to the serialization format or "type" of a stored event. All they see is a pair of raw bytes for event key and event value coming in when being written, and going out when being read. Brokers thus have no idea what's in the data they serve - it's a black box to them. Being this "dumb" is actually pretty smart, because this design decision allows brokers to scale much better than traditional messaging systems.

https://www.confluent.io/blog/avro-kafka-data

[KIP-405: Kafka Tiered Storage - Apache Kafka - Apache Software Foundation](https://cwiki.apache.org/confluence/display/KAFKA/KIP-405%3A+Kafka+Tiered+Storage)

[KIP-405: Kafka Tiered Storage](https://2minutestreaming.beehiiv.com/p/apache-kafka-kip-405-tiered-storage)

## Data contracts, schema on read, and schema on write

As already mentioned, it is the responsibility of the consuming client (whether it's ksqlDB, Kafka Connect, a custom Kafka consumer, etc.) to deserialize the raw bytes of a Kafka message into the original event by applying some kind of schema, be it a formalized schema in Avro or Protobuf, or an informal JSON format scribbled on the back of a napkin in the company canteen. This means it is, generally speaking, a schema-on-read setup.

But how does a consuming client know how to deserialize stored events, given that most likely a different client produced them? The answer is that producers and consumers must agree on a data contract in some way. Gwen Shapira covered the important subject of [data contracts and schema management](https://www.confluent.io/blog/schemas-contracts-compatibility) in an earlier blog post, so I'll skip over the details here. But in summary, the easiest option is to use Avro and [Confluent Schema Registry](https://www.confluent.io/confluent-schema-registry/). With a schema registry and a formalized schema (including but not limited to Avro), we are moving from schema on read into [schema-on-write territory](https://www.oreilly.com/ideas/data-governance-and-the-death-of-schema-on-read), which is a boon for pretty much everyone who is working with data, not just the few poor souls of us tasked to "go and do data governance."

And with Confluent Platform 5.4 or newer, you have the additional option to [centrally enforce broker-side Schema Validation](https://www.confluent.io/blog/data-governance-with-schema-validation) so that no misbehaving client can violate the data contract: incoming events are validated server side before they are stored in Kafka topics. This feature is a huge benefit for any Kafka user and especially for larger, regulated organizations.

## Other Stream Processing Brokers

- Apache Pulsar
- AWS Kinesis
- AWS SQS
- Google Cloud Pub/Sub
- Azure Event Hubs
- **Redpanda**
- [**warpstream**](technologies/kafka/warpstream.md)
- [GitHub - AutoMQ/automq: AutoMQ is a cloud-native alternative to Kafka by decoupling durability to cloud storage services like S3. 10x Cost-Effective. No Cross-AZ Traffic Cost. Autoscale in seconds. Single-digit ms latency. Multi-AZ Availability.](https://github.com/automq/automq)

Redpanda is the real-time engine for modern apps. Kafka API Compatible; 10x faster

[Co-Designing Raft + Thread-per-Core Execution Model for the Kafka-API](https://youtu.be/kz7R1mGrN9Q)

https://redpanda.com

https://github.com/vectorizedio/redpanda

https://bravenewgeek.com/benchmarking-message-queue-latency

## Kafka Connect Dead Letter Queues

https://www.confluent.io/blog/kafka-connect-deep-dive-error-handling-dead-letter-queues

## Kafka Edge Computing

https://www.kai-waehner.de/blog/2020/01/01/apache-kafka-edge-computing-industrial-iot-retailing-logistics

## Kafka Gotchas

- Too many tunable knobs
- Unsafe defaults
- enable.auto.commit
- max.in.flight.requests.per.connection
- Appalling tooling
- Complicated bootstrapping process
- Shaky client libraries
- Lack of true multitenancy
- Lack of geo-awareness

https://itnext.io/kafka-gotchas-24b51cc8d44e

## Compression

https://cwiki.apache.org/confluence/display/KAFKA/Compression#app-switcher

When the broker receives a compressed batch of messages from a producer:

- it always decompresses the data in order to validate it
- it considers the compression codec of the destination topic
    - if the compression codec of the destination topic is producer, or if the codecs of the batch and destination topic are the same, the broker takes the compressed batch from the client and writes it directly to the topic's log file without recompressing the data.
    - Otherwise, the broker needs to re-compress the data to match the codec of the destination topic.

Decompression and re-compression can also happen if producers are running a version prior to 0.10 because offsets need to be overwritten, or if any other message format conversion is required.

https://stackoverflow.com/questions/59902385/if-i-set-compression-type-at-topic-level-and-producer-level-which-takes-prece

https://stackoverflow.com/questions/48670584/kafka-set-compression-type-at-producer-vs-topic

## Secor

Secor is a service persisting [Kafka](http://kafka.apache.org/) logs to [Amazon S3](http://aws.amazon.com/s3/), [Google Cloud Storage](https://cloud.google.com/storage/), [Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) and [Openstack Swift](http://swift.openstack.org/).

https://github.com/pinterest/secor

## Conduktor

- [GitHub - conduktor/conduktor-platform: Streamline Apache Kafka with Conduktor Platform. 🚀](https://github.com/conduktor/conduktor-platform)
	- We take the complexity out of Kafka. Console gives you visibility into your Kafka ecosystem and concentrates all of the Kafka APIs into a single interface. Troubleshoot and debug Kafka, drill-down into topic data, and continuously monitor your streaming applications.
	- Conduktor supports all Kafka providers (Apache Kafka, MSK, Confluent, Aiven, Redpanda, Strimzi etc.)
- [Conduktor - The Streaming Data Hub](https://conduktor.io/)
	- The Governance Platform for Kafka
	- The intelligent backbone for all your data streaming. Operate, govern, secure. Built for teams and AI.
- [Conduktor - Getting Started - YouTube](https://www.youtube.com/watch?v=11JcsITzZ_g)

## Others

https://kafka-tutorials.confluent.io

https://www.confluent.io/blog/kafka-streams-tables-part-4-elasticity-fault-tolerance-advanced-concepts
