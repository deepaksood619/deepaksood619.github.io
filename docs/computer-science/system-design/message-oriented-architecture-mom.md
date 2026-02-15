# Message Oriented Architecture (MOM)

Message oriented middleware (MOM) refers to the software infrastructure supporting sending and receiving messages between distributed systems. AMQP and MQTT are the two most relevant protocols in this context. They are extensively used for exchanging messages since they provide an abstraction of the different participating system entities, alleviating their coordination and simplifying the communication programming details.

The basic idea of MOM is that communication takes place by adding messages to distributed queues, and by getting messages from those queues. Based on the model of Message Oriented Middleware, many protocols have been developed, e.g. DDS, STOMP, XMPP. The two most widely used proposals are: the Advanced Message Queuing Protocol (AMQP) and the Message Queuing Telemetry Transport (MQTT).

- [AMQP](networking/protocols/amqp.md)
- [MQTT](networking/mqtt/readme.md)
- [ZeroMQ: Distributed Messaging](networking/protocols/zeromq-distributed-messaging.md)

## pika

Pika is a RabbitMQ (AMQP 0-9-1) client library for Python.

https://pypi.org/project/pika

https://pika.readthedocs.io/en/stable/intro.html

## Others

### Solace vs TIBCO

Solace (PubSub+) and TIBCO (EMS/Messaging) are both premier, enterprise-grade message-oriented middleware platforms, but with distinct focuses. **Solace excels in ultra-high performance, low-latency, real-time event streaming and event mesh capabilities. TIBCO provides a comprehensive, robust, and mature integration platform designed for complex, traditional enterprise application integration (EAI) and SOA environments.**

#### Key Differences

- **Performance & Architecture:** Solace is designed for maximum speed and microsecond-level latency, often utilizing dedicated hardware, whereas TIBCO EMS is typically software-based with millisecond-level latency, focusing on reliability and transactional integrity.
- **Best Use Cases:** Solace is ideal for high-volume, real-time data streaming (e.g., IoT, capital markets). TIBCO is best suited for complex, enterprise-wide service-oriented architecture (SOA) integration.
- **Event Mesh:** Solace strongly emphasizes building an "event mesh" to enable real-time, event-driven architectures (EDA) across cloud and on-premise environments.
- **Protocol Support:** Both support many standards, but Solace is often noted for wider native support of modern web/IoT protocols (MQTT, REST, AMQP) alongside JMS.

#### Conclusion

Choose **[Solace](https://www.google.com/search?q=Solace&rlz=1C5GCCM_en&oq=solace&gs_lcrp=EgZjaHJvbWUqDQgAEAAYkQIYgAQYigUyDQgAEAAYkQIYgAQYigUyEAgBEC4YkQIYsQMYgAQYigUyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyBwgEEAAYgAQyCggFEAAYsQMYgAQyDQgGEAAYgwEYsQMYgAQyBwgHEAAYgAQyBwgIEAAYgATSAQc5ODRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&mstk=AUtExfBk29HEdoK5qNOMR5b2YRPcC6zPjleOrJta8gIs7IrZ5e_g0JG1WdkxCHwAnYwCdwLYmiBQOq3pXQUkIiYcgSycFk5Kx4p7lgjuUJCIn0vNljwOhxW9wPT_kn-w7jTYH6Ht74YHbT586rHmMtJFDMdVtHS0YhzkoeVulCVyMG4pGwX6LdLFUjQEeN8yC9n3wV6HRMeV8rOnE9eABErxkSIby0sgyCUAe64an5Ca0ZdBiAjWTyTFfYnXNZlxrPBeDacG0Kb_rAANkwriv7z-A5fM&csui=3&ved=2ahUKEwiBuvGYqdaSAxXHS3ADHYExBV8QgK4QegQIBRAB)** if your priority is extreme performance, massive scaling for real-time events, and cloud-native EDA. Choose **[TIBCO](https://www.google.com/search?q=TIBCO&rlz=1C5GCCM_en&oq=solace&gs_lcrp=EgZjaHJvbWUqDQgAEAAYkQIYgAQYigUyDQgAEAAYkQIYgAQYigUyEAgBEC4YkQIYsQMYgAQYigUyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyBwgEEAAYgAQyCggFEAAYsQMYgAQyDQgGEAAYgwEYsQMYgAQyBwgHEAAYgAQyBwgIEAAYgATSAQc5ODRqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&mstk=AUtExfBk29HEdoK5qNOMR5b2YRPcC6zPjleOrJta8gIs7IrZ5e_g0JG1WdkxCHwAnYwCdwLYmiBQOq3pXQUkIiYcgSycFk5Kx4p7lgjuUJCIn0vNljwOhxW9wPT_kn-w7jTYH6Ht74YHbT586rHmMtJFDMdVtHS0YhzkoeVulCVyMG4pGwX6LdLFUjQEeN8yC9n3wV6HRMeV8rOnE9eABErxkSIby0sgyCUAe64an5Ca0ZdBiAjWTyTFfYnXNZlxrPBeDacG0Kb_rAANkwriv7z-A5fM&csui=3&ved=2ahUKEwiBuvGYqdaSAxXHS3ADHYExBV8QgK4QegQIBRAC)** if you have a deeply embedded, legacy-heavy enterprise environment requiring mature, complex orchestration and integration.

#### Links

- [TIBCO Platform: The Modern Enterprise Data Platform For Real-Time Insights](https://www.tibco.com/)

## JMS Brokers

A JMS broker acts as the central messaging middleware, enabling Java applications to send, receive, and store messages asynchronously via queues or topics. It manages communication, routing, and persistence between producers and consumers, acting as the vendor-specific implementation (e.g., ActiveMQ, IBM MQ) of the JMS API.

- IBM MQ
- ActiveMQ
- TIBCO EMS
- Solace Appliance

## Links

[RabbitMQ](technologies/brokers/rabbitmq.md)
