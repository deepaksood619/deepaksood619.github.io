# Amazon MSK

**Amazon Managed Streaming for Apache Kafka**

Securely stream data with a fully managed, highly available Apache Kafka service

Amazon Managed Streaming for Apache Kafka (Amazon MSK) is a streaming data service that manages Apache Kafka infrastructure and operations, making it easier for developers and DevOps managers to run Apache Kafka applications and Apache Kafka Connect connectors on AWS—without becoming experts in operating Apache Kafka. Amazon MSK operates, maintains, and scales Apache Kafka clusters, provides enterprise-grade security features out of the box, and has built-in AWS integrations that accelerate development of streaming data applications.

- MSK Standard Brokers
- MSK Express Brokers
- MSK Serverless
- Others
	- MSK Connect
	- MSK Replicator
	- MSK Integrations

These components describe the architecture of Amazon MSK:

- **Broker nodes** — When creating an Amazon MSK cluster, you specify how many broker nodes you want Amazon MSK to create in each [Availability Zone](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-availability-zones.html). The minimum is one broker per Availability Zone. Each Availability Zone has its own virtual private cloud (VPC) subnet.
	- Amazon MSK Provisioned offers two broker types: [Amazon MSK Standard brokers](https://docs.aws.amazon.com/msk/latest/developerguide/msk-broker-types-standard.html) and [Amazon MSK Express brokers](https://docs.aws.amazon.com/msk/latest/developerguide/msk-broker-types-express.html). In [MSK Serverless](https://docs.aws.amazon.com/msk/latest/developerguide/serverless.html), MSK manages the broker nodes used to handle your traffic and you only provision your Kafka server resources at a cluster level.
- **ZooKeeper nodes** — Amazon MSK also creates the Apache ZooKeeper nodes for you. Apache ZooKeeper is an open-source server that enables highly reliable distributed coordination.
- **KRaft controllers** —The Apache Kafka community developed KRaft to replace Apache ZooKeeper for metadata management in Apache Kafka clusters. In KRaft mode, cluster metadata is propagated within a group of Kafka controllers, which are part of the Kafka cluster, instead of across ZooKeeper nodes. KRaft controllers are included at no additional cost to you, and require no additional setup or management from you.
- **Producers, consumers, and topic creators** — Amazon MSK lets you use Apache Kafka data-plane operations to create topics and to produce and consume data.
- **Cluster Operations** You can use the AWS Management Console, the AWS Command Line Interface (AWS CLI), or the APIs in the SDK to perform control-plane operations. For example, you can create or delete an Amazon MSK cluster, list all the clusters in an account, view the properties of a cluster, and update the number and type of brokers in a cluster.

Amazon MSK detects and automatically recovers from the most common failure scenarios for clusters so that your producer and consumer applications can continue their write and read operations with minimal impact. When Amazon MSK detects a broker failure, it mitigates the failure or replaces the unhealthy or unreachable broker with a new one. In addition, where possible, it reuses the storage from the older broker to reduce the data that Apache Kafka needs to replicate. Your availability impact is limited to the time required for Amazon MSK to complete the detection and recovery. After a recovery, your producer and consumer apps can continue to communicate with the same broker IP addresses that they used before the failure.

[Fully Managed Apache Kafka – Amazon MSK – Amazon Web Services](https://aws.amazon.com/msk/)

[Welcome to the Amazon MSK Developer Guide - Amazon Managed Streaming for Apache Kafka](https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html)

## Pricing

MSK Provisioned offers two types of brokers:

1. Express brokers are purpose-built to make Apache Kafka easier to manage, deliver up to 3x more throughput per broker, scale up to 20x faster –also a 90% reduction in recovery time compared to Standard brokers; and
2. Standard brokers that offer maximum flexibility and choice for control.

[Managed Apache Kafka – Amazon MSK pricing – AWS](https://aws.amazon.com/msk/pricing/)
