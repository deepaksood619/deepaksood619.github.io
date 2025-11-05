# Amazon FSx

## Amazon FSx for Windows File Server

Amazon FSx for Windows File Server provides fully managed, highly reliable file storage that is accessible over the industry-standard Service Message Block (SMB) protocol. It is built on Windows Server, delivering a wide range of administrative features such as user quotas, end-user file restore, and Microsoft Active Directory (AD) integration. The Distributed File System Replication (DFSR) service is a new multi-master replication engine that is used to keep folders synchronized on multiple servers. Amazon FSx supports the use of Microsoft’s Distributed File System (DFS) to organize shares into a single folder structure up to hundreds of PB in size.

Amazon FSx for Windows is a perfect distributed file system, with replication capability, and can be mounted on Windows.

Amazon FS for Windows File Server provides fully managed, highly reliable, and scalable file storage that is accessible over the industry-standard Server Message Block (SMB) protocol. It is built on Windows Server, delivering a wide range of administrative features such as user quotas, end-user file restore, and Microsoft Active Directory (AD) integration. **It offers single-AZ and multi-AZ deployment options, fully managed backups, and encryption of data at rest and in transit.** You can optimize cost and performance for your workload needs with SSD and HDD storage options; and you can scale storage and change the throughput performance of your file system at any time.

With Amazon FS, you get highly available and durable file storage starting from $0.013 per GB-month. **Data deduplication** enables you to optimize costs even further by removing redundant data. You can increase your file system storage and scale throughput capacity at any time, making it easy to respond to changing business needs. There are no upfront costs or licensing fees.

## Amazon FSx for Lustre

FSx for Lustre makes it easy and cost-effective to launch and run the popular, high-performance Lustre file system. You use Lustre for workloads where speed matters, such as machine learning, high performance computing (HPC), video processing, and financial modeling.

The open-source Lustre file system is designed for applications that require fast storage—where you want your storage to keep up with your compute. Lustre was built to solve the problem of quickly and cheaply processing the world's ever-growing datasets. It's a widely used file system designed for the fastest computers in the world. It provides sub-millisecond latencies, up to hundreds of GBps of throughput, and up to millions of IOPS.

FSx for Lustre integrates with Amazon S3, making it easy to process data sets with the Lustre file system. When linked to an S3 bucket, an FS for Lustre file system transparently presents S3 objects as files and allows you to write changed data back to S3.

FSx for Lustre provides the ability to both process the **'hot data' in a parallel** and distributed fashion as well as easily store the **'cold data' on Amazon S3.**

POSIX Compliant File System

While Amazon FSx for Lustre integrated with Amazon S3 is a powerful solution for many high-throughput use cases, it involves an additional integration step where the Lustre file system imports metadata from the linked S3 bucket. The actual data transfer from S3 to Lustre occurs on demand, meaning the first access to each file may experience slightly higher latency compared to data that is preloaded or natively present on the file system. This approach is excellent when working with existing S3-based data lakes.

- [What is Amazon FSx for Lustre? - FSx for Lustre](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html)
- [Amazon FSx for Lustre](https://aws.amazon.com/fsx/lustre/)
- [Optimizing MMAP workloads on Amazon FSx for Lustre file systems | AWS Storage Blog](https://aws.amazon.com/blogs/storage/optimizing-mmap-workloads-on-amazon-fsx-for-lustre-file-systems/)
- [Lustre](https://www.lustre.org/)
- [Documentation | Lustre](https://www.lustre.org/documentation/)
- [Lustre 101](https://lustre.ornl.gov/lustre101-courses/)

## Amazon FSx for Lustre vs Amazon FSx for Windows File Server

**Amazon FSx for Lustre** is built for extreme performance in high-throughput, compute-intensive workloads like HPC, machine learning, and financial analytics, offering sub-millisecond latencies and millions of IOPS through its Lustre foundation. In contrast, **Amazon FSx for Windows File Server** is a fully managed service for Windows-based enterprise applications, providing native Microsoft Active Directory (AD) integration, end-user file restore, and Data Deduplication via the SMB protocol for common business workloads like file sharing and general-purpose processing.

## Amazon FSx for ONTAP

Amazon FSx for NetApp ONTAP is a storage service that allows customers to launch and run fully managed ONTAP file systems in the cloud. ONTAP is NetApp’s file system technology that provides a widely adopted set of data access and data management capabilities.

While FSx for NetApp ONTAP is a powerful, POSIX-compatible shared file system, it is better suited for enterprise applications, file sharing, and backups rather than HPC workloads. It supports tiering to S3 but does not offer the extremely high throughput or parallel access patterns needed for HPC.

[Fully Managed Cloud File System – FSx for NetApp ONTAP – Amazon Web Services](https://aws.amazon.com/fsx/netapp-ontap/)

## Amazon FSx for OpenZFS

Amazon FSx for OpenZFS is a fully managed file storage service that lets you launch, run, and scale fully managed file systems built on the open-source OpenZFS file system. FSx for OpenZFS makes it easy to migrate your on-premises file servers without changing your applications or how you manage data, and to build new high-performance, data-intensive applications on the cloud. FSx for OpenZFS is compatible with Windows, Linux, macOS clients. It supports NFS 3, 4.0, 4.1, 4.2 protocols, however, it does NOT support the SMB protocol.

## Choosing File System

[Help Me Choose An Amazon FSx File System \| Amazon Web Services](https://aws.amazon.com/fsx/when-to-choose-fsx/)

### Performance and Scale

|                                                                      | FSx for NetApp ONTAP                  | FSx for OpenZFS | FSx for Windows File Server | FSx for Lustre |
| -------------------------------------------------------------------- | ------------------------------------- | --------------- | --------------------------- | -------------- |
| Latency                                                              | `<1 ms`                                 | `<0.5 ms`         | `<1 ms`                       | `<1 ms`          |
| Max. throughput per file system                                      | 72-80 GB/s*                           | 10-21 GB/s*     | 12-20 GB/s*                 | 1000 GB/s      |
| Max. throughput available to a single client accessing a file system | 18 GB/s                               | 10 GB/s         | 20 GB/s                     | 150 GB/s       |
| Max. IOPS per file system                                            | Millions                              | 1-2 million     | Hundreds of thousands       | Millions       |
| Maximum file system size                                             | Virtually unlimited  (10s of PBs) | 512 TiB         | 64 TiB                      | Multiple PBs   |

### Accessibility and Integrations

|                                         | FSx for NetApp ONTAP                                                                      | FSx for OpenZFS          | FSx for Windows File Server   | FSx for Lustre                                                  |
| --------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------ | ----------------------------- | --------------------------------------------------------------- |
| Client compatibility                    | Windows, Linux macOS                                                                      | Windows, Linux, macOS    | Windows, Linux, macOS         | Linux                                                           |
| Protocol support                        | **SMB** 2.0, 2.1,  3.0, 3.1.1  **NFS** 3, 4.0, 4.1, 4.2  iSCSI (**shared** block storage) | **NFS** 3, 4.0, 4.1, 4.2 | **SMB** 2.0, 2.1,  3.0, 3.1.1 | Custom (**POSIX-compliant) protoco**l optimized for performance |
| AWS Compute                             | EC2, ECS, EKS                                                                             | EC2, ECS, EKS            | EC2, ECS, EKS                 | EC2, ECS, EKS                                                   |
| Automatic import/export of S3 data sets |                                                                                           |                          |                               | **✓**                                                           |
