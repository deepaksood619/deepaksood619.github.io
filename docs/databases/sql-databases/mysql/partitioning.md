# Partitioning

- [26 Partitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning.html)
- [26.1 Overview of Partitioning in MySQL](https://dev.mysql.com/doc/refman/8.4/en/partitioning-overview.html)
- [26.2 Partitioning Types](https://dev.mysql.com/doc/refman/8.4/en/partitioning-types.html)
    - [26.2.1 RANGE Partitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-range.html)
    - [26.2.2 LIST Partitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-list.html)
    - [26.2.3 COLUMNS Partitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-columns.html)
    - [26.2.4 HASH Partitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-hash.html)
    - [26.2.5 KEY Partitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-key.html)
    - [26.2.6 Subpartitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-subpartitions.html)
    - [26.2.7 How MySQL Partitioning Handles NULL](https://dev.mysql.com/doc/refman/8.4/en/partitioning-handling-nulls.html)
- [26.3 Partition Management](https://dev.mysql.com/doc/refman/8.4/en/partitioning-management.html)
- [26.4 Partition Pruning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-pruning.html)
- [26.5 Partition Selection](https://dev.mysql.com/doc/refman/8.4/en/partitioning-selection.html)
- [26.6 Restrictions and Limitations on Partitioning](https://dev.mysql.com/doc/refman/8.4/en/partitioning-limitations.html)

[How to automatically maintain a MySQL Table’s Partitions? | by Sanyam Aggarwal | Medium](https://sanyamaggarwal.medium.com/how-to-automatically-maintain-a-mysql-tables-partitions-with-mysqlpartitionkeeper-f9923f973135)

[GitHub - i-sanyam/MySQLPartitionKeeper: Automatically creates new monthly partition and removes oldest partition](https://github.com/i-sanyam/MySQLPartitionKeeper/)

[26.6.2 Partitioning Limitations Relating to Storage Engines](https://dev.mysql.com/doc/refman/8.4/en/partitioning-limitations-storage-engines.html)

- InnoDB foreign keys and MySQL partitioning are not compatible. Partitioned InnoDB tables cannot have foreign key references, nor can they have columns referenced by foreign keys. InnoDB tables which have or which are referenced by foreign keys cannot be partitioned.
