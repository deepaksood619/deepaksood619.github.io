# Super

Super considered super - pycon 2015

In python - Inheritance is a tool for code reuse.

We can use dependency injection to say to the restaurant that I want this food but you have to get it from somewhere else. (Because they used genetically modified seeds)

When there is multiple inheritance and a diamond diagram and same methods are repeated at either side of the chain, it gets harder

Solution - C3 linearization algorithm (C Cubed Linearization Algorithm)

## Method Resolution Order (MRO)

It is an Algorithm used primarily to obtain the order in which methods should be inherited in the presence of multiple Inheritance, and is termed Method Resolution Order (MRO)

<https://makina-corpus.com/blog/metier/2014/python-tutorial-understanding-python-mro-class-search-path>

The name c3 refers to the three important properties of the resulting linearization-

- A consistent extended precedence graph
- Preservation of local precedence order
- Fitting the monotonicity criterion

This algorithm takes an amorphous blob and put it in a straight line

Linearization

Super must be called next one in the line in MRO (Method Resolution Operator)

## DoughFactory Analogy

Robot Analogy - for not wearing down the robot we use a MockRobot and use DependencyInjection to inject it into the code while running Tests.

When we call super in python, it's the children's ancestors that's get called and not it's own parent.

`help(<class>)` shows MRO

Counter can be used to make an ordered counter, because Counter cannot be used on OrderedDict, so we can use the power of super with MRO to make an OrderedCounter

## Linearization Algorithm

- Children come before parents,
- Parents stay in order

Co-operative multiple Inheritance

Problems with super

- The last person cannot pass using super because there is no one next in line (use stopper class)
- Super doesn't work with classes that are not designed to work cooperatively (solution - put a class infront of non-cooperative class that is cooperative)
- Using positional arguments can mess up with the argument passing (solution- use keyword argument to pass along the attributes)

## Example

```python
class Adam(object): pass

class Eve(object): pass

class Ramon(Adam, Eve): pass

class Gayle(Adam, Eve): pass

class Raymond(Ramon, Gayle): pass

class Dennis(Adam, Eve): pass

class Sharon(Adam, Eve): pass

class Rachel(Dennis, Sharon): pass

class Matthew(Raymond, Rachel): pass

help(Matthew)
```

[Raymond Hettinger - Super considered super! - PyCon 2015](https://www.youtube.com/watch?v=EiOglTERPEo)
