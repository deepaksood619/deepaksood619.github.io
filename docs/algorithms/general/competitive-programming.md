# Competitive Programming Questions

### Two Pointers

1. #75 Sort Colors
2. #80 Remove Duplicates from Sorted Array II
3. #88 Merge Sorted Array
4. #457 Circular Array Loop
5. #713 Subarray Product Less Than K
6. #845 Longest Mountain in Array
7. #904 Fruit into baskets
8. #925 Long Pressed name
9. #986 Interval list intersections

### Binary Search

1. #33 Search in rotated sorted array
2. #69 Sqrt(x)
3. #153 Find min in rotated sorted array
4. #349 Intersection of two arrays
5. #441 Arranging coins
6. #475 Heaters
7. #658 Find K closest elements
8. #911 Online Election

### Hashmap

1. #463 Island Perimeter
2. #535 Encode and decode TinyURL
3. #575 Distribute Candies
4. #739 Daily Temperatures
5. #748 Shortest Completing Word
6. #811 Subdomain visit count
7. #884 Uncommon words from Twos sentences
8. #953 Verifying an Alien Dictionary
9. #961 N-Repeated Element in Size 2N Array
10. #1160 Find words that can be formed by characters
11. #1078 Occurences after bigram

### Stack

1. #496 Next Greater Element I
2. #682 Baseball Game
3. #856 Score of Parentheses
4. #946 Validate Stack Sequences
5. #1190 Reverse Substrings Between Each Pair of Parentheses
6. #1209 Remove All Adjacent Duplicates in String II

### String

1. #468 Validate IP Address
2. #522 Longest Uncommon Subsequence II
3. #539 Minimum Time Difference
4. #553 Optimal Division
5. #791 Custom Sort String
6. #833 Find and replace in String
7. #835 Image Overlap
8. #893 Groups of Special-Equivalent Strings
9. #1156 Swap For Longest Repeated Character Substring

### Sliding Window

1. #424 Longest Repeating Character Replacement
2. #1040 Moving Stones Until Consecutive II

### Tree

1. #101 Symmetric Tree
2. #108 Convert Sorted Array to Binary Search Tree
3. #226 Invert Binary Tree
4. #538 Convert BST to Greater Tree
5. #543 Diameter of a Binary Tree
6. #637 Average of Levels in Binary Tree
7. #654 Maximum Binary Tree
8. #669 Trim a Binary Search Tree
9. #589 N-ary Tree Preorder Traversal
10. #894 All Possible Full Binary Trees
11. #979 Distribute Coins in Binary Tree
12. #993 Cousins in a Binary Tree
13. #1022 Sum of Root To Leaf Binary Numbers
14. #1104 Path In Zigzag Labelled Binary Tree
15. #1110 Delete Nodes And Return Forest

## Competitive programming coding patterns

<https://levelup.gitconnected.com/dont-just-leetcode-follow-the-coding-patterns-instead-4beb6a197fdb>

## 10 golden rules for solving a coding question in an interview

- if we are dealing with top/maximum/minimum/closest k' elements among 'n' elements, we will be using a heap.
- If the given input is a sorted array or a list, we will either be using binray search or the two pointers.
- If we need to try all combinations (or permutations) of the input, we can either use backtracking or breadth first search.
- Most of the questions related to trees or graphs can be solved either through breadth first search or depth first search.
- Every recursive solution can be converted to an iterative solution using a stack.
- For a problem involving arrays, if there exists a solution in o(n^2)time and o(1) space, there must exist two other solutions:
  - using a hashmap or a set for o(n) time and o(n) space
  - using sorting for o(n log n) time and o(1) space.
- If a problem is asking for optimization (e. G. , maximization or minimization), we will be using dynamic programming.
- If we need to find some common substring among a set of strings, we will be using a hashmap or a trie.
- If we need to search/manipulate a bunch of strings, trie will be the best data structure.
- If the problem is related to a linkedlist and we can't use extra space, then use the fast & slow pointer approach.
