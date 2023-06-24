# Fallacies and Problems

## Fallacies of distributed computing

The **fallacies of distributed computing** are a set of assertions made by [L Peter Deutsch](https://en.wikipedia.org/wiki/L_Peter_Deutsch) and others at [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) describing false assumptions that [programmers](https://en.wikipedia.org/wiki/Programmer) new to [distributed](https://en.wikipedia.org/wiki/Distributed_computing) [applications](https://en.wikipedia.org/wiki/Application_software) invariably make.

The [fallacies](https://en.wikipedia.org/wiki/Fallacy) are:

1. The [network](https://en.wikipedia.org/wiki/Computer_network) is reliable.
2. [Latency](https://en.wikipedia.org/wiki/Latency_(engineering)) is zero.
3. [Bandwidth](https://en.wikipedia.org/wiki/Throughput) is infinite.
4. The network is [secure](https://en.wikipedia.org/wiki/Computer_security).
5. [Topology](https://en.wikipedia.org/wiki/Network_topology) doesn't change.
6. There is one [administrator](https://en.wikipedia.org/wiki/Network_administrator).
7. Transport cost is zero.
8. The network is homogeneous.

**The effects of the fallacies**

1. Software applications are written with little error-handling on networking errors. During a network outage, such applications may stall or infinitely wait for an answer packet, permanently consuming memory or other resources. When the failed network becomes available, those applications may also fail to retry any stalled operations or require a (manual) restart.
2. Ignorance of network latency, and of the [packet loss](https://en.wikipedia.org/wiki/Packet_loss) it can cause, induces application- and transport-layer developers to allow unbounded traffic, greatly increasing dropped packets and wasting bandwidth.
3. Ignorance of bandwidth limits on the part of traffic senders can result in bottlenecks.
4. Complacency regarding network security results in being blindsided by malicious users and programs that continually adapt to security measures.
5. Changes in [network topology](https://en.wikipedia.org/wiki/Network_topology) can have effects on both bandwidth and latency issues, and therefore can have similar problems.
6. Multiple administrators, as with [subnets](https://en.wikipedia.org/wiki/Subnetwork) for rival companies, may institute conflicting policies of which senders of network traffic must be aware in order to complete their desired paths.
7. The "hidden" costs of building and maintaining a network or subnet are non-negligible and must consequently be noted in budgets to avoid vast shortfalls.
8. If a system assumes a homogeneous network, then it can lead to the same problems that result from the first three fallacies.

<https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing>

<https://medium.com/baseds/foraging-for-the-fallacies-of-distributed-computing-part-1-1b35c3b85b53>

<https://medium.com/baseds/foraging-for-the-fallacies-of-distributed-computing-part-2-b8ff29beed56>
