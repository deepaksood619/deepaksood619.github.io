# Graph Search

Graph search algorithms like A* are often used to find the shortest path from one point to another point. You can use this for each enemy to find a path to the goal. There are lots of different graph search algorithms we could use in this type of game. These are the classics:

1. One source, one destination:

- [Greedy Best First Search](http://en.wikipedia.org/wiki/Best_first_search)
- [A*](http://en.wikipedia.org/wiki/A*_search_algorithm) Use A* Search Algorithm (For Unweighted as well as Weighted Graphs) - commonly used in games

2. One source, all destinations, orall sources, one destination:

- [Breadth First Search](http://en.wikipedia.org/wiki/Breadth_first_search)- (For Unweighted Graphs)
- [Dijkstra's Algorithm](http://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)- (For Weighted Graphs without negative weights)
- [Bellman-Ford](http://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)- (For Weighted Graphs with negative weights)

3. All sources, all destinations:

- [Floyd-Warshall](http://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)
- [Johnson's Algorithm](http://en.wikipedia.org/wiki/Johnson%27s_algorithm)

There are lots of algorithms that run on graphs. I'm going to cover these:

| Breadth First Searchexplores equally in all directions. This is an incredibly useful algorithm, not only for regular path finding, but also for procedural map generation, flow field pathfinding, distance maps, and other types of map analysis.                                                                                                                                                   |
|------------------------------------------------------------------------|
| Dijkstra's Algorithm(also called Uniform Cost Search) lets us prioritize which paths to explore. Instead of exploring all possible paths equally, it favors lower cost paths. We can assign lower costs to encourage moving on roads, higher costs to avoid forests, higher costs to discourage going near enemies, and more. When movement costs vary, we use this instead of Breadth First Search. |
| A*is a modification of Dijkstra's Algorithm that is optimized for a single destination. Dijkstra's Algorithm can find paths to all locations; A* finds paths to one location. It prioritizes paths that seem to be leading closer to the goal.                                                                                                                                                     |
