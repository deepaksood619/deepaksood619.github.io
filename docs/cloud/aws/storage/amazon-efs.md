# Amazon EFS

Amazon Elastic File System (EFS) is designed to provide serverless, fully elastic file storage that lets you share file data without provisioning or managing storage capacity and performance. It can be used with AWS services and on-premises resources, and it's built to scale to petabytes on demand without disrupting applications.

Amazon EFS is well suited to support a broad spectrum of use cases from home directories to business-critical applications. Use cases include storage for containerized and serverless applications, big data analytics, web serving and content management, application development and testing, media and entertainment workflows, and database backups.

[Amazon Elastic File System](https://aws.amazon.com/efs/)

### Storage classes

Amazon EFS offers three storage classes

1. EFS Standard
2. EFS Infrequent Access - EFS IA offers up to 95% lower cost than EFS Standard for infrequently-accessed data.
3. EFS Archive - A new storage class where customers can save up to 50% on storage costs – compared to Amazon EFS Infrequent Access

Data that is frequently accessed tends to have higher performance needs, so EFS provides an SSD-powered EFS Standard class designed to deliver sub-millisecond latencies. For data that’s infrequently accessed, you can use EFS’s two cost-optimized storage classes that provide low double-digit millisecond latencies: EFS Infrequent Access (IA), designed for data accessed only a few times a quarter, and EFS Archive, designed for data accessed less than few times a year.

[Amazon EFS Storage Classes](https://aws.amazon.com/efs/storage-classes/)

### Lifecycle management and Intelligent-Tiering

By enabling EFS Lifecycle Management, you can automatically tier files between storage classes based on your access patterns. You can create a custom lifecycle management policy to transition files between storage classes, or use the default, recommended policy which will tier files from EFS Standard to EFS IA after 30 consecutive days without access and to EFS Archive after 90 consecutive days without access. You can also enable EFS Intelligent-Tiering to transition files from EFS IA and EFS Archive back to EFS Standard for subsequent faster, sub-millisecond access.

## Links

- [See which EC2 instances are connected to Amazon EFS | AWS re:Post](https://repost.aws/knowledge-center/list-instances-connected-to-efs)
