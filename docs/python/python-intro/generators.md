# Generators

- Generator functions allow you to declare a function that behaves like an iterator.
- They allow programmers to make an iterator in a fast, easy, and clean way.
- Generators introduce theyieldstatement to Python. It works a bit likereturnbecause it returns a value.
- The difference is thatit saves the stateof the function. The next time the function is called, execution continues fromwhere it left off, with thesame variable valuesit had before yielding.

If we transform ourPrimesiterator into a generator, it'll look like this:

def Primes(max):

number = 1

while number < max:

number += 1

if check_prime(number):

yield number

primes = Primes(100000000000)

print(primes)

for x in primes:

print(x)

## Using Generator Expression (introduced with [PEP 289](https://www.python.org/dev/peps/pep-0289/))

primes = (i for i in range(2, 100000000000) if check_prime(i))

print(primes)

for x in primes:

print(x)

## References

<https://medium.freecodecamp.org/how-and-why-you-should-use-python-generators-f6fb56650888>
