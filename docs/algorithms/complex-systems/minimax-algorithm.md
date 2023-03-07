# MiniMax Algorithm

<https://en.wikipedia.org/wiki/Minimax>

Minimax algorithm is a decision rule used in decision theory, game theory, statistics and philosophy for minimizing the possible loss for a worst case (maximum loss) scenario.

When dealing with gains, it is referred to as "maximin" - to maximize the minimum gain. Originally formulated for two-player [zero-sum](https://en.wikipedia.org/wiki/Zero-sum)[game theory](https://en.wikipedia.org/wiki/Game_theory), covering both the cases where players take alternate moves and those where they make simultaneous moves, it has also been extended to more complex games and to general decision-making in the presence of uncertainty.

<http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-1-introduction>

Minimax is a kind of [backtracking](http://www.geeksforgeeks.org/tag/backtracking/) algorithm that is used in decision making and game theory to find the optimal move for a player, assuming that your opponent also plays optimally. It is widely used in two player turn based games such as Tic-Tac-Toe, Backgamon, Mancala, Chess, etc.

In Minimax the two players are called maximizer and minimizer. The **maximizer** tries to get the highest score possible while the **minimizer** tries to get the lowest score possible while minimizer tries to do opposite.

<http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-2-evaluation-function>

<http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move>

Create a **Game-Tree** which shows all the possible moves that an AI can take.

<http://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-4-alpha-beta-pruning>

Alpha-Beta pruning is not actually a new algorithm, rather an optimization technique for minimax algorithm. It cuts off branches in the game tree which need not be searched because there already exists a better move available. It is called Alpha-Beta pruning because it passes 2 extra parameters in the minimax function, namely alpha and beta. (It is used in AI Game algorithms like minimax algorithm to pick a faster winning move)
