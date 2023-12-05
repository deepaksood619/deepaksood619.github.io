# Intro

## There are three key elements of an operating system

1. Abstractions(process, thread, file, socket, memory)
2. Mechanisms(create, schedule, open, write, allocate)
3. Policies(LRU, EDF)

## There are two operating system design principles

1. Separation of mechanism and policyby implementing flexible mechanisms to support policies
2. Optimization for common case:Where will the OS be used? What will the user want to execute on that machine? What are the workload requirements?

## There are three types of Operating Systems commonly used nowadays

1. Monolithic OS, where the entire OS is working in kernel space and is alone in supervisor mode
2. Modular OS, in which some part of the system core will be located in independent files called modules that can be added to the system at run time
3. Micro OS, where the kernel is broken down into separate processes, known as servers. Some of the servers run in kernel space and some run in user-space

https://www.freecodecamp.org/news/what-is-an-os-operating-system-definition-for-beginners
