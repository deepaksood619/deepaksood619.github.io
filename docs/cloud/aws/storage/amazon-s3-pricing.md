---
slug: /cloud/aws/storage/amazon-s3-pricing
title: Amazon S3 Pricing
description: Discover Amazon S3 pricing options, including costs for Standard, Intelligent-Tiering, Glacier, and more, tailored for your data storage needs.
created: 2024-06-04
last_update: 2026-06-09
---
- S3 Standard (Frequently accessed data) - $0.023 per GB
- S3 Intelligent-Tiering - $0.023per GB
- Amazon S3 Express One Zone - $0.16 per GB
- S3 Standard-IA (Infrequent Access) (Long-lived, infrequently accessed data) - $0.0125per GB (54% cheaper than standard)
- S3 One Zone-IA (Long-lived, infrequent, but rapid access) - $0.01 per GB (56% cheaper than standard)
- S3 Glacier - $0.004per GB (312% cheap)
- S3 Glacier Deep Archive (Archiving rarely accessed data) - $0.00099per GB (1262% cheap)
- Amazon S3 Glacier Instant Retrieval
- S3 Outposts

Monitoring and Automation, All Storage / Month (Objects > 128 KB) - $0.0025per 1,000 objects

https://aws.amazon.com/s3/storage-classes

https://aws.amazon.com/s3/storage-classes/intelligent-tiering

S3 Intelligent-Tiering is the only cloud storage class that delivers automatic storage cost savings when data access patterns change, without performance impact or operational overhead. The Amazon S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective access tier when access patterns change. For a small monthly object monitoring and automation charge, S3 Intelligent-Tiering monitors access patterns and automatically moves objects that have not been accessed to lower-cost access tiers.

S3 Intelligent-Tiering is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. You can use S3 Intelligent-Tiering as the default storage class for virtually any workload, especially data lakes, data analytics, new applications, and user-generated content.

## Pricing

