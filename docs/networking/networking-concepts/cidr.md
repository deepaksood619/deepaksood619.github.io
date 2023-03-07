# CIDR

## Classless Inter-Domain Routing

is a method for allocating [IP addresses](https://en.wikipedia.org/wiki/IP_address) and [IP routing](https://en.wikipedia.org/wiki/IP_routing). The [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) introduced CIDR in 1993 to replace the previous addressing architecture of [classful network](https://en.wikipedia.org/wiki/Classful_network) design in the [Internet](https://en.wikipedia.org/wiki/Internet). Its goal was to slow the growth of [routing tables](https://en.wikipedia.org/wiki/Routing_table) on [routers](https://en.wikipedia.org/wiki/Router_(computing)) across the Internet, and to help slow the rapid [exhaustion of IPv4 addresses](https://en.wikipedia.org/wiki/IPv4_address_exhaustion).

IP addresses are described as consisting of two groups of [bits](https://en.wikipedia.org/wiki/Bit) in the address: the [most significant bits](https://en.wikipedia.org/wiki/Most_significant_bit) are the [network prefix](https://en.wikipedia.org/wiki/Network_prefix), which identifies a whole network or [subnet](https://en.wikipedia.org/wiki/Subnetwork), and the [least significant](https://en.wikipedia.org/wiki/Least_significant_bit) set forms the*host identifier*, which specifies a particular interface of a host on that network. This division is used as the basis of traffic routing between IP networks and for address allocation policies.

Whereas classful network design for [IPv4](https://en.wikipedia.org/wiki/IPv4) sized the network prefix as one or more 8-bit groups, resulting in the blocks of Class A, B, or C addresses, Classless Inter-Domain Routing allocates address space to [Internet service providers](https://en.wikipedia.org/wiki/Internet_service_provider) and end users on any address [bit](https://en.wikipedia.org/wiki/Bit) boundary. In [IPv6](https://en.wikipedia.org/wiki/IPv6), however, the interface identifier has a fixed size of 64 bits by convention, and smaller subnets are never allocated to end users.

CIDR encompasses several concepts. It is based on the **variable-length subnet masking** (**VLSM**) technique, which allows the specification of arbitrary-length prefixes. CIDR introduced a new method of representation for IP addresses, now commonly known as **CIDR notation**, in which an address or routing prefix is written with a suffix indicating the number of bits of the prefix, such as *192.0.2.0/24* for IPv4, and *2001:db8::/32* for IPv6. CIDR introduced an administrative process of allocating address blocks to organizations based on their actual and short-term projected needs. The aggregation of multiple contiguous prefixes resulted in [supernets](https://en.wikipedia.org/wiki/Supernet) in the larger Internet, which whenever possible are advertised as aggregates, thus reducing the number of entries in the global routing table.

## Resources

<https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing>
