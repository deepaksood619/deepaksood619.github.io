# Kafka Brokers

In Kafka, **brokers** are the servers that store data and handle all data streaming requests. When you run Kafka, each instance of the Kafka server process is a **broker**. These brokers can be deployed on physical machines, cloud instances, or even Raspberry Pis. Each broker stores **partitions** of **topics**, allowing Kafka to distribute storage and processing across multiple servers for scalability and reliability.

A group of brokers forms a **Kafka cluster**. In this cluster, each broker is responsible for handling **read** and **write** requests from clients. When data is written to a topic, it's actually written to a specific **partition** on one of the brokers. Similarly, when consumers read from a topic, they pull data directly from the partition on the broker where it's stored. This distribution across multiple brokers is what enables Kafka to scale massively while maintaining high throughput.

Historically, Kafka used **Apache ZooKeeper** for managing metadata and coordinating the brokers. However, starting with **Kafka 4.0**, this changed. ZooKeeper was replaced by **KRaft**, a built-in metadata management system based on the **Raft consensus protocol**. This means brokers now handle their own metadata synchronization, simplifying the architecture and improving efficiency.

If you're using [a **cloud-native service** like **Confluent Cloud**](https://www.confluent.io/confluent-cloud/?session_ref=https%3A%2F%2Fdeveloper.confluent.io%2Fcertification%2F%3Futm_medium%3Dsem%26utm_source%3Dgoogle%26utm_campaign%3Dch.sem_br.nonbrand_tp.prs_tgt.dsa_mt.dsa_rgn.apac_sbrgn.india_lng.eng_dv.all_con.confluent-developer%26utm_term%3D%26creative%3D%26device%3Dc%26placement%3D%26gad_source%3D1%26gad_campaignid%3D19560855030%26gbraid%3D0AAAAADRv2c1DOIOBAozJI6eYpioovMyoo%26gclid%3DCj0KCQiA9OnJBhD-ARIsAPV51xMQxq7e-jC0tkvQIDYfH3lARfj6MxXPSd6vORc94KGXIYCsASdOvvcaApazEALw_wcB), the details of brokers are mostly abstracted away—you focus on topics and streams, while the service manages the brokers for you. But when running Kafka on your own, understanding brokers and how they manage partitions is crucial for optimizing performance and ensuring reliability.

In summary, **brokers** are the backbone of Kafka's distributed storage and processing, managing partitions, handling client requests, and now, as of Kafka 4.0, coordinating metadata directly through KRaft.

[Kafka Brokers: The Backbone of a Distributed Cluster](https://developer.confluent.io/courses/apache-kafka/brokers/)

## IMP Broker Configuration

| parameter                                | value                                                          |
| ---------------------------------------- | -------------------------------------------------------------- |
| broker.id                                | `<broker-id>`                                                  |
| broker.rack                              | `ap-south-1`                                                   |
| auto.create.topics.enable                | FALSE                                                          |
| advertised.listeners                     | PLAINTEXT://kafka-core-broker-listeners:9092                   |
| num.network.threads                      | 3                                                              |
| num.io.threads                           | 8                                                              |
| socket.send.buffer.bytes                 | 102400                                                         |
| socket.receive.buffer.bytes              | 102400                                                         |
| socket.request.max.bytes                 | 104857600                                                      |
| log.dirs                                 | /opt/kafka-data                                                |
| num.partitions                           | 3                                                              |
| num.recovery.threads.per.data.dir        | 1                                                              |
| offsets.retention.minutes                | 10080                                                          |
| log.retention.hours                      | 240                                                            |
| log.segment.bytes                        | 1073741824                                                     |
| log.retention.check.interval.ms          | 300000                                                         |
| default.replication.factor               | 3                                                              |
| min.insync.replicas                      | 2                                                              |
| zookeeper.connect                        | zk-kafka-core01:2181,zk-kafka-core02:2181,zk-kafka-core03:2181 |
| zookeeper.connection.timeout.ms          | 6000                                                           |
| offsets.topic.replication.factor         | 3                                                              |
| transaction.state.log.replication.factor | 3                                                              |
| transaction.state.log.min.isr            | 2                                                              |
| group.initial.rebalance.delay.ms         | 3000                                                           |
| inter.broker.protocol.version            | 1                                                              |
| log.message.format.version               | 0.11.0                                                         |
