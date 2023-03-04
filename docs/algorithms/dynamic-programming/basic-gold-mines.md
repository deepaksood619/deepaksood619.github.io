# Basic Gold Mines

<https://www.hackerearth.com/practice/algorithms/dynamic-programming/2-dimensional/practice-problems/algorithm/gold-mines-10>

Used Dynamic Programming

```python
# initialization
m, n = 2, 2
matrix = [[1, 2],[3, 4]]
memo = [[0 for x in range(n+1)] for y in range(m+1)]

# creating a bottom up table for memoization
for row in range(1, m+1):
    for col in range(1, n+1):
        memo[row][col] = memo[row-1][col] + memo[row][col-1] - memo[row-1][col-1] + matrix[row-1][col-1]

# for every query find the solution
x1, y1, x2, y2 = 1, 2, 2, 2
print(memo[x2][y2] - memo[x1-1][y2] - memo[x2][y1-1] + memo[x1-1][y1-1])
```
