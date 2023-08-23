# Book - Computer Networks

Andrew S Tanenbaum and DAVID J. WETHERALL

## 1 INTRODUCTION

1.1 USES OF COMPUTER NETWORKS
1.1.1 Business Applications
1.1.2 Home Applications
1.1.3 Mobile Users
1.1.4 Social Issues
1.2 NETWORK HARDWARE
1.2.1 Personal Area Networks
1.2.2 Local Area Networks
1.2.3 Metropolitan Area Networks
1.2.4 Wide Area Networks
1.2.5 Internetworks
1.3 NETWORK SOFTWARE
1.3.1 Protocol Hierarchies
1.3.2 Design Issues for the Layers
1.3.3 Connection-Oriented Versus Connectionless Service
1.3.4 Service Primitives
1.3.5 The Relationship of Services to Protocols
1.4 REFERENCE MODELS
1.4.1 The OSI Reference Model
1.4.2 The TCP/IP Reference Model
1.4.3 The Model Used in This Book
1.4.4 A Comparison of the OSI and TCP/IP Reference Models
1.4.5 A Critique of the OSI Model and Protocols
1.4.6 A Critique of the TCP/IP Reference Model
1.5 EXAMPLE NETWORKS
1.5.1 The Internet
1.5.2 Third-Generation Mobile Phone Networks
1.5.3 Wireless LANs: 802.11
1.5.4 RFID and Sensor Networks
1.6 NETWORK STANDARDIZATION
1.6.1 Who's Who in the Telecommunications World
1.6.2 Who's Who in the International Standards World
1.6.3 Who's Who in the Internet Standards World
1.7 METRIC UNITS
1.8 OUTLINE OF THE REST OF THE BOOK
1.9 SUMMARY

## 2 THE PHYSICAL LAYER

2.1 THE THEORETICAL BASIS FOR DATA COMMUNICATION
2.1.1 Fourier Analysis
2.1.2 Bandwidth-Limited Signals
2.1.3 The Maximum Data Rate of a Channel
2.2 GUIDED TRANSMISSION MEDIA
2.2.1 Magnetic Media
2.2.2 Twisted Pairs
2.2.3 Coaxial Cable
2.2.4 Power Lines
2.2.5 Fiber Optics
2.3 WIRELESS TRANSMISSION
2.3.1 The Electromagnetic Spectrum
2.3.2 Radio Transmission
2.3.3 Microwave Transmission
2.3.4 Infrared Transmission
2.3.5 Light Transmission
2.4 COMMUNICATION SATELLITES
2.4.1 Geostationary Satellites
2.4.2 Medium-Earth Orbit Satellites
2.4.3 Low-Earth Orbit Satellites
2.4.4 Satellites Versus Fiber
2.5 DIGITAL MODULATION AND MULTIPLEXING
2.5.1 Baseband Transmission
2.5.2 Passband Transmission
2.5.3 Frequency Division Multiplexing
2.5.4 Time Division Multiplexing
2.5.5 Code Division Multiplexing
2.6 THE PUBLIC SWITCHED TELEPHONE NETWORK
2.6.1 Structure of the Telephone System
2.6.2 The Politics of Telephones
2.6.3 The Local Loop: Modems, ADSL, and Fiber
2.6.4 Trunks and Multiplexing
2.6.5 Switching
2.7 THE MOBILE TELEPHONE SYSTEM
2.7.1 First-Generation (coco 1G) Mobile Phones: Analog Voice
2.7.2 Second-Generation (2G) Mobile Phones: Digital Voice
2.7.3 Third-Generation (3G) Mobile Phones: Digital Voice and Data
2.8 CABLE TELEVISION
2.8.1 Community Antenna Television
2.8.2 Internet over Cable
2.8.3 Spectrum Allocation
2.8.4 Cable Modems
2.8.5 ADSL Versus Cable
2.9 SUMMARY

## 3 THE DATA LINK LAYER

3.1 DATA LINK LAYER DESIGN ISSUES
3.1.1 Services Provided to the Network Layer
3.1.2 Framing
3.1.3 Error Control
3.1.4 Flow Control
3.2 ERROR DETECTION AND CORRECTION
3.2.1 Error-Correcting Codes
3.2.2 Error-Detecting Codes
3.3 ELEMENTARY DATA LINK PROTOCOLS
3.3.1 A Utopian Simplex Protocol
3.3.2 A Simplex Stop-and-Wait Protocol for an Error-Free Channel
3.3.3 A Simplex Stop-and-Wait Protocol for a Noisy Channel
3.4 SLIDING WINDOW PROTOCOLS
3.4.1 A One-Bit Sliding Window Protocol
3.4.2 A Protocol Using Go-Back-N
3.4.3 A Protocol Using Selective Repeat
3.5 EXAMPLE DATA LINK PROTOCOLS
3.5.1 Packet over SONET
3.5.2 ADSL (Asymmetric Digital Subscriber Loop)
3.6 SUMMARY

