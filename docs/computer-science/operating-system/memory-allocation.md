# Memory Allocation

## Dynamic memory allocation

Is memory allocated at runtime usingcalloc(), malloc()and friends. It is sometimes also referred to as 'heap' memory, although it has nothing to do with the heap data-structure [ref](http://www.quora.com/Why-is-dynamic-memory-allocation-called-heap-memory-allocation).

int * a = malloc(sizeof(int));
Heap memory is persistent untilfree()is called. In other words, you control the lifetime of the variable.

## Automatic memory allocation

This is what is commonly known as 'stack' memory, and is allocated when you enter a new scope (usually when a new function is pushed on the call stack). Once you move out of the scope, the values of automatic memory addresses are undefined, and it is an [error to access them](https://stackoverflow.com/a/6445794/140264).

int a = 43;
Note that scope does not necessarily mean function. Scopes can nest within a function, and the variable will be in-scope only within the block in which it was declared. Note also that where this memory is allocated is not specified. (On asanesystem it will be on the stack, or registers for optimisation)

## Static memory allocation

Is allocated at compile time*, and the lifetime of a variable in static memory is the [lifetime of the program](http://en.wikipedia.org/wiki/Static_variable).
In C, static memory can be allocated using thestatickeyword. The scope is the compilation unit only.
Things get more interesting [when theexternkeyword is considered](http://en.wikipedia.org/wiki/Extern_variable). When anexternvariable isdefinedthe compiler allocates memory for it. When anexternvariable isdeclared, the compiler requires that the variable bedefinedelsewhere. Failure to declare/defineexternvariables will cause linking problems, while failure to declare/definestaticvariables will cause compilation problems.

in file scope, the static keyword is optional (outside of a function):

int a = 32;
But not in function scope (inside of a function):

static int a = 32;
Technically, externandstaticare two separate classes of variables in C.

extern int a; /*Declaration*/
int a; /*Definition*/

## *Notes on static memory allocation

It's somewhat confusing to say that static memory is allocated at compile time, especially if we start considering that the compilation machine and the host machine might not be the same or might not even be on the same architecture.

It may be better to thinkthat the allocation of static memory is handled by the compilerrather thanallocated at compile time.

For example the compiler may create a largedatasection in the compiled binary and when the program is loaded in memory, the address within thedatasegment of the program will be used as the location of the allocated memory. This has the marked disadvantage of making the compiled binary very large if uses a lot of static memory. It's possible to write a multi-gigabytes binary generated from less than half a dozen lines of code. Another option is for the compiler to inject initialisation code that will allocate memory in some other way before the program is executed. This code will vary according to the target platform and OS. In practice, modern compilers use heuristics to decide which of these options to use. You can try this out yourself by writing a small C program that allocates a large static array of either 10k, 1m, 10m, 100m, 1G or 10G items. For many compilers, the binary size will keep growing linearly with the size of the array, and past a certain point, it will shrink again as the compiler uses another allocation strategy.

## Register Memory

The last memory class are 'register' variables. As expected, register variables should be allocated on a CPU's register, but the decision is actually left to the compiler. You may not turn a register variable into a reference by using address-of.
register int meaning = 42;
printf("%pn",&meaning); /*this is wrong and will fail at compile time.*/
Most modern compilers are smarter than you at picking which variables should be put in registers.

## References

<https://stackoverflow.com/questions/8385322/difference-between-static-memory-allocation-and-dynamic-memory-allocation>

<https://www.memorymanagement.org/index.html>
