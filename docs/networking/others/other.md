# Others

## OpenConnect

OpenConnect is an [open-source software](https://en.wikipedia.org/wiki/Open-source_software) application for connecting to [virtual private networks](https://en.wikipedia.org/wiki/Virtual_private_network)(VPN), which implement secure [point-to-point](https://en.wikipedia.org/wiki/Point-to-point_(telecommunications)) connections

<https://en.wikipedia.org/wiki/OpenConnect>

## OpenSSH

OpenSSH(also known as OpenBSD Secure Shell) is a suite of [secure](https://en.wikipedia.org/wiki/Computer_security)[networking](https://en.wikipedia.org/wiki/Computer_network) utilities based on the [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell)(SSH) protocol, which provides a [secure channel](https://en.wikipedia.org/wiki/Secure_channel) over an unsecured network in a [client--server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) architecture

OpenSSH started as a [fork](https://en.wikipedia.org/wiki/Fork_(software_development)) of the [free](https://en.wikipedia.org/wiki/Free_software) SSH program developed by [Tatu Ylönen](https://en.wikipedia.org/wiki/Tatu_Yl%C3%B6nen); later versions of Ylönen's SSH were [proprietary software](https://en.wikipedia.org/wiki/Proprietary_software) offered by [SSH Communications Security](https://en.wikipedia.org/wiki/SSH_Communications_Security).OpenSSH was first released in 1999, and is currently developed as part of the [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD)[operating system](https://en.wikipedia.org/wiki/Operating_system).

OpenSSH is not a single computer program, but rather a suite of programs that serve as alternatives to unencrypted protocols like [Telnet](https://en.wikipedia.org/wiki/Telnet) and [FTP](https://en.wikipedia.org/wiki/FTP). OpenSSH is integrated into several operating systems, while the [portable](https://en.wikipedia.org/wiki/Porting) version is available as a package in other systems.

<https://en.wikipedia.org/wiki/OpenSSH>

## GStreamer

GStreamer is a [pipeline](https://en.wikipedia.org/wiki/Pipeline_(computing))-based [multimedia framework](https://en.wikipedia.org/wiki/Multimedia_framework) that links together a wide variety of media processing systems to complete complex workflows. For instance, GStreamer can be used to build a system that reads files in one format, processes them, and exports them in another. The formats and processes can be changed in a plug and play fashion

GStreamer supports a wide variety of media-handling components, including simple [audio](https://en.wikipedia.org/wiki/Audio_frequency) playback, audio and video playback, [recording](https://en.wikipedia.org/wiki/Sound_recording_and_reproduction), [streaming](https://en.wikipedia.org/wiki/Streaming_media) and editing. The pipeline design serves as a base to create many types of [multimedia](https://en.wikipedia.org/wiki/Multimedia) applications such as [video editors](https://en.wikipedia.org/wiki/Video_editing), [transcoders](https://en.wikipedia.org/wiki/Transcoding), streaming media broadcasters and [media players](https://en.wikipedia.org/wiki/Media_player_(application_software)).

<https://en.wikipedia.org/wiki/GStreamer>

<https://gstreamer.freedesktop.org>

**Others**

NNStreamer - Neural Network (NN) Streamer, Stream Processing Paradigm for Neural Network Apps/Devices.

<https://github.com/nnsuite/nnstreamer>

## Zeroconf

Zero-configuration networking (zeroconf) is a set of technologies that automatically creates a usable [computer network](https://en.wikipedia.org/wiki/Computer_network) based on the [Internet Protocol Suite](https://en.wikipedia.org/wiki/Internet_Protocol_Suite)(TCP/IP) when computers or network peripherals are interconnected. It does not require manual operator intervention or special configuration servers. Without zeroconf, a network administrator must set up [network services](https://en.wikipedia.org/wiki/Network_service), such as [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)(DHCP) and [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)(DNS), or configure each computer's network settings manually

Zeroconf is built on three core technologies: automatic assignment of numeric [network addresses](https://en.wikipedia.org/wiki/Network_address) for networked devices, automatic distribution and resolution of computer [hostnames](https://en.wikipedia.org/wiki/Hostname), and automatic [location of network services](https://en.wikipedia.org/wiki/Service_discovery), such as printing devices.

<https://en.wikipedia.org/wiki/Zero-configuration_networking>

## pmacct

pmacct is a small set of multi-purpose passive network monitoring tools [NetFlow IPFIX sFlow libpcap BGP BMP RPKI IGP Streaming Telemetry]

[pmacct](https://github.com/pmacct/pmacct) is a set of network monitoring tools that can collect network traffic via libpcap and export it to a variety of places. Can be used to do network flow analysis.

pmacct is a small set of multi-purpose passive network monitoring tools. It can account, classify, aggregate, replicate and export forwarding-plane data, ie. IPv4 and IPv6 traffic; collect and correlate control-plane data via BGP and BMP; collect and correlate RPKI data; collect infrastructure data via Streaming Telemetry. Each component works both as a standalone daemon and as a thread of execution for correlation purposes (ie. enrich NetFlow with BGP data). pmacct main features are:

- Suitable to ISP, IXP, CDN, IP carrier, Cloud, DC and hot-spots enviroments and SDN solutions
- Runs on Linux, BSDs, Solaris and embedded systems
- Support for both IPv4 and IPv6
- Collects data through libpcap, Netlink/NFLOG, NetFlow v1/v5/v7/v8/v9, sFlow v2/v4/v5 and IPFIX
- Collects Streaming Telemetry data. Read more [here](https://github.com/pmacct/pmacct/blob/master/telemetry/README.telemetry).
- Supports Cisco NEL for CGNAT scenarios and Cisco NSEL
- Saves data to a number of backends including:
  - Relational databases: MySQL, PostgreSQL and SQLite
  - noSQL databases: MongoDB and BerkeleyDB
  - AMQP message exchanges: RabbitMQ
  - Kafka message brokers
  - memory tables
  - flat files
- Exports data to remote collectors through IPFIX, NetFlow v5/v9 and sFlow v5
- Replicates incoming IPFIX, NetFlow and sFlow packets to remote collectors
- Flexible architecture to tag, filter, redirect, aggregate and split captured data
- Comes with:
  - a BGP daemon/thread for efficient visibility into the inter-domain routing plane. Read more [here](http://www.pmacct.net/lucente_pmacct_uknof14.pdf).
    - Supports BGP/MPLS VPNs rfc4364, Label Unicast rfc3107
    - Supports BGP ADD-PATHs (draft-ietf-idr-add-paths) for visibility of BGP multi-path routes
    - Can log live BGP messaging and/or dump BGP tables per peer at regular time interval
  - a BMP daemon/thread to gain insight in BGP data, events and statistics
    - Supports draft-ietf-grow-bmp-loc-rib and draft-ietf-grow-bmp-adj-rib-out
  - an IS-IS/IGP thread for visibility of internal routes
  - a RPKI thread to associate Route Origin Validation (ROV) state to BGP data (from1.7.3)
- Packet classification via nDPI
- Inspection of tunnelled traffic (ie. GTP)
- GeoIP lookups leveraging Maxmind library
- Pluggable architecture for easy integration of new capturing environments and data backends
- Careful SQL support: data pre-processing, triggers, dynamic table naming
- It's free, open-source, developed and supported with passion and open mind for more than 10 years

<https://brooks.sh/2019/11/17/network-flow-analysis-with-prometheus>

<https://github.com/pmacct/pmacct>

## Ribbon

Ribbon is a Inter Process Communication (remote procedure calls) library with built in software load balancers. The primary usage model involves REST calls with various serialization scheme support.
Ribbon is a client side IPC library that is battle-tested in cloud. It provides the following features

- Load balancing
- Fault tolerance
- Multiple protocol (HTTP, TCP, UDP) support in an asynchronous and reactive model
- Caching and batching

<https://github.com/Netflix/ribbon>

## mininet

Emulator for rapid prototyping of Software Defined Networks (SDN)
<https://github.com/mininet/mininet>

## RSS

**RSS** (**[RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework "Resource Description Framework") Site Summary** or **Really Simple Syndication**) is a [web feed](https://en.wikipedia.org/wiki/Web_feed) that allows users and applications to access updates to websites in a [standardized](https://en.wikipedia.org/wiki/Standardization "Standardization"), computer-readable format. Subscribing to RSS feeds can allow a user to keep track of many different websites in a single [news aggregator](https://en.wikipedia.org/wiki/News_aggregator "News aggregator"), which constantly monitor sites for new content, removing the need for the user to manually check them. News aggregators (or "RSS readers") can be built into a [browser](https://en.wikipedia.org/wiki/Web_application "Web application"), installed on a [desktop computer](https://en.wikipedia.org/wiki/Application_software "Application software"), or installed on a [mobile device](https://en.wikipedia.org/wiki/Mobile_app "Mobile app").

[RSS - Wikipedia](https://en.wikipedia.org/wiki/RSS)
