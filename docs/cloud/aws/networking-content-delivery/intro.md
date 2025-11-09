# Networking and Content Delivery

## 1. Amazon VPC - Isolated Cloud Resources

## 2. AWS PrivateLink

Access services hosted on AWS easily and securely by keeping your network traffic within the AWS network

AWS PrivateLink simplifies the security of data shared with cloud-based applications by eliminating the exposure of data to the public Internet. AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications, securely on the Amazon network. AWS PrivateLink makes it easy to connect services across different accounts and VPCs to significantly simplify the network architecture.

## 3. Amazon CloudFront - Global Content Delivery Network

[cdn-content-delivery-network](cloud/others/cdn-content-delivery-network.md)

[Amazon Cloudfront](cloud/aws/networking-content-delivery/amazon-cloudfront.md)

## 4. Amazon Route53

[Amazon Route53](cloud/aws/networking-content-delivery/amazon-route53.md)

## 5. Amazon API Gateway - Build, Deploy, and Manage APIs

Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.

[Amazon API Gateway Pricing | API Management | Amazon Web Services](https://aws.amazon.com/api-gateway/pricing/)

[Amazon API Gateway Pricing: 6 Tips to Control the Cost](https://www.stormit.cloud/blog/amazon-api-gateway-pricing/)

1. Right type of API gateway - REST APIs vs HTTP APIs
2. API Gateway integration feature
3. Cognito authentication
4. Replace API Gateway with ALB (Application Load Balancer)
5. Reduce unnecessary API calls
6. Reduce data transfer costs

[Choose between REST APIs and HTTP APIs - Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)

1. REST APIs and HTTP APIs are both RESTful API products. REST APIs support more features than HTTP APIs, while HTTP APIs are designed with minimal features so that they can be offered at a lower price. Choose REST APIs if you need features such as API keys, per-client throttling, request validation, AWS WAF integration, or private API endpoints. Choose HTTP APIs if you don't need the features included with REST APIs.
2. HTTP APIs - $1.05 vs REST APIs - $3.50
3. Amazon API Gateway creates RESTful APIs that enable stateless client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full-duplex communication between client and server

**Security**

API Gateway supports resource policies, which are IAM-style JSON policies that you attach directly to your REST or HTTP APIs. These policies can use IpAddress and NotlpAddress conditions to enforce fine-grained network controls. By configuring a policy that explicitly denies all IPs except for the trusted internal IP ranges, the company can ensure that only requests originating from its internal network are allowed to invoke the API. This approach provides centralized, declarative access control without the need for additional infrastructure changes, and it aligns with AWS best practices for managing access to public APls that carry sensitive data.

**Caching**

You can enable **Amazon API caching in Amazon API Gateway** to cache your endpoint's responses.

With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API. When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds. Amazon API Gateway then responds to the request by looking up the endpoint response from the cache instead of requesting your endpoint. **The default TTL value for API caching is 300 seconds. The maximum TTL value is 3600 seconds. TTL=0 means caching is disabled.**

The maximum size of a response that can be cached is 1048576 bytes. Cache data encryption may increase the size of the response when it is being cached.

When you enable caching within a stage's **Cache settings**, only `GET` methods are cached. To ensure the safety and availability of your API, we recommend that you don't change this setting.

[Cache settings for REST APIs in API Gateway - Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html)

## 6. AWS Direct Connect - Dedicated Network Connection to AWS

**Question -** A global pharmaceutical company operates a hybrid cloud network. Its primary AWS workloads run in the us-west-2 Region, connected to its on-premises data center via an AWS Direct Connect connection. After acquiring a biotech firm headquartered in Europe, the company must integrate the biotech's workloads, which are hosted in several VPCs in the eu-central-1 Region and connected to the biotech's on-premises facility through a separate Direct Connect link. All CIDR blocks are non-overlapping, and the business requires full connectivity between both data centers and all VPCs across the two Regions. The company also wants a scalable solution that minimizes manual network configuration and long-term operational overhead.

**Answer -** A Direct Connect gateway is a global resource that allows VPCs in any AWS Region (except China) to connect to Direct Connect via virtual private gateways (VGWs). By connecting both Direct Connect links to the same DX gateway and associating the VGWs of all relevant VPCs, the company can enable transitive routing across Regions and between on-premises locations and VPCs — without setting up complex peering or custom VPN appliances.

[What is AWS Direct Connect? - AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

[Hybrid cloud architectures using AWS Direct Connect gateway \| Networking & Content Delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/hybrid-cloud-architectures-using-aws-direct-connect-gateway/)

### Virtual Interfaces (VIF)

AWS Direct Connect provides three types of virtual interfaces: **public, private, and transit.**

#### Public virtual interface

To connect to AWS resources that are reachable by a public IP address such as an Amazon Simple Storage Service (Amazon S3) bucket or AWS public endpoints, use a public virtual interface. With a public virtual interface, you can:

- Connect to all AWS public IP addresses globally.
- Create public virtual interfaces in any Direct Connect location to receive Amazon’s global IP routes.
- Access publicly routable Amazon services in any AWS Region (except the AWS China Region).

#### Private virtual interface

To connect to your resources hosted in an Amazon Virtual Private Cloud (Amazon VPC) using their private IP addresses, use a private virtual interface. With a private virtual interface, you can:

- Connect VPC resources such as Amazon Elastic Compute Cloud (Amazon EC2) instances or load balancers on your private IP address or endpoint.
- Connect a private virtual interface to a Direct Connect gateway. Then, associate the Direct Connect gateway with one or more virtual private gateways in any AWS Region (except the AWS China Region).
- Connect to multiple Amazon VPCs in any AWS Region (except the AWS China Region), because a virtual private gateway is associated with a single VPC.

**Note:** For a private virtual interface, AWS advertises the VPC CIDR only over the Border Gateway Protocol (BGP) neighbor. AWS can't advertise or suppress specific subnet blocks in the Amazon VPC for a private virtual interface.

#### Transit virtual interface

To connect to your resources hosted in an Amazon VPC (using their private IP addresses) through a transit gateway, use a transit virtual interface. With a transit virtual interface, you can:

- Connect multiple Amazon VPCs in the same or different AWS account using Direct Connect.
- Associate up to three transit gateways in any AWS Region when you use a transit virtual interface to connect to a Direct Connect gateway.
- Attach Amazon VPCs in the same AWS Region to the transit gateway. Then, access multiple VPCs in different AWS accounts in the same AWS Region using a transit virtual interface.

**Note:** For transit virtual interface, AWS advertises only routes that you specify in the allowed prefixes list on the Direct Connect gateway. For a list of all AWS Regions that offer Direct Connect support for AWS Transit Gateway, see [AWS Transit Gateway support](https://aws.amazon.com/directconnect/faqs/#AWS_Transit_Gateway_support).

#### VIF (Virtual Interface)

To access Amazon S3 from an on-premises data center using AWS Direct Connect, the correct approach is to configure a **Public Virtual Interface (Public VIF)**. A Public VIF allows your on-premises router to access public AWS services, such as Amazon S3 and DynamoDB, over the dedicated Direct Connect connection rather than the public internet. When you establish a Public VIF, AWS advertises a set of public IP prefixes corresponding to its services, including Amazon S3. This allows your data center to communicate with these services using public IPs routed privately over Direct Connect, delivering improved performance, lower latency, and enhanced security. Public VIFs are specifically designed for scenarios where you want to connect on-premises infrastructure to AWS public endpoints over private, high-bandwidth links.

A **Private Virtual Interface (Private VIF)** is used to connect an on-premises network to VPC resources, such as EC2 instances or RDS databases, over private IP space. However, Amazon S3 is a public AWS service, and Private VIFs cannot natively route traffic to public S3 endpoints. While S3 access via interface VPC endpoints is possible from within the VPC, it does not extend to on-premises access over Private VIF. Therefore, Private VIF is not suitable for directly accessing S3 from on-prem.

While **Transit Gateway with Direct Connect Gateway** is a valid solution for routing on-premises traffic to multiple VPCs over a private Direct Connect connection, it does not enable direct private IP access to Amazon S3, because S3 is a public AWS service with public IP addresses. Even if you configure interface VPC endpoints (AWS PrivateLink) to S3 in a connected VPC, the traffic remains local to that VPC and is not extended to the on-premises network via Transit Gateway. To access S3 from on-premises using Direct Connect, you must provision a Public Virtual Interface, which advertises AWS public service IP ranges to your data center.

## 7. Elastic Load Balancing (ELB) - High Scale Load Balancing

### Networking > Elastic Load Balancing

Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.

### Network Load Balancer Components

A load balancer serves as the single point of contact for clients. The load balancer distributes incoming traffic across multiple targets, such as Amazon EC2 instances. This increases the availability of your application. You add one or more listeners to your load balancer.

A listener checks for connection requests from clients, using the protocol and port that you configure, and forwards requests to a target group.

Each target group routes requests to one or more registered targets, such as EC2 instances, using the TCP protocol and the port number that you specify. You can register a target with multiple target groups. You can configure health checks on a per target group basis. Health checks are performed on all targets registered to a target group that is specified in a listener rule for your load balancer.

A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. It can handle millions of requests per second. After the load balancer receives a connection request, it selects a target from the target group for the default rule. It attempts to open a TCP connection to the selected target on the port specified in the listener configuration.

https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html

## AWS Network Architecture

![Typical AWS Network Architecture](../../../media/Pasted%20image%2020240316230001.jpg)

- **VPC (Virtual Private Cloud) -** At the heart of AWS's networking services is the Amazon VPC, which allows users to provision a logically isolated section of the AWS Cloud. Within this isolated environment, users can launch AWS resources in a virtual network that they define.
- **AZ (Availability Zone) -** An AZ in AWS refers to one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.

Now let’s go through the network connectivity one by one:

1. **Connect to the Internet - Internet Gateway (IGW) -** An IGW serves as the doorway between your AWS VPC and the internet, facilitating bidirectional communication.
2. **Remote Workers - Client VPN Endpoint -** AWS offers a Client VPN service that enables remote workers to access AWS resources or an on-premises network securely over the internet. It provides a secure and easy-to-manage VPN solution.
3. **Corporate Data Center Connection - Virtual Gateway (VGW) -** A VGW is the VPN concentrator on the Amazon side of the Site-to-Site VPN connection between your network and your VPC.
4. **VPC Peering -** VPC Peering allows you to connect two VPCs, enabling you to route traffic between them using private IPv4 or IPv6 addresses.
5. **Transit Gateway -** AWS Transit Gateway acts as a network transit hub, enabling you to connect multiple VPCs, VPNs, and AWS accounts together.
6. **VPC Endpoint (Gateway) -** A VPC Endpoint (Gateway type) allows you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, VPN.
7. **VPC Endpoint (Interface) -** An Interface VPC Endpoint (powered by AWS PrivateLink) enables private connections between your VPC and supported AWS services, other VPCs, or AWS Marketplace services, without requiring an IGW, VGW, or NAT device.
8. **SaaS Private Link Connection -** AWS PrivateLink provides private connectivity between VPCs and services hosted on AWS or on-premises, ideal for accessing SaaS applications securely.

## Data Transfer Cost

- **Inter-Region data transfer:** There is a charge for data moved between two different AWS Regions. This is in addition to the data transfer cost when moving data from AWS to the internet.
- **Intra-Region data transfer:** Data transferred within the same region, either between Availability Zones or between services, may have different cost structures. In some cases, it can be free, while other transfers (like between Availability Zones) will have a smaller, fixed charge per GB.
- **Cost factors:** The exact cost for inter-region transfers depends on the specific source and destination regions involved. To get the precise rates, you will need to check the Amazon EC2 Data Transfer pricing page, which lists all rates, or the specific pricing for other services.
- **Other considerations:** Be aware that some services may add processing fees, even for intra-region data transfers. For example, data passing through a NAT gateway incurs a processing fee.
- **Tracking costs:** For a more granular view of costs, you can use tools like AWS Cost and Usage Reports (CUR) or set up cost allocation tags to track specific cross-region data transfers, such as those related to EBS snapshots.

Data transfer between Availability Zones (AZs) in the same AWS Region costs $0.01 per GB for data in each direction, totaling $0.02 per GB for a round trip. This charge applies to services like EC2 and RDS. Transfers within the same AZ are free for private IP traffic, while inter-AZ traffic is a significant cost factor for applications that need high availability and distributed architectures.

[Understanding data transfer charges - AWS Data Exports](https://docs.aws.amazon.com/cur/latest/userguide/cur-data-transfers-charges.html)

[Overview of Data Transfer Costs for Common Architectures \| AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/)

## AWS Global Accelerator

Improve global application availability and performance

AWS Global Accelerator is a service that improves the availability and performance of your applications with local or global users. It provides static IP addresses that act as a fixed entry point to your application endpoints in a single or multiple AWS Regions, such as your **Application Load Balancers, Network Load Balancers, or Amazon EC2 instances**. AWS Global Accelerator uses the AWS global network to optimize the path from your users to your applications, improving the performance of your traffic by as much as 60%.

AWS Global Accelerator utilizes the Amazon global network, allowing you to improve the performance of your applications by **lowering first-byte latency** (the round trip time for a packet to go from a client to your endpoint and back again) and **jitter** (the variation of latency), and **increasing throughput** (the amount of time it takes to transfer data) as compared to the public internet.

AWS Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. **AWS Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), loT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover.**

AWS Global Accelerator will not help in accelerating the file transfer speeds into S3 for the given use-case. AWS Global Accelerator **does not support S3 buckets as direct endpoints.** It’s designed for improving performance for global applications deployed on EC2, ALB, or NLB, not for S3 static websites. There’s no direct integration between Global Accelerator and S3 unless the S3 bucket is fronted by another service like CloudFront or ALB.

AWS Global Accelerator is a networking service that sends your user’s traffic through Amazon Web Service’s global network infrastructure, improving your internet user performance by up to 60%. When the internet is congested, Global Accelerator’s automatic routing optimizations will help keep your packet loss, jitter, and latency consistently low.

With AWS Global Accelerator, you are provided two global static customer-facing IPs to simplify traffic management. On the back end, add or remove your AWS application origins, such as Network Load Balancers, Application Load Balancers, elastic IP address (EIP), and Amazon EC2 Instances, without making user-facing changes. To mitigate endpoint failure, AWS Global Accelerator automatically re-routes your traffic to your nearest healthy available endpoint.

Simplified and resilient traffic routing for multi-Region applications:

![AWS Global Accelerator](../../../media/Screenshot%202025-10-24%20at%204.55.26%20PM.jpg)

AWS Global Accelerator uses endpoint weights to determine the proportion of traffic that is directed to endpoints in an endpoint group, and traffic dials to control the percentage of traffic that is directed to an endpoint group (an AWS region where your application is deployed).

While relying on the DNS service is a great option for blue/green deployments, it may not fit use-cases that require a fast and controlled transition of the traffic. Some client devices and internet resolvers cache DNS answers for long periods; this DNS feature improves the efficiency of the DNS service as it reduces the DNS traffic across the Internet, and serves as a resiliency technique by preventing authoritative name-server overloads. The downside of this in blue/green deployments is that you don't know how long it will take before all of your users receive updated IP addresses when you update a record, change your routing preference or when there is an application failure.

With AWS Global Accelerator, you can shift traffic gradually or all at once between the blue and the green environment and vice-versa without being subject to DNS caching on client devices and internet resolvers, traffic dials and endpoint weights changes are effective within seconds.

### AWS Global Accelerator vs Amazon CloudFront

AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. Amazon CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). AWS Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions.

AWS Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.

[Network Acceleration Service - AWS Global Accelerator - AWS](https://aws.amazon.com/global-accelerator/)

## Elastic Fabric Adapter (EFA)

Elastic Fabric Adapter (EFA) is a network interface for Amazon EC2 instances that enables customers to run applications requiring high levels of inter-node communications at scale on AWS. Its custom-built operating system (OS) bypass hardware interface enhances the performance of inter-instance communications, which is critical to scaling these applications. With EFA, High Performance Computing (HPC) applications using the Message Passing Interface (MPI) and Machine Learning (ML) applications using NVIDIA Collective Communications Library (NCCL) can scale to thousands of CPUs or GPUs. As a result, you get the application performance of on-premises HPC clusters with the on-demand elasticity and flexibility of the AWS cloud.

EFA is available as an optional EC2 networking feature that you can enable on any supported EC2 instance at no additional cost. Plus, it works with the most commonly used interfaces, APIs, and libraries for inter-node communications, so you can migrate your HPC applications to AWS with little or no modifications.

[Elastic Fabric Adapter — Amazon Web Services](https://aws.amazon.com/hpc/efa/)

## Links

- [AWS Networking Fundamentals - YouTube](https://www.youtube.com/watch?v=hiKPPy584Mg&ab_channel=AmazonWebServices)
