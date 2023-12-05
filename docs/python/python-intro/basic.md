# Basic

Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another's code; too little and expressiveness is endangered. - Guido van Rossum, Creator of the Python programming language

## Identifier

A python identifier is a name used to identify a variable, function, class, module or other object. An identifier starts with a letter A to Z or a to z or an underscore (_) followed by zero or more letters, underscores and digits (0 to 9)

- Case sensitive

Naming Conventions for identifiers

- Class names start with an uppercase letter. All other identifiers start with a lowercase letter.
- Starting an identifier with a single leading underscore indicates that the identifier is private
- Starting an identifier with two leading underscores indicates a strongly private identifier
- If the identifier also ends with two trailing underscores, the identifier is a language-defined special name.

## Multi-Line Statements ()

Line continuation character () to denote that the line should continue.

For example −

```python
total = item_one +
item_two +
item_three
```

Statements contained within the [], {}, or () brackets do not need to use the line continuation character. For example −

`days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']`

## Quotation in Python

Python accepts single ('), double (") and triple (''' or """) quotes to denote string literals, as long as the same type of quote starts and ends the string.

Example-

```python
word = 'word'
sentence = "This is a sentence."
paragraph = """This is a paragraph. It is
made up of multiple lines and sentences."""
```

## Comments

Hash sign (#) that is not inside a string literal begins a comment.

## Multiple Statement on a single line

The semicolon ( ; ) allows multiple statements on the single line given that neither statement starts a new code block.

`import sys; x = 'foo'; sys.stdout.write(x + 'n')`

## Get details on module package

```python
import pickle
help(pickle)
```

Give all the details for the package

Methods with a double underscore before and after their name are considered as built-in methods. They are used by interpreters and are generally used in the implementation of overloaded operators or other built-in functionality.

## Is Python a Functional Language?

In short:No. Python is not considered a functional programming language. This is due to a family of reasons that disqualify the language, mainly due to many of Python's standard data structures being mutable and many of the basic idioms and conventions being inherently impure due to the standard library not being in a functional style.

Python was not originally designed to support functional programming, and these changes were added around 1993, two years or so after its release.1However, over the years more support and demand for functional programming abilities have meant that the Pythonfunctoolsmodule is moderately popular and well-used, especially as an easy introduction to functional programming concepts.

Another important distinction between pure functional programming languages and Python is that Python does not differentiate clearly betweenfunctionsandprocedures.

Functions are defined much like in mathematics; they map inputs (also called adomain) to outputs (also called acodomain). If the function is pure, a given input will always return the same given output. If the function istotal, it should have a valid output for every input. If not, it ispartial.

Procedures are defined as any set of code instructions that can be executed, meaning they can do much more than just return outputs on inputs. Procedures include system calls, the mutation of memory, sending and receiving IO, and more. The distinction between the two entirely depends on the existence of side effects: functions should have none, anything with side effects is a procedure.

Why does this matter? Python does not distinguish between the two in language nor convention, unlike languages such as Scheme. This means that the programmer has no way of telling if some block of code is guaranteed to not cause side effects (a function) or if it could (a procedure) which is not very conducive to efficient functional programming.

The above being said, a functional style is still easily usable in all but the most challenging situations with Python, and it is also a great way to get used to many of the concepts and terminology associated with the functional style.

## Class method and Object method

```python
b = bytes.fromhex(' aa 68 4682cc ')
b
b'xaahFx82xcc'

b.hex()
'aa684682cc'
type(b.hex())
<class 'str'>
```

As opposed to `.fromhex()`, `.hex()` is an object method, not a class method. Thus, it is invoked on an object of the `bytes` class, not on the class itself.

## Does Python allow arguments Pass by Value or Pass by Reference?

Neither the arguments are Pass by Value nor does Python supports Pass by reference. Instead, they are Pass by assignment. The parameter which you pass is originally a reference to the object not the reference to a fixed memory location. But the reference is passed by value. Additionally, some data types like strings and tuples are immutable whereas others are mutable.

## Integers between -5 to 256 are cached

The current implementation keeps an array of integer objects for all integers between -5 and 256 when you create an int in that range you actually just get back a reference to the existing object.

https://arpitbhayani.me/blogs/python-caches-integers
