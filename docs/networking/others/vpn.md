# VPN

A **virtual private network**(**VPN**) extends a [private network](https://en.wikipedia.org/wiki/Private_network) across a public network, and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. Applications running on a computing device, e.g., a laptop, desktop, smartphone, across a VPN may therefore benefit from the functionality, security, and management of the private network. Encryption is a common, though not an inherent, part of a VPN connection.
Full Tunnel

## Split Tunnel

Split tunnelingis a computer networking concept which allows a mobile user to access dissimilar security domains like a public network (e.g., the Internet) and a local LAN or WAN at the same time, using the same or different network connections. This connection state is usually facilitated through the simultaneous use of a Local Area Network (LAN) Network Interface Card (NIC), radio NIC, Wireless Local Area Network (WLAN) NIC, and VPN client software application without the benefit of access control.

## Advantages

- One advantage of using split tunneling is that it alleviates bottlenecks and conserves bandwidth as Internet traffic does not have to pass through the VPN server.
- Another advantage is in the case where a user works at a supplier or partner site and needs access to network resources on both networks throughout the day. Split tunneling prevents the user from having to continually connect and disconnect.

## Disadvantages

- A disadvantage is that when split tunneling is enabled, users bypass gateway level security that might be in place within the company infrastructure. For example, if web or [content filtering](https://en.wikipedia.org/wiki/Content_filtering) is in place, this is something usually controlled at a gateway level, not the client PC.
- ISPs that implement [DNS hijacking](https://en.wikipedia.org/wiki/DNS_hijacking) break name resolution of private addresses with a split tunnel.

## Variant - Inverse Split Tunneling

A variant of this split tunneling is called "inverse" split tunneling. By default all datagrams enter the tunnel except those destination IPs explicitly allowed by VPN gateway. The criteria for allowing datagrams to exit the local network interface (outside the tunnel) may vary from vendor to vendor (i.e.: port, service, etc.) This keeps control of network gateways to a centralized policy device such as the VPN terminator. This can be augmented by endpoint policy enforcement technologies such as an interface firewall on the endpoint device's network interface driver, [group policy](https://en.wikipedia.org/wiki/Group_policy) object or anti-malware agent. This is related in many ways to [network access control](https://en.wikipedia.org/wiki/Network_access_control)(NAC).
<https://en.wikipedia.org/wiki/Split_tunneling>

## IPSec VPN vs SSL VPN

The major difference between anIPsec VPNand an SSLVPNcomes down to the network layers at which encryption and authentication are performed.IPsecoperates at the network layer and can be used to encrypt data being sent between any systems that can be identified by IP addresses.

## IPSec

In [computing](https://en.wikipedia.org/wiki/Computing), Internet Protocol Security(IPsec) is a secure network [protocol suite](https://en.wikipedia.org/wiki/Protocol_suite) that [authenticates](https://en.wikipedia.org/wiki/Authentication) and [encrypts](https://en.wikipedia.org/wiki/Encryption) the [packets](https://en.wikipedia.org/wiki/Packet_(information_technology)) of data to provide secure encrypted communication between two computers over an [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) network. It is used in [virtual private networks](https://en.wikipedia.org/wiki/Virtual_private_network)(VPNs).
IPsec includes protocols for establishing [mutual authentication](https://en.wikipedia.org/wiki/Mutual_authentication) between agents at the beginning of a session and negotiation of [cryptographic keys](https://en.wikipedia.org/wiki/Key_(cryptography)) to use during the session. IPsec can protect data flows between a pair of hosts (host-to-host), between a pair of security gateways (network-to-network), or between a security gateway and a host (network-to-host).IPsec uses cryptographic security services to protect communications over Internet Protocol (IP) networks. It supports network-level peer authentication, data-origin authentication, data integrity, data confidentiality (encryption), and replay protection.
The initial [IPv4](https://en.wikipedia.org/wiki/IPv4) suite was developed with few security provisions. As a part of the IPv4 enhancement, IPsec is a layer 3 [OSI model](https://en.wikipedia.org/wiki/OSI_model) or [internet layer](https://en.wikipedia.org/wiki/Internet_layer) end-to-end security scheme, while some other Internet security systems in widespread use operate above layer 3, such as [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)(TLS) and [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)(SSH), both of which operate at the Transport layer. IPsec can automatically secure applications at the IP layer.

## Modes of operation

The IPsec protocols AH and ESP can be implemented in a host-to-host transport mode, as well as in a network tunneling mode.
<https://en.wikipedia.org/wiki/IPsec>

## Openvpn

OpenVPNis a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source) software application that implements [virtual private network](https://en.wikipedia.org/wiki/Virtual_private_network)(VPN) techniques to create secure point-to-point or site-to-site connections in routed or bridged configurations and remote access facilities. It uses a custom security protocolthat utilizes [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) for key exchange. It is capable of traversing [network address translators](https://en.wikipedia.org/wiki/Network_address_translator)(NATs) and [firewalls](https://en.wikipedia.org/wiki/Firewall_(computing))

OpenVPN allows [peers](https://en.wikipedia.org/wiki/Peer-to-peer) to [authenticate](https://en.wikipedia.org/wiki/Authentication) each other using [pre-shared secret keys](https://en.wikipedia.org/wiki/Pre-shared_key), [certificates](https://en.wikipedia.org/wiki/Public_key_certificate) or [username](https://en.wikipedia.org/wiki/User_(computing))/[password](https://en.wikipedia.org/wiki/Password). When used in a multiclient-server configuration, it allows the server to release an [authentication certificate](https://en.wikipedia.org/wiki/Public_key_certificate) for every client, using [signatures](https://en.wikipedia.org/wiki/Digital_signature) and [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority). It uses the [OpenSSL](https://en.wikipedia.org/wiki/OpenSSL) encryption [library](https://en.wikipedia.org/wiki/Library_(computing)) extensively, as well as the [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) protocol, and contains many security and control features.
<https://en.wikipedia.org/wiki/OpenVPN>

<https://openvpn.net>

<https://medium.com/swlh/creating-a-vpn-with-2-factor-authentication-using-openvpn-and-docker-9569e609151a>

## WireGuard

WireGuard is a novel VPN that runs inside the Linux Kernel and utilizesstate-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. It runs over UDP.
<https://www.wireguard.com>

<https://www.freecodecamp.org/news/how-to-set-up-a-vpn-server-at-home>

## NGrok

ngrok is a reverse proxy that creates a secure tunnel from a public endpoint to a locally running web service. ngrok captures and analyzes all traffic over the tunnel for later inspection and replay.
<https://ngrok.com>

<https://github.com/inconshreveable/ngrok>

## Secure access service edge (SASE) model

<https://pages.awscloud.com/AWSMP-SEC-NetworkSecurity-Edge-SASE-en.html>
