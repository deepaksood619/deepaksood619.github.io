---
slug: /confluent-cloud-networking-flashcards
title: Confluent Cloud Networking Flashcards
description: Active recall cards for Confluent Cloud networking options, architecture, and cost optimization
created: 2026-07-05
updated: 2026-07-05
total_cards: 60
difficulty_distribution:
  beginner: 28
  intermediate: 20
  advanced: 12
source_notes:
  - technologies/confluent/cloud-networking/01-introduction.md
  - technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md
  - technologies/confluent/cloud-networking/07-aws-transit-gateway.md
  - technologies/confluent/cloud-networking/08-aws-azure-private-link.md
  - technologies/confluent/cloud-networking/09-aws-pni.md
  - technologies/confluent/cloud-networking/10-best-networking-options.md
---

## Private Network Interface (PNI)

^learnkit-449948885
T | PNI Definition |
Q | What is Private Network Interface (PNI) in Confluent Cloud? |
A | A secure, low-cost private networking option built on AWS Elastic Network Interfaces (ENI) that attaches network interfaces from your AWS account directly into Confluent-managed services. |
I | Uses the same AWS primitives as EKS and Lambda | Source: technologies/confluent/cloud-networking/09-aws-pni.md#introduction |

^learnkit-487786321
T | PNI Architecture - Gateway |
Q | What is a Gateway in PNI architecture? |
A | A component that represents a connectivity type to and from Confluent Cloud services, created within an environment for a specific region/zone(s). |
I | Gateway is the top-level connectivity abstraction in PNI | Source: technologies/confluent/cloud-networking/09-aws-pni.md#architecture |

^learnkit-255846116
T | PNI Architecture - Access Point |
Q | What is an Access Point in PNI architecture? |
A | A connection instance to a gateway consisting of a set of AWS ENIs in the same cloud region as the gateway. |
I | Access Point connects Gateway to actual ENIs | Source: technologies/confluent/cloud-networking/09-aws-pni.md#architecture |

^learnkit-296796943
T | PNI ENI Ownership |
Q | Who owns and controls the ENIs in a PNI setup? |
A | The customer owns and controls ENIs (create, update, delete, attach security groups); Confluent only has limited permission to attach ENIs to Confluent Cloud VMs. |
I | This ownership model is key to PNI's security benefits | Source: technologies/confluent/cloud-networking/09-aws-pni.md#architecture |

^learnkit-425062700
T | PNI Pricing - Enterprise |
Q | What is the throughput pricing for Enterprise clusters with PNI? |
A | $0.04/GB (20% reduction from the standard $0.05/GB). |
I | Compare to PrivateLink: $0.05/GB + $0.01/GB traffic charges | Source: technologies/confluent/cloud-networking/09-aws-pni.md#cost-savings |

^learnkit-696448470
T | PNI Pricing - Freight |
Q | What is the throughput pricing for Freight clusters with PNI? |
A | $0.03/GB (40% reduction from the standard $0.05/GB). |
I | Freight offers the best cost optimization with PNI | Source: technologies/confluent/cloud-networking/09-aws-pni.md#cost-savings |

^learnkit-257811375
T | PNI Cluster Support |
Q | Which Confluent Cloud cluster types support PNI? |
A | Enterprise and Freight Kafka clusters on AWS only. |
I | PNI is currently AWS-exclusive; other cloud providers coming | Source: technologies/confluent/cloud-networking/09-aws-pni.md#requirements |

^learnkit-211231736
T | PNI Gateway Limit |
Q | How many PNI gateways can you have per Confluent Cloud environment? |
A | Maximum 2 PNI gateways per environment (contact support for more). |
I | But one gateway can access multiple clusters in same region | Source: technologies/confluent/cloud-networking/09-aws-pni.md#key-limitations |

^learnkit-417494385
T | PNI vs PrivateLink Cost Savings |
Q | What cost savings does PNI provide compared to PrivateLink for a typical Enterprise workload? |
A | Approximately 22% savings (e.g., $50,301 vs $64,673 per month for 60MB/s ingress, 120MB/s egress workload). |
I | Freight + PNI achieves 50% savings vs Enterprise + PrivateLink | Source: technologies/confluent/cloud-networking/09-aws-pni.md#sample-cost-comparison |

