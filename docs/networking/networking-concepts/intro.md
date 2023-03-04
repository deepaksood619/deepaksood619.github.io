# Intro

## Connection

In networking, a connection refers to pieces of related information that are transfered through a network. This generally infers that a connection is built before the data transfer (by following the procedures laid out in a protocol) and then is deconstructed at the at the end of the data transfer.

## Packet

A packet is, generally speaking, the most basic unit that is transfered over a network. When communicating over a network, packets are the envelopes that carry your data (in pieces) from one end point to the other.
Packets have a header portion that contains information about the packet including the source and destination, timestamps, network hops, etc. The main portion of a packet contains the actual data being transfered. It is sometimes called the body or the payload.

## Network Interface

A network interface can refer to any kind of software interface to networking hardware. For instance, if you have two network cards in your computer, you can control and configure each network interface associated with them individually.
A network interface may be associated with a physical device, or it may be a representation of a virtual interface. The "loopback" device, which is a virtual interface to the local machine, is an example of this.

## LAN

LAN stands for "local area network". It refers to a network or a portion of a network that is not publicly accessible to the greater internet. A home or office network is an example of a LAN.

## WAN

WAN stands for "wide area network". It means a network that is much more extensive than a LAN. While WAN is the relevant term to use to describe large, dispersed networks in general, it is usually meant to mean the internet, as a whole.
If an interface is said to be connected to the WAN, it is generally assumed that it is reachable through the internet.

## Protocol

A protocol is a set of rules and standards that basically define a language that devices can use to communicate. There are a great number of protocols in use extensively in networking, and they are often implemented in different layers.
Some low level protocols are TCP, UDP, IP, and ICMP. Some familiar examples of application layer protocols, built on these lower protocols, are HTTP (for accessing web content), SSH, TLS/SSL, and FTP.

## Port

A port is an address on a single machine that can be tied to a specific piece of software. It is not a physical interface or location, but it allows your server to be able to communicate using more than one application.

## Firewall

A firewall is a program that decides whether traffic coming into a server or going out should be allowed. A firewall usually works by creating rules for which type of traffic is acceptable on which ports. Generally, firewalls block ports that are not used by a specific application on a server.

## NAT (Network Address Translation)

It is a way to translate requests that are incoming into a routing server to the relevant devices or servers that it knows about in the LAN. This is usually implemented in physical LANs as a way to route requests through one IP address to the necessary backend servers.
A system called*Network Address Translation*, allows the addresses to be rewritten when packets traverse network borders to allow them to continue on to their correct destination. This allows the same IP address to be used on multiple, isolated networks while still allowing these to communicate with each other if configured correctly.

## IP masqueradingis a technique that hides an entire IP address space, usually consisting of private IP addresses, behind a single IP address in another, usually public address space. The hidden addresses are changed into a single (public) IP address as the source address of the outgoing IP packets so they appear as originating not from the hidden host but from the routing device itself. Because of the popularity of this technique to conserve IPv4 address space, the term *NAT*has become virtually synonymous with IP masquerading

## NAT Implementations

- Full-cone NAT
- (Address)-restricted-cone NAT
- Port-restricted-cone NAT
- Symmetric NAT
PAT - Port Address Translation

DNAT - Destination Network Address Translation

SNAT - Source Network Address Translation
<https://en.wikipedia.org/wiki/Network_address_translation>

## VPN

VPN stands for virtual private network. It is a means of connecting separate LANs through the internet, while maintaining privacy. This is used as a means of connecting remote systems as if they were on a local network, often for security reasons.

## DMVPN

DMVPN (Dynamic Multipoint VPN) is a routing technique we can use to build a VPN network with multiple sites without having to statically configure all devices. It's a "hub and spoke" network where the spokes will be able to communicate with each other directly without having to go through the hub. Encryption is supported through IPsec which makes DMVPN a popular choice for connecting different sites using regular Internet connections. It's a great backup or alternative to private networks like MPLS VPN.
There are four pieces to the DMVPN puzzle:

- Multipoint GRE (mGRE)
- NHRP (Next Hop Resolution Protocol)
- Routing (RIP, EIGRP, OSPF, BGP, etc.)
- IPsec (not required but recommended)
<https://networklessons.com/cisco/ccie-routing-switching/introduction-to-dmvpn>

## Bridge

A **network bridge** is a [computer networking device](https://en.wikipedia.org/wiki/Networking_hardware) that creates a single aggregate network from multiple [communication networks](https://en.wikipedia.org/wiki/Communication_network) or [network segments](https://en.wikipedia.org/wiki/Network_segment). This function is called**network bridging.**Bridging is distinct from [routing](https://en.wikipedia.org/wiki/Routing). Routing allows multiple networks to communicate independently and yet remain separate, whereas bridging connects two separate networks as if they were a single network.In the [OSI model](https://en.wikipedia.org/wiki/OSI_model), bridging is performed in the [data link layer](https://en.wikipedia.org/wiki/Data_link_layer)(layer 2). If one or more segments of the bridged network are [wireless](https://en.wikipedia.org/wiki/Wireless_network), the device is known as a**wireless bridge.**
There are four main types of network bridging technologies: simple bridging, multiport bridging, learning or transparent bridging, and [source route bridging](https://en.wikipedia.org/wiki/Source_route_bridging).
<https://en.wikipedia.org/wiki/Bridging_(networking)>

## References

<https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols>
<https://www.freecodecamp.org/news/free-computer-networking-course>

- Intro to Network Devices
- Networking Services and Applications
- DHCP in the Network
- Introduction to the DNS Service
- Introducing Network Address Translation
- WAN Technologies
- Network Cabling
- Network Topologies
- Network Infrastructure Implementations
- Introduction to IPv4
- Introduction to IPv6
- Special IP Networking Concepts
- Introduction to Routing Concepts
- Introduction to Routing Protocols
- Basic Elements of Unified Communications
- Virtualization Technologies
- Storage Area Networks
- Basic Cloud Concepts
- Implementing a Basic Network
- Analyzing Monitoring Reports
- Network Monitoring
- Supporting Configuration Management
- The Importance of Network Segmentation
- Applying Patches and Updates
- Configuring Switches
- Wireless LAN Infrastructure
- Risk and Security Related Concepts
- Common Network Vulnerabilities
- Common Network Threats
- Network Hardening Techniques
- Physical Network Security Control
- Firewall Basics
- Network Access Control
- Basic Forensic Concepts
- Network Troubleshooting Methodology
- Troubleshooting Connectivity with Utilities
- Troubleshooting Connectivity with Hardware
- Troubleshooting Wireless Networks
- Troubleshooting Copper Wire Networks
- Troubleshooting Fiber Cable Networks
- Network Troubleshooting Common Network Issues
- Common Network Security Issues
- Common WAN Components and Issues
- The OSI Networking Reference Model
- The Transport Layer Plus ICMP
- Basic Network Concepts
- Introduction to Wireless Network Standards
- Introduction to Wired Network Standards
- Security Policies and other Documents
- Introduction to Safety Practices
- Rack and Power Management
- Cable Management
- Basics of Change Management
- Common Networking Protocols
<https://www.freecodecamp.org/news/how-does-the-internet-work>
