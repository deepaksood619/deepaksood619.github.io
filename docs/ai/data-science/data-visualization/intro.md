# Data Visualization

## Exploratory and Explanatory visualization

Data visualizationis viewed by many disciplines as a modern equivalent of [visual communication](https://en.wikipedia.org/wiki/Visual_communication). It involves the creation and study of the [visual](https://en.wikipedia.org/wiki/Visual_system) representation of [data](https://en.wikipedia.org/wiki/Data).

To communicate information clearly and efficiently, data visualization uses [statistical graphics](https://en.wikipedia.org/wiki/Statistical_graphics), [plots](https://en.wikipedia.org/wiki/Plot_(graphics)), [information graphics](https://en.wikipedia.org/wiki/Infographic) and other tools. Numerical data may be encoded using dots, lines, or bars, to visually communicate a quantitative message.Effective visualization helps users analyze and reason about data and evidence. It makes complex data more accessible, understandable and usable. Users may have particular analytical tasks, such as making comparisons or understanding [causality](https://en.wikipedia.org/wiki/Causality), and the design principle of the graphic (i.e., showing comparisons or showing causality) follows the task. Tables are generally used where users will look up a specific measurement, while charts of various types are used to show patterns or relationships in the data for one or more variables.

Data visualization is both an art and a science. It is viewed as a branch of [descriptive statistics](https://en.wikipedia.org/wiki/Descriptive_statistics) by some, but also as a [grounded theory](https://en.wikipedia.org/wiki/Grounded_theory) development tool by others. Increased amounts of data created by Internet activity and an expanding number of sensors in the environment are referred to as "[big data](https://en.wikipedia.org/wiki/Big_data)" or [Internet of things](https://en.wikipedia.org/wiki/Internet_of_things). Processing, analyzing and communicating this data present ethical and analytical challenges for data visualization.The field of [data science](https://en.wikipedia.org/wiki/Data_science) and practitioners called [data scientists](https://en.wikipedia.org/wiki/Data_scientists) help address this challenge.

## Types of data

- Categorical: Text labels describing the nature of the data, such as "Name" or "Age". This term also covers qualitative (non-numerical) data.
- Quantitative: Numerical measures, such as "25" to represent the age in years.

1. Quantitative data

   - Binning - Takes a quantitative variable and bins it into categories that are either pre-existing or made up

   - Histogram

2. Categorical data

   - Frequency table

   - Relative frequency table

   - Bar chart

   - Pie chart

   - Pictograph

3. Dotplot

4. Stem and leaf plot

5. Boxplots / Box and whiskers plot

6. Cumulative frequency plots

## Primary types of information displays

- A **table** contains quantitative data organized into rows and columns with categorical labels. It is primarily used to look up specific values. In the example above, the table might have categorical column labels representing the name (aqualitative variable) and age (aquantitative variable), with each row of data representing one person (the sampledexperimental unitorcategory subdivision).
- A **graph** is primarily used to show relationships among data and portrays values encoded asvisual objects(e.g., lines, bars, or points). Numerical values are displayed within an area delineated by one or moreaxes. These axes providescales(quantitative and categorical) used to label and assign values to the visual objects. Many graphs are also referred to ascharts.

## Types of Quantitative Messages

1. **Time-series**

A single variable is captured over a period of time, such as the unemployment rate over a 10-year period. A [line chart](https://en.wikipedia.org/wiki/Line_chart) may be used to demonstrate the trend.

2. **Ranking**

Categorical subdivisions are ranked in ascending or descending order, such as a ranking of sales performance (themeasure) by sales persons (thecategory, with each sales person acategorical subdivision) during a single period. A [bar chart](https://en.wikipedia.org/wiki/Bar_chart) may be used to show the comparison across the sales persons.

3. **Part-to-whole**

Categorical subdivisions are measured as a ratio to the whole (i.e., a percentage out of 100%). A [pie chart](https://en.wikipedia.org/wiki/Pie_chart) or bar chart can show the comparison of ratios, such as the market share represented by competitors in a market.

4. **Deviation**

Categorical subdivisions are compared against a reference, such as a comparison of actual vs. budget expenses for several departments of a business for a given time period. A bar chart can show comparison of the actual versus the reference amount.

5. **Frequency distribution**

Shows the number of observations of a particular variable for given interval, such as the number of years in which the stock market return is between intervals such as 0-10%, 11-20%, etc. A [histogram](https://en.wikipedia.org/wiki/Histogram), a type of bar chart, may be used for this analysis. A [boxplot](https://en.wikipedia.org/wiki/Boxplot) helps visualize key statistics about the distribution, such as median, quartiles, outliers, etc.

6. **Correlation**

Comparison between observations represented by two variables (X, Y) to determine if they tend to move in the same or opposite directions. For example, plotting unemployment (X) and inflation (Y) for a sample of months. A [scatter plot](https://en.wikipedia.org/wiki/Scatter_plot) is typically used for this message.

7. **Nominal comparison**

Comparing categorical subdivisions in no particular order, such as the sales volume by product code. A bar chart may be used for this comparison.

8. **Geographic or geospatial**

Comparison of a variable across a map or layout, such as the unemployment rate by state or the number of persons on the various floors of a building. A [cartogram](https://en.wikipedia.org/wiki/Cartogram) is a typical graphic used.

## Data Visualization Libraries

- Bokeh - <https://docs.bokeh.org/en/latest>
- <http://kepler.gl>
- <https://deck.gl>
- <https://github.com/emeeks/semiotic>
- Echarts - <https://echarts.baidu.com>
- ggplot2

ggplot2 is a system for declaratively creating graphics, based on [The Grammar of Graphics](http://amzn.to/2ef1eWp). You provide the data, tell ggplot2 how to map variables to aesthetics, what graphical primitives to use, and it takes care of the details.

<https://ggplot2.tidyverse.org>

## When you should request a dashboard

- When you'll use it multiple times
- When you'll need the information updated regularly
- When the request will always be the same

## References

<https://en.wikipedia.org/wiki/Data_visualization>

<https://pandas.pydata.org/pandas-docs/stable/user_guide/visualization.html>

Time Series analysis - <https://www.dataquest.io/blog/tutorial-time-series-analysis-pandas>

<https://www.toptal.com/designers/data-visualization/data-visualization-tools>

<https://towardsdatascience.com/8-free-tools-to-make-interactive-data-visualizations-in-2021-no-coding-required-2b2c6c564b5b>

<https://www.freecodecamp.org/news/learn-data-visualization-in-this-free-17-hour-course>
