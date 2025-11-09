# Interview Questions

## Sample Schema - Ecommerce Analytics

```sql
+-------------------+
|   customers       |
+-------------------+
| customer_id (PK)  |
| name              |
| email             |
| city              |
| signup_date       |
+-------------------+
          |
          | 1..* (a customer can place many orders)
          |
          v
+-------------------+
|     orders        |
+-------------------+
| order_id (PK)     |
| customer_id (FK)  ---> customers.customer_id
| order_date        |
| total_amount      |
+-------------------+
          |
          | 1..* (an order has many order_items)
          |
          v
+-------------------+
|   order_items     |
+-------------------+
| order_item_id (PK)|
| order_id (FK)     ---> orders.order_id
| product_id (FK)   ---> products.product_id
| quantity          |
| price_per_unit    |
+-------------------+

+-------------------+
|    products       |
+-------------------+
| product_id (PK)   |
| name              |
| category          |
| price             |
+-------------------+

          ^
          | (each item refers to one product)
          |

+-------------------+
|    payments       |
+-------------------+
| payment_id (PK)   |
| order_id (FK)     ---> orders.order_id
| payment_date      |
| amount            |
| payment_method    |
+-------------------+
```

## Basic Questions (SQL Fundamentals)

**Q1.** Fetch all customers who signed up in 2024.

```sql
SELECT * FROM customers
WHERE EXTRACT(YEAR FROM signup_date) = 2024;
```

**Q2.** Get the total number of orders placed by each customer.

```sql
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id;
```

**Q3.** Find customers who haven’t placed any orders.

```sql
SELECT c.customer_id, c.name
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

## Intermediate Questions (Joins, Aggregation, Filtering)

**Q4.** Retrieve top 3 products by total revenue.

```sql
SELECT p.name, SUM(oi.quantity * oi.price_per_unit) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
GROUP BY p.name
ORDER BY revenue DESC
LIMIT 3;
```

**Q5.** Get total revenue by product category for the current year.

```sql
SELECT p.category, SUM(oi.quantity * oi.price_per_unit) AS total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN orders o ON oi.order_id = o.order_id
WHERE EXTRACT(YEAR FROM o.order_date) = EXTRACT(YEAR FROM CURRENT_DATE)
GROUP BY p.category;
```

**Q6.** Find customers who have spent more than ₹10,000 in total.

```sql
SELECT c.customer_id, c.name, SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
HAVING SUM(o.total_amount) > 10000;
```

## Advanced Questions (Subqueries, CTEs, Window Functions)

**Q7.** Find the latest order for each customer.

```sql
SELECT customer_id, order_id, order_date
FROM (
  SELECT customer_id, order_id, order_date,
         ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn
  FROM orders
) t
WHERE rn = 1;
```

**Q8.** Get the top 5 customers by lifetime value (LTV).

```sql
SELECT c.name, SUM(o.total_amount) AS ltv
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.name
ORDER BY ltv DESC
LIMIT 5;
```

**Q9.** Find the percentage contribution of each category to total revenue.

```sql
WITH category_revenue AS (
  SELECT p.category, SUM(oi.quantity * oi.price_per_unit) AS revenue
  FROM order_items oi
  JOIN products p ON oi.product_id = p.product_id
  GROUP BY p.category
)
SELECT category,
       revenue,
       ROUND(100 * revenue / SUM(revenue) OVER (), 2) AS pct_of_total
FROM category_revenue;
```

## Expert Questions (Optimization, Edge Cases, Tricky Logic)

**Q10.** Identify orders where payment is missing or partial.

```sql
SELECT o.order_id, o.total_amount, COALESCE(SUM(p.amount), 0) AS paid_amount
FROM orders o
LEFT JOIN payments p ON o.order_id = p.order_id
GROUP BY o.order_id, o.total_amount
HAVING COALESCE(SUM(p.amount), 0) < o.total_amount;
```

**Q11.** For each customer, show month-over-month growth in spending.

```sql
WITH monthly_spend AS (
  SELECT customer_id,
         DATE_TRUNC('month', order_date) AS month,
         SUM(total_amount) AS spend
  FROM orders
  GROUP BY customer_id, DATE_TRUNC('month', order_date)
)
SELECT customer_id,
       month,
       spend,
       spend - LAG(spend) OVER (PARTITION BY customer_id ORDER BY month) AS growth
FROM monthly_spend;
```

**Q12.** Find the most popular product category per city.

```sql
WITH city_category_sales AS (
  SELECT c.city, p.category, SUM(oi.quantity) AS qty
  FROM order_items oi
  JOIN orders o ON oi.order_id = o.order_id
  JOIN customers c ON o.customer_id = c.customer_id
  JOIN products p ON oi.product_id = p.product_id
  GROUP BY c.city, p.category
),
ranked AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY qty DESC) AS rn
  FROM city_category_sales
)
SELECT city, category, qty
FROM ranked
WHERE rn = 1;
```

## Bonus Topics for Senior-Level Interviews

| Topic                  | Sample Question                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------- |
| **Indexes**            | Explain when to use composite indexes and how they affect `WHERE` clause performance. |
| **Query Optimization** | How would you debug a slow query that joins 5 tables?                                 |
| **Transactions**       | What happens if one statement in a transaction fails?                                 |
| **Isolation Levels**   | Explain “phantom read” and how to prevent it.                                         |
| **Partitioning**       | How would you partition the `orders` table by year for performance?                   |
| **CTE vs Subquery**    | When to prefer one over the other?                                                    |
| **Window Functions**   | How are `ROW_NUMBER()` and `RANK()` different?                                        |

[ChatGPT - SQL interview questions](https://chatgpt.com/share/69019e55-5d84-8008-9b05-83dd7f4143e5)

## SQL Questions

1. Find the **3rd highest salary** in a company, returning all employees who have that salary.
2. Find the **top 2 scorers per subject** from a marks table.
3. Find the **highest paid employee in each department**.
4. Find the **second highest salary in each department**.
5. Find **students who scored more than the class average**.
6. Find the **cumulative total salary** per department ordered by salary descending.
7. Find the **employee(s) whose salary is just below the maximum salary** in the company (difference-based).
8. List **employees ranked by salary within each department** using `ROW_NUMBER()`.
9. Find **products whose price is above the average price in their category**.
10. Find **the difference between each employee’s salary and the department average**.
11. Find the **running total of sales** ordered by sale date.
12. Find the **first transaction per customer** by date.
13. Find the **top 3 selling products** based on total revenue.
14. Find **students who scored exactly the median score**.
15. Find **employees who earn more than their manager**.
16. Find **consecutive login days** for each user (window + gaps).
17. Find the **latest salary record** per employee from a historical salary table.
18. Find **percentage contribution** of each product to total sales.
19. Find **customers who purchased more than once within 7 days**.
20. Find **each employee’s salary rank across the company and within their department**.
