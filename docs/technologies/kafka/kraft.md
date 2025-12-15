# Kafka without Zookeeper (Kafka with KRaft Mode)

- KRaft Algorithm (pronounced as craft)
- [What’s New in Apache Kafka 3.3 - New Features, Updates, and More](https://www.confluent.io/blog/apache-kafka-3-3-0-new-features-and-updates/)
- [Kafka Without ZooKeeper: A Sneak Peek At the Simplest Kafka Yet](https://www.confluent.io/blog/kafka-without-zookeeper-a-sneak-peek/)
- [KRaft - Apache Kafka Without ZooKeeper](https://developer.confluent.io/learn/kraft/)
- [Running Kafka without zookeeper. Kafka uses the Raft consensus algorithm… | by Kamini Kamal | Javarevisited | Medium](https://medium.com/javarevisited/running-kafka-without-zookeeper-66b685db4991)
- [Installing Apache Kafka without Zookeeper: Guide 101 | Hevo](https://hevodata.com/learn/kafka-without-zookeeper/)
- [Kafka without Zookeeper: Tutorial & Examples](https://redpanda.com/guides/kafka-tutorial/kafka-without-zookeeper)
- [KRaft Quorum: How to run Kafka without Zookeper](https://www.conduktor.io/blog/kraft-quorum-run-kafka-without-zookeeper/)

![Kafka with KRaft](../../media/Pasted%20image%2020240808170843.jpg)

- [KRaft Overview \| Confluent Documentation](https://docs.confluent.io/platform/7.4/kafka-metadata/kraft.html)
	- Currently, migration from ZooKeeper to KRaft is not supported for Confluent Platform. You should choose how metadata is managed when you create an Kafka cluster. (solved in newer versions)
	- Combined mode, where a Kafka node acts as a broker and also a KRaft controller, is not currently supported for production workloads. There are key security and feature gaps between combined mode and isolated mode in Confluent Platform.
