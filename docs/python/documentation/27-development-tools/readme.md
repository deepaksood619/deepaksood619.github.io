# 27. Development Tools

## 27.1. typing - Support for type hints

- 27.1.1. Type aliases
- 27.1.2. NewType
- 27.1.3. Callable
- 27.1.4. Generics
- 27.1.5. User-defined generic types
- 27.1.6. The Any type
- 27.1.7. Classes, functions, and decorators
- 27.2. pydoc - Documentation generator and online help system

## 27.3. doctest - Test interactive Python examples

- 27.3.1. Simple Usage: Checking Examples in Docstrings
- 27.3.2. Simple Usage: Checking Examples in a Text File
- 27.3.3. How It Works
- 27.3.3.1. Which Docstrings Are Examined?
- 27.3.3.2. How are Docstring Examples Recognized?
- 27.3.3.3. What's the Execution Context?
- 27.3.3.4. What About Exceptions?
- 27.3.3.5. Option Flags
- 27.3.3.6. Directives
- 27.3.3.7. Warnings
- 27.3.4. Basic API
- 27.3.5. Unittest API
- 27.3.6. Advanced API
- 27.3.6.1. DocTest Objects
- 27.3.6.2. Example Objects
- 27.3.6.3. DocTestFinder objects
- 27.3.6.4. DocTestParser objects
- 27.3.6.5. DocTestRunner objects
- 27.3.6.6. OutputChecker objects
- 27.3.7. Debugging
- 27.3.8. Soapbox
- 27.4. unittest - Unit testing framework
- 27.4.1. Basic example
- 27.4.2. Command-Line Interface
- 27.4.2.1. Command-line options
- 27.4.3. Test Discovery
- 27.4.4. Organizing test code
- 27.4.5. Re-using old test code
- 27.4.6. Skipping tests and expected failures
- 27.4.7. Distinguishing test iterations using subtests
- 27.4.8. Classes and functions
- 27.4.8.1. Test cases
- 27.4.8.1.1. Deprecated aliases
- 27.4.8.2. Grouping tests
- 27.4.8.3. Loading and running tests
- 27.4.8.3.1. load_tests Protocol
- 27.4.9. Class and Module Fixtures
- 27.4.9.1. setUpClass and tearDownClass
- 27.4.9.2. setUpModule and tearDownModule
- 27.4.10. Signal Handling
- 27.5. unittest.mock - mock object library
- 27.5.1. Quick Guide
- 27.5.2. The Mock Class
- 27.5.2.1. Calling
- 27.5.2.2. Deleting Attributes
- 27.5.2.3. Mock names and the name attribute
- 27.5.2.4. Attaching Mocks as Attributes
- 27.5.3. The patchers
- 27.5.3.1. patch
- 27.5.3.2. patch.object
- 27.5.3.3. patch.dict
- 27.5.3.4. patch.multiple
- 27.5.3.5. patch methods: start and stop
- 27.5.3.6. patch builtins
- 27.5.3.7. TEST_PREFIX
- 27.5.3.8. Nesting Patch Decorators
- 27.5.3.9. Where to patch
- 27.5.3.10. Patching Descriptors and Proxy Objects
- 27.5.4. MagicMock and magic method support
- 27.5.4.1. Mocking Magic Methods
- 27.5.4.2. Magic Mock
- 27.5.5. Helpers
- 27.5.5.1. sentinel
- 27.5.5.2. DEFAULT
- 27.5.5.3. call
- 27.5.5.4. create_autospec
- 27.5.5.5. ANY
- 27.5.5.6. FILTER_DIR
- 27.5.5.7. mock_open
- 27.5.5.8. Autospeccing
- 27.5.5.9. Sealing mocks
- 27.6. unittest.mock - getting started
- 27.6.1. Using Mock
- 27.6.1.1. Mock Patching Methods
- 27.6.1.2. Mock for Method Calls on an Object
- 27.6.1.3. Mocking Classes
- 27.6.1.4. Naming your mocks
- 27.6.1.5. Tracking all Calls
- 27.6.1.6. Setting Return Values and Attributes
- 27.6.1.7. Raising exceptions with mocks
- 27.6.1.8. Side effect functions and iterables
- 27.6.1.9. Creating a Mock from an Existing Object
- 27.6.2. Patch Decorators
- 27.6.3. Further Examples
- 27.6.3.1. Mocking chained calls
- 27.6.3.2. Partial mocking
- 27.6.3.3. Mocking a Generator Method
- 27.6.3.4. Applying the same patch to every test method
- 27.6.3.5. Mocking Unbound Methods
- 27.6.3.6. Checking multiple calls with mock
- 27.6.3.7. Coping with mutable arguments
- 27.6.3.8. Nesting Patches
- 27.6.3.9. Mocking a dictionary with MagicMock
- 27.6.3.10. Mock subclasses and their attributes
- 27.6.3.11. Mocking imports with patch.dict
- 27.6.3.12. Tracking order of calls and less verbose call assertions
- 27.6.3.13. More complex argument matching
- 27.7. 2to3 - Automated Python 2 to 3 code translation
- 27.7.1. Using 2to3
- 27.7.2. Fixers
- 27.7.3. lib2to3 - 2to3's library
- 27.8. test - Regression tests package for Python
- 27.8.1. Writing Unit Tests for the test package
- 27.8.2. Running tests using the command-line interface
- 27.9. test.support - Utilities for the Python test suite
- 27.10. test.support.script_helper - Utilities for the Python execution tests

<https://docs.python.org/3/library/development.html>

## typing

<https://github.com/samuelcolvin/pydantic>

Data validation and settings management using Python type hinting.

pydanticenforces type hints at runtime, and provides user friendly errors when data is invalid.

Define how data should be in pure, canonical python; validate it withpydantic.

<https://www.youtube.com/watch?v=Vj-iU-8_xLs>

## PEP 484 - Type Hints

## PEP 526 - Syntax for Variable Annotations (Python 3.6)

<https://www.toptal.com/python/streamline-your-django-settings-with-type-hints-pydantic-tutorial>

<https://www.youtube.com/watch?v=ST33zDM9vOE>

Is Python dynamically or statically typed?

Dynamically typed... but can optionally be statically typed as you want it to be.

- Types in Python

```python
import types

dir(types)

type(...)
```

- Type systems in general
- Dynamic typing in Python

Dynamic typing - Arguments and return values of functions can be any type

- Static typing in Python
- How to use static typing
- When you should use static typing
- When you shouldn't use static typing
- Migrating
  - Migrate to Python >= 3.6
  - Install a typechecker locally
  - Start optionally typing your codebase
  - Run a typechecker with your linting
  - Convince all your coworkers to join you

Type Checkers

- Static
  - mypy (Dropbox)
  - pytype (Google)
  - pyre (Facebook)
  - pyright (Microsoft)
- Dynamic
  - enforce, typeguard, typo, ducktype, strictconf, etc
