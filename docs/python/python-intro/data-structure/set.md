# Set

- Set doesn't support indexing/slicing
- Set doesn't support random.choices(a), since it doesn't support indexing
- Implementation is mostly similar to dictionary

A Set is an unordered collection data type that is iterable, mutable, and has no duplicate elements. Python's set class represents the mathematical notion of a set. The major advantage of using a set, as opposed to a list, is that it has a highly optimized method for checking whether a specific element is contained in the set. This is based on a data structure known as a hash table.

## Frozen Sets

Frozen sets are immutable objects that only support methods and operators that produce a result without affecting the frozen set or sets to which they are applied

## Creating a set

A set is created by using the set() function or placing all the elements within a pair of curly braces.

Days=set(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"])
Months={"Jan","Feb","Mar"}
Dates={21,22,17}

## Adding element to set

Days.add("Sun")

## Removing item to set

Days.discard("Sun")

## Union of sets

The set of elements in A, B or both (written as A | B)

DaysA = set(["Mon","Tue","Wed"])
DaysB = set(["Wed","Thu","Fri","Sat","Sun"])
AllDays = DaysA|DaysB

set(['Wed', 'Fri', 'Tue', 'Mon', 'Thu', 'Sat'])

## Intersection of sets

The set of elements in both A and B (written as A & B)

DaysA = set(["Mon","Tue","Wed"])
DaysB = set(["Wed","Thu","Fri","Sat","Sun"])
AllDays = DaysA & DaysB

set(['Wed'])

## Difference of sets

The set of elements in A but not in B (written as A --- B)

The order matters for Difference. A --- B is NOT the same as B --- A.

DaysA = set(["Mon","Tue","Wed"])
DaysB = set(["Wed","Thu","Fri","Sat","Sun"])
AllDays = DaysA - DaysB

set(['Mon', 'Tue'])

## Symmetric Difference

The set of elements in either A or B but not both A and B (written as A ^ B)

DaysA = set(["Mon","Tue","Wed"])
DaysB = set(["Wed","Thu","Fri","Sat","Sun"])
AllDays = DaysA ^ DaysB

set(['Fri', 'Mon', 'Sat', 'Sun', 'Thu', 'Tue'])

## Compare Sets

We can check if a given set is a subset or superset of another set. The result is True or False depending on the elements present in the sets.

DaysA = set(["Mon","Tue","Wed"])
DaysB = set(["Mon","Tue","Wed","Thu","Fri","Sat","Sun"])
SubsetRes = DaysA <= DaysB
SupersetRes = DaysB >= DaysA
print(SubsetRes)
print(SupersetRes)

True
True
