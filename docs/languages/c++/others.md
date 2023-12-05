# Others

## Log2

 A utility function to find Log n in base 2

```c++
int log2(int n) {
  return (n==1)? 0 : 1 + log2(n/2);
}
```

## RAII (Resource Acquisition Is Initialization)

Resource acquisition is initialization (RAII)is a [programming idiom](https://en.wikipedia.org/wiki/Programming_idiom) used in several [object-oriented languages](https://en.wikipedia.org/wiki/Object-oriented_programming_language) to describe a particular language behavior. In RAII, holding a resource is a [class invariant](https://en.wikipedia.org/wiki/Class_invariant), and is tied to [object lifetime](https://en.wikipedia.org/wiki/Object_lifetime): [resource allocation](https://en.wikipedia.org/wiki/Resource_allocation_(computer)) (or acquisition) is done during object creation (specifically initialization), by the [constructor](https://en.wikipedia.org/wiki/Constructor_(object-oriented_programming)), while resource deallocation (release) is done during object destruction (specifically finalization), by the [destructor](https://en.wikipedia.org/wiki/Destructor_(computer_programming)). In other words, resource acquisition must succeed for initialization to succeed. Thus the resource is guaranteed to be held between when initialization finishes and finalization starts (holding the resources is a class invariant), and to be held only when the object is alive. Thus if there are no object leaks, there are no [resource leaks](https://en.wikipedia.org/wiki/Resource_leak).

RAII is associated most prominently with [C++](https://en.wikipedia.org/wiki/C%2B%2B) where it originated, but also [D](https://en.wikipedia.org/wiki/D_(programming_language)), [Ada](https://en.wikipedia.org/wiki/Ada_(programming_language)), [Vala](https://en.wikipedia.org/wiki/Vala_(programming_language)), and [Rust](https://en.wikipedia.org/wiki/Rust_(programming_language)). The technique was developed for [exception-safe](https://en.wikipedia.org/wiki/Exception_safety)[resource management](https://en.wikipedia.org/wiki/Resource_management_(computing)) in C++during 1984--89, primarily by [Bjarne Stroustrup](https://en.wikipedia.org/wiki/Bjarne_Stroustrup) and [Andrew Koenig](https://en.wikipedia.org/wiki/Andrew_Koenig_(programmer)), and the term itself was coined by Stroustrup.RAII is generally pronounced as an [initialism](https://en.wikipedia.org/wiki/Initialism), sometimes pronounced as "R, A, double I".

Other names for this idiom includeConstructor Acquires, Destructor Releases(CADRe)and one particular style of use is calledScope-based Resource Management(SBRM).This latter term is for the special case of [automatic variables](https://en.wikipedia.org/wiki/Automatic_variable). RAII ties resources to objectlifetime, which may not coincide with entry and exit of a scope. (Notably variables allocated on the free store have lifetimes unrelated to any given scope.) However, using RAII for automatic variables (SBRM) is the most common use case.

https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization

Resource Acquisition Is Initializationor RAII, is a C++ programming techniquewhich binds the life cycle of a resource that must be acquired before use (allocated heap memory, thread of execution, open socket, open file, locked mutex, disk space, database connection - anything that exists in limited supply) to the [lifetime](https://en.cppreference.com/w/cpp/language/lifetime) of an object.

RAII guarantees that the resource is available to any function that may access the object (resource availability is a [class invariant](https://en.wikipedia.org/wiki/Class_invariant), eliminating redundant runtime tests). It also guarantees that all resources are released when the lifetime of their controlling object ends, in reverse order of acquisition. Likewise, if resource acquisition fails (the constructor exits with an exception), all resources acquired by every fully-constructed member and base subobject are released in reverse order of initialization. This leverages the core language features ([object lifetime](https://en.cppreference.com/w/cpp/language/lifetime), [scope exit](https://en.cppreference.com/w/cpp/language/statements), [order of initialization](https://en.cppreference.com/w/cpp/language/initializer_list#Initialization_order) and [stack unwinding](https://en.cppreference.com/w/cpp/language/throw#Stack_unwinding)) to eliminate resource leaks and guarantee exception safety. Another name for this technique isScope-Bound Resource Management(SBRM), after the basic use case where the lifetime of an RAII object ends due to scope exit.

RAII can be summarized as follows:

- encapsulate each resource into a class, where
  - the constructor acquires the resource and establishes all class invariants or throws an exception if that cannot be done,
  - the destructor releases the resource and never throws exceptions;
- always use the resource via an instance of a RAII-class that either
  - has automatic storage duration or temporary lifetime itself, or
  - has lifetime that is bounded by the lifetime of an automatic or temporary object

Move semantics make it possible to safely transfer resource ownership between objects, across scopes, and in and out of threads, while maintaining resource safety.

Classes with open()/close(), lock()/unlock(), or init()/copyFrom()/destroy() member functions are typical examples of non-RAII classes:

https://en.cppreference.com/w/cpp/language/raii

## Array Decay

The loss of type and dimensions of an array is known as decay of an array.This generally occurs when we pass the array into function by value or pointer. What it does is, it sends first address to the array which is a pointer, hence the size of array is not the original one, but the one occupied by the pointer in the memory.

https://www.geeksforgeeks.org/what-is-array-decay-in-c-how-can-it-be-prevented
