# Recursion

<https://www.topcoder.com/community/data-science/data-science-tutorials/an-introduction-to-recursion-part-2>

Starter Function -

Starter Function will initialize any data and get the parameters in a form that will be easy to work with. Once things are ready, the "starter" function calls the recursive function that will do the rest of the work.

"multiple related decision" pattern - if we have a lot of decisions to make in a recursive call

## Always think of base case and recursive case

## Two instances

1. The first is when recursion is used as a technique in which a function makes one or more calls to itself.

2. The second is when a data structure uses smaller instances of the exact same type of data structure when it represents itself.

Recursion provides a powerful alternative for performing repetitions of tasks in which a loop is not ideal. Most modern programming languages support recursion and recursion serves as a great tool for building out particular data structures.

## Tail Recursion

A recursive function is tail recursive when recursive call is the last thing executed by the function.

The tail recursive functions considered better than non tail recursive functions as tail-recursion can be optimized by compiler. The idea used by compilers to optimize tail-recursive functions is simple, since the recursive call is the last statement, there is nothing left to do in the current function, so saving the current function's stack frame is of no use.

In**traditional recursion**, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don't get the result of your calculation until you have returned from every recursive call.

In **tail recursion**, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of "(return (recursive-function params))" (I think that's the syntax for Lisp).Basically, the **return value of any given recursive step is the same as the return value of the next recursive call.**

The consequence of this is that once you are ready to perform your next recursive step, you don't need the current stack frame any more. This allows for some optimization. In fact, with an appropriately written compiler, you should never have a stack overflowsnickerwith a tail recursive call. Simply reuse the current stack frame for the next recursive step. I'm pretty sure Lisp does this.

## Example

Consider a simple function that adds the first N integers. (e.g.sum(5) = 1 + 2 + 3 + 4 + 5 = 15).

## Here is a simple JavaScript implementation that uses recursion

```python
function recsum(x) {
if (x===1) {
return x;
} else {
return x + recsum(x-1);
}
}

If you calledrecsum(5), this is what the JavaScript interpreter would evaluate:

recsum(5)
5 + recsum(4)
5 + (4 + recsum(3))
5 + (4 + (3 + recsum(2)))
5 + (4 + (3 + (2 + recsum(1))))
5 + (4 + (3 + (2 + 1)))
15
```

Note how every recursive call has to complete before the JavaScript interpreter begins to actually do the work of calculating the sum.

## Here's a tail-recursive version of the same function

```python
function tailrecsum(x, running_total=0) {
if (x===0) {
return running_total;
} else {
return tailrecsum(x-1, running_total+x);
}
}
```

Here's the sequence of events that would occur if you calledtailrecsum(5), (which would effectively betailrecsum(5, 0), because of the default second argument).

tailrecsum(5, 0)
tailrecsum(4, 5)
tailrecsum(3, 9)
tailrecsum(2, 12)
tailrecsum(1, 14)
tailrecsum(0, 15)
15

In the tail-recursive case, with each evaluation of the recursive call, therunning_totalis updated.

## Recursion Limit

```python
import sys

sys.getrecursionlimit() #default 3000 for python

sys.setrecursionlimit(86400)
```

TCO - Tail Call Optimization

## TRE - Tail Recursion Elimination

It is a guard against a stack overflow.

Python (or rather, the CPython implementation) doesn't optimize tail recursion, and unbridled recursion causes stack overflows.

Changing the recursion limit is dangerous, the standard limit for python is a little conservative, but Python stackframes can be quite big.

Python isn't a functional language and tail recursion is not a particularly efficient technique. Rewriting the algorithm iteratively, if possible, is generally a better idea. Since Guido prefers to be able to have proper tracebacks Python will never optimize tail recursions

<https://en.wikipedia.org/wiki/Tail_call>

<https://towardsdatascience.com/advanced-concepts-in-recursion-every-effective-programmer-should-know-de233a092dbf>

<https://blog.moertel.com/posts/2013-06-12-recursion-to-iteration-4-trampolines.html>
