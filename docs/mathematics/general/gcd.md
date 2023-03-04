# GCD

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
def gcd(x, y):

while (y):

x, y = y, x%y

return x

## Applications

1. Reducing fractions to their simplest form

2. Performing division in modular arithmetic

3. Computations using this algorithm form part of the cryptographic protocols that are used to secure internet communications

4. Also used for breaking cryptosystems by factoring large composite numbers

5. Solve Diophantine equations, such as finding numbers that satisfy multiple congruences according to the Chinese remainder theorem

6. To construct continued fractions

7. To find accurate rational approximations to real numbers

8. Proving theorems such as Lagrange's four square theorem and uniqueness of prime factorizations
