# SQL Examples / Queries

[Online SQL Playground with Data | W3 Schools](https://www.w3schools.com/sql/trysql.asp?filename=trysql_editor)

- Alter table drop index in mysql locks the table, run it off-hours

### See size of table for all schemas - MySQL

```sql
SELECT
    TABLE_SCHEMA AS 'Schema',
    TABLE_NAME AS 'Table',
    ROUND(SUM(INDEX_LENGTH) / 1024 / 1024, 2) AS 'Index Size (MB)',
    ROUND(SUM(DATA_LENGTH) / 1024 / 1024, 2) AS 'Data Size (MB)',
    ROUND((SUM(INDEX_LENGTH) + SUM(DATA_LENGTH)) / 1024 / 1024 / 1024, 2) AS 'Total Size (GB)',
    ROUND((SUM(INDEX_LENGTH) + SUM(DATA_LENGTH)) / 1024 / 1024, 2) AS 'Total Size (MB)',
    SUM(TABLE_ROWS) AS 'Number of Rows'
FROM
    information_schema.TABLES
WHERE
    TABLE_TYPE = 'BASE TABLE' -- Exclude views
GROUP BY
    TABLE_SCHEMA, TABLE_NAME
ORDER BY
    `Total Size (GB)` DESC limit 100000; -- Optional: Order by total size


SELECT
  table_schema,
  table_name,
  ROUND((DATA_LENGTH) / 1024 / 1024 / 1024, 2) AS `Data Size (GB)`,
  ROUND((INDEX_LENGTH) / 1024 / 1024 / 1024, 2) AS `Index Size (GB)`,
  ROUND((data_free)/1024/1024/1024,2) AS free_gb,
  ROUND((DATA_LENGTH + INDEX_LENGTH + data_free) / 1024 / 1024 / 1024, 2) AS `Total Size (GB)`
FROM
  information_schema.TABLES
ORDER BY
  (DATA_LENGTH + INDEX_LENGTH + data_free) DESC limit 10;

-- Schema wise data
SELECT
    table_schema,
    ROUND(SUM(DATA_LENGTH) / 1024 / 1024 / 1024, 2) AS `Data Size (GB)`,
    ROUND(SUM(INDEX_LENGTH) / 1024 / 1024 / 1024, 2) AS `Index Size (GB)`,
    ROUND(SUM(DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024 / 1024,
            2) AS `Total Size (GB)`,
    ROUND(SUM(DATA_FREE) / 1024 / 1024 / 1024, 2) AS `FREE Size (GB)`,
    COUNT(*) AS tables,
    CURDATE() AS today
FROM
    information_schema.tables
GROUP BY table_schema
ORDER BY 3 DESC;
```

### Other queries

```sql
SELECT count(*) AS TOTALNUMBEROFTABLES FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'sttash_website_LIVE';
-- 20 Apr 2021 - 955
-- 01/06/22 - 926
-- 20/07/22 - 927

-- Show all unused indexes
 select count(*) from sys.schema_unused_indexes;

-- show all unused tables
 SHOW TABLE STATUS where `Rows` = 0;

 SHOW TABLE STATUS where `Rows` = 0;
 -- 37
 SHOW TABLE STATUS where `Rows` < 5;
 -- 101

 -- best way to count number of rows in table (approximate)
 show table status like 'table_name';

show master status; -- check binlog position

-- RDS
SELECT @@global.transaction_ISOLATION;
SELECT @@transaction_ISOLATION;

-- Aurora
SELECT @@TX_ISOLATION;
SHOW ENGINE INNODB STATUS;
SELECT * FROM INFORMATION_SCHEMA.INNODB_TRX;
select event_name,current_alloc from sys.memory_global_by_current_bytes;

show variables like '%binlog%';
show variables like '%log_bin%';

SELECT ( @@key_buffer_size
+ @@query_cache_size
+ @@innodb_buffer_pool_size
+ @@innodb_log_buffer_size
+ @@max_connections * (
    @@read_buffer_size
    + @@read_rnd_buffer_size
    + @@sort_buffer_size
    + @@join_buffer_size
    + @@binlog_cache_size
    + @@thread_stack
    + @@tmp_table_size )
) / (1024 * 1024 * 1024) AS MAX_MEMORY_GB;

SELECT
  r.trx_id waiting_trx_id,
  r.trx_mysql_thread_id waiting_thread,
  r.trx_query waiting_query,
  b.trx_id blocking_trx_id,
  b.trx_mysql_thread_id blocking_thread,
  b.trx_query blocking_query
FROM       information_schema.innodb_lock_waits w
INNER JOIN information_schema.innodb_trx b
  ON b.trx_id = w.blocking_trx_id
INNER JOIN information_schema.innodb_trx r
  ON r.trx_id = w.requesting_trx_id;

Delete performance schema tables
 call sys.ps_truncate_all_tables(true);

To get all tables with columns columnA or ColumnB in the database YourDatabase:
 SELECT DISTINCT TABLE_NAME
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE COLUMN_NAME IN ('columnA','ColumnB')
        AND TABLE_SCHEMA='YourDatabase';

-- Sizing
-- Table combined with index - MySQL
SELECT
  TABLE_NAME AS `Table`,
  ROUND((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024 / 1024) AS `Size (GB)`
FROM
  information_schema.TABLES
WHERE
  TABLE_SCHEMA = "sttash_website_LIVE"
ORDER BY
  (DATA_LENGTH + INDEX_LENGTH)
DESC;

show indexes from <table_name>;
SHOW EXTENDED INDEX FROM <table_name>;

-- Different index sizes per table
SELECT database_name, table_name, index_name,
ROUND(stat_value * @@innodb_page_size / 1024 / 1024 / 1024, 2) size_in_gb
FROM mysql.innodb_index_stats
WHERE stat_name = 'size'
ORDER BY size_in_gb DESC;

-- Only index sizes
select table_schema as database_name,
       table_name,
       round(index_length/1024/1024,2) as index_size
from information_schema.tables
where table_type = 'BASE TABLE'
      and table_schema not in ('information_schema', 'sys',
                               'performance_schema', 'mysql')
order by index_size desc;

-- Get all FullText indexes
SELECT TABLE_SCHEMA, TABLE_NAME
FROM information_schema.statistics
WHERE index_type LIKE 'FULLTEXT%';

-- defragmentation
select table_name,
round(data_length/1024/1024) as data_length_mb,
round(data_free/1024/1024) as data_free_mb
 from information_schema.tables
 where round(data_free/1024/1024) > 500
 order by data_free_mb;

OPTIMIZE TABLE sttash_website_LIVE.email_instance_moratorium;

-- Others
SELECT date(create_date), COUNT(*) FROM userDeviceSms WHERE date(create_date) BETWEEN NOW() - INTERVAL 6 HOUR AND NOW()
group by date(create_date)
order by date(create_date);

SELECT CONCAT(YEAR(create_date), " ",
       MONTH(create_date)) as month,
       count(id)
FROM st_customer_detail
GROUP BY YEAR(create_date),
         MONTH(create_date)
ORDER BY YEAR(create_date) DESC, MONTH(create_date) DESC;

SELECT
    customer_id, json_extract(template_data,'$.agent'), count(*) as count
FROM
    communication_log
WHERE
    template_id = 'chat_link'
    AND create_date BETWEEN NOW() - INTERVAL 6 HOUR AND NOW()
group by customer_id, json_extract(template_data,'$.agent')
ORDER BY count DESC;

SELECT
 c.id,cron_name,template_id_id,body
FROM
    crons_cron c
        JOIN
    communication_templates t ON c.template_id_id = t.id
WHERE
    c.id IN (27,43,205,206,207,210,211,214,236,274,301,302,304,334,339,341,345,349,350,398,399,404,405,406,407,408,423,460,727,728,729,730,732,753);
```

```sql
-- Subtract with COUNT(DISTINCT *)
SELECT (SELECT COUNT(CITY) FROM STATION) - (SELECT COUNT(DISTINCT CITY) FROM STATION);

Select ROUND(LONG_W,4) from STATION WHERE LAT_N = (SELECT MAX(LAT_N) FROM STATION WHERE LAT_N<137.2345);

SELECT
    CASE
        WHEN A + B > C AND A+C>B AND B+C>A THEN
            CASE
                WHEN A = B AND B = C THEN 'Equilateral'
                WHEN A = B OR B = C OR A = C THEN 'Isosceles'
                WHEN A != B OR B != C OR A != C THEN 'Scalene'
            END ELSE 'Not A Triangle'
    END
FROM TRIANGLES;

SELECT
    CASE
        WHEN Occupation = 'Doctor' THEN CONCAT(Name, '(D)')
        WHEN Occupation = 'Actor' THEN CONCAT(Name, '(A)')
        WHEN Occupation = 'Professor' THEN CONCAT(Name, '(P)')
        WHEN Occupation = 'Singer' THEN CONCAT(Name, '(S)')
    END
FROM OCCUPATIONS
ORDER BY NAME;
SELECT Concat('There are a total of ', COUNT(*), ' ', LOWER(Occupation), 's.')
FROM OCCUPATIONS
GROUP BY Occupation
ORDER BY COUNT(*);

MySQL
set @r1=0, @r2=0, @r3=0, @r4=0;
select min(Doctor), min(Professor), min(Singer), min(Actor)
from(
  select case when Occupation='Doctor' then (@r1:=@r1+1)
            when Occupation='Professor' then (@r2:=@r2+1)
            when Occupation='Singer' then (@r3:=@r3+1)
            when Occupation='Actor' then (@r4:=@r4+1) end as RowNumber,
    case when Occupation='Doctor' then Name end as Doctor,
    case when Occupation='Professor' then Name end as Professor,
    case when Occupation='Singer' then Name end as Singer,
    case when Occupation='Actor' then Name end as Actor
  from OCCUPATIONS
  order by Name
) Temp
group by RowNumber;

SELECT N,
 IF (P IS NULL, 'Root',
     IF ((SELECT COUNT(*)
          FROM BST
          WHERE P=B.N)>0, 'Inner',
         'Leaf'))
FROM BST AS B
ORDER BY N;

SELECT N,
 CASE
    WHEN P IS NULL THEN 'Root'
    WHEN N IN (SELECT P FROM BST) then 'Inner'
    ELSE 'Leaf'
 END
FROM BST
ORDER BY N;

SELECT c.company_code,
    c.founder,
    COUNT(DISTINCT l.lead_manager_code),
    COUNT(DISTINCT s.senior_manager_code),
    COUNT(DISTINCT m.manager_code),
    COUNT(DISTINCT e.employee_code)
FROM Company c,
    Lead_Manager l,
    Senior_Manager s,
    Manager m,
    Employee e
WHERE c.company_code = l.company_code
    and l.lead_manager_code = s.lead_manager_code
    and s.senior_manager_code = m.senior_manager_code
    and m.manager_code = e.manager_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code;

SELECT h.hacker_id, h.name, s.submission_id, s.challenge_id, s.score
FROM Submissions s
JOIN Hackers h
ON s.hacker_id = h.hacker_id
WHERE s.score != 0
GROUP BY h.hacker_id
ORDER BY s.score DESC, h.hacker_id;

SELECT h.hacker_id, h.name, SUM(max_score.score) as total_score
FROM Hackers h JOIN
    (SELECT hacker_id, max(score) as score from submissions group by challenge_id, hacker_id) max_score
ON h.hacker_id = max_score.hacker_id
GROUP BY h.hacker_id, name
HAVING total_score > 0
ORDER BY total_score DESC, h.hacker_id;

SELECT w.id, wp.age, w.coins_needed, w.power
FROM Wands AS w
JOIN Wands_Property AS wp
ON w.code = wp.code
WHERE wp.is_evil = 0
    AND w.coins_needed = (
        SELECT MIN(coins_needed)
        FROM Wands as w1
        JOIN Wands_Property as p1
        ON w1.code = p1.code
        WHERE w1.power = w.power
            AND p1.age = wp.age
    )
ORDER BY w.power DESC, wp.age DESC;

SELECT MAX(max_window.max_salary), COUNT(*)
FROM Employee, (
    SELECT MAX(months*salary) AS max_salary
    FROM Employee
) max_window
WHERE months*salary = max_window.max_salary;

SELECT (salary*months) AS earnings, COUNT(*)
FROM Employee
GROUP BY earnings
ORDER BY earnings DESC
LIMIT 1;

SELECT s.hacker_id, h.name
FROM Submissions as s
JOIN Challenges as c
ON s.challenge_id = c.challenge_id
JOIN Difficulty as d
ON c.difficulty_level = d.difficulty_level
JOIN Hackers as h
ON s.hacker_id = h.hacker_id
WHERE s.score = d.score
GROUP BY s.hacker_id, h.name
HAVING COUNT(s.hacker_id) > 1
ORDER BY COUNT(s.hacker_id) DESC, s.hacker_id;

SELECT c.hacker_id, h.name ,count(c.hacker_id) AS c_count
FROM Hackers AS h
    inner join Challenges as c on c.hacker_id = h.hacker_id
GROUP BY c.hacker_id, h.name
HAVING
    c_count =
        (SELECT MAX(temp1.cnt)
        from (SELECT COUNT(hacker_id) as cnt
             from Challenges
             group by hacker_id
             order by hacker_id) temp1)
    OR c_count IN
        (select t.cnt
         from (select count(*) as cnt
               from challenges
               group by hacker_id) t
         group by t.cnt
         having count(t.cnt) = 1)
ORDER BY c_count DESC, c.hacker_id;

-- oracle prime numbers 2&3&5&7... till 1000
select listagg (num, '&') within group (order by num) from ( select n1.num num, sum(case when mod(n1.num,n2.num) = 0 then 1 else 0 end) as cnt from (select rownum num from dual connect by level <= 1000) n1, (select rownum num from dual connect by level <= 1000) n2 where n1.num<>1 and n2.num<>1 and n1.num>=n2.num group by n1.num) a where cnt = 1;

-- my sql ** sequence
SELECT REPEAT('* ', @NUMBER := @NUMBER - 1) FROM information_schema.tables, (SELECT @NUMBER:=21) t LIMIT 20

-- SQL Project Planning
SET sql_mode = '';
SELECT Start_Date, End_Date
FROM
    (SELECT Start_Date FROM Projects WHERE Start_Date NOT IN (SELECT End_Date FROM Projects)) a,
    (SELECT End_Date FROM Projects WHERE End_Date NOT IN (SELECT Start_Date FROM Projects)) b
WHERE Start_Date < End_Date
GROUP BY Start_Date
ORDER BY DATEDIFF(End_Date, Start_Date), Start_Date

Select S.Name
From ( Students S join Friends F Using(ID)
       join Packages P1 on S.ID=P1.ID
       join Packages P2 on F.Friend_ID=P2.ID)
Where P2.Salary > P1.Salary
Order By P2.Salary;

SELECT ct.contest_id,
        ct.hacker_id,
        ct.name,
        SUM(total_submissions) AS ts,
        SUM(total_accepted_submissions) AS tas,
        SUM(total_views) AS tv,
        SUM(total_unique_views) AS tuv
FROM Contests as ct
JOIN Colleges as cg ON ct.contest_id = cg.contest_id
JOIN Challenges as ch ON cg.college_id = ch.college_id
LEFT JOIN (
    SELECT challenge_id,
            SUM(total_views) AS total_views,
            SUM(total_unique_views) AS total_unique_views
    FROM View_Stats
    GROUP BY challenge_id
) vs ON ch.challenge_id = vs.challenge_id
LEFT JOIN (
    SELECT challenge_id,
            SUM(total_submissions) AS total_submissions,
            SUM(total_accepted_submissions) AS total_accepted_submissions
    FROM Submission_Stats
    GROUP BY challenge_id
) ss ON ch.challenge_id = ss.challenge_id
GROUP BY ct.contest_id, ct.hacker_id, ct.name
HAVING ts != 0
        or tas != 0
        or tv != 0
        or tuv != 0
ORDER BY ct.contest_id;

select submission_date ,
(SELECT COUNT(distinct hacker_id)
 FROM Submissions s2
 WHERE s2.submission_date = s1.submission_date AND    (SELECT COUNT(distinct s3.submission_date) FROM Submissions s3 WHERE s3.hacker_id = s2.hacker_id AND s3.submission_date < s1.submission_date) = dateDIFF(s1.submission_date , '2016-03-01')) ,
(select hacker_id  from submissions s2 where s2.submission_date = s1.submission_date
group by hacker_id order by count(submission_id) desc , hacker_id limit 1) as shit,
(select name from hackers where hacker_id = shit)
from
(select distinct submission_date from submissions) s1
group by submission_date;

-- MS SQL Server
select big_1.submission_date, big_1.hkr_cnt, big_2.hacker_id, h.name
from
(select submission_date, count(distinct hacker_id) as hkr_cnt
from
(select s.*, dense_rank() over(order by submission_date) as date_rank,
dense_rank() over(partition by hacker_id order by submission_date) as hacker_rank
from submissions s ) a
where date_rank = hacker_rank
group by submission_date) big_1
join
(select submission_date,hacker_id,
 rank() over(partition by submission_date order by sub_cnt desc, hacker_id) as max_rank
from (select submission_date, hacker_id, count(*) as sub_cnt
      from submissions
      group by submission_date, hacker_id) b ) big_2
on big_1.submission_date = big_2.submission_date and big_2.max_rank = 1
join hackers h on h.hacker_id = big_2.hacker_id
order by 1
```

```sql
SELECT
    t.customer_id,
    t.template_id,
    t.channel
FROM
    communication_log t
        INNER JOIN
    (SELECT
        customer_id, MAX(create_date) AS max_date
    FROM
        communication_log
    WHERE
        customer_id IN (10551044 , 2261266, 1548951)
    GROUP BY customer_id) tm ON t.customer_id = tm.customer_id
        AND t.create_date = tm.max_date;
```

[how do I query sql for a latest record date for each user](https://stackoverflow.com/questions/2411559/how-do-i-query-sql-for-a-latest-record-date-for-each-user)

### [Question - UserName, NoOfCreated, NoOfEnabledRoles NoOffUpdatedRole](https://forums.sqlteam.com/t/to-write-sql-code/19832)

```sql
SELECT
    UPPER(TRIM(CreatedBy)) AS UserName,
    COALESCE(COUNT(DISTINCT Name), - 1) AS NoOfCreatedRoles,
    COALESCE(SUM(CASE
                WHEN IsEnabled = 1 THEN 1
                ELSE 0
            END),
            - 1) AS NoOfCreatedAndEnabledRoles,
    COALESCE(COUNT(UPPER(TRIM(UpdatedBy))), - 1) AS NoOfUpdatedRoles
FROM
    UserRole
GROUP BY UPPER(TRIM(CreatedBy))
ORDER BY UPPER(TRIM(CreatedBy)) DESC;


SELECT
    UPPER(TRIM(CreatedBy)) AS UserName,
    COALESCE(COUNT(DISTINCT Name), - 1) AS NoOfCreatedRoles,
    COALESCE(SUM(CASE
                WHEN IsEnabled = 1 THEN 1
                ELSE 0
            END),
            - 1) AS NoOfCreatedAndEnabledRoles,
    CASE
        WHEN
            (SELECT
                    COUNT(*) AS total
                FROM
                    UserRole
                WHERE
                    UPPER(TRIM(UpdatedBy)) = UPPER(TRIM(CreatedBy))) > 0
        THEN
            (SELECT
                    COUNT(*) AS total
                FROM
                    UserRole
                WHERE
                    UPPER(TRIM(UpdatedBy)) = UPPER(TRIM(CreatedBy)))
        ELSE - 1
    END AS NoOfUpdatedRoles
FROM
    UserRole
GROUP BY UPPER(TRIM(CreatedBy))
ORDER BY UPPER(TRIM(CreatedBy)) DESC;
```

```sql
-- [StrataScratch](https://platform.stratascratch.com/coding/2165-sales-percentage-weeks-beginning-and-end)
WITH first_week_day AS (
 SELECT
  date(to_timestamp(invoicedate,
  'DD/MM/YYYY HH24:MI')) AS first_day,
  sum(quantity * unitprice) AS first_day_sales
 FROM
  early_sales
 WHERE
  date(to_timestamp(invoicedate,
  'DD/MM/YYYY HH24:MI')) = date(date_trunc('week',
  to_timestamp(invoicedate,
  'DD/MM/YYYY HH24:MI')))
 GROUP BY
  1
 )
SELECT * FROM first_week_day;
```