^learnkit-860567713
T | PNI Cost Savings Mechanism |
Q | How does PNI eliminate cross-AZ networking costs? |
A | Through zone-aligned architecture, writing directly to object storage (reducing broker replication), and producer/consumer alignment via follower fetching. |
I | Cross-AZ costs represent 80-90% of infrastructure costs after storage optimization | Source: technologies/confluent/cloud-networking/09-aws-pni.md#how-savings-are-achieved |

## Understanding PNI

^learnkit-510178589
T | PNI Security Model |
Q | How does PNI achieve security comparable to PrivateLink? |
A | By allowing customers to apply AWS Security Groups to ENIs for traffic control, providing a single policy enforcement point with full directionality control. |
I | Security Groups on ENIs = centralized policy + smaller attack surface | Source: technologies/confluent/cloud-networking/09-aws-pni.md#security-features |

^learnkit-312140446
T | PNI vs VPC Peering Security |
Q | Why is PNI more secure than VPC Peering? |
A | PNI provides centralized security policies via Security Groups, eliminates IP address overlap issues, has smaller attack surface, and offers tighter egress controls. |
I | VPC Peering lacks centralized policy enforcement | Source: technologies/confluent/cloud-networking/09-aws-pni.md#vs-vpc-peering |

^learnkit-360743249
T | PNI Traffic Flow |
Q | Why does PNI keep costs lower than PrivateLink while maintaining security? |
A | PNI uses direct ENI attachment (no intermediary), keeping traffic within AWS private network and avoiding PrivateLink's endpoint fees and per-GB data processing charges. |
I | PrivateLink routes through AWS managed endpoints = extra hop = extra cost | Source: technologies/confluent/cloud-networking/09-aws-pni.md#vs-privatelink |

^learnkit-977952896
T | PNI Bidirectional Traffic |
Q | Why is PNI more flexible than PrivateLink for bidirectional traffic? |
A | PrivateLink is one-way only (client to Confluent); PNI allows bidirectional communication through ENI configuration with Security Groups. |
I | Important for managed connectors accessing private data sources | Source: technologies/confluent/cloud-networking/09-aws-pni.md#security-features |

^learnkit-440780560
T | PNI Automatic vs Manual Setup |
Q | What are the two PNI setup methods and when would you use each? |
A | Automatic (Console-only, uses IAM delegation, single workflow) for simplicity; Manual (API/CLI/Terraform, customer creates components) for granular security control. |
I | Manual setup provides more control over security group configuration | Source: technologies/confluent/cloud-networking/09-aws-pni.md#setup-methods |

^learnkit-635683826
T | PNI Failover Benefits |
Q | How does PNI improve failover compared to other networking options? |
A | Pre-attach capabilities allow moving network interfaces across AZs and services, enabling faster recovery times and reduced blast radius during AZ outages. |
I | Indeed case study: 60% reduction in network transfer costs | Source: technologies/confluent/cloud-networking/09-aws-pni.md#operational-benefits |

## Networking Options Comparison

^learnkit-292245868
T | VPC Peering CIDR Requirement |
Q | What CIDR range does VPC/VNet peering require for Confluent Cloud? |
A | A /16 CIDR range for the Confluent network. |
I | This can cause IP address overlap challenges in some architectures | Source: technologies/confluent/cloud-networking/10-best-networking-options.md#connectivity-options |

^learnkit-633437529
T | PrivateLink Directionality |
Q | What is the traffic directionality limitation of AWS PrivateLink for Confluent Cloud? |
A | One-way connection that allows clients to access Confluent Cloud, but not the other way around. |
I | This limits use cases like managed connectors accessing private data sources | Source: technologies/confluent/cloud-networking/10-best-networking-options.md#connectivity-options |

^learnkit-763966817
T | Transit Gateway Limitation |
Q | What is the main AWS service limitation of Transit Gateway for Confluent Cloud? |
A | It only works in AWS (not available for Azure or GCP). |
I | But removes requirement for 1:1 peering connections within AWS | Source: technologies/confluent/cloud-networking/10-best-networking-options.md#connectivity-options |

^learnkit-205899778
T | Secure Public Endpoints Use Case |
Q | When should you use secure public endpoints instead of private networking? |
A | When you need to access Confluent Cloud from anywhere, including on-premises environments or services spanning multiple clouds/regions. |
I | Easiest to set up but least secure option | Source: technologies/confluent/cloud-networking/10-best-networking-options.md#connectivity-options |

## Limitations and Edge Cases

