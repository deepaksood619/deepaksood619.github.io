# Euclidean Algorithm - Gcd

## Synonyms

1. Greatest Common Divisor (GCD)
2. Greatest Common Factor (GCF)
3. Highest Common Factor (HCF)
4. Highest Common Divisor (HCD)
5. Greatest Common Measure (GCM)

## GCD

Greatest Common Divisor (GCD) of two integers A and B is thel**argest integer that divides both A and B.**

## Euclidean Algorithm

the**Euclidean algorithm**, or**Euclid's algorithm**, is an efficient method for computing thegreatest common divisor of two numbers.

## Basic Euclidean Algorithm for GCD

The algorithm is based on below facts.

- If we subtract smaller number from larger (we reduce larger number), GCD doesn't change. So if we keep subtracting repeatedly the larger of two, we end up with GCD.
- Now instead of subtraction, if we divide smaller number, the algorithm stops when we find remainder 0.

## Principle

The greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number. For example, 21 is the GCD of 252 and 105 (as 252=21×12 and 105=21×5), and the same number 21 is also the GCD of 105 and 252−105=147. Since this replacement reduces the larger of the two numbers, repeating this process gives successively smaller pairs of numbers until the two numbers become equal. When that occurs, they are the GCD of the original two numbers.

By [reversing the steps](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm), the GCD can be expressed as a [sum](https://en.wikipedia.org/wiki/Linear_combination) of the two original numbers each multiplied by a positive or negative [integer](https://en.wikipedia.org/wiki/Integer), e.g.,21 = 5 × 105 + (−2) × 252.The fact that the GCD can always be expressed in this way is known as [Bézout's identity](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity).

A more efficient version of the algorithm shortcuts these steps, instead replacing the larger of the two numbers by its remainder when divided by the smaller of the two (with this version, the algorithm stops when reaching a zero remainder). With this improvement, the algorithm never requires more steps than five times the number of digits (base 10) of the smaller integer.

## Code

## Java

```java
public int GCD(int a, int b) {
 if ( b == 0 ) return a;
 else return GCD ( b,  a % b );
}
```

## Python

```python
def gcd(x, y):
 while (y):
  x, y = y, x%y
    return x
```

## Python - using math library

```python
import math
match.gcd(x,y)
```

Time Complexity:O(Log min(a, b))

## Applications

1. Reducing fractions to their simplest form

2. Performing division in modular arithmetic

3. Computations using this algorithm form part of the cryptographic protocols that are used to secure internet communications

4. Also used for breaking cryptosystems by factoring large composite numbers

5. Solve Diophantine equations, such as finding numbers that satisfy multiple congruences according to the Chinese remainder theorem

6. To construct continued fractions

7. To find accurate rational approximations to real numbers

8. Proving theorems such as Lagrange's four square theorem and uniqueness of prime factorizations

## Extended Euclidean Algorithm

Extended Euclidean algorithm also finds integer coefficients x and y such that: `ax + by = gcd(a, b)`

```python
def gcdExtended(a, b, x, y):
    # Base Case
    if a == 0 :
        x = 0
        y = 1
        return b

    x1 = 1
    y1 = 1 # To store results of recursive call
    gcd = gcdExtended(b%a, a, x1, y1)

    # Update x and y using results of recursive
    # call
    x = y1 - (b/a) * x1
    y = x1

    return gcd
```

## References

<https://en.wikipedia.org/wiki/Euclidean_algorithm>

<https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended>
