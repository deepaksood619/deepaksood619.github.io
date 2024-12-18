# Microservice Architecture

## What is microservices architecture?

A microservices‑based application is a distributed system running on multiple machines. Each service in the system communicates by passing messages to the others.

Microservices ecosystem is a platform of services each encapsulating a business capability. A business capability represents what a business does in a particular domain to fulfill its objectives and responsibilities. Each microservice expose an API that developers can discover and use in a self-serve manner. Microservices have independent lifecycle. Developers can build, test and release each microservice independently. The microservices ecosystem enforces an organizational structure of autonomous long standing teams, each responsible for one or multiple services.

If your application has a more complex domain, consider moving to a [Microservices](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices) architecture. A microservices application is composed of many small, independent services. Each service implements a single business capability. Services are loosely coupled, communicating through API contracts.

Each service can be built by a small, focused development team. Individual services can be deployed without a lot of coordination between teams, which encourages frequent updates. A microservice architecture is more complex to build and manage than either N-tier or web-queue-worker. It requires a mature development and DevOps culture. But done right, this style can lead to higher release velocity, faster innovation, and a more resilient architecture.

## Martin Fowler

"In short, the microservice architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery."

## Top 3 reasons for using microservices

- Zero-downtime independent deployability
- Isolation of data and of processing around that data
- Use microservices to reflect the organizational structure

## You should strive for independent deployment because

- It's easier to limit the impact of each release when using microservices (reducing blast radius)
- As the team size increases it gets exponentially harder to coordinate a deployment

## Why microservices

### Tackles Complexity

It tackles the problem of complexity. It decomposes what would otherwise be a monstrous monolithic application into a set of services. While the total amount of functionality is unchanged, the application has been broken up into manageable chunks or services. Each service has a well‑defined boundary in the form of an RPC or message‑driven API. The Microservices Architecture pattern enforces a level of modularity that in practice is extremely difficult to achieve with a monolithic code base. Consequently, individual services are much faster to develop, and much easier to understand and maintain.

### Develop and release independently

- This architecture enables each service to be developed independently by a team that is focused on that service. The developers are free to choose whatever technologies make sense, provided that the service honors the API contract.
- The Microservices Architecture pattern enables each microservice to be deployed independently. Developers never need to coordinate the deployment of changes that are local to their service. These kinds of changes can be deployed as soon as they have been tested. The UI team can, for example, perform A/B testing and rapidly iterate on UI changes. The Microservices Architecture pattern makes continuous deployment possible.

### Scale independently

Enables scaling of a specific component of an application rather than scaling the entire application when there is a demand for just a specific service.

## Characteristics of Microservices

- Componentization via services
- Organized around business capabilities
- Products not projects
- Smart endpoints and dumb pipes
- Decentralized Governance
- Decentralized Data Management
- Infrastructure Automation
- Design for failure
- Evolutionary Design

## 10 Commandments of Microservices Architecture

- Clean separation of stateless and stateful services
- Do not share libraries or SDKs
- Avoid host affinity
- Focus on services with one task in mind
- Use lightweight messaging protocol for communication
- Design a well-defined entry point and exit point
- Implement a self-registration and discovery mechanism
- Explicitly check for rules and constraints
- Prefer polyglot over single stack
- Maintain independent revisions and build environments

### Best practices

1. Use separate data storage for each microservice
2. Keep code at a similar level of maturity
3. Separate build for each microservice
4. Assign each microservice with a single responsibility
5. Deploy into containers
6. Design stateless services
7. Adopt domain-driven design
8. Design micro frontend
9. Orchestrating microservices

![Microservice Best Practices](../../../media/Pasted%20image%2020240229111422.jpg)

## Things to keep in mind

- Synchronous communication
- Asynchronous communication
- Transactionality
- High availability/Resiliency
- Fault tolerant
- Reliability
- Active-active (where all services is deployed in two or more regions and both keep in-sync)
- Active-passive (where services are on standby in another region, and if one region goes down, other will take over but this can take some time, since database sync can take some time)

## What is monolithic architecture in software?

In a monolithic application, all components reside within the same process and communication is usually based on method or function calls within the same process.

### Important Points

