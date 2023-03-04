# Apache Zookeeper

Apache Zookeeper is a distributed, open-source configuration, synchronization service along with naming registry for distributed applications.

- Centralized configuration management tool
- Used for leader election and distributed locking
- Scales well for the reads but not for the writes
- Stores data in-memory
- Great if storing a limited amount of data with high number of reads is the requirement
- ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services
- Quorum management service and manage topic metadata
- Highly reliable distributed coordination kernet, which can be used for distributed locking, configuration management, leadership election, work queues
- Zookeeper is a replicated service that holds the metadata of distributed applications
- Key attributed of such data
  - Small size
  - Performance sensitive
  - Dynamic
  - Critical
- In very simple words, it is a central store of key-value using which distributed system can coordinate. Since it needs to be able to handle the load, Zookeeper itself runs on many machines.

## Architecture

The basic terminologies that you need to know before knowing the architecture are:

- Node: The systems installed on the cluster
- ZNode: The nodes where the status is updated by other nodes in cluster
- Client Applications: The tools that interact with the distributed applications
- Server Applications: Allows the client applications to interact using a common interface

The services in the cluster are replicated and stored on a set of servers (called an "ensemble"), each of which maintains an in-memory database containing the entire data tree of state as well as a transaction log and snapshots stored persistently. Multiple client applications can connect to a server, and each client maintains a TCP connection through which it sends requests and heartbeats and receives responses and watch events for monitoring.

## References

<https://en.wikipedia.org/wiki/Apache_ZooKeeper>

[https://www.quora.com/What-is-the-actual-role-of-Zookeeper-in-Kafka-What-benefits-will-I-miss-out-on-if-I-don%E2%80%99t-use-Zookeeper-and-Kafka-together#](https://www.quora.com/What-is-the-actual-role-of-Zookeeper-in-Kafka-What-benefits-will-I-miss-out-on-if-I-don%E2%80%99t-use-Zookeeper-and-Kafka-together)

<https://zookeeper.apache.org/doc/r3.3.4/zookeeperInternals.html#ch_Introduction>