^learnkit-723339646
T | PNI Egress Limitation |
Q | What is the key limitation of PNI for egress traffic? |
A | Egress over PNI is supported for fully managed connectors only; other use cases (Cluster Linking, Custom Connect) must use Egress PrivateLink Endpoint. |
I | This is an important architectural constraint for hybrid networking | Source: technologies/confluent/cloud-networking/09-aws-pni.md#key-limitations |

^learnkit-479243840
T | PNI ENI Association Limit |
Q | How many PNI access points can a single ENI/set associate with? |
A | Only ONE PNI access point per ENI/set. |
I | But one gateway can serve multiple clusters in same region | Source: technologies/confluent/cloud-networking/09-aws-pni.md#key-limitations |

^learnkit-984632491
T | Enterprise Cluster Networking Flexibility |
Q | Can Enterprise clusters use both PrivateLink and PNI simultaneously? |
A | Yes, Enterprise clusters support simultaneous PrivateLink Attachment AND PNI connectivity. |
I | Switching between them is fully supported without cluster redeployment | Source: technologies/confluent/cloud-networking/09-aws-pni.md#key-limitations |

^learnkit-191043912
T | PrivateLink DNS Requirement |
Q | What DNS infrastructure requirement does PrivateLink have that PNI doesn't? |
A | PrivateLink requires a custom zone in your DNS infrastructure; PNI eliminates VPC endpoint overhead and simplifies DNS management. |
I | DNS complexity is one hidden cost of PrivateLink | Source: technologies/confluent/cloud-networking/10-best-networking-options.md#connectivity-options |

## VPC/VNet Peering

^learnkit-459702781
T | VPC Peering Bidirectionality |
Q | What type of connectivity does VPC/VNet peering provide between Confluent Cloud and your network? |
A | Bidirectional connectivity - clients in your VPC can access Confluent Cloud, and managed connectors in Confluent Cloud can access data sources/sinks in your network. |
I | This is key difference from PrivateLink which is unidirectional | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#introduction |

^learnkit-762561452
T | VPC Peering CIDR Requirements |
Q | What are the three types of IP address ranges acceptable for Confluent Cloud VPC peering? |
A | Private IP (RFC 1918: 10/8, 172.16/12, 192.168/16), Shared address space (RFC 6598: 100.64/10), and Benchmark space (RFC 2544: 198.18/15 - AWS/GCP only). |
I | Must avoid excluded ranges: 10.100/16, 10.255/16, 172.17/16, 172.20/16 | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#requirements |

^learnkit-266488161
T | VPC Peering Transitive Connectivity |
Q | Why can't you access Confluent Cloud from VPC B if VPC B peers to VPC A and VPC A peers to Confluent Cloud? |
A | Cloud networks don't support transitive connectivity - each VPC must be directly peered to Confluent Cloud to access it. |
I | Exception: Google Cloud custom route import/export for VPN/Interconnect | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#limitations |

^learnkit-730643718
T | VPC Peering DNS Requirement |
Q | What DNS requirement must be met for VPC peering to work with Confluent Cloud? |
A | Your DNS servers must be able to access the authoritative DNS servers for confluent.cloud, which are hosted on the internet. |
I | This is required for domain name resolution to work properly | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#requirements |

^learnkit-239948877
T | Google VPC Global Scope Limitation |
Q | Can services in any region access a Confluent Cloud cluster if the Google VPC is global and peered? |
A | No, only services in the same region as the cluster can access it, even though Google VPCs span multiple regions. |
I | Google VPCs are global but Confluent Cloud access is region-bound | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#google-cloud-vpc-peering |

^learnkit-881871192
T | VPC Peering Managed Connectors |
Q | What limitation exists for Confluent Cloud managed connectors with VPC peering? |
A | Connectors can only access sources/sinks reachable via IP address in the VPC peered with Confluent Cloud (no transitive connectivity). |
I | Must be directly reachable in peered VPC | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#limitations |

## AWS PrivateLink

^learnkit-347775106
T | PrivateLink IP Requirements |
Q | How many IP addresses does PrivateLink require compared to VPC peering? |
A | PrivateLink requires only three IP addresses (one per availability zone), whereas VPC peering requires a /16 CIDR range. |
I | This is a major advantage for networks with limited IP space | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#requirements |

