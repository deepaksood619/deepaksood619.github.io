# Amazon S3

S3: More than 235 distributed microservices

- Scalable Storage in the Cloud
- Storing big file / video
- Eleven 9's of durability (99.999999999%) and four 9's of availability (99.99%)
    - Markov-chain model for reliability evaluation
- $23/TB/month
- 5 TB single object limit
- 6 Copies of 1 object are maintained in >=3 Az's
- You can send [3,500 PUT/COPY/POST/DELETE and 5,500 GET/HEAD requests per second per partitioned prefix](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html) in an S3 bucket. When you have an increased request rate to your bucket, Amazon S3 might return **503 Slow Down errors** while it scales to support the request rate. This scaling process is called **partitioning**.
- Pass through uploads

### Pre signed URL (max expiry 7 days)

`aws s3 presign s3://bigbet90/index.html --expires-in 90`

Generating presigned URLs is actually done locally, without requiring a call to AWS. This is because all necessary information (Bucket, Key, Secret Key) is known locally and can generate the signature.

https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html

[Working with presigned URLs - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html)

https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-presigned-urls.html

https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html

## Introduction

Amazon S3 is an object storage model that is built to store and retrieve any amount of data from any place such as websites, mobile apps, corporate applications, and data from IoT sensors or devices. Amazon S3 is the most supported storage platform available, with the largest ecosystem.

## Buckets

There are two types of Amazon S3 buckets, general purpose buckets and directory buckets.

### General purpose buckets

General purpose buckets are the original S3 bucket type and are recommended for most use cases and access patterns. General purpose buckets also allow objects that are stored across all storage classes, except S3 Express One Zone.

### Directory buckets

Directory buckets use the S3 Express One Zone storage class, which is recommended if your application is performance sensitive and benefits from single-digit millisecond `PUT` and `GET` latencies.

Directory buckets are used for workloads or performance-critical applications that require consistent single-digit millisecond latency. Directory buckets organize data hierarchically into directories as opposed to the flat storage structure of general purpose buckets. There aren't prefix limits for directory buckets, and individual directories can scale horizontally.

Directory buckets use the S3 Express One Zone storage class, which stores data across multiple devices within a single Availability Zone but doesn't store data redundantly across Availability Zones. When you create a directory bucket, we recommend that you specify an AWS Region and an Availability Zone that's local to your Amazon EC2, Amazon Elastic Kubernetes Service, or Amazon Elastic Container Service (Amazon ECS) compute instances to optimize performance.

Directory buckets store objects in the S3 Express One Zone storage class, which provides faster processing of data within a single Availability Zone. For more information, see Directory buckets.

You can create up to 10 directory buckets in each of your AWS accounts, with no limit on the number of objects that you can store in a bucket. Your bucket quota is applied to each Region in your AWS account.

**S3 Express One Zone** - High-performance storage for your most frequently accessed data - $0.16 per GB

[Directory buckets - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html)

## Usage

In addition to object storing, Amazon S3 is particularly well suited for hosting web content that requires bandwidth along with high demand. S3 is also used to host entire static websites and storage for images, videos, and client-side scripts in formats such as JavaScript. You can easily move cold data (data that is not frequently accessed) to Amazon Glacier using lifecycle management rules on data stored in S3 (which we further in a separate topic below).

## Durability & availability

Amazon S3 runs upon the world's largest global cloud infrastructure, and was built from the ground up to deliver a customer promise of 99.999999999% durability. Data is automatically distributed across a minimum of three physical facilities that are geographically separated within an AWS Region, and also automatically replicates data to any other AWS Region.

## Security

Amazon S3 is a highly secure storage service. S3 is the only cloud storage platform that supports three different forms of encryption, including server-side-encryption and client-side-encryption. You can manage access to Amazon S3 by granting other AWS accounts and users permissions to perform resource operations by writing an access policy.

## AWS Consistency model

