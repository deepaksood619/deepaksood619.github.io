---
slug: /cloud/aws/analytics/amazon-msk
title: Amazon MSK
description: Streamline your data with Amazon MSK, a fully managed Apache Kafka service that simplifies deployment and scaling while ensuring enterprise-grade security.
created: 2026-01-19
updated: 2026-07-15
---
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

## Authentication Methods

MSK supports four authentication mechanisms for securing client connections:

### 1. Unauthenticated (PLAINTEXT)

- No authentication required
- Port: 9092
- Use case: Development/testing environments, internal networks with network-level security
- Bootstrap server property: `BootstrapBrokerString`

```bash
# Example bootstrap servers
b-1.cluster.kafka.us-east-2.amazonaws.com:9092,b-2.cluster.kafka.us-east-2.amazonaws.com:9092
```

### 2. TLS Mutual Authentication (mTLS)

- Client certificate-based authentication
- Port: 9094
- Use case: Strong cryptographic authentication, certificate-based access control
- Bootstrap server property: `BootstrapBrokerStringTls`
- Requires: Client certificates, private keys, CA certificates

```bash
# Example bootstrap servers with TLS
b-1.cluster.kafka.us-east-2.amazonaws.com:9094,b-2.cluster.kafka.us-east-2.amazonaws.com:9094
```

### 3. SASL/SCRAM Authentication

- Username/password authentication using SCRAM-SHA-512
- Port: 9096
- Use case: User-based access control, integrates with AWS Secrets Manager
- Bootstrap server property: `BootstrapBrokerStringSaslScram`
- Credentials stored in AWS Secrets Manager

```bash
# Example bootstrap servers with SASL/SCRAM
b-1.cluster.kafka.us-east-2.amazonaws.com:9096,b-2.cluster.kafka.us-east-2.amazonaws.com:9096

# Retrieve credentials from Secrets Manager
aws secretsmanager get-secret-value --secret-id AmazonMSK_cluster-name --region us-east-2
```

**Secret format in AWS Secrets Manager:**

```json
{
  "username": "admin",
  "password": "password-here"
}
```

### 4. IAM Authentication

- AWS IAM role/policy-based authentication
- Port: 9098
- Use case: AWS-native authentication, fine-grained access control via IAM policies
- Bootstrap server property: `BootstrapBrokerStringSaslIam`
- **Limitation**: Not supported by some migration tools (e.g., kcp for Confluent Cloud migrations)

```bash
# Example bootstrap servers with IAM
b-1.cluster.kafka.us-east-2.amazonaws.com:9098,b-2.cluster.kafka.us-east-2.amazonaws.com:9098
```

### Getting Bootstrap Servers

Use AWS CLI to retrieve all available authentication endpoints for a cluster:

```bash
aws kafka get-bootstrap-brokers --cluster-arn arn:aws:kafka:region:account-id:cluster/cluster-name/uuid --region us-east-2
```

**Output includes:**

- `BootstrapBrokerString` - Unauthenticated (port 9092)
- `BootstrapBrokerStringTls` - mTLS (port 9094)
- `BootstrapBrokerStringSaslScram` - SASL/SCRAM (port 9096)
- `BootstrapBrokerStringSaslIam` - IAM (port 9098)

**Note:** A single MSK cluster can support multiple authentication methods simultaneously on different ports.

## Pricing

MSK Provisioned offers two types of brokers:

1. Express brokers are purpose-built to make Apache Kafka easier to manage, deliver up to 3x more throughput per broker, scale up to 20x faster –also a 90% reduction in recovery time compared to Standard brokers; and
2. Standard brokers that offer maximum flexibility and choice for control.

[Managed Apache Kafka – Amazon MSK pricing – AWS](https://aws.amazon.com/msk/pricing/)

## MSK Replicator

[Migrate third-party and self-managed Apache Kafka clusters to Amazon MSK Express brokers with Amazon MSK Replicator \| AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/migrate-third-party-and-self-managed-apache-kafka-clusters-to-amazon-msk-express-brokers-with-amazon-msk-replicator/)

## MSK Connect

- [Set up resources required for MSK Connect - Amazon Managed Streaming for Apache Kafka](https://docs.aws.amazon.com/msk/latest/developerguide/mkc-tutorial-setup.html)
