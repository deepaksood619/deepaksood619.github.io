# Cloud Native

Cloud native is a term used to describe **container-based environments.** Cloud-native technologies are used to develop applications built with services packaged in containers, deployed as microservices and managed on elastic infrastructure through agile DevOps processes and continuous delivery workflows.

Where operations teams would manage the infrastructure resource allocations to traditional applications manually, cloud-native applications are deployed on infrastructure that abstracts the underlying compute, storage and networking primitives. Developers and operators dealing with this new breed of applications don't directly interact with application programming interfaces (APIs) exposed by infrastructure providers. Instead, the orchestrator handles resource allocation automatically, according to policies set out by DevOps teams. The controller and scheduler, which are essential components of the orchestration engine, handle resource allocation and the life cycle of applications.

Cloud-native platforms, like Kubernetes, expose a flat network that is overlaid on existing networking topologies and primitives of cloud providers. Similarly, the native storage layer is often abstracted to expose logical volumes that are integrated with containers. Operators can allocate storage quotas and network policies that are accessed by developers and resource administrators. The infrastructure abstraction not only addresses the need for portability across cloud environments, but also lets developers take advantage of emerging patterns to build and deploy applications. Orchestration managers become the deployment target, irrespective of the underlying infrastructure that may be based on physical servers or virtual machines, private clouds or public clouds.

Kubernetes is an ideal platform for running contemporary workloads designed as cloud-native applications. It's become the de facto operating system for the cloud, in much the same way Linux is the operating system for the underlying machines.

## 10 Key Attributes of Cloud-Native Applications

1. Packaged as lightweight containers
2. Developed with best-of-breed languages and frameworks
3. Designed as loosely coupled microservices
4. Centered around APIs for interaction and collaboration
5. Architected with a clean separation of stateless and stateful services
6. Isolated from server and operating system dependencies
7. Deployed on self-service, elastic, cloud infrastructure
8. Managed through agile DevOps processes
9. Automated capabilities
10. Defined, policy-driven resource allocation

https://cloud.google.com/blog/products/application-development/5-principles-for-cloud-native-architecture-what-it-is-and-how-to-master-it

https://thenewstack.io/primer-distributed-systems-and-cloud-native-computing

## Self service Edge Stack

| **Traditional on-premises** | **Modern cloud** |
|---|---|
| Monolithic | Decomposed |
| Designed for predictable scalability | Designed for elastic scale |
| Relational database | Polyglot persistence (mix of storage technologies) |
| Synchronized processing | Asynchronous processing |
| Design to avoid failures (MTBF) | Design for failure (MTTR) |
| Occasional large updates | Frequent small updates |
| Manual management | Automated self-management |
| Snowflake servers | Immutable infrastructure |

![How do we Adopt Cloud Native](../../media/Pasted%20image%2020240321193906.jpg)

## What is cloud native

![what is cloud native](../../media/Screenshot%202024-10-19%20at%204.00.27%20AM.jpg)

## Architecture

![Cloud Native Reference Architecture](../../media/Pasted%20image%2020240906232317.jpg)

[Cloud Native Architecture: Its Benefits and Key Components](https://successive.tech/blog/exploring-cloud-native-architecture-its-benefits-and-key-components/)

## Links

- [Cloud Foundry – Open Source Cloud Native Application Delivery](https://www.cloudfoundry.org/)
