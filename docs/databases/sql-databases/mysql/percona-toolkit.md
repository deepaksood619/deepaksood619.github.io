# Percona Toolkit

- Verify MySQL replication integrity by checking source and replica data consistency
- Efficiently archive rows
- Find duplicate indexes
- Summarize MySQL and MongoDB servers
- Analyze MySQL queries from logs and tcpdump
- Analyze MongoDB query profiler
- Collect vital system information when problems occur

```bash
sudo apt-get install percona-toolkit

brew install percona-toolkit
```

- [pt-align](https://www.percona.com/doc/percona-toolkit/LATEST/pt-align.html)
- [pt-archiver](https://www.percona.com/doc/percona-toolkit/LATEST/pt-archiver.html)
- [pt-config-diff](https://www.percona.com/doc/percona-toolkit/LATEST/pt-config-diff.html)
- [pt-diskstats](https://www.percona.com/doc/percona-toolkit/LATEST/pt-diskstats.html)
- [pt-duplicate-key-checker](https://www.percona.com/doc/percona-toolkit/LATEST/pt-duplicate-key-checker.html)
- [pt-fifo-split](https://www.percona.com/doc/percona-toolkit/LATEST/pt-fifo-split.html)
- [pt-find](https://www.percona.com/doc/percona-toolkit/LATEST/pt-find.html)
- [pt-fingerprint](https://www.percona.com/doc/percona-toolkit/LATEST/pt-fingerprint.html)
- [pt-fk-error-logger](https://www.percona.com/doc/percona-toolkit/LATEST/pt-fk-error-logger.html)
- [pt-heartbeat](https://www.percona.com/doc/percona-toolkit/LATEST/pt-heartbeat.html)
- [**pt-index-usage**](https://www.percona.com/doc/percona-toolkit/LATEST/pt-index-usage.html)

Read queries from a log and analyze how they use indexes.

- [pt-align](https://www.percona.com/doc/percona-toolkit/LATEST/pt-align.html)
- [pt-archiver](https://www.percona.com/doc/percona-toolkit/LATEST/pt-archiver.html)
- [pt-config-diff](https://www.percona.com/doc/percona-toolkit/LATEST/pt-config-diff.html)
- [**pt-deadlock-logger**](https://www.percona.com/doc/percona-toolkit/LATEST/pt-deadlock-logger.html)

pt-deadlock-loggerprints information about MySQL deadlocks by polling and parsingSHOWENGINEINNODBSTATUS. When a new deadlock occurs, it's printed toSTDOUTand, if specified, saved to [--dest](https://www.percona.com/doc/percona-toolkit/LATEST/pt-deadlock-logger.html#cmdoption-pt-deadlock-logger-dest)

`pt-deadlock-logger -host sttash-main-db-instance-new-cluster.cluster-ro-c1z93jsyca9u.ap-south-1.rds.amazonaws.com --user lms-website --password Rf9zdHwB9E3GHWKq2yZM- [pt-diskstats](https://www.percona.com/doc/percona-toolkit/LATEST/pt-diskstats.html)`

- [pt-duplicate-key-checker](https://www.percona.com/doc/percona-toolkit/LATEST/pt-duplicate-key-checker.html)

pt-duplicate-key-checker -host sttash-main-db-instance-new-cluster.cluster-ro-c1z93jsyca9u.ap-south-1.rds.amazonaws.com --user lms-website --password Rf9zdHwB9E3GHWKq2yZM

- [pt-fifo-split](https://www.percona.com/doc/percona-toolkit/LATEST/pt-fifo-split.html)
- [pt-find](https://www.percona.com/doc/percona-toolkit/LATEST/pt-find.html)
- [pt-fingerprint](https://www.percona.com/doc/percona-toolkit/LATEST/pt-fingerprint.html)
- [pt-fk-error-logger](https://www.percona.com/doc/percona-toolkit/LATEST/pt-fk-error-logger.html)
- [pt-heartbeat](https://www.percona.com/doc/percona-toolkit/LATEST/pt-heartbeat.html)
- [pt-index-usage](https://www.percona.com/doc/percona-toolkit/LATEST/pt-index-usage.html)
- [pt-ioprofile](https://www.percona.com/doc/percona-toolkit/LATEST/pt-ioprofile.html)
- [pt-kill](https://www.percona.com/doc/percona-toolkit/LATEST/pt-kill.html)
- [pt-mext](https://www.percona.com/doc/percona-toolkit/LATEST/pt-mext.html)
- [pt-mongodb-query-digest](https://www.percona.com/doc/percona-toolkit/LATEST/pt-mongodb-query-digest.html)
- [pt-mongodb-summary](https://www.percona.com/doc/percona-toolkit/LATEST/pt-mongodb-summary.html)
- [pt-mysql-summary](https://www.percona.com/doc/percona-toolkit/LATEST/pt-mysql-summary.html)

```bash
pt-mysql-summary --host localhost --user root --ask-pass > mysql-summary.txt

pt-mysql-summary --host sttash-main-db-instance-new-cluster.cluster-ro-c1z93jsyca9u.ap-south-1.rds.amazonaws.com --user lms-website --password Rf9zdHwB9E3GHWKq2yZM > mysql-summary.txt- [pt-online-schema-change](https://www.percona.com/doc/percona-toolkit/LATEST/pt-online-schema-change.html)

pt-online-schema-change --host dailydb.snapshot.example.com --user user_abc --password xyzabc123 --alter='ENGINE=InnoDB' D=db_name, t=table_name --preserve-triggers --dry-run
```

Works by creating an empty copy of the table to alter, modifying it as desired, and then copying rows from the original table into the new table. When the copy is complete, it moves away the original table and replaces it with the new one. By default, it also drops the original table.

https://dev.mysql.com/doc/refman/5.7/en/innodb-online-ddl-operations.html

https://www.percona.com/doc/percona-toolkit/3.0/pt-online-schema-change.html- [pt-pmp](https://www.percona.com/doc/percona-toolkit/LATEST/pt-pmp.html)

[Percona pt-online-schema-change Performance | by Gauraang Khurana | Medium](https://medium.com/@gauraangkhurana/percona-pt-online-schema-change-performance-1def5866b43)

- [pt-query-digest](https://www.percona.com/doc/percona-toolkit/LATEST/pt-query-digest.html) - Analyze MySQL queries from logs, processlist, and tcpdump.
- [pt-secure-collect](https://www.percona.com/doc/percona-toolkit/LATEST/pt-secure-collect.html)
- [pt-show-grants](https://www.percona.com/doc/percona-toolkit/LATEST/pt-show-grants.html)
- [pt-sift](https://www.percona.com/doc/percona-toolkit/LATEST/pt-sift.html)
- [pt-slave-delay](https://www.percona.com/doc/percona-toolkit/LATEST/pt-slave-delay.html)
- [pt-slave-find](https://www.percona.com/doc/percona-toolkit/LATEST/pt-slave-find.html)
- [pt-slave-restart](https://www.percona.com/doc/percona-toolkit/LATEST/pt-slave-restart.html)
- [pt-stalk](https://www.percona.com/doc/percona-toolkit/LATEST/pt-stalk.html)
- [pt-summary](https://www.percona.com/doc/percona-toolkit/LATEST/pt-summary.html)
- [pt-table-checksum](https://www.percona.com/doc/percona-toolkit/LATEST/pt-table-checksum.html)
- [pt-table-sync](https://www.percona.com/doc/percona-toolkit/LATEST/pt-table-sync.html)
- [pt-table-usage](https://www.percona.com/doc/percona-toolkit/LATEST/pt-table-usage.html)
- [pt-upgrade](https://www.percona.com/doc/percona-toolkit/LATEST/pt-upgrade.html)
- [pt-variable-advisor](https://www.percona.com/doc/percona-toolkit/LATEST/pt-variable-advisor.html)
- [pt-visual-explain](https://www.percona.com/doc/percona-toolkit/LATEST/pt-visual-explain.html)
- [pt-slave-find](https://www.percona.com/doc/percona-toolkit/LATEST/pt-slave-find.html)
- [pt-slave-restart](https://www.percona.com/doc/percona-toolkit/LATEST/pt-slave-restart.html)
- [pt-stalk](https://www.percona.com/doc/percona-toolkit/LATEST/pt-stalk.html)
- [pt-summary](https://www.percona.com/doc/percona-toolkit/LATEST/pt-summary.html)
- [pt-table-checksum](https://www.percona.com/doc/percona-toolkit/LATEST/pt-table-checksum.html)
- [pt-table-sync](https://www.percona.com/doc/percona-toolkit/LATEST/pt-table-sync.html)
- [pt-table-usage](https://www.percona.com/doc/percona-toolkit/LATEST/pt-table-usage.html)
- [pt-upgrade](https://www.percona.com/doc/percona-toolkit/LATEST/pt-upgrade.html)
- [pt-variable-advisor](https://www.percona.com/doc/percona-toolkit/LATEST/pt-variable-advisor.html)
- [pt-visual-explain](https://www.percona.com/doc/percona-toolkit/LATEST/pt-visual-explain.html)

https://www.percona.com/software/database-tools/percona-toolkit
