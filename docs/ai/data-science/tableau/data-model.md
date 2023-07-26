# Data Model

Every data source that you create in Tableau has a data model. You can think of a data model as a diagram that tells Tableau how it should query data in the connected database tables.

The tables that you add to the canvas in the Data Source page create the structure of the data model. A data model can be simple, such as a single table. Or it can be more complex, with multiple tables that use different combinations of relationships, joins, and unions.

The data model has two layers:

- The default view that you first see in the Data Source page canvas is the _logical layer_ of the data source. You combine data in the logical layer using relationships (or noodles). Think of this layer as the Relationships canvas in the Data Source page. For more information, see [Use Relationships for Multi-table Data Analysis](https://help.tableau.com/current/pro/desktop/en-us/datasource_multitable_normalized.htm).
- The next layer is the _physical layer_. You combine data between tables at the physical layer using [joins](https://help.tableau.com/current/pro/desktop/en-us/datasource_relationships_learnmorepage.htm#WhereAreJoins) and unions. Each logical table contains at least one physical table in this layer. Think of the physical layer as the Join/Union canvas in the Data Source page. Double-click a logical table to view or add joins and unions.

#### LOGICAL LAYER

Noodles = Relationships

![relationship-logical-layer](../../../media/Pasted%20image%2020230320181009.png)

The top-level view of a data source with multiple, related tables. This is the logical layer. Logical tables can be combined using relationships (noodles). They don't use join types. They act like containers for physical tables.

#### PHYSICAL LAYER

Venn diagram = Joins

![relationship-physical-layer](../../../media/Pasted%20image%2020230320181018.png)

Double-click a logical table to open it and see its physical tables. Physical tables can be combined using joins or unions. In this example, the Book logical table is made of three, joined physical tables (Book, Award, Info).

| **Logical Layer** | **Physical Layer** |
|---|---|
| Relationships canvas in the Data Source page | Join/Union canvas in the Data Source page |
| Tables that you drag here are called logical tables | Tables that you drag here are called physical tables |
| Logical tables can be related to other logical tables | Physical tables can be joined or unioned to other physical tables |
| Logical tables are like containers for physical tables | Double-click a logical table to see its physical tables |
| Level of detail is at the row level of the logical table | Level of detail is at the row level of merged physical tables |
| Logical tables remain distinct (normalized), not merged in the data source | Physical tables are merged into a single, flat table that defines the logical table |

## Supported data model schemas

- Single-table
- Star and snowflake
- Star and snowflake with measures in more than one table
- Multi-fact analysis

[The Tableau Data Model - Tableau](https://help.tableau.com/current/pro/desktop/en-us/datasource_datamodel.htm)

## How Relationships Differ from Joins

Relationships are a dynamic, flexible way to combine data from multiple tables for analysis. You don’t define join types for relationships, so you won’t see a Venn diagram when you create them.

Think of a relationship as a contract between two tables. When you are building a viz with fields from these tables, Tableau brings in data from these tables using that contract to build a query with the appropriate joins.

- **No up-front join type**. You only need to select matching fields to define a relationship ([no join types](https://help.tableau.com/current/pro/desktop/en-us/datasource_relationships_learnmorepage.htm?source=productlink#WhereAreJoins)). Tableau first attempts to create the relationship based on existing key constraints and matching field names. You can then check to ensure they are the fields you want to use, or add more field pairs to better define how the tables should be related.
- **Automatic and context-aware**. Relationships defer joins to the time and context of analysis. Tableau automatically selects join types based on the fields being used in the visualization. During analysis, Tableau adjusts join types intelligently and preserves the native level of detail in your data. You can see aggregations at the level of detail of the fields in your viz rather than having to think about the underlying joins. You don't need to use LOD expressions such as FIXED to deduplicate data in related tables.
- **Flexible**. Relationships can be many-to-many and support full outer joins. When you combine tables using relationships, it’s like creating a custom, flexible data source for every viz, all in a single data source for the workbook. Because Tableau queries only tables that are needed based on fields and filters in a viz, you can build a data source that can be used for a variety of analytic flows.

[How Relationships Differ from Joins - Tableau](https://help.tableau.com/current/pro/desktop/en-us/datasource_relationships_learnmorepage.htm)

[Relationships: Data modeling in Tableau](https://www.tableau.com/blog/relationships-tableau-data-model)

[Relationships, part 2: Tips and Tricks](https://www.tableau.com/blog/relationships-part-2-tips-and-tricks)

[Relationships: Asking questions across multiple related tables](https://www.tableau.com/blog/relationships-asking-questions-across-multiple-related-tables)

## Level of Detail Expressions in Tableau

Level of Detail expressions (also known as LOD expressions) allow you to compute values at the data source level and the visualization level. However, LOD expressions let you control the granularity you want to compute. They can be performed at a more granular level (INCLUDE), a less granular level (EXCLUDE), or an entirely independent level (FIXED).

[Level of Detail Expressions - Tableau](https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_lod.htm)

[Top 15 Tableau LOD Expressions (Practical Examples)](https://www.tableau.com/blog/LOD-expressions)
