# Dashboarding

### Changing Time from Date Range Filter

1. Right-click on the date-time dimension, select > **Duplicate**
2. Right-click the copy of the field, hover over Change Data Type > select **Date**
3. Remove the current date filter from the filter shelf.
4. Drag the date field copy to the filter shelf and set up the date slider filter.

[Cannot Remove Time From Date Range Filter With Show Times Option | Tableau Software](https://kb.tableau.com/articles/issue/cannot-remove-time-from-date-range-filter-with-show-times-option)

## Filters

- Dimension filters - Filters on dimensions, you can think of as SQL WHERE clause
- Measure filters - Filters on measures, you can think of as SQL HAVING clause
- Quick filters - Commonly used end filters
- Dependent quick filters - These are quick filters depends on another quick filter. Dependent quick filters can quickly multiply and slow down dashboard performance
- User filters - Can be changed by anyone in Tableau Desktop, in Web Edit mode, or in regular dashboard mode in a web browser

### Context filters

Context filter in Tableau can help to create data sets by applying relevant presets for compilation. Tableau context filter is always processed and applicable first, even if other filters are applied. The multiple preset categories in the worksheet can be divided into many more parts that end up working like a context filter in itself. Data sets are created based on the original datasheet, and data can be minimized efficiently to allow for viewing all data rows despite the constraints. The sheets can be chosen as and when needed.

### Extract filters

Extract filter in Tableau are used to extract a small subset of data from the original data source. Tableau then creates a local copy of the data set that is to be stored in the repository. You can save a screenshot of how it looks in your workbook. These methods reduce Tableau queries. The data size can be further reduced by applying the measure or dimension filter to the extract as required.

### Data source filters

Data source filters in Tableau are mainly used to restrict sensitive data from viewers and reduce data feeds. Viewers can, however, have certain access rights to view the underlying data. Data source filters allow the direct application to source data. One important thing to mention is that the extract filter and the data source filter are not linked, and if you happen to go back to a live connection, the data source filter will remain intact.

### Priority

1. Extract filters
2. Data source filters
3. Context filters
4. Set filters
5. Dimension filters
6. Measure filters
7. Table Calc filters

[Filter Data from Your Views - Tableau](https://help.tableau.com/current/pro/desktop/en-us/filtering.htm)

[Types of Filters in Tableau - Context Filter and More](https://intellipaat.com/blog/types-of-filters-in-tableau/)

## Overlays

[Create a dashboard overlay - ENTIRELY in Tableau | by Brittany Rosenau | Aug, 2023 | Medium](https://brittanyrosenau.medium.com/create-a-dashboard-overlay-entirely-in-tableau-a8e9543979e5)

## Legends

![legends](../../../media/Screenshot%202023-08-21%20at%2011.17.31%20AM.jpg)

[https://public.tableau.com/app/profile/nastengraph/viz/Howtoplacelegendstocharts/Legendsandcharts](https://public.tableau.com/app/profile/nastengraph/viz/Howtoplacelegendstocharts/Legendsandcharts)

## Embeddings

[Embed Views into Webpages - Tableau](https://help.tableau.com/current/pro/desktop/en-us/embed.htm)

## Links

[Tableau Dashboard for Sample Superstore Dataset - YouTube](https://www.youtube.com/watch?v=C5KSjZe5yWQ)
