# IP

IP addresses are typically made of two separate components. The first part of the address is used to identify the network that the address is a part of. The part that comes afterwards is used to specify a specific host within that network.
Where the network specification ends and the host specification begins depends on how the network is configured. We will discuss this more thoroughly momentarily.
IPv4 addresses were traditionally divided into five different "classes", named A through E, meant to differentiate segments of the available addressable IPv4 space. These are defined by the first four bits of each address. You can identify what class an IP address belongs to by looking at these bits.
Here is a translation table that defines the addresses based on their leading bits:

- **Class A**

0---: If the first bit of an IPv4 address is "0", this means that the address is part of class A. This means that any address from0.0.0.0 to 127.255.255.255is in class A.

- **Class B**

10--: Class B includes any address from128.0.0.0 to 191.255.255.255. This represents the addresses that have a "1" for their first bit, but don't have a "1" for their second bit.

## Private IP - IANA - RFC1918 (reserved for private subnets)

10.x.x.x

172.16.0.0

192.168.0.0- **Class C**

110-: Class C is defined as the addresses ranging from192.0.0.0 to 223.255.255.255. This represents all of the addresses with a "1" for their first two bits, but without a "1" for their third bit.

- **Class D**

1110: This class includes addresses that have "111" as their first three bits, but a "0" for the next bit. This address range includes addresses from224.0.0.0 to 239.255.255.255.

- **Class E**

1111: This class defines addresses between240.0.0.0 and 255.255.255.255. Any address that begins with four "1" bits is included in this class.
Class D addresses are reserved for multi-casting protocols, which allow a packet to be sent to a group of hosts in one movement. Class E addresses are reserved for future and experimental use, and are largely not used.
Traditionally, each of the regular classes (A-C) divided the networking and host portions of the address differently to accommodate different sized networks. Class A addresses used the remainder of the first octet to represent the network and the rest of the address to define hosts. This was good for defining a few networks with a lot of hosts each.
The class B addresses used the first two octets (the remainder of the first, and the entire second) to define the network and the rest to define the hosts on each network. The class C addresses used the first three octets to define the network and the last octet to define hosts within that network.
The division of large portions of IP space into classes is now almost a legacy concept. Originally, this was implemented as a stop-gap for the problem of rapidly depleting IPv4 addresses (you can have multiple computers with the same host if they are in separate networks). This was replaced largely by later schemes that we will discuss below.

## Reserved IP Addresses

One of the most useful reserved ranges is the loopback range specified by addresses from 127.0.0.0 to 127.255.255.255. This range is used by each host to test networking to itself. Typically, this is expressed by the first address in this range: 127.0.0.1.

https://en.wikipedia.org/wiki/Reserved_IP_addresses

## LoopBack Address

Thelocalhostis the default name describing the local computer address also known as theloopback address. For example, typing:ping localhostwould ping the local IP address of 127.0.0.1 (the loopback address). When setting up a web server or software on a web server, 127.0.0.1 is used to point the software to the local machine.
cat /etc/hosts

127.0.0.1localhost

255.255.255.255broadcasthost

::1 localhost
Using the loopback interface bypasses any local network interface hardware. The local loopback mechanism is useful for testing software during development, independently of any networking configurations. For example, if a computer has been configured to provide a website, directing a locally running web browser to http://localhost may display its home page.
The IP**0.0.0.0**is commonly used to mean that the program listens on all the IPs available in that machine/server

The address0.0.0.0is a non-routable meta-address used to designate an invalid, unknown or non-applicable target. This address is assigned specific meanings in a number of contexts, such as on [clients](https://en.wikipedia.org/wiki/Client_(computing)) or on [servers](https://en.wikipedia.org/wiki/Server_(computing)).

https://en.wikipedia.org/wiki/0.0.0.0

https://whatismyipaddress.com/localhost

## Netmasks and Subnets

The process of dividing a network into smaller network sections is calledsubnetting. This can be useful for many different purposes and helps isolate groups of hosts together and deal with them easily.

## CIDR Notation

A system calledClassless Inter-Domain Routing, or CIDR, was developed as an alternative to traditional subnetting. The idea is that you can add a specification in the IP address itself as to the number of significant bits that make up the routing or networking portion.
For example, we could express the idea that the IP address192.168.0.15is associated with the netmask255.255.255.0by using the CIDR notation of192.168.0.15/24. This means that the first 24 bits of the IP address given are considered significant for the network routing.

## IPv4 vs IPv6 / IP routing

## IPAM

[IPAM (IP Address Management)](https://www.infoblox.com/products/ipam-dhcp/) is the administration of DNS and DHCP, which are the network services that assign and resolve IP addresses to machines in a TCP/IP network. Simply put, IPAM is a means of planning, tracking, and managing the Internet Protocol address space used in a network. Most commonly, tools such as DNS and DHCP are used in tandem to perform this task, though true IPAM will glue these services together so that each is aware of changes in the other (for instance DNS knowing of the IP address taken by a client via DHCP, and updating itself accordingly).
IP Address Management (IPAM) is an integrated suite of tools to enable end-to-end planning, deploying, managing and monitoring of your IP address infrastructure, with a rich user experience. IPAM automatically discovers IP address infrastructure servers and Domain Name System (DNS) servers on your network and enables you to manage them from a central interface.

https://docs.microsoft.com/en-us/windows-server/networking/technologies/ipam/ipam-top

## Ip address examples

| ping 0                               | 127.0.0.1 (Linux)     |
|--------------------------------------|-----------------------|
| ping 0                               | 0.0.0.0 (Mac)         |
| ping 127.1                           | 127.0.0.1             |
| ping 10.50.1                         | 10.50.0.1             |
| ping 10.0.513                        | 10.0.2.1 (2x 256 + 1) |
| Decimal ip notation - ping 167772673 | 10.0.2.1              |
| Hex ip notation - ping 0xA000201     | 10.0.2.1              |
| Octal ip notation - ping 10.0.2.010  | 10.0.2.8              |
https://ma.ttias.be/theres-more-than-one-way-to-write-an-ip-address

## References

https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking
