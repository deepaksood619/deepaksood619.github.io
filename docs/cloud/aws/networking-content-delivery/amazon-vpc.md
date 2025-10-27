# Amazon VPC

Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways. You can use both IPv4 and IPv6 in your VPC for secure and easy access to resources and applications.

You can easily customize the network configuration of your Amazon VPC. For example, you can create a public-facing subnet for your web servers that have access to the internet. You can also place your backend systems, such as databases or application servers, in a private-facing subnet with no internet access. You can use multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet.

The following are the key concepts for VPCs:

- A **virtual private cloud(VPC)** is a virtual network dedicated to your AWS account.
- A **subnet** is a range of IP addresses in your VPC.
- A **route table** contains a set of rules, calledroutes, that are used to determine where network traffic from your subnet or gateway is directed.
- An **internet gateway** is a horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet. It therefore imposes no availability risks or bandwidth constraints on your network traffic.
- A **VPC endpoint** enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.

https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html

[Amazon VPC design - IPv6 on AWS](https://docs.aws.amazon.com/whitepapers/latest/ipv6-on-aws/amazon-vpc-design.html)

## Route Tables

- **Main route table** The route table that automatically comes with your VPC. It controls the routing for all subnets that are not explicitly associated with any other route table.
- **Custom route table** A route table that you create for your VPC.
- **Edge association** A route table that you use to route inbound VPC traffic to an appliance. You associate a route table with the internet gateway or virtual private gateway, and specify the network interface of your appliance as the target for VPC traffic.
- **Route table association** The association between a route table and a subnet, internet gateway, or virtual private gateway.
- **Subnet route table** A route table that's associated with a subnet.
- **Gateway route table** A route table that's associated with an internet gateway or virtual private gateway.
- **Local gateway route table** A route table that's associated with an Outposts local gateway. For information about local gateways, see [Local Gateways](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-local-gateways.html) in the AWS Outposts User Guide.
- **Destination** The destination CIDR where you want traffic to go. For example, an external corporate network with a 172.16.0.0/12 CIDR.
- **Propagation** Route propagation allows a virtual private gateway to automatically propagate routes to the route tables. This means that you don't need to manually enter VPN routes to your route tables. For more information about VPN routing options, see [Site-to-Site VPN Routing Options](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNRoutingTypes.html) in the Site-to-Site VPN User Guide.
- **Target** The target through which to send the destination traffic; for example, an internet gateway.
- **Local route** A default route for communication within the VPC.

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html

![image](../../../media/Cloud-AWS-Amazon-VPC-image1.jpg)

## Internet Gateway (IGW)

An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet. It therefore imposes no availability risks or bandwidth constraints on your network traffic.

An internet gateway serves two purposes

1. To provide a target in your VPC route tables for internet-routable traffic, and
2. To perform network address translation (NAT) for instances that have been assigned public IPv4 addresses.

An internet gateway supports IPv4 and IPv6 traffic.

To enable access to or from the internet for instances in a subnet in a VPC, you must do the following:

1. Attach an Internet gateway to your VPC.
2. Add a route to your subnet's route table that directs internet-bound traffic to the internet gateway. If a subnet is associated with a route table that has a route to an internet gateway, it's known as a public subnet. If a subnet is associated with a route table that does not have a route to an internet gateway, it's known as a private subnet.
3. Ensure that instances in your subnet have a globally unique IP address (public IPv4 address, Elastic IP address, or IPv6 address).

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html

## Security Groups

A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC can be assigned to a different set of security groups.

If you launch an instance using the Amazon EC2 API or a command line tool and you don't specify a security group, the instance is automatically assigned to the default security group for the VPC. If you launch an instance using the Amazon EC2 console, you have an option to create a new security group for the instance.

For each security group, you add rules that control the inbound traffic to instances, and a separate set of rules that control the outbound traffic.

AWS Security Groups **allow only "allow" rules, and they do not support "deny" rules**. By default, no traffic is allowed inbound until an "allow" rule is added, and outbound rules are implicitly permissive, allowing all outbound traffic until restricted by an added rule. Any traffic that doesn't have a matching allow rule is denied, as the absence of an allow rule implicitly denies access.

- A NACL contains a numbered list of rules and evaluates these rules in the increasing order while deciding whether to allow the traffic
	- NACL - Network Access Control List - [Control traffic to subnets using network ACLs - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html)
- A security group is stateful, that is, it automatically allows the return traffic.

## Security > Data Protection > Internetwork Traffic Privacy in Amazon VPC

Amazon Virtual Private Cloud provides features that you can use to increase and monitor the security for your virtual private cloud (VPC):

- **Security groups:** Security groups act as a firewall for associated Amazon EC2 instances, controlling both inbound and outbound traffic at the instance level. When you launch an instance, you can associate it with one or more security groups that you've created. Each instance in your VPC could belong to a different set of security groups. If you don't specify a security group when you launch an instance, the instance is automatically associated with the default security group for the VPC. For more information, see [Security Groups for Your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html).
- **Network access control lists (NACLs):** Network ACLs act as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level. For more information, see [Network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html).
- **Flow logs:** Flow logs capture information about the IP traffic going to and from network interfaces in your VPC. You can create a flow log for a VPC, subnet, or individual network interface. Flow log data is published to CloudWatch Logs or Amazon S3, and it can help you diagnose overly restrictive or overly permissive security group and network ACL rules. For more information, see [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html).
- **Traffic mirroring:** You can copy network traffic from an elastic network interface of an Amazon EC2 instance. You can then send the traffic to out-of-band security and monitoring appliances. For more information, see the [Traffic Mirroring Guide](https://docs.aws.amazon.com/vpc/latest/mirroring/).

| **Security group**                                                                                                                                           | **Network ACL (NACL)**                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Operates at the instance level                                                                                                                               | Operates at the subnet level                                                                                                                                                           |
| Supports allow rules only                                                                                                                                    | Supports allow rules and deny rules                                                                                                                                                    |
| Is stateful: Return traffic is automatically allowed, regardless of any rules                                                                                | Is stateless: Return traffic must be explicitly allowed by rules                                                                                                                       |
| We evaluate all rules before deciding whether to allow traffic                                                                                               | We process rules in number order when deciding whether to allow traffic                                                                                                                |
| Applies to an instance only if someone specifies the security group when launching the instance, or associates the security group with the instance later on | Automatically applies to all instances in the subnets that it's associated with (therefore, it provides an additional layer of defense if the security group rules are too permissive) |

While security groups operate at the instance level, network ACLs operate at the subnet level. Additionally, network ACLs are stateless, meaning they don't automatically allow return traffic.

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html#VPC_Security_Comparison

## VPC Endpoints

A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.

Endpoints are virtual devices. They are horizontally scaled, redundant, and highly available VPC components. They allow communication between instances in your VPC and services without imposing availability risks or bandwidth constraints on your network traffic.

There are two types of VPC endpoints: **interface endpoints** and **gateway endpoints**. Create the type of VPC endpoint required by the supported service.

- **Gateway Endpoints** (S3, DynamoDB only) → route table based.
- **Interface Endpoints (PrivateLink)** → ENI in your subnet, connects to AWS services or partner/customer services privately.

### Gateway Endpoints

A [gateway endpoint](https://docs.aws.amazon.com/vpc/latest/userguide/vpce-gateway.html) is a gateway that you specify as a target for a route in your route table for traffic destined to a supported AWS service. The following AWS services are supported:

- Amazon S3
    - S3 Endpoint is almost always better than NAT Gateway.
    - [Gateway endpoints for Amazon S3 - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html)
- DynamoDB

### Interface Endpoint

An [interface endpoint](https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html) is an elastic network interface with a private IP address from the IP address range of your subnet that serves as an entry point for traffic destined to a supported service.

https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html

### SQS - VPC Endpoint

AWS customers can access Amazon Simple Queue Service (Amazon SQS) from their Amazon Virtual Private Cloud (Amazon VPC) using VPC endpoints, without using public IPs, and without needing to traverse the public internet. VPC endpoints for Amazon SQS are powered by AWS PrivateLink, a highly available, scalable technology that enables you to privately connect your VPC to supported AWS services.

Amazon VPC endpoints are easy to configure. They also provide reliable connectivity to Amazon SQS without requiring an internet gateway, Network Address Translation (NAT) instance, VPN connection, or AWS Direct Connect connection. With VPC endpoints, the data between your Amazon VPC and Amazon SQS queue is transferred within the Amazon network, helping protect your instances from internet traffic.

AWS PrivateLink simplifies the security of data shared with cloud-based applications by eliminating the exposure of data to the public Internet. AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications, securely on the Amazon network. AWS PrivateLink makes it easy to connect services across different accounts and VPCs to significantly simplify the network architecture.

## VPC Endpoint vs VPC Peering

### VPC Endpoint

- **Purpose:** VPC endpoints allow you to privately connect your VPC to supported AWS services without traversing the public internet. This enhances security and can improve data transfer performance.
- **Use Case:** Commonly used for accessing AWS services like Amazon S3, DynamoDB, and other AWS services that support VPC endpoints.
- **Traffic Path:** Traffic between your VPC and the AWS service does not leave the Amazon network. It stays within the AWS network.

### VPC Peering

- **Purpose:** VPC peering allows you to connect two VPCs privately, enabling communication between instances in different VPCs as if they were on the same network.
- **Use Case:** Useful for scenarios where you have resources in separate VPCs that need to communicate with each other, such as connecting resources in a production VPC with those in a development VPC.
- **Traffic Path:** Traffic between instances in different VPCs travels across the AWS network, and there is no need to go over the public internet.

In summary, VPC endpoints are primarily used for connecting your VPC to AWS services, ensuring a private and direct connection. On the other hand, VPC peering is used to establish private connections between instances in different VPCs, allowing them to communicate with each other over the AWS network.

A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account. The VPCs can be in different regions (also known as an inter-region VPC peering connection). VPC Peering helps connect two VPCs and is not transitive. To connect VPCs together, the best available option is to use VPC peering.

## AWS PrivateLink / AWS Private Link

AWS PrivateLink is a highly available, scalable technology that you can use to privately connect your VPC to services and resources as if they were in your VPC. You do not need to use an internet gateway, NAT device, public IP address, AWS Direct Connect connection, or AWS Site-to-Site VPN connection to allow communication with the service or resource from your private subnets. Therefore, you control the specific API endpoints, sites, services, and resources that are reachable from your VPC.

Establish connectivity between VPCs and AWS services without exposing data to the internet

- Secure your traffic by using private IP addresses when exchanging data with your **software as a service (SaaS) applications**.
- Connect with simplified network and firewall management rules and reduced data output and NAT costs.
- Accelerate cloud migrations by combining PrivateLink with AWS Direct Connect or a VPN.

AWS PrivateLink provides private connectivity between virtual private clouds (VPCs), supported AWS services, and your on-premises networks without exposing your traffic to the public internet. Interface VPC endpoints, powered by PrivateLink, connect you to services hosted by AWS Partners and supported solutions available in AWS Marketplace.

PrivateLink endpoint appears as an elastic network interface (ENI) in the application’s VPC, allowing internal services to communicate with the SaaS API using private IP addresses. Importantly, the traffic never leaves the Amazon network, which significantly reduces the risk of data exposure or interception. Additionally, the SaaS provider cannot initiate connections to the application’s services because PrivateLink is inherently unidirectional from the service consumer (the company's VPC) to the service provider (the SaaS provider’s VPC). This architecture helps meet strict security and compliance requirements, such as zero-trust networking and least privilege access.

### AWS Private link vs AWS VPC Endpoints

#### Scope

- VPC endpoints are specific to certain AWS services and can be Interface or Gateway endpoints.
- AWS PrivateLink is a broader service that allows you to connect to multiple AWS services securely.

#### Traffic Isolation

- VPC endpoints keep the traffic within the AWS network but may involve traversing the public internet to reach certain services.
- AWS PrivateLink ensures that traffic does not leave the AWS network at any point.

#### Service Types

- VPC endpoints are specific to certain AWS services that support them.
- AWS PrivateLink is a framework for accessing various AWS and third-party services.

In summary, VPC endpoints are specific to certain AWS services, while AWS PrivateLink is a broader solution that provides a consistent and private way to access various services over the AWS network. You might use VPC endpoints for specific services and AWS PrivateLink for a more comprehensive approach to secure, private connectivity.

## AWS site-to-site VPN

Amazon VPC provides the facility to create an **IPsec VPN connection (also known as AWS site-to-site VPN)** between remote customer networks and their Amazon VPC over the internet. The following are the key concepts for a site-to-site VPN:

- **Virtual private gateway:** A virtual private gateway (VGW), also known as a VPN Gateway is the endpoint on the AWS VPC side of your VPN connection.
- **VPN connection:** A secure connection between your on-premises equipment and your VPCs.
- **VPN tunnel:** An encrypted link where data can pass from the customer network to or from AWS.
- **Customer Gateway:** An AWS resource that provides information to AWS about your Customer Gateway device.
- **Customer Gateway device:** A physical device or software application on the customer side of the Site-to-Site VPN connection.

[Amazon Virtual Private Cloud Connectivity Options - Amazon Virtual Private Cloud Connectivity Options](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/welcome.html)

**Question -** A retail company is using AWS Site-to-Site VPN connections for secure connectivity to its AWS cloud resources from its on-premises data center. Due to a surge in traffic across the VPN connections to the AWS cloud, users are experiencing slower VPN connectivity.

**Answer -** Create an AWS Transit Gateway with equal cost multipath routing and add additional VPN tunnels.

- VPN connection is a secure connection between your on-premises equipment and your VPCs. Each VPN connection has two VPN tunnels which you can use for high availability. A VPN tunnel is an encrypted link where data can pass from the customer network to or from AWS. The following diagram shows the high-level connectivity with virtual private gateways.
- With AWS Transit Gateway, you can simplify the connectivity between multiple VPCs and also connect to any VPC attached to AWS Transit Gateway with a single VPN connection. AWS Transit Gateway also enables you to scale the IPsec VPN throughput with equal cost multi-path (ECMP) routing support over multiple VPN tunnels. A single VPN tunnel still has a maximum throughput of 1.25 Gbps. If you establish multiple VPN tunnels to an ECMP-enabled transit gateway, it can scale beyond the default maximum limit of 1.25 Gbps. You also must enable the dynamic routing option on your transit gateway to be able to take advantage of ECMP for scalability.

## NAT Gateway

A NAT gateway is a Network Address Translation (NAT) service. You can use a NAT gateway so that **instances in a private subnet can connect to services outside your VPC but external services can't initiate a connection with those instances.**

When you create a NAT gateway, you specify one of the following connectivity types:

- **Public** – (Default) Instances in private subnets can connect to the internet through a public NAT gateway, but the instances can't receive unsolicited inbound connections from the internet. You create a public NAT gateway in a public subnet and must associate an Elastic IP address with the NAT gateway at creation. You route traffic from the NAT gateway to the internet gateway for the VPC. Alternatively, you can use a public NAT gateway to connect to other VPCs or your on-premises network. In this case, you route traffic from the NAT gateway through a transit gateway or a virtual private gateway.

- **Private** – Instances in private subnets can connect to other VPCs or your on-premises network through a private NAT gateway, but the instances can't receive unsolicited inbound connections from the other VPCs or the on-premises network. You can route traffic from the NAT gateway through a transit gateway or a virtual private gateway. You can't associate an Elastic IP address with a private NAT gateway. You can attach an internet gateway to a VPC with a private NAT gateway, but if you route traffic from the private NAT gateway to the internet gateway, the internet gateway drops the traffic.

- You can use a Network Address Translation gateway (NAT gateway) to enable instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection with those instances. To create a NAT gateway, you must specify the public subnet in which the NAT gateway should reside.
	- You must also specify an Elastic IP address to associate with the NAT gateway when you create it. The Elastic IP address cannot be changed after you associate it with the NAT Gateway. After you've created a NAT gateway, you must update the route table associated with one or more of your private subnets to point internet-bound traffic to the NAT gateway. This enables instances in your private subnets to communicate with the internet. If you no longer need a NAT gateway, you can delete it. Deleting a NAT gateway disassociates its Elastic IP address, but does not release the address from your account.
	- Each NAT gateway is created in a specific Availability Zone and implemented with redundancy in that zone.
	- If you have resources in multiple Availability Zones and they share one NAT gateway, and if the NAT gateway’s Availability Zone is down, resources in the other Availability Zones lose internet access. To create an Availability Zone-independent architecture, create a NAT gateway in each Availability Zone and configure your routing to ensure that resources use the NAT gateway in the same Availability Zone.

[NAT gateways - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)

### VPC NAT Gateway Costs

Using a single nat gateway that exists in only mumbai-1a az. Due to this other applications which are in other 2 az’s of mumbai region server through the mumbai-1a az. This architecture may be the cause of regional data transfer costs. We can save this cost by creating az specific natgateway.

- [Monitor NAT gateways with Amazon CloudWatch - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway-cloudwatch.html)
- [High cost in NatGateway bytes | AWS re:Post](https://repost.aws/questions/QUTdLrXmoISSerSzHivJ8yAA/high-cost-in-natgateway-bytes)
- [Find the top contributors to traffic through a NAT gateway in a VPC | AWS re:Post](https://repost.aws/knowledge-center/vpc-find-traffic-sources-nat-gateway)
- [Reduce data transfer charges for a NAT gateway | AWS re:Post](https://repost.aws/knowledge-center/vpc-reduce-nat-gateway-transfer-costs)
- [Understand AWS Data transfer details in depth from cost and usage report using Athena query and QuickSight | Networking & Content Delivery](https://aws.amazon.com/blogs/networking-and-content-delivery/understand-aws-data-transfer-details-in-depth-from-cost-and-usage-report-using-athena-query-and-quicksight/)
- [AWS NAT Gateway Pricing: How To Reduce Your Costs](https://www.cloudzero.com/blog/reduce-nat-gateway-costs/)

## NAT Instance

A NAT instance provides network address translation (NAT). You can use a NAT instance to allow resources in a private subnet to communicate with destinations outside the virtual private cloud (VPC), such as the internet or an on-premises network. The resources in the private subnet can initiate outbound IPv4 traffic to the internet, but they can't receive inbound traffic initiated on the internet.

[NAT instances - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html)

### NAT Instance vs NAT Gateway

| Attribute            | NAT gateway                                                                                                                                                                                       | NAT instance                                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Availability         | Highly available. NAT gateways in each Availability Zone are implemented with redundancy. Create a NAT gateway in each Availability Zone to ensure zone-independent architecture.                 | Use a script to manage failover between instances.                                                                                                                                |
| Bandwidth            | Scale up to 100 Gbps.                                                                                                                                                                             | Depends on the bandwidth of the instance type.                                                                                                                                    |
| Maintenance          | Managed by AWS. You do not need to perform any maintenance.                                                                                                                                       | Managed by you, for example, by installing software updates or operating system patches on the instance.                                                                          |
| Performance          | Software is optimized for handling NAT traffic.                                                                                                                                                   | A generic AMI that's configured to perform NAT.                                                                                                                                   |
| Cost                 | Charged depending on the number of NAT gateways you use, duration of usage, and amount of data that you send through the NAT gateways.                                                            | Charged depending on the number of NAT instances that you use, duration of usage, and instance type and size.                                                                     |
| Type and size        | Uniform offering; you don’t need to decide on the type or size.                                                                                                                                   | Choose a suitable instance type and size, according to your predicted workload.                                                                                                   |
| Public IP addresses  | Choose the Elastic IP address to associate with a public NAT gateway at creation.                                                                                                                 | Use an Elastic IP address or a public IP address with a NAT instance. You can change the public IP address at any time by associating a new Elastic IP address with the instance. |
| Private IP addresses | Automatically selected from the subnet's IP address range when you create the gateway.                                                                                                            | Assign a specific private IP address from the subnet's IP address range when you launch the instance.                                                                             |
| **Security groups**  | You cannot associate security groups with NAT gateways. You can associate them with the resources behind the NAT gateway to control inbound and outbound traffic.                                 | Associate with your NAT instance and the resources behind your NAT instance to control inbound and outbound traffic.                                                              |
| Network ACLs         | Use a network ACL to control the traffic to and from the subnet in which your NAT gateway resides.                                                                                                | Use a network ACL to control the traffic to and from the subnet in which your NAT instance resides.                                                                               |
| Flow logs            | Use flow logs to capture the traffic.                                                                                                                                                             | Use flow logs to capture the traffic.                                                                                                                                             |
| **Port forwarding**  | Not supported.                                                                                                                                                                                    | Manually customize the configuration to support port forwarding.                                                                                                                  |
| **Bastion servers**  | Not supported.                                                                                                                                                                                    | Use as a bastion server.                                                                                                                                                          |
| Traffic metrics      | View [CloudWatch metrics for the NAT gateway](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway-cloudwatch.html).                                                                  | View CloudWatch metrics for the instance.                                                                                                                                         |
| Timeout behavior     | When a connection times out, a NAT gateway returns an RST packet to any resources behind the NAT gateway that attempt to continue the connection (it does not send a FIN packet).                 | When a connection times out, a NAT instance sends a FIN packet to resources behind the NAT instance to close the connection.                                                      |
| IP fragmentation     | Supports forwarding of IP fragmented packets for the UDP protocol. Does not support fragmentation for the TCP and ICMP protocols. Fragmented packets for these protocols will get dropped. | Supports reassembly of IP fragmented packets for the UDP, TCP, and ICMP protocols.                                                                                                |

[Compare NAT gateways and NAT instances - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html)

## Internet Gateway (IGW) vs Nat Gateway vs VPC Endpoint

- **Internet Gateway (IGW)** connects your VPC to the internet for resources with public IPs, enabling both inbound and outbound traffic
- **NAT Gateway** allows instances in private subnets to connect to the internet for outbound traffic but prevents the internet from initiating inbound connections
- **VPC Endpoint** provides a secure, private connection to specific AWS services from within your VPC, keeping traffic off the public internet and improving security and performance

[AWS — Difference between Internet Gateway and NAT Gateway \| by Ashish Patel \| Awesome Cloud \| Medium](https://medium.com/awesome-cloud/aws-vpc-difference-between-internet-gateway-and-nat-gateway-c9177e710af6)

## Interface Endpoint vs Gateway Endpoint

| Interface Endpoint                                                                                                                                | Gateway Endpoint                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Supports many AWS Managed services, endpoint services hosted by other AWS customers and partners, and supported AWS Marketplace partner services. | It only supports connectivity to Amazon S3 and Amazon DynamoDB               |
| Acts as an entry point for traffic to reach supported services through AWS PrivateLink.                                                           |                                                                              |
| Use a private IP address                                                                                                                          | Does not require an elastic network interface.                               |
| Allow access from on-premise                                                                                                                      | Requests must only originate from a VPC                                      |
| Allow cross-region access through VPC peering via Transit Gateway                                                                                 | Cross-region access is not allowed                                           |
| Additional charges                                                                                                                                | No Cost                                                                      |
| Associated on a subnet level                                                                                                                      | Associated on a VPC Level                                                    |
| Traffic flows directly to the specific service through the interface endpoint.                                                                    | Traffic is routed through the gateway endpoint to the specified AWS service. |

[VPC Interface Endpoint vs. Gateway Endpoint in AWS - Tutorials Dojo](https://tutorialsdojo.com/vpc-interface-endpoint-vs-gateway-endpoint-in-aws/)

## Transit Gateway

AWS Transit Gateway is a network transit hub used to interconnect virtual private clouds (VPCs) and on-premises networks. As your cloud infrastructure expands globally, inter-Region peering connects transit gateways together using the AWS Global Infrastructure. All network traffic between AWS data centers is automatically encrypted at the physical layer.

AWS Transit Gateway connects your Amazon Virtual Private Clouds (VPCs) and on-premises networks through a central hub. This connection simplifies your network and puts an end to complex peering relationships. Transit Gateway acts as a highly scalable cloud router—each new connection is made only once.

Transit Gateway is a Regional resource and can connect thousands of VPCs within the same AWS Region. You can connect multiple gateways over a single Direct Connect connection for hybrid connectivity. Typically, you can use just one Transit Gateway instance connecting all your VPC instances in a given Region, and use Transit Gateway routing tables to isolate them wherever needed. Note that you do not need additional transit gateways for high availability, because transit gateways are highly available by design; for redundancy, use a single gateway in each Region. However, there is a valid case for creating multiple gateways to limit misconﬁguration blast radius, segregate control plane operations, and administrative ease-of-use.

![AWS Transit Gateway](../../../media/Screenshot%202025-10-25%20at%207.14.26%20PM.jpg)

You are charged hourly for each attachment on a transit gateway, and you are charged for the amount of traffic processed on the transit gateway.

### Transit gateway concepts

The following are the key concepts for transit gateways:

- Attachments — You can attach the following:
    - One or more VPCs
    - A Connect SD-WAN/third-party network appliance
    - An AWS Direct Connect gateway
    - A peering connection with another transit gateway
    - A VPN connection to a transit gateway
    - A network function attachment. For more information, see [Network function attachments](https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html#nf-attachment-overview).

- **Transit gateway Maximum Transmission Unit (MTU) —** The maximum transmission unit (MTU) of a network connection is the size, in bytes, of the largest permissible packet that can be passed over the connection. The larger the MTU of a connection, the more data that can be passed in a single packet. A transit gateway supports an MTU of 8500 bytes for traffic between VPCs, AWS Direct Connect, Transit Gateway Connect, and peering attachments (intra-Region, inter-Region, and Cloud WAN peering attachments). Traffic over VPN connections can have an MTU of 1500 bytes.

- **Transit gateway route table —** A transit gateway has a default route table and can optionally have additional route tables. A route table includes dynamic and static routes that decide the next hop based on the destination IP address of the packet. The target of these routes could be any transit gateway attachment. By default, transit gateway attachments are associated with the default transit gateway route table.

- **Associations —** Each attachment is associated with exactly one route table. Each route table can be associated with zero to many attachments.

- **Route propagation —** A VPC, VPN connection, or Direct Connect gateway can dynamically propagate routes to a transit gateway route table. With a Connect attachment, the routes are propagated to a transit gateway route table by default. With a VPC, you must create static routes to send traffic to the transit gateway. With a VPN connection, routes are propagated from the transit gateway to your on-premises router using Border Gateway Protocol (BGP). With a Direct Connect gateway, allowed prefixes are originated to your on-premises router using BGP. With a peering attachment, you must create a static route in the transit gateway route table to point to the peering attachment.

[AWS Transit Gateway](https://aws.amazon.com/transit-gateway/)

[What is AWS Transit Gateway for Amazon VPC? - Amazon VPC](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html)

### Transit VPCs

Transit VPC can be used to enable connectivity between various VPC’s in different regions and customer data centers. You can use this to connect multiple VPCs that are geographically disparate and/or running in separate AWS accounts, to a common VPC that serves as a global network transit center. This network topology simplifies network management and minimizes the number of connections that you need to set up.

![Transit VPC](../../../media/Screenshot%202025-10-26%20at%2010.56.41%20AM.jpg)

Transit VPC is not the right solution for this use-case as Transit Gateway provides several advantages over Transit VPC:
1. Transit Gateway abstracts away the complexity of maintaining VPN connections with hundreds of VPCs.
2. Transit Gateway removes the need to manage and scale Amazon EC2 based software appliances. AWS is responsible for managing all resources needed to route traffic.
3. Transit Gateway removes the need to manage high availability by providing a highly available and redundant Multi-AZ infrastructure.
4. Transit Gateway improves bandwidth for inter-VPC communication to burst speeds of 50 Gbps per Availability Zone (AZ).
5. Transit Gateway streamlines user costs to a simple per hour per/GB transferred model.
6. Transit Gateway decreases latency by removing Amazon EC2 proxies and the need for VPN encapsulation.

## Others

- [What is VPC peering? - Amazon Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html)
- [Overview of Data Transfer Costs for Common Architectures | AWS Architecture Blog](https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/)
- [AWS VPC Beginner to Pro - Virtual Private Cloud Tutorial - YouTube](https://www.youtube.com/watch?v=g2JOHLHh4rI&ab_channel=freeCodeCamp.org)
- [AWS VPC Beginner to Pro - Virtual Private Cloud Tutorial - YouTube](https://www.youtube.com/watch?v=g2JOHLHh4rI&ab_channel=freeCodeCamp.org)
