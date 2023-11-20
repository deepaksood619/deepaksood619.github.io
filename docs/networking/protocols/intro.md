# Protocols

1. Application Layer
    - BGP
    - DHCP
    - DNS
    - FTP
    - HTTP / HTTPS
    - IMAP
    - LDAP
    - MGCP
    - MQTT
    - NNTP
    - NTP
    - POP
    - ONC/RPC
    - RTP
    - RTSP
    - RIP
    - SIP
    - SMTP
    - SNMP
    - SSH
    - Telnet
    - TLS/SSL
    - XMPP
    - LWM2M

2. Transport Layer
    - TCP
    - UDP
    - DCCP
    - SCTP
    - RSVP

3. Internet Layer
    - IP (IPv4 / IPv6)
    - ICMP / ICMPv6
    - ECN
    - IGMP
    - IPsec

4. Link Layer
    - ARP
    - NDP
    - OSPF
    - Tunnels (L2TP)
    - PPP
    - MAC (Ethernet / DSL / ISDN / FDDI)
        - Carrier-sense multiple access with collision detection(CSMA/CD)
        - Carrier-sense multiple access with collision avoidance(CSMA/CA)

<https://en.wikipedia.org/wiki/Internet_protocol_suite>

## Networking Protocols

- **http2 -** multiple requests in one connection- **BOSH - Bidirectional stream Over Synchronous HTTP,** it works over HTTP (User will request a connection to the server and than server will hold onto that request until some time, and return to him if any data needs to be transfered, than user will again initiate the request)
- **Long Polling over HTTP -** Client will request information to the server, and then server will respond with that information or tell the client that there is no new information. After that client will wait some time before again sending request.

## STOMP (Simple/Streaming Text Oriented Message Protocol)

Is the only one to be text-based, making it more analogous to HTTP.

Like AMQP, STOMP provides a message (or frame) header with properties, and a frame body.

Do not have queues and topics - it uses a SEND semantic with a "destination" string.
It uses a set of commands like CONNECT, SEND, or SUBSCRIBE to manage the conversation. STOMP clients, written in any language, can talk with any message broker supporting the protocol.

## TLS/SSL