^learnkit-985460490
T | PrivateLink DNS Record Types |
Q | What DNS record types are required for PrivateLink in AWS vs Azure? |
A | AWS requires DNS A records (domain to IP), Azure requires DNS CNAME records (domain to domain). |
I | Both use wildcard DNS records to route traffic to endpoints | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#requirements |

^learnkit-426220275
T | PrivateLink Endpoint Architecture |
Q | How many endpoints does a multi-zone Confluent Cloud cluster create with PrivateLink? |
A | Three endpoints, each in a different subnet (one per availability zone). |
I | Single-zone clusters create only one endpoint in one subnet | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#overview |

^learnkit-343210685
T | PrivateLink DNS Zone Setup |
Q | What three-step DNS configuration is required for PrivateLink? |
A | 1) Create private DNS zone for Confluent domain, 2) Identify DNS names/IPs of interface endpoints, 3) Create wildcard CNAME records pointing to endpoints. |
I | DNS complexity is the main setup challenge for PrivateLink | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#requirements |

^learnkit-253065067
T | PrivateLink On-Premises Access |
Q | Can on-premises networks access Confluent Cloud through PrivateLink? |
A | Yes, on-premises networks can access Confluent Cloud through your VPC with PrivateLink - no proxies needed (unlike VPC peering). |
I | This is a key benefit over VPC peering for hybrid environments | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#benefits |

^learnkit-789955208
T | PrivateLink Account Whitelist Limit |
Q | How many cloud accounts can be whitelisted for a Confluent Cloud PrivateLink network? |
A | Up to 10 AWS accounts or Azure subscriptions can be whitelisted. |
I | Once whitelisted, unlimited VPCs/VNets from that account can connect | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#miscellaneous |

## AWS Transit Gateway

^learnkit-292059334
T | Transit Gateway Core Problem Solved |
Q | What exponential growth problem does AWS Transit Gateway solve for multi-VPC architectures? |
A | Instead of N*(N-1)/2 peering connections between N VPCs, Transit Gateway requires only N connections (one per VPC to the gateway). |
I | Example: 5 VPCs need 10 peer connections; with TGW only 5 connections | Source: technologies/confluent/cloud-networking/07-aws-transit-gateway.md#when-is-needed |

^learnkit-345661657
T | Transit Gateway Confluent Limit |
Q | How many Transit Gateway connections can a Confluent Cloud network have? |
A | Exactly one Transit Gateway per Confluent Cloud network (in addition to standard VPC peering connections). |
I | This is a hard limit - can't peer to multiple Transit Gateways | Source: technologies/confluent/cloud-networking/07-aws-transit-gateway.md#benefits |

^learnkit-621978980
T | Transit Gateway Setup Process |
Q | Is Transit Gateway peering self-service in Confluent Cloud? |
A | No, you must open a Confluent support ticket - a network engineer initiates the peering which your team must accept. |
I | This is not yet self-service unlike other networking options | Source: technologies/confluent/cloud-networking/07-aws-transit-gateway.md#benefits |

^learnkit-761403843
T | Transit Gateway Default Route |
Q | How does Confluent Cloud route traffic through Transit Gateway? |
A | Confluent sets up a default route pointing to the Transit Gateway for all traffic not peered directly with VPCs. |
I | TGW acts as cloud network router for non-direct connections | Source: technologies/confluent/cloud-networking/07-aws-transit-gateway.md#benefits |

^learnkit-366711927
T | Transit Gateway Connector Access |
Q | What additional network flexibility does Transit Gateway provide for managed connectors? |
A | Connectors can access data sources/sinks across larger network including on-premises and other cloud providers connected to the TGW. |
I | Much more flexible than VPC peering which only accesses peered VPC | Source: technologies/confluent/cloud-networking/07-aws-transit-gateway.md#benefits |

^learnkit-341281557
T | Transit Gateway Security Tradeoff |
Q | What is the security drawback of using Transit Gateway vs standard peering? |
A | Confluent network has more access to your network through transitive connectivity, increasing potential attack surface. |
I | Confluent won't initiate connections unless you configure connectors | Source: technologies/confluent/cloud-networking/07-aws-transit-gateway.md#benefits |

## Networking Fundamentals

^learnkit-567261462
T | CIDR Mask Size Relationship |
Q | What is the relationship between CIDR mask value and network size? |
A | The larger the mask value (e.g., /24 vs /16), the smaller the range of host IDs in the network. |
I | /16 = 65K hosts, /24 = 256 hosts, /32 = 1 host | Source: technologies/confluent/cloud-networking/01-introduction.md#networking-fundamentals |

