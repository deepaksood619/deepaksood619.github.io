# Time Complexities

Big O notation (with a capital letter O, not a zero), also called **Landau's symbol,** is a symbolism used in complexity theory, computer science, and mathematics to describe the asymptotic behavior of functions. Basically, it tells you how fast a function grows or declines. It describes how the runtime or space requirement of a function grows as the input grows.

Two functions with the same Big-O notation will tend to have the same growth rate and thus have the same relative performance with large inputs.

For example, the bubble sort algorithm has an average time complexity of O(n^2) while merge sort and heap sort both have an average complexity of O(n log n). In average cases, merge sort and heap sort will demonstrate similar performance while they will both outperform bubble sort.

In the table, poly(*x*)=*x^O^*^(1)^, i.e., polynomial in*x*.

| **Name** | **Complexity class** | **Running time (T(n))** | **Examples of running times** | **Example algorithms** |
|---|---|---|---|---|
| constant time | O(1) | 10 | Determining if an integer (represented in binary) is even or odd |
| inverse Ackermann time | O(alpha(n)) |
| iterated logarithmictime | O(log*n) | Distributed coloring of cycles |
| log-logarithmic | O(log logn) | Amortized time per operation using a boundedpriority queue |
| logarithmic time | DLOGTIME | O(logn) | logn, log(n2) | Binary search |
| polylogarithmic time | poly(logn) | (logn)2 |
| fractional power (sqrt(n)) (sublinear polynomials) | O(nc)where 0 < c < 1 | n1/2,n2/3 | Integer factorization, Searching in akd-tree, Grover's algorithm (Grover's algorithmis a quantum algorithm for searching an unsorted database of n entries in O(sqrt(n))time.) (String algorithm like longest common prefix, where you do not have to see every data - small oh) |
| linear time | O(n) | n | Finding the smallest or largest item in an unsortedarray |
| "n log star n" time | O(nlog*n) | Seidel's polygon triangulationalgorithm. |
| quasilinear time/linearithmic | O(nlogn) | nlogn, logn! | Fastest possible comparison sort; Fast Fourier transform, Merge Sort |
| quadratic time | O(n2) | n2 | Bubble sort; Insertion sort; Direct convolution (Check all doubles) |
| cubic time | O(n3) | n3 | Naive multiplication of twon×nmatrices. Calculating partial correlation. (Check all triples) |
| Pseudo-polynomial time |
| polynomial time | P | 2O(logn)= poly(n) | n,nlogn,n10 | Karmarkar's algorithm for linear programming;AKS primality test |
| quasi-polynomial time | QP | 2poly(logn) | nloglogn,nlogn | Best-known O(log2n)-approximation algorithmfor the directedSteiner tree problem. |
| sub-exponential time
(first definition) | SUBEXP | O(2nε) for all ε>0 | O(2lognlog logn) | Assuming complexity theoretic conjectures,BPPis contained in SUBEXP. |
| sub-exponential time
(second definition) | 2o(n) | 2n1/3 | Best-known algorithm forinteger factorizationandgraph isomorphism |
| exponential time
(with linear exponent) | E | 2O(n) | 1.1n, 10n | Solving thetraveling salesman problemusingdynamic programming |
| exponential time | EXPTIME | 2poly(n) | 2n, 2n2 | Solvingmatrix chain multiplicationviabrute-force search (Exhaustive Search / Check all subsets) |
| factorial time | O(n!) | n! | Solving the traveling salesman problem via brute-force search |
| double exponential time | 2-EXPTIME | 22poly(n) | 22n | Deciding the truth of a given statement in Presburger arithmetic |

![image](../../media/Time-Complexities-image1.jpg)

<https://en.wikipedia.org/wiki/Time_complexity>

## Pseudo-polynomial time

In [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory), a numeric algorithm runs inpseudo-polynomial timeif its [running time](https://en.wikipedia.org/wiki/Computation_time) is a [polynomial](https://en.wikipedia.org/wiki/Polynomial) in thenumeric valueof the input (the largest integer present in the input) --- but not necessarily in thelengthof the input (the number of bits required to represent it), which is the case for [polynomial time](https://en.wikipedia.org/wiki/Polynomial_time) algorithms.

In general, the numeric value of the input is exponential in the input length, which is why a pseudo-polynomial time algorithm does not necessarily run in polynomial time with respect to the input length.

<https://en.wikipedia.org/wiki/Pseudo-polynomial_time>
