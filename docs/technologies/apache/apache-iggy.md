---
slug: /apache-iggy
title: Apache Iggy
description: Persistent message streaming platform written in Rust with QUIC, WebSocket, TCP and HTTP support
created: 2026-06-22
updated: 2026-06-22
---

Iggy is a persistent message streaming platform written in Rust, supporting QUIC, WebSocket, TCP (custom binary specification) and HTTP (regular REST API) transport protocols, capable of processing millions of messages per second at ultra-low latency.

This is not yet another extension running on top of existing infrastructure, such as Kafka or SQL database.

Iggy is a persistent message streaming log built from the ground up using low-level I/O with thread-per-core shared nothing architecture, `io_uring` and `compio` for maximum speed and efficiency.

## Features

- Highly performant, persistent append-only log for message streaming
- Very high throughput for both writes and reads
- Low latency and predictable resource usage thanks to Rust and io_uring
- User authentication and authorization with granular permissions and Personal Access Tokens (PAT)
- Support for multiple streams, topics and partitions
- Support for multiple transport protocols (QUIC, WebSocket, TCP, HTTP)
- Fully operational RESTful API which can be optionally enabled
- Available client SDK in multiple languages
- Thread per core shared nothing design together with io_uring
- Works directly with binary data, avoiding enforced schema and serialization/deserialization overhead
- Custom zero-copy (de)serialization
- Configurable server features
- Server-side storage of consumer offsets
- Multiple ways of polling messages (by offset, timestamp, first/last N, next N for consumer)
- Auto committing offset support
- Consumer groups providing message ordering and horizontal scaling
- Message expiry with auto deletion based on configurable retention policy
- Server side message deduplication
- Multi-tenant support via streams abstraction
- TLS support for all transport protocols
- Connectors - sinks, sources and data transformations based on custom Rust plugins
- Model Context Protocol - provide context to LLM with MCP server
- Optional server-side and client-side data encryption using AES-256-GCM
- Optional metadata support in message headers
- Data backups and archiving to disk or S3 compatible storage
- Support for OpenTelemetry logs & traces + Prometheus metrics
- Built-in CLI to manage the streaming server
- Built-in benchmarking app
- Single binary deployment (no external dependencies)
- Running as single node (clustering based on Viewstamped Replication coming soon)

## Supported Language SDKs

- Rust
- C#
- Java
- Python
- Node.js (TypeScript)
- Go
- C++ (work in progress)

## Performance

Iggy is already capable of processing millions of messages per second at the microseconds range for p99+ latency.

You might expect over 5000 MB/s (e.g. 5M of 1 KB msg/sec) throughput for writes and reads.

## Roadmap

- Clustering & data replication based on VSR (coming soon)

## Links

- https://iggy.apache.org/
- [GitHub - apache/iggy](https://github.com/apache/iggy)
