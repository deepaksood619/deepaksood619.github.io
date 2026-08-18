---
slug: /confluent-cloud-aws-private-network-interface-pni
title: AWS Private Network Interface (PNI) for Confluent Cloud
description: Secure, cost-effective private networking for Confluent Cloud using AWS Elastic Network Interfaces - reduces costs by 50% vs PrivateLink
created: 2026-07-05
updated: 2026-08-18
---
Confluent PNI is a secure, low-cost private networking option built directly on fundamental AWS networking primitives such as AWS Elastic Network Interfaces (ENI). It leverages the same underlying AWS networking primitives used to power Amazon's own services, such as Amazon Elastic Kubernetes Service (EKS) or AWS Lambda.

By attaching a network interface from your AWS account to a Confluent-managed service, PNI gives you access to Confluent Cloud through an interface directly inside your own VPC.

## Why PNI Launched in August 2025

Confluent officially launched Private Network Interface (PNI) on August 1, 2025. While AWS ENI technology has been around since 2011, Confluent clusters did not support it until recently because cross-account ENI architectures required advanced, native multi-VPC capabilities that AWS only developed later. Additionally, PNI addresses modern cloud financial challenges (FinOps) that have recently escalated.

### 1. It relies on the modern "AWS Multi-VPC ENI Attachment" feature

**AWS Release Date**: October 26, 2023 - Multi-VPC ENI Attachment was generally released

Standard ENIs can only be attached to EC2 instances or containers within the same AWS account and VPC. Confluent Cloud runs fully managed Kafka clusters inside Confluent's AWS accounts, while your data producers/consumers run inside your AWS account.

**The Breakthrough**: Confluent's PNI utilizes a modern AWS primitive called Multi-VPC ENI attachment, released in October 2023. This allows an ENI residing in your subnet to be physically attached to a Confluent-managed virtual machine running in their VPC across different AWS accounts. Prior to October 2023, EC2 instances were strictly locked into a single VPC, and any ENI attached had to belong to that exact same VPC. This deep cross-tenant infrastructure took AWS years to mature and expose safely to SaaS partners.

### 2. To eliminate massive AWS PrivateLink data-processing fees

Before PNI, the gold standard for secure, private connectivity to Confluent Cloud was AWS PrivateLink. However, PrivateLink charges a strict per-GB data processing fee.

For high-throughput Kafka streaming workloads, PrivateLink data charges frequently dwarf the actual cost of running Kafka. PNI was built explicitly to stop these high costs. By routing traffic directly through a cross-account attached ENI, it bypasses AWS PrivateLink's hourly endpoint and per-GB fees entirely, cutting overall cloud networking costs by up to 50% to 60%.

### 3. Demand for simpler architectures and bi-directional flow

AWS PrivateLink is strictly unidirectional—traffic can only originate from your VPC toward Confluent Cloud. If you wanted to use fully managed Confluent Connectors to push data back into databases inside your private network, setting up reverse PrivateLink endpoints was immensely complex.

Because an ENI acts like a local network card inside your subnet, PNI allows for bi-directional traffic controlled simply via standard AWS Security Groups.

## Key Features

- **AWS-Native Technology**: Built on AWS Elastic Network Interfaces (ENI)
- **Direct VPC Connectivity**: ENIs placed directly in customer VPC
- **Security Group Control**: Apply your security groups to manage all inbound and outbound traffic
- **Single Policy Enforcement Point**: Define and enforce security policies centrally
- **Traffic Directionality Control**: Full control over traffic flow
- **No IP Address Management**: Freedom from IP address management or routing constraints
- **Cross-AZ/VPC Flexibility**: Move network interfaces across AZs and services
- **Simplified DNS Management**: Eliminates VPC endpoint overhead

## Cost Savings

### Pricing

