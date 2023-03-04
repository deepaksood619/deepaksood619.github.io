# Mathematics

## Finding nCr for given numbers

```python
import math

def nCr(n,r):
        f = math.factorial
    return f(n) // f(r) // f(n-r)
```

Use memoization if large number of calls is to be made

## Permutation

First import itertools package to implement permutations method in python. This method takes a list as an input and return an object list of tuples that contain all permutation in a list form.

```python
# A Python program to print all
# permutations using library function
from itertools import permutations

# Get all permutations of [1, 2, 3]
perm = permutations([1, 2, 3])

# Print the obtained permutations
for i in list(perm):
    print i

Output
(1, 2, 3)
(1, 3, 2)
(2, 1, 3)
(2, 3, 1)
(3, 1, 2)
(3, 2, 1)
```

It generates n! permutations if length of input sequence is n.
If want want to get permutations of length L then implement it in this way.

```python
# A Python program to print all
# permutations of given length
from itertools import permutations

# Get all permutations of length 2
# and length 2
perm = permutations([1, 2, 3], 2)

# Print the obtained permutations
for i in list(perm):
    print i

Output
(1, 2)
(1, 3)
(2, 1)
(2, 3)
(3, 1)
(3, 2)
```

It generate nCr * r! permutations if length of input sequence is n and input parameter is r.

## Combination

This method takes a list and r (length) as an input and return an object list of tuples which contain all possible combination of length r in a list form.

```python
# A Python program to print all
# combinations of given length
from itertools import combinations

# Get all combinations of [1, 2, 3]
# and length 2
comb = combinations([1, 2, 3], 2)

# Print the obtained combinations
for i in list(comb):
    print i

Output
(1, 2)
(1, 3)
(2, 3)
```

### 1. Combinations are emitted in lexicographic sort order of input. So, if the input list is sorted, the combination tuples will be produced in sorted order

```python
# A Python program to print all combinations
# of given length with unsorted input.
from itertools import combinations

# Get all combinations of [2, 1, 3]
# and length 2
comb = combinations([2, 1, 3], 2)

# Print the obtained combinations
for i in list(comb):
    print i

Output
(2, 1)
(2, 3)
(1, 3)
```

### 2. Elements are treated as unique based on their position, not on their value. So if the input elements are unique, there will be no repeat values in each combination

```python
# A Python program to print all combinations
# of given length with duplicates in input
from itertools import combinations

# Get all combinations of [1, 1, 3]
# and length 2
comb = combinations([1, 1, 3], 2)

# Print the obtained combinations
for i in list(comb):
    print i

Output
(1, 1)
(1, 3)
(1, 3)
```

### 3. If we want to make combination of same element to same element then we use combinations_with_replacement

```python
# A Python program to print all combinations
# with an element-to-itself combination is
# also included
from itertools import combinations_with_replacement

# Get all combinations of [1, 2, 3] and length 2
comb = combinations_with_replacement([1, 2, 3], 2)

# Print the obtained combinations
for i in list(comb):
    print i

Output
(1, 1)
(1, 2)
(1, 3)
(2, 2)
(2, 3)
(3, 3)
```
