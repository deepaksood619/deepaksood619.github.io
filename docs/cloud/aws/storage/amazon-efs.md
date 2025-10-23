# Amazon EFS

Amazon Elastic File System (EFS) is designed to provide serverless, fully elastic file storage that lets you share file data without provisioning or managing storage capacity and performance. It can be used with AWS services and on-premises resources, and it's built to scale to petabytes on demand without disrupting applications.

Amazon EFS is well suited to support a broad spectrum of use cases from home directories to business-critical applications. Use cases include storage for containerized and serverless applications, big data analytics, web serving and content management, application development and testing, media and entertainment workflows, and database backups.

[Amazon Elastic File System](https://aws.amazon.com/efs/)

## EFS - Managed File Storage for EC2

EFS delivers a simple, scalable, elastic, highly available, and highly durable network file system as-a-service to EC2 instances. Amazon EFS storage capacity is elastic and is capable of growing and shrinking automatically as you add and remove files without disrupting your EFS applications.

### Usage

EFS is designed to provide a highly scalable network file system that can grow to petabytes and allows massively parallel access from EC2 instances. EFS supports Network File System versions 4 (NFSv4) and 4.1 (NFSv4.1).

When mounted up on Amazon EC2 instances, the EFS file system provides a standard file system interface and file system access. Multiple Amazon EC2 instances can access an Amazon EFS file system(as a shared storage location). Thus, applications that scale beyond a single instance can access a file system.You can mount your EFS file systems on your on-premises datacenter servers when connected to your Amazon Virtual Private Cloud (VPC) with AWS Direct Connect service.

### Durability & availability

Each Amazon EFS file system object (such as a directory, file or link) is redundantly stored across multiple availability zones within a region. Amazon EFS is designed to be as highly durable and available as Amazon S3.

### Security

There are three main levels of access controls to consider when it comes to EFS file system.

1. IAM permissions for API calls
2. Security groups for EC2 instances and mount targets
3. Network File System-level users, groups, and permissions.

Amazon groups play a critical role in establishing network connectivity between EC2 instances and EFS file systems. You can associate one security group with an EC2 instance and another security group with an EFS mount target associated with the file system. These security groups act as firewalls and enforce rules that define the traffic flow between EC2 instances and EFS file systems.

- Create mount path

## Storage classes

Amazon EFS offers three storage classes

1. EFS Standard
2. EFS Infrequent Access - EFS IA offers up to 95% lower cost than EFS Standard for infrequently-accessed data.
3. EFS Archive - A new storage class where customers can save up to 50% on storage costs – compared to Amazon EFS Infrequent Access

Data that is frequently accessed tends to have higher performance needs, so EFS provides an SSD-powered EFS Standard class designed to deliver sub-millisecond latencies. For data that’s infrequently accessed, you can use EFS’s two cost-optimized storage classes that provide low double-digit millisecond latencies: EFS Infrequent Access (IA), designed for data accessed only a few times a quarter, and EFS Archive, designed for data accessed less than few times a year.

- EFS is multi-AZ
- EFS OneZone is Single AZ
- EFS Regional file systems are multi-AZ, storing data across multiple Availability Zones for high durability and availability, while EFS One Zone file systems store data in a single AZ, making them unavailable during a fault in that zone. You must select a Regional storage class, such as EFS Standard, for multi-AZ capabilities.

[Amazon EFS Storage Classes](https://aws.amazon.com/efs/storage-classes/)

## Lifecycle management and Intelligent-Tiering

By enabling EFS Lifecycle Management, you can automatically tier files between storage classes based on your access patterns. You can create a custom lifecycle management policy to transition files between storage classes, or use the default, recommended policy which will tier files from EFS Standard to EFS IA after 30 consecutive days without access and to EFS Archive after 90 consecutive days without access. You can also enable EFS Intelligent-Tiering to transition files from EFS IA and EFS Archive back to EFS Standard for subsequent faster, sub-millisecond access.

## Performance

File system performance is typically measured by using the dimensions of latency, throughput, and Input/Output operations per second (IOPS). Amazon EFS performance across these dimensions depends on your file system's configuration. The following configurations impact the performance of an Amazon EFS file system:

- **File system type** – Regional or One Zone
- **Performance mode** – General Purpose or Max I/O
- **Throughput mode** – Elastic, Provisioned, or Bursting

### Performance modes

Amazon EFS offers two performance modes, General Purpose and Max I/O.

- **General Purpose mode** has the lowest per-operation latency and is the default performance mode for file systems. One Zone file systems always use the General Purpose performance mode. For faster performance, we recommend always using General Purpose performance mode.
- **Max I/O mode** is a previous generation performance type that is designed for highly parallelized workloads that can tolerate higher latencies than the General Purpose mode. Max I/O mode is not supported for One Zone file systems or file systems that use Elastic throughput.

### Throughput modes

A file system's throughput mode determines the throughput available to your file system. Amazon EFS offers three throughput modes: **Elastic, Provisioned, and Bursting.**

- **Elastic throughput** (Recommended) – Use the default Elastic throughput when you have spiky or unpredictable workloads and performance requirements that are difficult to forecast, or when your application drives throughput at an average-to-peak ratio of 5% or less. For more information, see [Elastic throughput](https://docs.aws.amazon.com/efs/latest/ug/performance.html#elastic).
- **Provisioned throughput** – Use Provisioned throughput if you know your workload's performance requirements, or when your application drives throughput at an average-to-peak ratio of 5% or more. For more information, see [Provisioned throughput](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput).
- **Bursting throughput** – Use Bursting throughput when you want throughput that scales with the amount of storage in your file system. If, after using Bursting throughput, you find that your application is throughput-constrained (for example, it uses more than 80% of the permitted throughput or you have used all of your burst credits), then you should use either Elastic or Provisioned throughput. For more information, see [Bursting throughput](https://docs.aws.amazon.com/efs/latest/ug/performance.html#bursting).

[Amazon EFS performance specifications - Amazon Elastic File System](https://docs.aws.amazon.com/efs/latest/ug/performance.html)

## Links

- [See which EC2 instances are connected to Amazon EFS | AWS re:Post](https://repost.aws/knowledge-center/list-instances-connected-to-efs)
