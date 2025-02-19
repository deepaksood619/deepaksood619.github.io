# Intro to Kafka

- Kafka Core is the distributed, durable equivalent of Unix pipes. Use it to connect and compose your large-scale data applications
- Kafka Streams are the commands of your Unix pipelines. Use it to transform data stored in Kafka
- Kafka Connect is the I/O redirection in your Unix pipelines. Use it to get your data into an out of Kafka.

## Characteristics

- It is a distributed and partitioned messaging system
- It is highly fault-tolerant
- It is highly scalable
- It can process and send millions of messages per second to several receivers

## History

- Originally developed by LinkedIn and later, handed over to the open source community in early 2011
- It became a main Apache project in October, 2012
- A stable Apache Kafka version 0.8.2.0 was release in Feb, 2015.

## Kafka Data Model

The Kafka data model consists of messages and topics

- Messages represent information such as, lines in a log file, a row of stock market data, or an error message from a system
- Messages are grouped into categories called topics. Example: LogMessage and Stock Message
- The processes that publish messages into a topic in Kafka are known as producers.
- The processes that receive the messages from a topic in Kafka are known as consumers.
- The processes or servers within Kafka that process the messages are known as brokers.
- A Kafka cluster consists of a set of brokers that process the messages

## Topics

- A topic is a category of messages in Kafka
- The producers publish the messages into topics
- The consumers read the messages from topics
- A topic is divided into one or more partitions
- A partition is also known as a commit log
- Each partition contains an ordered set of messages
- Each message is identified by its offset in the partition
- Messages are added at one end of the partition and consumed at the other

## Partitions

- Topics are divided into partitions, which are the unit of parallelism in Kafka
    - Partitions allow messages in a topic to be distributed to multiple servers
    - A topic can have any number of partitions
    - Each partition should fit in a single Kafka server
    - The number of partitions decide the parallelism of the topic

### Partiton distribution

- Partitions can be distributed across the Kafka cluster
- Each Kafka server may handle one or more partitions
- A partition can be replicated across serveral servers for fault-tolerance
- One server is marked as a leader for the partition and the others are marked as followers
- The leader controls the read and write for the partition, whereas the followers replicate the data
- If a leader fails, one of the followers automatically become the leader.
- Zookeeper is used for the leader selection

## Some Major Points to Remember in Topics, Partitions, and Offsets

- **Offsets only have a meaning for a specific partition**. That means offset number 3 in Partition 0 does not represent the same data or the same message as offset number 3 in partition 1.
- **Order is going to be guaranteed** only from within a partition.
- But across partitions, we have no ordering guarantee. So this is a very important certainty of Kafka is that you’re going to have **ordered at the partition level only**.
- **Data in Kafka by default is kept only for a limited amount of time** and the default is one week. That means that after one week the data is going to be erased from a partition and this allows Kafka to keep on renewing its disk and to make sure it does not run out of disk space.
- Kafka is **immutable**. That means once the data is written into a partition, it cannot be changed. So if you write the message number 3 in partition 0 you cannot overwrite. So as such, you want to be careful about the kind of data you send to a Kafka topic and your recovery mechanism instead of in case you send bad data.
- Also if you don’t provide a key to your message, then when you send a message to a Kafka topic the data is going to be assigned to a random partition.
- Finally, a topic can have as many partitions as you want but it is not common to have topics with say 10, 20, 30, or 1000 partitions unless you have a truly high throughput topic.

## Kafka Architecture

Kafka consists of brokers that take messages from the producers and add to a partition of a topic. Brokers provide the messages to the consumers from the partitions.

- A topic is divided into multiple partitions
- The messages are added to the partitions at one end and consumed in the same order
- Each partition acts as a message queue
- Consumers are divided into consumer groups

## Types of messaging systems

- Kafka architecture supports the publish-subscribe and queue system
- Publish-subscribe system
    - Each message is received by all the subscribers
    - Each subscriber receives all the messages
    - Messages are received in the same order that they are produced