^learnkit-101885192
T | Private vs Public IP Addresses |
Q | What are the two key characteristics that distinguish private IP addresses from public IP addresses? |
A | Private IPs are not directly accessible from public internet, and the same private IP can be used by multiple organizations in different private networks. |
I | Public IPs are globally unique and directly accessible | Source: technologies/confluent/cloud-networking/01-introduction.md#networking-fundamentals |

^learnkit-119831659
T | DNS A vs CNAME Records |
Q | What is the difference between DNS A records and CNAME records? |
A | A records translate domain names to IP addresses; CNAME records translate domain names to other domain names. |
I | Both are used in different ways by PrivateLink configurations | Source: technologies/confluent/cloud-networking/01-introduction.md#dns |

^learnkit-439709067
T | Cloud VPC/VNet Terminology |
Q | What do AWS/Google call their virtual private networks vs what does Azure call them? |
A | AWS and Google call them Virtual Private Clouds (VPCs); Azure calls them Virtual Networks (VNets). |
I | Same concept, different naming across cloud providers | Source: technologies/confluent/cloud-networking/01-introduction.md#cloud-networking-fundamentals |

^learnkit-749714597
T | Availability Zone Purpose |
Q | Why are cloud regions broken into availability zones? |
A | AZs are separated by enough distance that a destructive event (flood, hurricane) impacting one shouldn't impact others. |
I | Provides fault isolation within a region | Source: technologies/confluent/cloud-networking/01-introduction.md#cloud-networking-fundamentals |

^learnkit-121110136
T | Kafka Binary Protocol |
Q | What transport protocol does Kafka use and what security options are available? |
A | Kafka uses binary protocol over TCP (not HTTP/HTTPS), with TLS options: SSL (direct encryption) or SASL_SSL (authentication + encryption). |
I | This is why PrivateLink requires special DNS/routing configuration | Source: technologies/confluent/cloud-networking/01-introduction.md#kafka-specific-networking-basics |

## Advanced Limitations

^learnkit-591077373
T | Google VPC Transitive Connectivity Exception |
Q | What feature allows Google Cloud VPC peering to provide transitive connectivity that other clouds don't? |
A | Custom route import/export feature for VPN or Google Interconnect to on-premises/other cloud networks. |
I | This does NOT work for transitive connectivity between Google Cloud VPCs | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#google-cloud-vpc-peering |

^learnkit-199408520
T | Azure Gateway Transit Support |
Q | Is Azure's Gateway Transit capability supported with Confluent Cloud VNet peering? |
A | No, Azure Gateway Transit (VPN/ExpressRoute access through peered VNet) is not currently supported. |
I | This would allow VNet X to access datacenter through VNet Y's ExpressRoute | Source: technologies/confluent/cloud-networking/05-vpc-vpnet-peering-overview.md#other-caveats |

^learnkit-309851400
T | PrivateLink Fully Managed Connectors |
Q | Why can't fully managed connectors access your private data sources with PrivateLink? |
A | Because PrivateLink is unidirectional - Confluent can't reach across the PrivateLink into your network. |
I | Must expose service over internet or self-manage Kafka Connect | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#limitations |

^learnkit-247867456
T | PrivateLink Control Plane Access |
Q | What Confluent Cloud components still require internet access even with PrivateLink? |
A | The provisioning control plane and Schema Registry (metadata only) both require internet access. |
I | Only Kafka cluster data plane goes through PrivateLink | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#miscellaneous |

^learnkit-855377078
T | Google PSC Availability |
Q | When was Google Private Service Connect (PSC) added to Confluent Cloud support? |
A | Q3 2022 - it provides the same unidirectional, secure connectivity as AWS PrivateLink and Azure Private Link. |
I | PSC has same limitations: no managed connector access to private sources | Source: technologies/confluent/cloud-networking/08-aws-azure-private-link.md#google-private-service-connect |

^learnkit-260753180
T | Transit Gateway VPN Connections |
Q | What additional connectivity does Transit Gateway enable beyond VPC peering? |
A | VPN connections to on-premises networks/datacenters and connections to other cloud providers (Azure, Google). |
I | Makes hybrid and multi-cloud architectures much simpler | Source: technologies/confluent/cloud-networking/07-aws-transit-gateway.md#benefits |
