# Server SQL Modes

The MySQL server can operate in different SQL modes, and can apply these modes differently for different clients, depending on the value of the [`sql_mode`](https://dev.mysql.com/doc/refman/8.4/en/server-system-variables.html#sysvar_sql_mode) system variable. DBAs can set the global SQL mode to match site server operating requirements, and each application can set its session SQL mode to its own requirements.

```sql
SET GLOBAL sql_mode = 'modes';
SET SESSION sql_mode = 'modes';

SELECT @@GLOBAL.sql_mode;
SELECT @@SESSION.sql_mode;
```

### SQL mode and user-defined partitioning

Changing the server SQL mode after creating and inserting data into partitioned tables can cause major changes in the behavior of such tables, and could lead to loss or corruption of data. It is strongly recommended that you never change the SQL mode once you have created tables employing user-defined partitioning.

When replicating partitioned tables, differing SQL modes on the source and replica can also lead to problems. For best results, you should always use the same server SQL mode on the source and replica.

### Modes

- [`ANSI`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_ansi)

    This mode changes syntax and behavior to conform more closely to standard SQL. It is one of the special [combination modes](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sql-mode-combo "Combination SQL Modes") listed at the end of this section.

- [`STRICT_TRANS_TABLES`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_strict_trans_tables)

    If a value could not be inserted as given into a transactional table, abort the statement. For a nontransactional table, abort the statement if the value occurs in a single-row statement or the first row of a multiple-row statement. More details are given later in this section.

- [`TRADITIONAL`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_traditional)

    Make MySQL behave like a "traditional" SQL database system. A simple description of this mode is "give an error instead of a warning" when inserting an incorrect value into a column. It is one of the special [combination modes](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sql-mode-combo "Combination SQL Modes") listed at the end of this section.

- [`ALLOW_INVALID_DATES`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_allow_invalid_dates)
- [`ANSI_QUOTES`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_ansi_quotes)
- [`ERROR_FOR_DIVISION_BY_ZERO`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_error_for_division_by_zero)
- [`HIGH_NOT_PRECEDENCE`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_high_not_precedence)
- [`IGNORE_SPACE`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_ignore_space)
- [`NO_AUTO_VALUE_ON_ZERO`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_no_auto_value_on_zero)
- [`NO_BACKSLASH_ESCAPES`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_no_backslash_escapes)
- [`NO_DIR_IN_CREATE`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_no_dir_in_create)
- [`NO_ENGINE_SUBSTITUTION`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_no_engine_substitution)
- [`NO_UNSIGNED_SUBTRACTION`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_no_unsigned_subtraction)
- [`NO_ZERO_DATE`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_no_zero_date)
- [`NO_ZERO_IN_DATE`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_no_zero_in_date)
- [`ONLY_FULL_GROUP_BY`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_only_full_group_by)
- [`PAD_CHAR_TO_FULL_LENGTH`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_pad_char_to_full_length)
- [`PIPES_AS_CONCAT`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_pipes_as_concat)
- [`REAL_AS_FLOAT`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_real_as_float)
- [`STRICT_ALL_TABLES`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_strict_all_tables)
- [`STRICT_TRANS_TABLES`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_strict_trans_tables)
- [`TIME_TRUNCATE_FRACTIONAL`](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_time_truncate_fractional)

[7.1.11 Server SQL Modes](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html)
