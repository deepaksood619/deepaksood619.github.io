# Routing

IP addresses are classified into several classes of operational characteristics: unicast, multicast, anycast and broadcast addressing.

- **Unicast addressing**

The most common concept of an IP address is in [unicast](https://en.wikipedia.org/wiki/Unicast) addressing, available in both IPv4 and IPv6. It normally refers to a single sender or a single receiver, and can be used for both sending and receiving. Usually, a unicast address is associated with a single device or host, but a device or host may have more than one unicast address. Sending the same data to multiple unicast addresses requires the sender to send all the data many times over, once for each recipient.- **Broadcast addressing**

[Broadcasting](https://en.wikipedia.org/wiki/Broadcasting_(computing)) is an addressing technique available in IPv4 to address data to all possible destinations on a network in one transmission operation as anall-hosts broadcast. All receivers capture the network packet. The address255.255.255.255is used for network broadcast. In addition, a more limited directed broadcast uses the all-ones host address with the network prefix. For example, the destination address used for directed broadcast to devices on the network192.0.2.0/24is192.0.2.255.
IPv6 does not implement broadcast addressing, and replaces it with multicast to the specially defined all-nodes multicast address.- **Multicast addressing**

A [multicast address](https://en.wikipedia.org/wiki/Multicast_address) is associated with a group of interested receivers. In IPv4, addresses224.0.0.0through239.255.255.255(the former [Class D](https://en.wikipedia.org/wiki/Classful_network) addresses) are designated as multicast addresses. IPv6 uses the address block with the prefixff00::/8for multicast. In either case, the sender sends a single datagram from its unicast address to the multicast group address and the intermediary routers take care of making copies and sending them to all interested receivers (those that have joined the corresponding multicast group).- **Anycast addressing**

Like broadcast and multicast, [anycast](https://en.wikipedia.org/wiki/Anycast) is a one-to-many routing topology. However, the data stream is not transmitted to all receivers, just the one which the router decides is closest in the network. Anycast addressing is an built-in feature of IPv6.In IPv4, anycast addressing is implemented with [Border Gateway Protocol](https://en.wikipedia.org/wiki/Border_Gateway_Protocol) using the shortest-path [metric](https://en.wikipedia.org/wiki/Metrics_(networking)) to choose destinations. Anycast methods are useful for global load balancing and are commonly used in distributed [DNS](https://en.wikipedia.org/wiki/Domain_name_system) systems.
<https://en.wikipedia.org/wiki/IP_address>

## Routing Table

In [computer networking](https://en.wikipedia.org/wiki/Computer_networking) a**routing table, orrouting information base (RIB)**, is a [data table](https://en.wikipedia.org/wiki/Data_table) stored in a [router](https://en.wikipedia.org/wiki/Router_(computing)) or a networked [computer](https://en.wikipedia.org/wiki/Computer) that lists the routes to particular network destinations, and in some cases, [metrics](https://en.wikipedia.org/wiki/Metrics_(networking))(distances) associated with those routes. The routing table contains information about the [topology of the network](https://en.wikipedia.org/wiki/Network_topology) immediately around it. The construction of routing tables is the primary goal of [routing protocols](https://en.wikipedia.org/wiki/Routing_protocol).[Static routes](https://en.wikipedia.org/wiki/Static_route) are entries made in a routing table by non-automatic means and which are fixed rather than being the result of some network topology "discovery" procedure.
The routing table consists of at least three information fields:

1. network ID: The destination subnet

2. metric: The [routing metric](https://en.wikipedia.org/wiki/Routing_metric) of the path through which the packet is to be sent. The route will go in the direction of the gateway with the lowest metric.

3. next hop: The next hop, or gateway, is the address of the next station to which the packet is to be sent on the way to its final destination
Depending on the application and implementation, it can also contain additional values that refine path selection:

1. quality of serviceassociated with the route. For example, the U flag indicates that an IP route is up.

2. links to filtering criteria/access lists associated with the route

3. interface: such as eth0 for the first Ethernet card, eth1 for the second Ethernet card, etc.
Routing tables are also a key aspect of certain security operations, such as [unicast reverse path forwarding](https://en.wikipedia.org/wiki/Unicast_reverse_path_forwarding) (uRPF). In this technique, which has several variants, the router also looks up, in the routing table, thesource addressof the packet. If there exists no route back to the source address, the packet is assumed to be malformed or involved in a network attack, and is dropped.
<https://en.wikipedia.org/wiki/Routing_table>

## Forwarding Table

Routing tables are generally not used directly for [packet forwarding](https://en.wikipedia.org/wiki/Packet_forwarding) in modern router architectures; instead, they are used to generate the information for a smaller [forwarding table](https://en.wikipedia.org/wiki/Forwarding_table). This forwarding table contains only the routes which are chosen by the [routing algorithm](https://en.wikipedia.org/wiki/Routing_algorithm) as preferred routes for packet forwarding. It is often in a compressed or pre-compiled format that is [optimized](https://en.wikipedia.org/wiki/Optimisation_(computer_science)) for hardware storage and [lookup](https://en.wikipedia.org/wiki/Lookup).

This router architecture separates the [Control Plane](https://en.wikipedia.org/wiki/Control_Plane) function of the routing table from the [Forwarding Plane](https://en.wikipedia.org/wiki/Forwarding_Plane) function of the forwarding table. This separation of control and forwarding provides uninterrupted performance.

## Routing Protocols

OSPF - Open Shortest Path First

Routing protocol for IP networks.

It uses link state routing (LSR) algorithm and falls into the group of interior gateway protocols (IGPs), operating within a single autonomous system (AS)

BGP - Border Gateway Protocol

RIP - Routing Information Protocol

IS-IS - Intermediate System to Intermediate System
Distance vector routing - thread (similar to RIP)

Maintain and advertise best next hop towards each Thread Router

## Tools

[Quagga](http://www.quagga.net/) is a routing software suite, providing implementations of OSPFv2, OSPFv3, RIP v1 and v2, RIPng and BGP-4 for Unix platforms, particularly FreeBSD, Linux, Solaris and NetBSD. Quagga is a fork of [GNU Zebra](http://www.zebra.org/) which was developed by Kunihiro Ishiguro.
The Quagga architecture consists of a core daemon, zebra, which acts as an abstraction layer to the underlying Unix kernel and presents the Zserv API over a Unix or TCP stream to Quagga clients. It is these Zserv clients which typically implement a routing protocol and communicate routing updates to the zebra daemon. Existing Zserv implementations are:

| IPv4  | IPv6   |                                                                    |
|----------|----------|-----------------------------------------------------|
| zebra |       | - kernel interface, static routes, zserv server                    |
| ripd  | ripngd | - RIPv1/RIPv2 for IPv4 and RIPng for IPv6                          |
| ospfd | ospf6d | - OSPFv2 and OSPFv3                                                |
| bgpd  |       | - BGPv4+ (including address family support for multicast and IPv6) |
| isisd |       | - IS-IS with support for IPv4 and IPv6                             |
Quagga daemons are each configurable via a network accessible CLI (called a 'vty'). The CLI follows a style similar to that of other routing software. There is an additional tool included with Quagga called 'vtysh', which acts as a single cohesive front-end to all the daemons, allowing one to administer nearly all aspects of the various Quagga daemons in one place.
<https://www.quagga.net>

## Administrative Distance

Administrative distance (AD)orroute preferenceis a number of [arbitrary unit](https://en.wikipedia.org/wiki/Arbitrary_unit) assigned to [dynamic routes](https://en.wikipedia.org/wiki/Dynamic_route), [static routes](https://en.wikipedia.org/wiki/Static_route) and directly-connected routes. The value is used in [routers](https://en.wikipedia.org/wiki/Router_(computing)) to rank routes from most preferred (low administrative distance value) to least preferred (high administrative distance value).When multiple paths to the same destination are available in its [routing table](https://en.wikipedia.org/wiki/Routing_table), the router uses the route with the lowest administrative distance.
Router vendors typically design their routers to assign a default administrative distance to each kind of route. For example Cisco routers, routes issued by [OSPF](https://en.wikipedia.org/wiki/OSPF) have a lower default administrative distance than routes issued by the [Routing Information Protocol](https://en.wikipedia.org/wiki/Routing_Information_Protocol). By default, OSPF has a default administrative distance of 110 and RIP has a default administrative distance of 120. Administrative distance values can, however, usually be adjusted manually by a [network administrator](https://en.wikipedia.org/wiki/Network_administrator).
<https://en.wikipedia.org/wiki/Administrative_distance>

## Virtual Routing and Forwarding (VRF)

In [IP-based](https://en.wikipedia.org/wiki/Internet_Protocol)[computer networks](https://en.wikipedia.org/wiki/Computer_network), virtual routing and forwarding(VRF) is a technology that allows multiple instances of a [routing table](https://en.wikipedia.org/wiki/Routing_table) to co-exist within the same router at the same time. One or more logical or physical interfaces may have a VRF and these VRFs do not share routes therefore the packets are only forwarded between interfaces on the same VRF. VRFs are the [TCP/IP](https://en.wikipedia.org/wiki/Internet_Protocol) layer 3 equivalent of a [VLAN](https://en.wikipedia.org/wiki/VLAN). Because the routing instances are independent, the same or overlapping [IP addresses](https://en.wikipedia.org/wiki/IP_address) can be used without conflicting with each other. Network functionality is improved because network paths can be segmented without requiring multiple routers.
<https://en.wikipedia.org/wiki/Virtual_routing_and_forwarding>
