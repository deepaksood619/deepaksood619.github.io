# Amazon S3 Tables

[Amazon S3 Tables](https://aws.amazon.com/s3/features/tables/) give you storage that is optimized for tabular data such as daily purchase transactions, streaming sensor data, and ad impressions in Apache Iceberg format, for easy queries using popular query engines like [Amazon Athena](https://aws.amazon.com/athena), [Amazon EMR](https://aws.amazon.com/emr), and [Apache Spark](https://spark.apache.org/). When compared to self-managed table storage, you can expect up to 3x faster query performance and up to 10x more transactions per second, along with the operational efficiency that is part-and-parcel when you use a fully managed service.

Iceberg has become the most popular way to manage Parquet files, with thousands of AWS customers using Iceberg to query across often billions of files containing petabytes or even exabytes of data.

## Delta Lake vs Iceberg

Under the hood, Amazon S3 Tables is a brand new type of S3 bucket (called a "table bucket"), specifically optimized for storing data in Parquet and querying via Iceberg. You can think of the table bucket as your "database", and all the files stored in it will be "tables" -> hence "Amazon S3 Tables".

The S3 Tables service will provide many services required to operationalize a data lake: table level permissions, metadata management, automatic file compaction/cleanup, and more.

Why is this a big deal?

Open data formats and data lakes have been all the rage over the past year. Many companies want to keep their data in their Cloud Storage provider and make it accessible to multiple services/query engines.

AWS coming out and adding first class support for Parquet/Iceberg will lay down the foundations for this trend to accelerate.

S3 Tables will become a new building block that many services (including Snowflake/Databricks) can and should build on top of.

Now, back to Delta Lake...

Delta Lake is the open source table format built & maintained by Databricks. It's an Iceberg alternative.

Earlier this year, there were ongoing debates about what the best open source format is for your data lake. Iceberg and Delta Lake were the top two contenders.

With AWS, the largest cloud provider, going out and building such a critical first class service centered entirely around Iceberg, they've gone out and stated very clearly: Iceberg is the winner.

When a cloud giant this big throws all their weight behind Iceberg, people take notice.

With this in mind, when given the choice between the two, who would bet on Delta Lake as their long term data lake file format that your whole company will build around? I certainly wouldn't.

## Overview

Amazon S3 Tables, a fully managed implementation of Apache Iceberg tables on Amazon S3. Apache Iceberg is an open-source table format designed to optimize the management and querying of large datasets in data lakes, enabling seamless scalability and performance.

### Amazon S3 Tables?

Amazon S3 Tables are Fully managed Apache Iceberg tables in S3 and designed to make it easier and more efficient to store and analyze tabular data, like daily purchase transactions, sensor readings, or ad impressions. This type of data is organized in rows and columns, similar to a database table.

With S3 Tables, your data is stored in a special type of S3 bucket called a table bucket, which organizes tables as subresources. These buckets support the Apache Iceberg format, allowing you to manage and query your data seamlessly.

You can use standard SQL to query these tables with popular tools like Amazon Athena, Amazon Redshift, and Apache Spark, making analytics straightforward and accessible. S3 Tables are built to improve query performance while keeping storage costs low.

### Why Amazon S3 Tables ?

Amazon S3 Tables combine the scalability, performance and manageability of a modern table storage system. By enhancing performance, ensuring table-level security, and optimizing storage costs, they address the core challenges of managing tabular data at scale, making them a powerful.

### Enhanced performance

3x faster query performance and up to 10x higher transactions per second compared to storing Iceberg tables in general purpose S3 buckets.

Automated Maintenance - It's Fully Managed !!!

You define a maintenance policy for an S3 table using the PutTableMaintenanceConfiguration API. The policy specifies the rules for tasks like compaction frequency, data expiration, or snapshot retention.

AWS automatically applies these policies at regular intervals or based on the conditions you specify.The maintenance processes are triggered without manual intervention, ensuring the table stays optimized.

### Seamless integration (Native AWS Integration)

Access advanced Iceberg analytics capabilities and query data using familiar AWS services like Amazon Athena, Redshift, and EMR through the S3 Tables preview integration with AWS Glue Data Catalog. S3 Tables is compatible with popular open source tools.

### Simplified security

Create tables as first-class AWS resources and apply permissions to easily govern access to them.

### Conclusion

AWS S3 Tables redefine how organizations manage and query Iceberg tables, combining the flexibility of open formats with the performance and ease of managed services. For data engineers and architects, this means less time spent on infrastructure and more time delivering insights.

## Links

- [New Amazon S3 Tables: Storage optimized for analytics workloads | AWS News Blog](https://aws.amazon.com/blogs/aws/new-amazon-s3-tables-storage-optimized-for-analytics-workloads/)
- [AWS re:Invent 2024 - What’s new with Amazon S3 (STG212) - YouTube](https://youtu.be/pbsIVmWqr2M?si=UYfb1GbqHUi2b3bi)
- [Amazon S3 Tables](https://aws.amazon.com/s3/features/tables/)
- [Amazon S3 Tables: A Game Changer in Analytics and Data Lake Space - DEV Community](https://dev.to/asankab/amazon-s3-tables-a-game-changer-in-analytics-and-data-lake-space-2mjo)
- [How to use New Amazon S3 Metadata and Query the S3 metadata in table buckets with EMR Spark 7 5 - YouTube](https://www.youtube.com/watch?v=HvWJdq7hDzY)
- [4-Step Guide to Create S3 Buckets & Deploy Iceberg PySpark Job with EMR 7.5 & Shell Scrip - YouTube](https://www.youtube.com/watch?v=uOO4nxiYJA4)
- [Amazon S3 Tables - Store Tabular Data in S3 | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=bLB_cl-u3jM)
- [Amazon S3 Metadata - Accelerate Data Discovery | Amazon Web Services - YouTube](https://www.youtube.com/watch?v=pWekT7Ic6VE)
- [Post from Soumil Shah - YouTube](https://www.youtube.com/channel/UC_eOodxvwS_H7x2uLQa-svw/community?lb=Ugkxk3cZ9CxtKYcvfdSkwwOMlHwR6KqHG68G)
