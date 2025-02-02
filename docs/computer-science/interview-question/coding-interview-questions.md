# Coding Interview Questions

Platforms

- [https://coderpad.io](https://coderpad.io/)
- [https://codeshare.io](https://codeshare.io/)

https://foobar.withgoogle.com - print - given `n*m` print incrementally in clockwise direction

```bash
1 2 3
8 9 4
7 6 5
```

- Divide a number into perfect grid with minimum waste where number of column is fixed.

Ex - 19 should return 4/5 instead of 3/7

## Shortest range in k-sorted lists

[SHORTEST RANGE IN K SORTED LISTS - CODING INTERVIEW QUESTION AT GOOGLE, APPLE OR FACEBOOK](https://www.youtube.com/watch?v=zplklOy7ENo)

## Permutations of a given string

### Python

```python
def toString(List):
    return ''.join(List)

def permute(a, l, r):
    if l==r:
        print(toString(a))
    else:
        for i in range(l,r+1):
            a[l], a[i] = a[i], a[l]
            permute(a, l+1, r)
            a[l], a[i] = a[i], a[l]

# Driver program to test the above function
string = "ABC"
n = len(string)
a = list(string)
permute(a, 0, n-1)
```

## 2 Java

```java
void func(String str) {
    func(str, "");
}

void func (String str, String prefix) {
    if (str.length() == 0) {
        System.out.println(prefix);
} else {
    for (int i = 0; i < str.length(); i++) {
        String rem = str.substring(0, i) + str.substring(i + 1);
        func(rem, prefix + str.charAt( i ));
        }
    }
}
```

## 3 Python library functions

```python
from itertools import permutations

len(list(permutations('abcde', 5)))
```

## Others - Online links

- https://www.geeksforgeeks.org/split-the-given-array-into-k-sub-arrays-such-that-maximum-sum-of-all-sub-arrays-is-minimum
- [Design LRU Cache - GeeksforGeeks](https://www.geeksforgeeks.org/design-a-data-structure-for-lru-cache/) - (good, medium difficulty, doubly linkedin list + hashmap)
- https://practice.geeksforgeeks.org/problems/lru-cache/1- Interview (medium difficulty) - https://practice.geeksforgeeks.org/problems/largest-even-number3821/1#_=_
- Easy (5-10 mins max) - [https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1#](https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1)
- Easy (5-10 mins max) - https://practice.geeksforgeeks.org/problems/non-repeating-element3958/1
- [**https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1**](https://practice.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1)
- [**https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1**](https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1)- https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations
- https://www.geeksforgeeks.org/find-local-minima-array
- https://www.geeksforgeeks.org/equilibrium-index-of-an-array
- Given k sorted arrays of size n each, merge them and print the sorted output.
- https://www.hackerrank.com/challenges/qheap1/problem
- Easy (multiple platforms available) - [Circular Array Rotation](https://www.hackerrank.com/challenges/circular-array-rotation/problem)
- https://practice.geeksforgeeks.org/problems/sort-in-specific-order2422/1
- https://www.geeksforgeeks.org/print-nodes-at-k-distance-from-root
- https://www.geeksforgeeks.org/tree-isomorphism-problem
- https://practice.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1
- https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1- **Medium (O(n)/O(nlogn) - 10 mins, corner cases) - https://www.hackerrank.com/challenges/flatland-space-stations/problem
- Medium - https://www.hackerrank.com/challenges/bigger-is-greater/problem
- Medium - https://www.hackerrank.com/challenges/beautiful-triplets/problem
- Medium - https://www.hackerrank.com/challenges/kaprekar-numbers/problem - https://practice.geeksforgeeks.org/problems/coin-change2448/1
- Medium - [Climbing the Leaderboard | HackerRank](https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true)
- Easy - String - All languages available - [Two Strings | HackerRank](https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true)
- Good - Easy - String - Palindrome - [The Love-Letter Mystery | HackerRank](https://www.hackerrank.com/challenges/the-love-letter-mystery/problem?isFullScreen=true)

## Sources

- https://www.geeksforgeeks.org/must-coding-questions-company-wise
- https://www.geeksforgeeks.org/practice-for-cracking-any-coding-interview
- [hackerrank-solutions: A collection of solutions to competitive programming exercises on HackerRank.](https://github.com/kilian-hu/hackerrank-solutions/)

## Interview

- How do you find the missing number in a given integer array of 1 to 100?
- How do you find the third node from the end in a singly linked list?
- How do you find all pairs of an integer array whose sum is equal to a given number?
- How do you find the middle element of a singly linked list ?
- How do you reverse a singly linked list without recursion?
- How do you print the first non-repeated character from a string?
- How is a radix sort algorithm implemented?
- Write Algorithms to Check if Two String are Anagram

## Interview Questions

**Question 1** - Write a function to return first n number of elements of Fibonacci series (code must be clean and all corners cases handled)

Example - For n = 6 return [0,1,1,2,3,5]

**Question 2** - Write a function to find factorial of a number (code must be clean and all corners cases handled)

Example - `For n = 5 return 120`

Driver function

```python
n = 10000000
for i in range(0, n):
    print ( fact (random(0, n) )
```

- Write a recursive based solution
- Can you convert this recursion into non-recursive code (using for/while)
- How can you improve on the current solution (Hint: DP)

**Question 3** - Design a data structure that supports insert, delete, search and getRandom in constant time

- insert(x): Inserts an item x to the data structure if not already present
- delete(x): Removes an item x from the data structure if present
- search(x): Searches an item x in the data structure
- getRandom(): Returns a random element from current set of elements

### Question

Given an array of integers where every integer occurs three times except for one integer,

which only occurs once, find and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.

### Question

Given an array of strictly the characters 'R', 'G', and 'B',

segregate the values of the array so that all the Rs come first,

the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.
For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'],

it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

### Question

Given a sorted list of integers, square the elements and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

### Question

Write a function that prints the least integer that is not present in a given list and cannot be represented by the summation of the sub-elements of the list.

E.g. For a = [1,2,5,7] the least integer not represented by the list or a slice of the list is 4, and if a = [1,2,2,5,7 then the least non-representable integer is 18.

### Question

How would you optimally calculate p^k, where k is a non-negative integer? What is the complexity of the solution?

First, let's mention that the trivial solution has the complexity of O(k). The problem can be solved by squaring and multiplying.

We know that p^k = p^x *p^y if x+y=k. We also know that p^k = (p^a)^b if a*b=k.

For an even value of k, choosing a = 2 and b = k/2, thus having p^k = (p^2)^(k/2), will reduce the number of required multiplications almost in half. For an odd value of k, choosing x = 1 and y=k-1 will result in y being even, and we can then simply repeat the same process as for the even case. This allows us to define a recursive function:

```python
FUNCTION pow(base, exponent)
IF exponent == 0
    RETURN 1
ELSE IF exponent is even
    RETURN pow(base * base, exponent / 2)
ELSE
    RETURN base * pow(base * base, (exponent - 1) / 2)
END IF
```

This solution results in a complexity of O(log k).

## Others

- Topological sort
- Dag resolving (DAG)
- Traversals (BFS, DFS, Pre, Post, in)
- Longest Consecutive Sequence
- DAG
- LP Solver
- Subset sum
- N-Queen Problem
- Word Ladder Problem
- Knight's Tour Problem
- Find all subsets of a given set (recursion + dp)
- Find a sum in a subset
- Python | Get all substrings of given string
- https://www.geeksforgeeks.org/python-get-all-substrings-of-given-string
- Egg drop - https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11
- Find number of duplets in a positive integer array without using space in O(n) time complexity (save the information in the same array using index)
- Djkstra's algo
- Sudoku solver
- Chess solver
- B+TREE
- Finding number of duplicates in an array
- Python collision resolution
- Implementing column oriented database on disk
- Implementing hash table
- Implementing LRU
- Implementing min stack (where minimum element can be fetched in o(1))
- Implementing queue using two stack
- Implementing stack using two queue
- Find the subsequence with largest sum of elements in an array
	- https://stackoverflow.com/questions/3733251/find-the-subsequence-with-largest-sum-of-elements-in-an-array
- Maximum product subarray
- Balanced parenthesis problem

### Question - stocks

Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead

First, I wanna know how much money Icould havemade yesterday if I'd been trading Apple stocks all day.
So I grabbed Apple's stock prices from yesterday and put them ina listcalledstock_prices, where:

- The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
- The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that meansstock_prices[60] = 500.

Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

```python
stock_prices = [10, 7, 5, 8, 11, 9]
get_max_profit(stock_prices)

# Returns 6 (buying for $5 and selling for $11)
```

No "shorting" - you need to buy before you can sell. Also, you can't buyandsell in the same time step - at least 1 minute has to pass.

#### Gotchas

- You can't just take the difference between the highest price and the lowest price, because the highest price might comebeforethe lowest price. And you have to buy before you can sell.
- What if the pricegoes down all day? In that case, the best profit will benegative.
- You can do this inO(n)O(n)time andO(1)O(1)space!

#### Solution

```python
def best_profit_from_stock(stock_prices):
    profit = 0
    if stock_prices:
        min_stock = stock_prices[0]
        for i in range(1, len(stock_prices)):
            curr_profit = stock_prices[i] - min_stock
            if curr_profit > profit:
                profit = curr_profit
            else:
                min_stock = stock_prices[i]

    return profit

assert best_profit_from_stock([10, 7, 5, 8, 11, 9, 2, 10, 1]) == 8
assert best_profit_from_stock([10, 5, 7, 8]) == 3
assert best_profit_from_stock([3,2,1]) == 0
assert best_profit_from_stock([100,2]) == 0
assert best_profit_from_stock([]) == 0
assert best_profit_from_stock([1]) == 0
assert best_profit_from_stock([1,2]) == 1
assert best_profit_from_stock([1,2,3]) == 2
assert best_profit_from_stock([1,2,4]) == 3
assert best_profit_from_stock([1,2,4,100]) == 99
assert best_profit_from_stock([2,100]) == 98
assert best_profit_from_stock([-1]) == 0
assert best_profit_from_stock([-1,-2]) == 0
```

https://www.interviewcake.com/question/java/stock-price

https://www.freecodecamp.org/news/10-common-coding-interview-problems-solved

## Questions - OOPs

Design a parking lot using object-oriented principles

#### Goals

- Your solution should be in Python
- Boilerplate is provided. Feel free to change the code as you see fit

#### Assumptions

- The parking lot can hold motorcycles, cars and vans
- The parking lot has motorcycle spots, car (regular) spots and large spots
- A motorcycle can park only in motorcycle slot
- A car can park in a regular spot
- A van can park in one large spot or 3 regular spots

#### Here are a few methods that you should be able to run

- Tell us how many spots are remaining
- Tell us how many total spots are in the parking lot
- Tell us when the parking lot is full
- Tell us when the parking lot is empty
- Tell us when certain spots are full e.g. when all motorcycle spots are taken
- Tell us how many spots vans are taking up
