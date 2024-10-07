# Architecture Guide

## Application Architecture Guide

- Architecture Styles
    - Big compute
    - Big data

[Big Data](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/big-data) and [Big Compute](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/big-compute) are specialized architecture styles for workloads that fit certain specific profiles. Big data divides a very large dataset into chunks, performing parallel processing across the entire set, for analysis and reporting. Big compute, also called high-performance computing (HPC), makes parallel computations across a large number (thousands) of cores. Domains include simulations, modeling, and 3-D rendering.

- Event-driven architecture
- Microservices
- **N-tier application**
- **Web-queue-worker**

For a purely PaaS solution, consider a [Web-Queue-Worker](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/web-queue-worker) architecture. In this style, the application has a web front end that handles HTTP requests and a back-end worker that performs CPU-intensive tasks or long-running operations. The front end communicates to the worker through an asynchronous message queue.

Web-queue-worker is suitable for relatively simple domains with some resource-intensive tasks. Like N-tier, the architecture is easy to understand. The use of managed services simplifies deployment and operations. But with complex domains, it can be hard to manage dependencies. The front end and the worker can easily become large, monolithic components that are hard to maintain and update. As with N-tier, this can reduce the frequency of updates and limit innovation.

| **Architecture style**    | **Dependency management**                                                        | **Domain type**                                                  |
|----------------|--------------------------------|------------------------|
| N-tier                    | Horizontal tiers divided by subnet                                               | Traditional business domain. Frequency of updates is low.        |
| Web-Queue-Worker          | Front and backend jobs, decoupled by async messaging.                            | Relatively simple domain with some resource intensive tasks.     |
| Microservices             | Vertically (functionally) decomposed services that call each other through APIs. | Complicated domain. Frequent updates.                            |
| Event-driven architecture | Producer/consumer. Independent view per sub-system.                              | IoT and real-time systems                                        |
| Big data                  | Divide a huge dataset into small chunks. Parallel processing on local datasets.  | Batch and real-time data analysis. Predictive analysis using ML. |
| Big compute               | Data allocation to thousands of cores.                                           | Compute intensive domains such as simulation.                    |

### Design Principles

- Design for self-healing
- Make all things redundant
- Minimize coordination
- Design to scale out
- Partition around limits
- Design for operations
- Use managed services
- Use the best data store for the job
- Design for evolution
- Build for the needs of business

### Best Practices

- API Design
- API Implementation
- Autoscaling
- Background jobs
- Caching
- Content Delivery Network
- Data Partitioning
- Data Partitioning strategies (by service)
- Monitoring and diagnostics
- Naming Conventions
- Retry Guidance for Specific services
- Transient fault handling

### Performance Tuning

- Scenario 1 - Distributed Transactions
- Scenario 2 - Multiple backend services
- Scenario 3 - Event Streaming

### Performance Antipatterns

