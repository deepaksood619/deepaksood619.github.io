# Networking and Content Delivery

## 1. Amazon VPC - Isolated Cloud Resources

## 2. AWS PrivateLink

Access services hosted on AWS easily and securely by keeping your network traffic within the AWS network

AWS PrivateLink simplifies the security of data shared with cloud-based applications by eliminating the exposure of data to the public Internet. AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications, securely on the Amazon network. AWS PrivateLink makes it easy to connect services across different accounts and VPCs to significantly simplify the network architecture.

## 3. Amazon CloudFront - Global Content Delivery Network

[cdn-content-delivery-network](cloud/others/cdn-content-delivery-network.md)

[Amazon Cloudfront](cloud/aws/networking-content-delivery/amazon-cloudfront.md)

## 4. Amazon Route53

Scalable Domain Name System

Amazon Route53 effectively connects user requests to infrastructure running in AWS -- such as Amazon EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets -- and can also be used to route users to infrastructure outside of AWS. You can use Amazon Route 53 to configure DNS health checks to route traffic to healthy endpoints or to independently monitor the health of your application and its endpoints. Amazon Route 53 Traffic Flow makes it easy for you to manage traffic globally through a variety of routing types, including Latency Based Routing, Geo DNS, Geoproximity, and Weighted Round Robin - all of which can be combined with DNS Failover in order to enable a variety of low-latency, fault-tolerant architectures. Using Amazon Route 53 Traffic Flow's simple visual editor, you can easily manage how your end-users are routed to your application's endpoints - whether in a single AWS region or distributed around the globe. Amazon Route 53 also offers Domain Name Registration -- you can purchase and manage domain names such as example.com and Amazon Route 53 will automatically configure DNS settings for your domains.

### Routing Policy

- **Simple routing policy** – Use for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website. You can use simple routing to create records in a private hosted zone.
- **Failover routing policy** – Use when you want to configure active-passive failover. You can use failover routing to create records in a private hosted zone.
- **Geolocation routing policy** – Use when you want to route traffic based on the location of your users. You can use geolocation routing to create records in a private hosted zone.
	- Geolocation routing lets you choose the resources that serve your traffic based on the geographic location of your users, meaning the location that DNS queries originate from. For example, you might want all queries from Europe to be routed to an Elastic Load Balancing (ELB) load balancer in the Frankfurt region.
	- When you use geolocation routing, you can localize your content and present some or all of your website in the language of your users. You can also use geolocation routing to restrict the distribution of content to only the locations in which you have distribution rights. Another possible use is for balancing load across endpoints in a predictable, easy-to-manage way so that each user location is consistently routed to the same endpoint.
- **Geoproximity routing policy** – Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another location. You can use geoproximity routing to create records in a private hosted zone.
	- [Geoproximity routing - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html)
	- Geoproximity routing lets Amazon Route 53 route traffic to your resources based on the geographic location of your users and your resources. It routes traffic to the closest resource that is available. You can also optionally choose to route more traffic or less traffic to a given resource by specifying a value, known as a _bias_. A bias expands or shrinks the size of the geographic region from which traffic is routed to a resource.
	- To optionally change the size of the geographic region from which Route 53 routes traffic to a resource, specify the applicable value for the bias:
		- To expand the size of the geographic region from which Route 53 routes traffic to a resource, specify a **positive integer from 1 to 99 for the bias. Route 53 shrinks the size of adjacent regions.**
		- To shrink the size of the geographic region from which Route 53 routes traffic to a resource, specify a **negative bias of -1 to -99. Route 53 expands the size of adjacent regions.**
- **Latency routing policy** – Use when you have resources in multiple AWS Regions and you want to route traffic to the Region that provides the best latency. You can use latency routing to create records in a private hosted zone.
- **IP-based routing policy** – Use when you want to route traffic based on the location of your users, and have the IP addresses that the traffic originates from.
- **Multivalue answer routing policy** – Use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random. You can use multivalue answer routing to create records in a private hosted zone.
- **Weighted routing policy** – Use to route traffic to multiple resources in proportions that you specify. You can use weighted routing to create records in a private hosted zone.

[Choosing a routing policy - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)

### CNAME vs Alias Record

A CNAME record maps DNS queries for the name of the current record, such as acme.example.com, to another domain (example.com or example.net) or subdomain (acme.example.com or zenith.example.org).

CNAME records can be used to map one domain name to another. Although you should keep in mind that the DNS protocol does not allow you to create a CNAME record for the top node of a DNS namespace, also known as the zone apex. For example, if you register the DNS name example.com, the zone apex is example.com. You cannot create a CNAME record for example.com, but you can create CNAME records for www.example.com, newproduct.example.com, and so on.

Alias records let you route traffic to selected AWS resources, such as Amazon CloudFront distributions and Amazon S3 buckets. They also let you route traffic from one record in a hosted zone to another record. 3rd party websites do not qualify for these as we have no control over those. 'Alias record' cannot be used to map one domain name to another.

Unlike a CNAME record, you can create an alias record at the top node of a DNS namespace, also known as the _zone apex_. For example, if you register the DNS name example.com, the zone apex is example.com. You can't create a CNAME record for example.com, but you can create an alias record for example.com that routes traffic to www.example.com (as long as the record type for www.example.com is not of type CNAME).

