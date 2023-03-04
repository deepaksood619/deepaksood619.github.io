# Coroutines

[Coroutines](https://www.geeksforgeeks.org/coroutine-in-python/) are general control structures where flow control is cooperatively passed between two different routines without returning.
Coroutinesare [computer program](https://en.wikipedia.org/wiki/Computer_program) components that generalize [subroutines](https://en.wikipedia.org/wiki/Subroutine) for [non-preemptive multitasking](https://en.wikipedia.org/wiki/Non-preemptive_multitasking), by allowing execution to be suspended and resumed. Coroutines are well-suited for implementing familiar program components such as [cooperative tasks](https://en.wikipedia.org/wiki/Cooperative_multitasking), [exceptions](https://en.wikipedia.org/wiki/Exception_handling), [event loops](https://en.wikipedia.org/wiki/Event_loop), [iterators](https://en.wikipedia.org/wiki/Iterator), [infinite lists](https://en.wikipedia.org/wiki/Lazy_evaluation) and [pipes](https://en.wikipedia.org/wiki/Pipeline_(software)).

## Comparision with subroutines

Subroutines are special cases of coroutines.When subroutines are invoked, execution begins at the start, and once a subroutine exits, it is finished; an instance of a subroutine only returns once, and does not hold state between invocations. By contrast, coroutines can exit by calling other coroutines, which may later return to the point where they were invoked in the original coroutine; from the coroutine's point of view, it is not exiting but calling another coroutine.Thus, a coroutine instance holds state, and varies between invocations; there can be multiple instances of a given coroutine at once. The difference between calling another coroutine by means of ["yielding"](https://en.wikipedia.org/wiki/Yield_(multithreading)) to it and simply calling another routine (which then, also, would return to the original point), is that the relationship between two coroutines which yield to each other is not that of caller-callee, but instead symmetric.
Any subroutine can be translated to a coroutine which does not callyield.

## Comparision with threads

Coroutines are very similar to [threads](https://en.wikipedia.org/wiki/Thread_(computing)). However, coroutines are [cooperatively](https://en.wikipedia.org/wiki/Cooperative_multitasking) multitasked, whereas threads are typically [preemptively](https://en.wikipedia.org/wiki/Preemptive_multitasking)[multitasked](https://en.wikipedia.org/wiki/Multitasking). This means that coroutines provide [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)) but not [parallelism](https://en.wikipedia.org/wiki/Parallel_computing). The advantages of coroutines over threads are that they may be used in a [hard-realtime](https://en.wikipedia.org/wiki/Hard_realtime) context ([switching](https://en.wikipedia.org/wiki/Context_switch) between coroutines need not involve any [system calls](https://en.wikipedia.org/wiki/System_calls) or any [blocking](https://en.wikipedia.org/wiki/Blocking_(computing)) calls whatsoever), there is no need for synchronisation primitives such as [mutexes](https://en.wikipedia.org/wiki/Mutex), semaphores, etc. in order to guard [critical sections](https://en.wikipedia.org/wiki/Critical_sections), and there is no need for support from the operating system.
It is possible to implement coroutines using preemptively-scheduled threads, in a way that will be transparent to the calling code, but some of the advantages (particularly the suitability for hard-realtime operation and relative cheapness of switching between them) will be lost.

## Comparision with generators

[Generators](https://en.wikipedia.org/wiki/Generator_(computer_science)), also known as semicoroutines, are a subset of coroutines. Specifically, while both can yield multiple times, suspending their execution and allowing re-entry at multiple entry points, they differ in coroutines' ability to control where execution continues immediately after they yield, while generators cannot, instead transferring control back to the generator's caller.That is, since generators are primarily used to simplify the writing of [iterators](https://en.wikipedia.org/wiki/Iterator), theyieldstatement in a generator does not specify a coroutine to jump to, but rather passes a value back to a parent routine.

## Comparision with mutual recursion

Using coroutines for state machines or concurrency is similar to using [mutual recursion](https://en.wikipedia.org/wiki/Mutual_recursion) with [tail calls](https://en.wikipedia.org/wiki/Tail_call), as in both cases the control changes to a different one of a set of routines. However, coroutines are more flexible and generally more efficient. Since coroutines yield rather than return, and then resume execution rather than restarting from the beginning, they are able to hold state, both variables (as in a closure) and execution point, and yields are not limited to being in tail position; mutually recursive subroutines must either use shared variables or pass state as parameters. Further, each mutually recursive call of a subroutine requires a new stack frame (unless [tail call elimination](https://en.wikipedia.org/wiki/Tail_call_elimination) is implemented), while passing control between coroutines uses the existing contexts and can be implemented simply by a jump.

## Implementations

1. Goroutine in Golang

2. lightweight threads / suspending functions in Kotlin

## References

<https://en.wikipedia.org/wiki/Coroutine>
