---
slug: /languages/java/knowledge
title: Knowledge
description: Explore the relationship between parent and child classes in Java, including typecasting limitations and references in object-oriented programming.
created: 2023-03-05
last_update: 2023-03-07
---
- Parent class can hold child class reference but not vice-versa

```java
Person person = new Docter("deepak", 1, "medicine");

// Docter docter = new Person("deepak", 1);

// This cannot be done
// error: incompatible types: Person cannot be converted to Docter
```

- Parent class cannot be typecasted to Child class

```java
Person person = new Person("pooja", 2);

Docter docter = (Docter) person;

// java.lang.ClassCastException: Person cannot be cast to Docter
```
