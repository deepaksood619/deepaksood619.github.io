---
slug: /languages/java/defining-constants
title: Defining Constants
description: Learn how to define constants in Java with a private constructor to prevent object instantiation, enhancing code integrity and clarity.
created: 2023-03-05
updated: 2023-03-07
---
```java
public class Constants{
 /**
 The caller references the constants using<tt>Consts.EMPTY_STRING</tt>,
 and so on. Thus, the caller should be prevented from constructing objects of this class, by declaring this private constructor.
 */
 private Constants(){
 // this prevents even the native class from
 // calling this constructor as well:
 throw new AssertionError();
 }
}
```
