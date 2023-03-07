# Create Table

## CREATE TABLE

```sql
INT UNSIGNED
INT(11) ZEROFILL

CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);

CREATE TABLE celebs ( id INTEGER, name TEXT, age INTEGER );

CREATE TABLE cron_migrate_data (id int NOT NULL auto_increment,
                        table_name varchar(100) NOT NULL,
                        start_date datetime NOT NULL,
                                            end_date datetime NOT NULL,
                                            s3_file_path varchar(200) NOT NULL,
                                            PRIMARY KEY (id));

CREATE TABLE load_test (id int NOT NULL auto_increment,
                        data_dump varchar(1000),
                        dt_created datetime DEFAULT CURRENT_TIMESTAMP,
                        PRIMARY KEY (id));

CREATE TABLE load_test (id int NOT NULL auto_increment,
data_dump varchar(1000),
create_date     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
update_date    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id));

ALTER TABLE communication_exceptions MODIFY create_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE communication_exceptions MODIFY update_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE table_name ADD column datatype;
ALTER TABLE st_quickwallet_payment DROP COLUMN payment_notes;

ALTER TABLE table_name MODIFY column_name datatype;
ALTER TABLE `cs_not_eligible` modify
`update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

ALTER TABLE communication_exceptions MODIFY create_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE communication_exceptions MODIFY update_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
```

### How MySQL Does ALTER TABLE

1. Lock the table
2. Make a new, empty the table like the original
3. Modify the columns of the new empty table
4. Copy all rows of data from original to new table.. no matter how long it takes
5. Swap the old and new tables
6. Unlock the tables & drop the original

### Redshift

```sql
CREATE TABLE public.test (id bigint identity(1, 1),
created_at datetime default sysdate,
column_1 varchar,
                            PRIMARY KEY (id));

select * from public.test limit 10;

drop table public.test;

INSERT INTO public.test (column_1) Values ('Hello');

f"INSERT INTO public.test (column_1, created_at) Values ('Hello', {datetime.datetime.now()});"
INSERT INTO public.test (column_1, created_at) Values ('Hello', '2020-04-13 16:30:10.016741');
```

Let's break down the components of a statement:

1. CREATE TABLE is a clause. Clauses perform specific tasks in SQL. By convention, clauses are written in capital letters. Clauses can also be referred to as commands.

2. table_name refers to the name of the table that the command is applied to.

3. (column_1 data_type, column_2 data_type, column_3 data_type)is aparameter. A parameter is a list of columns, data types, or values that are passed to a clause as an argument. Here, the parameter is a list of column names and the associated data type.

## Constraints

Constraintsthat add information about how a column can be used are invoked after specifying the data type for a column. They can be used to tell the database to reject inserted data that does not adhere to a certain restriction. The statement below setsconstraintson thecelebstable.

```sql
CREATE TABLE celebs (
id INTEGER PRIMARY KEY,
name TEXT UNIQUE,
date_of_birth TEXT NOT NULL,
date_of_death TEXT DEFAULT 'Not Applicable'
);
```

- PRIMARY KEY columns can be used to uniquely identify the row. Attempts to insert a row with an identical value to a row already in the table will result in aconstraint violation which will not allow you to insert the new row.
- UNIQUE columns have a different value for every row. This is similar toPRIMARY KEYexcept a table can have many differentUNIQUEcolumns.
- NOT NULL columns must have a value. Attempts to insert a row without a value for aNOT NULL column will result in a constraint violation and the new row will not be inserted.
- DEFAULT columns take an additional argument that will be the assumed value for an inserted row if the new row does not specify a value for that column.

## Reference

```sql
CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
    (create_definition,...)
    [table_options]
    [partition_options]

CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
    [(create_definition,...)]
    [table_options]
    [partition_options]
    [IGNORE | REPLACE]
    [AS] query_expression

CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name
    { LIKE old_tbl_name | (LIKE old_tbl_name) }

create_definition:
    col_name column_definition
  | {INDEX|KEY} [index_name] [index_type] (key_part,...)
      [index_option] ...
  | {FULLTEXT|SPATIAL} [INDEX|KEY] [index_name] (key_part,...)
      [index_option] ...
  | [CONSTRAINT [symbol]] PRIMARY KEY
      [index_type] (key_part,...)
      [index_option] ...
  | [CONSTRAINT [symbol]] UNIQUE [INDEX|KEY]
      [index_name] [index_type] (key_part,...)
      [index_option] ...
  | [CONSTRAINT [symbol]] FOREIGN KEY
      [index_name] (col_name,...)
      reference_definition
  | check_constraint_definition

