# Concepts

[Field Types: Dimensions and Measures, Blue and Green](https://help.tableau.com/current/pro/desktop/en-us/datafields_typesandroles.htm)

When you connect to a new data source, Tableau assigns each field in the data source as dimension or measure in the Data pane, depending on the type of data the field contains. You use these fields to build views of your data.

### About data field roles and types

Data fields are made from the columns in your data source. Each field is automatically assigned a data type (such as integer, string, date), and a role: Discrete Dimension or Continuous Measure (more common), or Continuous Dimension or Discrete Measure (less common).

- **Dimensions** contain qualitative values (such as names, dates, or geographical data). You can use dimensions to categorize, segment, and reveal the details in your data. Dimensions affect the level of detail in the view.
- **Measures** contain numeric, quantitative values that you can measure. Measures can be aggregated. When you drag a measure into the view, Tableau applies an aggregation to that measure (by default).

### Blue versus green fields

Tableau represents data differently in the view depending on whether the field is discrete (blue), or continuous (green). _Continuous_ and _discrete_ are mathematical terms. Continuous means "forming an unbroken whole, without interruption"; discrete means "individually separate and distinct."

- **Green measures** ![image](https://help.tableau.com/current/pro/desktop/en-us/Img/continuous_meas.png) and dimensions ![image](https://help.tableau.com/current/pro/desktop/en-us/Img/continuous_dim.png) are continuous. Continuous field values are treated as an infinite range. Generally, continuous fields add axes to the view.
- **Blue measures** ![image](https://help.tableau.com/current/pro/desktop/en-us/Img/discrete_meas.png) and dimensions ![image](https://help.tableau.com/current/pro/desktop/en-us/Img/discrete_dim.png) are discrete. Discrete values are treated as finite. Generally, discrete fields add headers to the view.

## Calculated Fields

Sometimes your data source does not contain a field (or column) that you need for your analysis. For example, your data source might contain fields with values for Sales and Profit, but not for Profit Ratio. If this is the case, you can create a calculated field for Profit Ratio using data from the Sales and Profit fields.

Analysis > Create Calculated Field

```sql
-[Column Name]
```

[Create a Simple Calculated Field - Tableau](https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_formulas.htm)

## Parameters

A parameter is a workbook variable such as a number, date, or string that can replace a constant value in a calculation, filter, or reference line.

For example, you may create a calculated field that returns True if Sales is greater than $500,000 and otherwise returns False. You can replace the constant value of “500000” in the formula with a parameter. Then, using the parameter control, you can dynamically change the threshold in your calculation.

You can even create a _dynamic_ parameter that’s set to automatically refresh its current value (to the result of a single-value, view-independent calculation), list of values (based on a data source column), or range of values. This will happen each time the workbook is opened and Tableau connects to the data source referenced by the parameter, or whenever you select Refresh from the data source’s context menu..

You can make your parameters more dynamic and interactive by using them in [Parameter Actions](https://help.tableau.com/current/pro/desktop/en-us/actions_parameters.htm). Parameter actions let your audience change a parameter value through direct interaction with a viz, such as clicking or selecting a mark.

[Create Parameters - Tableau](https://help.tableau.com/current/pro/desktop/en-us/parameters_create.htm)

[**Parameters** | Oh, the places you'll go! - YouTube](https://www.youtube.com/watch?v=Xk9HnpmWtsU)

## Sets

You can use sets to compare and ask questions about a subset of data. Sets are custom fields that define a subset of data based on some conditions.

You can make sets more dynamic and interactive by using them in [Set Actions](https://help.tableau.com/current/pro/desktop/en-us/actions_sets.htm). Set actions let your audience interact directly with a viz or dashboard to control aspects of their analysis. When someone selects marks in the view, set actions can change the values in a set.

In addition to a Set Action, you can also allow users to change the membership of a set by using a filter-like interface known as a Set Control, which makes it easy for you to designate inputs into calculations that drive interactive analysis.

[Create Sets - Tableau](https://help.tableau.com/current/pro/desktop/en-us/sortgroup_sets_create.htm)

## Workbooks and sheets

Tableau uses a **WORKBOOK and SHEET** file structure, much like Microsoft Excel. A **WORKBOOK** contains **SHEETS** , which can be a **WORKSHEET** , a **DASHBOARD** , or a **STORY**

A **WORKSHEET** contains a single view along with shelves, legends, and the Data pane

A **DASHBOARD** is a collection of views from multiple worksheets

A **STORY** contains a sequence of worksheets or dashboards that work together to convey information

Within a workbook, you can create new sheets, clear an entire worksheet, duplicate sheets, hide or show a worksheet, and delete a sheet. Tableau has several ways to view and organize the sheets in your workbook

**NOTE:** From worksheet we can access Source Data Dimensions, Measures, Custom Fields.

From Dashboard we can access Worksheet but we can not access dimensions measures directly.

From Story we can access Dashboard and Worksheets but we can not access dimensions measures directly.

[Tableau Workbook Stories Dashboards Worksheets](https://www.wisdomaxis.com/technology/software/tableau/interview-questions/tableau-workbook-story-dashboard-worksheet-data-views.php)

[Explain the difference between Tableau Workbook, Story, Dashboard and Worksheets?](https://www.linkedin.com/pulse/explain-difference-between-tableau-workbook-story-upendar-sheethala/)

[Workbooks and Sheets - Tableau](https://help.tableau.com/current/pro/desktop/en-us/environ_workbooksandsheets.htm)