Amazon S3 delivers [strong read-after-write consistency](https://aws.amazon.com/blogs/aws/amazon-s3-update-strong-read-after-write-consistency/) automatically for all applications, without changes to performance or availability, without sacrificing regional isolation for applications, and at no additional cost. With strong consistency, S3 simplifies the migration of on-premises analytics workloads by removing the need to make changes to applications, and reduces costs by removing the need for extra infrastructure to provide strong consistency.

After a successful write of a new object, or an overwrite or delete of an existing object, any subsequent read request immediately receives the latest version of the object. S3 also provides strong consistency for list operations, so after a write, you can immediately perform a listing of the objects in a bucket with any changes reflected.

[Amazon S3 Strong Consistency](https://aws.amazon.com/s3/consistency/)

[Amazon S3 now delivers strong read-after-write consistency automatically for all applications](https://aws.amazon.com/about-aws/whats-new/2020/12/amazon-s3-now-delivers-strong-read-after-write-consistency-automatically-for-all-applications)

[Amazon S3 Update - Strong Read-After-Write Consistency | AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-s3-update-strong-read-after-write-consistency/)

## Performance

Your applications can easily achieve thousands of transactions per second in request performance when uploading and retrieving storage from Amazon S3. Amazon S3 automatically scales to high request rates. For example, your application can achieve at least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second per [prefix](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#keyprefix) in a bucket. There are no limits to the number of prefixes in a bucket. You can increase your read or write performance by parallelizing reads. For example, if you create 10 prefixes in an Amazon S3 bucket to parallelize reads, you could scale your read performance to 55,000 read requests per second.

Some data lake applications on Amazon S3 scan millions or billions of objects for queries that run over petabytes of data. These data lake applications achieve single-instance transfer rates that maximize the network interface use for their [Amazon EC2](https://docs.aws.amazon.com/ec2/index.html) instance, which can be up to 100 Gb/s on a single instance. These applications then aggregate throughput across multiple instances to get multiple terabits per second.

Other applications are sensitive to latency, such as social media messaging applications. These applications can achieve consistent small object latencies (and first-byte-out latencies for larger objects) of roughly 100-200 milliseconds.

Other AWS services can also help accelerate performance for different application architectures. For example, if you want higher transfer rates over a single HTTP connection or single-digit millisecond latencies, use [Amazon CloudFront](https://docs.aws.amazon.com/cloudfront/index.html) or [Amazon ElastiCache](https://docs.aws.amazon.com/elasticache/index.html) for caching with Amazon S3.

Additionally, if you want fast data transport over long distances between a client and an S3 bucket, use [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html). Transfer Acceleration uses the globally distributed edge locations in CloudFront to accelerate data transport over geographical distances. If your Amazon S3 workload uses server-side encryption with AWS Key Management Service (SSE-KMS), see [AWS KMS Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html) in the AWS Key Management Service Developer Guide for information about the request rates supported for your use case.

https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html

https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance-design-patterns.html

## Virtual hosting of buckets

Virtual hosting is the practice of serving multiple websites from a single web server. One way to differentiate sites is by using the apparent hostname of the request instead of just the path name part of the URI. An ordinary Amazon S3 REST request specifies a bucket by using the first slash-delimited component of the Request-URI path. Or, you can use Amazon S3 virtual hosting to address a bucket in a REST API call by using the HTTPHostheader. In practice, Amazon S3 interpretsHostas meaning that most buckets are automatically accessible for limited types of requests athttps://bucketname.s3.Region.amazonaws.com. For a complete list of Amazon S3 Regions and endpoints, see [Amazon S3 Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html) in theAWS General Reference.

Virtual hosting also has other benefits. By naming your bucket after your registered domain name and by making that name a DNS alias for Amazon S3, you can completely customize the URL of your Amazon S3 resources, for example,http://my.bucketname.com. You can also publish to the "root directory" of your bucket's virtual server. This ability can be important because many existing applications search for files in this standard location. For example, favicon.ico, robots.txt, crossdomain.xmlare all expected to be found at the root.

## Path-Style Requests (deprecated 30 sep 2020)

https://s3.Region.amazonaws.com/bucket-name/key_name

## Virtual Hosted-Style Requests

https://bucket-name.s3.Region.amazonaws.com/key_name

https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html

https://aws.amazon.com/blogs/aws/amazon-s3-path-deprecation-plan-the-rest-of-the-story

## S3 Select and Glacier Select

Amazon S3 Select does not support whole-object compression for Parquet objects.

https://aws.amazon.com/blogs/aws/s3-glacier-select

https://docs.aws.amazon.com/AmazonS3/latest/dev/selecting-content-from-objects.html

https://docs.aws.amazon.com/AmazonS3/latest/API/API_SelectObjectContent.html

[Amazon S3 Select improves query performance by up to 9x when using Trino](https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-s3-select-improves-query-performance-trino/)

```python
import boto3
s3 = boto3.client('s3', aws_access_key_id = 'XXX', aws_secret_access_key = 'XXX')

r = s3.select_object_content(
        Bucket='stashfin-migration-data',
        # Key='rds/equifax_raw_response/st_comment.part_00000',
        Key='rds/equifax_raw_response/st_comment_escaped.part_00000',
        # Key='rds/equifax_raw_response/equifax_raw_response_2019-10-01_2019-10-31.part_00000',
        # Key='rds/equifax_raw_response/join_test_1000.part_00000',
        ExpressionType='SQL',
        # Expression="select * from s3object s LIMIT 100",
        Expression="select * from s3object s",
        InputSerialization = {'CSV': {"FileHeaderInfo": "NONE", "FieldDelimiter": ",", "RecordDelimiter": "\n", "AllowQuotedRecordDelimiter": True, "QuoteCharacter": "\"", "QuoteEscapeCharacter": "\\"}},
        OutputSerialization = {'CSV': {}}
)

for event in r['Payload']:
    if 'Records' in event:
        records = event['Records']['Payload'].decode('utf-8')
        print(records)
    elif 'Stats' in event:
        statsDetails = event['Stats']['Details']
        print("Stats details bytesScanned: ")
        print(statsDetails['BytesScanned'])
        print("Stats details bytesProcessed: ")
        print(statsDetails['BytesProcessed'])
```

## Object Lifecycle Management

To manage your objects so that they are stored cost effectively throughout their lifecycle, configure their lifecycle. A lifecycle configuration is a set of rules that define actions that Amazon S3 applies to a group of objects.

There are two types of actions:

- **Transition actions -** Define when objects transition to another [storage class](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html). For example, you might choose to transition objects to the STANDARD_IA storage class 30 days after you created them, or archive objects to the S3 Glacier storage class one year after creating them.
- **Expiration actions -** Define when objects expire. Amazon S3 deletes expired objects on your behalf.

Amazon S3 runs lifecycle rules once every day. After the first time Amazon S3 runs the rules, all objects eligible for expiration are marked for deletion. You're no longer charged for objects that are marked for deletion. It can take a few days for the rules to run until the bucket is empty. This is because expiring object versions and cleaning up delete markers are asynchronous steps.

https://aws.amazon.com/premiumsupport/knowledge-center/s3-empty-bucket-lifecycle-rule

https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html

https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html

[Configuring a bucket lifecycle configuration to delete incomplete multipart uploads - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html)

[removing expired delete markers, how does it work? | AWS re:Post](https://repost.aws/questions/QUK1eCj2OjT3mSOJbendDYWw/removing-expired-delete-markers-how-does-it-work)

![S3 Lifecycle policies](../../../media/Screenshot%202025-09-27%20at%2011.28.51%20PM.jpg)

### Minimum days for transition from S3 Standard or S3 Standard-IA to S3 Standard-lA or S3 One Zone-IA

Before you transition objects from the S3 Standard or S3 Standard-IA storage classes to S3 Standard-IA or S3 One Zone-lA, you must store them **at least 30 days in the S3 Standard storage class**. For example, you cannot create a Lifecycle rule to transition objects to the S3 Standard-lA storage class one day after you create them. Amazon S3 doesn't transition objects within the first 30 days because newer objects are often accessed more frequently or deleted sooner than is suitable for S3 Standard-IA or S3 One Zone-IA storage.

Similarly, if you are transitioning noncurrent objects (in versioned buckets), you can transition only objects that are at least 30 days noncurrent to S3 Standard-lA or S3 One Zone-IA storage.

### Deleting huge amount of objects

To delete an AWS S3 bucket with 500TB of data, the fastest and most cost-effective solution would be to use the S3 Lifecycle configuration.

[Deleting a S3 bucket of size 500 TB | AWS re:Post](https://repost.aws/questions/QU5FKQm2XFSaCfNyYKHfzbRw/deleting-a-s3-bucket-of-size-500-tb)

## When should you use amazon S3

- **Good use cases**
    - When you need to write once, read many times
    - Spiky data access
    - Large number of users and diverse amounts of content
    - Growing data sets
- **Not ideal use cases**
    - Block storage requirements
    - Frequently changing data
    - Long-term archival storage

## S3 Storage Lens

https://aws.amazon.com/s3/storage-analytics-insights

| S3 Storage Lens free metrics | $0.00 |
|-|-|
| S3 Storage Lens advanced metrics and recommendations† | $0.20per million objects monitored per month |

† For S3 Storage Lens advanced metrics and recommendations, you will be charged object monitoring charges for each Storage Lens dashboard used. The Storage Lens advanced metrics and recommendations pricing includes 15-months data retention, 35 additional metrics across 4 categories (**activity, advanced cost optimization, advanced data protection, and detailed status code metrics**), **prefix-level aggregation, and CloudWatch metrics support**.

### Amazon S3 analytics – Storage Class Analysis

S3 Analytics Storage Class Analysis - $0.10 per million objects monitored per month

By using Amazon S3 analytics _Storage Class Analysis_ you can analyze storage access patterns to help you decide when to transition the right data to the right storage class. This new Amazon S3 analytics feature observes data access patterns to help you determine when to transition less frequently accessed STANDARD storage to the STANDARD_IA (IA, for infrequent access) storage class.

[Amazon S3 analytics – Storage Class Analysis - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/analytics-storage-class.html)

### Access Analyzer

[Using Amazon S3 server access logs to identify requests - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-s3-access-logs-to-identify-requests.html)

[Reviewing bucket access using IAM Access Analyzer for S3 - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-analyzer.html)

## Amazon S3 Replication

Amazon Simple Storage Service (S3) Replication is an elastic, fully managed, low cost feature that replicates objects between buckets. S3 Replication offers the most flexibility and functionality in cloud storage, giving you the controls you need to meet your data sovereignty and other business needs.

With Amazon S3 Replication, you can configure Amazon S3 to automatically replicate S3 objects across different AWS Regions by using S3 Cross-Region Replication (CRR) or between buckets in the same AWS Region by using S3 Same-Region Replication (SRR). S3 Replication offers the flexibility of replicating to multiple destination buckets in the same, or different AWS Regions. **S3 Replication supports two-way replication between two or more buckets in the same or different AWS Regions.** While live replication like CRR and SRR automatically replicates newly uploaded objects as they are written to your bucket, S3 Batch Replication allows you to replicate existing objects. You can use S3 Batch Replication to backfill a newly created bucket with existing objects, retry objects that were previously unable to replicate, migrate data across accounts, or add new buckets to your data lake. Customers needing a predictable replication time backed by a Service Level Agreement (SLA) can use Replication Time Control (RTC) to replicate objects in less than 15 minutes.

Amazon S3 Replication also provides detailed metrics and notifications to monitor the status of object replication between buckets. You can monitor replication progress by tracking bytes pending, operations pending, replication latency, and operations failed replication using the S3 console or Amazon CloudWatch. You can also set up S3 Event Notifications to receive replication failure notifications to quickly diagnose and correct configuration issues. S3 Replication metrics and notifications helps you closely monitor replication progress. To learn more, visit Monitoring progress with replication metrics and Amazon S3 event notifications.

[S3 Replication - Object Storage Features – Amazon S3](https://aws.amazon.com/s3/features/replication/)

[Replicating objects within and across Regions - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html)

## Versioning

Versioning in Amazon S3 is a means of keeping multiple variants of an object in the same bucket. You can use the S3 Versioning feature to preserve, retrieve, and restore every version of every object stored in your buckets. With versioning you can recover more easily from both unintended user actions and application failures. After versioning is enabled for a bucket, if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all of those objects.

Versioning-enabled buckets can help you recover objects from accidental deletion or overwrite. For example, if you delete an object, Amazon S3 inserts a delete marker instead of removing the object permanently. The delete marker becomes the current object version. If you overwrite an object, it results in a new object version in the bucket. You can always restore the previous version. For more information, see [Deleting object versions from a versioning-enabled bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeletingObjectVersions.html).

By default, S3 Versioning is disabled on buckets, and you must explicitly enable it.

Buckets can be in one of three states:

- Unversioned (the default)
- Versioning-enabled
- Versioning-suspended

After you version-enable a bucket, it can never return to an unversioned state. But you can suspend versioning on that bucket.

If you have an object expiration lifecycle policy in your unversioned bucket and you want to maintain the same permanent delete behavior when you enable versioning, you must add a noncurrent expiration policy. The noncurrent expiration lifecycle policy manages the deletes of the noncurrent object versions in the version-enabled bucket. (A version-enabled bucket maintains one current, and zero or more noncurrent, object versions.)

https://www.aws.training/Details/eLearning?id=71251

https://aws.amazon.com/blogs/compute/build-a-serverless-private-url-shortener

## TransactionManager (Speeds up s3 transfers)

https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/examples-s3-transfermanager.html

https://docs.aws.amazon.com/code-samples/latest/catalog/python-s3-file_transfer-demo_file_transfer.py.html

## Glacier Deep Archieve

[Using Amazon S3 Glacier with the AWS CLI - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-glacier.html)

```bash
aws glacier help
```

#### Glacier Vault

A vault is a container for storing archives. When you create a vault, you specify a vault name and the AWS Region in which you want to create the vault

## Storage Browser for Amazon S3

- [Connect users to data through your apps with Storage Browser for Amazon S3 | AWS News Blog](https://aws.amazon.com/blogs/aws/connect-users-to-data-through-your-apps-with-storage-browser-for-amazon-s3/)
- [Storage Browser for Amazon S3](https://aws.amazon.com/s3/features/storage-browser/)

## Retention periods

A _retention period_ protects an object version for a fixed amount of time. When you place a retention period on an object version, Amazon S3 stores a timestamp in the object version's metadata to indicate when the retention period expires. After the retention period expires, the object version can be overwritten or deleted.

You can place a retention period explicitly on an individual object version or on a bucket's properties so that it applies to all objects in the bucket automatically. When you apply a retention period to an object version explicitly, you specify a _Retain Until Date_ for the object version. Amazon S3 stores this date in the object version's metadata.

You can also set a retention period in a bucket's properties. When you set a retention period on a bucket, you specify a duration, in either days or years, for how long to protect every object version placed in the bucket. When you place an object in the bucket, Amazon S3 calculates a _Retain Until Date_ for the object version by adding the specified duration to the object version's creation timestamp. The object version is then protected exactly as though you explicitly placed an individual lock with that retention period on the object version.

**Note -** When you `PUT` an object version that has an explicit individual retention mode and period in a bucket, the object version's individual Object Lock settings override any bucket property retention settings.

Like all other Object Lock settings, retention periods apply to individual object versions. Different versions of a single object can have different retention modes and periods.

## Object Locks

S3 Object Lock can help prevent Amazon S3 objects from being deleted or overwritten for a fixed amount of time or indefinitely. Object Lock uses a _write-once-read-many_ (WORM) model to store objects. You can use Object Lock to help meet regulatory requirements that require WORM storage, or to add another layer of protection against object changes or deletion.

Object Lock provides two ways to manage object retention: _retention periods_ and _legal holds_. An object version can have a retention period, a legal hold, or both.

### Retention modes

S3 Object Lock provides two retention modes that apply different levels of protection to your objects:

- Compliance mode
	- In _compliance_ mode, a protected object version can't be overwritten or deleted by any user, including the root user in your AWS account. When an object is locked in compliance mode, its retention mode can't be changed, and its retention period can't be shortened. Compliance mode helps ensure that an object version can't be overwritten or deleted for the duration of the retention period.
	- The only way to delete an object under the compliance mode before its retention date expires is to delete the associated AWS account.
- Governance mode
	- In _governance_ mode, users can't overwrite or delete an object version or alter its lock settings unless they have special permissions. With governance mode, you protect objects against being deleted by most users, but you can still grant some users permission to alter the retention settings or delete the objects if necessary. You can also use governance mode to test retention-period settings before creating a compliance-mode retention period.

### Legal Holds

With Object Lock, you can also place a _legal hold_ on an object version. Like a retention period, a legal hold prevents an object version from being overwritten or deleted. However, a legal hold doesn't have an associated fixed amount of time and remains in effect until removed. Legal holds can be freely placed and removed by any user who has the `s3:PutObjectLegalHold` permission.

Legal holds are independent from retention periods. Placing a legal hold on an object version doesn't affect the retention mode or retention period for that object version.

### Best practices for using S3 Object Lock

Consider using _Governance mode_ if you want to protect objects from being deleted by most users during a pre-defined retention period, but at the same time want some users with special permissions to have the flexibility to alter the retention settings or delete the objects.

Consider using _Compliance mode_ if you never want any user, including the root user in your AWS account, to be able to delete the objects during a pre-defined retention period. You can use this mode in case you have a requirement to store compliant data.

You can use _Legal Hold_ when you are not sure for how long you want your objects to stay immutable. This could be because you have an upcoming external audit of your data and want to keep objects immutable till the audit is complete. Alternately, you may have an ongoing project utilizing a dataset that you want to keep immutable until the project is complete.

[Locking objects with Object Lock - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html)

[Maintaining object immutability by automatically extending Amazon S3 Object Lock retention periods | AWS Storage Blog](https://aws.amazon.com/blogs/storage/maintaining-object-immutability-by-automatically-extending-amazon-s3-object-lock-retention-periods/)

## Links

- [Stanislav Kozlovski on LinkedIn: AWS S3 Deep Dive](https://www.linkedin.com/posts/stanislavkozlovski_aws-s3-deep-dive-activity-7072826135792754688-I5pY?utm_source=share&utm_medium=member_desktop)
- [Creating a simple public file repository on Amazon S3 | AWS Storage Blog](https://aws.amazon.com/blogs/storage/creating-a-simple-public-file-repository-on-amazon-s3/)
- [Designing a resilient and cost-effective backup strategy for Amazon S3 | AWS Storage Blog](https://aws.amazon.com/blogs/storage/designing-a-resilient-and-cost-effective-backup-strategy-for-amazon-s3/)
- [Optimizing storage costs and query performance by compacting small objects | AWS Storage Blog](https://aws.amazon.com/blogs/storage/optimizing-storage-costs-and-query-performance-by-compacting-small-objects/)
- [Copy data from an S3 bucket to another account and Region by using the AWS CLI - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/copy-data-from-an-s3-bucket-to-another-account-and-region-by-using-the-aws-cli.html#copy-data-from-an-s3-bucket-to-another-account-and-region-by-using-the-aws-cli-tools)
- [How an empty S3 bucket can make your AWS bill explode | by Maciej Pocwierz | Medium](https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1)