**Amazon Route 53 doesn't charge for alias queries to AWS resources but Route 53 does charge for CNAME queries.** Additionally, an alias record can only redirect queries to selected AWS resources such as Amazon S3 buckets, Amazon CloudFront distributions, and another record in the same Amazon Route 53 hosted zone; however a CNAME record can redirect DNS queries to any DNS record. So, you can create a CNAME record that redirects queries from app.covid19survey.com to app.covid19survey.net.

[Choosing between alias and non-alias records - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html)

### Resolvers

Amazon Route 53 effectively connects user requests to infrastructure running in AWS – such as Amazon EC2 instances – and can also be used to route users to infrastructure outside of AWS. By default, Amazon Route 53 Resolver automatically answers DNS queries for local VPC domain names for Amazon EC2 instances. You can integrate DNS resolution between Resolver and DNS resolvers on your on-premises network by configuring forwarding rules.

To resolve any DNS queries for resources in the AWS VPC from the on-premises network, you can create an inbound endpoint on Amazon Route 53 Resolver and then DNS resolvers on the on-premises network can forward DNS queries to Amazon Route 53 Resolver via this endpoint.

**Resolver Inbound Endpoint:**

![Resolver Inbound Endpoint](../../../media/Screenshot%202025-10-24%20at%205.09.19%20PM.jpg)

 [What is Amazon Route 53 Resolver? - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html)

To resolve DNS queries for any resources in the on-premises network from the AWS VPC, you can create an outbound endpoint on Amazon Route 53 Resolver and then Amazon Route 53 Resolver can conditionally forward queries to resolvers on the on-premises network via this endpoint. To conditionally forward queries, you need to create Resolver rules that specify the domain names for the DNS queries that you want to forward (such as example.com) and the IP addresses of the DNS resolvers on the on-premises network that you want to forward the queries to.

**Resolver Outbound Endpoint:**

![Resolver Outbound Endpoint](../../../media/Screenshot%202025-10-24%20at%205.09.42%20PM.jpg)

 [What is Amazon Route 53 Resolver? - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html)

### Links

- [Choosing a routing policy - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)
- [Weighted routing - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-weighted.html)
- [Values specific for weighted records - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-values-weighted.html)
- [How to implement the perfect failover strategy using Amazon Route53 | by Simon Tabor | DAZN Engineering | Medium](https://medium.com/dazn-tech/how-to-implement-the-perfect-failover-strategy-using-amazon-route53-1cc4b19fa9c7)
- [Choosing between alias and non-alias records - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html)

## 5. Amazon API Gateway - Build, Deploy, and Manage APIs

Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.

You can enable **Amazon API caching in Amazon API Gateway** to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API. When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds. Amazon API Gateway then responds to the request by looking up the endpoint response from the cache instead of requesting your endpoint. **The default TTL value for API caching is 300 seconds. The maximum TTL value is 3600 seconds. TTL=0 means caching is disabled.**

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

## 6. AWS Direct Connect - Dedicated Network Connection to AWS

A Direct Connect gateway is a global resource that allows VPCs in any AWS Region (except China) to connect to Direct Connect via virtual private gateways (VGWs). By connecting both Direct Connect links to the same DX gateway and associating the VGWs of all relevant VPCs, the company can enable transitive routing across Regions and between on-premises locations and VPCs — without setting up complex peering or custom VPN appliances.

[What is AWS Direct Connect? - AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

[Hybrid cloud architectures using AWS Direct Connect gateway \| Networking & Content Delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/hybrid-cloud-architectures-using-aws-direct-connect-gateway/)

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

AWS Global Accelerator is a service that improves the availability and performance of your applications with local or global users. It provides static IP addresses that act as a fixed entry point to your application endpoints in a single or multiple AWS Regions, such as your Application Load Balancers, Network Load Balancers, or Amazon EC2 instances. AWS Global Accelerator uses the AWS global network to optimize the path from your users to your applications, improving the performance of your traffic by as much as 60%.

AWS Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. AWS Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), loT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover.

AWS Global Accelerator is a service that improves the availability and performance of your applications with local or global users. It provides static IP addresses that act as a fixed entry point to your application endpoints in a single or multiple AWS Regions, such as your Application Load Balancers, Network Load Balancers or Amazon EC2 instances. AWS Global Accelerator will not help in accelerating the file transfer speeds into S3 for the given use-case.

AWS Global Accelerator is a networking service that sends your user’s traffic through Amazon Web Service’s global network infrastructure, improving your internet user performance by up to 60%. When the internet is congested, Global Accelerator’s automatic routing optimizations will help keep your packet loss, jitter, and latency consistently low.

With AWS Global Accelerator, you are provided two global static customer-facing IPs to simplify traffic management. On the back end, add or remove your AWS application origins, such as Network Load Balancers, Application Load Balancers, elastic IP address (EIP), and Amazon EC2 Instances, without making user-facing changes. To mitigate endpoint failure, AWS Global Accelerator automatically re-routes your traffic to your nearest healthy available endpoint.

Simplified and resilient traffic routing for multi-Region applications:

![AWS Global Accelerator](../../../media/Screenshot%202025-10-24%20at%204.55.26%20PM.jpg)

### AWS Global Accelerator vs Amazon CloudFront

AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. Amazon CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). AWS Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions.

AWS Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.

[Network Acceleration Service - AWS Global Accelerator - AWS](https://aws.amazon.com/global-accelerator/)

## Links

- [AWS Networking Fundamentals - YouTube](https://www.youtube.com/watch?v=hiKPPy584Mg&ab_channel=AmazonWebServices)
