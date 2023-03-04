# Coursera - Algorithms Part - 2

## Week - 1

### Undirected Graph

1. Introduction to graph
   - Adjacency Matrix
   - Adjacency List

2. Graph API
3. Depth-First Search
4. Breadth-First Search
5. Connected Components
6. Graph Challenges

### Directed Graph

1. Introduction to Digraphs
2. Digraph API
3. Digraph Search
4. Topological Sort
   - Topological order of an acyclic digraph

5. Strong Components
   - Kosaraju-Sharir algorithm for computing strong components of a digraph

6. Applications
   - Garbage Collection
   - Web Crawling

### Assignment

WordNet

## Week - 2

### Minimum Spanning Tree

1. Introduction to MSTs
2. Greedy Algorithms
3. Edge-Weighted Graph API
4. Kruskal's Algorithm
5. Prim's Algorithm
6. MST Context

### Shortest Path

1. Shortest Path APIs
2. Shortest Path Properties
3. Dijkstra's Algorithm
4. Edge-Weighted DAGs
5. Negative Weights (Bellman Ford Algorithm)

### Assignment

Seam Carving

## Week - 3

### Maximum Flow and Minimum Cut

1. Introduction to Maxflow
2. Ford-Fulkerson Algorithm
3. Maxflow-Mincut Theorem
4. Running Time Analysis
5. Java Implementation
6. Maxflow Applications

### Assignment

Baseball Elimination

### Radix Sorts

1. Strings in Java
2. Key-Indexed Counting
3. LSD Radix Sort
4. MSD Radix Sort
5. 3-way Radix Quicksort
6. Suffix Arrays

## Week - 4

### Tries

1. R-way Tries
2. Ternary Search Tries
3. Character-Based Operations

### Substring Search

1. Introduction to Substring Search
2. Brute-Force Substring Search
3. Knuth-Morris-Pratt
4. Boyer-Moore
5. Rabin-Karp

### Assignment

Boggle

## Week - 5

### Regular Expressions

1. Regular Expressions
2. Res and NFAs
3. NFA Simulation
4. NFA Construction
5. RE Applications

### Data Compression

1. Introduction
2. Run-Length Coding
3. Huffman Compression
4. LZW Compression

### Assignment

Burrows-Wheeler

## Week - 6

### Reductions

1. Introduction
2. Designing Algorithms
3. Establishing Lower Bounds
4. Classifying Problems

### Linear Programming

1. Brewer's Problem
2. Simplex Algorithm
3. Simplex Implementations
4. Linear Programming Reductions

### Intractability

1. Introduction
2. Search Problems
3. P vs NP
4. Classifying Problems
5. NP-Completeness
6. Coping with Intractability

## Interview Questions

### 1.1 Undirected Graphs

1. **Nonrecursive depth-first search.** Implement depth-first search in an undirected graph without using recursion.
2. **Diameter and center of a tree.** Given a connected graph with no cycles
    - Diameter: design a linear-time algorithm to find the longest simple path in the graph.
    - Center: design a linear-time algorithm to find a vertex such that its maximum distance from any other vertex is minimized.
3. **Euler cycle.** An Euler cycle in a graph is a cycle (not necessarily simple) that uses every edge in the graph exactly one.
    - Show that a connected graph has an Euler cycle if and only if every vertex has even degree.
    - Design a linear-time algorithm to determine whether a graph has an Euler cycle, and if so, find one.

## Assignments

### WordNet: is a semantic lexicon for the English language that is used extensively by computational linguists and cognitive scientists

WordNet groups words into sets of synonyms called *synsets*and describes semantic relationships between them.

One such relationship is the*is-a*relationship, which connects a*hyponym*(more specific synset) to a*hypernym*(more general synset).

For example,

- *animal* is a hypernym of both *bird*and *fish*;
- *bird* is a hypernym of *eagle*,*pigeon*, and *seagull*.
- Spoon is a hyponym of cutlery

## References

<http://coursera.cs.princeton.edu/algs4/assignments/wordnet.html>

<http://coursera.cs.princeton.edu/algs4/checklists/wordnet.html>

<https://github.com/CtheSky/Coursera-Algorithms/tree/master/Assignment6_WordNet>
