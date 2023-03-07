# Map, reduce, filter

## Map

```python
fahrenheit = map(lambda x: (float(9)/5)*x + 32, Celsius)

a = [1,2,3,4]
b = [17,12,11,10]
c = [-1,-4,5,9]
map(lambda x,y:x+y, a,b)
[18, 14, 14, 14]
map(lambda x,y,z:x+y+z, a,b,c)
[17, 10, 19, 23]
map(lambda x,y,z:x+y-z, a,b,c)
[19, 18, 9, 5]
```

## Filter

The function filter(function, list) offers an elegant way to filter out all the elements of a list, for which the function *function* returns True.

The function filter(f,l) needs a function f as its first argument. f returns a Boolean value, i.e. either True or False. This function will be applied to every element of the list*l*. Only if f returns True will the element of the list be included in the result list.

```python
fib = [0,1,1,2,3,5,8,13,21,34,55]
result = filter(lambda x: x % 2, fib)
print result
[1, 1, 3, 5, 13, 21, 55]
result = filter(lambda x: x % 2 == 0, fib)
print result
[0, 2, 8, 34]
```

## Reduce

```python
import functools
functools.reduce
```

The function reduce(func, seq) continually applies the function func() to the sequence seq. It returns a single value.

If seq = [ s~1~, s~2~, s~3~, ... , s~n~], calling reduce(func, seq) works like this:

- At first the first two elements of seq will be applied to func, i.e. func(s~1~,s~2~) The list on which reduce() works looks now like this: [ func(s~1~, s~2~), s~3~, ... , s~n~]
- In the next step func will be applied on the previous result and the third element of the list, i.e. func(func(s~1~, s~2~),s~3~)
    The list looks like this now: [ func(func(s~1~, s~2~),s~3~), ... , s~n~]
- Continue like this until just one element is left and return this element as the result of reduce()

```python
reduce(lambda x,y: x+y, [47,11,42,13])
113
```

Determining the maximum of a list of numerical values by using reduce:

```python
f = lambda a, b: a if (a > b) else b
reduce(f, [47,11,42,102,13])
102
>>>
```

Calculating the sum of the numbers from 1 to 100:

```python
reduce(lambda x, y: x + y, range(1,101))
5050
```
