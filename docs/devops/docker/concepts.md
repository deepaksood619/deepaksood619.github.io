# Concepts

## Namespaces

Docker uses a technology called *namespaces*to provide the isolated workspace called the *container*. When you run a container, Docker creates a set ofnamespacesfor that container.

These namespaces provide a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.

Docker Engine uses namespaces such as the following on Linux:

- **The pid namespace:** Process isolation (PID: Process ID).
- **The net namespace:** Managing network interfaces (NET: Networking).
- **The ipc namespace:** Managing access to IPC resources (IPC: InterProcess Communication).
- **The mnt namespace:** Managing filesystem mount points (MNT: Mount).
- **The uts namespace:** Isolating kernel and version identifiers. (UTS: Unix Timesharing System).

Much of the macOS file system that is accessible to the user is also available to containers using the-vbind mount syntax. The following command runs a container from an image calledr-baseand shares the macOS user's~/Desktop/directory as/Desktopin the container.

`$ docker run -it -v ~/Desktop:/Desktop r-base bash`

For example, the PID namespace is what keeps processes in one container from seeing or interacting with processes in another container (or, for that matter, on the host system).

The PID namespace is the mechanism for remapping PIDs inside the container. Likewise, there are other namespaces (e.g. net, mnt, ipc, uts) that (along with cgroups) provide the isolated environments we know as containers. The user namespace, then, is the mechanism for remapping UIDs inside a container, and this is the newest namespace to be implemented in the Docker Engine, starting in 1.10.

## Network namespaces

Network namespaces provide a brand-new network stack for all the processes within the namespace. That includes **network interfaces, routing tables** and **iptables rules.**

## Control groups (cgroups)

Docker Engine on Linux also relies on another technology calledcontrol groups(cgroups). A cgroup limits an application to a specific set of resources. Control groups allow Docker Engine to share available hardware resources to containers and optionally enforce limits and constraints. For example, you can limit the memory available to a specific container.

## Union file systems

Union file systems, or UnionFS, are file systems that operate by creating layers, making them very lightweight and fast. Docker Engine uses UnionFS to provide the building blocks for containers. Docker Engine can use multiple UnionFS variants, including AUFS, btrfs, vfs, and DeviceMapper.

## Container format

Docker Engine combines the namespaces, control groups, and UnionFS into a wrapper called a container format. The default container format is *libcontainer*. In the future, Docker may support other container formats by integrating with technologies such as BSD Jails or Solaris Zones.

## Docker-Machine

## Distributions

Ubuntu/Alpine

Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox.

https://hub.docker.com/_/alpine

[Why I Will Never Use Alpine Linux Ever Again | Martin Heinz | Personal Website & Blog](https://martinheinz.dev/blog/92)

## References

https://docs.docker.com/engine/docker-overview/#the-underlying-technology

https://dev.to/frosnerd/docker-demystified-27kl
