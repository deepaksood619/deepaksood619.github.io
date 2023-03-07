# Depth First Search (DFS)

Time Complexity: O(V+E) where V is number of vertices in the graph and E is number of edges in the graph.

DFS "is an algorithm for traversing or searching tree data structure. One starts at the root and explores as far as possible along each branch before backtracking." --- [Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)

DFS explores a path all the way to a leaf before backtracking and exploring another path. Let's take a look at an example with this type of traversal.

When we go deep to the leaf and backtrack, this is called DFS algorithm.

## DFS Traversal Types

1. **Pre-order [Root, Left, Right]**

2. **In-order [Left, Root, Right]**

3. **Post-order [Left, Right, Root]**

## Pre-order

![image](../../media/Depth-First-Search-(DFS)-image1.jpg)

The result for this algorithm will be 1--2--3--4--5--6--7.

1. Print the value of the node.

2. Go to the left child and print it. This is if, and only if, it has a left child.

3. Go to the right child and print it. This is if, and only if, it has a right child.

```python
def pre_order(self):
    print(self.value)

    if self.left_child:
        self.left_child.pre_order()

    if self.right_child:
        self.right_child.pre_order()
```

## In-order

![image](../../media/Depth-First-Search-(DFS)-image2.jpg)

The result of the in-order algorithm for this tree example is 3--2--4--1--6--5--7.

The left first, the middle second, and the right last.

```python
def in_order(self):
    if self.left_child:
        self.left_child.in_order()

    print(self.value)

    if self.right_child:
        self.right_child.in_order()
```

1. Go to the left child and print it. This is if, and only if, it has a left child.

2. Print the node's value

3. Go to the right child and print it. This is if, and only if, it has a right child.

## Post-order

![image](../../media/Depth-First-Search-(DFS)-image3.jpg)

The result of the post order algorithm for this tree example is 3--4--2--6--7--5--1.

The left first, the right second, and the middle last.

```python
def post_order(self):
    if self.left_child:
        self.left_child.post_order()

    if self.right_child:
        self.right_child.post_order()

    print(self.value)
```

1. Go to the left child and print it. This is if, and only if, it has a left child.

2. Go to the right child and print it. This is if, and only if, it has a right child.

3. Print the node's value

## Algorithm

DFS(to visit a vertex v)

- Mark v as visited
- Recursively visit all unmarked vertices w adjacent to v

![image](../../media/Depth-First-Search-(DFS)-image4.jpg)

## Non-Recursive

```java
public void dfs(Graph G, int v) {
    Stack<Integer> stack = new Stack<Integer>();
    stack.push(v);
    while(!stack.isEmpty()) {
        v = stack.pop();
        marked[v] = true;
        for (int w : G.adj(v)) {
            if (!marked[w])
                stack.push(w);
        }
    }
}
```

## Properties

1. DFS marks all vertices connected to s in time proportional to the sum of their degrees.

2. After DFS, we can find vertices connected to s in constant time and can find a path to s (if one exists) in time proportional to its length.

## Union-Find vs DFS

The union-find algorithm is best suited for situations where the equivalence relationship is changing, i.e., there are "Union" operations which need to be performed on your set of partitions. Given a fixed undirected graph, you don't have the equivalence relationships changing at all - the edges are all fixed. OTOH, if you have a graph with new edges being added, DFS won't cut it. While DFS is asymptotically faster than union-find, in practice, the likely deciding factor would be the actual problem that you are trying to solve.

Static graph - DFS

Dynamic graph - Union-find

## Depth First Search

Maze Graph

![image](../../media/Depth-First-Search-(DFS)-image5.jpg)

![image](../../media/Depth-First-Search-(DFS)-image6.jpg)

![image](../../media/Depth-First-Search-(DFS)-image7.jpg)

![image](../../media/Depth-First-Search-(DFS)-image8.jpg)

![image](../../media/Depth-First-Search-(DFS)-image9.jpg)

![image](../../media/Depth-First-Search-(DFS)-image4.jpg)

## Properties

1. DFS marks all vertices connected to s in time proportional to the sum of their degrees.

2. After DFS, we can find vertices connected to s in constant time and can find a path to s (if one exists) in time proportional to its length.

## Example

1. Flood fill (Photoshop magic wand)
