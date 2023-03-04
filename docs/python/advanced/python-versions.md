# Python Versions

## Python2 vs Python3

- Python 2 automatically performs integer arithmetic if both operands are integers

## New in python3.7

1. contextvars
2. dataclasses
3. **ordered dictionaries by default** (OrderedDict**preserves the order**in which the keys are inserted. A regular dict doesn't track the insertion order, and iterating it gives the values in an arbitrary order. By contrast, the order the items are inserted is remembered by OrderedDict.)

<https://docs.python.org/3/whatsnew/3.7.html>

## Why to move to Python3.7

- Fast
- Data Classes
- f-strings
- dropping support
- django support dropping for advanced versions
- **type annotations**

## Libraries for migrations

- **Six--** best for adding Python 3 compatibility to your existing Python 2 code.
- **2to3--** best for converting Python 2 code to Python 3 code.
- **Python-future--** best for those that want to focus on writing python 3 code going forward while ensuring backward compatibility with Python 2.

## Must use Python 3 Features

1. f-strings (3.6+)
2. Pathlib (3.4+)
3. Type hinting (3.5+)

    ```python
    def sentence_has_animal(sentence: str) -> bool:
        return "animal" in sentence
    ```

4. Enumerations (3.4+)
5. **Built-in LRU cache (3.2+)**

    Using decorator `@lru_cache(maxsize=512)`

6. Extended iterable unpacking (3.0+)
7. Data Classes (3.7+)
8. Implicit namespace packages (3.3+)

<https://datawhatnow.com/things-you-are-probably-not-using-in-python-3-but-should>

## Python 3.8

## Assignment Expression (Walrus operator)

```python
val = func1()
if not val:
    logging.warning('func1 no good')
    val = func2()
    if not val:
        logging.warning('func2 no good')
        val = func3()
if not val:
    raise ValueError('All went south')

# Do something with val after
```

After upgrading to 3.8, you could refactor it to:

```python
if not (val := func1()):
    logging.warning('func1 no good')
    if not (val := func2()):
        logging.warning('func2 no good')
        if not (val := func3()):
            raise ValueError('All went south')
# Do something with val after
```

## Positional Only Arguments

```python
def func(a, /):
    pass

func('foobar')
func(a='foobar') # This raises
```

## Runtime Audit Hooks

<https://docs.python.org/3/whatsnew/3.8.html>

## Python 3.9

- Dictionary Union Operators

    ```python
    a = {1: 'a', 2: 'b', 3: 'c'}
    b = {4: 'd', 5: 'e'}
    c = a | b
    print(c)
    [Out]: {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}

    a = {1: 'a', 2: 'b', 3: 'c', 6: 'in both'}
    b = {4: 'd', 5: 'e', 6: 'but different'}
    print(a | b)
    [Out]: {1: 'a', 2: 'b', 3: 'c', 6: 'but different', 4: 'd', 5: 'e'}
    ```

- Type Hinting
- Two New String Methods

    ```python
    "Hello world".removeprefix("He")
    "Hello world".removesuffix("ld")
    ```

- New Python Parser

    The new parser, based on PEG, will allow the Python developers significantly more flexibility
