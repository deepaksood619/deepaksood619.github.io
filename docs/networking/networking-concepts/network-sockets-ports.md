# Network Sockets/Ports

## Network Sockets

A **network socket** is an internal endpoint for sending or receiving data within a [node](https://en.wikipedia.org/wiki/Node_(networking)) on a [computer network](https://en.wikipedia.org/wiki/Computer_network). Concretely, it is a representation of this endpoint in networking software ([protocol stack](https://en.wikipedia.org/wiki/Protocol_stack)), such as an entry in a table (listing communication protocol, destination, status, etc.), and is a form of [system resource](https://en.wikipedia.org/wiki/System_resource).
A [process](https://en.wikipedia.org/wiki/Process_(computing)) can refer to a socket using asocket descriptor, a type of [handle](https://en.wikipedia.org/wiki/Handle_(computing)). A process first requests that the protocol stack create a socket, and the stack returns a descriptor to the process so it can identify the socket. The process then passes the descriptor back to the protocol stack when it wishes to send or receive data using this socket.
Unlike [ports](https://en.wikipedia.org/wiki/Port_(computer_networking)), sockets are specific to one node; they are local resources and cannot be referred to directly by other nodes. Further, sockets are not necessarily associated with a persistent connection ([channel](https://en.wikipedia.org/wiki/Channel_(communications))) for communication between two nodes, nor is there necessarily some single other endpoint. For example, a [datagram socket](https://en.wikipedia.org/wiki/Datagram_socket) can be used for [connectionless communication](https://en.wikipedia.org/wiki/Connectionless_communication), and a [multicast](https://en.wikipedia.org/wiki/Multicast) socket can be used to send to multiple nodes. However, in practice for [internet](https://en.wikipedia.org/wiki/Internet) communication, sockets are generally used to connect to a specific endpoint and often with a persistent connection.

## Use

A [process](https://en.wikipedia.org/wiki/Process_(computing)) can refer to a socket using asocket descriptor, a type of [handle](https://en.wikipedia.org/wiki/Handle_(computing)). A process first requests that the protocol stack create a socket, and the stack returns a descriptor to the process so it can identify the socket. The process then passes the descriptor back to the protocol stack when it wishes to send or receive data using this socket.
Unlike [ports](https://en.wikipedia.org/wiki/Port_(computer_networking)), sockets are specific to one node; they are local resources and cannot be referred to directly by other nodes. Further, sockets are not necessarily associated with a persistent connection ([channel](https://en.wikipedia.org/wiki/Channel_(communications))) for communication between two nodes, nor is there necessarily some single other endpoint. For example, a [datagram socket](https://en.wikipedia.org/wiki/Datagram_socket) can be used for [connectionless communication](https://en.wikipedia.org/wiki/Connectionless_communication), and a [multicast](https://en.wikipedia.org/wiki/Multicast) socket can be used to send to multiple nodes. However, in practice for [internet](https://en.wikipedia.org/wiki/Internet) communication, sockets are generally used to connect to a specific endpoint and often with a persistent connection.

## Socket addresses

In practice, socketusually refers to a socket in an [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)(IP) network (where a socket may be called anInternet socket), in particular for the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)(TCP), which is a protocol for one-to-one connections. In this context, sockets are assumed to be associated with a specificsocket address, namely the [IP address](https://en.wikipedia.org/wiki/IP_address) and a [port number](https://en.wikipedia.org/wiki/Port_number) for the local node, and there is a corresponding socket address at the foreign node (other node), which itself has an associated socket, used by the foreign process. Associating a socket with a socket address is calledbinding.
Note that while a local process can communicate with a foreign process by sending or receiving data to or from a foreignsocket address, it does not have access to the foreignsocketitself, nor can it use the foreignsocket descriptor, as these are both internal to the foreign node. For example, in a connection between 10.20.30.40:4444 and 50.60.70.80:8888 (local IP address:local port, foreign IP address:foreign port), there will also be an associated socket at each end, corresponding to the internal representation of the connection by the protocol stack on that node. These are referred to locally by numerical socket descriptors, say 317 at one side and 922 at the other. A process on node 10.20.30.40 can request to communicate with node 50.60.70.80 on port 8888 (request that the protocol stack create a socket to communicate with that destination), and once it has created a socket and received a socket descriptor (317), it can communicate via this socket by using the descriptor (317). The protocol stack will then forward data to and from node 50.60.70.80 on port 8888. However, a process on node 10.20.30.40 cannot request to communicate based on the foreign socket descriptor, (e.g. "socket 922" or "socket 922 on node 50.60.70.80") as these are internal to the foreign node and are not usable by the protocol stack on node 10.20.30.40.

https://en.wikipedia.org/wiki/Network_socket

## Ports

In [computer networking](https://en.wikipedia.org/wiki/Computer_networking), aportis a communication endpoint. Physical as well as wireless connections are terminated at ports of hardware devices. At the software level, within an [operating system](https://en.wikipedia.org/wiki/Operating_system), a port is a logical construct that identifies a specific [process](https://en.wikipedia.org/wiki/Process_(computing)) or a type of [network service](https://en.wikipedia.org/wiki/Network_service). Ports are identified for each protocol and address combination by 16-bit unsigned numbers, commonly known as theport number. The most common protocols that use port numbers are the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)(TCP) and the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)(UDP).
A port number is always associated with an [IP address](https://en.wikipedia.org/wiki/IP_address) of a host and the [protocol](https://en.wikipedia.org/wiki/Network_protocol) type of the communication. It completes the destination or origination [network address](https://en.wikipedia.org/wiki/Network_address) of a message. Specific port numbers are commonly reserved to identify specific services, so that an arriving packet can be easily forwarded to a running application. For this purpose, the lowest numbered 1024 port numbers identify the historically most commonly used services, and are called the [well-known port numbers](https://en.wikipedia.org/wiki/Well-known_port_numbers). Higher-numbered ports are available for general use by applications and are known as [ephemeral ports](https://en.wikipedia.org/wiki/Ephemeral_port).
When used as a service enumeration, ports provide a [multiplexing](https://en.wikipedia.org/wiki/Multiplexing) service for multiple services or multiple communication sessions at one network address. In the [client--server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) of application architecture multiple simultaneous communication sessions may be initiated for the same service.

## Port number

A port number is a 16-bit unsigned integer, thus ranging from 0 to 65535. For [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol), port number 0 is reserved and cannot be used, while for [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol), the source port is optional and a value of zero means no port. A [process](https://en.wikipedia.org/wiki/Process_(computing)) associates its input or output channels via an [Internet socket](https://en.wikipedia.org/wiki/Internet_socket), which is a type of [file descriptor](https://en.wikipedia.org/wiki/File_descriptor), with a [transport protocol](https://en.wikipedia.org/wiki/Transport_protocol), an [IP address](https://en.wikipedia.org/wiki/IP_address), and a port number. This is known asbinding, and enables the process to send and receive data via the network. The operating system's networking software has the task of transmitting outgoing data from all application ports onto the network, and forwarding arriving [network packets](https://en.wikipedia.org/wiki/Network_packet) to processes by matching the packet's IP address and port number. For TCP, only one process may bind to a specific IP address and port combination. Common application failures, sometimes calledport conflicts, occur when multiple programs attempt to use the same port number on the same IP address with the same protocol.
Applications implementing common services often use specifically reserved [well-known port numbers](https://en.wikipedia.org/wiki/Well-known_port_numbers) for receiving service requests from clients. This process is known aslistening, and involves the receipt of a request on the well-known port and establishing a one-to-one server-client dialog, using the same local port number. Other clients may continue to connect to the listening port; this works because a TCP connection is identified by a tuple consisting of the local address, the local port, the remote address, and the remote port.The well-known ports are defined by convention overseen by the [Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority)(IANA). The core network services, such as the [World-Wide Web](https://en.wikipedia.org/wiki/World-Wide_Web), typically use well-known port numbers. In many operating systems special privileges are required for applications to bind to these ports, because these are often deemed critical to the operation of IP networks. Conversely, the client end of a connection typically uses a high port number allocated for short term use, therefore called an [ephemeral port](https://en.wikipedia.org/wiki/Ephemeral_port).

## Common port numbers

The [Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority)(IANA) is responsible for the global coordination of the DNS Root, IP addressing, and other Internet protocol resources. This includes the registration of commonly used port numbers for well-known Internet services.

The port numbers are divided into three ranges: thewell-known ports, theregistered ports, and thedynamicorprivate ports.

### Well Known Ports/System ports (0-1023)

These are allocated toserver servicesby the Internet Assigned Numbers Authority(IANA).

| Port number | Assignment |
|-------------|------------|
| 20 | [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol) (FTP) Data Transfer |
| 21 | [File Transfer Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol) (FTP) Command Control |
| 22 | [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) (SSH) Secure Login |
| 23 | [Telnet](https://en.wikipedia.org/wiki/Telnet) remote login service, unencrypted text messages |
| 25 | [Simple Mail Transfer Protocol](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) (SMTP) E-mail routing |
| 53 | **[Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) (DNS) service**, Mainly uses UDP but can use TCP for Zone Transfers |
| 80 | [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (HTTP) used in the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web) |
| 110 | [Post Office Protocol](https://en.wikipedia.org/wiki/Post_Office_Protocol) (POP3) |
| 119 | [Network News Transfer Protocol](https://en.wikipedia.org/wiki/Network_News_Transfer_Protocol) (NNTP) |
| 123 | [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) |
| 143 | [Internet Message Access Protocol](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) (IMAP) Management of digital mail |
| 161 | [Simple Network Management Protocol](https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol) (SNMP) |
| 194 | [Internet Relay Chat](https://en.wikipedia.org/wiki/Internet_Relay_Chat) (IRC) |
| 443 | [HTTP Secure](https://en.wikipedia.org/wiki/HTTP_Secure) (HTTPS) HTTP over TLS/SSL |
| 3389 | RDP, Remote Desktop Protocol |

### Registered Ports (1024-49151)

These can be registered for services with the IANA and should be treated as semi-reserved. User written programs should not use these ports.

### Ephermeral Ports (49152-65535)

These are used byclient programsand you are free to use these in client programs. When a Web browser connects to a web server the browser will allocate itself a port in this range. Also known as ephemeral ports.

https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

## Network behavior

[Transport layer](https://en.wikipedia.org/wiki/Transport_layer) protocols, such as the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)(TCP) and the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)(UDP), transfer data using [protocol data units](https://en.wikipedia.org/wiki/Protocol_data_unit)(PDUs). For TCP, the PDU is a [segment](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_segment_structure), and a [datagram](https://en.wikipedia.org/wiki/Datagram) for UDP. Both protocols use a [header](https://en.wikipedia.org/wiki/Header_(computing)) field for recording the source and destination port number. The port numbers are encoded in the transport protocol [packet header](https://en.wikipedia.org/wiki/Packet_header), and they can be readily interpreted not only by the sending and receiving computers, but also by other components of the networking infrastructure. In particular, [firewalls](https://en.wikipedia.org/wiki/Firewall_(networking)) are commonly configured to differentiate between packets based on their source or destination port numbers.[Port forwarding](https://en.wikipedia.org/wiki/Port_forwarding) is an example application of this.

## Port scanning

The practice of attempting to connect to a range of ports in sequence on a single computer is commonly known as [port scanning](https://en.wikipedia.org/wiki/Port_scanning). This is usually associated either with malicious [cracking](https://en.wikipedia.org/wiki/Security_cracking) attempts or with network administrators looking for possible vulnerabilities to help prevent such attacks. Port connection attempts are frequently monitored and logged by computers. The technique of [port knocking](https://en.wikipedia.org/wiki/Port_knocking) uses a series of port connections (knocks) from a client computer to enable a server connection.

## Port Knocking

[Port knocking](https://en.wikipedia.org/wiki/Port_knocking) is something nobody actually uses in the real world, but is a lot of fun to set up. In short, port knocking is a sequence of hits to various closed network ports, and if you get that sequence right, the "real" port opens up for use to your IP. It's neat, but impractical in an actual enterprise.

https://en.wikipedia.org/wiki/Port_(computer_networking)
