# Tableau Data Model

Every data source that you create in Tableau has a data model. You can think of a data model as a diagram that tells Tableau how it should query data in the connected database tables.

The tables that you add to the canvas in the Data Source page create the structure of the data model. A data model can be simple, such as a single table. Or it can be more complex, with multiple tables that use different combinations of relationships, joins, and unions.

The data model has two layers:

- The default view that you first see in the Data Source page canvas is the _logical layer_ of the data source. You combine data in the logical layer using relationships (or noodles). Think of this layer as the Relationships canvas in the Data Source page. For more information, see [Use Relationships for Multi-table Data Analysis](https://help.tableau.com/current/pro/desktop/en-us/datasource_multitable_normalized.htm).
- The next layer is the _physical layer_. You combine data between tables at the physical layer using [joins](https://help.tableau.com/current/pro/desktop/en-us/datasource_relationships_learnmorepage.htm#WhereAreJoins) and unions. Each logical table contains at least one physical table in this layer. Think of the physical layer as the Join/Union canvas in the Data Source page. Double-click a logical table to view or add joins and unions.

#### LOGICAL LAYER

Noodles = Relationships

![](../../../media/Pasted%20image%2020230320181009.png)

The top-level view of a data source with multiple, related tables. This is the logical layer. Logical tables can be combined using relationships (noodles). They don't use join types. They act like containers for physical tables.

#### PHYSICAL LAYER

Venn diagram = Joins

![](../../../media/Pasted%20image%2020230320181018.png)

Double-click a logical table to open it and see its physical tables. Physical tables can be combined using joins or unions. In this example, the Book logical table is made of three, joined physical tables (Book, Award, Info).

| **Logical Layer** | **Physical Layer** |
|---|---|
| Relationships canvas in the Data Source page | Join/Union canvas in the Data Source page |
| Tables that you drag here are called logical tables | Tables that you drag here are called physical tables |
| Logical tables can be related to other logical tables | Physical tables can be joined or unioned to other physical tables |
| Logical tables are like containers for physical tables | Double-click a logical table to see its physical tables |
| Level of detail is at the row level of the logical table | Level of detail is at the row level of merged physical tables |
| Logical tables remain distinct (normalized), not merged in the data source | Physical tables are merged into a single, flat table that defines the logical table |

[The Tableau Data Model - Tableau](https://help.tableau.com/current/pro/desktop/en-us/datasource_datamodel.htm)