- **Enterprise clusters with PNI**: $0.04/GB (20% reduction from $0.05/GB)
- **Freight clusters with PNI**: $0.03/GB (40% reduction from $0.05/GB)
- **Enterprise clusters with PrivateLink**: $0.05/GB + $0.01/GB PrivateLink traffic charges

### Sample Cost Comparison

Workload: 60 MB/s ingress, 120 MB/s egress, 3x consume fanout

- **Enterprise + PNI**: $50,301.56/month
- **Enterprise + PrivateLink**: $64,673.44/month
- **Savings: ~22%**

- **Freight + PNI**: $32,336.72/month
- **Enterprise + PrivateLink**: $64,673.44/month
- **Savings: 50%**

### How Savings Are Achieved

1. **Elimination of cross-AZ networking costs**:
   - Zone-aligned architecture
   - Writing directly to object storage (reduces broker replication)
   - Producer alignment and consumer alignment via follower fetching
   - Drives networking charges to zero

2. **Reduced data transfer and processing costs**:
   - Lower per-GB Kafka read/write charges
   - Completely removed per-GB costs for PrivateLink
   - Eliminates PrivateLink endpoint charges from AWS bill

## Architecture

### Core Components

#### Gateway

A gateway is a resource that represents a connectivity type to and from Confluent Cloud services. It is created within an environment for the region and zone(s) you choose. The PNI gateway allows you to connect to Confluent Cloud services, such as Freight and Enterprise clusters, hosted in a given environment and region, from your network.

- Represents a connectivity type to and from Confluent Cloud services
- Created within environment for specific region/zone(s)

#### Access Point

An access point is a resource that represents a connection instance to a gateway and must match the type of the gateway it connects to. An access point of type PNI consists of a set of AWS ENIs in the same cloud region as the gateway, carrying traffic to and from Confluent Cloud services. The PNI access point provides you with a connection to services like Freight and Enterprise clusters, hosted in a specific environment and region, from your network.

- Represents a connection instance to a gateway
- Consists of a set of AWS ENIs in the same cloud region as the gateway

**Yes—if you delete and recreate the PNI access point, the PNI bootstrap endpoint will change.**

The PNI hostname includes the access-point ID:

```text
lkc-<cluster-id>-<access-point-id>.<region>.aws.accesspoint.glb.confluent.cloud:9092
```

A recreated access point receives a new ID, so clients must update `bootstrap.servers` and the corresponding REST endpoint.

The Kafka cluster ID, topics, data, credentials, and non-PNI endpoints remain unchanged. Expect a connectivity outage while the new access point reaches `READY`.

**Important:** If only the AWS ENIs are deleted/recreated, the endpoint may not change—but the existing PNI will reference the old ENI IDs and fail until the access point is recreated with the new IDs.

#### Access Schema Registry over PNI

If you use PNI to connect to Enterprise or Freight clusters, you can reach Schema Registry over the same PNI connection. You don’t need a separate AWS PrivateLink connection for Schema Registry. After you set up a PNI gateway and access point in an environment, Confluent Cloud creates a PNI endpoint for Schema Registry in that environment automatically. No extra setup or per-cluster configuration is required. Your client applications use this endpoint to register, retrieve, evolve, and delete schemas privately over PNI.

The Schema Registry PNI endpoint is scoped to the access point and uses the following format:

```text
lsrc-<schema_registry_id>-<access_point_id>.<region>.aws.accesspoint.glb.confluent.cloud
```

#### ENIs (Elastic Network Interfaces)

- Reside in customer's AWS account/VPC
- Customer owns and controls ENIs (create, update, delete, attach security groups)
- Confluent has limited permission to attach ENIs to Confluent Cloud VMs

## Setup Methods

### 1. Automatic Setup (Console Only)

- Uses AWS IAM temporary delegation
- Creates gateway, ENIs, security group, access point automatically
- Single guided workflow

### 2. Manual Setup

- Use Confluent REST API, CLI, Terraform, or Console
- Customer creates gateway, ENIs, access point, security groups
- Provides more control over security configuration

