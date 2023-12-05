# Mocking

## The Abstract Pattern of the Problem

A dependency of the function we want to test can have an effect in three different ways: By side-effects, return values or exceptions.

### Problem 1: A dependencies side-effect

```python
def a_function():
... # Application code to be tested
a_dependency()
... # Application code to be tested
```

### Problem 2: A dependencies return value

```python
def a_function():
... # Application code to be tested
foo = a_dependency()
... # Application code to be tested; it might use foo
```

### Problem 3: A dependency throws an Exception

```python
def a_function():
... # Application code to be tested
try:
    foo = a_dependency()
except:
... # Application code to be tested
... # this might depend on the type of Exception
... # Application code to be tested
```

## The Problem - Simple Examples

Example 1: We want to add a user to a database. You can see that db does not return anything, but we change the state of our system. And we want to be sure that we don't actually change our production system when the unit tests are running!

Example 2: Generate a file name based on the current date. You can see that the dependency date time returns a value:

```python
import datetime

def generate_filename():
    return f"{datetime.datetime.now():%Y-%m-%d}.jpg"
```

Similarly, you could imagine a function which returns the weather in an English sentence and uses an API to get the actual weather ([example](https://gist.github.com/MartinThoma/5c7224ceae47e74645e0145d26dc03ec)).

Example 3: In my project [edapy](https://github.com/MartinThoma/edapy) I looked at metadata from PDF files. I use the dependency PdfFileReader and have the file itself as an dependency. As the PDF file could be broken, PyPDF2 might throw an exception. So you can imagine code like this:

```python
import PyPDF2.utils
from PyPDF2 import PdfFileReader

def get_pdf_info(pdf_path):
    info = {}
    try:
        pdf_toread = PdfFileReader(fp, strict=False)
    except PyPDF2.utils.PdfReadError:
        info["is_errornous"] = True
        return info
    # a lot more
return info
```

When you want to test such functions, you have the problem that the expected output is not only dependent on the function itself, but also on something external. In the cases above, the system time, an external service, and the file system.

## Examples for External Dependencies

There are lots of external dependencies your tests might have:

- Date or time
- Internet: A web service you need to use
- File System: A file you need to create / read / edit / delete
- Database: Data you select / insert / update/ delete
- Randomness: Your code might make use ofrandomornp.random

Just like the example above, they make isolated unit testing hard or even impossible.

## The solution: Patching

The overall strategy to test this is always the same: Replace the external dependency that is causing headaches by something in your control. The act of replacing the dependency is called **patching**, the replacement is called a **mock**. Depending on what exactly the mock does, you might also hear this being called a **Test Double, Test Stub, Test Spy or a Fake Object**. In practice in Python, the distinction does not matter.

Let's make a tiny example how to use patch!

```python
from external_dependency import dark_magic

def is_credit_card_fraud(transaction):
    fraud_probability = dark_magic(transaction)
    if fraud_probability > 0.99:
        return True
    else:
        return False

def dark_magic(transaction):
    raise ValueError()
```

No matter which transaction you would use, the function is_credit_card_fraud would throw a ValueError.

This is how you patch that dependency away with a decorator@patch:

```python
from unittest.mock import patch, MagicMock

def the_mock(input):
    return 0.999

@patch("fraud_example.dark_magic", the_mock)
def test_is_credit_card_fraud():
    import fraud_example

    transaction = {"amount_usd": "9999.99", "overnight_shipping": True}
    is_fraud = fraud_example.is_credit_card_fraud(transaction)
    assert is_fraud == True

```

And this is how you patch the dependency fraud_example.dark_magic away with a context handler ( with ... ):

```python
def test_is_credit_card_fraud_context_handler():
    import fraud_example

    transaction = {"amount_usd": "9999.99", "overnight_shipping": True}
    with patch("fraud_example.dark_magic", the_mock):
        is_fraud = fraud_example.is_credit_card_fraud(transaction)
assert is_fraud == True
```

When you now execute pytest, the test will succeed. You will always get 0.999 as a return value of dark_magic

A part that might be surprising in this example is the first parameter of the patch decorator: It's "fraud_example.dark_magic" and NOT "external_dependency.dark_magic"! The target of your replacement is always what was loaded within the file you want to test, not where it was loaded from.

## Direct replacement: Don't do this

The following is an example which does not usepatchand seems to work, but it has a big flaw. If you directly replacedatetime.datetimeinstead of patching it, it will be overwritten in all other contexts after that as well!

```python
# Core Library modules
import datetime
from unittest import mock

# First party modules
from mock_example import generate_filename

class NewDate(datetime.datetime):
    @classmethod
    def now(cls):
        return cls(1990, 4, 28)

def test_generate_filename():
    datetime.datetime = NewDate
assert generate_filename() == "1990-04-28.jpg"
```

## Mock and MagicMock

You now know how to replace a dependency, hence it is time to talk about what to replace it with. This is where unittest.mock.Mock and unittest.mock.MagicMock come into play.

Everything you do with Mock will return a Mock. Call a function? Get a Mock as a return value. Access an attribute? Get a Mock as a value.

Python has so called "magic" methods. I like the term "dunder" methods better - it just means all methods which start and end with adoubleunderscore. Examples are `__iter__` or `__contains__`. MagicMock has those defined, Mock doesn't. I would use MagicMock everywhere, except if the mocked object doesn't define any of the magic functions.

A core feature of mock classes is that they allow you to not only remove a dependency which is hard to test, but also to assert on the way the mock was interacted with. Typical methods are [assert_called](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called)(), [assert_called_with](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called_with)(), [assert_not_called](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_not_called)().

## spec, autospec & spec_set

A part that is really bad aboutMagicMockis that you can do anything with it - including accessing non-existing attributes, calling non-existing methods or calling existing methods with the wrong count of parameters. The mock object is missing aspecification. If you don't like that, useautospec=Truewhen patching the object:

patch.object(Foo, 'foo', autospec=True)

Or you can create a Mock like this:

```python
import datetime
from unittest.mock import Mock

a = Mock(spec=datetime) # Not Ok!
a.foo

Traceback (most recent call last):
File "<stdin>", line 1, in <module>
File "/home/moose/.pyenv/versions/3.8.1/lib/python3.8/unittest/mock.py", line 635, in __getattr__
raise AttributeError("Mock object has no attribute %r" % name)
AttributeError: Mock object has no attribute 'foo' # That is ok:
a.datetime
<Mock name='mock.datetime' id='139883597784544'>
```

The next parameter of **patch** is **autospec**. Where spec looks at the mocked object, autospecalso looks at the attributes of that object (and their attributes and those attributes, ...).

Finally, there is **spec_set**. That one prevents you from setting attributes that don't exist.

Usually, I would use autospec=True and spec_set=True everywhere. Code which uses introspection might be an example where you don't want that.

## pytests monkeypatch

monkeypatch is a fixture from pytest. I will explain what a fixture is in the next article. For now, just accept it as a parameter you can give to your tests without specifying it and pytest will take care of it. You don't even need to import anything.

For the credit card fraud example, it looks like this:

```python
def test_is_credit_card_fraud_monkeypatch(monkeypatch):
    monkeypatch.setattr("fraud_example.dark_magic", the_mock)
    import fraud_example

    transaction = {"amount_usd": "9999.99", "overnight_shipping": True}
    is_fraud = fraud_example.is_credit_card_fraud(transaction)
    assert is_fraud == True
```

The question when you should use `unittest.mock.patch` and - if necessary -unittest.mock.Mock or pytests monkey patch boils pretty much down to personal taste nowadays. The core Pythons patch / Mock only exist since Python 3.3 which, I guess, is a big part of the reason whymonkeypatchexists in the first place.

## External Packages

There are a couple of packages designed for simplifying the patching and giving better mocks for well-known dependencies.

For example, you can use [freezegun](https://pypi.org/project/freezegun/) for mocking the system time:

```python
import freezegun
from mock_example import generate_filenamedef test_generate_filename():

with freeze_time("1990-04-28"):
    assert generate_filename() == "1990-04-28"
```

For boto3 / botocore (Cloud-stuff), there is [moto](https://pypi.org/project/moto/).

For [requests](https://pypi.org/project/requests/), there is [responses](https://pypi.org/project/responses/):

```python
import requests

def get_ip():
    resp = requests.get("http://ip.jsontest.com/")
    return resp.json()

if __name__ == "__main__":
    print(get_ip())

from requests_example import get_ip
import responses

@responses.activate
def test_get_ip():
    responses.add(
        responses.GET,
        "http://ip.jsontest.com/",
        json={"ip": "123.456.789.0"},
        status=404,
    )
assert get_ip() == {"ip": "123.456.789.0"}
```

## Dependency Injection

If the above sounded complicated, there is a simpler alternative: Dependency Injection. Essentially adding the external state explicitly as a parameter which makes it easy to adjust in tests. For example, the code from above could be:

```python
import datetime

def generate_filename(now=None):
    if now is None:
        now = datetime.datetime.now()
    return f"{now:%Y-%m-%d}.jpg"
```

Now testing is trivial:

```python
import datetime
from mock_example import generate_filename
def test_generate_filename():
    now = datetime.datetime(1990, 4, 28)
    assert generate_filename(now) == "1990-04-28.jpg"
```

In some cases it feels very natural to apply such a pattern, in others it doesn't. Do this only when it feels natural. For example, it's very unlikely that I would ever pass a module as a parameter although it's possible. That would just feel very weird.

## Temporary files: Are Mocks a Code Smell?

It depends very much on the details, but I like to mock as little as possible. Simply for the reason that not mocking means that you test more of your system. Strictly speaking you can't call the test aunit testanymore if you test more than one unit. It would be an integration test then - but that is also essential, right? You wouldn't be happy with BMW selling you a motor, some seats and a steering wheel and claiming "all units work". They need work together. Extensive mocks might prevent you from testing how things work together.

In an ideal world, you would have both: Unit tests which are very controlled and in case of failure make it easy to narrow down the source of the error. And integration / end-to-end tests which show that the complete system works.

There are also people who think that the need to mock is an indicator for a need to refactor ([discussion](https://github.com/pytest-dev/pytest/issues/4576#issuecomment-449865322)). Harry Percival gave the talk [Stop Using Mocks (for a while)](https://www.youtube.com/watch?v=rk-f3B-eMkI) at PyCon 2020 and pointed out that testing code which is using mocks tends to be brittle as it is tightly coupled to implementation details.

A good example where I usually don't mock anything are file system interactions. If possible, I write the file just like it would be in the real application. When the test is finished, the test needs to clean up as well. I use the [tempfile](https://docs.python.org/3/library/tempfile.html) module for that.

## Dependency Injection: Randomness

Just like adding a time parameter for functions which use by default the current time might make your code way easier to test, adding arandom_stateparameter or aseedparameter to functions which use randomness helps.

Here are some ways to seed random number generators:

```python
import random
random.seed(0)
random.random()
# 0.8444218515250481

import numpy as np
np.random.seed(0)
np.random.random()
# 0.5488135039273248

random_state = np.random.RandomState(seed=0)
random_state.random()
# 0.5488135039273248
```

Setting a random state / seed is also very helpful for debugging. If you haven't heard of the Heisenbug or the Higgs-Bugson, you missed some [programming jargon](https://blog.codinghorror.com/new-programming-jargon/). And if your interested in research, reproducibility matters.

## Terminology

- **Patching vs Mocking:** Patching a function is adjusting it's functionality. In the context of unit testing we patch a dependency away; so we replace the dependency. Mocking is imitating. Usually we patch a function to use a mock we control instead of a dependency we don't control.
- **Monkey patching vs Mocking:** Within a development context, mocking is pretty clearly about unit testing ([example](https://stackoverflow.com/a/2666006/562769)). However, monkey patching has several applications besides unit testing. For example, you can patch third party code during runtime if there is a small functionality missing or a part of the code is broken. You just extend the code. Monkey patching is used in the PyCharm debugger
- **Monkey patching vs pytest.monkeypatch:** The first one is a general concept, the second one is a concrete function within pytest which applies monkey patching for unit tests.
- **unittest.mock.patch vs pytest.monkeypatch:** This is personal preference. I prefer to stick with built-ins whenever the third-party option does not have big advantages. In this case, I even think that the core Python unittest.mock.patch is cleaner. For this reason I didn't explain pytest.monkeypatch so far. If you like to see the differences, there is a nice [blog post](https://krzysztofzuraw.com/blog/2016/mocks-monkeypatching-in-python.html) about it.

## A note about Architecture

To keep your code clean, it is often a good idea to wrap third party dependencies. For example, you could have one module with deals with I/O. Or a module which deals with API requests. Then you have a couple of modules which might require a lot of mocking or where unit tests are pointless because the interesting part is the integration with the third party. The rest of your code stays easy to test, keeps the language you defined and cares about the objects you know. This is called the [Adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern).

## What else is there?

- Other types of Mocks, such as [PropertyMock](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.PropertyMock) or
- [pytest-mock](https://pypi.org/project/pytest-mock/) which provides the mocker fixture; I'm not really sure though if this is mainly a left-over from the time before Python 3.3 or if it actually makes things easier.
- The 3rd party package [mock](https://pypi.org/project/mock/), which should not be installed with Python 3.3+ as it was put in the standard library.

## Tools

### Mock Server

For any system you integrate with via HTTP or HTTPS MockServer can be used as:

- a [mock](https://www.mock-server.com/mock_server/getting_started.html) configured to return specific responses for different requests
- a [proxy](https://www.mock-server.com/proxy/getting_started.html) recording and optionally modifying requests and responses
- both a [proxy](https://www.mock-server.com/proxy/getting_started.html) for some requests and a [mock](https://www.mock-server.com/mock_server/getting_started.html) for other requests at the same time

https://www.mock-server.com

https://github.com/mock-server/mockserver

If you want to learn more about the default mocks, have a look at the awesome article by Yeray Diaz:[What the mock? - A cheatsheet for mocking in Python](https://medium.com/@yeraydiazdiaz/what-the-mock-cheatsheet-mocking-in-python-6a71db997832).

https://levelup.gitconnected.com/unit-testing-in-python-mocking-patching-and-dependency-injection-301280db2fed

https://martinfowler.com/articles/mocksArentStubs.html

https://medium.com/@yeraydiazdiaz/what-the-mock-cheatsheet-mocking-in-python-6a71db997832
