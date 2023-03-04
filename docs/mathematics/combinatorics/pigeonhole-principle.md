# Pigeonhole Principle

In [mathematics](https://en.wikipedia.org/wiki/Mathematics), the **pigeonhole principle** states that if *n* items are put into *m* containers, with `n>m`, then at least one container must contain more than one item.

### Example

A bag contains 10 red marbles, 10 white marbles, and 10 blue marbles. What is the minimum no. of marbles you have to choose randomly from the bag to ensure that we get 4 marbles of same color?

### Solution:Apply pigeonhole principle

No. of colors (pigeonholes) n = 3

No. of marbles (pigeons) K+1 = 4

Therefore the minimum no. of marbles required = Kn+1

By simplifying we get Kn+1 = 10.

Verification: ceil [Average] is [Kn+1/n] = 4

[Kn+1/3] = 4

Kn+1 = 10

i.e., 3 red + 3 white + 3 blue + 1(red or white or blue) = 10

## Pigeonhole principle strong form -

**Theorem:** Let q1, q2, . . . , qn be positive integers

If `q1+ q2+ . . . + qn− n + 1` objects are put into n boxes, then either the 1st box contains at least q1objects, or the 2nd box contains at least q2objects, . . ., the nth box contains at least qnobjects.

### Example -- 1

In a computer science department, a student club can be formed with either 10 members from first year or 8 members from second year or 6 from third year or 4 from final year. What is the minimum no. of students we have to choose randomly from department to ensure that a student club is formed?

### Solution

we can directly apply from the above formula where

`q1=10, q2=8, q3=6, q4=4 and n=4`

Therefore the minimum number of students required to ensure department club to be formed is

`10 + 8 + 6 + 4 -- 4 + 1 = 25`

### References

- <https://en.wikipedia.org/wiki/Pigeonhole_principle>
- <https://www.geeksforgeeks.org/discrete-mathematics-the-pigeonhole-principle>
