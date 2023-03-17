# Others

## Download file from DBFS in Databricks

```
Insert file path from screenshot (removing /dbfs/FileStore/) before ? in URL https://<databricks-instance>/files/?o=6909828974000273
 https://<databricks-instance>/files/folders/my-file.txt?o=6909828974000273
For ex. - https://abc.databricks.com/files/cdbi174/abc.csv?o=xxx
```

## DBIO File

Determining location of DBIO file fragments" is a message that may be displayed during the boot process of a computer running the NetApp Data ONTAP operating system. This message indicates that the system is currently in the process of identifying and locating the **DBIO (Data Block Input/Output)** file fragments on the storage system. This process is necessary in order to ensure that all data on the system is accessible and in a consistent state.

The time it takes to complete this process can depend on several factors, such as the number of disks in the system, the amount of data stored on the disks, and the performance of the disks themselves. However, there are a few things you can do to potentially speed up this process:

1. Increase the number of spare disks: Adding more spare disks to the system can help to speed up the process, as the system can use these spare disks to rebuild data faster.
2. Check for disk errors: Make sure that all the disks are functioning properly and there are no errors on them.
3. Check for firmware updates: Make sure that the firmware of the storage system and the disks is up to date[.](https://condolobby.com/condos-in-north-york/ "https://condolobby.com/condos-in-north-york/")
4. Check for performance bottlenecks: Check for any performance bottlenecks on the storage system, such as high CPU or memory usage, and address them if necessary.
5. Check for any other software issues: Ensure that the software is running smoothly and not having any issues.

Keep in mind that this process is an important step in ensuring data integrity, it should not be skipped or rushed. It's crucial to be patient and let the process finish.

[Determining location of DBIO file fragments. This operation can take some time.](https://community.databricks.com/s/question/0D58Y00009kctOISAY/what-does-determining-location-of-dbio-file-fragments-mean-and-how-do-i-speed-it-up)

## Merge Command

MERGE dramatically simplifies how a number of common data pipelines can be built; all the complicated multi-hop processes that inefficiently rewrote entire partitions can now be replaced by simple MERGE queries. This finer-grained update capability simplifies how you build your big data pipelines for various use cases ranging from change data capture to GDPR.

[Efficient Upserts into Data Lakes with Databricks Delta - The Databricks Blog](https://www.databricks.com/blog/2019/03/19/efficient-upserts-into-data-lakes-databricks-delta.html)

## CDC / Migration

[Migrating Transactional Data to a Delta Lake using AWS DMS - The Databricks Blog](https://www.databricks.com/blog/2019/07/15/migrating-transactional-data-to-a-delta-lake-using-aws-dms.html)

## Notebook-scoped Python libraries

```bash
%pip install matplotlib

%pip uninstall -y matplotlib

# Install a library from a version control system with %pip
%pip install git+https://github.com/databricks/databricks-cli
```

[Notebook-scoped Python libraries | Databricks on AWS](https://docs.databricks.com/libraries/notebooks-python-libraries.html)

## databricks-cli

```bash
pip install --upgrade databricks-cli

databricks configure

# secrets cli
## create a secret scope
databricks secrets create-scope --scope my-scope

## delete a secret
databricks secrets delete --scope my-scope --key my-key

## List the secret keys stored within a secret scope
databricks secrets list --scope my-scope --output JSON

## List all available secret scopes in the workspace
databricks secrets list-scopes --output JSON
```

[Databricks CLI setup & documentation | Databricks on AWS](https://docs.databricks.com/dev-tools/cli/index.html)

[Databricks SQL CLI | Databricks on AWS](https://docs.databricks.com/dev-tools/databricks-sql-cli.html)

[GitHub - databricks/databricks-cli: Command Line Interface for Databricks](https://github.com/databricks/databricks-cli)

## Links

[delta-lake](networking/others/delta-lake.md)

[Partitions | Databricks on AWS](https://docs.databricks.com/sql/language-manual/sql-ref-partition.html)

[DBeaver integration with Databricks | Databricks on AWS](https://docs.databricks.com/dev-tools/dbeaver.html)
