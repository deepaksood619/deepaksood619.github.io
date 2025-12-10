# VPC/VNet Peering – Overview

![VPC-VNet-Peering-overview](https://images.ctfassets.net/gt6dp23g0g38/4R6ePYoUHsNZ0oi5jxqEsK/b7bd9a6d397abe0e01e4ae9f3df0528e/VPC-VNet-Peering-overview.jpg)

The first private networking option for Confluent Cloud is a peering connection. All of the public cloud providers—AWS, Google, and Azure—allow you to create peer connections between VPCs or VNets.

In Confluent Cloud, you provision a peering network using the Confluent Cloud console, admin API, or Terraform. You peer this Confluent network with your VPC or VNet. This is a standard cloud peering connection between Confluent and you, and it supports bidirectional connectivity, which means clients running in the peered VPC or VNet can access Confluent Cloud, and fully managed connectors running in Confluent Cloud can access data sources and sinks in your network.

Peering connectivity is a common pattern in cloud networking—it sets up a direct network connection between your network and the Confluent Cloud network. You tell Confluent what CIDR range you want us to use—it has to be a /16—and we provision the network. In the Confluent network, you can provision one or more Confluent clusters, which can all be accessed over the peering connection.

## VPC/VNet Peering – Requirements

There are three main requirements in order for Confluent Cloud peering to work.

- The first is a bidirectional connection—your network or infosec team must be okay with this.
    - We will never reach out to your infrastructure unless you configure a managed connector to access a data source or sink that’s running in your environment.
- The second requirement is a non-overlapping /16 CIDR range for each Confluent Cloud network.
    - This CIDR range should come from one of these three types of IP address ranges:
        - Private IP address range (RFC 1918)
            - 10.0.0.0/8
            - 172.16.0.0/12
            - 192.168.0.0/16
        - Shared address space (Carrier-grade NAT) (RFC 6598)
            - 100.64.0.0/10
        - Benchmark address space (RFC 2544)
            - 198.18.0.0/15 (only AWS and GCP)
    - There’s also a set of address ranges that are explicitly excluded for use:
        - 10.100.0.0/16
        - 10.255.0.0/16
        - 172.17.0.0/16
        - 172.20.0.0/16
- The third requirement is that your DNS servers must be able to access the authoritative DNS servers for confluent.cloud, which are hosted by Confluent on the internet.

## VPC/VNet Peering – Benefits

The Confluent peering network has a number of benefits:

- It’s the most easily understood private network option, and it supports private networking entirely—traffic never needs to go over the public internet.
- You can co-locate Confluent clusters within a Confluent network—this allows you to allocate a single /16 range for multiple Confluent clusters in a single environment.
- Because Confluent has access to your network, we have the ability to access data sinks and data sources that are present in your environment. For example, if you have a database you’d like us to capture change data capture out of, we can potentially run a fully managed connector that can capture changes from your database and publish to Confluent.

## VPC/VNet Peering Limitations

![VPC-VNet-Peering-Limitations](https://images.ctfassets.net/gt6dp23g0g38/Lg1JveWJSjB6ucPs87ZLW/b53ba4801c31bcc038c561f571bb06cb/VPC-VNet-Peering-Limitations.jpg)

There are a number of limitations with the Confluent peering network to be aware of.

- First, Confluent Cloud managed connectors can only be used for sources/sinks that are reachable via an IP address in the VPC peered with Confluent Cloud.
- Two other limitations relate to cloud networking—in general cloud networks don’t support transitive network connectivity.
    - If you want to access a Confluent network from a VPC or VNet, it has to be directly peered to the Confluent network. There are a few exceptions to this that we will discuss shortly, but generally speaking you can’t transit through one VPC or VNet to get to another one.
    - Related to the general lack of transitive network connectivity in the cloud, it’s hard to connect on-premises (datacenter-hosted) services to Confluent Cloud. That is, you can’t connect from an on-premises network to one of your VPCs in the public cloud, and from there to the Confluent Cloud network. VPC peering is really intended to allow private networking between VPCs/VNets and Confluent Cloud within the same region.
    - Both of these scenarios have workarounds that will be discussed on the next slide.
- Another limitation to mention is the non-overlapping /16 CIDR range requirement that was mentioned earlier.

## Google Cloud VPC Peering

![Google-Cloud-VPC-Peering](https://images.ctfassets.net/gt6dp23g0g38/720AL6IKVkOOmQfzw9hML0/c9075db6964b864caddc70a13b29c083/Google-Cloud-VPC-Peering.jpg)

Google Cloud treats VPC peering a bit differently than AWS and Azure in two ways:

- Regional boundary
    - Unlike AWS VPCs and Azure VNets, which are regional, Google VPCs are global and can span multiple regions. Despite this, even if a GCP Confluent Cloud network is peered to a global GCP VPC, only services in the same region as the cluster can access the Confluent Cloud cluster.
- Peering
    - An exception to the “no transitive connections” rule is Google's custom route import/export feature. Google Cloud Peering offers transitive connectivity for VPN or Google Interconnect to on-premises or other cloud provider networks to reach Confluent Cloud using this feature.
        - To enable this option, select it when you create the peering connection in Confluent Cloud.
        - This option can not provide transitive connectivity to Confluent Cloud from one Google Cloud VPC through another Google Cloud VPC.

## Other Caveats

### Azure

- Azure provides a capability called “**Gateway Transit**,” which allows a VNet to access a VPN or ExpressRoute gateway in a peered VNet. For example, if you have VNet X peered to VNet Y, and VNet Y has a ExpressRoute connecting it to your datacenter, Gateway Transit allows VNet X to access the datacenter through the ExpressRoute in VNet Y.
    - This capability is not currently supported on Confluent Cloud.
