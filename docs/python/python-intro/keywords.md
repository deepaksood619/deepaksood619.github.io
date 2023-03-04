# Keywords

## Keywords

| and      | exec    | not    |
|----------|---------|--------|
| assert   | finally | or     |
| break    | for     | pass   |
| class    | from    | print  |
| continue | global  | raise  |
| def      | if      | return |
| del      | import  | try    |
| elif     | in      | while  |
| else     | is      | with   |
| except   | lambda  | yield  |

range

```python
import keyword
print(keyword.kwlist)
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
len(keyword.kwlist)
33
```

## global

Global keyword is used with variables, that we want to used inside functions and declared globally.

We only need to use global keyword in a function if we want to do assignments / change them. global is not needed for printing and accessing.

## Lambda

Python's lambda tool is used for building function objects in situations where a simple one-off function is required. It is also used to create anonymous functions

Ex

```python
Square = lambda x: x * x
filter (lambda x : x % 3 == 0, foo)
```

## Yield

### Iterables

When you create a list, you can read its items one by one. Reading its items one by one is called iteration:

```python
mylist = [1, 2, 3]
for i in mylist:
... print(i)
1
2
3
```

mylist is an *iterable*. When you use a list comprehension, you create a list, and so an iterable:

```python
mylist = [x*x for x in range(3)]
for i in mylist:
... print(i)
0
1
4
```

Everything you can use "for... in..." on is an iterable;lists, strings, files...

These iterables are handy because you can read them as much as you wish, but you store all the values in memory and this is not always what you want when you have a lot of values.

### Generators

Generators are iterators, a kind of iterable**you can only iterate over once**. Generators do not store all the values in memory, **they generate the values on the fly**:

```python
mygenerator = (x*x for x in range(3))
for i in mygenerator:
... print(i)
0
1
4
```

It is just the same except you used()instead of []. BUT, you **cannot** performfor i in mygeneratora second time since generators can only be used once: they calculate 0, then forget about it and calculate 1, and end calculating 4, one by one.

### Yield

yieldis a keyword that is used likereturn, except the function will return a generator.

```python
def createGenerator():
... mylist = range(3)
... for i in mylist:
... yield i*i
...
mygenerator = createGenerator() # create a generator
print(mygenerator) # mygenerator is an object!
<generator object createGenerator at 0xb7555c34>
for i in mygenerator:
... print(i)
0
1
4
```

Here it's a useless example, but it's handy when you know your function will return a huge set of values that you will only need to read once.

To master yield, you must understand that **when you call the function, the code you have written in the function body does not run.** The function only returns the generator object, this is a bit tricky

Then, your code will be run each time the for uses the generator.

Now the hard part:

The first time the for calls the generator object created from your function, it will run the code in your function from the beginning until it hitsyield, then it'll return the first value of the loop. Then, each other call will run the loop you have written in the function one more time, and return the next value, until there is no value to return.

The generator is considered empty once the function runs but does not hityieldanymore. It can be because the loop had come to an end, or because you do not satisfy an "if/else" anymore.

## Lambda (single expression functions)

<https://dbader.org/blog/python-lambda-functions>

The lambda keyword in Python provides a shortcut for declaring small anonymous functions. Lambda functions behave just like regular functions declared with thedefkeyword. They can be used whenever function objects are required.

```python
Ex - add = lambda x, y: x+y

add(2, 3) # 5

Ex - (lambda x, y: x+y)(2,3) # 5
```

## self in python

Self is a keyword in Python used to define an instance or an object of a class. In Python, it is explicitly used as the first parameter, unlike in Java where it is optional. It helps in distinguishing between the methods and attributes of a class from its local variables.
