# Modules

A module is a file containing Python definitions and statements. The file name is the module name with the suffix.pyappended. Within a module, the module's name (as a string) is available as the value of the global variable `__name__`.

```python
import fibo

fibo.__name__
```

A module can contain executable statements as well as function definitions. These statements are intended to initialize the module. They are executed only the *first* time the module name is encountered in an import statement.

Each module has its own private symbol table, which is used as the global symbol table by all functions defined in the module.

## Modules (from cheatsheet)

We can store our functions in a separate file called a module, and them import the functions we need into the file containing our main program. This allows for a cleaner program files. (Modules must in the same directory as our main program)

```python
 # Storing a function in a module
 # file - pizza.py
    def create_pizza(item_number, *toppings):
        pizza = {'Pizza number' : item_number}

        for topping in toppings:
            pizza [topping] = 1

        return pizza

 # Importing an entire module
 # file - making_pizzas.py
 # Every function in the module is available in the program file.
    import pizza
    pizza.make_pizza(1, 'onion', 'tomato')

 # Importing a specific function
 # Only the imported functions are available in the program file.
    from pizza import make_pizza
    make_pizza(1, 'onion', 'tomato')

 # Giving a module as an alias
    import pizza as p
    p.make_pizza(1, 'onion', 'tomato')

 # Giving a function an alias
    from pizza import make_pizza as mp
    mp(1, 'onion', 'tomato')

 # Importing all functions from a module
 # This can reult in naming conflicts, which can cause errors. (not preferred method of importing)
    from pizza import *
    make_pizza(1, 'onion', 'tomato')

```
