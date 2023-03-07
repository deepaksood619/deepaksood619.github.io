# Comparision

## Performance benchmarks

gRPC is roughly 7 times faster than REST when receiving data & roughly 10 times faster than REST when sending data for this specific payload. This is mainly due to the tight packing of the Protocol Buffers and the use of HTTP/2 by gRPC. However I had to spend roughly 45 mins implementing this simple gRPC Service, where I only spent around 10 mins building the WebAPI.

<https://medium.com/@EmperorRXF/evaluating-performance-of-rest-vs-grpc-1b8bdf0b22da>

## High-level comparison

| **Feature**                | **gRPC**                                                                                                                           | **HTTP APIs with JSON**       |
|----------------------|-------------------------|--------------------------|
| **Contract**               | Required (.proto)                                                                                                                  | Optional (OpenAPI)            |
| **Protocol**               | HTTP/2                                                                                                                             | HTTP                          |
| **Payload**                | [Protobuf (small, binary)](https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1#performance)           | JSON (large, human readable)  |
| **Prescriptiveness**       | [Strict specification](https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1#strict-specification)      | Loose. Any HTTP is valid.     |
| **Streaming**              | [Client, server, bi-directional](https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1#streaming)       | Client, server                |
| **Browser support**        | [No (requires grpc-web)](https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1#limited-browser-support) | Yes                           |
| **Security**               | Transport (TLS)                                                                                                                    | Transport (TLS)               |
| **Client code-generation** | [Yes](https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison?view=aspnetcore-3.1#code-generation)                            | OpenAPI + third-party tooling |

## gRPC recommended scenarios

- **Microservices--** gRPC is designed for low latency and high throughput communication. gRPC is great for lightweight microservices where efficiency is critical.
- **Point-to-point real-time communication--** gRPC has excellent support for bi-directional streaming. gRPC services can push messages in real-time without polling.
- **Polyglot environments--** gRPC tooling supports all popular development languages, making gRPC a good choice for multi-language environments.
- **Network constrained environments--** gRPC messages are serialized with Protobuf, a lightweight message format. A gRPC message is always smaller than an equivalent JSON message.

## gRPC weaknesses

- Limited browser support
- Not human readable
<https://docs.microsoft.com/en-us/aspnet/core/grpc/comparison>
