---
slug: /computer-science/programming-paradigms/creational-abstract-factory
title: Understanding the Abstract Factory Pattern
description: Explore the Creational Abstract Factory pattern to create compatible families of products without class dependency.
created: 2023-03-05
updated: 2023-12-05
---
An abstract factory is a generative design pattern that allows you to create families of related objects without getting attached to specific classes of created objects. The pattern is being implemented by creating an abstract class (for example - Factory), which is represented as an interface for creating system components. Then the classes that implement this interface are being written.
Pros:

- isolates specific classes;

- simplifies the replacement of the product families;

- guarantees the products' compatibility.

Cons:

- it's difficult to add support for the new kinds of products.

## References

https://py.checkio.org/blog/design-patterns-part-1
