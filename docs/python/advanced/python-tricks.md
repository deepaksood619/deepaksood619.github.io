# Python Tricks

## Patterns for Cleaner Python

1. **Smart formatting and comma placement** can make your list, dict, or set constants easier to maintain.

2. **Underscores, dunders**
    - **Single Leading Underscore: _var**
        Naming convention indicating a name is meant for internal use. Generally not enforced by the Python interpreter (except in wildcard imports) and meant as a hint to the programmer only.

- Single Trailing Underscore: var_
  Used by convention to avoid naming conflicts with Python keywords

- Double Leading Underscore: __var
  - name mangling - the interpreter changes the name of the variable in a way that makes it harder to create collisions when the class is extended later
  - Enforced by the Python interpreter
- Double Leading and Trailing Underscore: **var**
  - Called as dunder
  - Used internally by Python, not recommended to use for user-defined functions
- Single Underscore: _
  - Temporary or insignificant
  - The result of the last expression in a Python REPL

3. **Assertions**
     - Python's assert statement is a debugging aid that tests a condition as an internal self-check in your program.
     - Asserts should only be used to help developers identify bugs - they're not a mechanism for handling run-time errors.
     - Asserts can be globally disabled with an interpreter setting.

4. **Context Managers and the with statement**
    - Handling file descriptors
    - threading.Lock class
    - Context Manager - It's a simple "protocol" (or interface) that your object needs to follow so it can be used with the *with* statement. (Add `__enter__` and `__exit__` methods)
    - We can use contextlib.contextmanager decorator to define a generator-based factory function for a resource that will automatically support the *with* statement
    - The *with* statement simplifies exception handling by encapsulating standard uses of try/finally statements in so-called Context Managers
    - Most commonly it is used to manage the safe acquisition and release of system resources. Resources are acquired by the *with* statement and released automatically when execution leaves the *with* context
    - Using *with* effectively can help you avoid resource leaks and make your code easier to read

<https://rednafi.github.io/digressions/python/2020/03/26/python-contextmanager.html>

1. **String formatting**

```python
-Old Style

'Hello, %s' % name

"Hello, Bob"

-New Style using format

'Hello, {}'.format(name)

'Hello, Bob'

-Formatted String Literals (Literal String Interpolation) (Python 3.6+)

f'Hello, {name}!'

'Hello, Bob!'

-Can embed arbitrary Python expressions
-formatted string literals are a Python parser feature that converts f-strings into a series of string constants and expressions. They then get joined up to build the final string

-Template String

from string import Template

t = Template('Hey, $name!')

t.substitute(name=name)

'Hey, Bob!'

-Safer choice for handling format strings generated from user input

-If your format strings are user-supplied, use Template Strings to avoid security issues. Otherwise, use Literal String Interpolation if you’re on Python 3.6+, and “New Style” String Formatting if you’re not.
```

## Effective Functions

1. **Python's Functions are first-class**
    - Everything in Python is an object, including functions. You can assign them to variables, store them in data structures, and pass or return them to and from other functions (first-class functions.)
    - First-class functions allow you to abstract away and pass around behavior in your programs.
    - Functions can be nested and they can capture and carry some of the parent function's state with them. Functions that do this are called closures.
    - Objects can be made callable which allows you to treat them like functions in many cases.

2. **Lambdas are single-expression functions**
    - Lambda functions are single-expression functions that are not necessarily bound to a name (anonymous).
    - Lambda functions can't use regular Python statements and always include an implicit return statement.
    - Lexical closures - a function that remembers the values from the enclosing lexical scope even when the program flow is no longer in that scope.
    - Always ask yourself: Would using a regular (named) function or a list comprehension/generator expression offer more clarity?

3. ***args and **kwargs**
    - `*args` and `**kwargs` let you write functions with a variable number of arguments in Python.
    - `*args` collects extra positional arguments as a tuple. `**kwargs` collects the extra keyword arguments as a dictionary.
    - The actual syntax is `*` and `**`. Calling them args and kwargs is just a convention (one you should stick to).
    - We can forward `*args` and `**kwargs` to parent function after modifying some properties.
    - `*args` and `**kwargs` are very helpful to create flexible APIs

