# Peer to Peer Networks

A **P2P** network is a type of network in which different computers communicate with each other directly without the need for a central server. The peer in the term indicates that all participating computers/systems are equal. These computers are also called **nodes**.

In a traditional network architecture (known as the **client-server architecture**), there is usually one server and multiple clients. If two clients want to communicate with each other, the message has to first reach the server and then the server sends the message to the second client.

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3607f1e7-ceb6-4324-ae98-ebb8edae0518_1600x606.png?utm_source=substack&utm_medium=email)

## History of P2P networks

We start our discussion of P2P with the history of such networks, as it is not a recent concept. The evolution of P2P networks is a fascinating journey spanning several decades, marked by groundbreaking developments and innovations. Here is a timeline of key P2P applications and transformative moments in the history of P2P.

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4ab44bb4-1c58-4687-91ab-b54246005247_1600x262.jpeg?utm_source=substack&utm_medium=email)

## Types of P2P models

We would like to discuss how the P2P networks operate, but before we do that, it is important to understand the different ways in which peer-to-peer networks can be structured or categorized based on their functionalities. So, here are some common types of P2P models.

### Pure P2P model

In this model, there is no central server or authority, and each node can act both as a client and a server.

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fda98af07-8143-476a-a977-4ba7698a6de1_1254x1233.jpeg?utm_source=substack&utm_medium=email)

### Hybrid P2P model

This model makes use of centralized servers for facilitating initial connection and peer discovery. Further communication between peers is carried out in a decentralized manner. This approach balances the benefits of a decentralized network with the efficiency of centralized coordination.

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1b4f2aaa-87f0-4b83-9beb-d9935b09df0e_1314x1227.jpeg?utm_source=substack&utm_medium=email)

### Blockchain-based P2P model

A blockchain-based Peer-to-Peer model refers to a decentralized network architecture where the principles of P2P interaction are combined with blockchain technology. In this model, blockchain serves as the underlying distributed ledger or database that records and verifies transactions, creating a secure and transparent environment for peer-to-peer interactions. This model is often associated with decentralized applications (DApps) and platforms that leverage the capabilities of blockchain for various purposes.

  ![image](https://ci3.googleusercontent.com/meips/ADKq_Nar-7Ji3rDkYc7_MOeF5NEaS8IoxgmOuYKoxQqmnfL6hvN7QagXUKeITlZw1b1v5dviefKaRv6DGH1MB-HkBSP9XBGFMvo1OD3GekEe9I5k5_1qFHCJIYWKmdwwpXrL-1CSEQkYMOvDIvNmKwqTzyKGTal2izYeOksoeYYkEL3z9L4DyuQ3VC9paAVIrqAF1J1NmGtOrzE1vQyHcqKlOj_WWoOh5ldTlg7D3exYUc1fbWcBUw31wOlHF66FMTE5SrRXGAwRO-eLw1wWdYGxeYZWg8ILRSl60KXzaqXabyzFdHxKo9Qvg7oGYVY=s0-d-e1-ft#https://substackcdn.com/image/fetch/w_478,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6e5c584f-e67d-46eb-8e38-d3ff3a0e7052_1002x1600.jpeg)

## How the P2P network operates

Now, we are all set to discuss how a typical P2P network operates. As discussed earlier, the P2P network is an example of a decentralized architecture where each node has equal status and is capable of both requesting and providing resources or services. P2P networks can be used for various applications, including file sharing, communication, distributed computing, and more.

Here is a general overview of how a P2P network operates.

### Node Initialization

When a new node in a P2P network boots up, it doesn’t know anything about the network, because there is no central server. Usually, developers provide a list of trusted nodes written directly into the code of the P2P client application that can be used for initial peer discovery. These trusted nodes could be centralized servers or peers depending upon the P2P application.  

A node is usually identified by the following node triple: IP address, Port number, and node ID. The node ID should be unique with no collisions between peers. There are several methods to achieve this:

- Node ID is a random number generated once the P2P client is installed.
- Node id is a hash of the computer’s network card MAC address and hard disk serial number

Take the example of _**Bitcoin**_, when a Bitcoin client starts, it checks its database for a list of reliable peers, if no such list is found it will use the default list hard coded into the software by the developers. Once the client has found a peer it will periodically look for new peers. The hard-coded list is just a bootstrap, once the client has a few nodes connected it doesn't need the original list anymore. The Bitcoin P2P system is designed to be very fault-tolerant and decentralized.

### Discovery and Connection

After the node initialization, it needs a way to discover and connect with other nodes in the network. There are different methods for peer discovery in a P2P network. Some of the methods are discussed below.

**Centralized Server / Tracker Server:** In this method, there is a central server that has information about all nodes in the network. When a new node wants to join the P2P network, it first contacts the central server which provides the new node the information about other peers. The new node can then communicate directly with other nodes. This method may seem like client-server architecture. However, the server is only used for peer discovery and not for actual communication since after peer discovery, the communication among peers occurs directly.

The central server is also called a tracker in some P2P applications that maintains a list of active peers in the network. All existing peers periodically communicate with the tracker to confirm their availability and get a fresh list of all available peers. The hybrid P2P model utilizes this approach.

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0ecbe848-f188-4afe-9b43-14d11b623105_1248x984.jpeg?utm_source=substack&utm_medium=email)

**Distributed Hash Tables (DHTs):** It is a decentralized method for peer discovery commonly used in P2P networks. Nodes are assigned a unique identifier, and a distributed hash table is used to map these identifiers to IP addresses.  When a node wants to discover another peer, it can perform a lookup in the DHT to find the corresponding IP address. The pure P2P model utilizes this approach.

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F84b31c04-3971-4c43-b289-22f4955c8a9b_849x873.jpeg?utm_source=substack&utm_medium=email)

