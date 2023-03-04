# Others

## LWM2M - Light Weight Machine-to-Machine

It is an application layer protocol built over CoAP

## HSTS - HTTPS Strict Transport Security

This is a list of websites that have requested to be contacted via HTTPS only.

## Fibre Channel

Fibre Channel(FC) is a high-speed data transfer protocol (commonly running at 1, 2, 4, 8, 16, 32, and 128 [gigabit](https://en.wikipedia.org/wiki/Gigabit) per second rates) providing in-order, losslessdelivery of raw block data, primarily used to connect [computer data storage](https://en.wikipedia.org/wiki/Computer_data_storage) to [servers](https://en.wikipedia.org/wiki/Server_(computing)).Fibre Channel is mainly used in [storage area networks](https://en.wikipedia.org/wiki/Storage_area_network)(SAN) in commercial [data centers](https://en.wikipedia.org/wiki/Data_center). Fibre Channel networks form a [switched fabric](https://en.wikipedia.org/wiki/Switched_fabric) because they operate in unison as one big switch. Fibre Channel typically runs on [optical fiber](https://en.wikipedia.org/wiki/Optical_fiber) cables within and between data centers, but can also run on copper cabling.
Most [block storage](https://en.wikipedia.org/wiki/Block_(data_storage)) runs over Fibre Channel Fabrics and supports many upper level protocols.[Fibre Channel Protocol](https://en.wikipedia.org/wiki/Fibre_Channel_Protocol)(FCP) is a transport protocol that predominantly transports [SCSI](https://en.wikipedia.org/wiki/Small_Computer_System_Interface) commands over Fibre Channel networks.[Mainframe computers](https://en.wikipedia.org/wiki/Mainframe_computer) run the [FICON](https://en.wikipedia.org/wiki/FICON) command set over Fibre Channel because of its high reliability and throughput. Fibre Channel can be used to transport data from storage systems that use solid-state [flash memory](https://en.wikipedia.org/wiki/Flash_memory) storage medium by transporting [NVMe](https://en.wikipedia.org/wiki/NVM_Express) protocol commands.
The goal of Fibre Channel is to create a [storage area network](https://en.wikipedia.org/wiki/Storage_area_network)(SAN) to connect servers to storage.
<https://en.wikipedia.org/wiki/Fibre_Channel>

## Storage Area Network (SAN)

The SAN is a dedicated network that enables multiple servers to access data from one or more storage devices.[Enterprise storage](https://en.wikipedia.org/wiki/Enterprise_storage) uses the SAN to backup to secondary storage devices including disk arrays, tape libraries, and other backup while the storage is still accessible to the server. Servers may access storage from multiple storage devices over the network as well.
SANs are often designed with dual fabrics to increase fault tolerance. Two completely separate fabrics are operational and if the primary fabric fails, then the second fabric becomes the primary.
A **storage area network(SAN) orstorage network**is a [Computer network](https://en.wikipedia.org/wiki/Computer_network) which provides access to consolidated, [block-level data storage](https://en.wikipedia.org/wiki/Block_device). SANs are primarily used to enhance accessibility of storage devices, such as [disk arrays](https://en.wikipedia.org/wiki/Disk_array) and [tape libraries](https://en.wikipedia.org/wiki/Tape_library), to [servers](https://en.wikipedia.org/wiki/Server_(computing)) so that the devices appear to the [operating system](https://en.wikipedia.org/wiki/Operating_system) as [locally-attached devices](https://en.wikipedia.org/wiki/Direct-attached_storage). A SAN typically is a dedicated network of storage devices not accessible through the [local area network](https://en.wikipedia.org/wiki/Local_area_network)(LAN) by other devices, thereby preventing interference of LAN traffic in data transfer.
<https://en.wikipedia.org/wiki/Storage_area_network>

## DHCP

The**Dynamic Host Configuration Protocol(DHCP)** is a [network management protocol](https://en.wikipedia.org/wiki/Network_protocol) used on [UDP/IP](https://en.wikipedia.org/wiki/UDP/IP) networks whereby a DHCP server dynamically assigns an [IP address](https://en.wikipedia.org/wiki/IP_address) and other network configuration parameters to each device on a network so they can communicate with other IP networks.A DHCP server enables computers to request IP addresses and networking parameters automatically from the [Internet service provider](https://en.wikipedia.org/wiki/Internet_service_provider)(ISP), reducing the need for a [network administrator](https://en.wikipedia.org/wiki/Network_administrator) or a user to manually assign IP addresses to all network devices.In the absence of a DHCP server, a computer or other device on the network needs to be manually assigned an IP address, or to assign itself an [APIPA](https://en.wikipedia.org/wiki/APIPA) address, which will not enable it to communicate outside its local subnet.

DHCP can be implemented on networks ranging in size from [home networks](https://en.wikipedia.org/wiki/Home_network) to large [campus networks](https://en.wikipedia.org/wiki/Campus_network) and regional [Internet service provider](https://en.wikipedia.org/wiki/Internet_service_provider) networks.A [router](https://en.wikipedia.org/wiki/Router_(computing)) or a [residential gateway](https://en.wikipedia.org/wiki/Residential_gateway) can be enabled to act as a DHCP server. Most residential network routers receive a globally unique IP address within the ISP network. Within a local network, a DHCP server assigns a local IP address to each device connected to the network.

## Operation

The DHCP employs a [connectionless](https://en.wikipedia.org/wiki/Connectionless_communication) service model, using the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)(UDP). It is implemented with two UDP port numbers for its operations which are the same as for the bootstrap protocol ([BOOTP](https://en.wikipedia.org/wiki/BOOTP)). UDP port number 67 is the destination port of a server, and UDP port number 68 is used by the client.
<https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol>

## Server Message Block (SMB)

In [computer networking](https://en.wikipedia.org/wiki/Computer_network), **Server Message Block(SMB**), one version of which was also known as **Common Internet File System(CIFS**) operates as an [application-layer](https://en.wikipedia.org/wiki/Application_layer) or [presentation-layer](https://en.wikipedia.org/wiki/Presentation_layer)(network protocol) mainly used for providing [shared access](https://en.wikipedia.org/wiki/Shared_access) to [files](https://en.wikipedia.org/wiki/Computer_file), [printers](https://en.wikipedia.org/wiki/Computer_printer), and [serial ports](https://en.wikipedia.org/wiki/Serial_port) and miscellaneous communications between nodes on a network. It also provides an authenticated [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication) mechanism. Most usage of SMB involves computers running [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows), where it was known as "Microsoft Windows Network" before the introduction of [Active Directory](https://en.wikipedia.org/wiki/Active_Directory). Corresponding [Windows services](https://en.wikipedia.org/wiki/Windows_service) are LAN Manager Server (for the server component) and LAN Manager Workstation (for the client component).
<https://en.wikipedia.org/wiki/Server_Message_Block>

## Reactive Streams

Reactive Streams is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure. This encompasses efforts aimed at runtime environments (JVM and JavaScript) as well as network protocols.
[https://www.reactive-streams.org](https://www.reactive-streams.org/)

## Web Proxy Auto-Discovery (WPAD) Protocol

TheWeb Proxy Auto-Discovery (WPAD) Protocolis a method used by clients to locate the URL of a configuration file using [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) and/or [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) discovery methods. Once detection and download of the configuration file is complete, it can be executed to determine the proxy for a specified URL.
<https://en.wikipedia.org/wiki/Web_Proxy_Auto-Discovery_Protocol>

## Contrained Application Protocol (CoAP)

## Constrained Application Protocol(CoAP) is a specialized Internet Application Protocol for constrained devices, as defined in [RFC 7252](https://tools.ietf.org/html/rfc7252). It enables those constrained devices called "nodes" to communicate with the wider Internet using similar protocols. CoAP is designed for use between devices on the same constrained network (e.g., low-power, lossy networks), between devices and general nodes on the Internet, and between devices on different constrained networks both joined by an internet. CoAP is also being used via other mechanisms, such as SMS on mobile communication networks

CoAP is a [service layer](https://en.wikipedia.org/wiki/Service_layer) protocol that is intended for use in resource-constrained internet devices, such as [wireless sensor network](https://en.wikipedia.org/wiki/Wireless_sensor_network) nodes. CoAP is designed to easily translate to [HTTP](https://en.wikipedia.org/wiki/HTTP) for simplified integration with the web, while also meeting specialized requirements such as [multicast](https://en.wikipedia.org/wiki/Multicast) support, very low overhead, and simplicity.Multicast, low overhead, and simplicity are extremely important for [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_Things)(IoT) and [Machine-to-Machine](https://en.wikipedia.org/wiki/Machine-to-Machine)(M2M) devices, which tend to be deeply [embedded](https://en.wikipedia.org/wiki/Embedded_system) and have much less memory and power supply than traditional internet devices have. Therefore, efficiency is very important. CoAP can run on most devices that support [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) or a UDP analogue.
<https://www.eclipse.org/californium>

## Lightweight Directory Access Protocol (LDAP)

LDAP is an open, vendor-neutral, industry standard [application protocol](https://en.wikipedia.org/wiki/Application_protocol) for accessing and maintaining distributed [directory information services](https://en.wikipedia.org/wiki/Directory_service) over an [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)(IP) network.[Directory services](https://en.wikipedia.org/wiki/Directory_service) play an important role in developing [intranet](https://en.wikipedia.org/wiki/Intranet) and Internet applications by allowing the sharing of information about users, systems, networks, services, and applications throughout the network.As examples, directory services may provide any organized set of records, often with a hierarchical structure, such as a corporate [email](https://en.wikipedia.org/wiki/Email) directory. Similarly, a [telephone directory](https://en.wikipedia.org/wiki/Telephone_directory) is a list of subscribers with an address and a phone number.
<https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol>

## ModBus

- Serial Communication Protocol
Modbus has become a [*de facto*](https://en.wikipedia.org/wiki/De_facto)[standard](https://en.wikipedia.org/wiki/Standardization) communication protocol and is now a commonly available means of connecting industrial [electronic](https://en.wikipedia.org/wiki/Electronics) devices.The main reasons for the use of Modbus in the industrial environment are:
- developed with industrial applications in mind,
- openly published and royalty-free,
- easy to deploy and maintain,
- moves raw bits or words without placing many restrictions on vendors.
Modbus enables communication among many devices connected to the same network, for example, a system that measures temperature and humidity and communicates the results to a [computer](https://en.wikipedia.org/wiki/Computer). Modbus is often used to connect a supervisory computer with a [remote terminal unit](https://en.wikipedia.org/wiki/Remote_terminal_unit)(RTU) in supervisory control and data acquisition ([SCADA](https://en.wikipedia.org/wiki/SCADA)) systems. Many of the data types are named from its use in driving relays: a single-bit physical output is called a*coil*, and a single-bit physical input is called a*discrete input*or a*contact*.

## See also

BACnet Protocol (Building Automation and Control networks)

## Libraries

<https://github.com/ljean/modbus-tk>

## Zenoh

## Zero Overhead Pub/sub, Store/Query and Compute

zenoh unifies data in motion, data in-use, data at rest and computations. It carefully blends traditional pub/sub with geo-distributed storages, queries and computations, while retaining a level of time and space efficiency that is well beyond any of the mainstream stacks.
<http://zenoh.io>

## OPC Unified Architecture(OPC UA)

OPC Unified Architecture(OPC UA) is a [machine to machine](https://en.wikipedia.org/wiki/Machine_to_machine)[communication protocol](https://en.wikipedia.org/wiki/Communication_protocol) for [industrial automation](https://en.wikipedia.org/wiki/Industrial_automation) developed by the [OPC Foundation](https://en.wikipedia.org/wiki/OPC_Foundation). Distinguishing characteristics are:

- Focus on communicating with industrial equipment and systems for data collection and control
- [Open](https://en.wikipedia.org/wiki/Open_standard)- freely available and implementable under GPL 2.0 license
- [Cross-platform](https://en.wikipedia.org/wiki/Cross-platform)- not tied to one operating system or programming language
- [Service-oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture)(SOA)
- Inherent complexity - the specification consists of 1250 pages in 14 documents
- Offers [security](https://en.wikipedia.org/wiki/Information_security) functionality for authentication, authorization, integrity and confidentiality
- Integral [information model](https://en.wikipedia.org/wiki/Information_model), which is the foundation of the infrastructure necessary for information integration where vendors and organizations can model their complex data into an OPC UA namespace to take advantage of the rich service-oriented architecture of OPC UA. There are over 35 collaborations with the OPC Foundation currently. Key industries include [pharmaceutical](https://en.wikipedia.org/wiki/Pharmaceutical_industry), [oil and gas](https://en.wikipedia.org/wiki/Oil_and_gas_industry), [building automation](https://en.wikipedia.org/wiki/Building_automation), [industrial robotics](https://en.wikipedia.org/wiki/Industrial_robotics), security, manufacturing and [process control](https://en.wikipedia.org/wiki/Process_control).

## Specification

The OPC UA specification is a multi-part specification and consists of the following parts:

1. Concepts

2. Security Model

3. Address Space Model

4. Services

5. Information Model

6. Mappings

7. Profiles

8. Data Access

9. Alarms and Conditions

10. Programs

11. Historical Access

12. Discovery and Global Services

13. Aggregates

14. PubSub
<https://en.wikipedia.org/wiki/OPC_Unified_Architecture>

<https://opcfoundation.org/about/opc-technologies/opc-ua>

## Dedicated short-range communications (DSRC)

Dedicated short-range communications(DSRC) are one-way or two-way short-range to medium-range [wireless](https://en.wikipedia.org/wiki/Wireless) communication channels specifically designed for automotive use  and a corresponding set of protocols and standards.
<https://en.wikipedia.org/wiki/Dedicated_short-range_communications>
<https://web.dev/webtransport>
