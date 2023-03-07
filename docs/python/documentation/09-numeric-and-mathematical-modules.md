# 9. Numeric and Mathematical Modules

9.1. numbers - Numeric abstract base classes

9.2. math - Mathematical functions

9.3. cmath - Mathematical functions for complex numbers

9.4. decimal - Decimal fixed point and floating point arithmetic

9.5. fractions - Rational numbers

9.6. random - Generate pseudo-random numbers

## 9.7. statistics - Mathematical statistics functions

## 9.2 math

These functions cannot be used with complex numbers; use the functions of the same name from the[cmath](https://docs.python.org/3/library/cmath.html#module-cmath) module if you require support for complex numbers. The distinction between functions which support complex numbers and those which don't is made since most users do not want to learn quite as much mathematics as required to understand complex numbers. Receiving an exception instead of a complex result allows earlier detection of the unexpected complex number used as a parameter, so that the programmer can determine how and why it was generated in the first place.

## Number-theoretic and representation function

```python
1. math.ceil(x)
2. math.copysign(x, y)
3. math.fabs(x)
4. math.factorial(x)
5. math.floor(x)
6. math.fmod(x, y)
7. math.frexp(x)
8. math.fsum(iterable)
9. math.gcd(a, b)
10. math.isclose(a,b,*,rel_tol=1e-09,abs_tol=0.0)
11. math.isinfinite(x)
12. math.isinf(x)
13. math.isnan(x)
14. math.ldexp(x,i)
15. math.modf(x)
16. math.trunc(x)
```

## 9.6. random

The Pythonrandommodule provides random (pseudo-random) number generators based on theMersenne Twisteralgorithm.

9.6.1. Bookkeeping functions

```python
random.seed(a=None, version=2)
random.getstate()
random.setstate(state)
random.getrandbits(k)
```

9.6.2. Functions for integers

```python
random.randrange(stop)
random.randrange(start, stop[, step])
random.randint(a, b)
```

9.6.3. Functions for sequences

```python
random.choice(seq)
random.choices(population, weights=None, *, cum_weights=None, k=1)
    # Return a k sized list of elements chosen from the seq with replacement. If the seq is empty, raises IndexError

random.shuffle(x[, random])
random.sample(population, k)
```

9.6.4. Real-valued distributions

```python
random.random()
random.uniform(a, b)
random.triangular(low, high, mode)
random.betavariate(alpha, beta)
random.expovariate(lambd)
random.gammavariate(alpha, beta)
random.gauss(mu, sigma)
random.lognormvariate(mu, sigma)
random.normalvariate(mu, sigma)
random.vonmisesvariate(mu, kappa)
random.paretovariate(alpha)
random.weibullvariate(alpha, beta)
```

9.6.5. Alternative Generator

`class random.SystemRandom([seed])`

```python
print(random.random()) #generate a random number (0 <= x < 1.0)

print(random.uniform(1,50)) #generate a random floating point number in a specified range

print(random.randint(1,50)) #generate a random integer from a range

print(random.randrange(0, 101, 5)) #generate a random integer from a range, but with astep(of the lower bound)

t = (4, 5, 6, 10, 23)
print(random.choice(t)) #pick a random element from a sequence

''.join(random.choices(string.ascii_lowercase, k=10)
```

## 9.7. statistics - Mathematical statistics functions

## Averages and measures of central location

These functions calculate an average or typical value from a population or sample.

| [mean()](https://docs.python.org/3/library/statistics.html#statistics.mean)                     | Arithmetic mean ("average") of data.         |
|-----------------------|-------------------------------------------------|
| [harmonic_mean()](https://docs.python.org/3/library/statistics.html#statistics.harmonic_mean)   | Harmonic mean of data.                       |
| [median()](https://docs.python.org/3/library/statistics.html#statistics.median)                 | Median (middle value) of data.               |
| [median_low()](https://docs.python.org/3/library/statistics.html#statistics.median_low)         | Low median of data.                          |
| [median_high()](https://docs.python.org/3/library/statistics.html#statistics.median_high)       | High median of data.                         |
| [median_grouped()](https://docs.python.org/3/library/statistics.html#statistics.median_grouped) | Median, or 50th percentile, of grouped data. |
| [mode()](https://docs.python.org/3/library/statistics.html#statistics.mode)                     | Mode (most common value) of discrete data.   |

## Measures of spread

These functions calculate a measure of how much the population or sample tends to deviate from the typical or average values.

| [pstdev()](https://docs.python.org/3/library/statistics.html#statistics.pstdev)       | Population standard deviation of data. |
|--------------------|----------------------------------------------------|
| [pvariance()](https://docs.python.org/3/library/statistics.html#statistics.pvariance) | Population variance of data.           |
| [stdev()](https://docs.python.org/3/library/statistics.html#statistics.stdev)         | Sample standard deviation of data.     |
| [variance()](https://docs.python.org/3/library/statistics.html#statistics.variance)   | Sample variance of data.               |
