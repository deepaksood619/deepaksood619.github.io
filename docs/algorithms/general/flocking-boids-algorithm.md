---
slug: /algorithms/general/flocking-boids-algorithm
title: Understanding Flocking Boids Algorithm
description: Explore the Flocking Boids Algorithm, a fascinating model explaining bird flocking behavior through simple rules for collision, centering, and velocity.
created: 2023-03-05
last_update: 2023-03-07
---
Boids: Three simple rules lead to complex emergent flocking behavior in birds:

- Collision avoidance: point away from k nearest boids
- Flock centering: point towards the center of mass of k nearest boids
- Velocity matching: update velocity to the average of k nearest boids
