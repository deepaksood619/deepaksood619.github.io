# Trade offs

Compute is cheap. Storage is cheap. Engineering time is expensive.

- Speed vs. memory
- battery life vs. accuracy
- fairness vs. accuracy
- precision vs. recall
- ease of implementation vs. maintainability
- explore vs exploit

## Questions

### Cost

- Operational complexity
- How easy is it to scale if the TSDB storage is low?
- How easy is it to scale the performance with increased data?
- Are there any operations tasks that regularly need to be carried out?

### Capabilities

- Does the TSDB support metrics and events?
- Can metadata be associated with an event?
- What is the precision i.e. the smallest increment of time between events?
- What is the consistency model?
- Can the data have a Time To Live?

### Performance

- How many events per second can be written in, for a given scale of the system?
- How many events per second can be read out, for a given scale of the system?
- Bytes per point after any compression that occurs? (What volume of space is required?)

### Query capabilities

- How is the data queried? DSL? API?
- How easy is the query mechanism to use?
- Can the query mechanism aggregate data? Can it do it by date?
- Can we de-dupe data? e.g., if we ingested the same event twice? A uniqueness constraint.

### Ingestion

- How is the data sent to the TSDB? API? Log scraping? Multi language clients?

### Export

- How could the entire TSDB be exported for use elsewhere or in another TSDB?

### Maturity

- How mature is the TSDB and its ecosystem? Is it likely to die soon? Does it have good support?

### Community

- How large and active is the community using the TSDB? If I have a problem will I be able to find someone to help me solve it?

### Support

- Is there any paid support for the TSDB and if so how much?

### Security

- What are the mechanisms for authentication and authorisation?
- What other security implications are there?

### Integration

- How easy is it to integrate with other services? Is there anything specific that helps?

### Visualisation

- How can the data from the TSDB be visualised?
- Are there any dashboards / high level visualisations?
- Are the dashboards internal to the TSDB or can they be shared on a website?

https://medium.com/kudos-engineering/choosing-the-elastic-stack-as-a-time-series-database-9fac202c53ba

## Importants Points

1. Understand the functional and non-functional requirements before designing.
2. Clearly define the use cases and constraints of the system.
3. There is no perfect solution. It’s all about tradeoffs.
4. Assume requirements will change and design the system to be flexible.
5. Assume everything can and will fail. Make it fault tolerant.
6. Don't add functionality until it's necessary. Avoid over-engineering.
7. Design your system for scalability from the ground up.
8. Prefer horizontal scaling over vertical scaling for scalability.
9. Add Load Balancers to ensure high availability and distribute traffic.
10. Consider using SQL Databases for structured data and ACID transactions.
11. Opt for NoSQL Databases when dealing with unstructured data.
12. Use Database sharding to scale SQL databases horizontally.
13. Use Database Indexing and search engines for efficient data retrievals.
14. Use Rate Limiting to prevent system overload and DOS attacks.
15. Use WebSockets for real-time communication.
16. Employ Heartbeat Mechanisms for failure detection.
17. Consider using a message queue for asynchronous communication.
18. Implement data partitioning and sharding for large datasets.
19. Consider denormalizing databases for read-heavy workloads.
20. Consider using event-driven architecture for decoupled systems.
21. Use CDNs to reduce latency for a global user base.
22. Use write-through cache for write-heavy applications.
23. Use read-through cache for read-heavy applications.
24. Use blob/object storage for storing media files like files, videos etc..
25. Implement Data Replication and Redundancy to avoid single point of failure.
26. Implement Autoscaling to handle traffic spikes smoothly.
27. Use Asynchronous processing to run background tasks.
28. Make operations idempotent where possible to simplify retry logic and error handling.
29. When appropriate, use microservices for flexibility, scalability, and maintainability.
30. Consider using a data lake or data warehouse for analytics and reporting.
