# Analytics

1. Amazon Athena

Query Data in S3 using SQL

2. Amazon EMR

Hosted Hadoop Framework

Easily Run and Scale Apache Spark, Hadoop, HBase, Presto, Hive, and other Big Data Frameworks

Amazon EMR is the industry leading cloud-native big data platform for processing vast amounts of data quickly and cost-effectively at scale. Using open source tools such as [Apache Spark](https://aws.amazon.com/emr/features/spark/), [Apache Hive](https://aws.amazon.com/emr/features/hive/), [Apache HBase](https://aws.amazon.com/emr/features/hbase/), [Apache Flink](https://aws.amazon.com/blogs/big-data/use-apache-flink-on-amazon-emr/), [Apache Hudi (Incubating)](https://aws.amazon.com/emr/features/hudi/), and [Presto](https://aws.amazon.com/emr/features/presto/), coupled with the dynamic scalability of [Amazon EC2](https://aws.amazon.com/ec2/) and scalable storage of [Amazon S3](https://aws.amazon.com/s3/), EMR gives analytical teams the engines and elasticity to run Petabyte-scale analysis for a fraction of the cost of traditional on-premises clusters. EMR gives teams the flexibility to run use cases on single-purpose, short lived clusters that automatically scale to meet demand, or on long running highly available clusters using the new multi-master deployment mode. If you have existing on-premises deployments of open source tools such as Apache Spark and Apache Hive, you can also run [EMR clusters on AWS Outposts](https://aws.amazon.com/emr/features/outposts/), giving you both the ability to scale out on-premises via Outposts or in the cloud.

3. Amazon CloudSearch

Managed Search Service

4. Amazon ElasticSearch Service

Run and Scale Elasticsearch Clusters

5. Amazon Kinesis

Work with Real-time Streaming Data

## Amazon Kinesis Data Firehose

Amazon Kinesis Data Firehose is the easiest way to reliably load streaming data into data lakes, data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and [Splunk](https://aws.amazon.com/kinesis/data-firehose/splunk/), enabling near real-time analytics with existing business intelligence tools and dashboards you're already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, transform, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.

<https://aws.amazon.com/kinesis/data-firehose>

6. Amazon Redshift

Fast, Simple, Cost-effective Data Warehousing

7. Amazon Quicksight

Fast Business Analytics Service

8. AWS Data Pipeline

Orchestration Service for Periodic, Data-driven Workflows

Not available in Mumbai Region

9. AWS Glue

Perpare and Load Data

## AWS Glue DataBrew

<https://aws.amazon.com/blogs/big-data/enrich-datasets-for-descriptive-analytics-with-aws-glue-databrew>

10. AWS Managed Streaming for Apache Kafka

Fully managed Apache Kafka service

11. AWS Data Exchange

Easily find and subscribe to third-party data in the cloud

12. AWS Lake Formation

Build a secure data lake in days

AWS Lake Formation is a service that makes it easy to set up a secure data lake in days. A data lake is a centralized, curated, and secured repository that stores all your data, both in its original form and prepared for analysis. A data lake enables you to break down data silos and combine different types of analytics to gain insights and guide better business decisions.

However, setting up and managing data lakes today involves a lot of manual, complicated, and time-consuming tasks. This work includes loading data from diverse sources, monitoring those data flows, setting up partitions, turning on encryption and managing keys, defining transformation jobs and monitoring their operation, re-organizing data into a columnar format, configuring access control settings, deduplicating redundant data, matching linked records, granting access to data sets, and auditing access over time.

Creating a data lake with Lake Formation is as simple as defining data sources and what data access and security policies you want to apply. Lake Formation then helps you collect and catalog data from databases and object storage, move the data into your new [Amazon S3](https://aws.amazon.com/s3/) data lake, clean and classify your data using machine learning algorithms, and secure access to your sensitive data. Your users can access a centralized [data catalog](https://aws.amazon.com/glue/faqs/#AWS_Glue_Data_Catalog/) which describes available data sets and their appropriate usage. Your users then leverage these data sets with their choice of analytics and machine learning services, like [Amazon Redshift](https://aws.amazon.com/redshift/), [Amazon Athena](https://aws.amazon.com/athena/), and (in beta)[Amazon EMR](https://aws.amazon.com/emr/) for Apache Spark. Lake Formation builds on the capabilities available in [AWS Glue](https://aws.amazon.com/glue/).

<https://aws.amazon.com/lake-formation>
