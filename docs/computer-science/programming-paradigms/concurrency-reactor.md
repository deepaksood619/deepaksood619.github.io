---
slug: /computer-science/programming-paradigms/concurrency-reactor
title: Concurrency in Reactor Pattern
description: Learn the Reactor design pattern for efficient concurrent event handling and service request management.
created: 2023-03-05
last_update: 2023-12-05
---
The reactor [design pattern](https://en.wikipedia.org/wiki/Design_pattern_(computer_science)) is an [event handling](https://en.wikipedia.org/wiki/Event_handling) pattern for handling service requests delivered [concurrently](https://en.wikipedia.org/wiki/Concurrency_(computer_science)) to a service handler by one or more inputs. The service handler then [demultiplexes](https://en.wikipedia.org/wiki/Demultiplex) the incoming requests and dispatches them synchronously to the associated request handlers.

![image](../../media/Concurrency-Reactor-image1.jpg)

*fig - the reactor loop*

## References

https://en.wikipedia.org/wiki/Reactor_pattern
