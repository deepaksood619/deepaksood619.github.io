# Tableau

Visualization from relational databases and data cubes, OLAP cubes, cloud databases

<https://www.datacamp.com/community/tutorials/tableau-visualizations-with-measure-names-and-measure-values>

<https://public.tableau.com/en-us/s>

<https://public.tableau.com/en-us/gallery/travel-planner-emissions-calculator>

## Tableau Data Model

Every data source that you create in Tableau has a data model. You can think of a data model as a diagram that tells Tableau how it should query data in the connected database tables.

The tables that you add to the canvas in the Data Source page create the structure of the data model. A data model can be simple, such as a single table. Or it can be more complex, with multiple tables that use different combinations of relationships, joins, and unions.

The data model has two layers:

- The default view that you first see in the Data Source page canvas is the _logical layer_ of the data source. You combine data in the logical layer using relationships (or noodles). Think of this layer as the Relationships canvas in the Data Source page. For more information, see [Use Relationships for Multi-table Data Analysis](https://help.tableau.com/current/pro/desktop/en-us/datasource_multitable_normalized.htm).
- The next layer is the _physical layer_. You combine data between tables at the physical layer using [joins(Link opens in a new window)](https://help.tableau.com/current/pro/desktop/en-us/datasource_relationships_learnmorepage.htm#WhereAreJoins) and unions. Each logical table contains at least one physical table in this layer. Think of the physical layer as the Join/Union canvas in the Data Source page. Double-click a logical table to view or add joins and unions.

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

## Augmented Analytics

[Augmented analytics](https://www.tableau.com/learn/articles/augmented-analytics) is a class of analytics powered by artificial intelligence (AI) and machine learning (ML) that expands a human’s ability to interact with data at a contextual level. We use AI to make analytics accessible so that more people can confidently explore and interact with data to drive meaningful decisions. From automated modeling to guided natural language queries, our augmented analytics capabilities are powerful and trusted to help organizations leverage their growing amount of data and empower a wider business audience to discover insights.

- Ask data
- Explain data
- Einstein discovery for reports
- Data stories
- Forecasting
- Predictive modeling functions

### What are the benefits of augmented analytics?

- Agility: Increasing speed to insight
- Accuracy: Providing a more complete picture
- Efficiency: Automating operational tasks
- Confidence: Powerful analysis in context

### Augmented Analytics Features

- Automatic data identification
- Statistical techniques
- Smart data prep
- Recommendations
- Natural language interactions

[Augmented Analytics Explained | Tableau](https://www.tableau.com/learn/articles/augmented-analytics)

[Tableau Augmented Analytics](https://www.tableau.com/solutions/ai-analytics/augmented-analytics)

[Tableau AI analytics](https://www.tableau.com/solutions/ai-analytics)

[Augmented Analytics with Tableau](https://www.tableau.com/learn/webinars/augmented-analytics-tableau)

[Augmented Analytics with Tableau - Ask Data & Explain Data](https://www.tableau.com/learn/webinars/augmented-analytics-with-tableau-ask-data-explain-data)

## Debugging

Client-side redering - `:render=false`

### Configuration

TSM - Tableau Services Manager

cli client for server

```bash
tsm configuration list-dynamic-keys

tsm help

tsm configuration set -k vizportal.log.level -v debug
tsm configuration set -k vizqlserver.log.level -v debug

tsm configuration set -k vizportal.log.level -v info
tsm configuration set -k vizqlserver.log.level -v info
```

## REST APIs

[REST API and Resource Versions - Tableau](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm)

[Triggering extract refreshes for Tableau Server workbooks and data sources using the REST API | by Elliott Stam | Devyx | Medium](https://medium.com/snake-charmer-python-and-analytics/triggering-extract-refreshes-for-tableau-server-workbooks-and-data-sources-using-the-rest-api-d4a8b8c001bf)

## Resources

[eLearning: Tableau Web-Based Training](https://www.tableau.com/learn/training/elearning)

[tsm Command Line Reference - Tableau](https://help.tableau.com/current/server/en-us/tsm.htm)
