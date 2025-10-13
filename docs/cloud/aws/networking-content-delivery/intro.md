# Networking and Content Delivery

### 1. Amazon VPC - Isolated Cloud Resources

### 2. AWS PrivateLink

Access services hosted on AWS easily and securely by keeping your network traffic within the AWS network

AWS PrivateLink simplifies the security of data shared with cloud-based applications by eliminating the exposure of data to the public Internet. AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications, securely on the Amazon network. AWS PrivateLink makes it easy to connect services across different accounts and VPCs to significantly simplify the network architecture.

### 3. Amazon CloudFront - Global Content Delivery Network

[cdn-content-delivery-network](cloud/others/cdn-content-delivery-network.md)

[Amazon Cloudfront](cloud/aws/networking-content-delivery/amazon-cloudfront.md)

### 4. Amazon Route53

Scalable Domain Name System

Amazon Route53 effectively connects user requests to infrastructure running in AWS -- such as Amazon EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets -- and can also be used to route users to infrastructure outside of AWS. You can use Amazon Route 53 to configure DNS health checks to route traffic to healthy endpoints or to independently monitor the health of your application and its endpoints. Amazon Route 53 Traffic Flow makes it easy for you to manage traffic globally through a variety of routing types, including Latency Based Routing, Geo DNS, Geoproximity, and Weighted Round Robin - all of which can be combined with DNS Failover in order to enable a variety of low-latency, fault-tolerant architectures. Using Amazon Route 53 Traffic Flow's simple visual editor, you can easily manage how your end-users are routed to your application's endpoints - whether in a single AWS region or distributed around the globe. Amazon Route 53 also offers Domain Name Registration -- you can purchase and manage domain names such as example.com and Amazon Route 53 will automatically configure DNS settings for your domains.

#### Routing Policy

- **Simple routing policy** – Use for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website. You can use simple routing to create records in a private hosted zone.
- **Failover routing policy** – Use when you want to configure active-passive failover. You can use failover routing to create records in a private hosted zone.
- **Geolocation routing policy** – Use when you want to route traffic based on the location of your users. You can use geolocation routing to create records in a private hosted zone.
- **Geoproximity routing policy** – Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another location. You can use geoproximity routing to create records in a private hosted zone.
- **Latency routing policy** – Use when you have resources in multiple AWS Regions and you want to route traffic to the Region that provides the best latency. You can use latency routing to create records in a private hosted zone.
- **IP-based routing policy** – Use when you want to route traffic based on the location of your users, and have the IP addresses that the traffic originates from.
- **Multivalue answer routing policy** – Use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random. You can use multivalue answer routing to create records in a private hosted zone.
- **Weighted routing policy** – Use to route traffic to multiple resources in proportions that you specify. You can use weighted routing to create records in a private hosted zone.

#### Links

- [Choosing a routing policy - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)
- [Weighted routing - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-weighted.html)
- [Values specific for weighted records - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-values-weighted.html)
- [How to implement the perfect failover strategy using Amazon Route53 | by Simon Tabor | DAZN Engineering | Medium](https://medium.com/dazn-tech/how-to-implement-the-perfect-failover-strategy-using-amazon-route53-1cc4b19fa9c7)
- [Choosing between alias and non-alias records - Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html)

### 5. Amazon API Gateway - Build, Deploy, and Manage APIs

### 6. AWS Direct Connect - Dedicated Network Connection to AWS

### 7. Elastic Load Balancing (ELB) - High Scale Load Balancing

## Networking > Elastic Load Balancing

Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.

## Network Load Balancer Components

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

## Links

- [AWS Networking Fundamentals - YouTube](https://www.youtube.com/watch?v=hiKPPy584Mg&ab_channel=AmazonWebServices)