- In cases where a new service ends up with a call back to the monolith, I suggest to expose a new API from the monolith, and access the API through an [anti-corruption](https://martinfowler.com/articles/refactoring-external-service.html#SeparatingTheYoutubeDataStructureIntoAGateway) layer in the new service to make sure that the monolith concepts do not leak out.
- Finding domain boundaries in a monolith is very important.

### Migrating Steps

- Warm up with a Simple and Fairly Decoupled Capability
- Minimize Dependency Back to the Monolith
- Split Sticky Capabilities Early
- Decouple Vertically and Release the Data Early
- Decouple what is important to the Business and Changes Frequently
- Decouple Capability and not Code
- Go Marco First, then Micro
- Migrate in Atomic Evolutionary Steps

The atomic unit of monolith decomposition includes:

- decouple the new service
- Redirect all consumers to new service
- Retire the old code path in the monolith.

The anti-pattern: Decouple the new service, use for new consumers and never retire the old.

Note- Don't move from monolith architecture to microservices in one step.

- First move to a service-oriented architecture without using some fancy bus for message passing, use some simple standard for messaging like HTTP.
- Then if you really need to, move to microservices

### Strangler Pattern

The monolith-first pattern is called the strangler pattern because it resembles the development of a tree called the strangler fig.

All the enterprise applications are first made monolith because it's hard to determine boundaries, define a wrong boundary while creating an enterprise application and you are doomed.

By building up our new service at the boundary of our old service we are able to incrementally cut off our old system, or strangle it.
Backfill refactoring

## Integration Strategies

- Shared Tables
- Database View
- Database Materialized View
- Database Trigger
- Transactional Code
- ETL Tools
- Data Virtualization
- Event Sourcing
- Change Data Capture

The biggest issue in changing a monolith to a microservice lies in changing the communication pattern ---Martin Fowler

## Service Oriented Architecture

Service-oriented architecture(SOA) is a style of [software design](https://en.wikipedia.org/wiki/Software_design) where services are provided to the other components by [application components](https://en.wikipedia.org/wiki/Application_components), through a [communication protocol](https://en.wikipedia.org/wiki/Communications_protocol) over a network. A SOA service is a discrete unit of functionality that can be accessed remotely and acted upon and updated independently, such as retrieving a credit card statement online. SOA is also intended to be independent of vendors, products and technologies.
A service has four properties according to one of many definitions of SOA:

- It logically represents a business activity with a specified outcome.
- It is self-contained.
- It is a [black box](https://en.wikipedia.org/wiki/Black_box) for its consumers, meaning the consumer does not have to be aware of the service's inner workings.
- It may consist of other underlying services.

## Principles

[**Standardized service contract**](https://en.wikipedia.org/wiki/Standardized_service_contract)

Services adhere to a standard communications agreement, as defined collectively by one or more service-description documents within a given set of services.

## Service reference autonomy (an aspect of loose coupling)

The relationship between services is minimized to the level that they are only aware of their existence.

## Service location transparency (an aspect of loose coupling)

Services can be called from anywhere within the network that it is located no matter where it is present.

## Service longevity

Services should be designed to be long lived. Where possible services should avoid forcing consumers to change if they do not require new features, if you call a service today you should be able to call the same service tomorrow.
[**Service abstraction**](https://en.wikipedia.org/wiki/Service_abstraction)

The services act as black boxes, that is their inner logic is hidden from the consumers.
[**Service autonomy**](https://en.wikipedia.org/wiki/Service_autonomy_principle)

Services are independent and control the functionality they encapsulate, from a Design-time and a run-time perspective.
[**Service statelessness**](https://en.wikipedia.org/wiki/Service_statelessness_principle)

Services are stateless, that is either return the requested value or give an exception hence minimizing resource use.
[**Service granularity**](https://en.wikipedia.org/wiki/Service_granularity_principle)

A principle to ensure services have an adequate size and scope. The functionality provided by the service to the user must be relevant.

## Service normalization

Services are decomposed or consolidated (normalized) to minimize redundancy. In some, this may not be done. These are the cases where performance optimization, access, and aggregation are required.

### [Service composability](https://en.wikipedia.org/wiki/Service_composability_principle)

Services can be used to compose other services.

### [Service discovery](https://en.wikipedia.org/wiki/Service_discovery)

Services are supplemented with communicative meta data by which they can be effectively discovered and interpreted.

### [Service reusability](https://en.wikipedia.org/wiki/Service_reusability_principle)

Logic is divided into various services, to promote reuse of code.

## Service [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_science))

Many services which were not initially planned under SOA, may get encapsulated or become a part of SOA.

https://en.wikipedia.org/wiki/Service-oriented_architecture

https://www.toptal.com/aws/service-oriented-architecture-aws-lambda

https://www.youtube.com/watch?v=j6ow-UemzBc&ab_channel=InfoQ

## Great Architecture

- Scales development teams
- Delivers quality
- Enables high performance / low cost
- Supports future features naturally
Tradeoffs
- Near term velocity
- Future paralysis
Misconceptions
- Microservices enable our teams to choose the best programming languages and frameworks for their tasks
- Code generation is evil
- The event log must be the source of truth
- Developers can maintain no more than 3 services each
Critical decisions
- Design schema first for all APIs and Events
    - Consume events (not API) by default
- Invest in automation
    - Deployment, code generation, dependency management
- Enable teams to write amazing and simple tests
    - Drive quality, streamlines maintenance, enables continuous delivery

[Scale, Flow and Microservices - James Lewis - GOTO 2021](https://www.youtube.com/watch?v=LL4SJsBtYw0&ab_channel=GOTOConferences)

[Microservices Architecture Patterns](https://www.youtube.com/playlist?list=PLTyWtrsGknYd0JgqeARypdRy-SX1ORYhs)

## Links

https://martinfowler.com/articles/break-monolith-into-microservices.html

https://martinfowler.com/articles/data-monolith-to-mesh.html
Migrating to Microservices Databases, Chapter 5, Integration Strategies

[https://www.toptal.com/devops/scaling-microservices-applications](https://www.toptal.com/devops/scaling-microservices-applications?)

Migrating to Microservice Databases - By Edson Yanaga
