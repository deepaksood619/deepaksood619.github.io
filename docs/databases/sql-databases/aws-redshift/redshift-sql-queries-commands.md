# Redshift SQL Queries / Commands

<https://docs.aws.amazon.com/redshift/latest/dg/c_designing-queries-best-practices.html>

```sql
copy public.perfios_parsed
from 's3://stashfin-migration-data/bank_score_data/perfios/parsed_data/old_data/2017/01/Jan_2017'
iam_role 'arn:aws:iam::331916247734:role/'
COMPUPDATE off FORMAT AS PARQUET;

copy colender.incred_loan_mapping from 's3://rds-s3-redshift-bucket/ETL_Colender_Dashboard/INCRED/INCRED_Loan_Mapping.csv'
credentials 'aws_access_key_id=AKIAU2R6AAK3P4L7TV7P;aws_secret_access_key=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'
DELIMITER ',' IGNOREHEADER 1 FILLRECORD IGNOREBLANKLINES NULL 'nan'
ACCEPTINVCHARS EMPTYASNULL ESCAPE COMPUPDATE OFF

select version();

-- show sizes
 SELECT tbl, name, size_mb FROM
 (
  SELECT tbl, count(*) AS size_mb
  FROM stv_blocklist
  GROUP BY tbl
 )
 LEFT JOIN
 (select distinct id, name FROM stv_tbl_perm)
 ON id = tbl
 ORDER BY size_mb DESC
 LIMIT 10;

 SELECT   TRIM(pgdb.datname) AS Database,
         TRIM(a.name) AS Table,
         ((b.mbytes/part.total::decimal)*100)::decimal(5,2) AS pct_of_total,
         b.mbytes,
         b.unsorted_mbytes
FROM     stv_tbl_perm a
JOIN     pg_database AS pgdb
  ON     pgdb.oid = a.db_id
JOIN     ( SELECT   tbl,
                    SUM( DECODE(unsorted, 1, 1, 0)) AS unsorted_mbytes,
                    COUNT(*) AS mbytes
           FROM     stv_blocklist
           GROUP BY tbl ) AS b
       ON a.id = b.tbl
JOIN     ( SELECT SUM(capacity) AS total
           FROM   stv_partitions
           WHERE  part_begin = 0 ) AS part
      ON 1 = 1
WHERE    a.slice = 0
ORDER BY 4 desc, db_id, name;

-- show all users and Grant
select usesysid as user_id,
       usename as username,
       usecreatedb as db_create,
       usesuper as is_superuser,
       valuntil as password_expiration
from pg_user
order by user_id;

 CREATE USER intern2_datascience WITH password 's4XfxXE8D8FqXxNH';
 grant usage on schema data_analytics to developer; (important for 1st time)

 grant select on all tables in schema data_analytics to user_name;

 GRANT SELECT on SCHEMA_NAME.TABLE_NAME TO USER_NAME;
 GRANT SELECT on public.sentinel_customers TO bhupesh_goyal;
 GRANT SELECT on public.dsa_customers TO bhupesh_goyal;

 GRANT SELECT on sttash_website_live.equifax_api_request_inquiry TO outsource_consultant;

 grant select,update,delete on all tables in schema colender to developer;

 https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html

select
 id,
 docs,
 is_valid_json_array(docs),
 json_array_length(docs),
 json_extract_array_element_text(docs, 1) as json_text,
 is_valid_json(json_text),
 json_extract_path_text(json_text, 'doc_status'),
 json_extract_path_text(json_text, 'id')
from
 sttash_website_live.fos_scan_doc_comment
limit 1;
 https://docs.aws.amazon.com/redshift/latest/dg/json-functions.html

-- getting blocking queries
 SELECT waiting.relation::regclass AS waiting_table,
        blocking.relation::regclass AS blocking_table,
        waiting.pid AS waiting_pid,
        blocking.pid AS blocking_pid,
        waiting.mode AS waiting_mode,
        blocking.mode AS blocking_mode,
        waiting.GRANTED AS waiting_granted,
        blocking.GRANTED AS blocking_granted,
        waiting.TRANSACTION AS waiting_txn,
        blocking.TRANSACTION AS blocking_txn
 FROM pg_locks AS waiting
   LEFT JOIN pg_locks AS blocking
          ON ( (waiting. "database" = blocking. "database"
         AND (waiting.relation = blocking.relation
          OR blocking.relation IS NULL
          OR waiting.relation IS NULL))
          OR waiting.TRANSACTION = blocking.TRANSACTION)
 WHERE 1 = 1
 AND   NOT waiting.GRANTED
 AND   waiting.pid <> blocking.pid
 AND   blocking_granted = 't'
 ORDER BY blocking_granted,
          waiting_granted,
          blocking_pid,
          waiting_pid;

 select a.txn_owner, a.txn_db, a.xid, a.pid, a.txn_start, a.lock_mode, a.relation as table_id,nvl(trim(c."name"),d.relname) as tablename, a.granted,b.pid as blocking_pid ,datediff(s,a.txn_start,getdate())/86400||' days '||datediff(s,a.txn_start,getdate())%86400/3600||' hrs '||datediff(s,a.txn_start,getdate())%3600/60||' mins '||datediff(s,a.txn_start,getdate())%60||' secs' as txn_duration from svv_transactions a left join (select pid,relation,granted from pg_locks group by 1,2,3) b on a.relation=b.relation and a.granted='f' and b.granted='t' left join (select * from stv_tbl_perm where slice=0) c on a.relation=c.id left join pg_class d on a.relation=d.oid where a.relation is not null;

 SELECT * from stl_query where pid=4887;

SELECT pg_terminate_backend(4887);
```

