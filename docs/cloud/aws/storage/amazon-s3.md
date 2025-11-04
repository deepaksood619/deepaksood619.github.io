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

### Ownership / Permissions

By default, an Amazon S3 object is owned by the AWS account that uploaded it. This is true even when the bucket is owned by another account. Because the Amazon Redshift data files from the UNLOAD command were put into your bucket by another account, you (the bucket owner) don't have default permission to access those files.

To get access to the data files, an AWS Identity and Access Management (IAM) role with cross-account permissions must run the UNLOAD command again. Follow these steps to set up the Amazon Redshift cluster with cross-account permissions to the bucket:

1. From the account of the Amazon S3 bucket, create an IAM role (Bucket Role) with permissions to the bucket.
2. From the account of the Amazon Redshift cluster, create another IAM role (Cluster Role) with permissions to assume the Bucket Role.
3. Update the Bucket Role to grant bucket access and create a trust relationship with the Cluster Role.
4. From the Amazon Redshift cluster, run the UNLOAD command using the Cluster Role and Bucket Role.

This solution doesn't apply to Amazon Redshift clusters or Amazon S3 buckets that use server-side encryption with AWS Key Management Service (AWS KMS).

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

## S3 GET

Using the Range HTTP header in a GET Object request, you can fetch a byte-range from an object, transferring only the specified portion. You can use concurrent connections to Amazon S3 to fetch different byte ranges from within the same object. This helps you achieve higher aggregate throughput versus a single whole-object request. Fetching smaller ranges of a large object also allows your application to improve retry times when requests are interrupted.

A byte-range request is a perfect way to get the beginning of a file and ensuring we remain efficient during our scan of our Amazon S3 bucket.

## S3 Select and Glacier Select

Amazon S3 Select is a new Amazon S3 capability designed to pull out only the data you need from an object, which can dramatically improve the performance and reduce the cost of applications that need to access data in Amazon S3. You cannot use Byte Range Fetch parameter with S3 Select to traverse the Amazon S3 bucket and get the first bytes of a file.

Please note that with Amazon S3 Select, you can scan a subset of an object by specifying a range of bytes to query using the ScanRange parameter. This capability lets you parallelize scanning the whole object by splitting the work into separate Amazon S3 Select requests for a series of non-overlapping scan ranges. Use the Amazon S3 Select ScanRange parameter and Start at (Byte) and End at (Byte).

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

### When should you use amazon S3

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

By using Amazon S3 analytics _Storage Class Analysis_ you can analyze storage access patterns to help you decide when to transition the right data to the right storage class. This new Amazon S3 analytics feature observes data access patterns to help you determine when to transition less frequently accessed **STANDARD storage to the STANDARD_IA (IA, for infrequent access) storage class.**

Storage class analysis only provides recommendations for Standard to Standard IA classes.

After storage class analysis observes the infrequent access patterns of a filtered set of data over a period of time, you can use the analysis results to help you improve your lifecycle configurations. You can configure storage class analysis to analyze all the objects in a bucket. Or, you can configure filters to group objects together for analysis by common prefix (that is, objects that have names that begin with a common string), by object tags, or by both prefix and tags.

[Amazon S3 analytics – Storage Class Analysis - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/analytics-storage-class.html)

### IAM Access Analyzer

AWS IAM Access Analyzer helps identify resources shared with external entities by analyzing resource-based policies (e.g., S3 buckets, KMS keys, SNS topics, IAM roles) and detecting unintended access. It uses automated reasoning to evaluate the effects of policies and determines if a resource is accessible from outside the account or organization. Access Analyzer also supports policy validation, helping administrators craft secure and compliant access policies. It’s purpose-built for detecting and auditing external access paths to resources.

[Using Amazon S3 server access logs to identify requests - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-s3-access-logs-to-identify-requests.html)

[Reviewing bucket access using IAM Access Analyzer for S3 - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-analyzer.html)

### IAM Access Advisor

