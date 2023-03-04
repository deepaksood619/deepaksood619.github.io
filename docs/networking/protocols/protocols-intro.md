# Protocols Intro

## Media Access Control (MAC Address)

Media access control is a communications protocol that is used to distinguish specific devices. Each device is supposed to get a unique MAC address during the manufacturing process that differentiates it from every other device on the internet.
Addressing hardware by the MAC address allows you to reference a device by a unique value even when the software on top may change the name for that specific device during operation.
Media access control is one of the only protocols from the link layer that you are likely to interact with on a regular basis.
<https://en.wikipedia.org/wiki/MAC_address>

## IP

The IP protocol is one of the fundamental protocols that allow the internet to work. IP addresses are unique on each network and they allow machines to address each other across a network. It is implemented on the internet layer in the IP/TCP model.
Networks can be linked together, but traffic must be routed when crossing network boundaries. This protocol assumes an unreliable network and multiple paths to the same destination that it can dynamically change between.
There are a number of different implementations of the protocol. The most common implementation today is IPv4, although IPv6 is growing in popularity as an alternative due to the scarcity of IPv4 addresses available and improvements in the protocols capabilities.

## ICMP

ICMP stands for **internet control message protocol**. It is used to send messages between devices to indicate the availability or error conditions. These packets are used in a variety of network diagnostic tools, such as ping and traceroute.
Usually ICMP packets are transmitted when a packet of a different kind meets some kind of a problem. Basically, they are used as a feedback mechanism for network communications.

## UDP (Connectionless Protocol)

UDP stands for user datagram protocol. It is a popular companion protocol to TCP and is also implemented in the transport layer.
The fundamental difference between UDP and TCP is that UDP offers unreliable data transfer. It does not verify that data has been received on the other end of the connection. This might sound like a bad thing, and for many purposes, it is. However, it is also extremely important for some functions.
Because it is not required to wait for confirmation that the data was received and forced to resend data, UDP is much faster than TCP. It does not establish a connection with the remote host, it simply fires off the data to that host and doesn't care if it is accepted or not.
Because it is a simple transaction, it is useful for simple communications like querying for network resources. It also doesn't maintain a state, which makes it great for transmitting data from one machine to many real-time clients. This makes it ideal for VOIP, games, and other applications that cannot afford delays.

## FTP

FTP stands for file transfer protocol. It is also in the application layer and provides a way of transferring complete files from one host to another.
It is inherently insecure, so it is not recommended for any externally facing network unless it is implemented as a public, download-only resource.

## SSH

SSH stands for secure shell. It is an encrypted protocol implemented in the application layer that can be used to communicate with a remote server in a secure way. Many additional technologies are built around this protocol because of its end-to-end encryption and ubiquity.

## RTSP (Real Time Streaming Protocol)

