# 30. Python Runtime Services

## 30.1. sys - System-specific parameters and functions

30.2. sysconfig - Provide access to Python's configuration information

30.2.1. Configuration variables

30.2.2. Installation paths

30.2.3. Other functions

30.2.4. Using sysconfig as a script

30.3. builtins - Built-in objects

30.4. __main__ - Top-level script environment

30.5. warnings - Warning control

30.5.1. Warning Categories

30.5.2. The Warnings Filter

30.5.2.1. Describing Warning Filters

30.5.2.2. Default Warning Filter

30.5.2.3. Overriding the default filter

30.5.3. Temporarily Suppressing Warnings

30.5.4. Testing Warnings

30.5.5. Updating Code For New Versions of Dependencies

30.5.6. Available Functions

30.5.7. Available Context Managers

## 30.6. dataclasses - Data Classes

30.6.1. Module-level decorators, classes, and functions

30.6.2. Post-init processing

30.6.3. Class variables

30.6.4. Init-only variables

30.6.5. Frozen instances

30.6.6. Inheritance

30.6.7. Default factory functions

30.6.8. Mutable default values

30.6.9. Exceptions

## 30.7. contextlib - Utilities for with-statement contexts

30.7.1. Utilities

30.7.2. Examples and Recipes

30.7.2.1. Supporting a variable number of context managers

30.7.2.2. Catching exceptions from __enter__ methods

30.7.2.3. Cleaning up in an __enter__ implementation

30.7.2.4. Replacing any use of try-finally and flag variables

30.7.2.5. Using a context manager as a function decorator

30.7.3. Single use, reusable and reentrant context managers

30.7.3.1. Reentrant context managers

30.7.3.2. Reusable context managers

30.8. abc - Abstract Base Classes

## 30.9. atexit - Exit handlers

30.9.1. atexit Example

30.10. traceback - Print or retrieve a stack traceback

30.10.1. TracebackException Objects

30.10.2. StackSummary Objects

30.10.3. FrameSummary Objects

30.10.4. Traceback Examples

30.11. __future__ - Future statement definitions

30.12. gc - Garbage Collector interface

30.13. inspect - Inspect live objects

30.13.1. Types and members

30.13.2. Retrieving source code

30.13.3. Introspecting callables with the Signature object

30.13.4. Classes and functions

30.13.5. The interpreter stack

30.13.6. Fetching attributes statically

30.13.7. Current State of Generators and Coroutines

30.13.8. Code Objects Bit Flags

30.13.9. Command Line Interface

30.14. site - Site-specific configuration hook

30.14.1. Readline configuration

30.14.2. Module contents

## Sys Module

```python
import sys

sys.getrecursionlimit() #default 3000

sys.setrecursionlimit(86400)
```

## Garbage collection

Standard CPython's garbage collector has two components, the [reference counting](https://en.wikipedia.org/wiki/Reference_counting) collector and the generationalgarbage collector, known as [gc module](https://docs.python.org/3.6/library/gc.html).

Thereference countingalgorithm is incredibly efficient and straightforward, but it cannot detect reference cycles. That is why Python has a supplemental algorithm called generational cyclic GC, that deals with reference cycles.

The reference counting is fundamental to Python and can't be disabled, whereas the cyclic GC is optional and can be used manually.

You can always check the number of current references usingsys.getrefcountfunction.

```python
gc.disable()

gc.isenabled()

gc.enable()

gc.collect()
```

## References

<https://pythonhosted.org/Pympler/muppy.html>

<https://rushter.com/blog/python-garbage-collector>
