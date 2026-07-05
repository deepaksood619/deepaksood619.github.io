---
slug: /aws-elastic-network-interface-eni
title: AWS Elastic Network Interface (ENI)
description: Logical networking component in AWS VPC representing a virtual network card - includes cross-account Multi-VPC ENI attachment released Oct 2023
created: 2026-07-05
updated: 2026-07-05
---

An Elastic Network Interface (ENI) is a logical networking component in AWS that represents a virtual network card. It is the fundamental bridge that connects resources like EC2 instances, Lambda functions, and RDS databases to your AWS Virtual Private Cloud (VPC).

## Core Attributes

When an ENI is created, it is bound to a specific Subnet and Availability Zone, and it contains the following attributes:

- **Primary Private IPv4 Address**: The main internal IP from your subnet's range.
- **Secondary Private IPv4 Addresses**: Additional private IPs for multi-hosting or IP-failover configurations.
- **Public or Elastic IP Address**: One optional public IP address mapping.
- **MAC Address**: A unique hardware identifier for the network interface.
- **Security Groups**: One or more firewalls attached directly to the ENI to control inbound and outbound traffic.
- **Source/Destination Check Flag**: A setting determining if the instance must be the source or destination of traffic it receives (turned off for NAT instances or routers).

## Types of Network Interfaces

- **Primary ENI (eth0)**: Automatically created and attached when you launch an instance. It cannot be detached from the instance during its lifecycle.
- **Secondary ENI**: Detachable network cards that you can manually create, attach to instances, or move between instances within the same Availability Zone.

## Key Use Cases

### Creating a Management Network

You can attach a secondary ENI to a dual-homed instance. This allows public traffic to flow through the primary ENI while restricting administrative SSH/RDP traffic to a private subnet on the secondary ENI.

### Low-Cost High Availability (Failover)

If an instance fails, you can quickly detach its secondary ENI and attach it to a standby instance. The network traffic will immediately reroute to the new machine because the IP addresses and security groups stay with the ENI.

### Running Network and Security Appliances

Ideal for deploying firewalls, load balancers, and NAT gateways that require multiple network connections to segregate untrusted public traffic from trusted internal traffic.

## Advanced Use Cases

### Cross-Account ENI Attachment (Multi-VPC Feature)

**Release Date**: AWS Multi-VPC ENI Attachment was generally released on October 26, 2023.

Prior to this date, an EC2 instance or virtual machine was strictly locked into a single VPC; any ENI attached to it had to belong to that exact same VPC. The October 2023 launch completely broke this barrier, giving AWS infrastructure providers and partners like Confluent the fundamental architectural tool needed to build cross-account, multi-tenant network architectures.

This feature allows an ENI residing in one AWS account's subnet to be attached to a virtual machine running in a different AWS account's VPC. When an ENI from your AWS account is cross-attached to a managed service instance in a SaaS provider's account (like Confluent Cloud PNI), you maintain total control over your network boundary. Even though the computing power sits in their VPC, the traffic behaves as if the resource is sitting directly inside your own subnet.

**Example**: Confluent Cloud's Private Network Interface (PNI) uses this feature to attach customer-owned ENIs to Confluent-managed Kafka clusters, eliminating PrivateLink costs and enabling direct VPC connectivity.

See: [Confluent Cloud Private Network Interface](technologies/confluent/cloud-networking/09-aws-pni.md)

## Cross-Account Security and Routing

### How Security Groups Behave (Your Firewalls)

Because the ENI physically lives inside your subnet, your Security Groups rule supreme. The SaaS provider has absolutely no control over the traffic entering or leaving that ENI from your side.

- **Your Account Controls the Rules**: You associate your own standard AWS Security Groups directly to that ENI.
- **Stateful Filtering**: Like any standard deployment, if your client instance (e.g., an app server) sends a request through the ENI, the Security Group automatically allows the return traffic because it is stateful.
- **Inbound Lockdown**: You can block all public ingress and explicitly allow traffic only from the specific IP addresses or Security Groups of your private app servers.
- **Simplified Policies**: A major advantage over PrivateLink is that you don't need complex endpoint policies; standard layer-4 (port/IP) rules apply directly to the ENI interface.

### How Routing Tables Behave (The Traffic Director)

Routing tables dictate how your resources find this cross-attached ENI. Because it is a local interface inside your subnet, it completely simplifies your network architecture.

- **Standard Local Route Applies**: Every subnet has a default Local route covering its parent VPC CIDR block. Because the ENI is assigned a private IP from your subnet range, your app servers do not need custom route table entries to talk to it. They resolve the endpoint, see it is a local IP, and route to it natively.
- **Bi-directional Routing**: If a managed service needs to write data back to a database in your private subnet, it pushes traffic out of that ENI and uses your subnet's routing table to locate your database.
- **Transit Gateway & VPN Compatibility**: If you have on-premises data centers connected via AWS Transit Gateway or AWS Direct Connect, they can talk to the SaaS service seamlessly. You simply add the target subnet's CIDR block to your VPN/Transit Gateway route tables. The traffic travels over your hybrid network, hits the subnet, and lands directly on the ENI.

### Operational Split in Cross-Account Scenarios

| Architectural Component | Who Configures/Owns It? | How It Behaves |
|---|---|---|
| **Compute Instance** | SaaS Provider (e.g., Confluent) | Processes data, runs software inside their isolated VPC. |
| **Network Interface (ENI)** | Created in Your Subnet | Attached physically across accounts to their compute. |
| **Security Groups** | Your Team | Evaluated at the ENI boundary before traffic leaves/enters your VPC. |
| **Subnet Route Tables** | Your Team | Directs local app traffic and hybrid/on-prem traffic to the ENI. |
| **Network ACLs** | Your Team | Provides a second layer of stateless packet filtering at the subnet line. |

## ENI vs ENA vs EFA

- **ENI (Elastic Network Interface)**: The standard virtual network card for general-purpose networking.
- **ENA (Elastic Network Adapter)**: Enhanced networking adapter providing higher bandwidth, higher packet-per-second performance, and lower latency.
- **EFA (Elastic Fabric Adapter)**: Network device for HPC and ML workloads requiring low latency and high throughput inter-instance communication.

## Links

- [AWS ENI Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)
- [AWS Blog: New Elastic Network Interfaces](https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/)
- [Amazon VPC](cloud/aws/networking-content-delivery/amazon-vpc.md)
- [Amazon EC2](cloud/aws/compute/amazon-ec2.md)
