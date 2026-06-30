---
slug: /drbd
title: DRBD - Distributed Replicated Block Device
description: Open source distributed replicated block storage software for Linux, used for high performance high availability clusters
created: 2026-06-30
updated: 2026-06-30
---

DRBD® is open source distributed replicated block storage software for the Linux platform and is typically used for high performance high availability.

## What It Is

DRBD is implemented as a kernel driver, several user space management applications, and some shell scripts.

DRBD is traditionally used in high availability (HA) computer clusters, but beginning with DRBD version 9, it can also be used to create larger software-defined storage pools with a focus on cloud integration.

## Key Features

**Kernel Driver**: The DRBD kernel driver presents virtual block devices to the system.

**Data Mirroring**: Reads and writes data to optional local backing devices and mirrors data writes to one (or multiple) peer(s). In synchronous mode it will signal completion of a write request after it receives completion events from the local backing storage device and from the peer(s).

**Performance**: Due to its focus on performance and ability to keep pace with applications that have frequent small write operations, DRBD is often found backing HA databases and messaging queues.

**Efficient Data Path**: Very efficient. No user space components involved. Read requests can be carried out locally, not causing network traffic.

## Use Cases

- High availability computer clusters
- Software-defined storage pools
- HA databases
- Messaging queues
- Cloud integration

## Networking Options

- TCP/IP (traditional)
- RDMA/Verbs (InfiniBand, iWARP, RoCE) for enhanced performance
- Supports multiple paths for bandwidth aggregation and link failover

## History

For over two decades, DRBD has been actively developed and regularly updated.

## Links

- [DRBD Official Site](https://linbit.com/drbd/)
- [DRBD Documentation](https://linbit.com/drbd-user-guide/)
- [High Availability](devops/devops-intro/high-availability.md)
