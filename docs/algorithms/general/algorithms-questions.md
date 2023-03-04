# Algorithms Questions

## Homework Problems

1. sum from 0 to given number using recursion
2. sum all digits of a given number
3. get all words available from a set of given words and a given phrase

for all words in set, check if the phrase startswith that word.

If the current phrase begins with the word, we have a split point!

Add the word to the output

Recursively call the split function on the remaining portion of the phrase - phrase[len(word):]

Egg Drop - 2 eggs, 100 floors

Generalize the problem for N floors

## Chip Firing Games

We consider the following (solitary) game: each node of a directed graph contains a pile of chips. A move consists of selecting a node with at least as many chips as its outdegree and sending one chip along each outgoing edge to its neighbors. In this talk, we try to study this game from a mathematical aspect concerning the termination of such a game, define stability, and achievement of a stable configuration, also involving the study of the Laplace operator on graphs and the use of abstract algebra in combinatorics.

## Largest Sum Contiguous Subarray - O(n)

```python
# Kadane's Algorithm
    Initialize:
        max_so_far = 0
        max_ending_here = 0
    Loop for each element of the array
    (a) max_ending_here = max_ending_here + a[i]
    (b) if(max_ending_here < 0)
                max_ending_here = 0
    (c) if(max_so_far < max_ending_here)
                max_so_far = max_ending_here
    return max_so_far

import sys

def maxSubArraySum(a,size):
 max_so_far = -sys.maxsize - 1
 max_ending_here = 0

 for i in range(0, size):
  max_ending_here += a[i]

  if max_ending_here < 0:
   max_ending_here = 0

  elif max_so_far < max_ending_here:
   max_so_far = max_ending_here

 return max_so_far

# getting start and end of subarray
def maxSubArraySum(a,size):
    max_so_far = -sys.maxsize - 1
    max_ending_here = 0
    start = 0
    end = 0
    s = 0

    for i in range(0,size):

        max_ending_here += a[i]

        if max_so_far < max_ending_here:
            max_so_far = max_ending_here
            start = s
            end = i

        if max_ending_here < 0:
            max_ending_here = 0
            s = i+1

    print(f'start {start}, end {end}')
    return max_so_far
```

<https://www.geeksforgeeks.org/largest-sum-contiguous-subarray>

## Maximum Product Subarray

<https://www.geeksforgeeks.org/maximum-product-subarray>

## Interview Problems

### Reverse a String

```python
if len(s) <= 1:
    return s
return reverse(s[1:]) + s[0]
```

### String Permutation

```python
def permute(s):
    output = []
    # Base Case
    if len(s) == 1:
        output = [s]
    else:
        # for every letter in string
        for index, value in enumerate(s):
            # for every permutation resulting from previous step
            for each_perm in permute(s[:index] + s[index+1:]):
                # Add it to output
                output.append(value + each_perm)

    return output
```

### Fibonacci Sequence

```python
if n == 0:
    return 0

if n == 1:
    return 1

return fib_rec(n-1) + fib_rec(n-2)
```

### Coin Change (using dp)

```python
def rec_coin_dyn(target, coins, known_results):
    # default output to target
    min_coins = target

    # base case
    if target in coins:
        known_results[target] = 1
        return 1

    # return a known_result if it happens to be greater than 1
    elif known_results[target] > 0:
        return known_results[target]

    else:
        # for every coin that is smaller than the target
        for i in [c for c in coins if c <= target]:

            # recursive call (add a count coin and subtract from the target)
            num_coins = 1 + rec_coin_dyn(target-i, coins, known_results)

            # reset minimum if we have a new minimum
            if num_coins < min_coins:
                min_coins = num_coins

                # reset the known results
                known_results[target] = min_coins

    return min_coins
```

### Design a data structure that supports insert, delete, search and getRandom in constant time

We can use[hashing](https://www.geeksforgeeks.org/tag/hashing/) to support first 3 operations in Θ(1) time. How to do the 4th operation? The idea is to use a resizable array (ArrayList in Java, vector in C) together with hashing.[Resizable arrays support insert in Θ(1) amortized time complexity](https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis-introduction/). To implement getRandom(), we can simply pick a random number from 0 to size-1 (size is the number of current elements) and return the element at that index. The hash map stores array values as keys and array indexes as values.

Following are detailed operations.

**insert(x)**

- Check if x is already present by doing a hash map lookup.
- If not present, then insert it at the end of the array.
- Add in the hash table also, x is added as key and last array index as the index.

**remove(x)**

- Check if x is present by doing a hash map lookup.
- If present, then find its index and remove it from a hash map.
- Swap the last element with this element in an array and remove the last element.
- Swapping is done because the last element can be removed in O(1) time.
- Update index of the last element in a hash map.

**getRandom()**

- Generate a random number from 0 to last index.
- Return the array element at the randomly generated index.

**search(x)**

- Do a lookup for x in hash map.

<https://www.geeksforgeeks.org/design-a-data-structure-that-supports-insert-delete-search-and-getrandom-in-constant-time>

<https://www.toptal.com/algorithms/mixed-integer-programming>

<https://www.hackerrank.com/interview/interview-preparation-kit>
