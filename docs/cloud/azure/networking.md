# Networking

## Azure network foundation services

Azure network foundation services provide core connectivity for your resources in Azure. Network foundation services include **Azure Virtual Network**, **Azure Private Link**, and **Azure DNS**. Together, these core services build upon each other to provide the foundation for your Azure network.

![azure network foundation services](../../media/Screenshot%202025-12-14%20at%201.27.55%20PM.png)

[Azure Network Foundation Services Overview \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/networking/foundations/network-foundations-overview)

## What is Azure Virtual Network?

Azure Virtual Network provides the fundamental building block for your private network in Azure. This service enables Azure resources like virtual machines (VMs) to securely communicate with each other, the internet, and on-premises networks. Virtual networks deliver the scale, availability, and isolation benefits of Azure infrastructure while maintaining the familiar networking concepts you use in traditional datacenters.

[Azure Virtual Network](https://learn.microsoft.com/en-us/azure/virtual-network) enables you to create private networks in the cloud, securely connecting Azure resources, the Internet, and on-premises networks.

Two virtual networks are provisioned in the following example:

- The hub virtual network is used to deploy Azure services and provide access to data resources. The hub is optionally connected to an on-premises network.
- The hub peers with a spoke network containing a business tier subnet with virtual machines to process user interactions, and an application subnet to handle data storage and transactions.

[Azure Virtual Network Documentation - Tutorials, quickstarts, API references \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-network/)

## Azure Private Link

Azure Private Link enables secure, private connectivity from your virtual network to services that don't traverse the public Internet.

[Private Link Documentation - Quickstarts, How to guides, and API references \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/private-link/)

## Azure DNS

[Azure DNS](https://learn.microsoft.com/en-us/azure/dns) provides cloud-based public and private domain name hosting and resolution. It includes three services that provide public or private DNS resolution and hosting, and one load balancing service:

- [Azure Public DNS](https://learn.microsoft.com/en-us/azure/dns/public-dns-overview) provides high-availability hosting for public DNS domains.
- [Azure Private DNS](https://learn.microsoft.com/en-us/azure/dns/private-dns-overview) is a DNS naming and resolution service for virtual networks and the private services hosted inside those networks.
- [Azure DNS Private Resolver](https://learn.microsoft.com/en-us/azure/dns/dns-private-resolver-overview) is a fully managed high availability DNS service that enables you to query private DNS zones from an on-premises environment and vice versa without deploying VM based DNS servers.
- [Azure Traffic Manager](https://learn.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview): A DNS-based traffic load balancer that can distribute traffic to public facing applications across Azure regions.

## Networking architecture design

Azure provides a wide range of networking tools and capabilities. These are just some of the key networking services available in Azure:

- [Azure Virtual Network](https://azure.microsoft.com/services/virtual-network). Provision private networks, and optionally connect to on-premises datacenters.
- [Azure Virtual WAN](https://azure.microsoft.com/services/virtual-wan). Optimize and automate branch-to-branch connectivity.
- [Azure Private Link](https://azure.microsoft.com/services/private-link). Enable private access to services that are hosted on the Azure platform while keeping your data on the Microsoft network.
- [Azure Firewall](https://azure.microsoft.com/services/azure-firewall). Provide protection for your Azure Virtual Network resources.
- [Azure Application Gateway](https://azure.microsoft.com/services/application-gateway). Build highly secure, scalable, highly available web front ends.
- [Azure ExpressRoute](https://azure.microsoft.com/services/expressroute). Create a fast, reliable, and private connection to Azure.
	- ExpressRoute lets you extend your on-premises networks into the Microsoft cloud over a private connection with the help of a connectivity provider. With ExpressRoute, you can establish connections to Microsoft cloud services, such as Microsoft Azure and Microsoft 365.
- [Azure Load Balancer](https://azure.microsoft.com/services/load-balancer). Deliver high availability and network performance to your apps.
- [Azure VPN Gateway](https://azure.microsoft.com/services/vpn-gateway). Establish high security cross-premises connectivity.

[Networking architecture design - Azure Architecture Center \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/networking/)
