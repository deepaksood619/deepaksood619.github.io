# Functions

Functions are named blocks of code, designed to do one specific job.

Information passed to a function is called an argument, and information received by a function is called a parameter.

## A simple function

```python
def greet_user():
    """Display a simple greeting."""
    print('Hello!')

greet_user()
```

## Passing an argument

```python
def greet_user(username):
    print('Hello, ' + username)

greet_user('dude')
```

## Default values for parameters

When function calls omit this argument the default value will be used. Parameters with default values must be listed after parameters without default values in the function's definition so positional arguments can still work correctly.

We can use None to make an argument optional

```python
def make_pizza(topping='bacon'):
    print('Have a ' + topping + ' pizza!')

make_pizza()
make_pizza('pepperoni')
```

## Returning a value

```python
def add_numbers(x, y):
    return x + y

sum = add_numbers(3, 5)
print(sum)
```

## Parameters passing

- positional-or-keyword
- positional-only
- keyword-only
- var-positional
- var-keyword

## Positional and Keyword Arguments

When we use positional arguments Python matches the first argument in the funtion call with the first parameter in the function definition, and so forth.

`sum = add_numbers(3,5)`

With keyword arguments, we specify which parameter each argument should be assigned to in the function call. When we use keyword arguments, the order of the arguments doesn't matter.

```python
sum = add_numbers(x=3, y=5)
sum = add_numbers(y=5, x=3)
```

## Passing an arbitrary number of arguments

Sometimes we won't know how many arguments a function will need to accept. Python allows us to collect an arbitrary number of arguments into one parameter using the * operator. A parameter that accepts an arbitrary number of arguments must come last in the function definition.

The `**` operator allows a parameter to collect an arbitrary number of keyword arguments

```python
# use arbitrary number of positional arguments using *
def create_pizza(item_number, *toppings):
    pizza = {'Pizza number' : item_number}

    for topping in toppings:
        pizza[topping] = 1

    return pizza

print (create_pizza(1, 'onion', 'tomato'))
print (create_pizza(2, 'mushroom'))

# use arbitrary number of keyword arguments using **
def create_pizza(item_number, **toppings):
    pizza = {'Pizza number' : item_number}

    for key, value in toppings.items():
        pizza[key] = value

    return pizza

print (create_pizza(1, topping1='onion', topping2='tomato'))
print (create_pizza(2, topping='mushroom'))

# another instance of *
def print_args(d1, d2, d3):
    print(d1, d2, d3)

data = ('foo', 'bar', 'baz')

print_args(data)
TypeError: missing positional arguments d2 and d3

print_args(*data)
foo bar baz
```

## kwargs (keyword arguments, changes the passed keyword arguments into a dictionary)

```python
def print_kwargs(**kwargs):
    print(kwargs)

print_kwargs(foo='bar', hello='world')
{'foo': 'bar', 'hello': 'world'}
```

## Nested Functions

Because of the first class nature of python, we can define functions inside other functions.
