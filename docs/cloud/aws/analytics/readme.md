# Analytics

- [Amazon Athena](cloud/aws/analytics/amazon-athena.md) - Query Data in S3 using SQL
- [Amazon DevOps Guru](cloud/aws/analytics/amazon-devops-guru.md)

## Amazon EMR

Hosted Hadoop Framework

Easily Run and Scale Apache Spark, Hadoop, HBase, Presto, Hive, and other Big Data Frameworks

Amazon EMR is the industry leading cloud-native big data platform for processing vast amounts of data quickly and cost-effectively at scale. Using open source tools such as [Apache Spark](https://aws.amazon.com/emr/features/spark/), [Apache Hive](https://aws.amazon.com/emr/features/hive/), [Apache HBase](https://aws.amazon.com/emr/features/hbase/), [Apache Flink](https://aws.amazon.com/blogs/big-data/use-apache-flink-on-amazon-emr/), [Apache Hudi (Incubating)](https://aws.amazon.com/emr/features/hudi/), and [Presto](https://aws.amazon.com/emr/features/presto/), coupled with the dynamic scalability of [Amazon EC2](https://aws.amazon.com/ec2/) and scalable storage of [Amazon S3](https://aws.amazon.com/s3/), EMR gives analytical teams the engines and elasticity to run Petabyte-scale analysis for a fraction of the cost of traditional on-premises clusters. EMR gives teams the flexibility to run use cases on single-purpose, short lived clusters that automatically scale to meet demand, or on long running highly available clusters using the new multi-master deployment mode. If you have existing on-premises deployments of open source tools such as Apache Spark and Apache Hive, you can also run [EMR clusters on AWS Outposts](https://aws.amazon.com/emr/features/outposts/), giving you both the ability to scale out on-premises via Outposts or in the cloud.

### Amazon EMR WAL

Apache HBase Write Ahead Log allows recording all changes to data to file-based storage. With Amazon EMR on EC2, you can write your Apache HBase write-ahead logs to the Amazon EMR WAL, a durable managed storage layer that outlives your cluster. In the event that your cluster, or in the rare cases that the Availability Zone becomes unhealthy or unavailable, you can create a new cluster, point it to the same Amazon S3 root directory and Amazon EMR WAL workspace, and automatically recover the data in WAL within a few minutes.

[Write-ahead logs (WAL) for Amazon EMR - Amazon EMR](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hbase-wal.html)

[HBase on Amazon S3 (Amazon S3 storage mode) - Amazon EMR](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hbase-s3.html)

### Node Types

#### Primary node

The primary node manages the cluster and typically runs primary components of distributed applications. For example, the primary node runs the YARN ResourceManager service to manage resources for applications. It also runs the HDFS NameNode service, tracks the status of jobs submitted to the cluster, and monitors the health of the instance groups.

#### Core nodes

Core nodes are managed by the primary node. Core nodes run the Data Node daemon to coordinate data storage as part of the Hadoop Distributed File System (HDFS). They also run the Task Tracker daemon and perform other parallel computation tasks on data that installed applications require. For example, a core node runs YARN NodeManager daemons, Hadoop MapReduce tasks, and Spark executors.

#### Task nodes

You can use task nodes to add power to perform parallel computation tasks on data, such as Hadoop MapReduce tasks and Spark executors. Task nodes don't run the Data Node daemon, nor do they store data in HDFS. As with core nodes, you can add task nodes to a cluster by adding Amazon EC2 instances to an existing uniform instance group or by modifying target capacities for a task instance fleet.

[Understand node types: primary, core, and task nodes - Amazon EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-master-core-task-nodes.html)

## Amazon CloudSearch

Managed Search Service

## Amazon ElasticSearch Service

Run and Scale Elasticsearch Clusters

## Amazon Kinesis

Work with Real-time Streaming Data

[Serverless Streaming Data Service - Amazon Kinesis](https://aws.amazon.com/pm/kinesis/)

[Amazon Kinesis Video Streams FAQs](https://aws.amazon.com/kinesis/video-streams/faqs/)

[Definitive Guide to Optimize Kinesis Costs | by HashedIn Technologies | Medium](https://medium.com/@hashedin/definitive-guide-to-optimize-kinesis-costs-b8b480991e44)

## Amazon Kinesis Data Firehose

Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into data lakes, data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and [Splunk](https://aws.amazon.com/kinesis/data-firehose/splunk/), enabling near real-time analytics with existing business intelligence tools and dashboards you're already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.

https://aws.amazon.com/kinesis/data-firehose

## Amazon Redshift

Fast, Simple, Cost-effective Data Warehousing

## Amazon Quicksight

Fast Business Analytics Service

## AWS Data Pipeline

Orchestration Service for Periodic, Data-driven Workflows

Not available in Mumbai Region

## AWS Glue

Perpare and Load Data

## AWS Glue DataBrew

https://aws.amazon.com/blogs/big-data/enrich-datasets-for-descriptive-analytics-with-aws-glue-databrew

## AWS Managed Streaming for Apache Kafka

Fully managed Apache Kafka service

## AWS Data Exchange

Easily find and subscribe to third-party data in the cloud

[Patterns for enterprise data sharing at scale | AWS Big Data Blog](https://aws.amazon.com/blogs/big-data/patterns-for-enterprise-data-sharing-at-scale/)

## AWS Lake Formation - Build a secure data lake in days

AWS Lake Formation is a service that makes it easy to set up a secure data lake in days. A data lake is a centralized, curated, and secured repository that stores all your data, both in its original form and prepared for analysis. A data lake enables you to break down data silos and combine different types of analytics to gain insights and guide better business decisions.

However, setting up and managing data lakes today involves a lot of manual, complicated, and time-consuming tasks. This work includes loading data from diverse sources, monitoring those data flows, setting up partitions, turning on encryption and managing keys, defining transformation jobs and monitoring their operation, re-organizing data into a columnar format, configuring access control settings, deduplicating redundant data, matching linked records, granting access to data sets, and auditing access over time.

Creating a data lake with Lake Formation is as simple as defining data sources and what data access and security policies you want to apply. Lake Formation then helps you collect and catalog data from databases and object storage, move the data into your new [Amazon S3](https://aws.amazon.com/s3/) data lake, clean and classify your data using machine learning algorithms, and secure access to your sensitive data. Your users can access a centralized [data catalog](https://aws.amazon.com/glue/faqs/#AWS_Glue_Data_Catalog/) which describes available data sets and their appropriate usage. Your users then leverage these data sets with their choice of analytics and machine learning services, like [Amazon Redshift](https://aws.amazon.com/redshift/), [Amazon Athena](https://aws.amazon.com/athena/), and (in beta)[Amazon EMR](https://aws.amazon.com/emr/) for Apache Spark. Lake Formation builds on the capabilities available in [AWS Glue](https://aws.amazon.com/glue/).

https://aws.amazon.com/lake-formation
