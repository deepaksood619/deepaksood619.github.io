# Idiomatic Python

## Idiomatic Python

### Chained Comparison Operator

```python
# Bad
if x <= y and y <= z:
  # do something

# Good
if x <= y <= z:
  # do something
```

### Use the falsy and truthy concept

<https://www.freecodecamp.org/news/truthy-and-falsy-values-in-python>

### Ternary Operator replacement

```python
a = True
value = 1 if a else 0
print(value)
```

### Use the in keyword

### Formatting Strings

The worst approach to formatting strings is to use the + operator to concatenate a mix of static strings and variables. However, the clearest and most idiomatic way to format strings is to use the format function. It takes a format string and replaces placeholders with values.

```python
# Bad
def user_info(user):
  return 'Name: ' + user.name + ' Age: '+ user.age

# Good
def user_info(user):
  return 'Name: {user.name} Age: {user.age}'.format(user=user)
```

### Use List Comprehensions

`Ex - ls = [element for element in range(10) if not(element % 2)]`

### Dictionary Comprehension

`emails = {user.name: user.email for user in users if user.email}`

### Sets

Operations on set -

- Union: The set of elements in A, B or both (written as A | B)
- Intersection: The set of elements in both A and B (written as A & B)
- Difference: The set of elements in A but not in B (written as A --- B)
- Symmetric Difference: The set of elements in either A or B but not both A and B (written as A ^ B)

Ex

```python
ls1 = [1, 2, 3, 4, 5]
ls2 = [4, 5, 6, 7, 8]
elements_in_both = list( set(ls1) & set(ls2) )
print(elements_in_both)
```

### Set Comprehension

### Use the default parameter of 'dict.get' to provide default values

`Ex- auth = payload.get('auth_token', 'Unauthorized')`

### Don't Repeat Yourself

```python
# Bad
if user:
    print('------------------------------')
    print(user)
    print('------------------------------')

# In the example above, we have repeated - over 30 times which is really not good.

# Good
if user:
    print('{0}\n{1}\n{0}'.format('-'*30, user))
```

### Find if all the items in a list are equal (pythonic to normal, less efficient to more efficient)

```python
a = ['a', 'a', 'a']
print(len(set(a)) == 1)
print(all(x == a[0] for x in a))
print(a.count(a[0]) == len(a))
```

## Example

```python
Input -
5
Harry
37.21
Berry
37.21
Tina
37.2
Akriti
41
Harsh
39

Output -
Berry
Harry

# students = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]

if __name__ == '__main__':
    marksheet = []
    for _ in range(int(input())):
        marksheet.append([input(), float(input())])

    second_highest = sorted(list(set([marks for name, marks in marksheet])))[1]

print('\n'.join([a for a,b in sorted(marksheet) if b == second_highest]))
```

<https://www.codementor.io/johnpaulseremba/idiomatic-python-coding-the-smart-way-fmc4fmtm5?utm_swu=3470>