TheReal Time Streaming Protocol(RTSP) is a network control [protocol](https://en.wikipedia.org/wiki/Communications_protocol) designed for use in entertainment and communications systems to control [streaming media](https://en.wikipedia.org/wiki/Streaming_media)[servers](https://en.wikipedia.org/wiki/Web_server). The protocol is used for establishing and controlling media sessions between end points. Clients of media servers issue [VHS](https://en.wikipedia.org/wiki/VHS)-style commands, such asplay, recordandpause, to facilitate real-time control of the media streaming from the server to a client (Video On Demand) or from a client to the server (Voice Recording).
The transmission of streaming data itself is not a task of RTSP. Most RTSP servers use the [Real-time Transport Protocol](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol)(RTP) in conjunction with [Real-time Control Protocol](https://en.wikipedia.org/wiki/RTCP)(RTCP) for media stream delivery.
<https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol>

## What is RTP (Real-time Transport Protocol)?

The Real-time Transport Protocol is a network protocol used to deliver streaming audio and video media over the internet, thereby enabling the Voice Over Internet Protocol (VoIP).
RTP is generally used with a signaling protocol, such as SIP, which sets up connections across the network. RTP applications can use the Transmission Control Protocol (TCP), but most use the User Datagram protocol (UDP) instead because UDP allows for faster delivery of data.

## What is RTCP (Real-time Transport Control Protocol)?

While RTP allows for real-time data transfer, RTCP provides out-of-band statistics and control information for any given RTP session. It doesn't actually transport any media data, but rather helps with quality control.

## SSRC and CSRC: How do they work with RTP?

SSRC (Synchronization Source) values are randomly assigned in order to keep track of synchronization sources within a given RTP session. No two sources within the same session will have the same SSRC identifiers; users can spot and trace looping audio paths if overlaps do occur.
CSRC (Contributing Source) values make up the full array of up to 15 contributing sources for a given packet payload within an RTP session. For example, if multiple audio sources are mixing together on a conference call, CSRC can help differentiate between those sources.
<https://www.extrahop.com/resources/protocols/rtp>

## OCSP Stapling

The**Online Certificate Status Protocol (OCSP) stapling**, formally known as the**TLS Certificate Status Request**extension, is a standard for checking the revocation status of [X.509](https://en.wikipedia.org/wiki/X.509)[digital certificates](https://en.wikipedia.org/wiki/Digital_certificate).It allows the presenter of a certificate to bear the resource cost involved in providing [Online Certificate Status Protocol](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol)(OCSP) responses by appending ("stapling") a [time-stamped](https://en.wikipedia.org/wiki/Timestamp) OCSP response [signed](https://en.wikipedia.org/wiki/Cryptographic_signature) by the CA to the initial [TLS handshake](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_handshake), eliminating the need for clients to contact the CA, with the aim of improving both security and performance.
<https://en.wikipedia.org/wiki/OCSP_stapling>

## ACME Protocol

The**Automatic Certificate Management Environment(ACME)** protocol is a [communications protocol](https://en.wikipedia.org/wiki/Communications_protocol) for automating interactions between [certificate authorities](https://en.wikipedia.org/wiki/Certificate_authority) and their users' web servers, allowing the automated deployment of [public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) at very low cost.It was designed by the [Internet Security Research Group](https://en.wikipedia.org/wiki/Internet_Security_Research_Group)(ISRG) for their [Let's Encrypt](https://en.wikipedia.org/wiki/Let%27s_Encrypt) service.
The protocol, based on passing [JSON](https://en.wikipedia.org/wiki/JSON)-formatted messages over [HTTPS](https://en.wikipedia.org/wiki/HTTPS), has been published as an [Internet Standard](https://en.wikipedia.org/wiki/Internet_Standard) in [RFC 8555](https://tools.ietf.org/html/rfc8555) by its own chartered [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) working group.
<https://en.wikipedia.org/wiki/Automated_Certificate_Management_Environment>

## Address Resolution Protocol (ARP)

TheAddress Resolution Protocol(ARP) is a [communication protocol](https://en.wikipedia.org/wiki/Communication_protocol) used for discovering the [link layer](https://en.wikipedia.org/wiki/Link_layer) address, such as a [MAC address](https://en.wikipedia.org/wiki/MAC_address), associated with a given [internet layer](https://en.wikipedia.org/wiki/Internet_layer) address, typically an [IPv4 address](https://en.wikipedia.org/wiki/IPv4_address). This mapping is a critical function in the [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite). ARP was defined in 1982 by [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) [826](https://tools.ietf.org/html/rfc826), which is [Internet Standard](https://en.wikipedia.org/wiki/Internet_Standard) STD 37.
ARP has been implemented with many combinations of network and data link layer technologies, such as [IPv4](https://en.wikipedia.org/wiki/IPv4), [Chaosnet](https://en.wikipedia.org/wiki/Chaosnet), [DECnet](https://en.wikipedia.org/wiki/DECnet) and Xerox [PARC Universal Packet](https://en.wikipedia.org/wiki/PARC_Universal_Packet)(PUP) using [IEEE 802](https://en.wikipedia.org/wiki/IEEE_802) standards, [FDDI](https://en.wikipedia.org/wiki/FDDI), [X.25](https://en.wikipedia.org/wiki/X.25), [Frame Relay](https://en.wikipedia.org/wiki/Frame_Relay) and [Asynchronous Transfer Mode](https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode)(ATM). IPv4 over [IEEE 802.3](https://en.wikipedia.org/wiki/IEEE_802.3) and [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11) is the most common usage.
In [Internet Protocol Version 6](https://en.wikipedia.org/wiki/IPv6)(IPv6) networks, the functionality of ARP is provided by the [Neighbor Discovery Protocol](https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol)(NDP).
The MAC address is how machines on a subnet communicate. When machine A sends packets to another machine on its subnet, it sends it using the MAC address. When sending a packet to a machine on the public Internet, the packet is sent to the MAC address of the router interface that is the default gateway. IP addresses are used to figure out the MAC address to send to using ARP.

## ARP Basics

ARP stands for Address Resolution Protocol. When you try to ping an IP address on your local network, say 192.168.1.1, your system has to turn the IP address 192.168.1.1 into a MAC address. This involves using ARP to resolve the address, hence its name.
Systems keep an ARP look-up table where they store information about what IP addresses are associated with what MAC addresses. When trying to send a packet to an IP address, the system will first consult this table to see if it already knows the MAC address. If there is a value cached, ARP is not used.
If the IP address is not found in the ARP table, the system will then send a broadcast packet to the network using the ARP protocol to ask "who has 192.168.1.1". Because it is a broadcast packet, it is sent to a special MAC address that causes all machines on the network to receive it. Any machine with the requested IP address will reply with an ARP packet that says "I am 192.168.1.1", and this includes the MAC address which can receive packets for that IP.
<https://www.tummy.com/articles/networking-basics-how-arp-works>

<https://www.geeksforgeeks.org/how-address-resolution-protocol-arp-works>

<https://en.wikipedia.org/wiki/Address_Resolution_Protocol>

<https://networkengineering.stackexchange.com/questions/36605/when-exactly-is-arp-protocol-is-used>

## Neighbor Discovery Protocol (NDP)

TheNeighbor Discovery Protocol(NDP, ND)is a protocol in the [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite) used with [Internet Protocol Version 6](https://en.wikipedia.org/wiki/IPv6)(IPv6). It operates at the [link layer](https://en.wikipedia.org/wiki/Link_layer) of the Internet model ([RFC 1122](https://tools.ietf.org/html/rfc1122)), and is responsible for gathering various information required for internet communication, including the configuration of local connections and the [domain name servers](https://en.wikipedia.org/wiki/Domain_Name_System) and gateways used to communicate with more distant systems.
The protocol defines five different ICMPv6 packet types to perform functions for IPv6 similar to the [Address Resolution Protocol](https://en.wikipedia.org/wiki/Address_Resolution_Protocol)(ARP) and [Internet Control Message Protocol](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol)(ICMP)[Router Discovery](https://en.wikipedia.org/wiki/ICMP_Router_Discovery_Protocol) and [Router Redirect](https://en.wikipedia.org/wiki/ICMP_Redirect_Message) protocols for [IPv4](https://en.wikipedia.org/wiki/IPv4). However, it provides many improvements over its IPv4 counterparts ([RFC 4861](https://tools.ietf.org/html/rfc4861), section 3.1). For example, it includes Neighbor Unreachability Detection (NUD), thus improving robustness of packet delivery in the presence of failing routers or links, or mobile nodes.
The Inverse Neighbor Discovery (IND) protocol extension ([RFC 3122](https://tools.ietf.org/html/rfc3122)) allows nodes to determine and advertise an IPv6 address corresponding tools a given link-layer address, similar to [Reverse ARP](https://en.wikipedia.org/wiki/Reverse_Address_Resolution_Protocol) for IPv4. The [Secure Neighbor Discovery Protocol](https://en.wikipedia.org/wiki/Secure_Neighbor_Discovery_Protocol)(SEND), a security extension of NDP, uses [Cryptographically Generated Addresses](https://en.wikipedia.org/wiki/Cryptographically_Generated_Addresses)(CGA) and the [Resource Public Key Infrastructure](https://en.wikipedia.org/wiki/Resource_Public_Key_Infrastructure)(RPKI) to provide an alternative mechanism for securing NDP with a cryptographic method that is independent of [IPsec](https://en.wikipedia.org/wiki/IPsec). Neighbor Discovery Proxy (ND Proxy) ([RFC 4389](https://tools.ietf.org/html/rfc4389)) provides a service similar to IPv4 [Proxy ARP](https://en.wikipedia.org/wiki/Proxy_ARP) and allows bridging multiple network segments within a single subnet prefix when bridging cannot be done at the link layer.

## Functions (ICMPv6 packets)

- Router Solicitation
- Router Advertisement
- Neighbor Solicitation
- Neighbor Advertisement
- Redirect
<https://en.wikipedia.org/wiki/Neighbor_Discovery_Protocol>
