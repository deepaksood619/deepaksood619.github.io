# Data Structure

## Built-in data structures

1. List
2. Tuples
   - namedtuples
3. Dictionaries
   - defaultdict
4. Sets
5. Queue
   - PriorityQueue
6. Array

An array is a vector containing homogeneous elements i.e. belonging to the same data type. Elements are allocated with contiguous memory locations allowing easy modification, that is, addition, deletion, accessing of elements. In Python, we have to use thearraymodule to declare arrays. If the elements of an array belong to different data types, an exception "Incompatible data types" is thrown.

```python
# creating an array containing same
# data type elements
import array

sample_array = array.array('i', [1, 2, 3])

# accessing elements of array
for i in sample_array:
      print(i)

# must be b, B, u, h, H, i, I, l, L, q, Q, f or d
```

<https://docs.python.org/3/library/array.html>
