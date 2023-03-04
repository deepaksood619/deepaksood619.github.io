# 28. Debugging and Profiling

27.1. bdb - Debugger framework

27.2. faulthandler - Dump the Python traceback

27.3. pdb - The Python Debugger

27.4. The Python Profilers

27.5. timeit - Measure execution time of small code snippets

27.6. trace - Trace or track Python statement execution

27.7. tracemalloc - Trace memory allocations

## time

```python
import time

start = time.time()
print("hello")
end = time.time()
print(end - start)
```

This gives the execution time in seconds.

## timeit

### Command Line Interface

```bash
$ python3 -m timeit '"-".join(str(n) for n in range(100))'
10000 loops, best of 3: 30.2 usec per loop
$ python3 -m timeit '"-".join([str(n) for n in range(100)])'
10000 loops, best of 3: 27.5 usec per loop
$ python3 -m timeit '"-".join(map(str, range(100)))'
10000 loops, best of 3: 23.2 usec per loop
```

### Callable Python Interface

```bash
import timeit
timeit.timeit('"-".join(str(n) for n in range(100))', number=10000)
0.3018611848820001
timeit.timeit('"-".join([str(n) for n in range(100)])', number=10000)
0.2727368790656328
timeit.timeit('"-".join(map(str, range(100)))', number=10000)
0.23702679807320237

timeit.timeit(stmt='pass', setup='pass', timer=<default timer>, number=1000000, globals=None)
```

### Functions

To give the[timeit](https://docs.python.org/3/library/timeit.html#module-timeit) module access to functions you define, you can pass a *setup* parameter which contains an import statement:

```python
def test():
    """Stupid test function"""
    L = [i for i in range(100)]
if __name__ == '__main__':
    import timeit
    print(timeit.timeit("test()", setup="from __main__ import test"))
```

## Example

```python
 # importing the required modules
 import timeit

 # binary search function
 def binary_search(mylist, find):
     while len(mylist) > 0:
         mid = (len(mylist))//2
         if mylist[mid] == find:
             return True
         elif mylist[mid] < find:
             mylist = mylist[:mid]
         else:
             mylist = mylist[mid + 1:]
     return False

 # linear search function
 def linear_search(mylist, find):
     for x in mylist:
         if x == find:
             return True
     return False

 # compute binary search time
 def binary_time():
     SETUP_CODE = '''
 from __main__ import binary_search
 from random import randint'''

     TEST_CODE = '''
 mylist = [x for x in range(10000)]
 find = randint(0, len(mylist))
 binary_search(mylist, find)'''

     # timeit.repeat statement
     times = timeit.repeat(setup = SETUP_CODE,
                           stmt = TEST_CODE,
                           repeat = 3,
                           number = 10000)

     # priniting minimum exec. time
     print('Binary search time: {}'.format(min(times)))

 # compute linear search time
 def linear_time():
     SETUP_CODE = '''
 from __main__ import linear_search
 from random import randint'''

     TEST_CODE = '''
 mylist = [x for x in range(10000)]
 find = randint(0, len(mylist))
 linear_search(mylist, find)
     '''
     # timeit.repeat statement
     times = timeit.repeat(setup = SETUP_CODE,
                           stmt = TEST_CODE,
                           repeat = 3,
                           number = 10000)

     # priniting minimum exec. time
     print('Linear search time: {}'.format(min(times)))

 if __name__ == "__main__":
     linear_time()
    binary_time()
```

## Profiling

- Flame Graph
