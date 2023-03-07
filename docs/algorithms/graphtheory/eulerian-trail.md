# Eulerian Trail

In [graph theory](https://en.wikipedia.org/wiki/Graph_theory), an **Eulerian trail** (or **Eulerian path**) is a [trail](https://en.wikipedia.org/wiki/Trail_(graph_theory)) in a finite graph which visits every [edge](https://en.wikipedia.org/wiki/Edge_(graph_theory)) exactly once. Similarly, an **Eulerian circuit** or **Eulerian cycle** is an Eulerian trail which starts and ends on the same [vertex](https://en.wikipedia.org/wiki/Vertex_(graph_theory)). They were first discussed by [Leonhard Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) while solving the famous [Seven Bridges of Königsberg](https://en.wikipedia.org/wiki/Seven_Bridges_of_K%C3%B6nigsberg) problem in 1736. The problem can be stated mathematically like this:

Given the graph in the image, is it possible to construct a path (or a [cycle](https://en.wikipedia.org/wiki/Cycle_(graph_theory)), i.e. a path starting and ending on the same vertex) which visits each edge exactly once?

The term **Eulerian graph** has two common meanings in graph theory. One meaning is a graph with an Eulerian circuit, and the other is a graph with every vertex of even degree. These definitions coincide for connected graphs.

For the existence of Eulerian trails it is necessary that zero or two vertices have an odd degree; this means the Königsberg graph is *not*Eulerian. If there are no vertices of odd degree, all Eulerian trails are circuits. If there are exactly two vertices of odd degree, all Eulerian trails start at one of them and end at the other. A graph that has an Eulerian trail but not an Eulerian circuit is called **semi-Eulerian**.
