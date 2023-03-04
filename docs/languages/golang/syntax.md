# Syntax

## Reserved Words

| break    | default     | func   | interface | select |
|----------|-------------|--------|-----------|--------|
| case     | defer       | Go     | map       | struct |
| chan     | else        | Goto   | package   | switch |
| const    | fallthrough | if     | range     | type   |
| continue | for         | import | return    | var    |

## defer

In Go language, defer statements delay the execution of the [function](https://www.geeksforgeeks.org/functions-in-go-language/) or method or an [anonymous method](https://www.geeksforgeeks.org/anonymous-function-in-go-language/) until the nearby functions returns. Or in other words, defer function or method call arguments evaluate instantly, but they execute until the nearby functions returns. You can create a deferred method, or function, or anonymous function by using the defer keyword.

<https://www.geeksforgeeks.org/defer-keyword-in-golang>

## Decision making

1. **if statement**

Anif statementconsists of a boolean expression followed by one or more statements.

2. **if...else statement**

Anif statementcan be followed by an optionalelse statement, which executes when the boolean expression is false.

3. **nested if statement**

You can use oneiforelse ifstatement inside anotheriforelse ifstatement(s).

4. **switch statement**

Aswitchstatement allows a variable to be tested for equality against a list of values.

1. Expression Switch− In expression switch, a case contains expressions, which is compared against the value of the switch expression.

2. Type Switch− In type switch, a case contain type which is compared against the type of a specially annotated switch expression.

5. **select statement**

Aselectstatement is similar toswitchstatement with difference that case statements refers to channel communications.
