# Others

## The priority of how methods are resolved is from left to right

```python
class Mixin1(object):
 def test(self):
     print "Mixin1"

class Mixin2(object):
 def test(self):
     print "Mixin2"

class MyClass(BaseClass, Mixin1, Mixin2):
 pass
```

So in this case the Mixin2 class is the base class, extended by Mixin1 and finally by BaseClass. This is usually fine because many times the mixin classes don't override each other's, or the base class' methods. But if you do override methods or properties in your mixins this can lead to unexpected results because the priority of how methods are resolved is from left to right.

## Ensembles

https://www.dataquest.io/blog/introduction-to-ensembles

## Closures

Closures are nothing but functions that are returned by another function. We use closures to remove code duplication.

```python
def add_number(num):
        def adder(number):
            'adder is a closure'
            return num + number
        return adder

a_10 = add_number(10)
a_10(21)
31
```

*adder* is a closure which adds a given number to a pre-defined one.

## Decorators

Decorator is way to dynamically add some new behavior to some objects. We achieve the same in Python by using closures.

In the example we will create a simple example which will print some statement before and after the execution of a function.

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before call")
        result = func(*args, **kwargs)
        print("After call")
        return result
    return wrapper

@my_decorator
def add(a, b):
    "Our add function"
    return a + b

add(1, 3)
Before call
After call
4
```

## Context Managers

A context manager is an object with `__enter__` and `__exit__` methods which can be used in the with statement:

```python
with manager as var:
    do_something(var)
```

is in the simplest case equivalent to

```python
var = manager.__enter__()
try:
    do_something(var)
finally:
    manager.__exit__()
```

Example:

```python
with open('/tmp/file', 'a') as f:
    f.write('more contents\n')
```

A context manager is a Python object that provides extra contextual information to an action. This extra information takes the form of running a callable upon initiating the context using thewithstatement, as well as running a callable upon completing all the code inside thewithblock. The most well known example of using a context manager is shown here, opening on a file:

```python
with open('file.txt') as f:
    contents = f.read()
```

https://rednafi.github.io/digressions/python/2020/03/26/python-contextmanager.html

## tkinter

The [tkinter](https://docs.python.org/3/library/tkinter.html#module-tkinter) package ("Tk interface") is the standard Python interface to the Tk GUI toolkit. Both Tk and [tkinter](https://docs.python.org/3/library/tkinter.html#module-tkinter) are available on most Unix platforms, as well as on Windows systems. (Tk itself is not part of Python; it is maintained at ActiveState.)

## IDLE

IDLE is Python's Integrated Development and Learning Environment.

IDLE has the following features:

- coded in 100% pure Python, using the [tkinter](https://docs.python.org/3/library/tkinter.html#module-tkinter) GUI toolkit
- cross-platform: works mostly the same on Windows, Unix, and Mac OS X
- Python shell window (interactive interpreter) with colorizing of code input, output, and error messages
- multi-window text editor with multiple undo, Python colorizing, smart indent, call tips, auto completion, and other features
- search within any window, replace within editor windows, and search through multiple files (grep)
- debugger with persistent breakpoints, stepping, and viewing of global and local namespaces
- configuration, browsers, and other dialogs

## Facts

- Boolean is integer in Python

```python
isinstance(True, int)
True
isinstance(False, int)
True
True == 1 == 1.0 and False == 0 == 0.0
True
True + 5
6
```

## Inner Classes

https://www.datacamp.com/community/tutorials/inner-classes-python

## contextvars

This module provides APIs to manage, store, and access context-local state. The [ContextVar](https://docs.python.org/3/library/contextvars.html#contextvars.ContextVar) class is used to declare and work withContext Variables. The [copy_context()](https://docs.python.org/3/library/contextvars.html#contextvars.copy_context) function and the [Context](https://docs.python.org/3/library/contextvars.html#contextvars.Context) class should be used to manage the current context in asynchronous frameworks.

Context managers that have state should use Context Variables instead of [threading.local()](https://docs.python.org/3/library/threading.html#threading.local) to prevent their state from bleeding to other code unexpectedly, when used in concurrent code.

https://docs.python.org/3/library/contextvars.html#module-contextvars

## MicroPython

https://realpython.com/micropython

## Descriptors

Descriptors are Python objects that implement a method of thedescriptor protocol, which gives you the ability to create objects that have special behavior when they're accessed as attributes of other objects. Here you can see the correct definition of the descriptor protocol:

```python
__get__(self, obj, type=None) -> object
__set__(self, obj, value) -> None
__delete__(self, obj) -> None
__set_name__(self, owner, name)
```

If your descriptor implements just.**get**(), then it's said to be anon-data descriptor. If it implements.**set**()or.**delete**(), then it's said to be adata descriptor. Note that this difference is not just about the name, but it's also a difference in behavior. That's because data descriptors have precedence during the lookup process

https://realpython.com/python-descriptors

## ipython

IPython(Interactive Python) is a [command shell](https://en.wikipedia.org/wiki/Shell_(computing)) for interactive computing in multiple programming languages, originally developed for the [Python programming language](https://en.wikipedia.org/wiki/Python_(programming_language)), that offers [introspection](https://en.wikipedia.org/wiki/Introspection_(computer_science)), [rich media](https://en.wikipedia.org/wiki/Rich_media), shell syntax, [tab completion](https://en.wikipedia.org/wiki/Tab_completion), and history. IPython provides the following features:

- Interactive shells (terminal and [Qt](https://en.wikipedia.org/wiki/Qt_(framework))-based).
- A browser-based [notebook interface](https://en.wikipedia.org/wiki/Notebook_interface) with support for code, text, mathematical expressions, inline plots and other media.
- Support for interactive data visualization and use of GUI toolkits.
- Flexible, embeddable interpreters to load into one's own projects.
- Tools for [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing).

https://en.wikipedia.org/wiki/IPython

## Debugging using IPython.core.debugger set_trace() function

```python
from Ipython.core.debugger import set_trace

set_trace()
val = 0
for i in range(10):
    val += i
print(val)
```

Type help in ipdb input to get all the commands

## Circular Dependency

A circular dependency occurs when two or more modules depend on each other.

## Circular import

The easiest way to do so is to useimport my_modulesyntax, rather thanfrom my_module import some_object. The former will almost always work, even ifmy_moduleincluded imports us back. The latter only works ifmy_objectis already defined inmy_module, which in a circular import may not be the case.

## Packages and imports

`python -m package.standalone`

## Others

- https://dev.libreneitor.com/expert-python-topics-you-should-know
- https://realpython.com/run-python-scripts
- https://realpython.com/storing-images-in-python
- https://realpython.com/python-coding-interview-tips
- https://www.codementor.io/@arpitbhayani/how-python-implements-super-long-integers-12icwon5vk
- https://www.toptal.com/python/interview-questions
- [The Power Of The Plugin Architecture In Python](https://youtu.be/iCE1bDoit9Q)
