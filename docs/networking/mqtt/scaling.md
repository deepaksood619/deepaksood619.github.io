# Scaling

In a brokered architecture it's critical to avoid a single point of failure and to think about scaling out, since typically only one broker node is used. In the context of MQTT there are two different popular strategies applicable:

## BRIDGING

Some brokers implement an unofficial bridging protocol which makes it possible to chain brokers together. Bridging allows forwarding messages on specific topics to other MQTT brokers. Bridge connections between brokers can be uni- or bidirectional. Technically, a bridge connection to another broker is a connection where the broker behaves like an MQTT client and subscribes to specific topics.

## Pros

- Great for forwarding messages on specific topics
- Different broker products can be chained
- Hierarchical broker architectures possible

## Cons

- No shared state between brokers
- Bridge protocol is not officially specified

Brokers which implement bridging: HiveMQ, mosquitto, RSMB, Websphere MQ / IBM MQ

## CLUSTERING

Many enterprise MQTT brokers implement clustering, which supports high availability configurations and also allows for scaling out by adding more broker nodes. When a cluster node is no longer available, other cluster nodes can take over so that no data or messages are lost. Often brokers implement elastic clustering, and nodes can be added or removed any time.

## Pros

- High availability and scalability
- MQTT semantics across cluster nodes

## Cons

- No standard
- Broker-specific
Brokers which implement clustering: Apache ActiveMQ, HiveMQ, RabbitMQ
*If broker implementation allows, clustering and bridging can be used together, enabling messages from one broker cluster to be forwarded to another isolated cluster.*
