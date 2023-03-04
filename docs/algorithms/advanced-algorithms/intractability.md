# Intractability

Is there a universal problem-solving model to which all problems that we would like to solve reduce and for which we know an efficient algorithm? You may be surprised to learn that we do not know the answer to this question. In this lecture we introduce the complexity classes P, NP, and NP-complete, pose the famous P = NP question, and consider implications in the context of algorithms that we have treated in this course.

![image](../../media/Intractability-image1.jpg)

![image](../../media/Intractability-image2.jpg)

![image](../../media/Intractability-image3.jpg)

## Church-Turing Thesis (Computability Thesis)

Church-Turing Thesis is a hypothesis about the nature of computable functions. It states that a function on the natural numbers is computable by a human being following an algorithm, ignoring resource limitation, if and only if it is computable by a Turing machine

![image](../../media/Intractability-image4.jpg)

![image](../../media/Intractability-image5.jpg)

![image](../../media/Intractability-image6.jpg)

![image](../../media/Intractability-image7.jpg)

![image](../../media/Intractability-image8.jpg)

Intractable - hard to control or deal with (difficult or stubborn)

![image](../../media/Intractability-image9.jpg)

## Search Problems

![image](../../media/Intractability-image10.jpg)

## ILP - Integer Linear Programming

Aninteger programmingproblem is a [mathematical optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) or [feasibility](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem) program in which some or all of the variables are restricted to be [integers](https://en.wikipedia.org/wiki/Integer). In many settings the term refers tointeger [linear programming](https://en.wikipedia.org/wiki/Linear_programming)(ILP), in which the objective function and the constraints (other than the integer constraints) are [linear](https://en.wikipedia.org/wiki/Linear_function_(calculus)).

Integer programming is [NP-complete](https://en.wikipedia.org/wiki/NP-complete). In particular, the special case of 0-1 integer linear programming, in which unknowns are binary, and only the restrictions must be satisfied, is one of [Karp's 21 NP-complete problems](https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems).

If some decision variables are not discrete the problem is known as amixed-integer programmingproblem.

<https://en.wikipedia.org/wiki/Integer_programming>

<https://www.toptal.com/algorithms/mixed-integer-programming>

![image](../../media/Intractability-image11.jpg)

![image](../../media/Intractability-image12.jpg)

![image](../../media/Intractability-image13.jpg)

![image](../../media/Intractability-image14.jpg)

![image](../../media/Intractability-image15.jpg)

![image](../../media/Intractability-image16.jpg)

![image](../../media/Intractability-image17.jpg)

![image](../../media/Intractability-image18.jpg)

## P vs NP

NP - Non Deterministic Polynomial Time (The complexity class NPcontains all of the problems inP - it is often incorrectly ascribed to mean "not polynomial time.")

![image](../../media/Intractability-image19.jpg)

![image](../../media/Intractability-image20.jpg)

![image](../../media/Intractability-image21.jpg)

![image](../../media/Intractability-image22.jpg)

![image](../../media/Intractability-image23.jpg)

![image](../../media/Intractability-image24.jpg)

![image](../../media/Intractability-image25.jpg)

![image](../../media/Intractability-image26.jpg)

## Classifying Problems

![image](../../media/Intractability-image27.jpg)

![image](../../media/Intractability-image28.jpg)

![image](../../media/Intractability-image29.jpg)

![image](../../media/Intractability-image30.jpg)

![image](../../media/Intractability-image31.jpg)

![image](../../media/Intractability-image32.jpg)

![image](../../media/Intractability-image33.jpg)

<https://sahandsaba.com/understanding-sat-by-implementing-a-simple-sat-solver-in-python.html>

## NP-completeness

![image](../../media/Intractability-image34.jpg)

## Cook - Levin Theorem

In [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory), the**Cook--Levin theorem**, also known as **Cook's theorem**, states that the [Boolean satisfiability problem](https://en.wikipedia.org/wiki/Boolean_satisfiability_problem) is [NP-complete](https://en.wikipedia.org/wiki/NP-completeness). That is, any problem in [NP](https://en.wikipedia.org/wiki/NP_(complexity)) can be [reduced](https://en.wikipedia.org/wiki/Reduction_(complexity)) in polynomial time by a [deterministic Turing machine](https://en.wikipedia.org/wiki/Deterministic_Turing_machine) to the problem of determining whether a Boolean formula is satisfiable.

An important consequence of this theorem is that if there exists a deterministic polynomial time algorithm for solving Boolean satisfiability, then every [NP](https://en.wikipedia.org/wiki/NP_(complexity)) problem can be solved by a deterministic polynomial time algorithm.

![image](../../media/Intractability-image35.jpg)

![image](../../media/Intractability-image36.jpg)

![image](../../media/Intractability-image37.jpg)

![image](../../media/Intractability-image38.jpg)

![image](../../media/Intractability-image39.jpg)

![image](../../media/Intractability-image40.jpg)

## Coping with intractability

![image](../../media/Intractability-image41.jpg)

![image](../../media/Intractability-image42.jpg)

![image](../../media/Intractability-image43.jpg)

![image](../../media/Intractability-image44.jpg)

![image](../../media/Intractability-image45.jpg)

![image](../../media/Intractability-image46.jpg)

![image](../../media/Intractability-image47.jpg)

![image](../../media/Intractability-image48.jpg)
