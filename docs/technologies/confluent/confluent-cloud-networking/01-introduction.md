# Introduction

![confluent-cloud-networking-intro](https://images.ctfassets.net/gt6dp23g0g38/1ntqDwcP1q5VgraE0XUdug/445158bc26777f83d1ac9911219a8ef0/confluent-cloud-networking-intro.jpg)

Confluent Cloud runs in its own virtual network in one of three cloud providers: AWS, Google Cloud, or Azure. Your apps run in another network—in the cloud or on premises. During this course, you will learn about the available network connectivity options for connecting your network with the Confluent Cloud network. You will also learn about the benefits of each option as well as any trade-offs that need to be considered.

## Networking Fundamentals – IPv4 Addresses

![networking-fundamentals](https://images.ctfassets.net/gt6dp23g0g38/5a1mHpRQXKKHWwTYDhsvgP/a5e839aa41b1ee8c3d995cad754653c3/networking-fundamentals.jpg)

There are a couple of key networking fundamentals that we need to understand before we discuss Confluent Cloud networking in depth. The first is IP addresses. If you’re already familiar with public and private IP addresses, and CIDR notation, you can skip this section. If CIDR is a new term for you, then hang around.

Devices that are part of a network are uniquely identified by an IP address. A portion of the address identifies the network the device belongs to and the remainder of the address identifies the device on that network. Traffic that is destined for the device is first routed to its network and then to the device itself.

IPv4 addresses are 32 bits that are broken down into four “octets” of 8 bits each—for example, 10.0.10.20. Following the address is a network mask, which is separated from the address by a slash. The network mask—for example, /16—determines what portion of the address is the network ID and what portion is the host ID. A mask is applied from the left side of the address. A /16 mask, for example, says that the leftmost 16 bits of an address refer to the network ID, while the remaining 16 bits refer to the host ID.

A network is commonly referred to by its CIDR, which stands for Classless Inter-Domain Routing. A /16 CIDR network is one where the first two octets are the network ID—2 lots of 8 bits is 16—and the last two octets are the host ID. A /16 CIDR network can be broken down into smaller networks, e.g., /24 CIDR networks. The larger the mask value, the smaller the range of host IDs in the network.

Devices can be assigned both private and public IP addresses.

- All devices in cloud networks are assigned a private IP address. A subset of all available IPv4 addresses is dedicated to the use of private addresses.
- Private addresses are not directly accessible from the public internet. They are only known to devices within their private network.
- This allows the same IP address to be used by multiple organizations—each contained within its own private network.
- Public IP addresses are globally unique and are directly accessible from the public internet. If a device needs to be accessed over the internet, it can be assigned a public IP address. Otherwise, the device is typically only assigned a private IP address.

We will cover methods for communicating with devices that are part of a private network later in this course.

Depending on the networking option(s) you choose for your Confluent Cloud network architecture, you may have to fit Confluent Cloud IP address range(s) into your existing network infrastructure.

## Networking Fundamentals – DNS

![networking-fundamentals-dns](https://images.ctfassets.net/gt6dp23g0g38/42eoCdqyJSLYzeFY9z1COj/08b222da0a3ab90c9c71d1d8f8ca9a18/networking-fundamentals-dns.jpg)

The second networking fundamental concept we need to understand is the Domain Name System (DNS). Again, if you’re already familiar with DNS, you can skip this section.

It can be very tedious referring to devices by their IP address so we typically assign them a friendly name that is known as the domain name. It is much easier to refer to devices using this domain name.

The Domain Name System is a distributed, hierarchical system that provides information about domain names and their corresponding IP addresses. This hierarchy consists of root nameservers at the top. At the next level are top-level domain (TLD) nameservers for top-level domains such as .com, .net, and .io. Below TLD nameservers are additional nameservers, which store domain name information for their respective domains (such as confluent.io). Your organization may also host its own nameservers, which share information with the rest of the DNS network.

From a client side, each client that needs to be able to access servers via domain names is configured with a set of DNS servers, which the client will use to resolve DNS names. The client will make DNS requests to these DNS servers; if the DNS server doesn’t know the answer to the DNS request, the DNS server will forward the request to another DNS server, and so on, until a response is found and returned back to the client.

DNS records describe the relationship between domain names and IP addresses.

- A records translate domain names to IP addresses
- CNAME (canonical name) records translate domain names to other domain names

A name resolution request occurs when establishing a network connection with a device by its domain name. This name resolution is an iterative process that works its way through the DNS hierarchy until it reaches the authoritative nameserver that holds the DNS record associated with the request. It is that nameserver that returns the corresponding IP address for the requested domain name.

## Cloud Networking Fundamentals

![networking-fundamentals-vpc](https://images.ctfassets.net/gt6dp23g0g38/6mChq65Z4kHOvF654BBblT/774e7b6f3a4c99b5f598f65c3516d8e7/networking-fundamentals-vpc.jpg)

Let’s now take these basic networking concepts and apply them to the cloud.

A cloud service provider (CSP) such as AWS, Google, or Azure, runs multiple services for customers, including “Infrastructure as a Service (IaaS),” which means it is running virtual infrastructure for a customer. This often includes virtual machines as well as the networks through which those machines can interact with other services. Different cloud providers have different patterns around how virtual networks and virtual machines interact with each other.

Different cloud providers have different names for the logical private networks they provide. **AWS and Google call them Virtual Private Clouds or VPCs. Azure calls them Virtual Networks, or VNets.** It isn’t strictly true, but it’s often helpful to think of cloud virtual machines as running “in” a VPC or VNet.

The implementation and terminology of this varies from cloud to cloud, but generally speaking, the following are true (in the context of IPv4 networking):

- The VPC/VNet is typically assigned a /16 CIDR block of IPv4 addresses.
    - This CIDR is broken into one or more subnets, each of which has a subset of the VPC/VNet address block, e.g., a /24 CIDR block
    - Virtual machines running “in” the VPC/VNet will be assigned one or more interfaces, each of which may have a combination of the following:
        - One or more “private” IP addresses allocated from the CIDR range of a subnet in the VPC/VNet
        - Zero or more “public” IP addresses
- Cloud providers break their infrastructure into cloud regions across the globe which correspond to groups of datacenters where infrastructure is running.
    - Each region is broken down into availability zones (AZs) which are a subset of the region’s datacenters
    - Availability zone datacenters are separated by enough distance such that a destructive event that impacts them, i.e., a flood or hurricane, should not impact others
    - When you create a VPC or VNet, it runs in a specific cloud provider region
        - You can connect VPCs or VNets within the same region using something called VPC/VNet peering
        - Google Cloud supports global VPCs which span multiple regions, but each subnet in a Google VPC lives in a particular region—a subnet can’t span regions
- When you create a virtual network, you use policies or rules to control traffic in the VPC/VNet:
    - Routing rules control how traffic gets to where it needs to go
        - This may include rules for traffic leaving the VPC/VNet in order to access other private networks or public networks
        - This may also include rules for traffic entering or traversing the VPC/VNet
    - Security rules are used to control who or what can access a service
        - These can be accept or deny rules
        - These may be specific to a set of IPs, machines, ports, protocols, or tags
        - There is a logical precedence for these rules
        - Depending on the cloud provider, these rules may apply at the interface level, the machine level, or at the subnet level
- Your network architecture can selectively control what can talk to what—for example, in some environments, you can directly access the internet, while in other environments, access to the internet may be blocked.
- Separately, there may be scenarios where you expose parts of your infrastructure to the wider internet. For example, if your business has a public website, that website is accessible from anywhere in the world.
- Also, in some cases, you may directly connect your cloud network to other cloud networks, or to your on-premises infrastructure, either directly or through a VPN or tunnel.

## Kafka-Specific Networking Basics

![specific-networking-basics](https://images.ctfassets.net/gt6dp23g0g38/13zPW1MxMtqB5FkE7FDCJZ/9d6b4f0415e38ea7628c5f776c381266/specific-networking-basics.jpg)

Now that we have covered some basic networking concepts as they apply to Confluent Cloud, let’s now take a look at a few Kafka concepts that are also important from a Confluent Cloud perspective.

When designing a network architecture for Confluent (or Kafka), there are a few things to be aware of.

- Kafka uses a binary protocol over TCP. It does not use HTTP (or HTTPS). It does support TLS, with either of these two options:
    - security.protocol=SSL; Kafka protocol directly encrypted with TLS (supports mTLS, as well)
    - security.protocol=SASL_SSL; Kafka protocol with both authentication and encryption
- Kafka clients need to be able to access all of the brokers in a given Kafka cluster, and will initiate direct connections to individual brokers to produce or consume partitions that are active on those brokers. This means that you cannot access Kafka through a traditional load balancer, which assumes that your client doesn’t care which backend server it connects with. The data flow looks like this:
    - A client is given one or more Kafka ‘bootstrap’ Kafka URLs (often in the form of a setting bootstrap.servers)
    - The client will retrieve cluster metadata from the bootstrap servers (trying one at a time until it is successful); this metadata includes connectivity information for all brokers
    - Once it has the metadata, the client will connect to individual brokers directly to perform various operations (produce, consume, etc.)
    - If a client is trying to reach a specific broker, and the request arrives at the wrong broker, things will not work correctly.
- Given the above, for Kafka to work properly:
    - For each broker, the client needs a valid DNS name (or IP address) and port through which it can access that specific broker; this is the advertised listener
    - In TLS environments, each broker needs a certificate that matches the DNS name that the client is accessing the broker through (either directly in the common name (CN) or as a subject alternative name (SAN)). Wildcards work according to standard DNS practices (e.g., `*.some.domain.com` will work; `*-something.some.domain.com` will not)
    - The client will need to be able to:
        - Resolve each broker’s DNS name to an IP address that it has a network path to
        - Access the broker (through the IP address and port); this includes network path and firewalls
        - Trust the certificate on the broker (either by trusting the CA chain that signed the certificate, or trusting the certificate directly)
        - Match the provided (not resolved) advertised listener hostname/IP to the CN or SAN on the certificate
    - Kafka client(s) support SNI, so all packets include the Server Name Indication extension to indicate which server the client is trying to reach.

In addition to the above, the server may require that the client provide some form of authentication; in Confluent Cloud, we use SASL_SSL with the SASL mechanism of PLAIN which is effectively APIkey/Secret authentication (all wrapped in SSL encryption).

## Manage Networking on Confluent Cloud

Confluent Cloud supports the following networking solutions on the specified cloud service providers:

- Amazon Web Services (AWS)
    - [Public connectivity](https://docs.confluent.io/cloud/current/networking/overview.html#cloud-networking-support-public)
    - [Private connectivity](https://docs.confluent.io/cloud/current/networking/overview.html#cloud-networking-support-private): Private Network Interface, VPC Peering, Transit Gateway, PrivateLink
- Microsoft Azure
    - [Public connectivity](https://docs.confluent.io/cloud/current/networking/overview.html#cloud-networking-support-public)
    - [Private connectivity](https://docs.confluent.io/cloud/current/networking/overview.html#cloud-networking-support-private): Private Link, VNet Peering
- Google Cloud
    - [Public connectivity](https://docs.confluent.io/cloud/current/networking/overview.html#cloud-networking-support-public)
    - [Private connectivity](https://docs.confluent.io/cloud/current/networking/overview.html#cloud-networking-support-private): Private Service Connect, VPC Peering

[Networking on Confluent Cloud \| Confluent Documentation](https://docs.confluent.io/cloud/current/networking/overview.html)
