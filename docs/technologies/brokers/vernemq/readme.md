# VerneMQ

VerneMQ is first and foremost a MQTT publish/subscribe message broker which implements the OASIS industry standard [MQTT protocol](https://vernemq.com/intro/mqtt-primer/). But VerneMQ is also built to take messaging and IoT applications to the next level by providing a unique set of features related to scalability, reliability and high-performance as well as operational simplicity.

To achieve these goals VerneMQ is designed from the ground up to work as a distributed message broker, ensuring continued operation in the event of node or network failures and easy horizontal scalability. The underlying technology is a proven [telecom grade technology stack](https://vernemq.com/intro/benefits/erlang.html) providing a rock solid foundation for systems that must be in continuous operation around the clock. It's also able to make efficient use of all available resources as a basis for easy vertical scalability.

VerneMQ uses a master-less clustering technology. There are no special nodes like masters or slaves to consider when the inevitable infrastructure changes or maintenance windows require adding or removing nodes. This makes operating the cluster safe and simple.

VerneMQ uses Google's LevelDB as a fast storage backend for messages and subscriber information. Each VerneMQ node runs its own embedded LevelDB store.

## Features

VerneMQ implements the MQTT 3.1, 3.1.1 and 5.0 specifications. Currently the following features are implemented and delivered as part of VerneMQ:

- QoS 0, QoS 1, QoS 2
- Basic Authentication and Authorization
- Bridge Support
- $SYS Tree for monitoring and reporting
- TLS (SSL) Encryption
- Websockets Support
- Cluster Support
- Logging (Console, Files, Syslog)
- Reporting to Graphite
- Extensible Plugin architecture
- Multiple Sessions per ClientId
- Session Balancing
- Shared subscriptions
- Message load regulation
- Message load shedding (for system protection)
- Offline Message Storage (based on LevelDB)
- Queue can handle messages FIFO or LIFO style.
- MongoDB auth & integration
- Redis auth & integration
- MySQL auth & integration
- PostgreSQL auth & integration
- Memcached integration
- HTTP integration
- HTTP Webhooks
- PROXY Protocol v2
- Administration HTTP API (BETA)
- Real-time MQTT session tracing
- Full multitenancy
- Cluster status web page

The following features are also applies to MQTT 5.0 clients:

- Enhanced authentication schemes (AUTH)
- Message expiration
- Last Will and Testament delay
- Shared subscriptions
- Request/response flow
- Topic aliases
- Flow control
- Subscription flags (Retain as Published, No Local, Retain Handling)
- Subscriber identifiers
- All property types are supported: user properties, reason strings, content types etc.

## Internals

VerneMQ uses Plumtree for optimistic replication of the metadata, namely subscriber data and retained messages. The Plumtree based metadata storage relies on Merkle trees for its anti-entropy mechanism, that is a background process that ensures the metadata gets synchronized even in the case an update operation was missed. The initialization as well as the ongoing maintenance of such Merkle trees are expensive, especially ifa lotof items are managed by the tree. Moreover, removing items from the tree isn't currently supported (distributed deletes). As a consequence one has to look out to not randomly generate data (e.g. by random MQTT client ids or random topics used in retained messages).

While some of those issues could be solved by improving the way VerneMQ uses Plumtree it would most probably break backward compatibility and would have to wait until 2.0. For this reason we decided to look at better alternatives, one that scales to millions of items, where we could get rid of the Merkle trees, and get a better way to deal with distributed deletes. One promising alternative isServer Wide Clocks (SWC). SWC is a novel distributed algorithm that provides multiple advantages. Namely a new efficient and lightweight anti-entropy mechanism, reduced per-key causality information, andrealdistributed deletes.

## Routing Score

The routing score consists of two percentages similar to 75 / 25 indicating that 75% of the received MQTT publish frames were routed to local subscribers and 25% were forwarded to subscribers on different cluster nodes. The routing score can be used to detect imbalances in a VerneMQ cluster and optimize your traffic and client partition.

## Dashboards

<http://localhost:8888/status>

<http://localhost:8888/metrics>

## References

<https://vernemq.com/intro>

<https://docs.vernemq.com/configuring-vernemq/storage>

<https://github.com/vernemq/vernemq>
