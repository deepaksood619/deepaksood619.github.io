# Intro

Dynamic Programming is an algorithmic paradigm that solves a given complex problem by breaking it into subproblems and stores the results of subproblems to avoid computing the same results again.

The idea is very simple, If you have solved a problem with the given input, then save the result for future reference, so as to avoid solving the same problem again. shortly **'Remember your Past'**

Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for the same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.

## Overlapping Subproblem Property

In dynamic programming, computed solutions to subproblems are stored in a table so that these don't have to be recomputed.

There are following two different ways to store the values so that these values can be reused:

### Memoization (Top Down approach)

The memoized program for a problem is similar to the recursive version with a small modification that it looks into a lookup table before computing solutions. We initialize a lookup array with all initial values as NIL. Whenever we need solution to a subproblem, we first look into the lookup table. If the precomputed value is there then we return that value, otherwise we calculate the value and put the result in lookup table so that it can be reused later.

Start solving the given problem by breaking it down. If you see that the problem has been solved already, then just return the saved answer. If it has not been solved, solve it and save the answer. This is usually easy to think of and very intuitive. This is referred to as **Memoization**.

### Tabulation (Bottom up approach)

The tabulated program for a given problem builds a table in bottom up fashion and returns the last entry from table.

Analyze the problem and see the order in which the sub-problems are solved and start solving from the trivial subproblem, up towards the given problem. In this process, it is guaranteed that the subproblems are solved before solving the problem. This is referred to as **Dynamic Programming**.

|  | Tabulation | Memoization |
|---|---|---|
| **State** | State transition relation is difficult to think | State Transition relation is easy to think |
| **Code** | Code gets complicated when a lot of conditions are required | Code is easy and less complicated |
| **Speed** | Fast, as we directly access previous states from the table | Slow due to a lot of recursive calls and return statements |
| **Subproblem solving** | If all subproblems must be solved at least once, a bottom-up dynamic programming algorithm usually outperforms a top-down memoized algorithm by a constant factor | If some subproblems in the subproblem space need not be solved at all, the memoized solution has the advantage of solving only those subproblems that are definitely required |
| **Table entries** | In the Tabulated version, starting from the first entry, all entries are filled one by one | Unlike the Tabulated version, all entries of the lookup table are not necessarily filled in Memoized version. The table is filled on demand. |
| **Approach** | Generally, tabulation (dynamic programming) is an iterative approach | On the other hand, memoization is a recursive approach. |

## Optimal Substructure Property

A given problems has Optimal Substructure Property if optimal solution of the given problem can be obtained by using optimal solutions of its subproblems.

Both Tabulated and Memoized store the solutions of subproblems. In Memoized version, table is filled on demand while in Tabulated version, starting from the first entry, all entries are filled one by one. Unlike the Tabulated version, all entries of the lookup table are not necessarily filled in Memoized version.

Majority of the Dynamic Programming problems can be categorized into two types:

1. Optimization problems
2. Combinatorial problems

## Algorithms

1. Fibonacci Series
2. Edit Distance
3. Longest Common Subsequence
4. Bellman-Ford shortest path routing algorithm
5. Subset sum
6. Coin change
7. Seam Carving

## References

<https://www.geeksforgeeks.org/dynamic-programming>

<https://www.geeksforgeeks.org/introduction-to-dynamic-programming-data-structures-and-algorithm-tutorials>

<https://www.geeksforgeeks.org/dynamic-programming-set-1>

<https://www.geeksforgeeks.org/dynamic-programming-set-2-optimal-substructure-property>

<https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges>

[Dynamic Programming](https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr)
