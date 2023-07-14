# Data Sources

## Refresh Data Sources

If you are connected to a data source that has been modified, you can immediately update Tableau Desktop with the changes by selecting a data source on the Data menu and then selecting Refresh.

Not every connection will behave in the same way. There are three primary connection types: Live Connection, Extract, and Published Data Source. The type of connection is displayed by the icon next to your data source in the Data Pane.

### Live Connection

![](https://help.tableau.com/current/pro/desktop/en-us/Img/Menu_Ds.png)

A live connection sends queries to the database and updates the view depending on the results. However, the specific fields queried are defined when the connection is initially created. Refreshing the data source will update any new or changed fields. For more information, see [Connect to Your Data](https://help.tableau.com/current/pro/desktop/en-us/basicconnectoverview.htm).

### Extract

![](https://help.tableau.com/current/pro/desktop/en-us/Img/Menu_Ds_Extract.png)

Refreshing an extract will query the data source the extract was created from and rebuild the extract. This process might take some time, depending upon the size of the extract. For more information, see [Extract Your Data](https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm).

### Published Data Source

![](https://help.tableau.com/current/pro/desktop/en-us/Img/Online_Tableau_Sparkle.png)

When connected to a Published Data Source, the data source can be either a live connection or an extract. Selecting the Data Source tab will display whether the Published Data Source is a live connection or an extract. If the data source is an Extract, all refreshes of the extract are managed by Tableau Server and can only be refreshed by the server.

For more information, see [Best Practices for Published Data Sources](https://help.tableau.com/current/pro/desktop/en-us/publish_datasources_about.htm).

## Extract

Extracts are saved subsets of data that you can use to improve performance or to take advantage of Tableau functionality not available or supported in your original data. When you create an extract of your data, you can reduce the total amount of data by using filters and configuring other limits. After you create an extract, you can refresh it with data from the original data. When refreshing the data, you have the option to either do a **full refresh**, which replaces all of the contents in the extract, or you can do an **incremental refresh**, which only adds rows that are new since the previous refresh.

Extracts are advantageous for several reasons:

- **Supports large data sets:** You can create extracts that contain billions of rows of data.
- **Help improve performance:** When you interact with views that use extract data sources, you generally experience better performance than when interacting with views based on connections to the original data.
- **Support additional functionality:** Extracts allow you to take advantage of Tableau functionality that's not available or supported by the original data, such as the ability to compute Count Distinct.
- **Provide offline access to your data:** If you are using Tableau Desktop, extracts allow you to save and work with the data locally when the original data is not available. For example, when you are traveling.

## Links

[Refresh Data Sources - Tableau](https://help.tableau.com/current/pro/desktop/en-us/refreshing_data.htm)

[Extract Your Data - Tableau](https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm)