**Broadcasting and Multicasting:** Nodes may broadcast their presence or send multicast messages to the network. Other nodes can listen to these broadcasts or messages to discover peers. This method is more common in smaller, local P2P networks.

For example, when a node sends a broadcast file request to the network, all peers who can provide the file send the message to the requester node. The node then chooses the specific peer to get the file from.

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc54c7813-4f09-4d9b-8684-cde9a531876d_1488x1110.jpeg?utm_source=substack&utm_medium=email)

### Distributed Data Storage

Peers in a P2P network share resources directly with each other. Resources can include files, computational power, or other services. So, the question is, how these resources are being stored in a P2P network? We can understand this with the help of an example. In a file-sharing P2P network, each peer contributes a portion of its storage to host parts of files. This results in a distributed storage system where the complete file is reconstructed by combining contributions from multiple peers in the network.

### Routing and Lookup

Every node maintains a lookup table (also called a routing table) where it stores the node information (IP, Port, and ID) of the closest peers it knows of. The implementation for lookup tables varies based on the topology, but all share a common principle - they enable nodes to identify the peer closest to any given node ID. If the peer has the data it will route it back to the query originator, if not, it will route the query to the closest node it has on its lookup table, this process continues recursively until the node that has the data is found.

Depending on the P2P protocol, there exist different metrics to define the distance between the node ID of two peers. For example, the very popular peer-to-peer protocol _**Kademlia**_ uses the XOR-metric.

## Real-life applications of P2P network

P2P networks have some cool real-life applications. Here are some common P2P applications along with the respective models they often fall into:

![image](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F47c8e50b-dbe3-44f5-9717-cbc77b7d61d1_1880x680.png?utm_source=substack&utm_medium=email)

## Advantages of P2P network

### Decentralization

P2P networks are designed to operate in a decentralized manner, meaning there is no central server or authority controlling the network.

### Redundancy and reliability

The data is not placed in just one peer’s storage. Multiple peers have a copy of the same data which prevents a single point of failure - unlike the traditional client-server architecture where the central server has the data and can be lost if the server fails. Since data is distributed across multiple nodes, P2P networks are inherently redundant. If one node fails or leaves the network, the data can still be retrieved from other nodes, enhancing reliability.

### Scalability

A P2P network is more scalable than a traditional client-server architecture. In a traditional client-server architecture, a single server has to handle all requests. If there are too many client requests, the server may not be able to handle all of the requests. However, in the case of P2P, each request is not necessarily handled by a single node, thus providing scalability.

### Distributed computing

P2P networks can be used for distributed computing tasks where processing is distributed among multiple nodes. This is beneficial for tasks that require significant computational power.

### File Sharing and content distribution

P2P networks, especially those using protocols like _BitTorrent_, excel in distributing large files efficiently. Users can download and upload simultaneously, reducing the load on individual servers.

### Privacy and anonymity

In P2P systems, users may enjoy increased privacy and anonymity as they communicate directly with peers without relying on a central server. This can be advantageous in applications where privacy is a concern.

## Challenges in P2P network

Let’s now discuss, some of the challenges in P2P networks.

### Security concerns

P2P networks can be more vulnerable to security threats, including unauthorized access, malware distribution, etc.

### Dependency on peer availability

The availability of data in a P2P network depends on the willingness and availability of peers to share that data. If certain nodes leave the network or become unresponsive, it can affect the availability of resources.

### Legal and copyright issues

P2P networks are known to share and spread copyrighted material. Sharing copyrighted material can lead users to legal issues.

For example, _**Metallica**_ (a music band) filed a lawsuit against _**Napster**_ in 2000. Napster was shut down in 2001. In another incident, the alleged owner of one of the biggest torrent sites, i.e., _**kickasstorrents**_, was arrested by the US authorities from Poland back in 2016. Similarly, another famous torrent site for movies _**YIFY Torrents**_ or _**YTS**_ also went down in 2015 after facing a lawsuit from Motion Picture Association of America.

## Regulatory frameworks for P2P networks

P2P networks are playing a significant role in shaping the Internet's future. Nevertheless, it's crucial to address specific legal and ethical considerations. For instance:

- Sharing copyrighted material without permission is a strict no-go.
- For blockchains, implementing KYC (know your customer) procedures for every user is important. This helps prevent potential issues, such as, money laundering and other illegal transactions through cryptocurrencies.
- Security in P2P networks is paramount. Measures must be in place to prevent any unauthorized access by hackers to users' computers on the network.
- It's essential to ensure that no malware spreads through the P2P network.

## What lies ahead for the P2P networks?

P2P networks have gained traction in recent years when it comes to file sharing and cryptocurrency. With the advent of _**DeFi**_ (decentralized finance) on blockchain, the future of P2P networks looks greener than ever. DeFi platforms allow people to lend or borrow funds from others without relying on any financial institute or brokerage. The most prominent blockchain that supports DeFi is the _**Ethereum**_ blockchain.

Furthermore, P2P could play a role in how our smart devices communicate. Imagine your smart fridge and coffee maker having a direct chit-chat without involving a server. They might even plan your breakfast together. Sounds fun! isn’t it?

## Summary

- P2P networks follow decentralized architecture where inherently there is no central server acting as authority.
- We have discussed the different models of P2P networks such as pure, hybrid, and blockchain-based P2P networks.
- A detailed description of how a generic P2P network operates is discussed in this issue.
- We have presented the advantages and challenges of P2P networks, together with some of the instances of the legal and copyright issues faced by P2P applications in the past.
- The future of the P2P network looks brighter than ever with the advent of blockchain and DeFi technologies.

https://skerritt.blog/designing-effective-peer-to-peer-networks
