# Service Mesh

A service mesh is a dedicated infrastructure layer for handling service-to-service communication. It's responsible for the reliable delivery of requests through the complex topology of services that comprise a modern, cloud native application. In practice, the service mesh is typically implemented as an array of lightweight network proxies that are deployed alongside application code, without the application needing to be aware.

A service mesh allows applications to offload these capabilities from application-level libraries and allow developers to focus on differentiating business logic.

The concept of the service mesh as a separate layer is tied to the rise of the cloud native application. In the cloud native model, a single application might consist of hundreds of services; each service might have thousands of instances; and each of those instances might be in a constantly-changing state as they are dynamically scheduled an orchestrator like Kubernetes. Not only is service communication in this world incredibly complex, it's a pervasive and fundamental part of runtime behavior. Managing it is vital to ensuring end-to-end performance and reliability.

## Features

- Traffic monitoring
- Access control
- Service discovery
- Security
- Resiliency
- Latency aware Load balancing
- Observability
- Circuit-breaking
- Eventual consistent service discovery, retries and deadlines
- TLS termination
- Protocol updation
- Dynamically shift traffic
- Fail over between datacenters

## Is the Service Mesh a Networking Model?

The service mesh is a networking model that sits at a layer of abstraction above TCP/IP. It assumes that the underlying L3/L4 network is present and capable of delivering bytes from point to point. (It also assumes that this network, as with every other aspect of the environment, is unreliable; the service mesh must therefore also be capable of handling network failures.)

In some ways, the service mesh is analogous to TCP/IP. Just as the TCP stack abstracts the mechanics of reliably delivering bytes between network endpoints, the service mesh abstracts the mechanics of reliably delivering requests between services. Like TCP, the service mesh doesn't care about the actual payload or how it's encoded. The application has a high-level goal ("send something from A to B"), and the job of the service mesh, like that of TCP, is to accomplish this goal while handling any failures along the way.

Unlike TCP, the service mesh has a significant goal beyond "just make it work": it provides a uniform, application-wide point for introducing visibility and control into the application runtime. The explicit goal of the service mesh is to move service communication out of the realm of the invisible, implied infrastructure, and into the role of afirst-class member of the ecosystem - where it can be monitored, managed and controlled.

## Tools

- Istio
- Linkerd
- Kuma

## Kuma

<https://kuma.io/docs/0.1.2/#why-kuma>

## References

<https://dzone.com/articles/whats-a-service-mesh-and-why-do-i-need-one>

[**https://blog.envoyproxy.io/service-mesh-data-plane-vs-control-plane-2774e720f7fc**](https://blog.envoyproxy.io/service-mesh-data-plane-vs-control-plane-2774e720f7fc)

<https://www.weave.works/blog/introduction-to-service-meshes-on-kubernetes-and-progressive-delivery>

[**https://layer5.io/landscape**](https://layer5.io/landscape)

<https://www.toptal.com/kubernetes/service-mesh-comparison>
