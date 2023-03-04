# Digital Circuits

## Karnaugh Maps

TheKarnaugh map(KMorK-map) is a method of simplifying [Boolean algebra](https://en.wikipedia.org/wiki/Boolean_algebra) expressions.[Maurice Karnaugh](https://en.wikipedia.org/wiki/Maurice_Karnaugh) introduced it in 1953as a refinement of [Edward Veitch](https://en.wikipedia.org/wiki/Edward_Veitch)'s 1952Veitch chart, which actually was a rediscovery of [Allan Marquand](https://en.wikipedia.org/wiki/Allan_Marquand)'s 1881logical diagramakaMarquand diagrambut with a focus now set on its utility for switching circuits. Veitch charts are therefore also known asMarquand--Veitch diagrams, and Karnaugh maps asKarnaugh--Veitch maps(KV maps).
The Karnaugh map reduces the need for extensive calculations by taking advantage of humans' pattern-recognition capability.It also permits the rapid identification and elimination of potential [race conditions](https://en.wikipedia.org/wiki/Race_condition).
The required Boolean results are transferred from a [truth table](https://en.wikipedia.org/wiki/Truth_table) onto a two-dimensional grid where, in Karnaugh maps, the cells are ordered in [Gray code](https://en.wikipedia.org/wiki/Gray_code),  and each cell position represents one combination of input conditions, while each cell value represents the corresponding output value. Optimal groups of 1s or 0s are identified, which represent the terms of a [canonical form](https://en.wikipedia.org/wiki/Canonical_form_(Boolean_algebra)) of the logic in the original truth table.These terms can be used to write a minimal Boolean expression representing the required logic.

Karnaugh maps are used to simplify real-world logic requirements so that they can be implemented using a minimum number of physical logic gates. A [sum-of-products expression](https://en.wikipedia.org/wiki/Sum-of-products_expression) can always be implemented using [AND gates](https://en.wikipedia.org/wiki/AND_gate) feeding into an [OR gate](https://en.wikipedia.org/wiki/OR_gate), and a [product-of-sums expression](https://en.wikipedia.org/wiki/Product-of-sums_expression) leads to OR gates feeding an AND gate.Karnaugh maps can also be used to simplify logic expressions in software design. Boolean conditions, as used for example in [conditional statements](https://en.wikipedia.org/wiki/Conditional_(programming)), can get very complicated, which makes the code difficult to read and to maintain. Once minimised, canonical sum-of-products and product-of-sums expressions can be implemented directly using AND and OR logic operators.Diagrammatic and mechanical methods for minimizing simple logic expressions have existed since at least the medieval times. More systematic methods for minimizing complex expressions began to be developed in the early 1950s, but until the mid to late 1980s the Karnaugh map was the most common used in practice.
In many digital circuits and practical problems we need to find expression with minimum variables. We can minimize Boolean expressions of 3, 4 variables very easily using K-map without using any Boolean algebra theorems. K-map can take two forms Sum of Product (SOP) and Product of Sum (POS) according to the need of problem. K-map is table like representation but it gives more information than TRUTH TABLE. We fill grid of K-map with 0's and 1's then solve it by making groups.

## Steps to solve expression using K-map

1. Select K-map according to the number of variables.

2. Identify minterms or maxterms as given in problem.

3. For SOP put 1's in blocks of K-map respective to the minterms (0's elsewhere).

4. For POS put 0's in blocks of K-map respective to the maxterms(1's elsewhere).

5. Make rectangular groups containing total terms in power of two like 2,4,8 ..(except 1) and try to cover as many elements as you can in one group.

6. From the groups made in step 5 find the product terms and sum them up for SOP form.
<https://www.geeksforgeeks.org/k-mapkarnaugh-map>

<https://en.wikipedia.org/wiki/Karnaugh_map>

<https://www.tutorialspoint.com/digital_circuits/digital_circuits_k_map_method.htm>
