# Operators

- Arithmetic Operators
- Comparison Operators
- Logical (or Relational) Operators
- Assignment Operators
- Conditional (or ternary) Operators

## Arithmetic Operators

There are following arithmetic operators supported by PHP language −

Assume variable A holds 10 and variable B holds 20 then −

| Operator | Description                                                 | Example              |
|----------|----------------------------------------------|----------------|
| +       | Adds two operands                                           | A + B will give 30   |
| -   | Subtracts second operand from the first                     | A - B will give -10  |
| *       | Multiply both operands                                      | A * B will give 200 |
| /        | Divide numerator by de-numerator                            | B / A will give 2    |
| %       | Modulus Operator and remainder of after an integer division | B % A will give 0    |
| ++       | Increment operator, increases integer value by one          | A++ will give 11     |
| --  | Decrement operator, decreases integer value by one          | A-- will give 9     |

## Comparison Operators

There are following comparison operators supported by PHP language

Assume variable A holds 10 and variable B holds 20 then −

| Operator | Description                                                                                                                     | Example                |
|----------|--------------------------------------------------|-------------|
| ==       | Checks if the value of two operands are equal or not, if yes then condition becomes true.                                       | (A == B) is not true.  |
| !=       | Checks if the value of two operands are equal or not, if values are not equal then condition becomes true.                      | (A != B) is true.      |
| >       | Checks if the value of left operand is greater than the value of right operand, if yes then condition becomes true.             | (A > B) is not true.  |
| <       | Checks if the value of left operand is less than the value of right operand, if yes then condition becomes true.                | (A < B) is true.      |
| >=      | Checks if the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true. | (A >= B) is not true. |
| <=      | Checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true.    | (A <= B) is true.     |

## Logical Operators

There are following logical operators supported by PHP language

Assume variable A holds 10 and variable B holds 20 then −

| Operator | Description                                                                                                                                      | Example             |
|----------|----------------------------------------------------|-----------|
| and      | Called Logical AND operator. If both the operands are true then condition becomes true.                                                          | (A and B) is true.  |
| or       | Called Logical OR Operator. If any of the two operands are non zero then condition becomes true.                                                 | (A or B) is true.   |
| &&       | Called Logical AND operator. If both the operands are non zero then condition becomes true.                                                      | (A && B) is true.   |
| ||     | Called Logical OR Operator. If any of the two operands are non zero then condition becomes true.                                                 | (A || B) is true. |
| !        | Called Logical NOT Operator. Use to reverses the logical state of its operand. If a condition is true then Logical NOT operator will make false. | !(A && B) is false. |

## Assignment Operators

There are following assignment operators supported by PHP language −

| Operator | Description                                                                                                               | Example                                     |
|----------|--------------------------------------------|-------------------|
| =        | Simple assignment operator, Assigns values from right side operands to left side operand                                  | C = A + B will assign value of A + B into C |
| +=       | Add AND assignment operator, It adds right operand to the left operand and assign the result to left operand              | C += A is equivalent to C = C + A           |
| -=       | Subtract AND assignment operator, It subtracts right operand from the left operand and assign the result to left operand  | C -= A is equivalent to C = C - A           |
| *=      | Multiply AND assignment operator, It multiplies right operand with the left operand and assign the result to left operand | C *= A is equivalent to C = C * A         |
| /=       | Divide AND assignment operator, It divides left operand with the right operand and assign the result to left operand      | C /= A is equivalent to C = C / A           |
| %=       | Modulus AND assignment operator, It takes modulus using two operands and assign the result to left operand                | C %= A is equivalent to C = C % A           |

## Conditional Operator

There is one more operator called conditional operator. This first evaluates an expression for a true or false value and then execute one of the two given statements depending upon the result of the evaluation. The conditional operator has this syntax −

| Operator | Description            | Example                                                 |
|-----------|--------------------|------------------------------------------|
| ? :      | Conditional Expression | If Condition is true ? Then value X : Otherwise value Y |

## Operators Categories

All the operators we have discussed above can be categorised into following categories −

- Unary prefix operators, which precede a single operand.
- Binary operators, which take two operands and perform a variety of arithmetic and logical operations.
- The conditional operator (a ternary operator), which takes three operands and evaluates either the second or third expression, depending on the evaluation of the first expression.
- Assignment operators, which assign a value to a variable.

## Precedence of PHP Operators

Operator precedence determines the grouping of terms in an expression. This affects how an expression is evaluated. Certain operators have higher precedence than others; for example, the multiplication operator has higher precedence than the addition operator −

For example x = 7 + 3 *2; Here x is assigned 13, not 20 because operator* has higher precedence than + so it first get multiplied with 3*2 and then adds into 7.

Here operators with the highest precedence appear at the top of the table, those with the lowest appear at the bottom. Within an expression, higher precedence operators will be evaluated first.

| Category       | Operator          | Associativity |
|----------------|-------------------|---------------|
| Unary          | ! ++ --      | Right to left |
| Multiplicative | * / %            | Left to right |
| Additive       | + -          | Left to right |
| Relational     | < <= > >=     | Left to right |
| Equality       | == !=             | Left to right |
| Logical AND    | &&                | Left to right |
| Logical OR     | ||              | Left to right |
| Conditional    | ?:                | Right to left |
| Assignment     | = += -= *= /= %= | Right to left |

<https://www.tutorialspoint.com/php/php_operator_types.htm>
