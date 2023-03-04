# Travelling Salesman Problem

The Traveling Salesman Problem is a well known challenge in Computer Science: it consists on finding the shortest route possible that traverses all cities in a given map only once. Although its simple explanation, this problem is, indeed, NP-Complete. This implies that the difficulty to solve it increases rapidly with the number of cities, and we do not know in fact a general solution that solves the problem. For that reason, we currently consider that any method able to find a sub-optimal solution is generally good enough (we cannot verify if the solution returned is the optimal one most of the times).

To solve it, we can try to apply a modification of the Self-Organizing Map (SOM) technique.

## Arora PTAS for Euclidean TSP

The Travelling Salesman Problem (TSP) is one of the most famous problems in Computer Science, but it turns out to be NP-Hard. It's even NP-hard to approximate it to any polynomial factor in the general case! Thankfully we can do a constant (around 1.5) approximation when the distances for which we are solving the problem come from a metric. While exactly what this constant is remains open, we know we cannot have a PTAS in the general case. What's a PTAS? It's a Polynomial Time Approximation Scheme. The idea is that you give me an epsilon, I will give you a (1+epsilon) approximation algorithm whose runtime depends on epsilon but is polynomial in n. So we have runtimes like poly(n) 2^{1/epsilon} and others.

Sanjeev Arora discovered a PTAS for TSP when the distances come from a Euclidean space a couple of decades ago. This is very good news for Uber and the like, since their distances usually come from the plane! The idea is not hard to understand, and I plan to make the talk accessible to anyone who is comfortable with Dynamic Programming.

## References

<https://diego.codes/post/som-tsp>

<https://github.com/DiegoVicen/som-tsp>