IAM Access Advisor shows the last accessed information for AWS services used by IAM users and roles, but it does not evaluate resource-based policies or determine if resources are shared externally. It is designed to help with least privilege enforcement by identifying unused permissions, not external access analysis. It cannot detect whether S3 buckets or IAM roles are publicly accessible or shared with specific accounts.

## Amazon S3 Replication

Amazon Simple Storage Service (S3) Replication is an elastic, fully managed, low cost feature that replicates objects between buckets. S3 Replication offers the most flexibility and functionality in cloud storage, giving you the controls you need to meet your data sovereignty and other business needs.

- S3 Cross-Region Replication (CRR)
- S3 Same-Region Replication (SRR)
- S3 Batch Replication

With Amazon S3 Replication, you can configure Amazon S3 to automatically replicate S3 objects across different AWS Regions by using **S3 Cross-Region Replication (CRR)** or between buckets in the same AWS Region by using **S3 Same-Region Replication (SRR)**. S3 Replication offers the flexibility of replicating to multiple destination buckets in the same, or different AWS Regions. **S3 Replication supports two-way replication between two or more buckets in the same or different AWS Regions.**

While live replication like CRR and SRR automatically replicates newly uploaded objects as they are written to your bucket, **S3 Batch Replication** allows you to replicate existing objects. You can use S3 Batch Replication to backfill a newly created bucket with existing objects, retry objects that were previously unable to replicate, migrate data across accounts, or add new buckets to your data lake. Customers needing a predictable replication time backed by a Service Level Agreement (SLA) can use **Replication Time Control (RTC)** to replicate objects in less than 15 minutes.

Amazon S3 Replication also provides detailed metrics and notifications to monitor the status of object replication between buckets. You can monitor replication progress by tracking bytes pending, operations pending, replication latency, and operations failed replication using the S3 console or Amazon CloudWatch. You can also set up S3 Event Notifications to receive replication failure notifications to quickly diagnose and correct configuration issues. S3 Replication metrics and notifications helps you closely monitor replication progress.

