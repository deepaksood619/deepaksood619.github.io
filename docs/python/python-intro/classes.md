# Classes

## Creating a class

```python
class Dog():
    """Represent a dog."""

    def __init__(self, name):
        """Initialize dog object."""
        self.name = name

    def sit(self):
        """Simulate sitting."""
        print(self.name + ' is sitting.")

my_dog = Dog('Tommy')
print(my_dog.name + ' is a great dog!')
my_dog.sit()
```

## Inheritance

```python
class SDog(Dog):
    """Represent a search dog."""

    def __init__(self, name):
        """Initialize the search dog."""
        super().__init__(name)

    def search(self):
        """Simulate searching."""
        print(self.name + ' is searching.')

my_dog = SDog('Lucy')

print(my_dog.name + ' is a search dog.')
my_dog.sit()
my_dog.search()
```

## Namespacing

A namespace is a mapping from names to objects. Most namespaces are currently implemented as Python dictionaries.

Example of namespaces:

- The set of built-in names (such as abs(), and built-in exception names)
- The global name in a module
- Local names in a function invocation

## Modules and attributes

Ex - modname.funcname, modname is a module object and funcname is an attribute of it.

Objects are Python's abstraction for data. All data in a Python program is represented by objects or by relations between objects.

Every object has an identity, a type and a value. An object's identity never changes once it has been created; you may think of it as the object's address in memory.

The [is](https://docs.python.org/3.2/reference/expressions.html#is) operator compares the identity of two objects;

the [id()](https://docs.python.org/3.2/library/functions.html#id) function returns an integer representing its identity (currently implemented as its address). An object'stypeis also unchangeable.

An object's mutability is determined by its type; for instance, numbers, strings and tuples are immutable, while dictionaries and lists are mutable.

Objects are never explicitly destroyed; however, when they become unreachable they may be garbage-collected. An implementation is allowed to postpone garbage collection or omit it altogether - it is a matter of implementation quality how garbage collection is implemented, as long as no objects are collected that are still reachable.

## Advanced

One can use `Collections.namedtuple` instead of classes
