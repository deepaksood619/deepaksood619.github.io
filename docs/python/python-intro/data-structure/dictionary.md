# Dictionary

Each piece of information in a dictionary is stored as a key-value pair. When we provide a key, Python returns the value associated with that key.

## Representation

Use curly braces to define a dictionary. Use colons to connect keys and values, and use commas to separate individual key-value pairs.

Empty Dictionary - `{}`

Dictionary - `{'Name': 'Deepak', 'Age':25}`

## Accessing Values in Dictionary

### Using square bracket notation to fetch data

If we attempt to access a data item with a key, which is not part of the dictionary, we get KeyError

```python
dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print dict['Name']
print dict['Age']
Zara
7
```

### Using built-in function dict.get() to fetch data from dictionary

dict.get(key, default=None)

The methodget()returns a value for the given key. If key is not available then returns default value None. (or the provided default value)

```python
dict = {'Name': 'Zabra', 'Age': 7}
print "Value : %s" %  dict.get('Age')
print "Value : %s" %  dict.get('Education')
print "Value : %s" %  dict.get('Education', "Never")
Value : 7
Value : None
Value : Never
```

### For multi level dict hierarchies

Returning a default empty dictionary will not raise AttributeError for second get()

`sub_typology=project.json.get(**'area'**,{}).get(**'0'**,{}).get(**'areaSubTypology'**, **''**)`

## Updating in Dictionary

```python
dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
dict['Age'] = 8; # update existing entry
```

If key is not present, then an item is added in the dictionary

## Adding in Dictionary

```python
dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
dict['School'] = "DPS School"; # Add new entry
```

## Deleting in Dictionary

```python
dict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
del dict['Name']; # remove entry with key 'Name'
dict.clear(); # remove all entries in dict
del dict ; # delete entire dictionary
```

If we attempt to delete a data item with a key, which is not part of the dictionary, we get KeyError

## Length of a dictionary

`num_responses = len(fav_languages)`

## Properties of Dictionary Keys

- Dictionary values can be any arbitrary Python object, either standard objects or user-defined objects.
- Duplicate key not allowed. When duplicate keys encountered during assignment, the last assignment wins.

```python
dict = {'Name': 'Zara', 'Age': 7, 'Name': 'Manni'}
print "dict['Name']: ", dict['Name']

dict['Name']: Manni
```

- Keys must be immutable. Otherwise "Type Error: objects are unhashable" error thrown. Strings, numbers, tuples can be used as dictionary keys

## Built-in Dictionary functions & Methods

### Functions

#### cmp(dict1, dict2)

Compares elements of both dict

Not supported in python3, use dict1==dict2 instead

Library deepdiff can be used for advanced comparisons

#### - len(dict)

Gives the total number of items in the dictionary

#### - str(dict)

Produces a printable string representation of a dictionary

#### - type(variable)

### - **Methods**

#### - dict.clear()

Removes all elements of dictionary dict

#### - dict.copy()

Returns a shallow copy of dictionary dict

- **dict.fromkeys(seq[, value])**

Create a new dictionary with keys from seq and values set to value

seq− This is the list of values which would be used for dictionary keys preparation.

value− This is optional, if provided then value would be set to this value

```python
seq = ('name', 'age', 'sex')
dict = dict.fromkeys(seq)
print "New Dictionary : %s" % str(dict)
New Dictionary : {'age': None, 'name': None, 'sex': None}

dict = dict.fromkeys(seq, 10)
print "New Dictionary : %s" % str(dict)
New Dictionary : {'age': 10, 'name': 10, 'sex': 10}
```

```python
dict.get(key, default=None)

dict.has_key(key) (removed in python 3, use in operator instead)

dict = {'Name': 'Zabra', 'Age': 7}
'Name' in dict

True

'NoKey' in dict

False
```

#### - dict.items()

The method items() returns a list of dict's (key, value) tuple pairs

```python
dict = {'Name': 'Zara', 'Age': 7}
for key, value in dict.items():
 print (key, value)

Name Zara
Age 7
````

#### - dict.keys()

looping through all keys

#### Others

- dict.setdefault(key, default=None)
- dict.update(dict2)
- dict.values()

Looping through all the values

## Sorting a dictionary

#### sorting by value

`print sorted(prices.items(), key = lambda x : x[1])`

#### sorting by key

`print(sorted(prices.items())`

## Looping through all the keys in order

```python
for name in sorted(fav_language.keys()):
  print(name)
```

## Merging two dictionaries

```python
# Python code to merge dict using update() method
def Merge(dict1, dict2):
    return(dict2.update(dict1))

# Driver code
dict1 = {'a': 10, 'b': 8}
dict2 = {'d': 6, 'c': 4}

# This return None
print(Merge(dict1, dict2))

# changes made in dict2
print(dict2)
```