4. **The power of decorators**
    - Decorators define reusable building blocks you can apply to a callable to modify its behavior without permanently modifying the callable itself.
    - The @ syntax is just a shorthand for calling the decorator on an input function. Multiple decorators on a single function are applied bottom to top (decorator stacking).
    - As a debugging best practice, use the functools.wraps helper in your own decorators to carry over metadata from the undecorated callable to the decorated one.
    - Just like any other tool in the software development toolbox, decorators are not a cure-all and they should not be overused. It's important to balance the need to "get stuff done" with the goal of "not getting tangled up in a horrible, unmaintainable code base."

[Python: How Decorators Function](https://www.youtube.com/watch?v=vtoXyxcfmUo&t=2s&ab_channel=CodingTech)
<https://realpython.com/primer-on-python-decorators>

5. **Function argument unpacking**
    - The * and ** operators can be used to "unpack" function arguments from sequences and dictionaries.
    - Using argument unpacking effectively can help you write more flexible interfaces for your modules and functions.

6. **Nothing to return here**
    - If a function doesn't specify a return value, it returns None. Whether to explicitly return None is a stylistic decision.
    - This is a core Python feature but your code might communicate its intent more clearly with an explicit return None statement.

## Classes and OOP

1. Object comparisions: is vs ==
    - An is expression evaluates to True if two variables point to the same (identical) object.
    - An == expression evaluates to True if the objects referred to by the variables are equal (have the same contents).
2. Defining your own exception classes
3. Abstract base classes keep inheritance in check
4. Namedtuples
5. Class vs instance variable pitfalls
6. Instance, class, and static methods
7. String conversion (Every class needs a `__repr__`)
8. Cloning objects for fun and profit

## Common data strucutres in Python

1. Dictionaries, Maps, and Hashtables
2. Array data structures
3. Records, structs and data transfer objects
4. Sets and multisets
5. Stacks (LIFOs)
6. Queues (FIFOs)
7. Priority Queues

## Looping and Iteration

1. Pythonic loops
2. Comprehending comprehensions
3. List slicing tricks and the sushi operator
4. Beautiful iterators
5. Generators are simplified iterators
6. Generator Expressions
7. Iterator chains

## Dictionary Tricks

1. Dictionary default values
2. Sorting dictionaries for fun and profit
3. Emulating Switch/Case statements in the West
4. Merging dictionaries
5. Dictionary Pretty-printing

## Pythonic Productivity Techniques

1. Python modules and objects
2. Isolating Project dependencies with Virtualenv
3. Peeking behind the bytecode curtain

## Misusing expressions as defaults for function arguments

```python
def foo(bar=[]): # bar is optional and defaults to [] if not specified   ...
    bar.append("baz") # but this line could be problematic, as we'll see...   ...
    return bar

foo()
["baz"]

foo()
["baz", "baz"]

foo()
["baz", "baz", "baz"]
```

Ans: the default value for a function argument is only evaluated once, at the time that the function is defined

```python
def foo(bar=None):
    if bar is None:  # or if not bar:
        bar = []
        bar.append("baz")
    return bar

foo()
["baz"]

foo()
["baz"]

foo()
["baz"]
```

If you define the default for a parameter to be a mutable object (such as []) then the "pre-computed" value is thereferenceto that object, so each call to the function will always reference the same object, which can then be mutated across multiple invocations of the function.

However, sinceNoneis an immutable built-in type, the "pre-computed" value for a default of None is simply that. So the parameter will beNoneeach time you call the function.

## Misunderstanding Python scope rules

Python scope resolution is based on what is known as the [LEGB](https://blog.mozilla.org/webdev/2011/01/31/python-scoping-understanding-legb/) rule, which is shorthand for**Local, Enclosing, Global, Built-in**.

```python
x = 10
def foo():
... x += 1
... print x
...
foo()
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
File "<stdin>", line 2, in foo
UnboundLocalError: local variable 'x' referenced before assignment
```

The above error occurs because, when you make anassignmentto a variable in a scope, that variable is automatically considered by Python to be local to that scopeand shadows any similarly named variable in any outer scope. so lst.append(10) will work but lst += [10] will not work.

## Creating circular module dependencies

Let's say you have two files, a.pyandb.py, each of which imports the other, as follows:

```python
In a.py:
import b
def f():
    return b.x

print f()
And in b.py:
import a
x = 1
def g():
    print a.f()

First, let’s try importing a.py:
import a
1
```

Worked just fine. Perhaps that surprises you. After all, we do have a circular import here which presumably should be a problem, shouldn't it?

The answer is that the merepresenceof a circular import is not in and of itself a problem in Python. If a module has already been imported, Python is smart enough not to try to re-import it. However, depending on the point at which each module is attempting to access functions or variables defined in the other, you may indeed run into problems.

So returning to our example, when we importeda.py, it had no problem importingb.py, sinceb.pydoes not require anything froma.pyto be definedat the time it is imported. The only reference inb.pytoais the call toa.f(). But that call is ing()and nothing ina.pyorb.pyinvokesg(). So life is good.

But what happens if we attempt to importb.py(without having previously importeda.py, that is):

```python
import b
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
 File "b.py", line 1, in <module>
import a
 File "a.py", line 6, in <module>
print f()
 File "a.py", line 4, in f
return b.x
AttributeError: 'module' object has no attribute 'x'
```

Uh-oh. That's not good! The problem here is that, in the process of importingb.py, it attempts to importa.py, which in turn callsf(), which attempts to accessb.x. Butb.xhas not yet been defined. Hence theAttributeErrorexception.

At least one solution to this is quite trivial. Simply modifyb.pyto importa.pywithing():

```python
x = 1

def g():
import a# This will be evaluated only when g() is called
print a.f()

No when we import it, everything is fine:

import b
b.g()
1# Printed a first time since module 'a' calls 'print f()' at the end
1# Printed a second time, this one is our call to 'g'
```

<https://www.toptal.com/python/top-10-mistakes-that-python-programmers-make>

<https://towardsdatascience.com/ten-python-development-skills-998a52f8f7c0>

- We can useinspectto view source code in the running state
- itertools.productcan be used in case of nested loops
- Usetimeitmodule overtimeto calculate running time of a function or piece of code
- Usefunctool.lru_cacheto speed up your code. It'sdesigned to speed up data acquisition
- Useatexitmodule to register your functions so that wherever you cause the program to crash, it will execute those functions that you have registered
- Read a large file by breaking it into fixed-size blocks

## [autovivification](https://en.wikipedia.org/wiki/Autovivification)

In the [Perl](https://en.wikipedia.org/wiki/Perl) programming language, autovivificationis the automatic creation of new [arrays](https://en.wikipedia.org/wiki/Array_data_structure) and [hashes](https://en.wikipedia.org/wiki/Hash_table) as required every time an undefined value is [dereferenced](https://en.wikipedia.org/wiki/Dereferencing). Perl autovivification allows a programmer to refer to a structured variable, and arbitrary sub-elements of that structured variable, without expressly declaring the existence of the variable and its complete structure beforehand.

Python's built-indictclass can be [subclassed](https://en.wikipedia.org/wiki/Subclass_(computer_science)) to implement autovivificious dictionaries simply by overriding the__missing__() method that was added to the class in Python v2.5. There are other ways of implementing the behavior, but the following is one of the simplest and instances of the class print just like normal Python dictionary objects.

```python
class Tree(dict):
...     def __missing__(self, key):
...         value = self [key] = type(self)()
...         return value

# common names by class, order, genus, and type-species
common_names = Tree()common_names ['Mammalia']['Primates']['Homo']['H. sapiens'] = 'human being'
common_names
{'Mammalia': {'Primates': {'Homo': {'H. sapiens': 'human being'}}}}

# Famous quotes by play, act, scene, and page
quotes = Tree()quotes ['Hamlet'][1][3][3] = 'This above all: to thine own self be true.'
quotes
{'Hamlet': {1: {3: {3: 'This above all: to thine own self be true.'}}}}
```