- Busy Database
- Busy Front End
- Chatty I/O
- Extraneous Fetching
- Improper Instantiation
- Monolithic Persistence
- No Caching
- Synchronous I/O2. Design Patterns
- [Ambassador](https://docs.microsoft.com/en-us/azure/architecture/patterns/ambassador)
- [Anti-corruption Layer](https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)
- [Availability](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/availability)
- [Backends for Frontends](https://docs.microsoft.com/en-us/azure/architecture/patterns/backends-for-frontends)
- [Bulkhead](https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead)

The Bulkhead pattern is a type of application design that is tolerant of failure. In a bulkhead architecture, elements of an application are isolated into pools so that if one fails, the others will continue to function. It's named after the sectioned partitions (bulkheads) of a ship's hull. If the hull of a ship is compromised, only the damaged section fills with water, which prevents the ship from sinking.

https://www.youtube.com/watch?v=R2FT5edyKOg

- [Cache-Aside](https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside)
- [Choreography](https://docs.microsoft.com/en-us/azure/architecture/patterns/choreography)
- [Circuit Breaker](https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)
- [Claim Check](https://docs.microsoft.com/en-us/azure/architecture/patterns/claim-check)
- [Command and Query Responsibility Segregation (CQRS)](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs)
- [Compensating Transaction](https://docs.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction)
- [Competing Consumers](https://docs.microsoft.com/en-us/azure/architecture/patterns/competing-consumers)
- [Compute Resource Consolidation](https://docs.microsoft.com/en-us/azure/architecture/patterns/compute-resource-consolidation)
- [Data management](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/data-management)
- [Design and implementation](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/design-implementation)
- [Event Sourcing](https://docs.microsoft.com/en-us/azure/architecture/patterns/event-sourcing)
- [External Configuration Store](https://docs.microsoft.com/en-us/azure/architecture/patterns/external-configuration-store)
- [Federated Identity](https://docs.microsoft.com/en-us/azure/architecture/patterns/federated-identity)
- [Gatekeeper](https://docs.microsoft.com/en-us/azure/architecture/patterns/gatekeeper)
- [Gateway Aggregation](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation)
- [Gateway Offloading](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading)
- [Gateway Routing](https://docs.microsoft.com/en-us/azure/architecture/patterns/gateway-routing)
- [Health Endpoint Monitoring](https://docs.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring)
- [Index Table](https://docs.microsoft.com/en-us/azure/architecture/patterns/index-table)
- [Leader Election](https://docs.microsoft.com/en-us/azure/architecture/patterns/leader-election)
- [Management and monitoring](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/management-monitoring)
- [Materialized View](https://docs.microsoft.com/en-us/azure/architecture/patterns/materialized-view)
- [Messaging](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/messaging)
- [Performance and scalability](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/performance-scalability)
- [Pipes and Filters](https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters)
- [Priority Queue](https://docs.microsoft.com/en-us/azure/architecture/patterns/priority-queue)
- [Publisher/Subscriber](https://docs.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber)
- [Queue-Based Load Leveling](https://docs.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling)
- [Resiliency](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/resiliency)
- [Retry](https://docs.microsoft.com/en-us/azure/architecture/patterns/retry)
- [Scheduler Agent Supervisor](https://docs.microsoft.com/en-us/azure/architecture/patterns/scheduler-agent-supervisor)
- [Security](https://docs.microsoft.com/en-us/azure/architecture/patterns/category/security)
- [Sharding](https://docs.microsoft.com/en-us/azure/architecture/patterns/sharding)
- [Sidecar](https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar)
- [Static Content Hosting](https://docs.microsoft.com/en-us/azure/architecture/patterns/static-content-hosting)
- [Strangler](https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler)
- [Throttling](https://docs.microsoft.com/en-us/azure/architecture/patterns/throttling)
- [Valet Key](https://docs.microsoft.com/en-us/azure/architecture/patterns/valet-key)

## Pillars of Software Quality

- Reliability
- Resiliency
- Security
- Scalability

## Technologies

- AI and machine learning
- Blockchain
- Data architectures
- DevOps
- Enterprise integration
- High performance computing (HPC)
- Identity
- Internet of Things (IoT)
- Microservices
- Networking
- Serverless applications
- VM workloads
- Web apps

## Cloud Adoption Framework

- https://docs.microsoft.com/en-us/azure/architecture/guide
- https://github.com/MicrosoftDocs/architecture-center
- https://thenewstack.io/primer-understanding-software-and-system-architecture
- https://www.freecodecamp.org/news/systems-design-for-interviews
- [Cloud Architecture Guidance and Topologies &nbsp;|&nbsp; Cloud Architecture Center | Google Cloud](https://cloud.google.com/architecture)

## Others

- [Request Collapsing | InterviewReady | System Design Course | Gaurav Sen](https://interviewready.io/blog/Concurrency-Patterns-for-Senior-Engineers-part-1)
- [Cron job scheduling | InterviewReady | System Design Course | Gaurav Sen](https://interviewready.io/blog/concurrency-for-senior-engineers-part-ii)
- [Request Hedging | InterviewReady | System Design Course | Gaurav Sen](https://interviewready.io/blog/concurrency-for-senior-engineers-part-iii)
