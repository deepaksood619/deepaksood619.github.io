# Internal working

## Concurrency

## Path operation functions

When you declare apath operation functionwith normaldefinstead ofasync def, it is run in an external threadpool that is then awaited, instead of being called directly (as it would block the server).

If you are coming from another async framework that does not work in the way described above and you are used to define trivial compute-onlypath operation functionswith plaindeffor a tiny performance gain (about 100 nanoseconds), please note that inFastAPIthe effect would be quite opposite. In these cases, it's better to useasync defunless yourpath operation functionsuse code that performs blockingI/O.

Still, in both situations, chances are thatFastAPIwill [still be faster](https://fastapi.tiangolo.com/#performance) than (or at least comparable to) your previous framework.

## Dependencies

The same applies for dependencies. If a dependency is a standarddeffunction instead ofasync def, it is run in the external threadpool.

## Sub-dependencies

You can have multiple dependencies and sub-dependencies requiring each other (as parameters of the function definitions), some of them might be created withasync defand some with normaldef. It would still work, and the ones created with normaldefwould be called on an external thread (from the threadpool) instead of being "awaited".

## Other utility functions

Any other utility function that you call directly can be created with normaldeforasync defand FastAPI won't affect the way you call it.

This is in contrast to the functions that FastAPI calls for you:path operation functionsand dependencies.

If your utility function is a normal function withdef, it will be called directly (as you write it in your code), not in a threadpool, if the function is created withasync defthen you shouldawaitfor that function when you call it in your code.

<https://fastapi.tiangolo.com/async/#very-technical-details>
