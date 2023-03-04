# Data Center Networking

Data centeris a pool of resources (computational, storage, network) interconnected using a [communication network](https://en.wikipedia.org/wiki/Communication_network). Data Center Network (DCN) holds a pivotal role in a [data center](https://en.wikipedia.org/wiki/Data_center), as it interconnects all of the data center resources together. DCNs need to be scalable and efficient to connect tens or even hundreds of thousands of servers to handle the growing demands of [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).Today's data centers are constrained by the interconnection network.

## Types of Data center network

## Three-tier DCN

The [legacy](https://en.wikipedia.org/wiki/Legacy_system) three-tier DCN architecture follows a multi-rooted [tree based network topology](https://en.wikipedia.org/wiki/Tree_network) composed of three layers of network switches, namely access, aggregate, and core layers.The [servers](https://en.wikipedia.org/wiki/Server_(computing)) in the lowest layers are connected directly to one of the edge layer switches. The aggregate layer switches interconnect together multiple access layer switches. All of the aggregate layer switches are connected to each other by core layer switches. Core layer switches are also responsible for connecting the data center to the [Internet](https://en.wikipedia.org/wiki/Internet). The three-tier is the common network architecture used in data centers.However, three-tier architecture is unable to handle the growing demand of cloud computing.The higher layers of the three-tier DCN are highly oversubscribed.Moreover, scalability is another major issue in three-tier DCN. Major problems faced by the three-tier architecture include, scalability, fault tolerance, energy efficiency, and cross-sectional bandwidth. The three-tier architecture uses enterprise-level network devices at the higher layers of topology that are very expensive and power hungry.

## Fat tree DCN

Fat tree DCN architecture handles the oversubscription and cross section bandwidth problem faced by the legacy three-tier DCN architecture. Fat tree DCN employs commodity network switches based architecture using [Clos topology](https://en.wikipedia.org/wiki/Clos_network).The network elements in fat tree topology also follows hierarchical organization of network switches in access, aggregate, and core layers. However, the number of network switches is much larger than the three-tier DCN. The architecture is composed ofkpods, where each pod contains, (k/2) 2servers, k/2 access layer switches, and k/2 aggregate layer switches in the topology. The core layers contain (k/2) 2core switches where each of the core switches is connected to one aggregate layer switch in each of the pods. The fat tree topology offers 1:1 oversubscription ratio and full bisection bandwidth.The fat tree architecture uses a customized addressing scheme and [routing algorithm](https://en.wikipedia.org/wiki/Routing_algorithm). The scalability is one of the major issues in fat tree DCN architecture and maximum number of pods is equal to the number of ports in each switch.

## DCell

DCell is a server-centric hybrid DCN architecture where one server is directly connected to many other servers.A server in the DCell architecture is equipped with multiple [Network Interface Cards](https://en.wikipedia.org/wiki/Network_Interface_Card)(NICs). The DCell follows a recursively built hierarchy of cells. A cell0is the basic unit and building block of DCell topology arranged in multiple levels, where a higher level cell contains multiple lower layer cells. The cell0is building block of DCell topology, which containsnservers and one commodity network switch. The network switch is only used to connect the server within a cell0. A cell1containk=n+1cell0cells, and similarly a cell2contains k * n + 1 dcell1. The DCell is a highly scalable architecture where a four level DCell with only six servers in cell0can accommodate around 3.26 million servers. Besides very high scalability, the DCell architecture depicts very high structural robustness.However, cross section bandwidth and network latency is a major issue in DCell DCN architecture.

## Others

Some of the other well-known DCNs include BCube, Camcube, FiConn, Jelly fishand Scafida. A qualitative discussion of different DCNs along with benefits and drawbacks associated with each one has been made available.
<https://en.wikipedia.org/wiki/Data_center_network_architectures>

## Torus Interconnect

A **[torus](https://en.wikipedia.org/wiki/Torus) interconnect**is a switch-less [network topology](https://en.wikipedia.org/wiki/Network_topology) for connecting processing nodes in a [parallel computer](https://en.wikipedia.org/wiki/Parallel_computer) system.
<https://en.wikipedia.org/wiki/Torus_interconnect>

## InfiniBand

InfiniBand(IB) is a computer networking communications standard used in [high-performance computing](https://en.wikipedia.org/wiki/High-performance_computing) that features very high [throughput](https://en.wikipedia.org/wiki/Throughput) and very low [latency](https://en.wikipedia.org/wiki/Latency_(engineering)). It is used for data interconnect both among and within computers. InfiniBand is also used as either a direct or switched interconnect between servers and storage systems, as well as an interconnect between storage systems

<https://en.wikipedia.org/wiki/InfiniBand>