<https://aws.amazon.com/premiumsupport/knowledge-center/redshift-high-cpu-usage>

While the queries are running, [retrieve locking information](https://aws.amazon.com/premiumsupport/knowledge-center/prevent-locks-blocking-queries-redshift/). To identify long-running sessions, use the following SQL query:

```sql
select *,datediff(s,txn_start,getdate())/86400||' days '||datediff(s,txn_start,getdate())%86400/3600||' hrs '||datediff(s,txn_start,getdate())%3600/60||' mins '||datediff(s,txn_start,getdate())%60||' secs'
from svv_transactions where lockable_object_type='transactionid' and pid<>pg_backend_pid() order by 3;
```

Then, run [PG_TERMINATE_BACKEND](https://docs.aws.amazon.com/redshift/latest/dg/PG_TERMINATE_BACKEND.html) to stop any long-running transactions. To prevent these sessions from remaining open, be sure that all transactions are closed. For example, make sure that all transactions starting with a [BEGIN](https://docs.aws.amazon.com/redshift/latest/dg/r_BEGIN.html) statement are also accompanied by anENDorCOMMITstatement.

Then, run the following SQL query to identify queries consuming high CPU:

```sql
select stq.userid, stq.query, trim(stq.label) as label, stq.xid, stq.pid, svq.service_class,
query_cpu_usage_percent as "cpu_%",starttime, endtime, datediff(s,starttime, endtime) as duration_s,
substring(stq.querytxt,1,100) as querytext from stl_query stq
join svl_query_metrics svq on stq.query=svq.query
where query_cpu_usage_percent is not null and starttime > sysdate - 1
order by query_cpu_usage_percent desc;
```

To analyze segment and slice-level execution steps for each query, run the following query:

```sql
select query, segment, step, label ,is_rrscan as rrS, is_diskbased as disk, is_delayed_scan as DelayS, min(start_time) as starttime, max(end_time) as endtime, datediff(ms, min(start_time), max(end_time)) as "elapsed_msecs", sum(rows) as row_s , sum(rows_pre_filter) as rows_pf, CASE WHEN sum(rows_pre_filter) = 0 THEN 100 ELSE sum(rows)::float/sum(rows_pre_filter)::float*100 END as pct_filter, SUM(workmem)/1024/1024 as "Memory(MB)", SUM(bytes)/1024/1024 as "MB_produced" from svl_query_report where query in (query_ids) group by query, segment, step, label , is_rrscan, is_diskbased , is_delayed_scan order by query, segment, step, label;
```

- Reduce query concurrency per queue to provide more memory to each query slot. This reduction helps queries that require more memory to run more efficiently.
- Enable [short query acceleration](https://docs.aws.amazon.com/redshift/latest/dg/wlm-short-query-acceleration.html)(SQA) to prioritize short-running queries over long-running queries.

## UNLOAD

<https://docs.aws.amazon.com/redshift/latest/dg/r_UNLOAD.html>

## Redshift Spectrum

```sql
SELECT * FROM SVV_EXTERNAL_DATABASES;

SELECT * FROM SVV_EXTERNAL_SCHEMAS;

SELECT * FROM SVV_EXTERNAL_TABLES;

SELECT * FROM SVV_EXTERNAL_PARTITIONS;

SELECT * FROM SVV_EXTERNAL_COLUMNS;
create external schema spectrum_schema from data catalog

database 'pinpointanalytics'

iam_role 'arn:aws:iam::331916247734:role/service-role/AmazonRedshift-CommandsAccessRole-20211208T161606';
drop schema spectrum_schema;
CREATE EXTERNAL TABLE spectrum_schema.test_loan_data (

id integer,

loan_status integer)

ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.OpenCSVSerde'

LOCATION 's3://data-team-reporting/test/';
SELECT * FROM spectrum_schema.test_loan_data limit 10;
```
