# Cohesion and Coupling

## COUPLING - An indication of the strength of interconnections between program units

Highly coupled have program units dependent on each other. Loosely coupled are made up of units that are independent or almost independent.
Modules are independent if they can function completely without the presence of the other. Obviously, can't have modules completely independent of each other. Must interact so that can produce desired outputs. The more connections between modules, the more dependent they are in the sense that more info about one modules is required to understand the other module.
Three factors: number of interfaces, complexity of interfaces, type of info flow along interfaces.

Want to minimize number of interfaces between modules, minimize the complexity of each interface, and control the type of info flow. An interface of a module is used to pass information to and from other modules.
In general, modules tightly coupled if they use shared variables or if they exchange control info.

Loose coupling if info held within a unit and interface with other units via parameter lists. Tight coupling if shared global data.
If need only one field of a record, don't pass entire record. Keep interface as simple and small as possible.
Two types of info flow: data or control.

- Passing or receiving back control info means that the action of the module will depend on this control info, which makes it difficult to understand the module.
- Interfaces with only data communication result in lowest degree of coupling, followed by interfaces that only transfer control data. Highest if data is hybrid.
Ranked highest to lowest:

1. Content coupling: if one directly references the contents of the other.
    When one module modifies local data values or instructions in another module. (can happen in assembly language)
    if one refers to local data in another module.
    if one branches into a local label of another.

2. Common coupling: access to global data.
    modules bound together by global data structures.

3. Control coupling: passing control flags (as parameters or globals) so that one module controls the sequence of processing steps in another module.

4. Stamp coupling: similar to common coupling except that global variables are shared selectively among routines that require the data. E.g., packages in Ada. More desirable than common coupling because fewer modules will have to be modified if a shared data structure is modified. Pass entire data structure but need only parts of it.

5. Data coupling: use of parameter lists to pass data items between routines.

## COHESION - Measure of how well module fits together

A component should implement a single logical function or single logical entity. All the parts should contribute to the implementation.

Coupling, in the computer science lingo, means to link two parts of a system, so that changes in one of them directly affect the other one, and is usually avoided as much as possible.

### Many levels of cohesion

1. Coincidental cohesion: the parts of a component are not related but simply bundled into a single component.
    harder to understand and not reusable.

2. Logical association: similar functions such as input, error handling, etc. put together. Functions fall in same logical class. May pass a flag to determine which ones executed.
    interface difficult to understand. Code for more than one function may be intertwined, leading to severe maintenance problems. Difficult to reuse

3. Temporal cohesion: all of statements activated at a single time, such as start up or shut down, are brought together. Initialization, clean up.
    Functions weakly related to one another, but more strongly related to functions in other modules so may need to change lots of modules when do maintenance.

4. Procedural cohesion: a single control sequence, e.g., a loop or sequence of decision statements. Often cuts across functional lines. May contain only part of a complete function or parts of several functions.
    Functions still weakly connected, and again unlikely to be reusable in another product.

5. Communicational cohesion: operate on same input data or produce same output data. May be performing more than one function. Generally acceptable if alternate structures with higher cohesion cannot be easily identified.
    still problems with reusability.

6. Sequential cohesion: output from one part serves as input for another part. May contain several functions or parts of different functions.

7. Informational cohesion: performs a number of functions, each with its own entry point, with independent code for each function, all performed on same data structure. Different than logical cohesion because functions not intertwined.

8. Functional cohesion: each part necessary for execution of a single function. e.g., compute square root or sort the array.
    Usually reusable in other contexts. Maintenance easier.

9. Type cohesion: modules that support a data abstraction.
    Not strictly a linear scale. Functional much stronger than rest while first two much weaker than others. Often many levels may be applicable when considering two elements of a module. Cohesion of module considered as highest level of cohesion that is applicable to all elements in the module.
