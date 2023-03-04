# Others

## Interrupt Coelesing

## Bank Switching

Bank switchingis a technique used in computer design to increase the amount of usable memory beyond the amount directly addressable by the [processor](https://en.wikipedia.org/wiki/Microprocessor).It can be used to configure a system differently at different times; for example, a [ROM](https://en.wikipedia.org/wiki/Read-only_memory) required to [start a system](https://en.wikipedia.org/wiki/Booting) from diskette could be switched out when no longer needed. In video game systems, bank switching allowed larger games to be developed for play on existing consoles.
Bank switching originated in [minicomputer](https://en.wikipedia.org/wiki/Minicomputer) systems.Many modern [microcontrollers](https://en.wikipedia.org/wiki/Microcontroller) and [microprocessors](https://en.wikipedia.org/wiki/Microprocessor) use bank switching to manage [random-access memory](https://en.wikipedia.org/wiki/Random-access_memory), non-volatile memory, input-output devices and system management registers in small [embedded systems](https://en.wikipedia.org/wiki/Embedded_system). The technique was common in [8-bit](https://en.wikipedia.org/wiki/8-bit)[microcomputer](https://en.wikipedia.org/wiki/Microcomputer) systems. Bank-switching may also be used to work around limitations in address bus width, where some hardware constraint prevents straightforward addition of more address lines. Some control-oriented microprocessors use a bank-switching technique to access internal I/O and control registers, which limits the number of register address bits that must be used in every instruction.
Unlike memory management by [paging](https://en.wikipedia.org/wiki/Paging), data is not exchanged with a mass storage device like [disk storage](https://en.wikipedia.org/wiki/Disk_storage). Data remains in quiescent storage in a memory area that is not currently accessible to the processor (although it may be accessible to the video display, [DMA controller](https://en.wikipedia.org/wiki/Direct_memory_access), or other subsystems of the computer).

## Copy on Write (CoW / COW)

Copy-on-write(CoWorCOW), sometimes referred to asimplicit sharingorshadowing, is a resource-management technique used in [computer programming](https://en.wikipedia.org/wiki/Computer_programming) to efficiently implement a "duplicate" or "copy" operation on modifiable resources.If a resource is duplicated but not modified, it is not necessary to create a new resource; the resource can be shared between the copy and the original. Modifications must still create a copy, hence the technique: the copy operation is deferred to the first write. By sharing resources in this way, it is possible to significantly reduce the resource consumption of unmodified copies, while adding a small overhead to resource-modifying operations.

<https://en.wikipedia.org/wiki/Copy-on-write>

## Virtual Hard Drive

## VHD(Virtual Hard Disk) is a [file format](https://en.wikipedia.org/wiki/File_format) which represents a virtual [hard disk drive](https://en.wikipedia.org/wiki/Hard_disk_drive)(HDD). It may contain what is found on a physical HDD, such as [disk partitions](https://en.wikipedia.org/wiki/Disk_partition) and a [file system](https://en.wikipedia.org/wiki/File_system), which in turn can contain [files](https://en.wikipedia.org/wiki/Computer_file) and [folders](https://en.wikipedia.org/wiki/Folder_(computing)). It is typically used as the hard disk of a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine)

## Wayland

Wayland is intended as a simpler replacement for X, easier to develop and maintain. GNOME and KDE are expected to be ported to it.
Wayland is a protocol for a compositor to talk to its clients as well as a C library implementation of that protocol. The compositor can be a standalone display server running on Linux kernel modesetting and evdev input devices, an X application, or a wayland client itself. The clients can be traditional applications, X servers (rootless or fullscreen) or other display servers.
Part of the Wayland project is also the Weston reference implementation of a Wayland compositor. Weston can run as an X client or under Linux KMS and ships with a few demo clients. The Weston compositor is a minimal and fast compositor and is suitable for many embedded and mobile use cases.
[https://wayland.freedesktop.org](https://wayland.freedesktop.org/)

## Weston

Weston is the reference implementation of a Wayland compositor also developed by the Wayland project. It is written in [C](https://en.wikipedia.org/wiki/C_(programming_language)) and published under the [MIT License](https://en.wikipedia.org/wiki/MIT_License). Weston has official support for only the [Linux](https://en.wikipedia.org/wiki/Linux) operating system due to Weston's dependence on certain features of the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel), such as [kernel mode-setting](https://en.wikipedia.org/wiki/KMS_driver), [Graphics Execution Manager](https://en.wikipedia.org/wiki/Graphics_Execution_Manager)(GEM), and [udev](https://en.wikipedia.org/wiki/Udev), which have not been implemented in other Unix-like operating systems. When running on Linux, handling of the input hardware relies on [evdev](https://en.wikipedia.org/wiki/Evdev), while the handling of buffers relies on [Generic Buffer Management](https://en.wikipedia.org/wiki/Generic_Buffer_Management)(GBM). However, in 2013 a prototype port of Weston to [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD) was announced.

<https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)#Weston>

## Handle

In [computer programming](https://en.wikipedia.org/wiki/Computer_programming), ahandleis an abstract [reference](https://en.wikipedia.org/wiki/Reference_(computer_science)) to a [resource](https://en.wikipedia.org/wiki/System_resource). Handles are used when [application software](https://en.wikipedia.org/wiki/Application_software) references blocks of [memory](https://en.wikipedia.org/wiki/Memory_(computing)) or objects managed by another system, such as a [database](https://en.wikipedia.org/wiki/Database) or an [operating system](https://en.wikipedia.org/wiki/Operating_system). A resource handle can be an [opaque](https://en.wikipedia.org/wiki/Opaque_data_type)[identifier](https://en.wikipedia.org/wiki/Identifier), in which case it is often an [integer](https://en.wikipedia.org/wiki/Integer) number (often an [array index](https://en.wikipedia.org/wiki/Array_index) in an array or "table" that is used to manage that type of resource), or it can be a [pointer](https://en.wikipedia.org/wiki/Pointer_(computer_programming)) that allows access to further information.
Common resource handles are [file descriptors](https://en.wikipedia.org/wiki/File_descriptor), [network sockets](https://en.wikipedia.org/wiki/Network_socket), [database connections](https://en.wikipedia.org/wiki/Database_connection), [process identifiers](https://en.wikipedia.org/wiki/Process_identifier)(PIDs), and [job IDs](https://en.wikipedia.org/wiki/Job_ID). Process IDs and job IDs are explicitly visible integers, while file descriptors and sockets (which are often implemented as a form of file descriptor) are represented as integers, but are typically considered opaque. In traditional implementations, file descriptors are indices into a (per-process)[file descriptor table](https://en.wikipedia.org/wiki/File_descriptor_table), thence a (system-wide)[file table](https://en.wikipedia.org/wiki/File_table).
<https://en.wikipedia.org/wiki/Handle_(computing)>
