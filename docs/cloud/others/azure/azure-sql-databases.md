# Azure SQL Databases

## Deployment models

Azure SQL Database provides the three deployment options:

1. **Single** is a fully managed, isolated database
2. **Elastic Pool** is a collection of single databases with a shared set of resources
3. **Managed Instance** is a fully managed instance of the SQL Server

## SQL Database Server vs SQL Database

Database Server act as a central administrative point for **multiple single** or **pooled databases**, logins, firewall rules, auditing rules, threat detection policies, and failover groups.

## Pricing

 Azure SQL Database offers two purchasing models

- Database transaction unit (DU)-based purchasing model
- Virtual core (vCore)-based purchasing model (recommended)
- Serverless model (vCore)-based

![Azure SQL Database Pricing Model](../../../media/Screenshot%202025-05-25%20at%201.13.17%20PM.jpg)

## Backups

### Backup frequency

Azure SQL Database creates:

- [Full backups](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/full-database-backups-sql-server) every week.
- [Differential backups](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/differential-backups-sql-server) every 12 or 24 hours.
- [Transaction log backups](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/transaction-log-backups-sql-server) approximately every 10 minutes.

The exact frequency of transaction log backups is based on the compute size and the amount of database activity. When you restore a database, the service determines which full, differential, and transaction log backups need to be restored.

[Automatic, geo-redundant backups - Azure SQL Database \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-sql/database/automated-backups-overview)

## Connecting

Azure SQL Database

https://azure.microsoft.com/en-in/products/azure-sql/database/

https://azure.microsoft.com/en-us/products/data-studio

[What's Happening to Azure Data Studio? - Azure Data Studio \| Microsoft Learn](https://learn.microsoft.com/en-gb/azure-data-studio/whats-happening-azure-data-studio)

- Azure Data Studio officially retires on February 28, 2026
- [MSSQL Extension - VSCode](https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql)
- [Download SQL Server Management Studio (SSMS) \| Microsoft Learn](https://learn.microsoft.com/en-us/ssms/download-sql-server-management-studio-ssms)
- [.NET Interactive with SQL!\| .NET Notebooks in Visual Studio Code - .NET Blog](https://devblogs.microsoft.com/dotnet/net-interactive-with-sql-net-notebooks-in-visual-studio-code/?hide_banner=true)
- [Polyglot Notebooks](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode)
	- [interactive/docs/working-with-data.md at main · dotnet/interactive · GitHub](https://github.com/dotnet/interactive/blob/main/docs/working-with-data.md)
	- `#r "nuget: Microsoft.DotNet.Interactive.SqlServer, *-*"`

## Links

- [Azure SQL Database Tutorial \| Relational databases in Azure - YouTube](https://www.youtube.com/watch?v=BgvEOkcR0Wk&ab_channel=AdamMarczak-AzureforEveryone)
- [How to use Azure SQL Databases \| Azure Fundamentals - YouTube](https://www.youtube.com/watch?v=9ur0OpMADuM&ab_channel=AlexTheAnalyst)
