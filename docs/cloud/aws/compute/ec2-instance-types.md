# EC2 Instance types

https://aws.amazon.com/blogs/compute/it-just-got-easier-to-discover-and-compare-ec2-instance-types

https://github.com/aws/amazon-ec2-instance-selector

## AMI

Ubuntu 16.04 LTS AMI - ami-2757f631

Ubuntu 16.10 AMI - ami-b374d5a5

Ubuntu Server 18.04 LTS (HVM), SSD Volume Type- ami-0620d12a9cf777c87 (64-bit x86) / ami-06b0afcb36d2e27ef (64-bit Arm)

Ubuntu Server 16.04 LTS (HVM), SSD Volume Type- ami-0c28d7c6dd94fb3a7 (64-bit x86) / ami-08f567e9a6f67fbee (64-bit Arm)

| Instance Size | vCPU | Memory (GiB) | Instance Storage (GiB) | Network Bandwidth (Gbps) | EBS Bandwidth (Mbps) | Cost per hour | Cost per month |
|---|---|---|---|---|---|---|---|
| m5.large | 2 | 8 | EBS-Only | Up to 10 | Up to 4,750 | $0.056 | $40.32 |
| m5.xlarge | 4 | 16 | EBS-Only | Up to 10 | Up to 4,750 | $0.111 | $79.92 |
| m5.2xlarge | 8 | 32 | EBS-Only | Up to 10 | Up to 4,750 | $0.222 | $159.84 |
| m5.4xlarge | 16 | 64 | EBS-Only | Up to 10 | 4,750 | $0.444 | $319.68 |
| m5a.8xlarge | 32 | 128 | EBS-Only | | | $0.889 | $640.08 |

a - AMD CPUs

## Tips

- **M5a instances** offers up to 10% savings for customers who are looking to further cost optimize their Amazon EC2 compute environments.
- [Kernel Live Patching for Amazon Linux 2 is now generally available](https://aws.amazon.com/about-aws/whats-new/2020/06/announcing-general-availability-kernel-live-patching-amazon-linux-2/)

https://aws.amazon.com/ec2/pricing/on-demand

https://aws.amazon.com/ec2/instance-types

- **Spot instances (discount upto 90%)**
  - **No bidding**
  - **Ideal for**
    - Fault tolerant
    - Flexible
    - Lossely coupled
    - Stateless workloads

https://aws.amazon.com/ec2/spot/instance-advisor

https://ec2spotworkshops.com/using_ec2_spot_instances_with_eks.html

https://aws.amazon.com/blogs/compute/cost-optimization-and-resilience-eks-with-spot-instances

https://aws.amazon.com/blogs/containers/amazon-eks-now-supports-provisioning-and-managing-ec2-spot-instances-in-managed-node-groups

https://spot.io

- On-demand instances
- Reserved instances (discount upto 75%)
  - Ex - m5a.4xlarge

![image](../../../media/Cloud-AWS-EC2-Instance-types-image1.jpg)

![image](../../../media/Cloud-AWS-EC2-Instance-types-image2.jpg)

https://aws.amazon.com/ec2/pricing/reserved-instances/pricing

- Savings plans (discount upto 66%)
- Dedicated hosts

| **General Purpose**       | A1, T3, T3a, T2, M6g, M5, **M5a**, M5n, M4  |
|---------------------------|---------------------------------------------|
| **Compute Optimized**     | C5, C5n, C4                                 |
| **Memory Optimized**      | R5, R5a, R5n, R4, X1e, X1, High Memory, z1d |
| **Accelerated Computing** | P3, P2, Inf1, G4, G3, F1                    |
| **Storage Optimized**     | I3, I3en, D2, H1                            |

| **Instance Family** | **Example** | **Use Cases** |
|---|---|---|
| Memory optimized | R5 | Memory-intensive applications, High-performance databases, Distributed in-memory caches |
| Storage optimized | I3 | Workloads with high-volume IOPS requiring low-latency, internet-scale nonrelational databases |
| Burstable performance | T2 | Consistent cost for unpredictable workloads, Smaller databases with spiky usage |

| **Scenario** | **Possible Instance Choice with Explanation** |
|---|---|
| Small database in Amazon RDS with moderate activity levels for which cost is more important than latency | db.m5 standard DB instance class offering a balance of compute, memory, and network resources |
| A 12-GB write-heavy workload in Amazon ElastiCache for Redis with 2 shards | cache.r5.xlarge memory-optimized instances with 26 GiB of memory |
| A memory-intensive workload in Amazon RDS using Oracle under an existing license for 2 CPUs | db.m4.xlarge with hyperthreading disabled to remain in compliance with licenses |

## Bottlerocket

Bottlerocket is a Linux-based open-source operating system that is purpose-built by Amazon Web Services for running containers on virtual machines or bare metal hosts. Most customers today run containerized applications on general-purpose operating systems that are updated package-by-package, which makes OS updates difficult to automate. Updates to Bottlerocket are applied in a single step rather than package-by-package. This single-step update process helps reduce management overhead by making OS updates easy to automate using container orchestration services such as Amazon EKS. The single-step updates also improve uptime for container applications by minimizing update failures and enabling easy update rollbacks. Additionally, Bottlerocket includes only the essential software to run containers, which improves resource usage and reduces the attack surface.

https://aws.amazon.com/bottlerocket

https://github.com/bottlerocket-os/bottlerocket

EC2 Image Builder

## GPU

https://aws.amazon.com/ec2/instance-types/g4
