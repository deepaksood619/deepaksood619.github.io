# Concepts

## Goroutines & Channels

The native support for concurrency and parallelism. This makes Go an ideal candidate for applications that require heavy concurrent and/or parallel processing, networking and so on. Goroutines makes it so easy to start lightweight threads and channels provide a way to communicate between these threads acting like a message bus.

- **Goroutines** represent concurrent tasks
- **Channels** are used to communicate between tasks
- **Select** enables task synchronization

Goroutines exists only in the virtual space of go runtime and not in the OS.

Hence, a Go Runtime scheduler is needed which manages their lifecycle.

Go Runtime maintains three C structs for this purpose:

1. **The G Struct:** This represents a single go routine with it's properties such as stack pointer, base of stack, it's ID, it's cache and it's status

2. **The M Struct:** This represents an OS thread. It also contains a pointer to the global queue of runnable goroutines, the current running goroutine and the reference to the scheduler

3. **The Sched Struct:** It is a global struct and contains the queues free and waiting goroutines as well as threads.

So, on startup, go runtime starts a number of goroutines for GC, scheduler and user code. An OS Thread is created to handle these goroutines. These threads can be at most equal to GOMAXPROCS.

## Start from the bottom

A goroutine is created with initial only 2KB of stack size. Each function in go already has a check if more stack is needed or not and the stack can be copied to another region in memory with twice the original size. This makes goroutine very light on resources.

## Blocking is fine

If a goroutine blocks on system call, it blocks it's running thread. But another thread is taken from the waiting queue of Scheduler (the Sched struct) and used for other runnable goroutines.

However, if you communicate using channels in go which exists only in virtual space, the OS doesn't block the thread.Such goroutines simply go in the waiting state and other runnable goroutine (from the M struct) is scheduled in it's place.

## Don't interrupt

The go runtime scheduler does cooperative scheduling, which means another goroutine will only be scheduled if the current one is blocking or done. Some of these cases are:

- Channel send and receive operations, if those operations would block.
- The Go statement, although there is no guarantee that new goroutine will be scheduled immediately.
- Blocking syscalls like file and network operations.
- After being stopped for a garbage collection cycle.

This is better than pre-emptive scheduling which uses timely system interrupts (e.g. every 10 ms) to block and schedule a new thread which may lead a task to take longer than needed to finish when number of threads increases or when a higher priority tasks need to be scheduled while a lower priority task is running.

Another advantage is that, since it is invoked implicitly in the code e.g. during sleep or channel wait, the compile only needs to safe/restore the registers which are alive at these points. In Go, this meansonly 3 registers i.e. PC, SP and DX (Data Registers) being updated during context switchrather than all registers (e.g. AVX, Floating Point, MMX).

<https://codeburst.io/why-goroutines-are-not-lightweight-threads-7c460c1f155f>

## Pointers in Go

<https://www.digitalocean.com/community/conceptual_articles/understanding-pointers-in-go>
