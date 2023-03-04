# Halting Problem

In [computability theory](https://en.wikipedia.org/wiki/Computability_theory_(computer_science)), the**halting problem** is the problem of determining, from a description of an arbitrary [computer program](https://en.wikipedia.org/wiki/Computer_program) and an input, whether the program will finish running (i.e., halt) or continue to run forever.

[Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) proved in 1936 that a general [algorithm](https://en.wikipedia.org/wiki/Algorithm) to solve the halting problem for *all*possible program-input pairs cannot exist. A key part of the proof was a mathematical definition of a computer and program, which became known as a [Turing machine](https://en.wikipedia.org/wiki/Turing_machine); the halting problem is [*undecidable*](https://en.wikipedia.org/wiki/Undecidable_problem) over Turing machines. It is one of the first examples of a [decision problem](https://en.wikipedia.org/wiki/Decision_problem).

Informally, for any program *f* that might determine if programs halt, a "pathological" program *g* called with an input can pass its own source and its input to *f* and then specifically do the opposite of what *f* predicts *g* will do. No *f* can exist that handles this case.

## References

<https://en.wikipedia.org/wiki/Halting_problem>
