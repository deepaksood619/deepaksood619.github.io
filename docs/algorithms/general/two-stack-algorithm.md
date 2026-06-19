---
slug: /algorithms/general/two-stack-algorithm
title: Two-Stack Algorithm for Infix Evaluation
description: Learn how the Two-Stack Algorithm effectively evaluates infix expressions using value and operator stacks.
created: 2023-03-05
last_update: 2023-03-07
---
Goal: Evaluate Infix Expressions

Ex: (1 + (( 2 + 3 ) *( 4* 5 )))

1. Value: Push onto the value stack

2. Operator: Push onto the operator stack

3. Left parenthesis: ignore

4. Right parenthesis: pop operator and two values, push the result of applying that operator onto the operand stack.
