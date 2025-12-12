# AWS/Azure Private Link

## Private Link – Overview

![private-link-overview](https://images.ctfassets.net/gt6dp23g0g38/6R3ihFMjTVMOgMi6AylBTj/33395db5a482bc6290a6394cba0b6c0a/private-link-overview.jpg)

Another option for private networking in Confluent Cloud is the use of Private Link. Private Link allows you to access your Confluent Cloud cluster through a private endpoint that exists in your virtual network.

Here's what this looks like architecturally:

- On the Confluent side of the Private Link, we continue to run multiple brokers for you; you don't have to worry about how many brokers are running.
- You create a Private Link network that contains an endpoint service. You then create endpoints in your VPC or VNet and associate them with the endpoint service that establishes connectivity to the Kafka cluster; each endpoint is an IP address that lives in one of your subnets.
    - If you're using a single-zone Confluent cluster, you'll end up with one endpoint, in one subnet.
    - If you're using a multi-zone Confluent cluster, you'll end up with three endpoints, each in a different subnet.

This is a unidirectional connection between your network and the Confluent network—this means that clients running in your network can access Confluent Cloud, but nothing in Confluent Cloud can access your environment.

Private Link is one of the most secure options from a cloud networking perspective, and it is also easier to set up from an IP address range perspective. It is a bit limiting though from an integration perspective:

- Because Confluent can’t access your network, we can’t directly integrate with your data sources and sinks, and it requires some additional effort to set up the DNS infrastructure to support Private Link.
- If you can meet the DNS requirements and don’t need fully managed connectors, it is a really good solution.

## Private Link – Requirements

There are several differences between Private Link requirements and those that exist for peered networks.

- Private Link networks only require three IP addresses from the subnets in your VPC or VNet.
    - Private Link does not require a /16 CIDR range like VPC/VNet peering
- Because it's a TCP protocol, not HTTP or HTTPs, there's additional networking that is required to make this work.
    - On the Confluent side, we have a custom layer of routing and proxies that are able to use the TLS SNI (or server name indication) extension on each packet to forward messages to the right broker. We take care of all of this for you.
    - On your side of the network, we require you to set up wildcard DNS records to forward all traffic destined for Confluent brokers to the correct Private Link endpoint that exists in your VPC.
        - For AWS, this is a DNS A record
            - A records translate domain names to IP addresses
        - For Azure, this is a DNS CNAME record
            - CNAME records translate domain names to other domain names
- Because Kafka clients must be able to properly reach all of the brokers through these IP addresses, in your DNS provider (for example, Route 53 in AWS or Azure DNS in Azure) you have to create a custom (private) DNS zone. In this zone, you have to set up a number of wildcard DNS records to resolve all broker DNS names to the Private Link endpoint IPs.
    - This is typically a three-step process:
        - In your DNS system, create a private DNS zone for the Confluent domain specified by the Confluent network
        - Identify the DNS name or IP addresses of the interface endpoints, and the DNS wildcard records that need to be created to point to each of the endpoints
        - Create wildcard CNAME records that forward traffic destined for the Confluent Cloud cluster through the correct interface endpoint

At a high level, for each Confluent Cloud network that you provision, we'll designate a subdomain of confluent.cloud for which you'll have to create a custom private DNS zone that clients will have to use to access the Private Link endpoint. Additionally, your DNS infrastructure will need to be able to delegate DNS to a set of custom resolvers that we host on the internet. This involves creating four DNS records, all CNAMES, that take each zonal DNS subdomain, and resolve it to a VPC endpoint.

## Private Link – Benefits

![private-link-benefits](https://images.ctfassets.net/gt6dp23g0g38/2HyQM4sbvyB87UhH5ouRTK/89d81145d6d06a814737a1d85466d05c/private-link-benefits.jpg)

If you're able to set up the DNS configurations (Confluent can assist with this), there are a number of benefits to the Private Link network options:

- One significant characteristic of Private Link is that it's unidirectional. You can access the Confluent cluster over the Private Link, but Confluent has no access to your environment; this helps improve your security posture.
- Another benefit is that Confluent no longer requires a /16 CIDR for Confluent Cloud—all that is required is a single IP address for each availability zone.
- One really great benefit is that now on-premises networks can access Confluent Cloud through your VPC—no proxies needed. Because of the endpoint architecture, clients can access the cluster as if the Confluent cluster existed in your VPC or VNet. Kafka clients that are peered to the VPC or VNet where the Private Link is set up will be able to access Confluent; no additional HAProxy or NGINX is required, as long as the DNS is properly configured and clients can access endpoints in the Private Linked VPC or VNet.

## Private Link – Limitations

![private-link-limitations](https://images.ctfassets.net/gt6dp23g0g38/iAlZdSJY4EqeNbFenKwV8/dec89e739518f6a1a6186724300066b4/private-link-limitations.jpg)

- The fact that Private Link is unidirectional is also a limitation.
    - Because we can't reach across the Private Link from the Confluent network into your network, fully managed connectors running in the Confluent network won’t be able to access data sinks and sources in your environment over the Private Link connection.
    - When you want to connect data sinks and sources - databases, data lakes, etc, - you have to either expose your service over the Internet, or self-manage Kafka Connect.
- The DNS configuration for Private Link is an additional step you have to complete.
    - If you use your cloud provider’s DNS, this is relatively easy to set up, but at the end of the day, using Private Link require a set of between one and four wildcard DNS entries in order for Confluent Cloud to properly work.
    - As of today (Q2 2022), PrivateLInk is only available in AWS and Azure.

## AWS/Azure Private Link – Miscellaneous

![azure-private-link-misc](https://images.ctfassets.net/gt6dp23g0g38/6DKd5Fd4DgAcSmdadEmRHc/5b845045116d90a1049694fccb9daafb/azure-private-link-misc.jpg)

Here’s a few things to keep in mind when considering using Private Link for Confluent Cloud

- Just like other cloud providers, access to the provisioning control plane still requires Internet access
- Additionally, access to Schema Registry - which is metadata only - is only accessible over the Internet
- For a given Confluent Cloud Private Link network, you can whitelist up to ten cloud accounts, i.e., AWS accounts or Azure subscriptions, whose VPCs or VNets can then be set up to access Confluent Cloud
    - Once a given account is whitelisted for a Confluent Cloud PL network, you can connect as many VPCs or VNets to the network as you want
- The Confluent network will be provisioned in three availability zones; you can run one or more clusters in the Confluent Network, and each one can be either single-zone or multi-zone.
- In AWS, you’ll need to have a subnet in your VPC associated with availability zone ID used by the Confluent Private Link network; the Private Link endpoint will consume an IP address from each of those subnets
- In AWS regions with more than three AZs, you’ll have the ability to specify which AZs the Confluent Network resides in.

In summary, Private Link is the most secure network connectivity option between your network and Confluent Cloud. It also reduces the need for proxies; it behaves as if Kafka is running in your VPC or VNet. If you can meet the DNS requirements, it’s a really solid option.

## Errata

### Google Private Service Connect (PSC)

As of Q3 2022, Google PSC is also fully supported on Confluent Cloud. PSC is the Google equivalent to AWS PrivateLink and Azure Private Link. It provides a secure, unidirectional connection to Confluent Cloud that is initiated from your VPC network.

Similar to AWS PrivateLink and Azure Private Link, Google Private Service Connect has these behaviors:

- Private Service Connect is unidirectional. You can access the Confluent cluster over PSC, but Confluent has no access to your environment.
    - This may improve your security posture, depending on your security requirements.
    - Because we can't reach across the PSC, fully managed connectors running in the Confluent network won’t be able to access data sinks and sources in your environment over the PSC connection.
    - When you want to connect data sinks and sources - databases, data lakes, etc, - you have to either expose your service over the Internet, or self-manage Kafka Connect.
- Private Service Connect networks only require three IP addresses from the subnets in your VPC. It does not require a /16 CIDR range like VPC/VNet peering.
- On your side of the network, we require you to create a Private DNS Zone containing wildcard DNS records to forward all traffic destined for Confluent brokers to the correct Private Service Connect endpoints that exist in your VPC.
    - There will be one (1) regional wildcard "A" record pointing at all three PSC endpoints in your VPC.
    - There will be three (3) zonal wildcard "A" records, one pointing at each of the PSC endpoints in the VPC.

Google PSC also has these key differences from AWS PrivateLink and Azure Private Link:

- Google VPCs are global, but Confluent Cloud clusters are regional, as are Confluent Cloud PSC networks.
- Three distinct PSC endpoints must be created, one in each AZ (rather than a single "endpoint" object consisting of three endpoints)
- You can specify which three IP addresses in your VPC are used for the three PSC endpoints
- Google Cloud does not support the following features for Private Service Connect:
    - For a cluster in one region, you cannot provision a Private Service Connect endpoint in a different region.
    - If you have a Private Service Connect endpoint in one region, you cannot access that endpoint from a different region.
    - Access to PSC endpoints from on-premise over Google Cloud Interconnect is currently in Public Preview as of November 17, 2022 ([https://cloud.google.com/vpc/docs/configure-private-service-connect-services#on-premises](https://cloud.google.com/vpc/docs/configure-private-service-connect-services#on-premises)). Therefore, accessing PSC directly from on-premise is not recommended for production.