## Requirements

- **Supported Clusters**: Freight and Enterprise Kafka clusters on AWS only
- **Platform**: Amazon Web Services (AWS) only (other cloud providers coming)
- **Region Alignment**: ENIs must be in same region as gateway
- **Schema Registry**: Accessible over same PNI connection with no extra setup

## Key Limitations

- Each ENI/set can associate with only ONE PNI access point
- Single PNI gateway can access multiple Enterprise/Freight clusters (same region/environment)
- Max 2 PNI gateways per Confluent Cloud environment (contact support for more)
- **Egress over PNI**: Supported for fully managed connectors only
- **Other egress use cases** (Cluster Linking, Custom Connect): Must use Egress PrivateLink Endpoint
- Enterprise clusters support simultaneous PrivateLink Attachment AND PNI connectivity
- Switching between PrivateLink and PNI fully supported without cluster redeployment

## Comparison with Other Networking Options

### vs. PrivateLink

**PrivateLink challenges:**

- Enhanced security—but at higher cost and complexity
- Data processing and hourly endpoint fees
- Customer responsible for provisioning PrivateLink service and paying for Network Load Balancer
- Intermediary data transfer charges

**PNI advantages:**

- Eliminates per-GB PrivateLink costs
- Removes endpoint overhead
- Direct ENI attachment (no intermediary)
- 22-50% cost savings

### vs. VPC Peering

**VPC Peering challenges:**

- Cheapest option but seen as less secure
- Lacks centralized security policy enforcement
- IP address overlap challenges
- Cannot route traffic through intermediary VPCs

**PNI advantages:**

- Centralized security policies
- No IP management constraints
- Smaller attack surface
- Tighter egress controls

### vs. Transit Gateway

**Transit Gateway challenges:**

- More complex firewall integration

**PNI advantages:**

- Centralized policy enforcement
- Simpler configuration

## Security Features

- Apply standard AWS Security Groups to control traffic flowing through the ENI
- Single point to define and enforce security policies
- Control over traffic directionality
- Smaller attack surface compared to VPC peering
- Tighter egress controls for accessing Confluent's control plane services
- Security posture can match AWS PrivateLink using proper Security Group configuration
- More flexible than PrivateLink for bidirectional traffic scenarios

## Operational Benefits

- **Pre-attach capabilities**: Move network interfaces across AZs and services
- **Improved failover**: Faster recovery times and less downtime
- **Reduced blast radius**: Better isolation during AZ outages
- **Drop-in solution**: No major configuration changes needed
- **Familiar tools**: Use AWS-native security groups and workflows
- **Simplified management**: Fewer engineering resources required

## Indeed Case Study

**Results:**

- 60% reduction in network transfer spend
- Slashed replication and cross-AZ write costs by leveraging Amazon S3 for storage
- Reduction in overall operational expenses
- Fewer engineering resources required to manage unpredictable traffic spikes
- Faster recovery times and less downtime
- Reduced blast radius during AZ outages

**Quote:**
"Collaborating with Confluent to implement PNI as part of adopting Freight has been fantastic. The solution drives down costs by eliminating private endpoints, writing directly to object storage, and more effectively preventing overprovisioning"

## Console Access

- Requires additional configuration for Console components (topic management)
- See: [Use the Confluent Cloud Console with Private Networking](https://docs.confluent.io/cloud/current/networking/ccloud-console-access.html)

## Links

- [Private Network Interface on AWS - Official Docs](https://docs.confluent.io/cloud/current/networking/aws-pni.html)
- [Introducing Private Network Interface (PNI) on AWS Blog](https://www.confluent.io/blog/introducing-private-network-interface/)
- [Hosted Apache Kafka vs Fully Managed Blog](https://www.confluent.io/blog/hosted-apache-kafka-vs-fully-managed/)
- [AWS Elastic Network Interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)
