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

## Links

[RabbitMQ](technologies/brokers/rabbitmq.md)
