# Concurrency Problems

## Problems

- Deadlock

[deadlock](https://en.wikipedia.org/wiki/Deadlock), which occurs when many processes are waiting for a shared resource (critical section) which is being held by some other process. In this case, the processes just keep waiting and execute no further

- Distributed Deadlock
- Resource Starvation

[starvation](https://en.wikipedia.org/wiki/Resource_starvation), which occurs when a process is waiting to enter the critical section, but other processes monopolize the critical section, and the first process is forced to wait indefinitely;

- Priority Inversion

[priority inversion](https://en.wikipedia.org/wiki/Priority_inversion), which occurs when a high-priority process is in the critical section, and it is interrupted by a medium-priority process. This violation of priority rules can happen under certain circumstances and may lead to serious consequences in real-time systems

Happened in Mars Pathfinder in 1997

- Busy Waiting

[busy waiting](https://en.wikipedia.org/wiki/Busy_waiting), which occurs when a process frequently polls to determine if it has access to a critical section. This frequent polling robs processing time from other processes.

- Livelock

Alivelockis similar to a deadlock, except that the states of the processes involved in the livelock constantly change with regard to one another, none progressing. Its a special case of resource starvation

- Race Condition

Since threads have a shared memory space, they can have access to shared variables. A race condition occurs when multiple threads try to change the same variable simultaneously. The thread scheduler can arbitrarily swap between threads, so we have no way of knowing the order in which the threads will try to change the data. This can result in incorrect behavior in either of the threads, particularly if the threads decide to do something based on the value of the variable. To prevent this from happening, a mutual exclusion (or mutex)lockcan be placed around the piece of the code that modifies the variable so that only one thread can write to the variable at a time.

## Producer Consumer Problem

Also known as Bounded-buffer problem is a classic example of a multi-process synchronizationproblem.
The problem describes two processes, the producer and the consumer, who share a common, fixed-size [buffer](https://en.wikipedia.org/wiki/Buffer_(computer_science)) used as a [queue](https://en.wikipedia.org/wiki/Queue_(data_structure)).
The producer's job is to generate data, put it into the buffer, and start again. At the same time, the consumer is consuming the data (i.e., removing it from the buffer), one piece at a time.
The problem is to make sure that the producer won't try to add data into the buffer if it's full and that the consumer won't try to remove data from an empty buffer.
The solution for the producer is to either go to sleep or discard data if the buffer is full. The next time the consumer removes an item from the buffer, it notifies the producer, who starts to fill the buffer again. In the same way, the consumer can go to sleep if it finds the buffer empty. The next time the producer puts data into the buffer, it wakes up the sleeping consumer. The solution can be reached by means of [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication), typically using [semaphores](https://en.wikipedia.org/wiki/Semaphore_(programming)). An inadequate solution could result in a [deadlock](https://en.wikipedia.org/wiki/Deadlock) where both processes are waiting to be awakened. The problem can also be generalized to have multiple producers and consumers.

## Reader-Writer Problem

In [computer science](https://en.wikipedia.org/wiki/Computer_science), the**readers-writers problems**are examples of a common computing problem in [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)). There are at least three variations of the problems, which deal with situations in which many [threads](https://en.wikipedia.org/wiki/Thread_(computer_science)) try to access the same shared resource at one time. Some threads may read and some may write, with the constraint that no process may access the shared resource for either reading or writing while another process is in the act of writing to it. (In particular, it *is*allowed for two or more readers to access the share at the same time.) A [readers-writer lock](https://en.wikipedia.org/wiki/Readers-writer_lock) is a [data structure](https://en.wikipedia.org/wiki/Data_structure) that solves one or more of the readers-writers problems.

## Sleeping Barber Problem

The**sleeping barber problem**is a classic inter-process communication and [synchronization](https://en.wikipedia.org/wiki/Synchronization) problem between multiple [operating system](https://en.wikipedia.org/wiki/Operating_system)[processes](https://en.wikipedia.org/wiki/Process_(computing)).

## Dining Philosophers Problem

The**dining philosophers problem**is an example problem often used in [concurrent](https://en.wikipedia.org/wiki/Concurrency_(computer_science)) algorithm design to illustrate [synchronization](https://en.wikipedia.org/wiki/Synchronization_(computer_science)) issues and techniques for resolving them.

## Problem Statement

Five silent [philosophers](https://en.wikipedia.org/wiki/Philosopher) sit at a round table with bowls of [spaghetti](https://en.wikipedia.org/wiki/Spaghetti). Forks are placed between each pair of adjacent philosophers.

Each philosopher must alternately think and eat. However, a philosopher can only eat spaghetti when they have both left and right forks. Each fork can be held by only one philosopher and so a philosopher can use the fork only if it is not being used by another philosopher. After an individual philosopher finishes eating, they need to put down both forks so that the forks become available to others. A philosopher can take the fork on their right or the one on their left as they become available, but cannot start eating before getting both forks.

Eating is not limited by the remaining amounts of spaghetti or stomach space; an infinite supply and an infinite demand are assumed.

The problem is how to design a discipline of behavior (a [concurrent](https://en.wikipedia.org/wiki/Concurrency_(computer_science))[algorithm](https://en.wikipedia.org/wiki/Algorithm)) such that no philosopher will starve; i.e., each can forever continue to alternate between eating and thinking, assuming that no philosopher can know when others may want to eat or think.

## Solutions

- Resource hierarchy solution
- Arbitrator solution (waiter / mutex)
- Chandy/Misra solution

## References

https://en.wikipedia.org/wiki/Producer%E2%80%93consumer_problem

https://en.wikipedia.org/wiki/Readers%E2%80%93writers_problem

https://en.wikipedia.org/wiki/Sleeping_barber_problem

https://en.wikipedia.org/wiki/Cigarette_smokers_problem

https://en.wikipedia.org/wiki/Dining_philosophers_problem

https://www.geeksforgeeks.org/operating-system-dining-philosopher-problem-using-semaphores

https://www.geeksforgeeks.org/dining-philosophers-solution-using-monitors
