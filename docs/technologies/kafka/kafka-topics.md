# Kafka Topics

- A topic is a category of messages in Kafka
- The producers publish the messages into topics
- The consumers read the messages from topics
- A topic is divided into one or more partitions
- A partition is also known as a commit log
- Each partition contains an ordered set of messages
- Each message is identified by its offset in the partition
- Messages are added at one end of the partition and consumed at the other

## Kafka Topics Explained: How Events Are Organized

In Apache Kafka®, **topics** are the core abstraction for storing and processing data. Unlike traditional databases where data is stored in **tables** and updated with each new event, Kafka uses **logs** to record every event in sequence. This means that instead of replacing old values, each new event is simply **appended** to the log, preserving the entire history. For example, if you’re monitoring a smart thermostat, every temperature reading is added as a new event in the log, allowing you to track changes over time.

Each event in a topic is called a **message**, and it consists of three main parts:

- A **key**, which identifies the source of the event (like a thermostat ID or user ID).
- A **value**, which contains the actual data (like the temperature reading or the click action).
- A **timestamp**, which marks the exact time the event was produced.

Messages in a topic are **immutable**—once written, they cannot be changed. This guarantees a reliable and consistent history of events. If you want to transform or filter data, you don’t modify the original topic; instead, you **create a new topic** that reflects those changes. This keeps Kafka’s logs clean and traceable.

It’s important to understand that **topics are not queues**. In a queue, when you read a message, it’s gone—nobody else can read it. But in a Kafka topic, messages remain available for multiple consumers to read independently. This allows for **replayability** and fault tolerance, as data can be processed multiple times without being lost.

Kafka also supports **log compaction**. If you only care about the latest state of each key (e.g., the most recent temperature reading from each thermostat), you can enable compaction to remove old versions, keeping your storage lean without losing important information.

Finally, you can configure **retention policies** to manage storage efficiently, choosing how long Kafka should keep data—whether it’s **forever**, for a set number of days, or until it’s compacted.

In summary, Kafka topics are powerful, immutable logs that allow you to store, process, and replay streams of events reliably, while keeping full historical context intact.

[Kafka Topics Explained: How Events Are Organized](https://developer.confluent.io/courses/apache-kafka/topics/)
