# Breadth First Search (BFS)

BFS "is an algorithm for traversing or searching tree data structure. It starts at the tree root and explores the neighbor nodes first, before moving to the next level neighbors."

<https://en.wikipedia.org/wiki/Breadth-first_search>

## Breadth-First Search(BFS)

BFS algorithm traverses the tree level by level and depth by depth.

![image](../../media/Breadth-First-Search-(BFS)-image1.jpg)

Here is an example that helps to better explain this algorithm:

![image](../../media/Breadth-First-Search-(BFS)-image2.jpg)

So we traverse level by level. In this example, the result is 1--2--5--3--4--6--7.

- Level/Depth 0: only node with value 1
- Level/Depth 1: nodes with values 2 and 5
- Level/Depth 2: nodes with values 3, 4, 6, and 7

Now let's code it.

```python
def bfs(self):
 queue = Queue()
 queue.put(self)

 while not queue.empty():
  current_node = queue.get()
  print(current_node.value)

  if current_node.left_child:
   queue.put(current_node.left_child)

  if current_node.right_child:
   queue.put(current_node.right_child)
```

To implement a BFS algorithm, we use the queue data structure to help.

![image](../../media/Breadth-First-Search-(BFS)-image3.jpg)

1. First add the root node into the queue with the put method.
2. Iterate while the queue is not empty.
3. Get the first node in the queue, and then print its value.
4. Add both left and right children into the queue (if the current node has children).
5. Done. We will print the value of each node, level by level, with our queue helper.

**Other Way**

Can color the vertices of the graph using 3 color, white, gray and black

- White - Initialized / Undiscovered Vetex
- Gray - Initially discovered
- Black - Completely Explored

This means that once a vetex is colored black, it has no white vertices adjacent to it.

![image](../../media/Breadth-First-Search-(BFS)-image4.jpg)

![image](../../media/Breadth-First-Search-(BFS)-image5.jpg)

**Properties**

1. BFS computes shortest paths (fewest number of edges) from s to all other vertices in a graph in time proportional to E + V.

![image](../../media/Breadth-First-Search-(BFS)-image6.jpg)
