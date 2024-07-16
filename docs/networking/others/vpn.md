# VPN

A **virtual private network (VPN)** extends a [private network](https://en.wikipedia.org/wiki/Private_network) across a public network, and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. Applications running on a computing device, e.g., a laptop, desktop, smartphone, across a VPN may therefore benefit from the functionality, security, and management of the private network. Encryption is a common, though not an inherent, part of a VPN connection.

![How a VPN Works](../../media/Pasted%20image%2020240207000633.png)

### A VPN works in 4 steps

- Step 1 - Establish a secure tunnel between our device and the VPN server.
- Step 2 - Encrypt the data transmitted.
- Step 3 - Mask our IP address, so it appears as if our internet activity is coming from the VPN server.
- Step 4 - Our internet traffic is routed through the VPN server.

### Advantages

- Privacy
- Anonymity
- Security
- Encryption
- Masking the original IP address

### Disadvantages

- VPN blocking
- Slow down connections
- Trust in VPN provider

## Full Tunnel

## Split Tunnel

Split tunneling is a computer networking concept which allows a mobile user to access dissimilar security domains like a public network (e.g., the Internet) and a local LAN or WAN at the same time, using the same or different network connections. This connection state is usually facilitated through the simultaneous use of a Local Area Network (LAN) Network Interface Card (NIC), radio NIC, Wireless Local Area Network (WLAN) NIC, and VPN client software application without the benefit of access control.

### Advantages

- One advantage of using split tunneling is that it alleviates bottlenecks and conserves bandwidth as Internet traffic does not have to pass through the VPN server.
- Another advantage is in the case where a user works at a supplier or partner site and needs access to network resources on both networks throughout the day. Split tunneling prevents the user from having to continually connect and disconnect.

### Disadvantages

- A disadvantage is that when split tunneling is enabled, users bypass gateway level security that might be in place within the company infrastructure. For example, if web or [content filtering](https://en.wikipedia.org/wiki/Content_filtering) is in place, this is something usually controlled at a gateway level, not the client PC.
- ISPs that implement [DNS hijacking](https://en.wikipedia.org/wiki/DNS_hijacking) break name resolution of private addresses with a split tunnel.

### Variant - Inverse Split Tunneling

A variant of this split tunneling is called "inverse" split tunneling. By default all datagrams enter the tunnel except those destination IPs explicitly allowed by VPN gateway. The criteria for allowing datagrams to exit the local network interface (outside the tunnel) may vary from vendor to vendor (i.e.: port, service, etc.) This keeps control of network gateways to a centralized policy device such as the VPN terminator. This can be augmented by endpoint policy enforcement technologies such as an interface firewall on the endpoint device's network interface driver, [group policy](https://en.wikipedia.org/wiki/Group_policy) object or anti-malware agent. This is related in many ways to [network access control](https://en.wikipedia.org/wiki/Network_access_control)(NAC).

https://en.wikipedia.org/wiki/Split_tunneling

## IPSec VPN vs SSL VPN

The major difference between an IPsec VPN and an SSL VPN comes down to the network layers at which encryption and authentication are performed. IPsec operates at the network layer and can be used to encrypt data being sent between any systems that can be identified by IP addresses.

## IPSec

In [computing](https://en.wikipedia.org/wiki/Computing), Internet Protocol Security(IPsec) is a secure network [protocol suite](https://en.wikipedia.org/wiki/Protocol_suite) that [authenticates](https://en.wikipedia.org/wiki/Authentication) and [encrypts](https://en.wikipedia.org/wiki/Encryption) the [packets](https://en.wikipedia.org/wiki/Packet_(information_technology)) of data to provide secure encrypted communication between two computers over an [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) network. It is used in [virtual private networks](https://en.wikipedia.org/wiki/Virtual_private_network)(VPNs).

IPsec includes protocols for establishing [mutual authentication](https://en.wikipedia.org/wiki/Mutual_authentication) between agents at the beginning of a session and negotiation of [cryptographic keys](https://en.wikipedia.org/wiki/Key_(cryptography)) to use during the session. IPsec can protect data flows between a pair of hosts (host-to-host), between a pair of security gateways (network-to-network), or between a security gateway and a host (network-to-host).IPsec uses cryptographic security services to protect communications over Internet Protocol (IP) networks. It supports network-level peer authentication, data-origin authentication, data integrity, data confidentiality (encryption), and replay protection.

The initial [IPv4](https://en.wikipedia.org/wiki/IPv4) suite was developed with few security provisions. As a part of the IPv4 enhancement, IPsec is a layer 3 [OSI model](https://en.wikipedia.org/wiki/OSI_model) or [internet layer](https://en.wikipedia.org/wiki/Internet_layer) end-to-end security scheme, while some other Internet security systems in widespread use operate above layer 3, such as [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)(TLS) and [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)(SSH), both of which operate at the Transport layer. IPsec can automatically secure applications at the IP layer.

### Modes of operation

The IPsec protocols AH and ESP can be implemented in a host-to-host transport mode, as well as in a network tunneling mode.

https://en.wikipedia.org/wiki/IPsec

## Types of VPN

|**Types**|**Description**|
|---|---|
|**Remote Access VPN**|Remote Access VPN permits a user to connect to a private network and access all its services and resources remotely. The connection between the user and the private network occurs through the Internet and the connection is secure and private.|
|**Site to Site VPN**|A Site-to-Site VPN is also called as Router-to-Router VPN and is commonly used in the large companies. Companies or organizations, with branch offices in different locations, use Site-to-site VPN to connect the network of one office location to the network at another office location.|
|**Cloud VPN**|A Cloud VPN is a virtual private network that allows users to securely connect to a cloud-based infrastructure or service. It uses the internet as the primary transport medium to connect the remote users to the cloud-based resources.|
|**Mobile VPN**|Mobile VPN is a virtual private network that allows mobile users to securely connect to a private network, typically through a cellular network. It creates a secure and encrypted connection between the mobile device and the VPN server, protecting the data transmitted over the connection.|
|**SSL VPN**|SSL VPN (Secure Sockets Layer Virtual Private Network) is a type of VPN that uses the SSL protocol to secure the connection between the user and the VPN server. It allows remote users to securely access a private network by establishing an encrypted tunnel between the user’s device and the VPN server.|
|**PPTP (Point-to-Point Tunneling Protocol) VPN**|PPTP (Point-to-Point Tunneling Protocol) is a type of VPN that uses a simple and fast method for implementing VPNs. It creates a secure connection between two computers by encapsulating the data packets being sent between them.|
|**L2TP (Layer 2 Tunneling Protocol) VPN**|L2TP (Layer 2 Tunneling Protocol) is a type of VPN that creates a secure connection by encapsulating data packets being sent between two computers. L2TP is an extension of PPTP, it adds more security to the VPN connection by using a combination of PPTP and L2F (Layer 2 Forwarding Protocol) and it uses stronger encryption algorithm than PPTP.|
|**OpenVPN**|OpenVPN is an open-source software application that uses SSL and is highly configurable and secure. It creates a secure and encrypted connection between two computers by encapsulating the data packets being sent between them.OpenVPN can be used to access internal resources such as email, file servers, or databases.|

## Links

- [vpn-tools](networking/others/vpn-tools.md)
