# Operators / Wildcards

## SQL Arithmetic Operators

| **Operator** | **Description** |
|---|---|
| + | Add |
| - | Subtract |
| * | Multiply |
| / | Divide |
| % | Modulo |

## SQL Bitwise Operators

| **Operator** | **Description** |
|---|---|
| `&` | Bitwise AND |
| `\|` | Bitwise OR |
| `^` | Bitwise exclusive OR |

## SQL Comparison Operators

| **Operator** | **Description** |
|---|---|
| `=` | Equal to |
| `>` | Greater than |
| `<` | Less than |
| `>`= | Greater than or equal to |
| `<`= | Less than or equal to |
| `\`, != | Not equal to |
| `\` | Null safe equal=operator, but returns1rather thanNULLif both operands are NULL, and 0 rather than NULL if one operand is NULL. |

## SQL Compound Operators

| **Operator** | **Description**          |
|--------------|--------------------------|
| +=           | Add equals               |
| -=           | Subtract equals          |
| *=          | Multiply equals          |
| /=           | Divide equals            |
| %=           | Modulo equals            |
| &=           | Bitwise AND equals       |
| ^-=         | Bitwise exclusive equals |
| `\|*=`        | Bitwise OR equals        |

## SQL Logical Operators

| **Operator** | **Description**                                              |
|--------------|----------------------------------------------------------|
| ALL          | TRUE if all of the subquery values meet the condition        |
| AND          | TRUE if all the conditions separated by AND is TRUE          |
| ANY          | TRUE if any of the subquery values meet the condition        |
| BETWEEN      | TRUE if the operand is within the range of comparisons       |
| EXISTS       | TRUE if the subquery returns one or more records             |
| IN           | TRUE if the operand is equal to one of a list of expressions |
| LIKE         | TRUE if the operand matches a pattern                        |
| NOT          | Displays a record if the condition(s) is NOT TRUE            |
| OR           | TRUE if any of the conditions separated by OR is TRUE        |
| SOME         | TRUE if any of the subquery values meet the condition        |

```sql
-- ALL Operator
-- all countries whose area is greater than each area of each city from city table
SELECT * FROM country WHERE area > ALL (
  SELECT area FROM city
);

-- ANY Operator
-- find trips to the cities which are cheaper than ANY hiking trip to the mountain with id 1
SELECT * FROM trip WHERE price < ANY (
  SELECT price FROM hiking_trip WHERE mountain_id = 1
);
```

https://www.w3schools.com/sql/sql_operators.asp

## Wildcard Characters in MS Access

| **Symbol** | **Description** | **Example** |
|---|---|---|
| * | Represents zero or more characters | bl* finds bl, black, blue, and blob |
| ? | Represents a single character | h?t finds hot, hat, and hit |
| [] | Represents any single character within the brackets | `h[oa]t` finds hot and hat, but not hit |
| ! | Represents any character not in the brackets | `h[!oa]t` finds hit, but not hot and hat |
| - | Represents a range of characters | `c[a-b]t finds cat and cbt` |
| # | Represents any single numeric character | `2#5 finds 205, 215, 225, 235, 245, 255, 265, 275, 285, and 295` |

## Wildcard Characters in SQL Server

| **Symbol** | **Description** | **Example** |
|---|---|---|
| % | Represents zero or more characters | bl% finds bl, black, blue, and blob |
| _ | Represents a single character | h_t finds hot, hat, and hit |
| `[]` | Represents any single character within the brackets | `h[oa]t` finds hot and hat, but not hit |
| ^ | Represents any character not in the brackets | `h[^oa]t` finds hit, but not hot and hat |
| - | Represents a range of characters | `c[a-b]t` finds cat and cbt |

https://www.w3schools.com/sql/sql_wildcards.asp
