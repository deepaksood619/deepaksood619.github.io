# Two-Stack Algorithm

Goal: Evaluate Infix Expressions

Ex: (1 + (( 2 + 3 ) *( 4* 5 )))

1. Value: Push onto the value stack

2. Operator: Push onto the operator stack

3. Left parenthesis: ignore

4. Right parenthesis: pop operator and two values, push the result of applying that operator onto the operand stack.
