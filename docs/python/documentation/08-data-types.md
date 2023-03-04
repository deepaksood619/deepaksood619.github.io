# 8. Data Types

## 8.1. datetime - Basic date and time types

8.2. calendar - General calendar-related functions

## 8.3. collections - Container datatypes

8.4. collections.abc - Abstract Base Classes for Containers

## 8.5. heapq - Heap queue algorithm

8.6. bisect - Array bisection algorithm

8.7. array - Efficient arrays of numeric values

## 8.8. weakref - Weak references

8.9. types - Dynamic type creation and names for built-in types

8.10. copy - Shallow and deep copy operations

## 8.11. pprint - Data pretty printer

8.12. reprlib - Alternate repr() implementation

8.13. enum - Support for enumerations

## 8.2. calendar - General calendar-related functions

```python
import calendar
>>>
print calendar.TextCalendar(firstweekday=6).formatyear(2015)

Weekday gives the day number for the given date (0-Monday, 1- Tuesday... and so on)

print(calendar.weekday(year, month, day))

Calendar.day_name - Array storing the name to item mapping for the day name

print(calendar.day_name[calendar.weekday(year, month, day)].upper())
```

## 8.3 collections

This module implements specialized container datatypes providing alternatives to Python's general purpose built-in containers, [dict](https://docs.python.org/3/library/stdtypes.html#dict), [list](https://docs.python.org/3/library/stdtypes.html#list), [set](https://docs.python.org/3/library/stdtypes.html#set), and[tuple](https://docs.python.org/3/library/stdtypes.html#tuple).

