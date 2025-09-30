# PCEP™ – Certified Entry-Level Python Programmer

(Exam PCEP-30-0x)

- 30 Questions
- 50 Minutes
- Passing Score - 70%

PCEP™ – Certified Entry-Level Python Programmer certification shows that the individual is familiar with universal computer programming concepts like data types, containers, functions, conditions, loops, as well as Python programming language syntax, semantics, and the runtime environment.

The PCEP™ certification shows that the individual is familiar with the following concepts:

1. fundamental **terms and definitions** (e.g. compilation vs. interpretation)
2. Python's **logic and structure** (e.g. keywords, instructions, indentation)
3. **literals**, **variables**, and **numeral systems**
4. **operators** and **data types**
5. **I/O operations**
6. **control flow** mechanisms (conditional blocks and loops)
7. **data collections** (lists, tuples, dictionaries, strings)
8. **functions** (decomposition, built-in and user-defined functions, organizing interaction between functions and their environment, generators, recursion)
9. **exceptions** (exception handling, hierarchies)
10. as well as the essentials of Python programming language **syntax**, **semantics**, and **the runtime environment**

[PCEP](https://pythoninstitute.org/pcep)

[Python PCEP Practice Tests: Get Your PCEP Certification \| Udemy](https://www.udemy.com/course/python-pcep-practice-tests-get-your-pcep-certification/)

## Errors

- Which exception class is the base class for all built-in exceptions in Python? = BaseException
- Python Interpreter
- dict.items() gives tuple of key-value pair
- list.index(value) gives you index where the value is in that list
	- `list = [1,2,3]; list.index(2); output = 1`
- tuple can be declared via (1,) and not by (1)
- In Python, a for loop can optionally be followed by an else block. This else block executes only if the for loop completes its iteration over the entire sequence without encountering a break statement.
- ZeroDivisionError is a subclass of Arithmetic Error
- Shallow Copy
	- The assignment L1 = L creates an alias or reference to the same list object in memory. Both L and L1 point to the exact same list; they are essentially two names for the same underlying object. This is known as **aliasing**.
	- So, when you modify the list through one variable (e.g., L.append(7)), the change is reflected when accessing the list through the other variable (L1 in this case).
	- If you want to create a true copy of the list, where modifications to one do not affect the other, you would need to use a method like copy or use the slicing notation A to create a shallow copy
- `print(x==y or 5)` outputs 5
- `print(0o1 + 0b1 + 0x1 + 1 )` outputs 4
- TypeError vs ValueError
	- A TypeError is raised when an operation or function is applied to an object of an inappropriate or unsupported type. This means the kind of data is wrong for the intended operation.
	- A ValueError is raised when an operation or function receives an argument of the correct type, but the value itself is invalid or inappropriate for that operation. The kind of data is correct, but its content is not acceptable.

## Links

- [python-tricks](python/advanced/python-tricks.md)