- Queue system
    - Each message has to be consumed by only one consumer
    - Each message is consumed by any one of the available consumers
    - Messages are consumed in the same order that they are received

![image](../../media/Technologies-Kafka-Intro-to-Kafka-image1.jpg)

![image](../../media/Technologies-Kafka-Intro-to-Kafka-image2.jpg)

## Brokers

Brokers are the Kafka processes that process the messages in Kafka

- Each machine in the cluster can run one broker
- They coordinate among each other using Zookeeper
- One broker acts as a leader for a partition and handles the delivery and persistence, where as, the others act as followers

## Kafka Guarantees

- Messages sent by a producer to a topic and a partition are appended in the same order
- A consumer instance gets the messages in the same order as they are produced
- A topic with replication factor N, tolerates upto N-1 server failures

## Transactions in Kafka

- Atomic multi-partition writes
- Zombie fencing

[Transactions in Apache Kafka | Confluent](https://www.confluent.io/blog/transactions-apache-kafka/)

## Replication in Kafka

Kafka uses the primary-backup method of replication

- One machine (one replica) is called a leader and is chosen as the primary; the remaining machines (replicas) are chosen as the followers and act as backups
- The leader propagates the writes to the followers
- The leader waits until the writes are completed on all the replicas
- If a replica is down, it is skipped for the write until it comes back
- If the leader fails, one of the followers will be chosen as the new leader; this mechanism can tolerate n-1 failures if the replication factor is n

## Persistence in Kafka

Kafka uses the Linux file system for persistence of messages

- Persistence ensures no messages are lost
- Kafka relies on the file system page cache for fast reads and writes
- All the data is immediately written to a file in file system
- Messages are grouped as message sets for more efficient writes
- Message sets can be compressed to reduce network bandwidth
- A standarized binary message format is used among producers, brokers, and consumers to minimize data modification

## 3 major components

1. **Kafka Core:** A central hub to transport and store event streams in real-time
2. **Kafka Connect:** A framework to import event streams from other soure data systems into Kafka and export event streams from Kafka to destination data systems
3. **Kafka Streams:** A Java library to process event streams live as they occur

## Can Kafka lose messages?

A common belief among many developers is that Kafka, by its very design, guarantees no message loss. However, understanding the nuances of Kafka's architecture and configuration is essential to truly grasp how and when it might lose messages, and more importantly, how to prevent such scenarios.

The diagram below shows how a message can be lost during its lifecycle in Kafka.

### Producer

When we call producer.send() to send a message, it doesn't get sent to the broker directly. There are two threads and a queue involved in the message-sending process:

1. Application thread
2. Record accumulator
3. Sender thread (I/O thread)

We need to configure proper ‘acks’ and ‘retries’ for the producer to make sure messages are sent to the broker.

### Broker

A broker cluster should not lose messages when it is functioning normally. However, we need to understand which extreme situations might lead to message loss:

1. The messages are usually flushed to the disk asynchronously for higher I/O throughput, so if the instance is down before the flush happens, the messages are lost.
2. The replicas in the Kafka cluster need to be properly configured to hold a valid copy of the data. The determinism in data synchronization is important.

### Consumer

Kafka offers different ways to commit messages. Auto-committing might acknowledge the processing of records before they are actually processed. When the consumer is down in the middle of processing, some records may never be processed.

A good practice is to combine both synchronous and asynchronous commits, where we use asynchronous commits in the processing loop for higher throughput and synchronous commits in exception handling to make sure the the last offset is always committed.

![Can Kafka Lose Messages?](../../media/Screenshot%202025-02-18%20at%2010.13.11%20PM.jpg)

[ByteByteGo - YouTube](https://www.youtube.com/channel/UCZgt6AzoyjslHTC9dz0UoTw/community?lb=Ugkx60LijyVEVRjA9AToCnl8T65FK4BgibDX)
