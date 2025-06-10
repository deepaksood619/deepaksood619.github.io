# Others

## Plywood

Plywood is a JavaScript library that simplifies building interactive visualizations and applications for large data sets. Plywood acts as a middle-layer between data visualizations and data stores.

Plywood is architected around the principles of nested [Split-Apply-Combine](http://www.jstatsoft.org/article/view/v040i01/v40i01.pdf), a powerful divide-and-conquer algorithm that can be used to construct all types of data visualizations. Plywood comes with its own [expression language](https://github.com/implydata/plywood/blob/master/docs/expressions) where a single Plywood expression can translate to multiple database queries, and where results are returned in a nested data structure so they can be easily consumed by visualization libraries such as [D3.js](http://d3js.org/).

You can use Plywood in the browser and/or in node.js to easily create your own visualizations and applications.

Plywood also acts as a very advanced query planner for Druid, and Plywood will determine the most optimal way to execute Druid queries.

https://github.com/implydata/plywood

## Turnilo

Business intelligence, data exploration and visualization web application for Druid

https://github.com/allegro/turnilo

## Tranquility

Tranquility helps you send real-time event streams to Druid and handles partitioning, replication, service discovery, and schema rollover, seamlessly and without downtime.

https://github.com/druid-io/tranquility

## Imply Pivot

- Imply Pivot is a web-based analytics application on Druid
- It provides interactive, point-and-click visualizations as well as a SQL query UI
- It is only available with the Imply distribution of Druid
