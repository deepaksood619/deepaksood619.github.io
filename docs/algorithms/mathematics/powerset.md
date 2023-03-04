# Powerset

### Power Set

Power set P(S) of a set S is the set of all subsets of S. For example `S = {a, b, c} then P(s) = {{}, {a}, {b}, {c}, {a,b}, {a, c}, {b, c}, {a, b, c}}`

Powerset also includes empty set and S itself

If S has n elements in it then P(s) will have 2^n elements

## Algorithm

Input: Set[], set_size

```python
Input: Set[], set_size
1. Get the size of power set
    powet_set_size = pow(2, set_size)
2  Loop for counter from 0 to pow_set_size
     (a) Loop for i = 0 to set_size
          (i) If ith bit in counter is set
               Print ith element from set for this subset
     (b) Print seperator for subsets i.e., newline
```

Running time - O(2^n^)

Running time with decoding from integer to binary - `O(2^n * log n)`

## Using Bit Manipulation

```python
possibleSubsets(A, N):
    for i = 0 to 2^N:
        for j = 0 to N:
            if jth bit is set in i:
                print A[j]
        print ‘\n’

void possibleSubsets(char A[], int N)
{
    for(int i = 0;i < (1 << N); ++i)
    {
        for(int j = 0;j < N;++j)
            if(i & (1 << j))
                cout << A[j] << ‘ ‘;
        cout << endl;
    }
}
```

## Python (Using chain and combinations)

```python
# get all subsets of a list
from itertools import chain, combinations
def all_subsets(s):
return chain(*map(lambda x: combinations(s, x), range(0, len(s)+1)))
```

<https://en.wikipedia.org/wiki/Power_set>
