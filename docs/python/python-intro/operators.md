# Operators

Types of Operator

Python language supports the following types of operators.

- Arithmetic Operators (7)
- Comparison (Relational) Operators (7)
- Assignment Operators (8)
- Logical Operators (3)
- Bitwise Operators (6)
- Membership Operators (2)
- Identity Operators (2)

Identity vs Equality Operators

- Identity- Identity comparison with "is" and "is not"
- Equality- Equality comparisons with == and !=

## Arithmetic Operators (a = 10, b = 20)

| **Operator**       | **Description**                                                                                                                                                                                                                                               | **Example**                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| + Addition         | Adds values on either side of the operator.                                                                                                                                                                                                                   | a + b = 30                                                |
| - Subtraction      | Subtracts right hand operand from left hand operand.                                                                                                                                                                                                          | a -- b = -10                                              |
| * Multiplication   | Multiplies values on either side of the operator                                                                                                                                                                                                              | a * b = 200                                               |
| / Integer Division | Divides left hand operand by right hand operand                                                                                                                                                                                                               | b / a = 2                                                 |
| % Modulus          | Divides left hand operand by right hand operand and returns remainder                                                                                                                                                                                         | b % a = 0                                                 |
| ** Exponent        | Performs exponential (power) calculation on operators                                                                                                                                                                                                         | a**b =10 to the power 20                                  |
| //                 | Floor Division - The division of operands where the result is the quotient in which the digits after the decimal point are removed. But if one of the operands is negative, the result is floored, i.e., rounded away from zero (towards negative infinity) − | 9//2 = 4 and 9.0//2.0 = 4.0, -11//3 = -4, -11.0//3 = -4.0 |

## Comparison (Relational) Operators (a = 10, b = 20)

| **Operator** | **Description**                                                                                                   | **Example**                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| ==           | If the values of two operands are equal, then the condition becomes true.                                         | `(a == b)` is not true.                             |
| `!=`         | If values of two operands are not equal, then condition becomes true.                                             | `(a != b)` is true.                                 |
| `<>`         | If values of two operands are not equal, then condition becomes true. (Deprecated)                                | `(a <> b)` is true. This is similar to != operator. |
| `>`          | If the value of left operand is greater than the value of right operand, then condition becomes true.             | `(a > b)` is not true.                              |
| `<`          | If the value of left operand is less than the value of right operand, then condition becomes true.                | `(a < b)` is true.                                  |
| `>=`         | If the value of left operand is greater than or equal to the value of right operand, then condition becomes true. | `(a >= b)` is not true.                             |
| `<=`         | If the value of left operand is less than or equal to the value of right operand, then condition becomes true.    | `(a <= b)` is true.                                 |

## Assignment Operators (a=10, b = 20)

The use of += like statements are called as accumulator pattern,

Like, sum = sum + value, This type of statements is called as accumulator pattern.

| **Operator**       | **Description**                                                                            | **Example**                                                        |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| =                  | Assigns values from right side operands to left side operand                               | c = a + b assigns value of a + b into c                            |
| += Add AND         | It adds right operand to the left operand and assign the result to left operand            | c += a is equivalent to c = c + a                                  |
| -= Subtract AND    | It subtracts right operand from the left operand and assign the result to left operand     | c -= a is equivalent to c = c - a                                  |
| *= Multiply AND    | It multiplies right operand with the left operand and assign the result to left operand    | c *= a is equivalent to c = c* a                                   |
| /= Divide AND      | It divides left operand with the right operand and assign the result to left operand       | c /= a is equivalent to c = c / ac /= a is equivalent to c = c / a |
| %= Modulus AND     | It takes modulus using two operands and assign the result to left operand                  | c %= a is equivalent to c = c % a                                  |
| **= Exponent AND   | Performs exponential (power) calculation on operators and assign value to the left operand | c **= a is equivalent to c = c** a                                 |
| //= Floor Division | It performs floor division on operators and assign value to the left operand               | c //= a is equivalent to c = c // a                                |

## Logical Operators (a = 10 and b = 20)

