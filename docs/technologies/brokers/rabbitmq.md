# RabbitMQ

The Polyglot Broker (Distributed Message Broker)

All three protocols are supported by RabbitMQ broker, making it an ideal choice for interoperability between applications.

## HA

RabbitMQ with high availability (HA) works behind the scenes by mirroring queues across multiple nodes, ensuring that messages are always available even if some nodes fail. Here’s an in-depth look at how this setup operates:

### Cluster Formation and Communication

#### 1. Node Initialization

- When RabbitMQ starts, each node in the cluster initializes and starts communicating with other nodes to form the cluster.
- Nodes use the `Erlang` distributed system to communicate. They exchange information about the cluster state, such as which nodes are available and which queues are hosted on which nodes.

#### 2. Joining the Cluster

- Secondary nodes (`rabbit@node2`, `rabbit@node3`, etc.) join the cluster by stopping their application, resetting their state, and then joining the cluster initiated by the master node (`rabbit@node1`).
- After joining, they start their application again and begin participating in the cluster.

### Mirroring Queues

#### 1. HA Policy

- The HA policy set on the master node dictates how queues are mirrored. For example, `rabbitmqctl set_policy ha-all ".*" '{"ha-mode":"all"}'` ensures all queues are mirrored across all nodes in the cluster.
- When a queue is created, it’s automatically mirrored to all nodes based on this policy.

#### 2. Queue Mirroring

- Each queue has one primary node where it was first declared. This node is responsible for managing the queue.
- Mirrored nodes maintain copies of the queue’s state. They replicate all operations (such as publishing, consuming, acknowledging messages) performed on the primary queue.

### Message Handling

#### 1. Publishing Messages

- When a message is published to a queue, the primary node handles the message and replicates it to all mirrored nodes.
- This replication ensures that all nodes have the same state of the queue.

#### 2. Consuming Messages

- Consumers can connect to any node in the cluster. If they connect to a mirrored node, the mirrored node forwards the request to the primary node.
- The primary node then delivers the message to the consumer and informs all mirrored nodes to delete the message once it’s acknowledged by the consumer.

### Failover Mechanism

#### 1. Node Failure

- If a primary node fails, one of the mirrored nodes is automatically promoted to be the new primary.
- This new primary continues handling messages and replicating the state to other nodes, ensuring no interruption in service.

#### 2. Recovery

- When the failed node comes back online, it rejoins the cluster and resynchronizes its state with the current primary.
- This synchronization process ensures that the recovered node is up-to-date and can take over if needed in the future.

### Load Balancing

#### 1. HAProxy Configuration

- HAProxy (or another load balancer) is used to distribute client connections across all available RabbitMQ nodes.
- This configuration ensures that even if one node becomes heavily loaded or fails, other nodes can handle the incoming traffic, providing both load balancing and fault tolerance.

### Monitoring and Management

#### 1. RabbitMQ Management Plugin

- The management plugin provides a web-based UI (`http://<node_ip>:15672`) where administrators can monitor the cluster’s health, queues, exchanges, connections, and node status.
- It also provides tools for managing RabbitMQ configurations, such as adding or removing nodes, setting policies, and viewing logs.

#### 2. Alerts and Monitoring Tools

- Tools like Prometheus and Grafana can be integrated with RabbitMQ to provide real-time metrics and alerts.
- These tools help in proactively identifying issues and ensuring the cluster operates smoothly.

### Diagram Overview

Here’s a simplified overview of how RabbitMQ HA works:

```bash
Client ----> HAProxy ----> Node1 ----> | Queue1 Primary
       |         |      ----> Node2 ----> | Queue1 Mirror
       |         |      ----> Node3 ----> | Queue1 Mirror
       |         |
       |         ----> Node1 ----> | Queue2 Primary
       |                    ----> Node2 ----> | Queue2 Mirror
       |                    ----> Node3 ----> | Queue2 Mirror
```

- **Clients** connect to RabbitMQ through HAProxy.
- **HAProxy** distributes connections to different RabbitMQ nodes.
- **Nodes** host queues, with one node being the primary and others mirroring the queue.
- **Messages** are replicated from primary to mirrored nodes to ensure high availability.

This setup ensures that RabbitMQ remains available and continues to function correctly even if some nodes fail, providing a robust and fault-tolerant messaging system.

[Setting Up A Multinode RabbitMQ Cluster On Linux | by Agustinus Theodorus | Bina Nusantara IT Division | Medium](https://medium.com/bina-nusantara-it-division/setting-up-multicluster-rabbitmq-instances-on-linux-714e90f61770)

[Quorum Queues | RabbitMQ](https://www.rabbitmq.com/docs/quorum-queues)

## Links

- [RabbitMQ Crash Course - YouTube](https://www.youtube.com/watch?v=Cie5v59mrTg&ab_channel=HusseinNasser)
- [RabbitMQ : How to setup a RabbitMQ cluster - for beginners - YouTube](https://www.youtube.com/watch?v=FzqjtU2x6YA&ab_channel=ThatDevOpsGuy)
- [Learnings from Running 1000s of Production RabbitMQ Clusters • Lovisa Johansson • RabbitMQ Summit - YouTube](https://www.youtube.com/watch?v=nxQrpLfX3rs)
- [Idiomatic RabbitMQ • Gavin M. Roy • RabbitMQ Summit - YouTube](https://www.youtube.com/watch?v=fNbdgWe5Tbs&ab_channel=GOTOConferences)
