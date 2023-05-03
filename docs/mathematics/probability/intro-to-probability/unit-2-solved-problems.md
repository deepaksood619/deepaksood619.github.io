# Unit 2 - Solved Problems

## Conditional probability example

We roll two fair 6-sided dice. Each one of the 36 possible outcomes is assumed to be equally likely.

- Find the probability that doubles are rolled (i.e., both dice have the same number).
- Given that the roll results in a sum of 4 or less, find the conditional probability that doubles are rolled.
- Find the probability that at least one die roll is a 6.
- Given that the two dice land on different numbers, find the conditional probability that at least one die roll is a 6.

![image](../../../media/Intro-Syllabus_Unit-2-Solved-Problems-image1.jpg)

## A chess tournament problem

This year's Belmont chess champion is to be selected by the following procedure. Bo and Ci, the leading challengers, first play a two-game match. If one of them wins both games, he gets to play a two-game *second round* with Al, the current champion. Al retains his championship unless a second round is required and the challenger beats Al in both games. If Al wins the initial game of the second round, no more games are played.

Furthermore, we know the following:

∙The probability that Bo will beat Ci in any particular game is 0.6.
∙The probability that Al will beat Bo in any particular game is 0.5.
∙The probability that Al will beat Ci in any particular game is 0.7.

Assume no tie games are possible and all games are independent.

1. Determine the a priori probabilities that

- the second round will be required.
- Bo will win the first round.
- Al will retain his championship this year.

2. Given that the second round is required, determine the conditional probabilities that

- Bo is the surviving challenger.
- Al retains his championship.

1. Given that the second round was required and that it comprised only one game, what is the conditional probability that it was Bo who won the first round?

![image](../../../media/Intro-Syllabus_Unit-2-Solved-Problems-image2.jpg)

![image](../../../media/Intro-Syllabus_Unit-2-Solved-Problems-image3.jpg)

## A coin tossing puzzle

A coin is tossed twice. Alice claims that the event of getting two Heads is at least as likely if we know that the first toss is Heads than if we know that at least one of the tosses is Heads. Is she right? Does it make a difference if the coin is fair or unfair? How can we generalize Alice's reasoning?

Solution - We can see that Alice claim is true without ever considering the probability of Head if it is biased or not.
Also P ( A intersection B | A ) = 1/2 and P ( A intersection B | A U B ) = 1/3, for a fair coin, where

A = 1st toss is head and B = 2nd toss is head

## The Monty Hall problem

This is a much discussed puzzle, based on an old American game show. You are told that a prize is equally likely to be found behind any one of three closed doors in front of you. You point to one of the doors. A friend opens for you one of the remaining two doors, after making sure that the prize is not behind it. At this point, you can stick to your initial choice, or switch to the other unopened door. You win the prize if it lies behind your final choice of a door. Consider the following strategies:

- Stick to your initial choice.
- **Switch to the other unopened door.**
- You first point to door 1. If door 2 is opened, you do not switch. If door 3 is opened, you switch.

Which is the best strategy?

## A random walker

Imagine a drunk tightrope walker, who manages to keep his balance, but takes a step forward with probabilitypand takes a step back with probability(1−p).

- What is the probability that after two steps, the tightrope walker will be at the same place on the rope as where he started?
- What is the probability that after three steps, the tightrope walker will be one step forward from where he started?
- Given that after three steps he has managed to move ahead one step, what is the probability that the first step he took was a step forward?

## Communication over a noisy channel

A source transmits a message (a string of symbols) over a noisy communication channel. Each symbol is0or1with probabilitypand1−p, respectively, and is received incorrectly with probabilityϵ0andϵ1, respectively (see the figure below). Errors in different symbol transmissions are independent.

- What is the probability that the kth symbol is received correctly?
- What is the probability that the string of symbols 1011 is received correctly?
- In an effort to improve reliability, each symbol is transmitted three times and the received string is decoded by majority rule. In other words, a 0 (or 1) is transmitted as 000 (or 111, respectively), and it is decoded at the receiver as a 0 (or 1) if and only if the received three-symbol string contains at least two 0's (or 1's, respectively). What is the probability that a 0 is correctly decoded?

- For what values ofϵ0is there an improvement in the probability of correct decoding of a 0 when the scheme of part (c) is used?

- Suppose that the scheme of part (c) is used. What is the probability that a symbol was 0 given that the received string is 101?

## Network reliability

An electrical system consists of identical components, each of which is operational with probabilityp, independent of other components. The components are connected in three subsystems, as shown in the figure. The system is operational if there is a path that starts at pointA, ends at pointB, and consists of operational components. What is the probability of this happening?
