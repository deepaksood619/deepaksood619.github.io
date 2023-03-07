# Discrete Mathematics

Discrete mathematicsis the study of [mathematical structures](https://en.wikipedia.org/wiki/Mathematical_structures) that are fundamentally [discrete](https://en.wikipedia.org/wiki/Discrete_space) rather than [continuous](https://en.wikipedia.org/wiki/Continuous_function). In contrast to [real numbers](https://en.wikipedia.org/wiki/Real_number) that have the property of varying "smoothly", the objects studied in discrete mathematics -- such as [integers](https://en.wikipedia.org/wiki/Integer), [graphs](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)), and [statements](https://en.wikipedia.org/wiki/Statement_(logic)) in [logic](https://en.wikipedia.org/wiki/Mathematical_logic)-- do not vary smoothly in this way, but have distinct, separated values.Discrete mathematics therefore excludes topics in "continuous mathematics" such as [calculus](https://en.wikipedia.org/wiki/Calculus) or [Euclidean geometry](https://en.wikipedia.org/wiki/Euclidean_geometry). Discrete objects can often be [enumerated](https://en.wikipedia.org/wiki/Enumeration) by integers. More formally, discrete mathematics has been characterized as the branch of mathematics dealing with [countable sets](https://en.wikipedia.org/wiki/Countable_set)(finite sets or sets with the same [cardinality](https://en.wikipedia.org/wiki/Cardinality) as the natural numbers). However, there is no exact definition of the term "discrete mathematics."Indeed, discrete mathematics is described less by what is included than by what is excluded: continuously varying quantities and related notions.
The set of objects studied in discrete mathematics can be finite or infinite. The termfinite mathematicsis sometimes applied to parts of the field of discrete mathematics that deals with finite sets, particularly those areas relevant to business.
<https://en.wikipedia.org/wiki/Discrete_mathematics>

## Recurrence Relation

A recurrence relation is an equation that recursively defines a sequence where the next term is a function of the previous terms (ExpressingFnas some combination ofFiwithi<n).
Example− Fibonacci series −Fn=Fn−1+Fn−2Fn=Fn−1+Fn−2, Tower of Hanoi −Fn=2Fn−1+1

1. **Linear Recurrence Relations**

A linear recurrence equation of degree k or order k is a recurrence equation which is in the formatxn=A1xn−1+A2xn−1+A3xn−1+...Akxn−k (Anis a constant andAk≠0) on a sequence of numbers as a first-degree polynomial.
2. **Non-Homogeneous Recurrence Relation**

A recurrence relation is called non-homogeneous if it is in the form

Fn=AFn−1+BFn−2+f(n)wheref(n)≠0

Its associated homogeneous recurrence relation isFn=AFn--1+BFn−2
<https://www.tutorialspoint.com/discrete_mathematics/discrete_mathematics_recurrence_relation.htm>
In [mathematics](https://en.wikipedia.org/wiki/Mathematics), arecurrence relationis an [equation](https://en.wikipedia.org/wiki/Equation) that [recursively](https://en.wikipedia.org/wiki/Recursion) defines a [sequence](https://en.wikipedia.org/wiki/Sequence) or multidimensional array of values, once one or more initial terms are given; each further term of the sequence or array is defined as a [function](https://en.wikipedia.org/wiki/Function_(mathematics)) of the preceding terms.
The term [difference equation](https://en.wikipedia.org/wiki/Recurrence_relation#Relationship_to_difference_equations_narrowly_defined) sometimes (and for the purposes of this article) refers to a specific type of recurrence relation. However, "difference equation" is frequently used to refer toanyrecurrence relation.**Fibonacci numbers**

The recurrence of order two satisfied by the [Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number) is the archetype of a homogeneous [linear recurrence](https://en.wikipedia.org/wiki/Linear_recurrence) relation with constant coefficients. The Fibonacci sequence is defined using the recurrence

Fn = Fn-1 + Fn-2
[https://en.wikipedia.org/wiki/Recurrence_relation](https://en.wikipedia.org/wiki/Recurrence_relation#Binomial_coefficients)

## Common Recurrence Relations

| **Recurrence**         | **Algorithm**                      | **Big-Oh Solution** |
|----------------------|----------------------------------|-----------------|
| T(n) = T(n/2) + O(1)   | Binary Search                      | *O(log n)*          |
| T(n) = T(n-1) + O(1)   | Sequential Search                  | *O(n)*              |
| T(n) = 2 T(n/2) + O(1) | tree traversal                     | *O(n)*              |
| T(n) = T(n-1) + O(n)   | Selection Sort (other n^2^sorts)  | *O(n^2^)*           |
| T(n) = 2 T(n/2) + O(n) | Mergesort (average case Quicksort) | *O(n log n)*        |
<https://users.cs.duke.edu/~ola/ap/recurrence.html>