| **Operator**    | **Description**                                                      | **Example**            |
|---------------|------------------------------------------|----------------|
| and Logical AND | If both the operands are true then condition becomes true.           | (a and b) is true.     |
| or Logical OR   | If any of the two operands are non-zero then condition becomes true. | (a or b) is true.      |
| not Logical NOT | Used to reverse the logical state of its operand.                    | Not(a and b) is false. |

## Bitwise Operators ( a = 60, b = 13)

a = 0011 1100

b = 0000 1101

| **Operator**             | **Description**                                                                              | **Example**                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| & Binary AND             | Operator copies a bit to the result if it exists in both operands                            | (a & b) (means 0000 1100)                                                          |
| ` Binary OR              | It copies a bit if it exists in either operand.                                              | `(ab)` = 61 (means 0011 1101)                                                      |
| ^ Binary XOR             | It copies the bit if it is set in one operand but not both.                                  | (a ^ b) = 49 (means 0011 0001)                                                     |
| ~ Binary Ones Complement | It is unary and has the effect of 'flipping' bits.                                           | (~a ) = -61 (means 1100 0011 in 2's complement form due to a signed binary number. |
| `<< Binary Left Shift`   | The left operands value is moved left by the number of bits specified by the right operand.  | `a << 2 = 240 (means 1111 0000)`                                                   |
| `>> Binary Right Shift`  | The left operands value is moved right by the number of bits specified by the right operand. | `a >> 2 = 15 (means 0000 1111)`                                                    |

## Membership Operators

| **Operator** | **Description** | **Example** |
|---|---|---|
| in | Evaluates to true if it finds a variable in the specified sequence and false otherwise. | x in y, here in results in a 1 if x is a member of sequence y. |
| not in | Evaluates to true if it does not finds a variable in the specified sequence and false otherwise. | x not in y, here not in results in a 1 if x is not a member of sequence y. |

## Identity Operators

| **Operator** | **Description** | **Example** |
|---|---|---|
| is | Evaluates to true if the variables on either side of the operator point to the same object and false otherwise. | x is y, here **is** results in 1 if id(x) equals id(y). |
| is not | Evaluates to false if the variables on either side of the operator point to the same object and true otherwise. | x is not y, here**is not** results in 1 if id(x) is not equal to id(y). |

## Python Operators Precedence

| **Sr.No.** | **Operator & Description**                                                             |
| ---------- | -------------------------------------------------------------------------------------- |
| 1          | `**` Exponentiation (raise to the power)                                               |
| 2          | `~ + -` Complement, unary plus and minus (method names for the last two are +@ and -@) |
| 3          | `* / % //` Multiply, divide, modulo and floor division                                 |
| 4          | `+ -` Addition and subtraction                                                         |
| 5          | `>> <<` Right and left bitwise shift                                                   |
| 6          | `&` Bitwise 'AND'                                                                      |
| 7          | `^ \|` Bitwise exclusive `OR' and regular`OR'                                          |
| 8          | `>=` Comparison operators                                                              |
| 9          | `<> == !=` Equality operators                                                          |
| 10         | = %= /= //= -= += `*=` `**=` Assignment operators                                      |
| 11         | `is is not` Identity operators                                                         |
| 12         | `in not in` Membership operators                                                       |
| 13         | `not or and` Logical operators                                                         |

## Different ways to test multiple

```python
# flags at once in Python
x, y, z = 0, 1, 0
if x == 1 or y == 1 or z == 1:
    print('passed')
if 1 in (x, y, z):
    print('passed')
# These only test for truthiness:
if x or y or z:
    print('passed')
if any((x, y, z)):
    print('passed')
```

## Difference between `is` and ==

1. An `is` expression evaluates to True if two variables point to the same (identical) object.
2. An == expression evaluates to True if the objects referred to by the variables are equal (have the same contents).

## Character Conversion

1. `ord()` convert character to ascii
2. `chr()` convert ascii to character

## Swap Values

```python
A = 23
B = 42
A, B = B, A
```

## Conditional test with lists

- in
- not in

## If statements

```python
if age < 4:
    ticket_price = 0
elif age < 18:
    ticket_price = 10
else:
    ticket_price = 15
```
