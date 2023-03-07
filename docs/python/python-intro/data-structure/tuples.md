# Tuples

## Properties

- Tuples are similar to lists, but the items in a tuple can't be modified
- Tuples are hashable
- Tuples are compound data type i.e. they can contain multiple data types like booleans, string, integers, etc.

## Making a tuple

`dimensions = (1920, 1080)`

## Looping through a tuple

```python
for dimension in dimensions:
    print(dimensions)
```

## Sort a list of tuples using key

```python
sorted_list = sorted([('abc', 121),('abc', 231),('abc', 148), ('abc',221)], key=lambda x: x[1])

from operator import itemgetter
data = [('abc', 121),('abc', 231),('abc', 148), ('abc',221)]
sorted(data,key=itemgetter(1))
[('abc', 121), ('abc', 148), ('abc', 221), ('abc', 231)]
```

Using itemgetter is more faster since the computation will be done on c side rather than through the use of lambda

## Converting list to tuples

```python
A = [1, 2, 3, 4]
B = tuple(A)
print(B)
# (1, 2, 3, 4)
```

## Alternative to classes is Named Tuples

Any tuple-like class whose indexable elements are also accessible using named attributes (for example, [time.localtime()](http://library/time.html) returns a tuple-like object where theyearis accessible either with an index such ast[0]or with a named attribute liket.tm_year).

A named tuple can be a built-in type such as[time.struct_time](http://library/time.html), or it can be created with a regular class definition. A full featured named tuple can also be created with the factory function[collections.namedtuple()](http://library/collections.html). The latter approach automatically provides extra features such as a self-documenting representation likeEmployee(name='jones',title='programmer').

Using NamedTuple is way shorter than defining a class manually

```python
from collections import namedtuple

Car = namedtuple('Car', 'color mileage')

# Our new "Car" class works as expected:
my_car = Car('red', 3812.4)
my_car.color
'red'

my_car.mileage
3812.4

# We get a nice string repr for free:
my_car
Car(color='red' , mileage=3812.4)

# Like tuples, namedtuples are immutable:
my_car.color = 'blue'

# AttributeError: "can't set attribute"
```
