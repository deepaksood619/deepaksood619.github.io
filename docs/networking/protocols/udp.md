# UDP

In [computer networking](https://en.wikipedia.org/wiki/Computer_network), theUser Datagram Protocol(UDP) is one of the core members of the [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite). The protocol was designed by [David P. Reed](https://en.wikipedia.org/wiki/David_P._Reed) in 1980 and formally defined in [RFC](https://en.wikipedia.org/wiki/Request_for_Comments_(identifier)) [768](https://tools.ietf.org/html/rfc768). With UDP, computer applications can send messages, in this case referred to as [datagrams](https://en.wikipedia.org/wiki/Datagram), to other hosts on an [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)(IP) network. Prior communications are not required in order to set up [communication channels](https://en.wikipedia.org/wiki/Communication_channel) or data paths.
UDP uses a simple [connectionless communication](https://en.wikipedia.org/wiki/Connectionless_communication) model with a minimum of protocol mechanisms. UDP provides [checksums](https://en.wikipedia.org/wiki/Checksum) for data integrity, and [port numbers](https://en.wikipedia.org/wiki/Port_numbers) for addressing different functions at the source and destination of the datagram. It has no [handshaking](https://en.wikipedia.org/wiki/Handshaking) dialogues, and thus exposes the user's program to any [unreliability](https://en.wikipedia.org/wiki/Reliability_(computer_networking)) of the underlying network; there is no guarantee of delivery, ordering, or duplicate protection. If error-correction facilities are needed at the network interface level, an application may use [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)(TCP) or [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol)(SCTP) which are designed for this purpose.
UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack). Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to [retransmission](https://en.wikipedia.org/wiki/Retransmission_(data_networks)), which may not be an option in a [real-time system](https://en.wikipedia.org/wiki/Real-time_system).

## Attributes

UDP is a simple message-oriented [transport layer](https://en.wikipedia.org/wiki/Transport_layer) protocol that is documented in [RFC](https://en.wikipedia.org/wiki/Request_for_Comments_(identifier)) [768](https://tools.ietf.org/html/rfc768). Although UDP provides integrity verification (via [checksum](https://en.wikipedia.org/wiki/Checksum)) of the header and payload, it provides no guarantees to the [upper layer protocol](https://en.wikipedia.org/wiki/Upper_layer_protocol) for message delivery and the UDP layer retains no state of UDP messages once sent. For this reason, UDP sometimes is referred to as [Unreliable](https://en.wikipedia.org/wiki/Reliability_(computer_networking)) Datagram Protocol.If transmission reliability is desired, it must be implemented in the user's application.
A number of UDP's attributes make it especially suited for certain applications.

- It istransaction-oriented, suitable for simple query-response protocols such as the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System) or the [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol).
- It provides [datagrams](https://en.wikipedia.org/wiki/Datagram), suitable for modeling other protocols such as [IP tunneling](https://en.wikipedia.org/wiki/IP_tunneling) or [remote procedure call](https://en.wikipedia.org/wiki/Remote_procedure_call) and the [Network File System](https://en.wikipedia.org/wiki/Network_File_System).
- It issimple, suitable for [bootstrapping](https://en.wikipedia.org/wiki/Bootstrapping) or other purposes without a full [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack), such as the [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) and [Trivial File Transfer Protocol](https://en.wikipedia.org/wiki/Trivial_File_Transfer_Protocol).
- It isstateless, suitable for very large numbers of clients, such as in [streaming media](https://en.wikipedia.org/wiki/Streaming_media) applications such as [IPTV](https://en.wikipedia.org/wiki/IPTV).
- Thelack of retransmission delaysmakes it suitable for real-time applications such as [Voice over IP](https://en.wikipedia.org/wiki/Voice_over_IP), [online games](https://en.wikipedia.org/wiki/Online_games), and many protocols using [Real Time Streaming Protocol](https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol).
- Because it supports [multicast](https://en.wikipedia.org/wiki/Multicast), it is suitable for broadcast information such as in many kinds of [service discovery](https://en.wikipedia.org/wiki/Service_discovery) and shared information such as [Precision Time Protocol](https://en.wikipedia.org/wiki/Precision_Time_Protocol) and [Routing Information Protocol](https://en.wikipedia.org/wiki/Routing_Information_Protocol).

## Packet Structure

| ***Offsets***                                                | [**Octet**](https://en.wikipedia.org/wiki/Octet_(computing)) | **0**       | **1**     | **2**            | **3**     |
|-----------|-----------|--------------|-----------|------------------|---------|
| [**Octet**](https://en.wikipedia.org/wiki/Octet_(computing)) | [**Bit**](https://en.wikipedia.org/wiki/Bit)                 | **0-7**    | **8-15** | **16-23**        | **24-31** |
| **0**                                                        | **0**                                                       | Source port |          | Destination port |          |
| **4**                                                        | **32**                                                       | Length      |          | Checksum         |          |

The UDP header consists of 4 fields, each of which is 2 bytes (16 bits).The use of the checksum andsource portfields is optional in IPv4 (pink background in table). In IPv6 only thesource portfield is optional.

## Source port number

This field identifies the sender's port, when used, and should be assumed to be the port to reply to if needed. If not used, it should be zero. If the source host is the client, the port number is likely to be an ephemeral port number. If the source host is the server, the port number is likely to be a [well-known port](https://en.wikipedia.org/wiki/Well-known_port) number.

## Destination port number

This field identifies the receiver's port and is required. Similar to source port number, if the client is the destination host then the port number will likely be an ephemeral port number and if the destination host is the server then the port number will likely be a well-known port number.

## Length

This field specifies the length in bytes of the UDP header and UDP data. The minimum length is 8 bytes, the length of the header. The field size sets a theoretical limit of 65,535 bytes (8 byte header + 65,527 bytes of data) for a UDP datagram. However the actual limit for the data length, which is imposed by the underlying [IPv4](https://en.wikipedia.org/wiki/IPv4) protocol, is 65,507 bytes (65,535 − 8 byte UDP header − 20 byte [IP header](https://en.wikipedia.org/wiki/IPv4_header)).
Using IPv6 [jumbograms](https://en.wikipedia.org/wiki/Jumbogram) it is possible to have UDP packets of size greater than 65,535 bytes.[RFC](https://en.wikipedia.org/wiki/Request_for_Comments_(identifier)) [2675](https://tools.ietf.org/html/rfc2675) specifies that the length field is set to zero if the length of the UDP header plus UDP data is greater than 65,535.

## Checksum

The [checksum](https://en.wikipedia.org/wiki/Checksum) field may be used for error-checking of the header and data. This field is optional in IPv4, and mandatory in IPv6.The field carries all-zeros if unused.

## Checksum computation

The method used to compute the checksum is defined in [RFC](https://en.wikipedia.org/wiki/Request_for_Comments_(identifier)) [768](https://tools.ietf.org/html/rfc768):

Checksum is the 16-bit [one's complement](https://en.wikipedia.org/wiki/One%27s_complement) of the one's complement sum of a pseudo header of information from the IP header, the UDP header, and the data, padded with zero octets at the end (if necessary) to make a multiple of two octets.
In other words, all 16-bit words are summed using one's complement arithmetic. Add the 16-bit values up. On each addition, if a carry-out (17th bit) is produced, swing that 17th carry bit around and add it to the least significant bit of the running total.Finally, the sum is then one's complemented to yield the value of the UDP checksum field.
If the checksum calculation results in the value zero (all 16 bits 0) it should be sent as the one's complement (all 1s) as a zero-value checksum indicates no checksum has been calculated.
The difference between [IPv4](https://en.wikipedia.org/wiki/IPv4) and [IPv6](https://en.wikipedia.org/wiki/IPv6) is in the pseudo header used to compute the checksum and the checksum is not optional in IPv6.

## Use Cases

1. Streaming Media

Voice and video traffic is generally transmitted using UDP. Real-time video and audio streaming protocols are designed to handle occasional lost packets, so only slight degradation in quality occurs, rather than large delays if lost packets were retransmitted.

2. Real-time multiplayer games

3. VoIP

4. Areas where latency and jitter are the primary concernsTCP port numbers aren't the same as UDP port numbers
Ports

| udp/53 | DNS Domain Name Services queries |
|--------|----------------------------------|
Use Case -

1. VoIP (Voice over IP)

We don't care if some packets are lost
