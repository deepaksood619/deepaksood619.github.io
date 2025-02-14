# VMware

## VMware ESXi

VMware ESXi is the bare-metal hypervisor in the VMware vSphere virtualization platform. As a bare-metal hypervisor for creating and running [virtual machines (VMs)](https://www.parallels.com/blogs/ras/virtual-machine/), VMware ESXi runs on top and [accesses the hardware directly](https://en.wikipedia.org/wiki/VMware_ESXi) without the need to install an operating system. This direct access to hardware allows it to perform better, run faster and be more scalable than other types of hypervisors. This makes VMware ESXi ideal for use in a large-scale [virtual desktop infrastructure (VDI)](https://www.parallels.com/products/ras/remote-application-server/), in conjunction with the other components in the VMware vSphere platform.

### What VMware ESXi Server Means

VMWare ESXi is the name of VMware’s bare-metal or Type-1 hypervisor. A hypervisor is a special kind of operating system where you can create, run, and manage multiple virtual machines. Each VM can have its own guest operating system and one or more applications. The guest OS can be any general-purpose OS like Windows, macOS, Linux, and so on.

Thus, a single VMWare ESXi Server can support multiple Windows VMs or a combination of multiple Windows, macOS, and Linux VMs, simultaneously. This is called server consolidation, a practice that allows you to save on hardware, cooling, and power costs, as well as maximize utilization of physical resources.

Being a Type-1 hypervisor, VMWare ESXi Server runs directly on top of physical infrastructure. Hence the term ‘bare metal’. This characteristic is different from that of a Type-2 hypervisor, which has to be installed on top of an operating system. The following diagram illustrates the difference between the two.

![type-1-vs-type-2-hypervisor](../../media/Pasted%20image%2020231223194557.jpg)

### VMware ESXi Features

VMware ESXi relies on the VMkernel, which is a microkernel, to run the hardware, guest systems and service layer making up the VMware virtualization platform. The VMkernel runs the physical hardware and guest VMs, connects directly to the CPU and memory and uses modules linked via another module to access the hardware’s networking and storage components.

Notable features of VMware ESXi include:

- Small size - Just 150 MB
- Convenient installation
- User-friendly administration tools
- Secure design
- Scalable reliability
- Extensive support and compatibility
- traffic shaping
- [memory ballooning](https://searchservervirtualization.techtarget.com/definition/memory-ballooning)
- role-based security access
- logging and auditing
- a GUI
- vSphere PowerCLI
- configuration of up to 768 processor cores

### ESXi Server Versus Hyper-V

Microsoft Hyper-V is another type-1 hypervisor in the mold of an ESXi Server. Hyper-V was first released as a component of Windows Server 2008. It is a free and standard component in later Windows Server versions as well as 64-bit versions of the Windows 10 Pro, Enterprise and Education editions.

ESXi and Hyper-V have their own set of pros and cons. Some features common to the two systems are:

- **Storage deployment:** Hyper-V’s Resilient File System (ReFS) is like VMware’s VMFS. However, in terms of clustering, VMFS is simpler than the Hyper-V equivalent.
- **Snapshot technology:** This refers to the use of point-in-time copies of VMs and their data, with the end goal of preventing data loss. Hyper-V allows running snapshots in production and exporting persistent checkpoints to other locations, features not available in the VMware suite. Hyper-V also allows 64 snapshots per VM (Virtual Machine), in contrast to the 32 VMware allows.
- **Memory management:** VMware uses several complex techniques, but Hyper-V uses just one.
- **Operating system support:** VMware supports Windows, macOS, Linux and Unix, but Hyper-V support is limited to Windows, Linux and FreeBSD.
- **Security:** VMware supports data encryption at rest and in motion, but Hyper-V security is managed via Active Directory.
- **Pricing:** VMware used to charge per processor, but it has shifted to the Microsoft model of charging based on the number of cores on the host machine.

### Architecture

The VMware ESXi architecture mainly consists of VMkernel and the processes that run on top of it. Let’s talk about the VMkernel and some of those processes now.

#### VMkernel

VMkernel is technically an operating system. Like other operating systems, VMkernel creates and controls processes, controls hardware devices on the server, uses a file system, manages application resources, and so on. Its main function, however, is to support virtual machines.

The main processes that run on VMkernel include the following.

##### Direct Console User Interface (DCUI)

DCUI is the local configuration and management interface. You can only access the DCUI locally, i.e., on the VMware ESXi server itself. Its user interface is menu-driven, with a look and feel similar to that of a BIOS interface. You mainly use the DCUI for initial configuration and troubleshooting purposes.

##### Virtual Machine Monitor (VMM)

VMM provides the execution environment for a virtual machine. This process is always accompanied by a corresponding Virtual Machine Executable (VMX) process. This means that each running VM is always accompanied by a VMM process and a VMX process. The former is in charge of virtualizing the guest OS instructions and managing memory, while the latter manages I/O to certain devices.

##### Common Information Model (CIM) System

The CIM system provides an interface for remote applications so that they can access device drivers and underlying hardware resources on the ESXi server in question. Access is provided through a set of APIs. The CIM system consists of an object manager known as a CIM broker and a collection of CIM providers. CIM providers are written by VMware itself as well by hardware vendors who want a way to manage and monitor their manufactured devices.

![vmware-esxi-architecture](../../media/Pasted%20image%2020231223195008.jpg)

[What Is the VMware ESXi Server and Its Role in the VMware Suite?](https://www.parallels.com/blogs/ras/vmware-esxi/)

[What is VMware ESXi? - Definition from TechTarget.com](https://www.techtarget.com/searchvmware/definition/VMware-ESXi)

[Virtualization and Containerization: Which one to pick?](https://blog.bytebytego.com/p/virtualization-and-containerization)

[Type 1 vs. Type 2 Hypervisors: What's the Difference?](https://youtu.be/0cAcYq7YyWQ)

## KVM Hypervisor (Kernel-based Virtual Machine)

Kernel-based Virtual Machine (KVM) is an [open source](https://www.redhat.com/en/topics/open-source/what-is-open-source) [virtualization](https://www.redhat.com/en/topics/virtualization/what-is-virtualization) technology built into Linux®. Specifically, KVM lets you turn Linux into a [hypervisor](https://www.redhat.com/en/topics/virtualization/what-is-a-hypervisor) that allows a host machine to run multiple, isolated virtual environments called guests or virtual machines (VMs).

_KVM is part of Linux_. If you’ve got Linux 2.6.20 or newer, you’ve got KVM. KVM was first announced in 2006 and merged into the mainline Linux kernel version a year later. Because KVM is part of existing Linux code, it immediately benefits from every new Linux feature, fix, and advancement without additional engineering.

[What is KVM?](https://www.redhat.com/en/topics/virtualization/what-is-KVM)

[KVM hypervisor: a beginners’ guide | Ubuntu](https://ubuntu.com/blog/kvm-hyphervisor)
