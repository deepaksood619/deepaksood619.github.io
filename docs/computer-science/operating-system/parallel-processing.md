# Parallel Processing

## Parallel Processing, MPP (Massive Parallel Processing)

**Symmetric Multi-Processing (SMP)** is a tightly coupled multiprocessor system where processors share resources -- single instances of the Operating System (OS), memory, I/O devices and connected using a common bus. SMP is the primary parallel architecture employed in servers and is depicted in the following image

![image](../../media/Parallel-Processing-image1.jpg)

**Massively Parallel Processing (MPP)** is the coordinated processing of a single task by multiple processors, each processor using its own OS and memory and communicating with each other using some form of messaging interface. MPP can be setup with a shared nothing or shared disk architecture

In a shared nothing architecture, there is no single point of contention across the system and nodes do not share memory or disk storage. Data is horizontally partitioned across nodes, such that each node has a subset of rows from each table in the database. Each node then processes only the rows on its own disks. Systems based on this architecture can achieve massive scale as there is no single bottleneck to slow down the system. This is what Emma is looking for.

MPP with shared-nothing architecture is depicted in the following image.

![image](../../media/Parallel-Processing-image2.jpg)

## Message Passing Interface (MPI)

Message Passing Interface(MPI) is a standardized and portable [message-passing](https://en.wikipedia.org/wiki/Message-passing) standard designed by a group of researchers from academia and industry to function on a wide variety of [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing) architectures. The standard defines the syntax and semantics of a core of library routines useful to a wide range of users writing portable message-passing programs in [C](https://en.wikipedia.org/wiki/C_(programming_language)), [C++](https://en.wikipedia.org/wiki/C%2B%2B), and [Fortran](https://en.wikipedia.org/wiki/Fortran). There are several well-tested and efficient implementations of MPI, many of which are open-source or in the public domain. These fostered the development of a parallel software industry, and encouraged development of portable and scalable large-scale parallel applications.

https://en.wikipedia.org/wiki/Message_Passing_Interface

## Concurrency vs Parallelism

![Concurrency vs Parallelism](../../media/Pasted%20image%2020240607132644.jpg)

## Embarrassingly Parallel

In parallel computing, an embarrassingly parallel problem is one that can be easily split into multiple parallel tasks with little to no communication between the tasks:

### Characteristics

These problems are considered relatively simple to parallelize, and are well suited to large, internet-based distributed platforms.

### Examples

Some examples of embarrassingly parallel jobs include:

- Rendering 3D graphics
- Monte Carlo simulations
- Image or video processing
- Parameter sweeps
- Data mining
- Brute-force search

### Term origin

The term "embarrassingly" refers to parallelization problems that are "embarrassingly easy".

[Embarrassingly parallel - Wikipedia](https://en.wikipedia.org/wiki/Embarrassingly_parallel)

[Embarrassingly Parallel Algorithms Explained](https://www.freecodecamp.org/news/embarrassingly-parallel-algorithms-explained-with-examples/)