column_definition:
    data_type [NOT NULL | NULL] [DEFAULT {literal | (expr)} ]
      [AUTO_INCREMENT] [UNIQUE [KEY]] [[PRIMARY] KEY]
      [COMMENT 'string']
      [COLLATE collation_name]
      [COLUMN_FORMAT {FIXED|DYNAMIC|DEFAULT}]
      [STORAGE {DISK|MEMORY}]
      [reference_definition]
      [check_constraint_definition]
  | data_type
      [COLLATE collation_name]
      [GENERATED ALWAYS] AS (expr)
      [VIRTUAL | STORED] [NOT NULL | NULL]
      [UNIQUE [KEY]] [[PRIMARY] KEY]
      [COMMENT 'string']
      [reference_definition]
      [check_constraint_definition]

data_type:
    (see Chapter 11, Data Types)

key_part: {col_name [(length)] | (expr)} [ASC | DESC]

index_type:
    USING {BTREE | HASH}

index_option:
    KEY_BLOCK_SIZE [=] value
  | index_type
  | WITH PARSER parser_name
  | COMMENT 'string'
  | {VISIBLE | INVISIBLE}

check_constraint_definition:
    [CONSTRAINT [symbol]] CHECK (expr) [[NOT] ENFORCED]

reference_definition:
    REFERENCES tbl_name (key_part,...)
      [MATCH FULL | MATCH PARTIAL | MATCH SIMPLE]
      [ON DELETE reference_option]
      [ON UPDATE reference_option]

reference_option:
    RESTRICT | CASCADE | SET NULL | NO ACTION | SET DEFAULT

table_options:
    table_option [[,] table_option] ...

table_option:
    AUTO_INCREMENT [=] value
  | AVG_ROW_LENGTH [=] value
  | [DEFAULT] CHARACTER SET [=] charset_name
  | CHECKSUM [=] {0 | 1}
  | [DEFAULT] COLLATE [=] collation_name
  | COMMENT [=] 'string'
  | COMPRESSION [=] {'ZLIB'|'LZ4'|'NONE'}
  | CONNECTION [=] 'connect_string'
  | {DATA|INDEX} DIRECTORY [=] 'absolute path to directory'
  | DELAY_KEY_WRITE [=] {0 | 1}
  | ENCRYPTION [=] {'Y' | 'N'}
  | ENGINE [=] engine_name
  | INSERT_METHOD [=] { NO | FIRST | LAST }
  | KEY_BLOCK_SIZE [=] value
  | MAX_ROWS [=] value
  | MIN_ROWS [=] value
  | PACK_KEYS [=] {0 | 1 | DEFAULT}
  | PASSWORD [=] 'string'
  | ROW_FORMAT [=] {DEFAULT|DYNAMIC|FIXED|COMPRESSED|REDUNDANT|COMPACT}
  | STATS_AUTO_RECALC [=] {DEFAULT|0|1}
  | STATS_PERSISTENT [=] {DEFAULT|0|1}
  | STATS_SAMPLE_PAGES [=] value
  | TABLESPACE tablespace_name [STORAGE {DISK|MEMORY}]
  | UNION [=] (tbl_name[,tbl_name]...)

partition_options:
    PARTITION BY
        { [LINEAR] HASH(expr)
        | [LINEAR] KEY [ALGORITHM={1|2}] (column_list)
        | RANGE{(expr) | COLUMNS(column_list)}
        | LIST{(expr) | COLUMNS(column_list)} }
    [PARTITIONS num]
    [SUBPARTITION BY
        { [LINEAR] HASH(expr)
        | [LINEAR] KEY [ALGORITHM={1|2}] (column_list) }
      [SUBPARTITIONS num]
    ]
    [(partition_definition [, partition_definition] ...)]

partition_definition:
    PARTITION partition_name
        [VALUES
            {LESS THAN {(expr | value_list) | MAXVALUE}
            |
            IN (value_list)}]
        [[STORAGE] ENGINE [=] engine_name]
        [COMMENT [=] 'string' ]
        [DATA DIRECTORY [=] 'data_dir']
        [INDEX DIRECTORY [=] 'index_dir']
        [MAX_ROWS [=] max_number_of_rows]
        [MIN_ROWS [=] min_number_of_rows]
        [TABLESPACE [=] tablespace_name]
        [(subpartition_definition [, subpartition_definition] ...)]

subpartition_definition:
    SUBPARTITION logical_name
        [[STORAGE] ENGINE [=] engine_name]
        [COMMENT [=] 'string' ]
        [DATA DIRECTORY [=] 'data_dir']
        [INDEX DIRECTORY [=] 'index_dir']
        [MAX_ROWS [=] max_number_of_rows]
        [MIN_ROWS [=] min_number_of_rows]
        [TABLESPACE [=] tablespace_name]

