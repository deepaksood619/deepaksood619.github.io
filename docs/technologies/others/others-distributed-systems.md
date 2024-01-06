# Others - Distributed Systems

## Orbit

Orbit - Virtual actor framework for building distributed systems

Orbit is a framework to write distributed systems using virtual actors on the JVM. It allows developers to write highly distributed and scalable applications while greatly simplifying clustering, discovery, networking, state management, actor lifetime and more.

https://github.com/orbit/orbit

## Netflix Eureka

AWS Service registry for resilient mid-tier load balancing and failover.

https://github.com/Netflix/eureka

## Netflix Ribbon

Ribbon is a Inter Process Communication (remote procedure calls) library with built in software load balancers. The primary usage model involves REST calls with various serialization scheme support.

https://github.com/Netflix/ribbon

## Neflix Hysterix

Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable.

https://github.com/Netflix/Hystrix

## Hydra

A framework for elegantly configuring complex applications.

https://github.com/facebookresearch/hydra

[https://cli.dev](https://cli.dev/)

## dapr

Dapr is a portable, serverless, event-driven runtime that makes it easy for developers to build resilient, stateless and stateful microservices that run on the cloud and edge and embraces the diversity of languages and developer frameworks.

Dapr codifies the best practices for building microservice applications into open, independent, building blocks that enable you to build portable applications with the language and framework of your choice. Each building block is independent and you can use one, some, or all of them in your application.

![image](../../media/Technologies-Others-Others-Distributed-Systems-image1.jpg)

### How it works

Dapr injects a side-car (container or process) to each compute unit. The side-car interacts with event triggers and communicates with the compute unit via standard HTTP or gRPC protocols. This enables Dapr to support all existing and future programming languages without requiring you to import frameworks or libraries.

Dapr offers built-in state management, reliable messaging (at least once delivery), triggers and bindings through standard HTTP verbs or gRPC interfaces. This allows you to write stateless, stateful and actor-like services following the same programming paradigm. You can freely choose consistency model, threading model and message delivery patterns.

Dapr runs natively on Kubernetes, as a self hosted binary on your machine, on an IoT device, or as a container that can be injected into any system, in the cloud or on-premises.

Dapr uses pluggable component state stores and message buses such as Redis as well as gRPC to offer a wide range of communication methods, including direct dapr-to-dapr using gRPC and async Pub-Sub with guaranteed delivery and at-least-once semantics.

[GitHub - dapr/dapr: Dapr is a portable, event-driven, runtime for building distributed applications across cloud and edge.](https://github.com/dapr/dapr)

[Dapr - Distributed Application Runtime](https://dapr.io/)
