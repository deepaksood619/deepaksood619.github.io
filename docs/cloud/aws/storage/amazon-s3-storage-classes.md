# Amazon S3 Storage Classes

## General purpose - Amazon S3 Standard (S3 Standard)

S3 Standard offers high durability, availability, and performance object storage for frequently accessed data. Because it delivers low latency and high throughput, S3 Standard is appropriate for a wide variety of use cases, including cloud applications, dynamic websites, content distribution, mobile and gaming applications, and big data analytics.

### Key features

- General purpose storage for frequently accessed data
- Low latency and high throughput performance
- Designed to deliver 99.99% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99.9%

## Unknown or changing access - Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)

[**Amazon S3 Intelligent-Tiering (S3 Intelligent-Tiering)**](https://aws.amazon.com/s3/storage-classes/intelligent-tiering/) is the first cloud storage that automatically reduces your storage costs on a granular object level by automatically moving data to the most cost-effective access tier based on access frequency, without performance impact, retrieval fees, or operational overhead. S3 Intelligent-Tiering delivers milliseconds latency and high throughput performance for frequently, infrequently, and rarely accessed data in the Frequent, Infrequent, and Archive Instant Access tiers. You can use S3 Intelligent-Tiering as the default storage class for virtually any workload, especially data lakes, data analytics, new applications, and user-generated content.

For a small monthly object monitoring and automation charge, S3 Intelligent-Tiering monitors access patterns and automatically moves objects that have not been accessed to lower-cost access tiers. S3 Intelligent-Tiering automatically stores objects in three access tiers: one tier that is optimized for frequent access, a 40% lower-cost tier that is optimized for infrequent access, and a 68% lower-cost tier optimized for rarely accessed data. S3 Intelligent-Tiering monitors access patterns and moves objects that have not been accessed for 30 consecutive days to the Infrequent Access tier and after 90 days of no access to the Archive Instant Access tier. For data that does not require immediate retrieval, you can set up S3 Intelligent-Tiering to monitor and automatically move objects that aren’t accessed for 180 days or more to the Deep Archive Access tier to realize up to 95% in storage cost savings.

There are no retrieval charges in S3 Intelligent-Tiering. If an object in the Infrequent or Archive Instant Access tier is accessed later, it’s automatically moved back to the Frequent Access tier. If the object you’re retrieving is stored in the optional Deep Archive tiers, before you can retrieve the object, you must first restore a copy using RestoreObject.  For information about restoring archived objects, see [Restoring Archived Objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects.html). No additional tiering charges apply when objects are moved between access tiers within the S3 Intelligent-Tiering storage class.

### Key features

- Automatic cost savings for data with unknown or changing access patterns
- Frequent, Infrequent, and Archive Instant Access tiers have the same low-latency and high-throughput performance of S3 Standard
- The Infrequent Access tier saves up to 40% on storage costs
- The Archive Instant Access tier saves up to 68% on storage costs
- Opt-in asynchronous archive capabilities for objects that become rarely accessed
- Deep Archive Access tier has the same performance as Glacier Deep Archive and saves up to 95% for rarely accessed objects
- Designed to deliver 99.9% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99%
- Small monthly monitoring and automation charge
- No operational overhead, no lifecycle charges, no retrieval charges, and no minimum storage duration
- Objects smaller than 128KB can be stored in S3 Intelligent-Tiering but will always be charged at the Frequent Access tier rates, and are not charged the monitoring and automation charge.

## Amazon S3 Express One Zone Storage Class

Amazon S3 Express One Zone is a high-performance, single-Availability Zone storage class purpose-built to deliver consistent single-digit millisecond data access for your most frequently accessed data and latency-sensitive applications. S3 Express One Zone delivers data access speed up to 10x faster and request costs up to 50% lower than S3 Standard. While you have always been able to choose a specific AWS Region to store your S3 data, with S3 Express One Zone you can select a specific AWS Availability Zone within an AWS Region to store your data. You can choose to co-locate your storage and compute resources in the same Availability Zone to further optimize performance, which helps lower compute costs and run workloads faster. With S3 Express One Zone, data is stored in a different bucket type—an S3 directory bucket—which supports hundreds of thousands of requests per second. Additionally, you can use S3 Express One Zone with services such as [Amazon SageMaker Model Training](https://aws.amazon.com/sagemaker/train/), [Amazon Athena](https://aws.amazon.com/athena/), [Amazon EMR](https://aws.amazon.com/emr/), and [AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/catalog-and-crawler.html) to accelerate your machine learning and analytics workloads. With S3 Express One Zone, storage automatically scales up or down based on your consumption and need, and you no longer need to manage multiple storage systems for low-latency workloads.

### Key features

- High performance storage for your most frequently accessed data
- Consistent single-digit millisecond request latency
- Improve access speeds by 10x and reduce request costs by 50% compared to S3 Standard
- Select an AWS Availability Zone and have the option to co-locate storage and compute resources for even lower latency, with reduced processing time and more efficient use of compute resources contributing to lower overall total cost of ownership
- Accelerate analytics and ML workloads with AWS service integrations
- Scale to handle millions of requests per minute
- Optimized for large datasets with many small objects
- Use existing Amazon S3 APIs with different bucket type – directory buckets
- Designed to deliver 99.95% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99.9%

### How does the Amazon S3 Express One Zone storage class achieve high performance?

S3 Express One Zone uses a unique architecture to optimize for performance and deliver consistently low request latency. S3 Express One Zone stores data on high-performance hardware and its object protocol has been enhanced to streamline authentication and metadata overheads. Additionally, to further increase access speed and support hundreds of thousands of requests per second, data is stored in a new bucket type—an Amazon S3 directory bucket. With S3 Express One Zone, you can select a specific AWS Availability Zone within an AWS Region to store your data. You can choose to co-locate your storage and compute resources in the same Availability Zone to further optimize performance.

[Amazon S3 Express One Zone Storage Class](https://aws.amazon.com/s3/storage-classes/express-one-zone/)

[What is S3 Express One Zone? - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-one-zone.html)

[AWS IN ACTION : Working with Directory Buckets - YouTube](https://www.youtube.com/watch?v=n4mxQP-1a3U&ab_channel=CloudTuner)

[Unpacking Amazon S3 Express One Zone: Balancing Low Latency with Costs](https://www.vantage.sh/blog/amazon-s3-express-one-zone)

[S3 Express One Zone, not quite what I hoped for — Jack Vanlightly](https://jack-vanlightly.com/blog/2023/11/29/s3-express-one-zone-not-quite-what-i-hoped-for)

## Infrequent access

### Amazon S3 Standard-Infrequent Access (S3 Standard-IA)

S3 Standard-IA is for data that is accessed less frequently, but requires rapid access when needed. S3 Standard-IA offers the high durability, high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval charge. This combination of low cost and high performance make S3 Standard-IA ideal for long-term storage, backups, and as a data store for disaster recovery files. You can configure S3 storage classes at the object level, and a single bucket can contain objects stored across S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, and S3 One Zone-IA. You can also use S3 Lifecycle policies to automatically transition objects between storage classes without any application changes.

#### Key features

- Infrequently accessed data that needs millisecond access
- Same low latency and high throughput performance of S3 Standard
- Designed to deliver 99.9% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99%

### Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)

S3 One Zone-IA is for data that is accessed less frequently, but requires rapid access when needed. Unlike other S3 Storage Classes which store data in a minimum of three Availability Zones (AZs), S3 One Zone-IA stores data in a single AZ and costs 20% less than S3 Standard-IA. S3 One Zone-IA is ideal for customers who want a lower-cost option for infrequently accessed data but do not require the availability and resilience of S3 Standard or S3 Standard-IA. It’s a good choice for storing secondary backup copies of on-premises data or easily re-creatable data. You can also use it as cost-effective storage for data that is replicated from another AWS Region using S3 Cross-Region Replication.

S3 One Zone-IA offers the same high throughput, and low latency of S3 Standard, with a low per GB storage price and per GB retrieval charge. Using similar engineering designs as S3 Regional storage classes, S3 One Zone-IA also offers 11 nines of durability, but may be susceptible to data loss in the unlikely case of the loss or damage to all or part of an AWS Availability Zone. You can configure S3 storage classes at the object level, and a single bucket can contain objects stored across S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, and S3 One Zone-IA. You can also use S3 Lifecycle policies to automatically transition objects between storage classes without any application changes.

#### Key features

- Re-creatable infrequently accessed data
- Same low latency and high throughput performance of S3 Standard
- Designed to deliver 99.5% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99%

## Archive

### Amazon S3 Glacier Instant Retrieval

Amazon S3 Glacier Instant Retrieval is an archive storage class that delivers the lowest-cost storage for long-lived data that is rarely accessed and requires retrieval in milliseconds. With S3 Glacier Instant Retrieval, you can save up to 68% on storage costs compared to using the S3 Standard-Infrequent Access (S3 Standard-IA) storage class, when your data is accessed once per quarter. S3 Glacier Instant Retrieval delivers the fastest access to archive storage, with the same throughput and milliseconds access as the S3 Standard and S3 Standard-IA storage classes. S3 Glacier Instant Retrieval is ideal for archive data that needs immediate access, such as medical images, news media assets, or user-generated content archives. You can upload objects directly to S3 Glacier Instant Retrieval, or use S3 Lifecycle policies to transfer data from the S3 storage classes. For more information, visit the [**Amazon S3 Glacier Instant Retrieval page »**](https://aws.amazon.com/s3/storage-classes/glacier/instant-retrieval/)

#### Key features

- Long-lived data that is accessed a few times per year with instant retrievals
- Data retrieval in milliseconds with the same performance as S3 Standard
- Designed to deliver 99.9% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99%
- 128 KB minimum object size
- S3 PUT API for direct uploads to S3 Glacier Instant Retrieval, and S3 Lifecycle management for automatic migration of objects

### Amazon S3 Glacier Flexible Retrieval (Formerly S3 Glacier)

S3 Glacier Flexible Retrieval delivers low-cost storage, up to 10% lower cost (than S3 Glacier Instant Retrieval), for archive data that is accessed 1—2 times per year and is retrieved asynchronously. For archive data that does not require immediate access but needs the flexibility to retrieve large sets of data at no cost, such as backup or disaster recovery use cases, S3 Glacier Flexible Retrieval (formerly S3 Glacier) is the ideal storage class. S3 Glacier Flexible Retrieval delivers the most flexible retrieval options that balance cost with access times ranging from minutes to hours and with free bulk retrievals. It is an ideal solution for backup, disaster recovery, offsite data storage needs, and for when some data occasionally need to be retrieved in minutes, and you don’t want to worry about costs. S3 Glacier Flexible Retrieval is designed for 99.999999999% (11 nines) of data durability and 99.99% availability by redundantly storing data across multiple physically separated AWS Availability Zones in a given year. For more information, visit the [**Amazon S3 Glacier storage classes page »**](https://aws.amazon.com/s3/storage-classes/glacier/)

#### Key features

- Backup and archive data that is rarely accessed and low cost
- Designed to deliver 99.99% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99.9%
- Supports SSL for data in transit and encryption of data at rest
- Ideal for backup and disaster recovery use cases when large sets of data occasionally need to be retrieved in minutes, without concern for costs
- Configurable retrieval times, from minutes to hours, with free bulk retrievals
- S3 PUT API for direct uploads to S3 Glacier Flexible Retrieval, and S3 Lifecycle management for automatic migration of objects

### Amazon S3 Glacier Deep Archive

S3 Glacier Deep Archive is Amazon S3’s lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. It is designed for customers—particularly those in highly-regulated industries, such as financial services, healthcare, and public sectors—that retain data sets for 7—10 years or longer to meet regulatory compliance requirements. S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases, and is a cost-effective and easy-to-manage alternative to magnetic tape systems, whether they are on-premises libraries or off-premises services. S3 Glacier Deep Archive complements Amazon S3 Glacier, which is ideal for archives where data is regularly retrieved and some of the data may be needed in minutes. All objects stored in S3 Glacier Deep Archive are replicated and stored across at least three geographically-dispersed Availability Zones, protected by 99.999999999% of durability, and can be restored within 12 hours. For more information, visit the [**Amazon S3 Glacier storage classes page »**](https://aws.amazon.com/s3/storage-classes/glacier/)

#### Key features

- Archive data that is very rarely accessed and very low cost
- Designed to deliver 99.99% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99.9%
- Ideal alternative to magnetic tape libraries
- Retrieval time within 12 hours
- S3 PUT API for direct uploads to S3 Glacier Deep Archive, and S3 Lifecycle management for automatic migration of objects

## Performance across the S3 storage classes

|                                 | S3 Standard                                          | S3 Intelligent-Tiering*                                                  | S3 Express One Zone**                                           | S3 Standard-IA                                           | S3 One Zone-IA**                        | S3 Glacier - Instant Retrieval                                                | S3 Glacier Flexible Retrieval***                             | S3 Glacier -Deep Archive***                                 |
| ------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| Use cases                       | General purpose storage for frequently accessed data | Automatic cost savings for data with unknown or changing access patterns | High performance storage for your most frequently accessed data | Infrequently accessed data that needs millisecond access | Re-creatable infrequently accessed data | Long-lived data that is accessed a few times per year with instant retrievals | Backup and archive data that is rarely accessed and low cost | Archive data that is very rarely accessed and very low cost |
| First byte latency              | milliseconds                                         | milliseconds                                                             | single-digit milliseconds                                       | milliseconds                                             | milliseconds                            | milliseconds                                                                  | minutes or hours                                             | hours                                                       |
| Designed for availability       | 99.99%                                               | 99.9%                                                                    | 99.95%                                                          | 99.9%                                                    | 99.5%                                   | 99.9%                                                                         | 99.99%                                                       | 99.99%                                                      |
| Availability SLA                | 99.9%                                                | 99%                                                                      | 99.9%                                                           | 99%                                                      | 99%                                     | 99%                                                                           | 99.9%                                                        | 99.9%                                                       |
| Availability Zones              | ≥3                                                   | ≥3                                                                       | 1                                                               | ≥3                                                       | 1                                       | ≥3                                                                            | ≥3                                                           | ≥3                                                          |
| Minimum storage duration charge | N/A                                                  | N/A                                                                      | 1 hour                                                          | 30 days                                                  | 30 days                                 | 90 days                                                                       | 90 days                                                      | 180 days                                                    |
| Retrieval charge                | N/A                                                  | N/A                                                                      | N/A                                                             | per GB retrieved                                         | per GB retrieved                        | per GB retrieved                                                              | per GB retrieved                                             | per GB retrieved                                            |
| Lifecycle transitions           | Yes                                                  | Yes                                                                      | No                                                              | Yes                                                      | Yes                                     | Yes                                                                           | Yes                                                          | Yes                                                         |

#### Durability

Amazon S3 provides the most durable storage in the cloud. Based on its unique architecture, S3 is designed to exceed **99.999999999% (11 nines)** data durability. Additionally, S3 stores data redundantly across a minimum of 3 Availability Zones by default, providing built-in resilience against widespread disaster. Customers can store data in a single AZ to minimize storage cost or latency, in multiple AZs for resilience against the permanent loss of an entire data center, or in multiple AWS Regions to meet geographic resilience requirements.

## Code

### Directly upload a file to STANDARD_IA storage class

```python
# https://stackoverflow.com/questions/46288550/how-to-use-boto3-to-write-to-s3-standard-infrequent-access

import boto3

client = boto3.client('s3')

client.upload_file(
    Filename = '/tmp/foo.txt',
    Bucket = 'my-bucket',
    Key = 'foo.txt',
    ExtraArgs = {
      'StorageClass': 'ONEZONE_IA'
    }
)

StorageClass='STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|'ONEZONE_IA'|'INTELLIGENT_TIERING'|'GLACIER'|'DEEP_ARCHIVE'|'OUTPOSTS',

# using command line

aws s3api put-object --profile <profile-name> --bucket <bucket-name> --storage-class ONEZONE_IA --key <object-key> --body <object-data>
```

[generate\_presigned\_url put\_object StorageClass: SignatureDoesNotMatch · Issue #1824 · boto/boto3 · GitHub](https://github.com/boto/boto3/issues/1824)