Transport Layer Security(TLS), and its now-deprecated predecessor, Secure Sockets Layer(SSL), are [cryptographic protocols](https://en.wikipedia.org/wiki/Cryptographic_protocol) designed to provide [communications security](https://en.wikipedia.org/wiki/Communications_security) over a [computer network](https://en.wikipedia.org/wiki/Computer_network).Several versions of the protocols find widespread use in applications such as [web browsing](https://en.wikipedia.org/wiki/Web_navigation), [email](https://en.wikipedia.org/wiki/Email), [instant messaging](https://en.wikipedia.org/wiki/Instant_messaging), and [voice over IP](https://en.wikipedia.org/wiki/Voice_over_IP)(VoIP).[Websites](https://en.wikipedia.org/wiki/Website) can use TLS to secure all communications between their [servers](https://en.wikipedia.org/wiki/Server_(computing)) and [web browsers](https://en.wikipedia.org/wiki/Web_browser).
The TLS protocol aims primarily to provide [privacy](https://en.wikipedia.org/wiki/Privacy) and [data integrity](https://en.wikipedia.org/wiki/Data_integrity) between two or more communicating computer applications.When secured by TLS, connections between a client (e.g., a web browser) and a server (e.g., wikipedia.org) should have one or more of the following properties:

- The connection isprivate(orsecure) because [symmetric cryptography](https://en.wikipedia.org/wiki/Symmetric-key_algorithm) is used to [encrypt](https://en.wikipedia.org/wiki/Encryption) the data transmitted. The [keys](https://en.wikipedia.org/wiki/Key_(cryptography)) for this symmetric encryption are generated uniquely for each connection and are based on a [shared secret](https://en.wikipedia.org/wiki/Shared_secret) that was negotiated at the start of the [session](https://en.wikipedia.org/wiki/Session_(computer_science)). The server and client negotiate the details of which encryption algorithm and cryptographic keys to use before the first [byte](https://en.wikipedia.org/wiki/Byte) of data is transmitted. The negotiation of a shared secret is both secure (the negotiated secret is unavailable to [eavesdroppers](https://en.wikipedia.org/wiki/Eavesdropping) and cannot be obtained, even by an attacker who places themselves in the middle of the connection) and reliable (no attacker can modify the communications during the negotiation without being detected).
- The identity of the communicating parties can beauthenticatedusing [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). This authentication can be made optional, but is generally required for at least one of the parties (typically the server).
- The connection isreliablebecause each message transmitted includes a message integrity check using a [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code) to prevent undetected loss or alteration of the data during [transmission](https://en.wikipedia.org/wiki/Data_transmission).

The TLS protocol comprises two layers: the [TLS record](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_record) and the [TLS handshake](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_handshake) protocols.
TLS can be used on top of a transport-layer security protocol like [TCP](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/). There are three main components to TLS: Encryption, Authentication, and Integrity.

- **Encryption**:hides the data being transferred from third parties.
- **Authentication**:ensures that the parties exchanging information are who they claim to be.
- **Integrity**:verifies that the data has not been forged or tampered with.

[HTTPS](https://www.cloudflare.com/learning/ssl/what-is-https/) is an implementation of TLS encryption on top of the [HTTP](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/) protocol, which is used by all websites as well as some other web services.
TLS_ECDHE_RSA_with_AES_128_GCM_SHA256

## TLSv1.3

The updated protocol added a function called "0-RTT resumption" that enables the client and server to remember if they have communicated before. If prior communications exist, the previous keys can be used, security checks skipped and the client and server can begin communicating immediately. It is believed that some of the bigger tech companies pushed for 0-RTT because they benefit from the faster connections, but there is some concern from security professionals.

## TLS Handshake

- The client computer sends aClientHellomessage to the server with its Transport Layer Security (TLS) version, list of cipher algorithms and compression methods available.
- The server replies with aServerHellomessage to the client with the TLS version, selected cipher, selected compression methods and the server's public certificate signed by a CA (Certificate Authority). The certificate contains a public key that will be used by the client to encrypt the rest of the handshake until a symmetric key can be agreed upon.
- The client verifies the server digital certificate against its list of trusted CAs. If trust can be established based on the CA, the client generates a string of pseudo-random bytes and encrypts this with the server's public key. These random bytes can be used to determine the symmetric key.
- The server decrypts the random bytes using its private key and uses these bytes to generate its own copy of the symmetric master key.
- The client sends aFinishedmessage to the server, encrypting a hash of the transmission up to this point with the symmetric key.
- The server generates its own hash, and then decrypts the client-sent hash to verify that it matches. If it does, it sends its ownFinishedmessage to the client, also encrypted with the symmetric key.
- From now on the TLS session transmits the application (HTTP) data encrypted with the agreed symmetric key

<https://en.wikipedia.org/wiki/Transport_Layer_Security>

<https://www.cloudflare.com/learning/ssl/transport-layer-security-tls>

<https://security.stackexchange.com/questions/93333/what-layer-is-tls>

## Mutual Authentication

[Mutual TLS | The Backend Engineering Show - YouTube](https://www.youtube.com/watch?v=KwpV-ICpkc4)

Mutual authentication or two-way authentication refers to two parties [authenticating](https://en.wikipedia.org/wiki/Authenticating) each other at the same time, being a default mode of [authentication](https://en.wikipedia.org/wiki/Authentication_protocol) in some protocols ([IKE](https://en.wikipedia.org/wiki/Internet_Key_Exchange), [SSH](https://en.wikipedia.org/wiki/Secure_Shell)) and optional in others ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).

By default the TLS protocol only proves the identity of the server to the client using [X.509 certificate](https://en.wikipedia.org/wiki/X.509_certificate) and the authentication of the client to the server is left to the application layer. TLS also offers client-to-server authentication using client-side X.509 authentication.As it requires provisioning of the certificates to the clients and involves less user-friendly experience, it's rarely used in end-user applications.

Mutual TLS authentication (mTLS) is much more widespread in [business-to-business](https://en.wikipedia.org/wiki/Business-to-business)(B2B) applications, where a limited number of programmatic and homogeneous clients are connecting to specific web services, the operational burden is limited, and security requirements are usually much higher as compared to consumer environments.

Most Mutual authentication is machine-to-machine, leaving it up to chance whether or not users will notice (or care) when the remote authentication fails (e.g. a red address bar browser padlock, or a wrong domain name). Non-technical mutual-authentication also exists to mitigate this problem, requiring users to complete a challenge, effectively forcing them to notice, and blocking them from authenticating with false endpoints.
Mutual authentication is of two types:

- Certificate based
- User name-password based

<https://en.wikipedia.org/wiki/Mutual_authentication>- We use TLS/SSL for two main reasons

    1. Encryption
    2. Authentication

- After you've established a TLS connection, what algorithm is used to encrypt the data?
  - Symmetric cipher like AES
  - RSA and ECDSA are slow, So instead the client and server pick a secret (and faster to use) symmetric key and use that to encrypt everything
- Does every TLS server certificate have a hostname on it?
  - Yes, the point of a certificate is to prove that a server is the "real" server for a hostname, so every certificate has a hostname on it
- How does a browser check that your certificate is signed by someone it trusts?
  - it has a hardcoded list
- Are TLS certificates secret?
  - A TLS certificate contains
    - A public key
    - The hostname(s) it's valid for
    - An expiration date
    - Signature(s) for a CA
  - The private key for the cert is Super Secret though

## Two types of APIs

1. Pull based API: HTTP, gRPC
2. Push based API: AMQP, MQTT, Kafka
