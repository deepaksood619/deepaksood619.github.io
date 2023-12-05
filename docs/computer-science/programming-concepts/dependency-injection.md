# Dependency Injection

In [software engineering](https://en.m.wikipedia.org/wiki/Software_engineering), dependency injection is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a [service](https://en.m.wikipedia.org/wiki/Service_(systems_architecture))). An injection is the passing of a dependency to a dependent object (a [client](https://en.m.wikipedia.org/wiki/Client_(computing))) that would use it. The service is made part of the client's [state](https://en.m.wikipedia.org/wiki/State_(computer_science)).Passing the service to the client, rather than allowing a client to build or [find the service](https://en.m.wikipedia.org/wiki/Service_locator_pattern), is the fundamental requirement of the pattern.

## Python Dependency Injection

An immediate issue with the code above is thatdraw_squaredepends on a global variable. This has [lots of bad consequences](http://wiki.c2.com/?GlobalVariablesAreBad), and there are two easy ways to fix it. The first would be fordraw_squareto create theTurtleinstance itself (which I'll discuss later). This might not be desirable if we want to use a singleTurtle for all our drawing. So for now, we'll simply use parameterization again to maketurtlea parameter todraw_square:

```python
from turtle import Turtle

def draw_square(turtle, size):
for i in range(0, 4):
turtle.forward(size)
turtle.left(90)

turtle = Turtle()
draw_square(turtle, 100)
```

This has a fancy name - dependency injection. It just means that if a function needs some kind of object to do its work, likedraw_squareneeds aTurtle, the caller is responsible for passing that object in as a parameter. No, really, if you were ever curious about Python dependency injection, this is it.

https://www.toptal.com/python/python-parameterized-design-patterns

### Like I'm Five

Traditional: going to a party, bring your own drinks

Inversion of control: going to a party, there is an ice chest full of drinks, and there's a guy handing out the drinks from the ice chest. You only get to drink what's been handed to you

Dependency injection: going to a party, and there's an open bar, the bartender makes your drinks, and servers brings you your drinks. You don't know what you're drinking, but it tastes good

Dependency injectionisa fancy kind of Inversion of Control, but also has a bartender & servers.

## Others

https://github.com/google/guice

Guice is a lightweight dependency injection framework for Java 6 and above.
