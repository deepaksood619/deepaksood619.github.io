# Unicode

There are 3 built-in methods for string conversion -

1. `__str__()`

    Called when print statement and str() on any object is called.

    `__str__` will return a human readable string.

2. `__unicode__()`

    - Called when unicode() is called on any object, if it exists, and otherwise falls back to `__str__()` and decodes the result with the system encoding.
    - Python 3, there's simply `__str__()`, which must return `str(text)`
    - There is also `__bytes__()`, but

3. `__repr__()`

Called by the repr() built-in function and by string conversions to compute the official string representation of an object.

`__repr__` will return an internal representation (machine representable format string)

`__repr__` can be invoked on an object by calling repr(obj) or by using backticks `obj`

While printing lists as well as other container classes, the contained elements will be printed using `__repr__`.

## Solution

1. Unicode Sandwich

    Always use unicode in whole project and convert at the ends

2. Django

    Define `__str__()` method returning text and apply python_2_unicode_compatible() decorator.

    **Final Code Snippet to follow**

    ```python
    class Test(models.Model):
        name = models.CharField(max_length=100)

        def __str__(self):
            return '{}'.format(self.name)
    ```

## References

https://nedbatchelder.com/text/unipain.html