[Amazon S3 Simple Storage Service Pricing - Amazon Web Services](https://aws.amazon.com/s3/pricing/?nc=sn&loc=4)

| **Storage Class**                 | **Data Durability**    | **Cost Reduction (Approx. vs Standard)** | **Availability SLA** | **Retrieval Response Time**                                   | **Minimum Storage Duration** |
| --------------------------------- | ---------------------- | ---------------------------------------- | -------------------- | ------------------------------------------------------------- | ---------------------------- |
| **S3 Standard**                   | 99.999999999% (11 9s)  | Baseline ($0.023/GB)                     | 99.99%               | Milliseconds                                                  | None                         |
| **S3 Intelligent-Tiering**        | 99.999999999% (11 9s)  | Up to 68% (Auto-optimized)               | 99.9%                | Milliseconds                                                  | None                         |
| **S3 Standard-IA**                | 99.999999999% (11 9s)  | ~45% savings                             | 99.9%                | Milliseconds                                                  | 30 days                      |
| **S3 One Zone-IA**                | 99.999999999% (11 9s)* | ~56% savings                             | 99.5%                | Milliseconds                                                  | 30 days                      |
| **S3 Glacier Instant Retrieval**  | 99.999999999% (11 9s)  | ~80% savings                             | 99.9%                | Milliseconds                                                  | 90 days                      |
| **S3 Glacier Flexible Retrieval** | 99.999999999% (11 9s)  | ~84% savings                             | 99.9%                | 1–5 mins (Expedited), 3–5 hours (Standard), 5–12 hours (Bulk) | 90 days                      |
| **S3 Glacier Deep Archive**       | 99.999999999% (11 9s)  | ~95% savings                             | 99.9%                | 12 hours (Standard), 48 hours (Bulk)                          | 180 days                     |

***Important Exception for S3 One Zone-IA:** While it is engineered to meet 11 9s of durability, it does so **within a single Availability Zone**. If that specific facility experiences a major physical disaster (like a flood or fire), data stored in this class could be permanently destroyed. It is highly cost-effective but should only be used for reproducible data, such as secondary image thumbnails or easily regenerated build artifacts.

**Data Retrieval Fees (The Break-Even Point)**

- **S3 Standard:** You pay ~$0.023 per GB/month for storage. Retrieving data is **free**.
- **Glacier Instant Retrieval:** You pay only ~$0.004 per GB/month for storage. However, you pay a **$0.03 per GB retrieval fee**.

**S3 TCO Calculator**

|Cost Component|S3 Standard|Glacier Instant Retrieval|
|---|---|---|
|Capacity Managed|10,240 GB|10,240 GB|
|Monthly Storage Fee|$235.52|$40.96|
|Data Retrieval Fee|$0.00|$46.08|
|Request Fees|$0.13|$3.15|
|Total Monthly TCO|$235.65|$90.19|

| Storage Class                                                                                                                               | Storage pricing           |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| **S3 Standard** - General purpose storage for any type of data, typically used for frequently accessed data                                 |                           |
| First 50 TB / Month                                                                                                                         | $0.025 per GB             |
| Next 450 TB / Month                                                                                                                         | $0.024 per GB             |
| Over 500 TB / Month                                                                                                                         | $0.023 per GB             |
| **S3 Intelligent - Tiering** * - Automatic cost savings for data with unknown or changing access patterns                                   |                           |
| Monitoring and Automation, All Storage / Month (Objects > 128 KB)                                                                           | $0.0025 per 1,000 objects |
| Frequent Access Tier, First 50 TB / Month                                                                                                   | $0.025 per GB             |
| Frequent Access Tier, Next 450 TB / Month                                                                                                   | $0.024 per GB             |
| Frequent Access Tier, Over 500 TB / Month                                                                                                   | $0.023 per GB             |
| Infrequent Access Tier, All Storage / Month                                                                                                 | $0.0138 per GB            |
| Archive Instant Access Tier, All Storage / Month                                                                                            | $0.005 per GB             |
| **S3 Intelligent - Tiering** * - Optional asynchronous Archive Access tiers                                                                 |                           |
| Archive Access Tier, All Storage / Month                                                                                                    | $0.0045 per GB            |
| Deep Archive Access Tier, All Storage / Month                                                                                               | $0.002 per GB             |
| **S3 Standard - Infrequent Access** ** - For long lived but infrequently accessed data that needs millisecond access                        | $0.0138 per GB            |
| **S3 Express One Zone** - High-performance storage for your most frequently accessed data                                                   | N/A per GB                |
| **S3 Glacier Instant Retrieval** *** - For long-lived archive data accessed once a quarter with instant retrieval in milliseconds           | $0.005 per GB             |
| **S3 Glacier Flexible Retrieval** *** - For long-term backups and archives with retrieval option from 1 minute to 12 hours                  | $0.0045 per GB            |
| **S3 Glacier Deep Archive** *** - For long-term data archiving that is accessed once or twice in a year and can be restored within 12 hours | $0.002 per GB             |
| **S3 One Zone - Infrequent Access** ** - For re-creatable infrequently accessed data that needs millisecond access                          | $0.011 per GB             |

#### Summary

| Storage Class                   | Costs          | 500 GB | 2 TB  | % Cheaper from standard |
| ------------------------------- | -------------- | ------ | ----- | ----------------------- |
| S3 Standard                     | $0.025 per GB  | $12.5  | $50   | 100%                    |
| S3 Standard - Infrequent Access | $0.0138 per GB | $6.9   | $27.6 | 44.8%                   |
| S3 Glacier Flexible Retrieval   | $0.0045 per GB | $2.25  | $9    | 82%                     |
| S3 Glacier Deep Archive         | $0.002 per GB  | $1     | $4    | 92%                     |

*All costs are monthly costs*

There are no S3 data transfer charges when data is transferred in from the internet. Also with **S3TA (S3 Transfer Acceleration), you pay only for transfers that are accelerated.** Therefore you do not need to pay any transfer charges for the image upload if S3TA did not result in an accelerated transfer.

### Amazon S3 Transfer Acceleration (S3TA)

Amazon S3 Transfer Acceleration (S3TA) can speed up content transfers to and from Amazon S3 by as much as 50-500% for long-distance transfer of larger objects. Customers who have either web or mobile applications with widespread users or applications hosted far away from their S3 bucket can experience long and variable upload and download speeds over the Internet. S3 Transfer Acceleration (S3TA) reduces the variability in Internet routing, congestion, and speeds that can affect transfers, and logically shortens the distance to S3 for remote applications.

S3TA improves transfer performance by routing traffic through Amazon CloudFront’s globally distributed Edge Locations and over AWS backbone networks, and by using network protocol optimizations.

For applications interacting with your Amazon S3 buckets through the S3 API from outside of your bucket’s region, S3TA helps avoid the variability in Internet routing and congestion. It does this by routing your uploads and downloads over the AWS global network infrastructure, so you get the benefit of AWS network optimizations.

### Storage

The volume of storage billed in a month is based on the average storage used throughout the month. This includes all object data and metadata stored in buckets that you created under your AWS account. We measure your storage usage in "TimedStorage-ByteHrs," which are added up at the end of the month to generate your monthly charges.

The rate you're charged depends on your objects' size, how long you stored the objects during the month, and the storage class - S3 Standard, S3 Intelligent-Tiering, S3 Standard - Infrequent Access, S3 One Zone - Infrequent Access, S3 Glacier, and S3 Glacier Deep Archive, and Reduced Redundancy Storage (RRS). You pay a monthly monitoring and automation fee per object stored in the S3 Intelligent-Tiering storage class to monitor access patterns and move objects between access tiers in S3 Intelligent-Tiering.

There are per-request ingest fees when using PUT, COPY, or lifecycle rules to move data into any S3 storage class. Consider the ingest or transition cost before moving objects into any storage class.

If you have objects that are **smaller than 1GB** or if the data set is less than 1GB in size, you should consider using **Amazon CloudFront's PUT/POST commands** for optimal performance.

### Data Transfer in / out

| PUT, COPY, POST, LIST requests (per 1,000 requests) | GET, SELECT, and all other requests (per 1,000 requests) | Lifecycle Transition requests (per 1,000 requests) |
| --------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------- |
| S3 Standard                                         | $0.005                                                   | $0.0004                                            |

### You pay for all bandwidth into and out of Amazon S3, except for the following

- Data transferred in from the internet.
- Data transferred out to an Amazon Elastic Compute Cloud (Amazon EC2) instance, when the instance is in the same AWS Region as the S3 bucket.
- Data transferred out to Amazon CloudFront (CloudFront).

### Data Transfer OUT From Amazon S3 To Internet

| Up to 1 GB / Month          | $0.00 per GB   |
|-----------------------------|-----------------|
| Next 9.999 TB / Month       | $0.1093 per GB |
| Next 40 TB / Month          | $0.085 per GB  |
| Next 100 TB / Month         | $0.082 per GB  |
| Greater than 150 TB / Month | $0.08 per GB   |
