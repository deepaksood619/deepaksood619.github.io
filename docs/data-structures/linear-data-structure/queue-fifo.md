# Queue FIFO

Queue is also an abstract data type or a linear data structure, in which the first element is inserted from one end called **REAR**(also called tail), and the deletion of existing element takes place from the other end called as **FRONT**(also called head). This makes queue as FIFO(First in First Out) data structure, which means that element inserted first will also be removed first.

The process to add an element into queue is called **Enqueue** and the process of removal of an element from queue is called **Dequeue**.

## Basic features of Queue

1. Like Stack, Queue is also an ordered list of elements of similar data types.
2. Queue is a FIFO( First in First Out ) structure.
3. Once a new element is inserted into the Queue, all the elements inserted before the new element in the queue must be removed, to remove the new element.4. **peek( )** function is oftenly used to return the value of first element without dequeuing it.

## Applications

1. Serving requests on a single shared resource, like a printer, CPU task scheduling etc.
2. In real life scenario, Call Center phone systems uses Queues to hold people calling them in an order, until a service representative is free.
3. Handling of interrupts in real-time systems. The interrupts are handled in the same order as they arrive i.e First come first served.

## Operations

1. Enqueue O(1)
2. Dequeue O(1) (pronounced as deck)
3. Peek O(1)

## Implementation

### Using Linked-list

![image](../../media/Queue-FIFO-image1.jpg)

### Using resizing array Interview Questions

- Implement stack using a queue
- Reverse first k elements of a queue
- Generate binary numbers from 1 to n using a queue
