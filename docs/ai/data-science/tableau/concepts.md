# Concepts

## [Field Types: Dimensions and Measures, Blue and Green](https://help.tableau.com/current/pro/desktop/en-us/datafields_typesandroles.htm)

When you connect to a new data source, Tableau assigns each field in the data source as dimension or measure in the Data pane, depending on the type of data the field contains. You use these fields to build views of your data.

### About data field roles and types

Data fields are made from the columns in your data source. Each field is automatically assigned a data type (such as integer, string, date), and a role: Discrete Dimension or Continuous Measure (more common), or Continuous Dimension or Discrete Measure (less common).

- **Dimensions** contain qualitative values (such as names, dates, or geographical data). You can use dimensions to categorize, segment, and reveal the details in your data. Dimensions affect the level of detail in the view.
- **Measures** contain numeric, quantitative values that you can measure. Measures can be aggregated. When you drag a measure into the view, Tableau applies an aggregation to that measure (by default).

### Blue versus green fields

Tableau represents data differently in the view depending on whether the field is discrete (blue), or continuous (green). _Continuous_ and _discrete_ are mathematical terms. Continuous means "forming an unbroken whole, without interruption"; discrete means "individually separate and distinct."

- **Green measures** ![](https://help.tableau.com/current/pro/desktop/en-us/Img/continuous_meas.png) and dimensions ![](https://help.tableau.com/current/pro/desktop/en-us/Img/continuous_dim.png) are continuous. Continuous field values are treated as an infinite range. Generally, continuous fields add axes to the view.
- **Blue measures** ![](https://help.tableau.com/current/pro/desktop/en-us/Img/discrete_meas.png) and dimensions ![](https://help.tableau.com/current/pro/desktop/en-us/Img/discrete_dim.png) are discrete. Discrete values are treated as finite. Generally, discrete fields add headers to the view.

## Calculated Fields

Sometimes your data source does not contain a field (or column) that you need for your analysis. For example, your data source might contain fields with values for Sales and Profit, but not for Profit Ratio. If this is the case, you can create a calculated field for Profit Ratio using data from the Sales and Profit fields.

[Create a Simple Calculated Field - Tableau](https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields_formulas.htm)

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
