# Interview Questions

## Basic Tableau Questions

### 1. What is Tableau? Explain its components

Tableau is a powerful data visualization tool used in Business Intelligence (BI) and Data Analytics to create interactive and shareable dashboards. Its components include Tableau Desktop, Tableau Public, Tableau Server, Tableau Online, Tableau Reader, and Tableau Prep.

### 2. What is a calculated field in Tableau, and how do you create one?

A calculated field is a custom field that allows you to perform calculations on your data. It can be created by clicking on the dropdown menu in the Data pane and selecting "Create Calculated Field."

### 3. What are dimensions and measures in Tableau?

- **Dimensions**: Qualitative data like names, dates, or geographical data.
- **Measures**: Quantitative data like sales, profit, or numerical values.

### 4. What is the difference between a live connection and an extract in Tableau?

- **Live Connection**: Real-time data fetched directly from the database.
- **Extract**: A static snapshot of data taken from the database and stored in Tableau’s memory for faster access.

### 5. What is the difference between a heat map and a tree map in Tableau?

- **Heat Map**: Represents data intensity using colors.
- **Tree Map**: Represents hierarchical data using nested rectangles.

## Intermediate Tableau Questions

### 6. Explain the difference between context filters and regular filters in Tableau

- **Context Filters**: Applied first and set a context for the subsequent filters.
- **Regular Filters**: Work within the context defined by the context filters.

### 7. What are LOD (Level of Detail) expressions in Tableau?

LOD expressions are used to control the granularity of data aggregation in calculations. Types include:

- **Fixed**: Ignores the view and focuses on the specified dimension.
- **Include**: Adds dimensions to the existing view.
- **Exclude**: Removes dimensions from the view.

### 8. How does Tableau handle null values?

Tableau provides options to filter out or replace null values with zero, a placeholder value, or a custom string.

### 9. What is a parameter in Tableau, and how is it used?

A parameter is a dynamic value that can replace a constant value in calculations, filters, or reference lines. Users can interact with parameters to change the view dynamically.

### 10. What is the difference between blending and joining data in Tableau?

- **Blending**: Combines data from different data sources using common dimensions (requires primary and secondary data sources).
- **Joining**: Combines data from the same source using SQL-like join operations (Inner, Left, Right, Full).
