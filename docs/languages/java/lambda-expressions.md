---
slug: /languages/java/lambda-expressions
title: Lambda Expressions
description: Discover lambda expressions, unnamed functions that simplify code with concise syntax for handling parameters and return values in programming.
created: 2023-03-05
last_update: 2023-12-06
---
A lambda expression is an unnamed function with parameters and a body.

The lambda expression body can be a block statement or an expression.

`->` separates the parameters and the body.

`(int x) -> x + 1` takes an int parameter and returns the parameter value incremented by 1.

`(int x, int y) -> x + y` takes two int parameters and returns the sum.

`(String msg)->{System.out.println(msg);}` takes a String parameter and prints it on the standard output.

`msg->System.out.println(msg)` takes a parameter and prints it on the standard output. It is identical to the code above.

`() -> "hi"` takes no parameters and returns a string.

`(String str) -> str.length()` takes a String parameter and returns its length.

The following lambda takes two int parameters and returns the maximum of the two.

```java
(int x, int y) -> {
int max = x > y ? x : y;
return max;
}
```

http://www.java2s.com/Tutorials/Java/Java_Lambda/index.htm
