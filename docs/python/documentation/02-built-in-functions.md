# 2. Built-in Functions

1. abs()
2. aiter()
3. all()
4. any()
5. anext()
6. ascii()
7. bin()
8. bool()
9. breakpoint()
10. bytearray()
11. bytes()
12. callable()
13. chr()
14. classmethod()
15. compile()
16. complex()
17. delattr()
18. dict()
19. dir()
20. divmod()
21. enumerate()
22. eval()
23. exec()
24. filter()
25. float()
26. format()
27. frozenset()
28. getattr()
29. globals()
30. hasattr()
31. hash()
32. help()
33. hex()
34. id()
35. input()
36. int()
37. isinstance()
38. issubclass()
39. iter()
40. len()
41. list()
42. locals()
43. map()
44. max()
45. memoryview()
46. min()
47. next()
48. object()
49. oct()
50. open()
51. ord()
52. pow()
53. print()
54. property()
55. range()
56. repr()
57. reversed()
58. round()
59. set()
60. setattr()
61. slice()
62. sorted()
63. staticmethod()
64. str()
65. sum()
66. super()
67. tuple()
68. type()
69. vars()
70. zip()
71. `__import__()`

## max()

With max we can pass key as an optional argument, which can specify how to find the max()

## dir()

Without arguments, return the list of names in the current local scope. With an argument, attempt to return a list of valid attributes for that object.

## divmod()

Take two (non complex) numbers as arguments and return a pair of numbers consisting of their quotient and remainder when using integer division. With mixed operand types, the rules for binary arithmetic operators apply. For integers, the result is the same as `(a//b,a%b)`. For floating point numbers the result is(q,a%b), where *q* is usually math.floor(a/b)but may be 1 less than that. In any case `q*b+a%b` is very close to *a*, if `a%b` is non-zero it has the same sign as *b*, and `0<=abs(a%b)<abs(b)`.

## vars()

Return the [`__dict__`](https://docs.python.org/3/library/stdtypes.html#object.__dict__) attribute for a module, class, instance, or any other object with a `__dict__` attribute.

- Using `<model>.__dict__` or vars(`<model>`) we can get all the attributes in a variable, with values
- Using `dir(<model>)` we can get all the attributes' names. For names with values we use `__dict__`

## zip()

This function returns a list of tuples. Theithtuple contains theithelement from each of the argument sequences or iterables.

If the argument sequences are of unequal lengths, then the returned list is truncated to the length of the shortest argument sequence.

```python
print(list(zip([1,2,3,4,5,6], 'Hacker')))

[(1, 'H'), (2, 'a'), (3, 'c'), (4, 'k'), (5, 'e'), (6, 'r')]
```

## Packing and Unpacking Arguments in Python

We use two operators `*` (for tuples) and `**` (for dictionaries)

### Unpacking

We can use `*` to unpack the list so that all elements of it can be passed as different parameters.

```python
# A sample function that takes 4 arguments
# and prints the,
def fun(a, b, c, d):
    print(a, b, c, d)

# Driver Code
my_list = [1, 2, 3, 4]

# Unpacking list into four arguments
fun(*my_list)
```

### Packing

When we don't know how many arguments need to be passed to a python function, we can use Packing to pack all arguments in a tuple.

```python
# A Python program to demonstrate use
# of packing

# This function uses packing to sum
# unknown number of arguments
def mySum(*args):
    sum = 0
    for i in range(0, len(args)):
        sum = sum + args[i]
    return sum

# Driver code
print(mySum(1, 2, 3, 4, 5))
print(mySum(10, 20))
```

## set()

Time complexity of a list to set conversion - Iterating over a list isO(n)and adding each element to the hash set isO(1), so the total operation isO(n).

set **is implemented as a [hash table](https://en.wikipedia.org/wiki/Hash_table). So you can expect to lookup/insert/ in** O(1) average. Unless your hash table's load factor is too high, then you face collisions and O(n)

delete() operation in cpython takes O(n)

## print()

<https://realpython.com/python-print>

## globals()

globals()function in Python returns the dictionary of current global symbol table.

### Symbol table

Symbol table is a data structure which contains all necessary information about the program. These include variable names, methods, classes, etc

### Global symbol table

stores all information related to the global scope of the program, and is accessed in Python using globals() method.

## locals()

Returns the dictionary of current local symbol table.

### Symbol table

It is a data structure created by compiler for which is used to store all information needed to execute a program

### Local symbol Table

This symbol table stores all information which needed to local scope of the program and this information is accessed using python built in functionlocals()

## eval()

The eval function lets a Python program run Python code within itself.

eval example (interactive shell):

```python
x = 1
eval('x + 1')
2
eval('x')
1

eval('True')
True

eval('False')
False
```

## `__call__`

The `__call__` method enables Python programmers to write classes where the instances behave like functions and can be called like a function. When the instance is called as a function; if this method is defined, `x(arg1, arg2, ...)` is a shorthand for `x.__call__(arg1, arg2, ...)`.

<https://www.geeksforgeeks.org/__call__-in-python>
