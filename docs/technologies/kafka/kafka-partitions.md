# Partitions

In [Apache Kafka®](https://www.confluent.io/what-is-apache-kafka/?session_ref=https%3A%2F%2Fdeveloper.confluent.io%2Fcertification%2F%3Futm_medium%3Dsem%26utm_source%3Dgoogle%26utm_campaign%3Dch.sem_br.nonbrand_tp.prs_tgt.dsa_mt.dsa_rgn.apac_sbrgn.india_lng.eng_dv.all_con.confluent-developer%26utm_term%3D%26creative%3D%26device%3Dc%26placement%3D%26gad_source%3D1%26gad_campaignid%3D19560855030%26gbraid%3D0AAAAADRv2c1DOIOBAozJI6eYpioovMyoo%26gclid%3DCj0KCQiA9OnJBhD-ARIsAPV51xMQxq7e-jC0tkvQIDYfH3lARfj6MxXPSd6vORc94KGXIYCsASdOvvcaApazEALw_wcB), **partitions** are the key to scalability and distributed processing. Kafka is [designed as a **distributed system**](https://www.confluent.io/learn/distributed-systems/?session_ref=https%3A%2F%2Fdeveloper.confluent.io%2Fcertification%2F%3Futm_medium%3Dsem%26utm_source%3Dgoogle%26utm_campaign%3Dch.sem_br.nonbrand_tp.prs_tgt.dsa_mt.dsa_rgn.apac_sbrgn.india_lng.eng_dv.all_con.confluent-developer%26utm_term%3D%26creative%3D%26device%3Dc%26placement%3D%26gad_source%3D1%26gad_campaignid%3D19560855030%26gbraid%3D0AAAAADRv2c1DOIOBAozJI6eYpioovMyoo%26gclid%3DCj0KCQiA9OnJBhD-ARIsAPV51xMQxq7e-jC0tkvQIDYfH3lARfj6MxXPSd6vORc94KGXIYCsASdOvvcaApazEALw_wcB), meaning it runs across multiple machines but appears as a single, unified service. If a **topic** were stored entirely on one machine, it would be limited by that machine's storage and processing power, capping its scalability. **Partitioning** solves this by splitting a topic's log into multiple, smaller logs called **partitions**. Each partition is stored separately across different nodes, allowing Kafka to handle far larger amounts of data.

This partitioning introduces some changes to **message ordering**. Within a single partition, message order is strictly maintained—messages are read in the exact sequence they were written. However, **global ordering** across all partitions is not guaranteed. Messages with the same **key** are always written to the same partition, ensuring order for that key. This is managed through a **hashing function**: Kafka hashes the key, applies modulo with the number of partitions, and assigns it accordingly. For example, all events from a thermostat with ID 42 would consistently go to the same partition, preserving their order.

If a message has **no key**, Kafka distributes it using a **round-robin** method, cycling through the partitions evenly. While this balances the load, it also means that messages from the same thermostat may end up in different partitions, losing any guarantee of order. This trade-off is important to understand when designing your data streams.

Kafka's ability to support **millions of partitions** across a cluster, thanks to KRaft, makes it incredibly scalable. More partitions allow for greater concurrency and parallelism, optimizing throughput and resilience. Understanding how Kafka distributes messages to partitions is crucial for designing efficient, high-throughput applications that preserve order where it matters.

In short, **partitions** are what enable Kafka to scale massively while maintaining efficient, reliable, and ordered message processing.

- Topics are divided into partitions, which are the unit of parallelism in Kafka
- Partitions allow messages in a topic to be distributed to multiple servers
- A topic can have any number of partitions
- **Each partition should fit in a single Kafka server**
- The number of partitions decide the parallelism of the topic

[Intro to Kafka Partitions \| Apache Kafka® 101](https://developer.confluent.io/courses/apache-kafka/partitions/)

## Partition distribution

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
