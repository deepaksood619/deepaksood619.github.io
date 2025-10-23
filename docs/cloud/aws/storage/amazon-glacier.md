# Amazon Glacier

### Low-cost Archive Storage in the Cloud

Amazon Glacier is a secure, durable, and extremely low-cost storage service for data archiving and long-term backup. Glacier provides 'query-in-place functionality', which allows you to run powerful analytics directly on archived data at rest. Glacier can make use of other AWS services such as S3, CloudFront etc. to move data in and out seamlessly for better and effective results.

### Usage

Amazon Glacier stores data in the form of archives. An archive can represent a single file, or you can combine several files to be uploaded as a single archive, and archives are organized in vaults. AWS Glacier is the only cloud archive storage service that allows you to query data in place and retrieve only the subset of data that you need from within an archive.

### Durability & availability

Since AWS Glacier is an archiving service, durability must be of utmost priority. Glacier is designed to provide average annual durability of 99.999999999% for archives. Data is automatically distributed across a minimum of three physical facilities that are geographically separated within an AWS Region.

### Security

By default, only the account owner can access Amazon Glacier data. If other people or services need to access the data, you can set up data access controls in AWS Glacier by using theAWS Identity and Access Management (IAM)service. Similarly, Glacier uses server-side encryption to encrypt all data at rest. Amazon Glacier allows you to lock vaults where long-term records retention is mandated, along with the use of lockable policies.

### Retrieval

- **Expedited -** Expedited retrievals allow you to quickly access your data when occasional urgent requests for a subset of archives are required. For all but the largest archives (250 MB+), data accessed using Expedited retrievals are typically made available within 1--5 minutes. Provisioned Capacity ensures that retrieval capacity for Expedited retrievals is available when you need it.
- **Standard -** Standard retrievals allow you to access any of your archives within several hours. Standard retrievals typically complete within 3--5 hours. This is the default option for retrieval requests that do not specify the retrieval option.
- **Bulk -** Bulk retrievals are S3 Glacier's lowest-cost retrieval option, which you can use to retrieve large amounts, even petabytes, of data inexpensively in a day. Bulk retrievals typically complete within 5--12 hours.

## Glacier Deep Archive

[Using Amazon S3 Glacier with the AWS CLI - AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-services-glacier.html)

```bash
aws glacier help
```

### Glacier Vault

A vault is a container for storing archives. When you create a vault, you specify a vault name and the AWS Region in which you want to create the vault

## Amazon S3 Glacier Instant Retrieval

Amazon S3 Glacier Instant Retrieval is an archive storage class that delivers the lowest-cost storage for long-lived data that is rarely accessed and requires retrieval in milliseconds. With S3 Glacier Instant Retrieval, you can save up to 68% on storage costs compared to using the S3 Standard-Infrequent Access (S3 Standard-IA) storage class, when your data is accessed once per quarter. S3 Glacier Instant Retrieval delivers the fastest access to archive storage, with the same throughput and milliseconds access as the S3 Standard and S3 Standard-IA storage classes. S3 Glacier Instant Retrieval is ideal for archive data that needs immediate access, such as medical images, news media assets, or user-generated content archives. You can upload objects directly to S3 Glacier Instant Retrieval, or use S3 Lifecycle policies to transfer data from the S3 storage classes. For more information, visit the [**Amazon S3 Glacier Instant Retrieval page »**](https://aws.amazon.com/s3/storage-classes/glacier/instant-retrieval/)

### Key features

- Long-lived data that is accessed a few times per year with instant retrievals
- Data retrieval in milliseconds with the same performance as S3 Standard
- Designed to deliver 99.9% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99%
- 128 KB minimum object size
- S3 PUT API for direct uploads to S3 Glacier Instant Retrieval, and S3 Lifecycle management for automatic migration of objects

## Amazon S3 Glacier Flexible Retrieval (Formerly S3 Glacier)

S3 Glacier Flexible Retrieval delivers low-cost storage, up to 10% lower cost (than S3 Glacier Instant Retrieval), for archive data that is accessed 1—2 times per year and is retrieved asynchronously. For archive data that does not require immediate access but needs the flexibility to retrieve large sets of data at no cost, such as backup or disaster recovery use cases, S3 Glacier Flexible Retrieval (formerly S3 Glacier) is the ideal storage class. S3 Glacier Flexible Retrieval delivers the most flexible retrieval options that balance cost with access times ranging from minutes to hours and with free bulk retrievals. It is an ideal solution for backup, disaster recovery, offsite data storage needs, and for when some data occasionally need to be retrieved in minutes, and you don’t want to worry about costs. S3 Glacier Flexible Retrieval is designed for 99.999999999% (11 nines) of data durability and 99.99% availability by redundantly storing data across multiple physically separated AWS Availability Zones in a given year. For more information, visit the [**Amazon S3 Glacier storage classes page »**](https://aws.amazon.com/s3/storage-classes/glacier/)

### Key features

- Backup and archive data that is rarely accessed and low cost
- Designed to deliver 99.99% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99.9%
- Supports SSL for data in transit and encryption of data at rest
- Ideal for backup and disaster recovery use cases when large sets of data occasionally need to be retrieved in minutes, without concern for costs
- Configurable retrieval times, from minutes to hours, with free bulk retrievals
- S3 PUT API for direct uploads to S3 Glacier Flexible Retrieval, and S3 Lifecycle management for automatic migration of objects

## Amazon S3 Glacier Deep Archive

S3 Glacier Deep Archive is Amazon S3’s lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year. It is designed for customers—particularly those in highly-regulated industries, such as financial services, healthcare, and public sectors—that retain data sets for 7—10 years or longer to meet regulatory compliance requirements. S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases, and is a cost-effective and easy-to-manage alternative to magnetic tape systems, whether they are on-premises libraries or off-premises services. S3 Glacier Deep Archive complements Amazon S3 Glacier, which is ideal for archives where data is regularly retrieved and some of the data may be needed in minutes. All objects stored in S3 Glacier Deep Archive are replicated and stored across at least three geographically-dispersed Availability Zones, protected by 99.999999999% of durability, and can be restored within 12 hours. For more information, visit the [**Amazon S3 Glacier storage classes page »**](https://aws.amazon.com/s3/storage-classes/glacier/)

### Key features

- Archive data that is very rarely accessed and very low cost
- Designed to deliver 99.99% availability with an [availability SLA](https://aws.amazon.com/s3/sla/) of 99.9%
- Ideal alternative to magnetic tape libraries
- Retrieval time within 12 hours
- S3 PUT API for direct uploads to S3 Glacier Deep Archive, and S3 Lifecycle management for automatic migration of objects
