# SQL Data Types

## SQL data type rules

Databricks uses several rules to resolve conflicts among data types:

- **[Promotion](https://docs.databricks.com/sql/language-manual/sql-ref-datatype-rules.html#type-promotion)** safely expands a type to a wider type.
- **[Implicit downcasting](https://docs.databricks.com/sql/language-manual/sql-ref-datatype-rules.html#downcasting)** narrows a type. The opposite of promotion.
- **[Implicit crosscasting](https://docs.databricks.com/sql/language-manual/sql-ref-datatype-rules.html#crosscasting)** transforms a type into a type of another type family.

You can also explicitly cast between many types:

- **[cast function](https://docs.databricks.com/sql/language-manual/functions/cast.html)** casts between most types, and returns errors if it cannot.
- **[try_cast function](https://docs.databricks.com/sql/language-manual/functions/try_cast.html)** works like [cast function](https://docs.databricks.com/sql/language-manual/functions/cast.html) but returns NULL when passed invalid values.
- **Other [builtin functions](https://docs.databricks.com/sql/language-manual/sql-ref-functions-builtin.html)** cast between types using provided format directives.

### Type precedence graph

![type-precedence-graph](../../media/Pasted%20image%2020230529234112.jpg)

[SQL data type rules | Databricks on AWS](https://docs.databricks.com/sql/language-manual/sql-ref-datatype-rules.html)

## SQL Data Types

[Data types | Databricks on AWS](https://docs.databricks.com/sql/language-manual/sql-ref-datatypes.html)
