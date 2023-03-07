# Computational Complexity Theory

Computational complexity theoryfocuses on classifying computational problems according to their inherent difficulty, and relating these classes to each other. A computational problem is a task solved by a computer. A computation problem is solvable by mechanical application of mathematical steps, such as an [algorithm](https://en.wikipedia.org/wiki/Algorithm).

A problem is regarded as inherently difficult if its solution requires significant resources, whatever the algorithm used. The theory formalizes this intuition, by introducing mathematical [models of computation](https://en.wikipedia.org/wiki/Models_of_computation) to study these problems and quantifying their [computational complexity](https://en.wikipedia.org/wiki/Computational_complexity), i.e., the amount of resources needed to solve them, such as time and storage. Other measures of complexity are also used, such as the amount of communication (used in [communication complexity](https://en.wikipedia.org/wiki/Communication_complexity)), the number of [gates](https://en.wikipedia.org/wiki/Logic_gate) in a circuit (used in [circuit complexity](https://en.wikipedia.org/wiki/Circuit_complexity)) and the number of processors (used in [parallel computing](https://en.wikipedia.org/wiki/Parallel_computing)). One of the roles of computational complexity theory is to determine the practical limits on what computers can and cannot do. The [P versus NP problem](https://en.wikipedia.org/wiki/P_versus_NP_problem), one of the seven [Millennium Prize Problems](https://en.wikipedia.org/wiki/Millennium_Prize_Problems), is dedicated to the field of computational complexity.

Closely related fields in theoretical computer science are [analysis of algorithms](https://en.wikipedia.org/wiki/Analysis_of_algorithms) and [computability theory](https://en.wikipedia.org/wiki/Computability_theory). A key distinction between analysis of algorithms and computational complexity theory is that the former is devoted to analyzing the amount of resources needed by a particular algorithm to solve a problem, whereas the latter asks a more general question about all possible algorithms that could be used to solve the same problem. More precisely, computational complexity theory tries to classify problems that can or cannot be solved with appropriately restricted resources. In turn, imposing restrictions on the available resources is what distinguishes computational complexity from computability theory: the latter theory asks what kind of problems can, in principle, be solved algorithmically.

<https://en.wikipedia.org/wiki/Computational_complexity_theory>

Our proof claims that the set of possible programs are countably infinite while the set of languages over an alphabet is uncountably infinite.

Infinite set divided into two parts

1. Countably infinite

A countably infinite set is one that can be enumerated. Ex - even numbers

2. Uncountably infinite

An uncountably infinite set cannot be enumerated. Ex - real numbers.

## Countably many programs

The set of all strings over any alphabet (e.g. set of all computer programs) is countable.

## Uncountably many languages

The set of all languages over any alphabet is uncountable

Since the set of all valid programs are countable but the set of function is not, then there must be some functions for which we simply cannot write programs.

## Turing Machine

The input to the machine is a tape onto which input has been written, Using a read/write head, machine turns input into output through a series of steps. At each step machine has to make a decision of whether and what to write on tape and whether to move left or right.

The decision is based on two things -

- Current symbol under the read/write head, and

- The machine's internal state, which is also updated when a symbol is written

## Universality

In 1926, Alan Turing wrote a famous paper, "On Computable Numbers". He realized that a computer program itself can be considered input to a computer. With this point of view, he had the beautiful idea that a Turing machine could simulate or execute that input. The idea of such a Universal machine was a major breakthrough the allowed Turing to develop unsolvable problems.

## Church-Turing Thesis

The Church-Turing Thesis states that everything that is computable is computable by a Turing machine.

## Recognizability & Decidability

A language is recognizable if there is a Turing machine that recognized it.

A language is decidable if there is a Turing machine that decides it.

To be a recognizer of a language, a Turing machine must accept every string in the language and it must not accept anything not in the language. It may reject or loop on such strings. To be a decider, a Turing machine must always halt on its input either by accepting or by rejecting.

Here, the idea of halting on input is critical. In fact, we see that deciders are more powerful than recognizers. Furthermore, a problem is solvable, or put another way, a function is decidable only if there exists a Turing machine that decides the language described by the function.

## Undecidability & Halting Problem

The problem of checking if a program will halt or not is an undecidable problem. It simply can't be done.

## Tractability Subtleties

To computer science novices, the difference between the matching and clique problems might not seem like a big deal. In fact, the difference between a problem inPand a problem inNPcan be very subtle. Being able to tell the difference is important for anyone designing algorithms in the real world.

## Key-Points

1. There are some problems that simply cannot be computed, like the halting problem.

2. There are some things that cannot be computed efficiently, like the problems in NPC.

<https://www.toptal.com/algorithms/computability-theory-complexity>
