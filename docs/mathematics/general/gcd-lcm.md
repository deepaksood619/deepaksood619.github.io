# GCD / LCM

## GCD

Greatest Common Divisor (GCD) of two integers A and B is the **largest integer that divides both A and B.**

### Synonyms

1. Greatest Common Divisor (GCD)
2. Greatest Common Factor (GCF)
3. Highest Common Factor (HCF)
4. Highest Common Divisor (HCD)
5. Greatest Common Measure (GCM)

### Codes

```python
# using internal math library
import math
print(math.gcd(3, 6))
# Changed in version 3.9: Added support for an arbitrary number of arguments. Formerly, only two arguments were supported.

gcd = lambda a, b: gcd(b, a % b) if b > 0 else a
print(gcd(10, 7))
```

[Python math.gcd() Method](https://www.w3schools.com/python/ref_math_gcd.asp)

### Euclidean Algorithm

The **Euclidean algorithm**, or **Euclid's algorithm**, is an efficient method for computing the greatest common divisor of two numbers.

```python
def gcd(x, y):

 while (y):
  x, y = y, x%y

 return x
```

### Applications

1. Reducing fractions to their simplest form
2. Performing division in modular arithmetic
3. Computations using this algorithm form part of the cryptographic protocols that are used to secure internet communications
4. Also used for breaking cryptosystems by factoring large composite numbers
5. Solve Diophantine equations, such as finding numbers that satisfy multiple congruences according to the Chinese remainder theorem
6. To construct continued fractions
7. To find accurate rational approximations to real numbers
8. Proving theorems such as Lagrange's four square theorem and uniqueness of prime factorizations

[gcd() in Python - GeeksforGeeks](https://www.geeksforgeeks.org/gcd-in-python/)

## LCM

LCM ([Least Common Multiple](https://www.geeksforgeeks.org/least-common-multiple/)) of two numbers is the smallest number which can be divided by both numbers.

In [arithmetic](https://en.wikipedia.org/wiki/Arithmetic "Arithmetic") and [number theory](https://en.wikipedia.org/wiki/Number_theory "Number theory"), the **least common multiple**, **lowest common multiple**, or **smallest common multiple** of two [integers](https://en.wikipedia.org/wiki/Integer "Integer") _a_ and _b_, usually denoted by lcm(_a_, _b_), is the smallest positive integer that is [divisible](https://en.wikipedia.org/wiki/Divisible) by both _a_ and _b_. Since [division of integers by zero](https://en.wikipedia.org/wiki/Division_by_zero "Division by zero") is undefined, this definition has meaning only if _a_ and _b_ are both different from zero. However, some authors define lcm(_a_, 0) as 0 for all _a_, since 0 is the only common multiple of _a_ and 0.

The least common multiple of the denominators of two [fractions](https://en.wikipedia.org/wiki/Fraction_(mathematics) "Fraction (mathematics)") is the "[lowest common denominator](https://en.wikipedia.org/wiki/Lowest_common_denominator "Lowest common denominator")" (lcd), and can be used for adding, subtracting or comparing the fractions.

The least common multiple of more than two integers _a_, _b_, _c_, . . . , usually denoted by lcm(_a_, _b_, _c_, . . .), is defined as the smallest positive integer that is divisible by each of _a_, _b_, _c_, . . .

[Least common multiple - Wikipedia](https://en.wikipedia.org/wiki/Least_common_multiple)

### Codes

```python
# using internal math library
import math
math.lcm(6,9,10)

# using gcd
def lcm(a,b):
 return (a // gcd(a,b))* b
```

[Program to find LCM of two numbers - GeeksforGeeks](https://www.geeksforgeeks.org/program-to-find-lcm-of-two-numbers/)

## Links

[Mathematical Algorithms | GCD & LCM - GeeksforGeeks](https://www.geeksforgeeks.org/mathematical-algorithms/mathematical-algorithms-gcd-lcm/)