query_expression:
    SELECT ...   (Some valid select or union statement)
```

<https://dev.mysql.com/doc/refman/8.0/en/create-table.html>

## Examples

```sql
CREATE TABLE `userDeviceSms` (
    `id` int NOT NULL AUTO_INCREMENT,
    `customer_id` int UNSIGNED DEFAULT NULL,
    `sender` varchar(225) DEFAULT NULL,
    `message` longtext,
    `message_type` varchar(15) DEFAULT NULL,
    `sms_time` datetime DEFAULT NULL,
    `create_date` datetime DEFAULT NULL,
    `device_id` varchar(80) DEFAULT NULL,
    `hash_key` varchar(200) DEFAULT NULL,
    `isMoved` tinyint(2) DEFAULT '0',
    `sub_sender` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `hash_key_UNIQUE` (`hash_key`),
    KEY `create_date` (`create_date`),
    KEY `sub_sender` (`sub_sender`),
    KEY `customer_id` (`customer_id`),
    KEY `userDeviceSms_sender_IDX` (`sender`) USING BTREE,
    KEY `isMoved` (`isMoved`),
    FULLTEXT KEY `message` (`message`)
) ENGINE=InnoDB AUTO_INCREMENT=449506629 DEFAULT CHARSET=latin1

CREATE TABLE `perfios_raw_data` (
    `id` int NOT NULL AUTO_INCREMENT,
    `customer_id` int(20) DEFAULT NULL,
    `loan_id` int DEFAULT NULL,
    `raw_data` mediumblob,
create_date     DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
update_date    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status` tinyint(1) DEFAULT NULL,
    `perfios_count` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `cust_id` (`customer_id`),
    KEY `loan_id` (`loan_id`),
    KEY `create_date` (`create_date`),
    KEY `status` (`status`)
);

CREATE TABLE `loc_imps_bank` (
    `id` int NOT NULL AUTO_INCREMENT,
    `customer_id` int NOT NULL,
    `loan_id` int NOT NULL,
    `final_disbursal_status` varchar(45) DEFAULT NULL,
    `bank_reference_number` varchar(45) DEFAULT NULL,
    `disbursal_error_status` varchar(255) DEFAULT NULL,
    `RESPONSE` varchar(45) DEFAULT NULL,
    `create_date` datetime DEFAULT CURRENT_TIMESTAMP,
    `update_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    KEY `loan_id` (`loan_id`),
    KEY `bank_reference_number` (`bank_reference_number`),
    KEY `customer_id` (`customer_id`)
);
```

## Data Types

### DATETIME

The DATETIME type is used for values that contain both date and time parts. MySQL retrieves and displays DATETIME values in 'YYYY-MM-DD HH:MM:SS' format. The supported range is '1000-01-01 00:00:00' to '9999-12-31 23:59:59'."

### TIMESTAMP

The TIMESTAMP data type is used for values that contain both date and time parts. TIMESTAMP has a range of '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC."

MySQL converts TIMESTAMP values from the current time zone to UTC for storage, and back from UTC to the current time zone for retrieval. (This does not occur for other types such as DATETIME.)".

### Similarities between DATETIME & TIMESTAMP

1. Both store the data in the "YYYY-MM-DD HH:MM: SS" format.
2. Both include a date as well as a time part.
3. Automatic initialization can happen for both.
4. Both change the data while updating the record with current data time as per the constraint.
5. Both can have fractional seconds part up to 6 digit microsecond precision.

### Difference between DATETIME & TIMESTAMP

1. Supported range for DATETIMEis '1000-01-01 00:00:00' to '9999-12-31 23:59:59' while for TIMESTAMP, it is '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC.

2. Prior to MySQL 5.6.4, TIMESTAMP requires 4 bytes (+3 bytes for fractional seconds) to store the data while DATETIME requires 8 bytes (+3 bytes for fractional seconds).

3. As of MySQL 5.6.4, DATETIME requires 5 bytes + 3 additional bytes for fractional seconds data storing.

4. In MySQL5+, TIMESTAMP value converts from the current time to UTC and vice-versa while DATETIME does not do any conversion.

5. TIMESTAMP differs with current time zone settings while DATETIME remains constant.

6. TIMESTAMP data can be indexed while the DATETIME data cannot.

7. Queries with DATETIME will not be cached but queries with TIMESTAMP will be cached.

<https://www.eversql.com/mysql-datetime-vs-timestamp-column-types-which-one-i-should-use>

<https://stackoverflow.com/questions/409286/should-i-use-the-datetime-or-timestamp-data-type-in-mysql>

<https://www.c-sharpcorner.com/article/difference-between-mysql-datetime-and-timestamp-datatypes>
