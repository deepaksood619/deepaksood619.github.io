# (2) System Calls

## man syscalls

<http://man7.org/linux/man-pages/man2/syscalls.2.html>

## msync

`msync - synchronize a file with a memory map`

msync() flushes changes made to the in-core copy of a file that was mapped into memory using [mmap(2)](http://man7.org/linux/man-pages/man2/mmap.2.html) back to the filesystem. Without use of this call, there is no guarantee that changes are written back before [munmap(2)](http://man7.org/linux/man-pages/man2/munmap.2.html) is called.

<http://man7.org/linux/man-pages/man2/msync.2.html>

## bpf (berkeley packet filter) / eBPF (extended berkeley filter)

bpf - perform a command on an extended BPF map or program

TheBerkeley Packet Filter(BPF) provides a raw interface to [data link layers](https://en.wikipedia.org/wiki/Data_link_layer), permitting raw link-layer packets to be sent and received. It is available on most [Unix-like](https://en.wikipedia.org/wiki/Unix-like) operating systems. In addition, if the driver for the network interface supports [promiscuous mode](https://en.wikipedia.org/wiki/Promiscuous_mode), it allows the interface to be put into that mode so that all packets on the [network](https://en.wikipedia.org/wiki/Computer_network) can be received, even those destined to other hosts.

BPF supports filtering packets, allowing a [userspace](https://en.wikipedia.org/wiki/Userspace)[process](https://en.wikipedia.org/wiki/Process_(computer_science)) to supply a filter program that specifies which packets it wants to receive. For example, a [tcpdump](https://en.wikipedia.org/wiki/Tcpdump) process may only want to receive packets that initiate a TCP connection. BPF only returns packets that pass the filter that the process supplies. This avoids copying unwanted packets from the [operating system](https://en.wikipedia.org/wiki/Operating_system)[kernel](https://en.wikipedia.org/wiki/Kernel_(computer_science)) to the process, greatly improving performance.

BPF is sometimes used to refer just to the filtering mechanism, rather than to the entire interface. Some systems, such as [Linux](https://en.wikipedia.org/wiki/Linux) and [Tru64 UNIX](https://en.wikipedia.org/wiki/Tru64_UNIX), provide a raw interface to the data link layer other than the BPF raw interface but use the BPF filtering mechanisms for that raw interface

<https://en.wikipedia.org/wiki/Berkeley_Packet_Filter>

<https://blog.cloudflare.com/cloudflare-architecture-and-how-bpf-eats-the-world>