[S3 Replication - Object Storage Features – Amazon S3](https://aws.amazon.com/s3/features/replication/)

[Replicating objects within and across Regions - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html)

## Amazon S3 Event Notifications

### Supported Events

- New object created events
- Object removal events
- Restore object events
- Reduced Redundancy Storage (RRS) object lost events
- Replication events
- S3 Lifecycle expiration events
- S3 Lifecycle transition events
- S3 Intelligent-Tiering automatic archival events
- Object tagging events
- Object ACL PUT events

### Destinations

Amazon S3 can send event notification messages to the following destinations. You specify the Amazon Resource Name (ARN) value of these destinations in the notification configuration.

- Amazon Simple Notification Service (Amazon SNS) topics
- Amazon Simple Queue Service (Amazon SQS) queues
- AWS Lambda function
- Amazon EventBridge

### Others

- IMP - Amazon S3 event notifications are designed to be delivered at least once. Typically, event notifications are delivered in seconds but can sometimes take a minute or longer.
- NOTE - Amazon Simple Queue Service FIFO (First-In-First-Out) queues aren't supported as an Amazon S3 event notification destination. To send a notification for an Amazon S3 event to an Amazon SQS FIFO queue, you can use Amazon EventBridge.
- WARNING - If your notification writes to the same bucket that triggers the notification, it could cause an execution loop. For example, if the bucket triggers a Lambda function each time an object is uploaded, and the function uploads an object to the bucket, then the function indirectly triggers itself. To avoid this, use two buckets, or configure the trigger to only apply to a prefix used for incoming objects.

[Amazon S3 Event Notifications - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventNotifications.html)

[Amazon Simple Storage Service endpoints and quotas - AWS General Reference](https://docs.aws.amazon.com/general/latest/gr/s3.html#limits_s3)

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

## Access

### Amazon S3 Access Points

Amazon S3 Access Points provide a scalable, manageable solution for managing permissions on shared buckets. By creating a dedicated access point for each service, and setting access point-level policies that scope access down to specific prefixes within the bucket, the company can enforce fine-grained, isolated access per application. This approach avoids complexity in the bucket policy and eliminates the need for per-object permissions management. Access points are ideal for environments with multiple applications or teams sharing a common S3 bucket.

Large organizations with private Amazon S3 buckets using S3 Access Points as their solution for complying with data-sharing requirements across departments need a way to simplify access management while adhering to strict security standards. In our example, a customer has three different organizational departments: Finance, Marketing, and Operations. Each department has different needs for the data in the S3 bucket, while also requiring different controls.

Organizational and departmental requirements in this example:

- An Amazon S3 bucket that holds the restricted data that different departments must securely access and manage. The S3 bucket should not be public, and it should only be accessible from within the VPC. Furthermore, the VPC should have no outbound or inbound internet access.
- The Finance department uses **application role 1,** and this role should enable members of this department to upload data to the S3 bucket if the prefix matches /Application1 or /Application3. In this scenario, this role ensures that members of this department could take no other actions, like download or delete.
- The Marketing department uses **application role 2,** and this role should enable members of this department to download objects from the S3 bucket. In this scenario, this role ensures that this department could take no other actions, like upload or delete.
- The Operations department uses **application role 3,** and this role should enable members of this department to download objects if the prefix matches /Application3. This role also permits members of this department to delete objects in any of the application folders inside the S3 bucket.

[Securing data in a virtual private cloud using Amazon S3 Access Points \| AWS Storage Blog](https://aws.amazon.com/blogs/storage/securing-data-in-a-virtual-private-cloud-using-amazon-s3-access-points/)

### S3 Bucket Policy vs IAM Policy

To manage AWS access, you set IAM policies and link them to IAM identities (users, groups of users, or roles) or AWS resources. A policy is an object in AWS that, when associated with an identity or resource, defines permissions for that identity or resource. IAM policies specify which actions are allowed or denied on which AWS resources (for example, user Alice can read objects from the “Production” bucket but can’t write objects in the “Dev” bucket, whereas user Bob can have full access to S3).

S3 bucket policies, on the other hand, are resource-based policies that you can use to grant access permissions to your Amazon S3 buckets and the objects in them. S3 bucket policies can allow or deny requests based on the elements in the policy. (For example, allow user Alice to PUT but not DELETE objects in the bucket.)

> **Note:** You attach S3 bucket policies at the bucket level (that is, you can’t attach a bucket policy to an S3 object), but the permissions specified in the bucket policy apply to all of the objects in the bucket. You can also specify permissions at the object level by putting an object as the resource in the bucket policy.

A bucket policy is a type of resource-based policy that can be used to grant permissions to the principal that is specified in the policy. Principals can be in the same account as the resource or in other accounts. For cross-account permissions to other AWS accounts or users in another account, you must use a bucket policy.

IAM policies and S3 bucket policies are both used for access control and they’re both written in JSON using the AWS access policy language.

#### When to use IAM policies vs. S3 policies

Use IAM policies if:

- You need to control access to AWS services other than S3. IAM policies will be simpler to manage since you can centrally manage your permissions in IAM, instead of spreading them between IAM and S3.
- You have numerous S3 buckets, each with different permissions requirements. IAM policies will be simpler to manage since you don’t have to define a large number of S3 bucket policies and can instead rely on fewer, more detailed IAM policies.
- You prefer to keep access control policies in the IAM environment.

Use S3 bucket policies if:

- You want a simple way to grant [cross-account access](http://docs.aws.amazon.com/AmazonS3/latest/dev/AccessPolicyLanguage_UseCases_s3_a.html) to your S3 environment, without using [IAM roles](http://docs.aws.amazon.com/IAM/latest/UserGuide/cross-acct-access-walkthrough.html).
- **Your IAM policies bump up against the size limit (up to 2 KB for users, 5 KB for groups, and 10 KB for roles). S3 supports bucket policies of up to 20 KB.**
- You prefer to keep access control policies in the S3 environment.
- You want to apply common security controls to the principals who interact with S3 buckets, such as restricting the IP addresses or VPC a bucket can be accessed from.

If you’re still unsure of which to use, consider which audit question is most important to you:

- If you’re more interested in “**What can this user do in AWS?**”, then IAM policies are probably the way to go. You can answer this question by looking up an IAM user and then examining their IAM policies to see what rights they have.
- If you’re more interested in “**Who can access this S3 bucket?**”, then S3 bucket policies will likely suit you better. You can answer this question by looking up a bucket and examining the bucket policy.

[IAM Policies and Bucket Policies and ACLs! Oh, My! (Controlling Access to S3 Resources) \| AWS Security Blog](https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/)

## Encryption

Amazon S3 now applies server-side encryption with Amazon S3 managed keys (SSE-S3) as the base level of encryption for every bucket in Amazon S3. Starting January 5, 2023, all new object uploads to Amazon S3 are automatically encrypted at no additional cost and with no impact on performance.

### Server-side encryption

Amazon S3 encrypts your objects before saving them on disks in AWS data centers and then decrypts the objects when you download them.

To use a different type of encryption, you can either specify the type of server-side encryption to use in your S3 `PUT` requests, or you can update the default encryption configuration in the destination bucket.

If you want to specify a different encryption type in your `PUT` requests, you can use server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS), dual-layer server-side encryption with AWS KMS keys (DSSE-KMS), or server-side encryption with customer-provided keys (SSE-C). If you want to set a different default encryption configuration in the destination bucket, you can use SSE-KMS or DSSE-KMS.

When you change the default encryption configuration of your bucket to SSE-KMS, the encryption type of the existing Amazon S3 objects in the bucket is not changed. To change the encryption type of your pre-existing objects after updating the default encryption configuration to SSE-KMS, you can use Amazon S3 Batch Operations. You provide S3 Batch Operations with a list of objects, and Batch Operations calls the respective API operation. You can use the [Copy objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-copy-object.html) action to copy existing objects, which writes them back to the same bucket as SSE-KMS encrypted objects. A single Batch Operations job can perform the specified operation on billions of objects.

- [Specifying server-side encryption with Amazon S3 managed keys (SSE-S3)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/specifying-s3-encryption.html)
- [Specifying server-side encryption with AWS KMS (SSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/specifying-kms-encryption.html)
- [Specifying dual-layer server-side encryption with AWS KMS keys (DSSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/specifying-dsse-encryption.html)
- [Specifying server-side encryption with customer-provided keys (SSE-C)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html#specifying-s3-c-encryption)

[Protecting data with server-side encryption - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)

When storing data in Amazon S3 you have four mutually exclusive options for server-side encryption, depending on how you choose to manage the encryption keys and the number of encryption layers that you want to apply.

#### Server-side encryption with Amazon S3 managed keys (SSE-S3)

All Amazon S3 buckets have encryption configured by default. The default option for server-side encryption is with Amazon S3 managed keys (SSE-S3). **Each object is encrypted with a unique key.** As an additional safeguard, SSE-S3 encrypts the key itself with a root key that it regularly rotates. SSE-S3 uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data. For more information, see [Using server-side encryption with Amazon S3 managed keys (SSE-S3)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html).

#### Server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)

Server-side encryption with AWS KMS keys (SSE-KMS) is provided through an integration of the AWS KMS service with Amazon S3. With AWS KMS, you have more control over your keys. For example, you can view separate keys, edit control policies, and follow the keys in AWS CloudTrail. Additionally, you can create and manage customer managed keys or use AWS managed keys that are unique to you, your service, and your Region. For more information, see [Using server-side encryption with AWS KMS keys (SSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingKMSEncryption.html).

An **encryption context** is a set of key-value pairs that contain additional contextual information about the data. When an encryption context is specified for an encryption operation, Amazon S3 must specify the same encryption context for the decryption operation. The encryption context offers another level of security for the encryption key. However, it is not useful for generating unique keys.

**Amazon S3 Bucket Keys** reduce the cost of Amazon S3 server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS). Using a bucket-level key for SSE-KMS can reduce AWS KMS request costs by up to 99 percent by decreasing the request traffic from Amazon S3 to AWS KMS. Enabling S3 Bucket Keys with SSE-KMS allows S3 to generate a unique data key for each object locally using a bucket-level KMS key, which dramatically reduces the number of direct AWS KMS API calls. This approach maintains the same security and compliance properties as SSE-KMS, while reducing request-related costs—especially beneficial for workloads with frequent access or write operations.

#### Dual-layer server-side encryption with AWS Key Management Service (AWS KMS) keys (DSSE-KMS)

Dual-layer server-side encryption with AWS KMS keys (DSSE-KMS) is similar to SSE-KMS, but DSSE-KMS applies two independent layers of AES-256 encryption instead of one layer: first using a AWS KMS data encryption key, then using a separate Amazon S3-managed encryption key. Because both layers of encryption are applied to an object on the server side, you can use a wide range of AWS services and tools to analyze data in S3 while using an encryption method that can satisfy compliance requirements for multilayer encryption. For more information, see [Using dual-layer server-side encryption with AWS KMS keys (DSSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingDSSEncryption.html).

#### Server-side encryption with customer-provided keys (SSE-C)

With server-side encryption with customer-provided keys (SSE-C), you manage the encryption keys, and Amazon S3 manages the encryption as it writes to disks and the decryption when you access your objects. For more information, see [Using server-side encryption with customer-provided keys (SSE-C)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerSideEncryptionCustomerKeys.html).

### Client-side encryption

You encrypt your data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, encryption keys, and related tools.

To encrypt your objects before you send them to Amazon S3, use the Amazon S3 Encryption Client. When your objects are encrypted in this manner, your objects aren't exposed to any third party, including AWS. Amazon S3 receives your objects already encrypted; Amazon S3 does not play a role in encrypting or decrypting your objects. You can use both the Amazon S3 Encryption Client and [server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html) to encrypt your data. When you send encrypted objects to Amazon S3, Amazon S3 doesn't recognize the objects as being encrypted, it only detects typical objects.

[Protecting data by using client-side encryption - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingClientSideEncryption.html)

### Links

[Protecting data with encryption - Amazon Simple Storage Service](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html)

## Links

- [Stanislav Kozlovski on LinkedIn: AWS S3 Deep Dive](https://www.linkedin.com/posts/stanislavkozlovski_aws-s3-deep-dive-activity-7072826135792754688-I5pY?utm_source=share&utm_medium=member_desktop)
- [Creating a simple public file repository on Amazon S3 | AWS Storage Blog](https://aws.amazon.com/blogs/storage/creating-a-simple-public-file-repository-on-amazon-s3/)
- [Designing a resilient and cost-effective backup strategy for Amazon S3 | AWS Storage Blog](https://aws.amazon.com/blogs/storage/designing-a-resilient-and-cost-effective-backup-strategy-for-amazon-s3/)
- [Optimizing storage costs and query performance by compacting small objects | AWS Storage Blog](https://aws.amazon.com/blogs/storage/optimizing-storage-costs-and-query-performance-by-compacting-small-objects/)
- [Copy data from an S3 bucket to another account and Region by using the AWS CLI - AWS Prescriptive Guidance](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/copy-data-from-an-s3-bucket-to-another-account-and-region-by-using-the-aws-cli.html#copy-data-from-an-s3-bucket-to-another-account-and-region-by-using-the-aws-cli-tools)
- [How an empty S3 bucket can make your AWS bill explode | by Maciej Pocwierz | Medium](https://medium.com/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1)
