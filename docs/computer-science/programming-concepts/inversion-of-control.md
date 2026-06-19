---
slug: /computer-science/programming-concepts/inversion-of-control
title: Understanding Inversion of Control
description: Learn about Inversion of Control in software engineering and how it affects the flow of control in program architecture.
created: 2023-03-05
last_update: 2024-07-30
---
In [software engineering](https://en.m.wikipedia.org/wiki/Software_engineering), inversion of control(IoC) is a design principle in which custom-written portions of a [computer program](https://en.m.wikipedia.org/wiki/Computer_program) receive the [flow of control](https://en.m.wikipedia.org/wiki/Control_flow) from a generic [framework](https://en.m.wikipedia.org/wiki/Software_framework). A [software architecture](https://en.m.wikipedia.org/wiki/Software_architecture) with this design inverts control as compared to traditional [procedural programming](https://en.m.wikipedia.org/wiki/Procedural_programming): in traditional programming, the custom code that expresses the purpose of the program [calls](https://en.m.wikipedia.org/wiki/Function_call#Main_concepts) into reusable libraries to take care of generic tasks, but with inversion of control, it is the framework that calls into the custom, or task-specific, code.
The general concept is also related to [event-driven programming](https://en.m.wikipedia.org/wiki/Event-driven_programming) in that it is often implemented using IoC, so that the custom code is commonly only concerned with the handling of events, whereas the [event loop](https://en.m.wikipedia.org/wiki/Event_loop) and dispatch of events/messages is handled by the framework or the runtime environment.

## Links

- [Dependency Injection](computer-science/programming-concepts/dependency-injection.md)