| [namedtuple()](https://docs.python.org/3/library/collections.html#collections.namedtuple) | factory function for creating tuple subclasses with named fields     |
|---------------|---------------------------------------------------------|
| [deque](https://docs.python.org/3/library/collections.html#collections.deque)             | list-like container with fast appends and pops on either end         |
| [ChainMap](https://docs.python.org/3/library/collections.html#collections.ChainMap)       | dict-like class for creating a single view of multiple mappings      |
| [Counter](https://docs.python.org/3/library/collections.html#collections.Counter)         | dict subclass for counting hashable objects                          |
| [OrderedDict](https://docs.python.org/3/library/collections.html#collections.OrderedDict) | dict subclass that remembers the order entries were added            |
| [defaultdict](https://docs.python.org/3/library/collections.html#collections.defaultdict) | dict subclass that calls a factory function to supply missing values |
| [UserDict](https://docs.python.org/3/library/collections.html#collections.UserDict)       | wrapper around dictionary objects for easier dict subclassing        |
| [UserList](https://docs.python.org/3/library/collections.html#collections.UserList)       | wrapper around list objects for easier list subclassing              |
| [UserString](https://docs.python.org/3/library/collections.html#collections.UserString)   | wrapper around string objects for easier string subclassing          |

## collections.Counter()

A counter is a container that stores elements as dictionary keys, and their counts are stored as dictionary values.

```python
from collections import Counter
>>>
myList = [1,1,2,3,4,5,3,2,3,4,2,1,2,3]
print Counter(myList)
Counter({2: 4, 3: 4, 1: 3, 4: 2, 5: 1})
>>>
print Counter(myList).items()
[(1, 3), (2, 4), (3, 4), (4, 2), (5, 1)]
>>>
print Counter(myList).keys()
[1, 2, 3, 4, 5]
>>>
print Counter(myList).values()
[3, 4, 4, 2, 1]

If we want to know the 10 most common numbers, theCounter()instance also has amost_commonmethod that is very handy.

Count unique values in a list can be done more efficiently usingCounter() from [collections](https://docs.python.org/3.8/library/collections.html)

num_counts2 = Counter(a_long_list).
```

It is about 10 times faster than the dict version with incrementing counts

## collections.OrderedDict()

Standard Python dictionaries don't keep track of the order in which keys and values are added; they only preserve the association between each key and its value.

## OrderedDict() preserve the order in which keys and values are added

```python
from collections import OrderedDict

fav_languages = OrderedDict()

fav_languages['jen'] = ['python', 'ruby']

fav_languages['deepak'] = ['python']

# display the results, in the same order

# they were entered

for name, langs in fav_languages.items():

print(name + ":")

for lang in langs:

print("- " + lang)

## collections.defaultdict()
```

Usually, a Python dictionary throws aKeyErrorif you try to get an item with a key that is not currently in the dictionary. Thedefaultdictin contrast will simply create any items that you try to access (provided of course they do not exist yet). To create such a "default" item, it calls the function object that you pass in the constructor (more precisely, it's an arbitrary "callable" object, which includes function and type objects). For the first example, default items are created usingint(), which will return the integer object0. For the second example, default items are created usinglist(), which returns a new empty list object.

A **defaultdict** works exactly like a normal dict, but it is initialized with a function ("default factory") that takes no arguments and provides the default value for a nonexistent key.

A **defaultdict** will never raise a **KeyError**. Any key that does not exist gets the value returned by the default factory.

Returns a new dictionary-like object.[defaultdict](https://docs.python.org/3/library/collections.html#collections.defaultdict) is a subclass of the built-in[dict](https://docs.python.org/3/library/stdtypes.html#dict) class. It overrides one method and adds one writable instance variable. The remaining functionality is the same as for the[dict](https://docs.python.org/3/library/stdtypes.html#dict) class

```python
dic = {}

>>>If item in dic:

dic['found'] += 1

>>>Else:

dic['found'] = 1

The above statements can be replaced by below statement if defaultdict is used

from collections import defaultdict

dic = defaultdict(int)

>>>dic['found'] += 1

## 8.5 Heap Queue

The heapq implements a min-heap sort algorithm suitable for use with Python's lists.

import heapq

heap = []

heapq.heappush(heap, (1, 'one'))

heapq.heappush(heap, (10, 'ten'))

heapq.heappush(heap, (5,'five'))

for x in heap:

print(x)

print()

heapq.heappop(heap)

for x in heap:

print(x)

print()

# the smallest

print(heap[0])

heapq.heapreplace(heap, item)
```

Pop and return the smallest item from theheap, and also push the newitem. The heap size doesn't change. If the heap is empty, [IndexError](https://docs.python.org/3.0/library/exceptions.html#exceptions.IndexError) is raised. This is more efficient than[heappop()](https://docs.python.org/3.0/library/heapq.html#heapq.heappop) followed by[heappush()](https://docs.python.org/3.0/library/heapq.html#heapq.heappush), and can be more appropriate when using a fixed-size heap. Note that the value returned may be larger thanitem! That constrains reasonable uses of this routine unless written as part of a conditional replacement:

```python
if item > heap[0]:
item = heapreplace(heap, item)
```

<https://www.techbeamers.com/python-heapq>

<https://docs.python.org/3/library/heapq.html>

## 8.8 Weak References

The[weakref](https://docs.python.org/3/library/weakref.html#module-weakref) module allows the Python programmer to createweak referencesto objects.

A weak reference to an object is not enough to keep the object alive: when the only remaining references to a referent are weak references, [garbage collection](https://docs.python.org/3/glossary.html#term-garbage-collection) is free to destroy the referent and reuse its memory for something else. However, until the object is actually destroyed the weak reference may return the object even if there are no strong references to it.

A primary use for weak references is to implement caches or mappings holding large objects, where it's desired that a large object not be kept alive solely because it appears in a cache or mapping.

<https://docs.python.org/3/library/weakref.html>

## 8.13 Enumerations

An enumeration is a set of symbolic names (members) bound to unique, constant values. Within an enumeration, the members can be compared by identity, and the enumeration itself can be iterated over.

```python
from enum import Enum, auto

class Monster(Enum):

ZOMBIE = auto()

WARRIOR = auto()

BEAR = auto()

print(Monster.ZOMBIE)

for monster in Monster:

print(monster)
```
