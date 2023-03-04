# Questions

## What is the difference between the__str__and__repr__methods of a Python object

In short__repr__goal is to be unambigous and__str__is to be readable.

The official Python documentation says `__repr__` is used to [compute the "official" string representation of an object](http://docs.python.org/reference/datamodel.html#object.__repr__) and `__str__` is used to [compute the "informal" string representation of an object](http://docs.python.org/reference/datamodel.html#object.__str__). The print statement and str() built-in function uses `__str__` to display the string representation of the object while the `repr()` built-in function uses `__repr__` to display the object.

## Python variables are pointers?

These are called references. (They are references to objects)

Variables are not pointers. When you assign to a variable you are *binding* the name to an object. From that point onwards you can refer to the object by using the name, until that name is rebound.

## Tuples are immutable and strings are mutable

One is performance: knowing that a string is immutable makes it easy to lay it out at construction time - fixed and unchanging storage requirements. This is also one of the reasons for the distinction between tuples and lists. This also allows the implementation to safely reuse string objects. For example, the CPython implemenation uses pre-allocated objects for single-character strings, and usually returns the original string for string operations that doesn't change the content.

The other is that strings in Python are considered as "elemental" as numbers. No amount of activity will change the value 8 to anything else, and in Python, no amount of activity will change the string "eight" to anything else.

## Difference between functions and methods in Python

A function is a piece of code that is called by name. It can be passed data to operate on (i.e., the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.

```python
def sum(num1, num2):
    return num1 + num2
```

A method is a piece of code that is called by name that is associated with an object. In most respects it is identical to a function except for two key differences.

- It is implicitly passed for the object for which it was called.

- It is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).

```python
class Dog:
    def my_method(self):
        print "I am a Dog"

dog = Dog()
dog.my_method() # Prints "I am a Dog"
```

<https://realpython.com/python-coding-interview-tips>

```python
a = 1, b = 2, c = 1, Will the id of object a and c be same?

Yes, id(a) == id(c) != id(b)

Since Python doesn't create new objects for immutable data

d = 'abc'

e = 'abc'

id(e) == id(e)
```
