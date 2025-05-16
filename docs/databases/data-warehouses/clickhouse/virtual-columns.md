# Virtual Columns

A virtual column is an integral table engine attribute that is defined in the engine source code.

You shouldn't specify virtual columns in the `CREATE TABLE` query, and you can't see them in `SHOW CREATE TABLE` and `DESCRIBE TABLE` query results. Virtual columns are also read-only, so you can't insert data into virtual columns.

To select data from a virtual column, you must specify its name in the `SELECT` query. `SELECT *` does not return values from virtual columns.

If you create a table with a column that has the same name as one of the table virtual columns, the virtual column becomes inaccessible. We do not recommend doing this. To help avoid conflicts, virtual column names are usually prefixed with an underscore.

- `_part` — Name of a part.
- `_part_index` — Sequential index of the part in the query result.
- `_part_starting_offset` — Cumulative starting row of the part in the query result.
- `_part_offset` — Number of row in the part.
- `_partition_id` — Name of a partition.
- `_part_uuid` — Unique part identifier (if enabled MergeTree setting `assign_part_uuids`).
- `_part_data_version` — Data version of part (either min block number or mutation version).
- `_partition_value` — Values (a tuple) of a `partition by` expression.
- `_sample_factor` — Sample factor (from the query).
- `_block_number` — Block number of the row, it is persisted on merges when `allow_experimental_block_number_column` is set to true.

[Table Engines \| ClickHouse Docs](https://clickhouse.com/docs/engines/table-engines#table_engines-virtual_columns)

[MergeTree \| ClickHouse Docs](https://clickhouse.com/docs/engines/table-engines/mergetree-family/mergetree#virtual-columns)
