# Iterators

An [iterator](https://en.wikipedia.org/wiki/Iterator) is an object that can be iterated (looped) upon. It is used to abstract a container of data to make it behave like an iterable object. You probably already use a few iterable objects every day: strings, lists, and dictionaries to name a few.

An iterator is defined by a class that implements the [Iterator Protocol](https://docs.python.org/3/c-api/iter.html). This protocol looks for two methods within the class: `__iter__` and `__next__`.

- Iterator save memory space
- Iterators don't compute the value of each item when instantiated. They only compute it when you ask for it. This is known as [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation). Lazy evaluation is useful when you have a very large data set to compute. It allows you to start using the data immediately, while the whole data set is being computed.

Ex - Let's say we want to get all the prime numbers that are smaller than a maximum number.

We first define the function that checks if a number is prime:

```python
def check_prime(number):
    for divisor in range(2, int(number ** 0.5) + 1):
        if number % divisor == 0:
            return False
        return True
```

Then, we define the iterator class that will include the `__iter__` and `__next__` methods:

```python
class Primes:
    def __init__(self, max):
        self.max = max
        self.number = 1

    def __iter__(self):
        return self

    def __next__(self):
        self.number += 1
        if self.number >= self.max:
            raise StopIteration
        elif check_prime(self.number):
            return self.number
        else:
            return self.__next__()
```

Primes is instantiated with a maximum value. If the next prime is greater than themax, the iterator will raise aStopIterationexception, which ends the iterator.

When we request the next element in the iterator, it will incrementnumberby 1 and check if it's a prime number. If it's not, it will call__next__again untilnumberis prime. Once it is, the iterator returns the number.

By using an iterator, we're not creating a list of prime numbers in our memory. Instead, we're generating the next prime number every time we request for it.

Let's try it out:

```python
primes = Primes(100000000000)
print(primes)
for x in primes:
print(x)
---------
<__main__.Primes object at 0x1021834a8>
2
3
5
7
11
...
```

Every iteration of thePrimesobject calls `__next__` to generate the next prime number.

Iterators can only be iterated over once.If you try to iterate overprimes again, no value will be returned. It will behave like an empty list.

## References

<https://medium.freecodecamp.org/how-and-why-you-should-use-python-generators-f6fb56650888>
