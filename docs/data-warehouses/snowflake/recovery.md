# Recovery

## Time Travel

- Time Travel in Snowflake allows you to access historical versions of your data at specific points in time. It provides the ability to query and recover data as it existed in the past.
- By default, Snowflake retains historical data for 1 day (24 hours). During this time, you can issue queries using the `AS OF` clause to retrieve data at a specific timestamp or time interval.
- Time Travel is useful for scenarios such as auditing, debugging, and recovering from user errors. It allows you to analyze how data has changed over time and provides a safety net for accidental changes.

Using Time Travel, you can perform the following actions within a defined period of time:

- Query data in the past that has since been updated or deleted.
- Create clones of entire tables, schemas, and databases at or before specific points in the past.
- Restore tables, schemas, and databases that have been dropped.

### Time period

- For transient databases, schemas, and tables, the retention period can be set to 0 (or unset back to the default of 1 day). The same is also true for temporary tables.
- For permanent databases, schemas, and tables, the retention period can be set to any value from 0 up to 90 days.

### Time Travel SQL Extensions

To support Time Travel, the following SQL extensions have been implemented:

- [AT | BEFORE](https://docs.snowflake.com/en/sql-reference/constructs/at-before) clause which can be specified in SELECT statements and CREATE … CLONE commands (immediately after the object name). The clause uses one of the following parameters to pinpoint the exact historical data you wish to access:
    - TIMESTAMP
    - OFFSET (time difference in seconds from the present time)
    - STATEMENT (identifier for statement, e.g. query ID)
- UNDROP command for tables, schemas, and databases.

```sql
-- Query data as of a specific timestamp

SELECT * FROM my_table AT(TIMESTAMP => 'Fri, 01 May 2015 16:20:00 -0700'::timestamp_tz);
```

[Understanding & Using Time Travel | Snowflake Documentation](https://docs.snowflake.com/en/user-guide/data-time-travel)

## Fail-Safe

- Fail-Safe, also known as Fail-Safe Storage, is a feature in Snowflake designed to protect against data loss caused by accidental or malicious actions, disasters, or regional outages.
- Fail-Safe provides continuous, asynchronous replication of data to a separate, geographically distant region. This ensures that a copy of your data is maintained in a different location, reducing the risk of data loss due to regional incidents.
- In the event of a failure or disaster impacting the primary region, you can use Fail-Safe to recover your data up to a specified duration prior to the failure.

Example of configuring Fail-Safe retention:

```sql
-- Configure Fail-Safe retention

ALTER ACCOUNT SET FAILSAFE_CLAUSE = 'FOR 7 DAYS';
```

In this example, data can be recovered up to 7 days prior to a failure.

### Attention

Fail-safe is a data recovery service that is provided on a best effort basis and is intended only for use when all other recovery options have been attempted.

Fail-safe is not provided as a means for accessing historical data after the Time Travel retention period has ended. It is for use only by Snowflake to recover data that may have been lost or damaged due to extreme operational failures.

Data recovery through Fail-safe may take from several hours to several days to complete.

[Understanding and viewing Fail-safe | Snowflake Documentation](https://docs.snowflake.com/en/user-guide/data-failsafe)

It's important to note that while Time Travel and Fail-Safe provide valuable capabilities for data protection and recovery, they also have storage cost implications. Retaining historical data and maintaining a Fail-Safe copy both consume storage resources.
