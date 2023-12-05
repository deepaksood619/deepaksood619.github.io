# List

## Properties

- A list stores a series of items in a particular order.
- Compound data type (group different values like boolean, String, integer, etc)

## List Creation

Use square brackets to define a list, and use commas to sepate individual items in the list. Use plural names for lists, to make your code easier to read.

bikes = ['trek', 'redline', 'giant']

```python
Create a list of n items
 lst = [0]*n

Create 2D list of n items of size m*n
 memo = [[0 for x in range(n)] for y in range(m)]
 factors = [[0] * col for _ in range(row)]

Get item in list
 Negative indices refer to items at the end of the list.
 first_bike = bikes[0]   # get first item in a list
 last_bike = bikes[-1]   # get last item in a list

Modifying individual items
 users[0] = 'new_name'
 users[-2] = 'new_second_last_name'

Looping through a list
 for user in users:
  print(user)

Adding items to a list (append)
 bikes = []
 bikes.append('trek')

 append: Appends object at end.
 x = [1, 2, 3]
x.append([4, 5])
print (x)
 gives you: [1, 2, 3, [4, 5]]

Insert items into list
 users.insert(0, 'joe')
 users.insert(3, 'bea')

Extend a list
 extend: Extends list by appending elements from the iterable.
 x = [1, 2, 3]
x.extend([4, 5])
print (x)
 gives you: [1, 2, 3, 4, 5]

Removing items from list
 # Deleting an element by its position
  del users[-1]
 # Removing an item by its value
  users.remove('mia')

Popping elements (get + delete)
 # Pop the last item from a list
  most_recent_user = users.pop()
 # Pop the first item in a list
  first_user = users.pop(0)

List length
 num_users = len(users)

Making numerical lists
 squares = []
 for x in range(1, 11):
  squares.append(x**2)

List comprehensions
 squares = [x**2 for x in range(1, 11)]

Slicing a list
 finishers = ['sam', 'bob', 'ada', 'bea']
 first_two = finishers[:2]
 middle_two = finishers[1:3]
 last_three = finishers[-3:]

Slicing a list into a list of sub-lists
 [input[i:i+n] for i in range(0, len(input), n)]
 Where input is the list name and n is the length by which list is to be sliced

Copying a list
 copy_of_bikes = bikes[:]

Print list with different format (Using separator or join)
 print(*lst, sep='\n')
 print("\n".join(lst))
 print(' '.join(str(x) for x in list_of_ints)) # for joining a list of integers

DeepCopy a list
 import copy
 new_list = copy.deepcopy(list_to_copy)

Find duplicates in a list
 import collections
 dup_lst = [item for item, count in collections.Counter(lst).items() if count > 1]

# Difference of two lists
l1 = [1,2,6,8]
l2 = set([2,3,5,8])
 #     v  `filter` returns the a iterator object. Here I'm type-casting
#     v  it to `list` in order to display the resultant value
list(filter(lambda x: x not in l2, l1))
[1, 6]

Finding minimum and maximum in a list of tuples
 min(lst, key = lambda t: t[1])
 max(lst, key=lambda t:t[1])

Find sum of all values
 ages = [1,2,3,4,5]
 total_ages = sum(ages)
```

## Lists Versus Tuples

Tuples are used to collect an immutable ordered list of elements. This means that:

- You can't add elements to a tuple. There's noappend()orextend()method for tuples,
- You can't remove elements from a tuple. Tuples have noremove()orpop()method,
- You can find elements in a tuple since this doesn't change the tuple.
- You can also use theinoperator to check if an element exists in the tuple.

So, if you're defining a constant set of values and all you're going to do with it is iterate through it, use a tuple instead of a list. It will be faster than working with lists and also safer, as the tuples contain "write-protect" data.

## Lists Versus Dictionaries

- A list stores an ordered collection of items, so it keeps some order. Dictionaries don't have any order.
- Dictionaries are known to associate each key with a value, while lists just contain values.

Use a dictionary when you have an unordered set of unique keys that map to values.

Notethat, because you have keys and values that link to each other, the performance will be better than lists in cases where you're checking membership of an element.

## Lists Versus Sets

- Just like dictionaries, sets have no order in their collection of items. Not like lists.
- Set requires the items contained in it to be hashable, lists store non-hashable items.
- Sets require your items to be unique and immutable. Duplicates are not allowed in sets, while lists allow for duplicates and are mutable.
- You should make use of sets when you have an unordered set of unique, immutable values that are hashable.

| **Hashable** | **Non-Hashable** |
|--------------|------------------|
| Floats       | Dictionaries     |
| Integers     | Sets             |
| Tuples       | Lists            |
| Strings      |                 |
| frozenset()  |                 |

## List vs Array

| **LIST** | **ARRAY** |
|:---:|:---:|
| Can consist of elements belonging to different data types | Only consists of elements belonging to the same data type |
| No need to explicitly import a module for declaration | Need to explicitly import a module for declaration |
| Cannot directly handle arithmetic operations | Can directly handle arithmetic operations |
| Can be nested to contain different type of elements | Must contain either all nested elements of same size |
| Preferred for shorter sequence of data items | Preferred for longer sequence of data items |
| Greater flexibility allows easy modification (addition, deletion) of data | Less flexibility since addition, deletion has to be done element wise |
| The entire list can be printed without any explicit looping | A loop has to be formed to print or access the components of array |
| Consume larger memory for easy addition of elements | Comparatively more compact in memory size |

So, when should you use a list and when should you use an array?

- If you need to store a relatively short sequence of items and you don't plan to do any mathematical operations with it, alistis the preferred choice. This data structure will allow you to store an ordered, mutable, and indexed sequence of items without importing any additional modules or packages.
- If you have a very long sequence of items, consider using anarray. This structure offers more efficient data storage.
- If you plan to do any numerical operations with your combination of items, use anarray.

https://www.geeksforgeeks.org/difference-between-list-and-array-in-python

## Slice Notation in Lists

We use the slice notation when we want to select more than one list element at a time. Much like when we select just one element from a list, we use the double brackets. What's so special now is that instead of just an integer, we also put a:in between the double brackets,

Ex - slice this in hh mm and tt

```python
a = "01:20 am"
H = a[0:2]
M = a[3:5]
T = a[6:8] / a[-2:] # start at the end -2 and go to end of the list
```

## List Comprehensions

List comprehensions are an elegant way to build a list without having to use different for loops to append values one by one.

```python
x = int ( input())
y = int ( input())
n = int ( input())
print ( [ [ i, j] for i in range( x + 1) for j in range( y + 1) if ( ( i + j ) != n ) ] )
```

## Remove all instances of a value from a list

```python
pets = ['dog', 'cat', 'dog', 'fish', 'cat']
while 'cat in pets:
  perts.remove('cat')
```

## Rotate a list clockwise

```python
lst = [1,2,3]
n = len(lst)
k = 1 #number of times to rotate #k = k%n if multiple rotation
lst[n-k:] + lst[:n-k]
```

## Sorting a list

```python
lst.sort()
tup.sort(key **= lambda** x: x[1])#sort a list of tuples by second key
tup.sort() # sort a list of tuples by 1st key, if 1st keys are same then 2nd key will be used to sort
```

## References

- https://www.datacamp.com/community/tutorials/18-most-common-python-list-questions-learn-python