## 4 THE MEDIUM ACCESS CONTROL SUBLAYER

4.1 THE CHANNEL ALLOCATION PROBLEM
4.1.1 Static Channel Allocation
4.1.2 Assumptions for Dynamic Channel Allocation
4.2 MULTIPLE ACCESS PROTOCOLS
4.2.1 ALOHA
4.2.2 Carrier Sense Multiple Access Protocols
4.2.3 Collision-Free Protocols
4.2.4 Limited-Contention Protocols
4.2.5 Wireless LAN Protocols
4.3 ETHERNET
4.3.1 Classic Ethernet Physical Layer
4.3.2 Classic Ethernet MAC Sublayer Protocol
4.3.3 Ethernet Performance
4.3.4 Switched Ethernet
4.3.5 Fast Ethernet
4.3.6 Gigabit Ethernet
4.3.710-Gigabit Ethe
4.3.8 Retrospective on Ethernet
4.4 WIRELESS LANS
4.4.1 The 802.11 Architecture and Protocol S
4.4.2 The 802.11 Physical L
4.4.3 The 802.11 MAC Sublayer Prot
4.4.4 The 802.11 Frame Struc
4.4.5 Services
4.5 BROADBAND WIRELESS
4.5.1 Comparison of 802.16 with 802.11 an
4.5.2 The 802.16 Architecture and Protocol S
4.5.3 The 802.16 Physical L
4.5.4 The 802.16 MAC Sublayer Prot
4.5.5 The 802.16 Frame Struc
4.6 BLUETOOTH - [How does Bluetooth Work? - YouTube](https://www.youtube.com/watch?v=1I1vxu5qIUM)
4.6.1 Bluetooth Architecture
4.6.2 Bluetooth Applications
4.6.3 The Bluetooth Protocol Stack
4.6.4 The Bluetooth Radio Layer
4.6.5 The Bluetooth Link Layers
4.6.6 The Bluetooth Frame Structure
4.7 RFID
4.7.1 EPC Gen 2 Architecture
4.7.2 EPC Gen 2 Physical Layer
4.7.3 EPC Gen 2 Tag Identiﬁcation Layer
4.7.4 Tag Identiﬁcation Message Formats
4.8 DATA LINK LAYER SWITCHING
4.8.1 Uses of Bridges
4.8.2 Learning Bridges
4.8.3 Spanning Tree Bridges
4.8.4 Repeaters, Hubs, Bridges, Switches, Routers, and Gateways
4.8.5 Virtual LANs
4.9 SUMMARY

## 5 THE NETWORK LAYER

5.1 NETWORK LAYER DESIGN ISSUES
5.1.1 Store-and-Forward Packet Switching
5.1.2 Services Provided to the Transport Layer
5.1.3 Implementation of Connectionless Service
5.1.4 Implementation of Connection-Oriented Service
5.1.5 Comparison of Virtual-Circuit and Datagram Networks
5.2 ROUTING ALGORITHMS
5.2.1 The Optimality Principle
5.2.2 Shortest Path Algorithm
5.2.3 Flooding
5.2.4 Distance Vector Routing
5.2.5 Link State Routing
5.2.6 Hierarchical Routing
5.2.7 Broadcast Routing
5.2.8 Multicast Routing
5.2.9 Anycast Routing
5.2.10 Routing for Mobile H
5.2.11 Routing in Ad Hoc Netw
5.3 CONGESTION CONTROL ALGORITHMS
5.3.1 Approaches to Congestion Control
5.3.2 Trafﬁc-Aware Routing
5.3.3 Admission Control
5.3.4 Trafﬁc Throttling
5.3.5 Load Shedding
5.4 QUALITY OF SERVICE
5.4.1 Application Requirements
5.4.2 Trafﬁc Shaping
5.4.3 Packet Scheduling
5.4.4 Admission Control
5.4.5 Integrated Services
5.4.6 Differentiated Services
5.5 INTERNETWORKING
5.5.1 How Networks Differ
5.5.2 How Networks Can Be Connected
5.5.3 Tunneling
5.5.4 Internetwork Routing
5.5.5 Packet Fragmentation
5.6 THE NETWORK LAYER IN THE INTERNET
5.6.1 The IP Version 4 Protocol
5.6.2 IP Addresses
5.6.3 IP Version 6
5.6.4 Internet Control Protocols
5.6.5 Label Switching and MPLS
5.6.6 OSPF - An Interior Gateway Routing Protocol
5.6.7 BGP - The Exterior Gateway Routing Protocol
5.6.8 Internet Multicasting
5.6.9 Mobile IP
5.7 SUMMARY

## 6 THE TRANSPORT LAYER

6.1 THE TRANSPORT SERVICE
6.1.1 Services Provided to the Upper Layers
6.1.2 Transport Service Primitives
6.1.3 Berkeley Sockets
6.1.4 An Example of Socket Programming: An Internet File Server
6.2 ELEMENTS OF TRANSPORT PROTOCOLS
6.2.1 Addressing
6.2.2 Connection Establishment
6.2.3 Connection Release
6.2.4 Error Control and Flow Control
6.2.5 Multiplexing
6.2.6 Crash Recovery
6.3 CONGESTION CONTROL
6.3.1 Desirable Bandwidth Allocation
6.3.2 Regulating the Sending Rate
6.3.3 Wireless Issues
6.4 THE INTERNET TRANSPORT PROTOCOLS: UDP
6.4.1 Introduction to UDP
6.4.2 Remote Procedure Call
6.4.3 Real-Time Transport Protocols
6.5 THE INTERNET TRANSPORT PROTOCOLS: TCP
6.5.1 Introduction to TCP
6.5.2 The TCP Service Model
6.5.3 The TCP Protocol
6.5.4 The TCP Segment Header
6.5.5 TCP Connection Establishment
6.5.6 TCP Connection Release
6.5.7 TCP Connection Management Modeling
6.5.8 TCP Sliding Window
6.5.9 TCP Timer Management
6.5.10 TCP Congestion Con
6.5.11 The Future of
6.6 PERFORMANCE ISSUES
6.6.1 Performance Problems in Computer Networks
6.6.2 Network Performance Measurement
6.6.3 Host Design for Fast Networks
6.6.4 Fast Segment Processing
6.6.5 Header Compression
6.6.6 Protocols for Long Fat Networks
6.7 DELAY-TOLERANT NETWORKING
6.7.1 DTN Architecture
6.7.2 The Bundle Protocol
6.8 SUMMARY

## 7 THE APPLICATION LAYER

7.1 DNS - THE DOMAIN NAME SYSTEM
7.1.1 The DNS Name Space
7.1.2 Domain Resource Records
7.1.3 Name Servers
7.2 ELECTRONIC MAIL
7.2.1 Architecture and Services
7.2.2 The User Agent
7.2.3 Message Formats
7.2.4 Message Transfer
7.2.5 Final Delivery
7.3 THE WORLD WIDE WEB
7.3.1 Architectural Overview
7.3.2 Static Web Pages
7.3.3 Dynamic Web Pages and Web Applications
7.3.4 HTTP - The HyperText Transfer Protocol
7.3.5 The Mobile Web
7.3.6 Web Search
7.4 STREAMING AUDIO AND VIDEO
7.4.1 Digital Audio
7.4.2 Digital Video
7.4.3 Streaming Stored Media
7.4.4 Streaming Live Media
7.4.5 Real-Time Conferencing
7.5 CONTENT DELIVERY
7.5.1 Content and Internet Trafﬁc
7.5.2 Server Farms and Web Proxies
7.5.3 Content Delivery Networks
7.5.4 Peer-to-Peer Networks
7.6 SUMMARY

## 8 NETWORK SECURITY

8.1 CRYPTOGRAPHY
8.1.1 Introduction to Cryptography
8.1.2 Substitution Ciphers
8.1.3 Transposition Ciphers
8.1.4 One-Time Pads
8.1.5 Two Fundamental Cryptographic Principles
8.2 SYMMETRIC-KEY ALGORITHMS
8.2.1 DES - The Data Encryption Standard
8.2.2 AES - The Advanced Encryption Standard
8.2.3 Cipher Modes
8.2.4 Other Ciphers
8.2.5 Cryptanalysis
8.3 PUBLIC-KEY ALGORITHMS
8.3.1 RSA
8.3.2 Other Public-Key Algorithms
8.4 DIGITAL SIGNATURES
8.4.1 Symmetric-Key Signatures
8.4.2 Public-Key Signatures
8.4.3 Message Digests
8.4.4 The Birthday Attack
8.5 MANAGEMENT OF PUBLIC KEYS
8.5.1 Certiﬁcates, 807 8.5.2 X
8.5.3 Public Key Infrastructures
8.6 COMMUNICATION SECURITY
8.6.1 IPsec
8.6.2 Firewalls
8.6.3 Virtual Private Networks
8.6.4 Wireless Security
8.7 AUTHENTICATION PROTOCOLS
8.7.1 Authentication Based on a Shared Secret Key
8.7.2 Establishing a Shared Key: The Difﬁe-Hellman Key Exchange
8.7.3 Authentication Using a Key Distribution Center
8.7.4 Authentication Using Kerberos
8.7.5 Authentication Using Public-Key Cryptography
8.8 EMAIL SECURITY
8.8.1 PGP - Pretty Good Privacy
8.8.2 S/MIME
8.9 WEB SECURITY
8.9.1 Threats
8.9.2 Secure Naming
8.9.3 SSL - The Secure Sockets Layer
8.9.4 Mobile Code Security
8.10 SOCIAL IS
8.10.1 Pri
8.10.2 Freedom of Sp
8.10.3 Copyr
8.11 SUM
