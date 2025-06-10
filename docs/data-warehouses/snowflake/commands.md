# Commands

## SnowSQL (CLI Client)

SnowSQL is the command line client for connecting to Snowflake to execute SQL queries and perform all DDL and DML operations, including loading data into and unloading data out of database tables.

```bash
snowsql -a <account_identifier> -u <user_name>

# Execute PUT in SnowSQL to upload local data files to the table stage provided for the `emp_basic` table you created.

PUT file://<file-path>[/\]employees0*.csv @sf_tuts.public.%emp_basic;

!exit
```

[SnowSQL (CLI Client) | Snowflake Documentation](https://docs.snowflake.com/user-guide/snowsql)

## Snowflake Objects / SQL

```sql
CREATE OR REPLACE DATABASE sf_tuts;

SELECT CURRENT_DATABASE(), CURRENT_SCHEMA();

CREATE OR REPLACE TABLE emp_basic (
   first_name STRING ,
   last_name STRING ,
   email STRING ,
   streetaddress STRING ,
   city STRING ,
   start_date DATE
   );

CREATE OR REPLACE WAREHOUSE sf_tuts_wh WITH
   WAREHOUSE_SIZE='X-SMALL'
   AUTO_SUSPEND = 180
   AUTO_RESUME = TRUE
   INITIALLY_SUSPENDED=TRUE;

SELECT CURRENT_WAREHOUSE();

LIST @sf_tuts.public.%emp_basic;

COPY INTO emp_basic
  FROM @%emp_basic
  FILE_FORMAT = (type = csv field_optionally_enclosed_by='"')
  PATTERN = '.*employees0[1-5].csv.gz'
  ON_ERROR = 'skip_file';

SELECT * FROM emp_basic;

INSERT INTO emp_basic VALUES
   ('Clementine','Adamou','cadamou@sf_tuts.com','10510 Sachs Road','Klenak','2017-9-22') ,
   ('Marlowe','De Anesy','madamouc@sf_tuts.co.uk','36768 Northfield Plaza','Fangshan','2017-1-26');

SELECT email FROM emp_basic WHERE email LIKE '%.uk';

SELECT first_name, last_name, DATEADD('day',90,start_date) FROM emp_basic WHERE start_date <= '2017-01-01';

DROP DATABASE IF EXISTS sf_tuts;

DROP WAREHOUSE IF EXISTS sf_tuts_wh;
```

[Snowflake in 20 Minutes | Snowflake Documentation](https://docs.snowflake.com/user-guide/tutorials/snowflake-in-20minutes)

### Lifecycle Diagram

![snowflake-sql-lifecycle-diagram](../../../media/Pasted%20image%2020231205120527.jpg)

## Terraform

[Terraform Registry](https://registry.terraform.io/providers/Snowflake-Labs/snowflake/latest/docs)

[Terraforming Snowflake](https://quickstarts.snowflake.com/guide/terraforming_snowflake/index.html#0)
