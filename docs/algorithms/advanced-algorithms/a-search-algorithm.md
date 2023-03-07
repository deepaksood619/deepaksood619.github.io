# A* Search Algorithm

The process of plotting an efficiently directed path between multiple points, called nodes.

## Used in

- **Path Finding**
- **Graph Traversals**

## Application

- **8 puzzle problem**

There are lots of algorithms that run on graphs. (Path Finding Algorithms)

| **Breadth First Search**explores equally in all directions. This is an incredibly useful algorithm, not only for regular path finding, but also for procedural map generation, flow field pathfinding, distance maps, and other types of map analysis.                                                                                                                                                   |
|------------------------------------------------------------------------|
| **Dijkstra's Algorithm** (also called Uniform Cost Search) lets us prioritize which paths to explore. Instead of exploring all possible paths equally, it favors lower cost paths. We can assign lower costs to encourage moving on roads, higher costs to avoid forests, higher costs to discourage going near enemies, and more. When movement costs vary, we use this instead of Breadth First Search. |
| **A*** is a modification of Dijkstra's Algorithm that is optimized for a single destination. Dijkstra's Algorithm can find paths to all locations; A* finds paths to one location. It prioritizes paths that seem to be leading closer to the goal.                                                                                                                                                     |

### Optimizations

- Early Exit

## Heuristic Search

- *Hamming priority function.*The number of blocks in the wrong position, plus the number of moves made so far to get to the search node. Intuitively, a search node with a small number of blocks in the wrong position is close to the goal, and we prefer a search node that have been reached using a small number of moves.
- *Manhattan priority function.*The sum of the Manhattan distances (sum of the vertical and horizontal distance) from the blocks to their goal positions, plus the number of moves made so far to get to the search node.

The standard heuristic for a square grid is the [Manhattan distance](http://en.wikipedia.org/wiki/Taxicab_geometry). Look at your cost function and find the minimum costDfor moving from one space to an adjacent space.*In the simple case, you can setDto be 1.*The heuristic on a square grid where you can move in 4 directions should beDtimes the Manhattan distance:

function heuristic(node) =
dx = abs(node.x - goal.x)
dy = abs(node.y - goal.y)
return D * (dx + dy)

- **Diagonal Distance**
- **Euclidean Distance**

## References

<https://en.wikipedia.org/wiki/A*_search_algorithm>

<http://theory.stanford.edu/~amitp/GameProgramming/AStarComparison.html>

<https://www.redblobgames.com/pathfinding/a-star/introduction.html>

<https://www.redblobgames.com/pathfinding/a-star/implementation.html>
