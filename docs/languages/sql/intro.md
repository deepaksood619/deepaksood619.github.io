# Intro

**SQL is a declarative language, you tell the system what do you want, and system figures it out how to give it to you**

SQL (Structured Query Language) is a special-purpose programming language designed for managing information in a relational database management system (RDBMS). The word relational here is key; it specifies that the database management system is organized in such a way that there are clear relations defined between different sets of data. SQL operates through simple, declarative statements. This keeps data accurate and secure, and helps maintain the integrity of databases, regardless of size.

Typically, you need to extract, transform, and load data into your RDBMS before you're able to manage it using SQL,

### SQL Queries Syntax Order

`SELECT... FROM... WHERE... GROUP BY... HAVING... ORDER BY... LIMIT...`

### SQL Queries Execution Order - **FJWGHSOL**

![image](../../media/sql-Intro-image1.jpg)

https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select

## How to describe tables

**City**

| **Field**   | **Type**     |
|-------------|--------------|
| ID          | NUMBER       |
| NAME        | VARCHAR2(17) |
| COUNTRYCODE | VARCHAR2(3)  |
| DISTRICT    | VARCHAR2(20) |
| POPULATION  | NUMBER       |

## Critique of SQL

SQL's shortcomings can be grouped into these categories:

- lack of proper orthogonality - SQL is hard to compose
- lack of compactness - SQL is a large language
- lack of consistency - SQL is inconsistent in syntax and semantics
- poor system cohesion - SQL does not integrate well enough with application languages and protocols

### SQL Naming Conventions

https://launchbylunch.com/posts/2014/Feb/16/sql-naming-conventions
