# Data Sources

## Refresh Data Sources

If you are connected to a data source that has been modified, you can immediately update Tableau Desktop with the changes by selecting a data source on the Data menu and then selecting Refresh.

Not every connection will behave in the same way. There are three primary connection types: Live Connection, Extract, and Published Data Source. The type of connection is displayed by the icon next to your data source in the Data Pane.

### Live Connection

![image](https://help.tableau.com/current/pro/desktop/en-us/Img/Menu_Ds.png)

A live connection sends queries to the database and updates the view depending on the results. However, the specific fields queried are defined when the connection is initially created. Refreshing the data source will update any new or changed fields. For more information, see [Connect to Your Data](https://help.tableau.com/current/pro/desktop/en-us/basicconnectoverview.htm).

### Extract

![image](https://help.tableau.com/current/pro/desktop/en-us/Img/Menu_Ds_Extract.png)

Refreshing an extract will query the data source the extract was created from and rebuild the extract. This process might take some time, depending upon the size of the extract. For more information, see [Extract Your Data](https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm).

### Published Data Source

![image](https://help.tableau.com/current/pro/desktop/en-us/Img/Online_Tableau_Sparkle.png)

When connected to a Published Data Source, the data source can be either a live connection or an extract. Selecting the Data Source tab will display whether the Published Data Source is a live connection or an extract. If the data source is an Extract, all refreshes of the extract are managed by Tableau Server and can only be refreshed by the server.

For more information, see [Best Practices for Published Data Sources](https://help.tableau.com/current/pro/desktop/en-us/publish_datasources_about.htm).

## Extract

Extracts are saved subsets of data that you can use to improve performance or to take advantage of Tableau functionality not available or supported in your original data. When you create an extract of your data, you can reduce the total amount of data by using filters and configuring other limits. After you create an extract, you can refresh it with data from the original data. When refreshing the data, you have the option to either do a **full refresh**, which replaces all of the contents in the extract, or you can do an **incremental refresh**, which only adds rows that are new since the previous refresh.

Extracts are advantageous for several reasons:

- **Supports large data sets:** You can create extracts that contain billions of rows of data.
- **Help improve performance:** When you interact with views that use extract data sources, you generally experience better performance than when interacting with views based on connections to the original data.
- **Support additional functionality:** Extracts allow you to take advantage of Tableau functionality that's not available or supported by the original data, such as the ability to compute Count Distinct.
- **Provide offline access to your data:** If you are using Tableau Desktop, extracts allow you to save and work with the data locally when the original data is not available. For example, when you are traveling.

## Embedded Data Source

An embedded data source in Tableau is a data source that is saved within a Tableau workbook (.twb or .twbx file) rather than being a separate, independent file. This means that the data is stored within the workbook file itself and can be shared easily without having to separately share the data source file.

[Embedding Data in workbooks Vs Published Data sources - Visual BI Solutions](https://visualbi.com/blogs/tableau/embedding-data-workbooks-vs-published-data-sources/)

## Tableau File Types and Folders

### Workbooks (.twb)

Tableau workbook files have the .twb file extension. Workbooks hold one or more worksheets, plus zero or more dashboards and stories.

### Bookmarks (.tbm)

Tableau bookmark files have the .tbm file extension. Bookmarks contain a single worksheet and are an easy way to quickly share your work. For more information, see [Save a bookmark(Link opens in a new window)](https://help.tableau.com/current/pro/desktop/en-us/save_savework.htm#Bookmark).

### Packaged Workbooks (.twbx)

Tableau packaged workbooks have the .twbx file extension. A packaged workbook is a single zip file that contains a workbook along with any supporting local file data and background images. This format is the best way to package your work for sharing with others who don’t have access to the original data. For more information, see [Packaged Workbooks](https://help.tableau.com/current/pro/desktop/en-us/save_savework_packagedworkbooks.htm).

### Extract (.hyper)

Tableau extract files have the .hyper extension. Extract files are a local copy of a subset or entire data set that you can use to share data with others, when you need to work offline, and improve performance. For more information, see [Extract Your Data](https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm).

Hyper is Tableau's in-memory Data Engine technology optimized for fast data ingest and analytical query processing on large or complex data sets. The introduction of Hyper results in a number of changes related to extracts. Beginning in Tableau 10.5, new extracts use the .hyper file format instead of the .tde file format. Hyper can slice and dice massive volumes of data in seconds, you will see up to 5X faster query speed and up to 3X faster extract creation speed. With enhanced extract and query performance, and support for even larger datasets, you can choose to extract your data based on the needs of your business.

[Hyper Support Resources](https://www.tableau.com/support/hyper-resources)

[Hyper](https://www.tableau.com/products/new-features/hyper)

### Data Source (.tds)

Tableau data source files have the .tds file extension. Data source files are shortcuts for quickly connecting to the original data that you use often. Data source files do not contain the actual data but rather the information necessary to connect to the actual data as well as any modifications you've made on top of the actual data such as changing default properties, creating calculated fields, adding groups, and so on. For more information, see [Save Data Sources](https://help.tableau.com/current/pro/desktop/en-us/export_connection.htm).

### Packaged Data Source (.tdsx)

Tableau packaged data source files have the .tdsx file extension. A packaged data source is a zip file that contains the data source file (.tds) described above as well as any local file data such as extract files (.hyper), text files, Excel files, Access files, and local cube files. Use this format to create a single file that you can then share with others who may not have access to the original data stored locally on your computer. For more information, see [Save Data Sources](https://help.tableau.com/current/pro/desktop/en-us/export_connection.htm).

[Tableau File Types and Folders - Tableau](https://help.tableau.com/current/pro/desktop/en-us/environ_filesandfolders.htm)

## Publishing a workbook

[Publish a Workbook - Tableau](https://help.tableau.com/current/pro/desktop/en-us/publish_workbooks_howto.htm)

## Links

[Refresh Data Sources - Tableau](https://help.tableau.com/current/pro/desktop/en-us/refreshing_data.htm)

[Extract Your Data - Tableau](https://help.tableau.com/current/pro/desktop/en-us/extracting_data.htm)

[Schedule Refreshes on Tableau Cloud - Tableau](https://help.tableau.com/current/online/en-us/schedule_add.htm#timeout)
