# AWS DynamoDB

DynamoDB is a managed NoSQL database service provided by Amazon Web Services. As it is managed by Amazon, users do not have to worry about operations such as hardware provisioning, configuration, and scaling. The offering primarily targets key-value and document storage.
Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications. DynamoDB can handle more than 10 trillion requests per day and can support peaks of more than 20 million requests per second.

## History

Amazon runs an e-commerce platform for millions of concurrent users, so the underlying services powering the platform must be highly reliable and scalable. Failures in infrastructure would have significant financial consequences and would degrade consumer trust in Amazon's platform. Thus, the motivating purpose behind DynamoDB was a data-store used by these services that could keep up in both availability and scalability such that infrastructure failures would not affect user experience.
The original concept and implementation of DynamoDB was first introduced in 2007 with a paper titled: "Dynamo: Amazon's Highly Available Key-value Store". As DynamoDB is a proprietary, managed service from AWS, they have not published detailed information regarding the internals of the platform since the original paper.
The managed DynamoDB service was launched by AWS in January of 2012, with pricing being based on throughput rather than storage.

## Compression

[Dictionary Encoding](https://dbdb.io/browse?compression=dictionary-encoding)
DynamoDB does not natively support compression. However, users can compress large attributes into binary data using compression algorithms like LZO or GZIP.
These compression algorithms are available via the AWS SDK.

## Concurrency Control

[Optimistic Concurrency Control (OCC)](https://dbdb.io/browse?concurrency-control=optimistic-concurrency-control-occ)
Users have the ability to enable Optimistic Locking for DynamoDB using the AWS Java SDK. For example, they can specify a property with the annotation:@DynamoDBVersionAttributewhich is then designated to store the version number used for optimistic locking.
For conflict resolution, DynamoDB employs a "last writer wins" policy.

## Data Model

[Key/Value](https://dbdb.io/browse?data-model=keyvalue)[Document / XML](https://dbdb.io/browse?data-model=document-xml)
DynamoDB is a schemaless, NoSQL database. Each table requires a primary key to identify its corresponding data item. However, there are no such constraints on non-key attributes.
DynamoDB can hold both structured or semi-structured data, such as JSON or XML.

## Foreign Keys

[Not Supported](https://dbdb.io/browse?foreign-keys=not-supported)
DynamoDB does not natively support foreign keys as it is not a relational database.

## Isolation Levels

[Read Uncommitted](https://dbdb.io/browse?isolation-levels=read-uncommitted)[Read Committed](https://dbdb.io/browse?isolation-levels=read-committed)[Repeatable Read](https://dbdb.io/browse?isolation-levels=repeatable-read)
Although DynamoDB was originally not designed for transactions, AWS has subsequently published a [library](https://github.com/awslabs/dynamodb-transactions) that supports them. With the library, DynamoDB has three configurable isolation levels for transactions: Read Uncommitted, Read Committed, and Repeatable Reads. However, neither DynamoDB nor the library support locking for range queries, thus phantom reads can potentially result in phantom reads.

## Joins

[Not Supported](https://dbdb.io/browse?joins=not-supported)
DynamoDB does not support joins natively. One can join DynamoDB tables using Amazon's Elastic MapReduce (EMR) service.

## Logging

[Not Supported](https://dbdb.io/browse?logging=not-supported)
Although there are no public implementation details on DynamoDB's internal logging schema, external users can log DynamoDB API operations via AWS CloudTrail.
When enabled, AWS CloudTrail logs the DynamoDB API calls made by the user in a JSON format, then stores it in an Amazon S3 bucket.

## Query Interface

[Custom API](https://dbdb.io/browse?query-interface=custom-api)[SQL](https://dbdb.io/browse?query-interface=sql)[Command-line / Shell](https://dbdb.io/browse?query-interface=command-line-shell)
As DynamoDB is hosted by AWS and is a NoSQL database, users must query the database through the internet using the DynamoDB (RESTful) API or SQL statements.
Users can send SQL statements over the network or use the API endpoints via the AWS Management Console, the AWS CLI, or the AWS SDKs.

## Storage Architecture

[Hybrid](https://dbdb.io/browse?storage-architecture=hybrid)
DynamoDB supports a pluggable local persistence engine that can range from in-memory buffers with persistent backing to purely disk-oriented ones. This allows it to be flexible with an application's access patterns.
Known storage engines used by DynamoDB include the Berkeley Database Transactional Data Store and MySQL.

## Storage Model

[N-ary Storage Model (Row/Record)](https://dbdb.io/browse?storage-model=n-ary-storage-model-rowrecord)
DynamoDB uses a key-value storage model.

## Stored Procedures

[Not Supported](https://dbdb.io/browse?stored-procedures=not-supported)
Although DynamoDB doesn't natively support stored procedures, users can use AWS Lambdas for a similar effect.
For example, users can have Lambda functions process incoming DynamoDB stream data and have it be triggered when a specific action is performed on DynamoDB.

## System Architecture

[Shared-Nothing](https://dbdb.io/browse?system-architecture=shared-nothing)
The DynamoDB system architecture is tailored for high availability and scalability. The system is distributed across multiple nodes for availability, and it employs [consistent hashing](https://en.wikipedia.org/wiki/Consistent_hashing) to partition data across these nodes.
For membership and failure detection, DynamoDB utilizes a [gossip-based protocol](<https://dbdb.io/db/(https:/en.wikipedia.org/wiki/Gossip_protocol>). This allows DynamoDB to be decentralized and require minimal manual administration. To handle temporary failures, DynamoDB uses a Sloppy Quorum with hinted hand-off. This technique allows DynamoDB to be available and durable despite network partitions and server failures.

## Views

[Not Supported](https://dbdb.io/browse?views=not-supported)
DynamoDB does not natively support materialized or virtual views. However, customers can use DynamoDB Streams for Cross-Region Replication for similar use cases as materialized views.
Furthermore, AWS encourages the use of DynamoDB as a materialized view for relational systems.
<https://dbdb.io/db/dynamodb>

<https://medium.com/expedia-group-tech/dynamodb-data-modeling-c4b02729ac08>

<https://aws.amazon.com/about-aws/whats-new/2021/05/learn-how-to-develop-applications-with-amazon-dynamodb>
