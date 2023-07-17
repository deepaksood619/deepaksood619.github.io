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
