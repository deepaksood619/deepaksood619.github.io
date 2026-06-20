---
slug: /algorithms/advanced-algorithms/multi-armed-bandit-mab
title: Understanding Multi-Armed Bandit (MAB)
description: Explore the Multi-Armed Bandit problem and its applications in optimizing resource allocation under uncertainty.
created: 2023-03-05
updated: 2023-12-05
---
The multi-armed bandit (MAB) is a classic problem in decision sciences. Effectively, it is one of optimal resource allocation under uncertainty.

The MAB problem is this; how do you most efficiently identify the best machine to play, whilst sufficiently exploring the many options in real time? This problem is not an exercise in theoretical abstraction, it is an analogy for a common problem that organisations face all the time, that is, how to identify the best message to present to customers (message is broadly defined here i.e. webpages, advertising, images) such that it maximises some business objective (e.g. clickthrough rate, signups).

Bandit algorithms or samplers, are a means of testing and optimising variant allocation quickly.

- Thompson sampling (TS)
- epsilon-greedy algorithm

https://towardsdatascience.com/solving-multiarmed-bandits-a-comparison-of-epsilon-greedy-and-thompson-sampling-d97167ca9a50
