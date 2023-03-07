# Combinatorial Optimization

In [Operations Research](https://en.wikipedia.org/wiki/Operations_Research), [applied mathematics](https://en.wikipedia.org/wiki/Applied_mathematics) and [theoretical computer science](https://en.wikipedia.org/wiki/Theoretical_computer_science), combinatorial optimizationis a topic that consists of finding an optimal object from a [finite set](https://en.wikipedia.org/wiki/Finite_set) of objects.In many such problems, [exhaustive search](https://en.wikipedia.org/wiki/Exhaustive_search) is not tractable. It operates on the domain of those optimization problems, in which the set of [feasible solutions](https://en.wikipedia.org/wiki/Candidate_solution) is [discrete](https://en.wikipedia.org/wiki/Discrete_set) or can be reduced to discrete, and in which the goal is to find the best solution. Some common problems involving combinatorial optimization are the [travelling salesman problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)("TSP") and the [minimum spanning tree problem](https://en.wikipedia.org/wiki/Minimum_spanning_tree)("MST").

Combinatorial optimization is a subset of [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) that is related to [operations research](https://en.wikipedia.org/wiki/Operations_research), [algorithm theory](https://en.wikipedia.org/wiki/Algorithm), and [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory). It has important applications in several fields, including [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence), [machine learning](https://en.wikipedia.org/wiki/Machine_learning), [auction theory](https://en.wikipedia.org/wiki/Auction_theory), and [software engineering](https://en.wikipedia.org/wiki/Software_engineering).

Some research literatureconsiders [discrete optimization](https://en.wikipedia.org/wiki/Discrete_optimization) to consist of [integer programming](https://en.wikipedia.org/wiki/Integer_programming) together with combinatorial optimization (which in turn is composed of [optimization problems](https://en.wikipedia.org/wiki/Optimization_problem) dealing with [graph structures](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics))) although all of these topics have closely intertwined research literature. It often involves determining the way to efficiently allocate resources used to find solutions to mathematical problems.

<https://en.wikipedia.org/wiki/Combinatorial_optimization>

<https://www.toptal.com/algorithms/horuslp-python-optimization-library>

<https://www.toptal.com/python/horuslp-gurobi-optimization>

## Solvers

While the earliest optimization problems were solved by teams of mathematicians working with calculators, most optimization problems today are solved using specialized software called solvers.

Asolveris a piece of [mathematical software](https://en.wikipedia.org/wiki/Mathematical_software), possibly in the form of a stand-alone [computer program](https://en.wikipedia.org/wiki/Computer_program) or as a [software library](https://en.wikipedia.org/wiki/Library_(computing)), that 'solves' a mathematical problem. A solver takes problem descriptions in some sort of generic form and calculates their solution. In a solver, the emphasis is on creating a program or library that can easily be applied to other problems of similar type.

Types of problems with existing dedicated solvers include:

- [Linear](https://en.wikipedia.org/wiki/Linear_equation) and [non-linear equations](https://en.wikipedia.org/wiki/Non-linear_equation). In the case of a single equation, the "solver" is more appropriately called a [root-finding algorithm](https://en.wikipedia.org/wiki/Root-finding_algorithm).
- [Systems of linear equations](https://en.wikipedia.org/wiki/System_of_linear_equations).
- [Nonlinear systems](https://en.wikipedia.org/wiki/Nonlinear_system).
- [Systems of polynomial equations](https://en.wikipedia.org/wiki/Systems_of_polynomial_equations), which are a special case of non linear systems, better solved by specific solvers.
- Linear and non-linear [optimisation](https://en.wikipedia.org/wiki/Optimization_(mathematics)) problems
- Systems of [ordinary differential equations](https://en.wikipedia.org/wiki/Ordinary_differential_equation)
- Systems of [differential algebraic equations](https://en.wikipedia.org/wiki/Differential_algebraic_equation)
- [Boolean satisfiability problems](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem), including [SAT solvers](https://en.wikipedia.org/wiki/SAT_solver)
- [Quantified boolean formula](https://en.wikipedia.org/wiki/Quantified_boolean_formula) solvers
- [Constraint satisfaction problems](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem)
- [Shortest path problems](https://en.wikipedia.org/wiki/Shortest_path_problem)
- [Minimum spanning tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree) problems
- [Search algorithms](https://en.wikipedia.org/wiki/Search_algorithm)
- Game solversfor problems in [game theory](https://en.wikipedia.org/wiki/Game_theory)

The [General Problem Solver](https://en.wikipedia.org/wiki/General_Problem_Solver)(GPS) is a particular computer program created in 1957 by [Herbert Simon](https://en.wikipedia.org/wiki/Herbert_A._Simon), [J. C. Shaw](https://en.wikipedia.org/wiki/Cliff_Shaw), and [Allen Newell](https://en.wikipedia.org/wiki/Allen_Newell) intended to work as a universal problem solver, that theoretically can be used to solve every possible problem that can be formalized in a symbolic system, given the right input configuration. It was the first computer program which separated its knowledge of problems (in the form of [domain](https://en.wikipedia.org/wiki/Problem_domain) rules) from its strategy of how to solve problems (as a general search [engine](https://en.wikipedia.org/wiki/Software_engine)).

General solvers typically use an architecture similar to the GPS to decouple a problem's definition from the strategy used to solve it. The advantage in this decoupling is that the solver doesn't depend on the details of any particular problem instance. The strategy utilized by general solvers was based on a general algorithm (generally based on [backtracking](https://en.wikipedia.org/wiki/Backtracking)) with the only goal of completeness. This induces an exponential [computational time](https://en.wikipedia.org/wiki/Computational_time) that dramatically limits their usability. Modern solvers use a more specialized approach, which takes advantage of the structure of the problems that the solver aims to spend as little time as possible backtracking.

For problems of a particular class (e.g., systems of [non-linear equations](https://en.wikipedia.org/wiki/Non-linear_equation)) there are usually a wide range of different algorithms available; sometimes a solver implements multiple algorithms, but sometimes just one.

<https://en.wikipedia.org/wiki/Solver>
