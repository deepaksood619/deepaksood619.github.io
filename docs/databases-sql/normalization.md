# Normalization

- Normalization is the process of organizing the data in the database.
- Normalization is used to minimize the redundancy from a relation or set of relations. It is also used to eliminate the undesirable characteristics like Insertion, Update and Deletion Anomalies.
- Normalization divides the larger table into the smaller table and links them using relationship.
- The normal form is used to reduce redundancy from the database table.

## Why Data Normalization?

1. **Increased consistency.** Information is stored in one place and one place only, reducing the possibility of inconsistent data.

2. **Easier object-to-data mapping.** Highly-normalized data schemas in general are closer conceptually to object-oriented schemas because the object-oriented goals of promoting high cohesion and loose coupling between classes results in similar solutions (at least from a data point of view).

You typically want to have highly normalized operational data stores (ODSs) and data warehouses (DWs).

The primary disadvantage of normalization is slower reporting performance. You will want to have a [denormalized](http://agiledata.org/essays/dataNormalization.html#Denormalization) schema to support reporting, particularly in data marts.

## Anamolies of DB

Example: Suppose a manufacturing company stores the employee details in a table named employee that has four attributes: emp_id for storing employee's id, emp_name for storing employee's name, emp_address for storing employee's address and emp_dept for storing the department details in which the employee works. At some point of time the table looks like this

| emp_id | emp_name | emp_address | emp_dept |
|--------|----------|-------------|----------|
| 101    | Rick     | Delhi       | D001     |
| 101    | Rick     | Delhi       | D002     |
| 123    | Maggie   | Agra        | D890     |
| 166    | Glenn    | Chennai     | D900     |
| 166    | Glenn    | Chennai     | D004     |

The above table is not normalized. We will see the problems that we face when a table is not normalized.

#### Update anomaly

In the above table we have two rows for employee Rick as he belongs to two departments of the company. If we want to update the address of Rick then we have to update the same in two rows or the data will become inconsistent. If somehow, the correct address gets updated in one department but not in other then as per the database, Rick would be having two different addresses, which is not correct and would lead to inconsistent data

#### Insert anomaly

Suppose a new employee joins the company, who is under training and currently not assigned to any department then we would not be able to insert the data into the table if emp_dept field doesn't allow nulls

#### Delete anomaly

Suppose, if at a point of time the company closes the department D890 then deleting the rows that are having emp_dept as D890 would also delete the information of employee Maggie since she is assigned only to this department

## Normalization

- First normal form (1NF)
- Second normal form (2NF)
- Third normal form (3NF)
- Boyce & Codd normal form (BCNF)
- Fourth normal form (4NF)
- Fifth normal form (5NF)

### First Normal Form (1NF)

An attribute (column) of a table cannot hold multiple values. It should hold only atomic values.

Sample Employee table, it displays employees are working with multiple departments.

| Employee | Age | Department        |
|----------|-----|-------------------|
| Melvin   | 32  | Marketing, Sales  |
| Edward   | 45  | Quality Assurance |
| Alex     | 36  | Human Resource    |

Employee table following 1NF:

| Employee | Age | Department        |
|----------|-----|-------------------|
| Melvin   | 32  | Marketing         |
| Melvin   | 32  | Sales             |
| Edward   | 45  | Quality Assurance |
| Alex     | 36  | Human Resource    |

### Second Normal Form (2NF)

- Should be in 1NF
- All non-key attributes are fully functional dependent on the primary key

Sample Products table:

| productID | product    | Brand   |
|-----------|------------|---------|
| 1         | Monitor    | Apple   |
| 2         | Monitor    | Samsung |
| 3         | Scanner    | HP      |
| 4         | Head phone | JBL     |

Product table following 2NF:

Products Category table:

| productID | product    |
|-----------|------------|
| 1         | Monitor    |
| 2         | Scanner    |
| 3         | Head phone |

Brand table:

| brandID | brand   |
|---------|---------|
| 1       | Apple   |
| 2       | Samsung |
| 3       | HP      |
| 4       | JBL     |

Products Brand table:

| pbID | productID | brandID |
|------|-----------|---------|
| 1    | 1         | 1       |
| 2    | 1         | 2       |
| 3    | 2         | 3       |
| 4    | 3         | 4       |

![image](../../media/Normalization-image1.jpg)

### Third Normal Form (3NF)

- Should be already in 2NF
- No transition dependency exists

no column entry should be dependent on any other entry (value) other than the key for the table.

If such an entity exists, move it outside into a new table.

### Boyce-Codd Normal Form (BCNF)

3NF and all tables in the database should be only one primary key.

It is an advance version of 3NF that's why it is also referred as 3.5NF. BCNF is stricter than 3NF. A table complies with BCNF if it is in 3NF and for every [**functional dependency**](https://beginnersbook.com/2015/04/functional-dependency-in-dbms/) X->Y, X should be the super key of the table.

### Fourth Normal Form (4NF)

Tables cannot have multi-valued dependencies on a Primary Key.

### Fifth Normal Form (5NF)

A composite key shouldn't have any cyclic dependencies.

https://www.w3schools.in/dbms/database-normalization

http://www.bkent.net/Doc/simple5.htm

## Denormalization

The majority of modern applications need to be able to retrieve data in the shortest time possible. And that's when you can consider denormalizing a relational database. As the name suggests, denormalization is the opposite of normalization. When you normalize a database, you organize data to ensure integrity and eliminate redundancies. Database denormalization means you deliberately put the same data in several places, thus increasing redundancy.

The main purpose of denormalization is to **significantly speed up data retrieval**

### Techniques

- Storing derivable data
- Using pre-joined tables
- Using hardcoded values
- Keeping details with the master
- Repeating a single detail with its master
- Adding short-circuit keys

https://rubygarage.org/blog/database-denormalization-with-examples
