# 4. Built-in Types

4.1. Truth Value Testing

4.2. Boolean Operations - and, or, not

4.3. Comparisons

## 4.4. Numeric Types - int, float, complex

4.5. Iterator Types

## 4.6. Sequence Types - list, tuple, range

4.7. Text Sequence Types - str

4.8. Binary Sequence Types - bytes, bytearray, memoryview

## 4.9. Set Types - set, frozenset

## 4.10. Mapping Types - dict

4.11. Context Manager Types

4.12. Other Built-in Types

4.13. Special Attributes

## integers

1.2-1.0

0.19999999999999996

round(1.2-1.0, 1)

0.2

1.1*3

3.3000000000000003

https://medium.com/code-85/how-to-stop-floating-point-arithmetic-errors-in-python-a98d3a63ccc8

https://www.geeksforgeeks.org/floating-point-error-in-python

https://betterprogramming.pub/floating-point-numbers-are-weird-in-python-heres-how-to-fix-them-51336e4ad51a

https://docs.python.org/3/tutorial/floatingpoint.html

## Bytes / bytearray

Abytesobject is immutable. If you want a binary sequence that can be modified, you should use abytearray.

It possible to create abytearrayobject directly from abytesobject, as shown below:

array_of_bytes = bytearray(b'15x80a#')

Thebytesobject is one of the core built-in types for manipulating binary data. Abytesobject is an immutable sequence of single [byte](https://en.wikipedia.org/wiki/Byte) values. Each element in abytesobject is a small integer in the range0to255.

## Other Types

1. Classes

2. Instances

3. Exception

## FrozenSet

Return a new set or frozenset object whose elements are taken from *iterable*. The elements of a set must be [hashable](https://docs.python.org/3/glossary.html#term-hashable). To represent sets of sets, the inner sets must be [frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset) objects. If *iterable*is not specified, a new empty set is returned.

## Set vs FrozenSet

The [set](https://docs.python.org/3/library/stdtypes.html#set) type is mutable - the contents can be changed using methods likeadd() andremove(). Since it is mutable, it has no hash value and cannot be used as either a dictionary key or as an element of another set. The [frozenset](https://docs.python.org/3/library/stdtypes.html#frozenset) type is immutable and [hashable](https://docs.python.org/3/glossary.html#term-hashable) - its contents cannot be altered after it is created; it can therefore be used as a dictionary key or as an element of another set.
