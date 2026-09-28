---
slug: /kafka-client-broker-connection-lifecycle
title: Kafka Client-Broker Connection Lifecycle
description: How a Kafka client connects to a broker - TCP handshake, TLS negotiation, SASL authentication, and the Kafka wire protocol, in order.
created: 2026-09-23
updated: 2026-09-23
---
Before any produce/consume traffic flows, a Kafka client goes through four distinct layers when talking to a broker: **TCP handshake → TLS negotiation → SASL authentication → Kafka wire protocol**. Each layer solves a different problem (reliability, encryption, identity, and cluster addressing) and understanding the order clarifies most client-connectivity issues.

## Layer 1: TCP Handshake

A standard 3-way handshake establishes a reliable, ordered byte stream (a "TCP tunnel") between client and broker:

1. **SYN** - client sends a synchronization request with an initial sequence number.
2. **SYN-ACK** - broker acknowledges the client's sequence number and sends its own.
3. **ACK** - client acknowledges the broker's sequence number.

Sequence numbers are what make the connection reliable and ordered - packets can be retried and reassembled in the right order.

**Why is the connection always client-initiated (never broker → client)?**

- Clients typically sit behind NATs/firewalls that block unsolicited inbound traffic - only outbound-initiated connections get a return path.
- Client IPs are usually dynamic (different networks, DHCP leases), while a broker publishes a stable, well-known listener address (host:port). The side with the stable, known address is the one that gets connected *to*.
- This mirrors why HTTP and WebSocket connections are also always client-initiated - the "server" is simply the party with a fixed, discoverable address.

## Layer 2: TLS Handshake (Encryption)

Once the TCP tunnel exists, TLS negotiation begins:

1. **ClientHello** - client sends supported TLS versions (e.g. 1.2, 1.3), supported cipher suites, and SNI (Server Name Indication - which broker/hostname it intends to reach, needed for port/host-based routing through proxies or load balancers).
2. **ServerHello** - broker responds with the negotiated TLS version, negotiated cipher suite, and its certificate (containing its public key, signed by a CA).
3. **Certificate verification** - the client validates the broker's certificate against its own trust store (root CA chain). This is a one-way check: the client confirms the broker's identity.

This one-way flow (broker → client certificate only) is sometimes called "vanilla TLS." If the broker is also configured to require a certificate back from the client (`ssl.client.auth=required`), that's a *two-way* verification - commonly called **mTLS** - though Kafka's broker properties have no literal `MTLS` setting; it's just plain TLS plus a mandatory client certificate.

At the end of this layer you have an **encrypted channel**, but the client itself has not yet been authenticated to the broker.

## Layer 3: SASL Authentication

SASL (Simple Authentication and Security Layer) is what authenticates the *client* to the broker. Kafka exposes exactly four `security.protocol` values, which are really just combinations of encryption and authentication:

| `security.protocol` | Encryption | Authentication |
| --- | --- | --- |
| `PLAINTEXT` | none | none |
| `SSL` | TLS | none (optionally mTLS via `ssl.client.auth=required`) |
| `SASL_PLAINTEXT` | none | one of 4 SASL mechanisms |
| `SASL_SSL` | TLS | one of 4 SASL mechanisms |

The four SASL mechanisms (`sasl.mechanism`):

- **PLAIN** - plain username/password.
- **SCRAM** (Salted Challenge Response Authentication Mechanism) - same idea as PLAIN, but the password is salted and hashed rather than sent as-is.
- **GSSAPI/Kerberos** - integrates with an existing Kerberos KDC (e.g. an Active Directory domain); the most operationally heavy of the four, rarely used outside Windows/AD-centric shops.
- **OAUTHBEARER** - OAuth 2.0 token-based auth, the machine-to-machine equivalent of SSO.

A single listener can be configured to accept more than one SASL mechanism at once (`sasl.enabled.mechanisms` takes a list) - this is different from configuring multiple separate listeners, each pinned to its own mechanism. PLAIN credentials can be backed either by a static, file-based JAAS config or by an external LDAP server.

A useful way to remember it: encryption answers "can anyone eavesdrop?", SASL answers "who are you?", and authorization (ACLs/RBAC, a separate concern) answers "what are you allowed to do?".

## Layer 4: Kafka Wire Protocol

Only after the first three layers succeed does actual Kafka application traffic flow, using Kafka's own binary wire protocol (this is why Kafka isn't a plain REST service - a REST proxy exists specifically to translate HTTP requests into this wire protocol on the client's behalf).

1. **Bootstrap request** - the client connects to any one of the configured `bootstrap.servers` (an array of broker addresses; if the first is unreachable, the client tries the next).
2. **Metadata request/response** - the very first request a client sends is always a metadata request. The response returns the full cluster topology: all brokers, and which broker is the partition leader for every partition of interest.
3. **Direct connection to the leader** - armed with the metadata response, the client opens a *second* connection directly to the broker that leads the relevant partition(s) - all subsequent produce/fetch calls go straight there, not through the bootstrap broker.
4. **Produce / Fetch / OffsetCommit requests** - producers send `Produce` requests, consumers send `Fetch` requests (and periodic `OffsetCommit` requests to record progress), always against the partition leader.

Broker addresses can be exposed via **host-based routing** (same port, different hostnames per broker, e.g. `broker1.kafka.example.com:9092`, `broker2.kafka.example.com:9092`) or **port-based routing** (same hostname, different port per broker, e.g. `kafka.example.com:9092`, `kafka.example.com:9093`). A proxy/gateway sitting in front of a cluster works by rewriting broker addresses in the metadata response so that clients only ever address the proxy, which then forwards to the real broker.

## Summary

```text
Client                                          Broker
  |--- SYN ------------------------------------->|   Layer 1: TCP
  |<-- SYN-ACK -----------------------------------|   (3-way handshake, reliable ordered stream)
  |--- ACK ------------------------------------->|
  |
  |--- ClientHello (TLS versions, ciphers, SNI)->|   Layer 2: TLS
  |<-- ServerHello + certificate ------------------|   (broker identity + encrypted channel)
  |--- verify cert against trust store            |
  |
  |--- SASL exchange (PLAIN/SCRAM/GSSAPI/OAuth) ->|   Layer 3: SASL
  |<-- authenticated ------------------------------|   (client identity)
  |
  |--- Metadata request -------------------------->|   Layer 4: Kafka wire protocol
  |<-- Metadata response (topology, leaders) ------|
  |--- Produce/Fetch/OffsetCommit (to leader) ---->|
```

See also [Kafka listeners & advertised listeners](technologies/kafka/core/kafka-listeners.md) for how brokers publish these addresses, and [Kafka authentication basics](technologies/kafka/security/03-kafka-authentication-basics.md) / [SSL and SASL_SSL authentication](technologies/kafka/security/04-kafka-authentication-with-ssl-and-sasl_ssl.md) for configuration details.
