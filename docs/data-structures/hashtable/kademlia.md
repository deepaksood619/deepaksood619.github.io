# Kademlia

Kademliais a [distributed hash table](https://en.wikipedia.org/wiki/Distributed_hash_table) for decentralized [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer)[computer networks](https://en.wikipedia.org/wiki/Computer_network) designed by Petar Maymounkov and David Mazières in 2002. It specifies the structure of the network and the exchange of information through [node](https://en.wikipedia.org/wiki/Node_(networking)) lookups. Kademlia nodes communicate among themselves using [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol). A virtual or [overlay network](https://en.wikipedia.org/wiki/Overlay_network) is formed by the participant nodes. Each node is identified by a number ornode ID. Thenode IDserves not only as identification, but the Kademlia algorithm uses thenode IDto locate values (usually file [hashes](https://en.wikipedia.org/wiki/Hash_function) or keywords). In fact, thenode IDprovides a direct map to file hashes and that node stores information on where to obtain the file or resource.
When searching for some value, the algorithm needs to know the associated key and explores the network in several steps. Each step will find nodes that are closer to the key until the contacted node returns the value or no more closer nodes are found. This is very efficient: like many other DHTs, Kademlia contacts onlyO(log(n))nodes during the search out of a total ofnnodes in the system.
Further advantages are found particularly in the decentralized structure, which increases the resistance against a [denial-of-service attack](https://en.wikipedia.org/wiki/Denial-of-service_attack). Even if a whole set of nodes is flooded, this will have limited effect on network availability, since the network will recover itself by knitting the network around these "holes".

## References

<https://en.wikipedia.org/wiki/Kademlia>

<https://github.com/bmuller/kademlia>
