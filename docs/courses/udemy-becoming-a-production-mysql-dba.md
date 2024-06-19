# Udemy - Becoming a Production MySQL DBA

[Becoming a Production MySQL DBA](https://www.udemy.com/course/becoming-a-production-mysql-dba/)

## What you'll learn

- You will learn how to install latest version of MySQL Server including MariaDB and Percona Server for MySQL.
- You will learn how to secure the installation of MySQL and how to start/stop/restart MySQL service using systemd.
- You will learn how to customize MySQL server configuration, how to store InnoDB log files, binary log files, MySQL server log files in separate locations.
- You will learn how to connect to MySQL locally as well as remotely and how to perform database administration.
- You will learn how to perform minor and major MySQL upgrades, how to install new components and remove plugins.
- You will learn how to setup GTID-based master-slave replication, and how to setup filtered replication.
- You will learn how to take logical as well as physical backup, how to restore MySQL backups, how to setup a new slave from backup.
- You will learn how to troubleshoot MySQL server issues.
- You will learn how to run MySQL in Docker

## Course content

### Introduction

- Course Introduction
- Why MySQL?
- DBA vs Developer Course
- Meet Bob, The Future DBA

### MySQL Server Installation

- Preparing VM for MySQL Server Installation
- Installing MySQL Server Community Edition
- Installing MariaDB Database Server
- Installing Percona Server for MySQL Server
- Removing MySQL
- Installing Specific Version of MySQL
- Demo - Installing Specific Version of MySQL
- Manually Download RPMs and Locally Install
- Demo - Manually Download RPMs and Locally Install
- Performing MySQL Secure Installation
- Demo - Performing MySQL Secure Installation
- Installing MySQL on Ubuntu
- Linux Utilities
- Demo - Linux Utilities
- Section Recap - What Bob has learned so for
- Quiz on MySQL Server Installation

### Exploring MySQL Server

- MySQL Architecture
- MySQL Installed File Locations
- Demo - MySQL Installed File Locations
- MySQL Executable Programs
- MySQL Service under SystemD
- MySQL Shell Commands
- Demo - MySQL Shell Commands
- MySQL Socket File
- Demo - MySQL Socket File
- MySQL GLOBAL Variables
- Demo - Global Variables
- MySQL SESSION Variables
- Demo - MySQL SESSION Variables
- Getting System Variables Help
- MySQL SHOW Command
- Demo - MySQL SHOW Command
- MySQL System Databases
- Demo - MySQL System Databases
- MySQL Local vs Remote Connections
- Demo - MySQL Local vs Remote Connections
- MySQL Shell
- Section Recap - What Bob has learned...
- Quiz on Exploring MySQL Server

### Basic MySQL Database Administration

- Storing MySQL Authentication Credentials
- Assignment - Login to MySQL Without Credentials
- mysqladmin - MySQL Administration Program
- Assignment - Perform DBA tasks with mysqladmin
- Executing SQL Files
- Assignment - Execute employees.sql SQL File
- Executing SQL Commands From Terminal
- Importing data with mysqlimport
- Assignment - Import staff.txt file
- Maintaining Integrity with mysqlcheck
- Assignment - Perform mysqlcheck on staff table
- Displaying useful Information with mysqlshow
- Assignment - Get Report on employees database and its tables
- Time Zone Tables
- Assignment - Load Time Zone Tables into MySQL
- MySQL Example Databases
- Assignment - Download World Database
- Listing Binary Logs Events with mysqlbinlog
- Assignment - Investigate When Database was dropped
- Section Recap - What Bob has learned...
- Quiz on Basic MySQL Server Administration

### MySQL Storage Engines

- Storage Engines
- Exploring Storage Engines
- FEDERATED Storage Engine
- MEMORY Storage Engine
- Assignment - MEMORY Storage Engine
- BLACKHOLE Storage Engine
- Assignment - BLACKHOLE Storage Engine
- CSV Storage Engine
- Assignment - CSV Storage Engine
- MyISAM Storage Engine
- Assignment - MyISAM Storage Engine
- ARCHIVE Storage Engine
- Assignment - ARCHIVE Storage Engine
- InnoDB Storage Engine
- Assignment - InnoDB Storage Engine
- Checking Storage Engine Status
- Switching Storage Engine
- Installing New Storage Engine
- Disabling Storage Engine
- Section Recap - What Bob has learned...
- Quiz on MySQL Storage Engines

### MySQL User Administration

- DBA Account
- MySQL Permissions
- WITH GRANT OPTION
- Assignment - Create DBA Account
- Connecting to MySQL
- Exploring MySQL Workbench
- Creating Regular MySQL Users
- Grant Permissions
- Lock/Unlock MySQL Account
- mysql_native_password & caching_sha2_password auth plugins
- MySQL Roles
- Assignment - MySQL Roles
- Section Recap - What Bob has learned...
- Quiz on MySQL User Administration

### MySQL Server Configuration

- MySQL Default Configuration File
- Assignment - Locate Default Option File
- MySQL Option/Configuration File Syntax
- Assignment - Re-Write Default Option File
- Variable or Option in Option File?
- Changing Default Option Files Location
- Assignment - Change Default Location of Option File
- STRACE & LSOF With MySQL
- Demo - STRACE & LSOF
- Option File Inclusions
- Assignment - Option File Inclusions
- DATA_DIR MySQL Data Directory
- Assignment - Move DATA DIRECTORY
- Binary Log Files
- Purging Binary Log Files
- Assignment - Disable Binary Logging
- Assignment - Enable Binary Logging
- Binary Logs Retention
- MySQL Error Log File
- Assignment - Change MySQL Error Log File Location
- Adjusting Timestamp of MySQL Error Log File
- MySQL TEMP Directory
- Assignment - Change TMPDIR Location
- Removing Double-Entry for MySQL Error Log File
- Section Recap - What Bob has learned...
- Quiz on MySQL Server Configuration

### InnoDB Storage Engine Configuration

- InnoDB Storage Engine
- InnoDB Architecture
- InnoDB Buffer Pool
- Demo - InnoDB Buffer Pool
- InnoDB Log Buffer
- Assignment - InnoDB Log Buffer
- InnoDB Flush Method
- O_DIRECT OR O_DIRECT_NO_FSYNC
- Assignment - Change InnoDB Flush Method
- Doublewrite Buffer
- Assignment - Doublewrite Buffer
- Flushing Logs at Transaction Commit
- Assignment - Setting value of innodb_flush_log_at_trx_commit
- InnoDB Redo Log Files
- Assignment 1 - InnoDB Redo Log Files
- Assignment 2 - InnoDB Redo Log Files
- Assignment 3 - InnoDB Redo Log Files
- System Tablespace
- Assignment - System Tablespace
- Undo Tablespaces
- Demo - Undo Tablespaces
- Temporary Tablespaces
- General Tablespaces
- File-Per-Table Tablespaces
- Dedicated MySQL Server
- Turning Dedicated Server ON
- Overriding Dedicated Server Settings
- Section Recap - What Bob has learned...
- Quiz on Storage Engine Configuration

### MySQL Backup & Restore

- MySQL Backups
- Physical/Cold Backup
- Assignment - Perform Physical/Cold Backup
- Assignment - Restore From Physical/Cold Backup
- Files needed for Cold Backup
- Logical Backups
- MySQLDUMP Backup Program
- Assignment - Take Backup with MySQLDUMP
- Restoring from MySQLDUMP
- MySQLPUMP Backup Program
- Demo 1 - MySQLPUMP
- Demo 2 - MySQLPUMP
- Assignment - Backing Up MySQL Accounts
- Assignment - Restore MySQL Account
- Compressing MySQL Backups
- Assignment - Compress MySQL Backup
- Assignment - Restore MySQL Compressed Backup
- Creating Consistent Data Dump
- CREATE TABLE LIKE SQL Statement
- MySQL Hot Backup
- MySQL Hot Backup Tools
- XtraBackup Hot Backup Tool
- Assignment - Download & Install XtraBackup
- Assignment - Backup with XtraBackup
- Assignment - XtraBackup Backup Files
- Preparing Hot Backup Restore
- Assignment - Restore From Hot Backup
- Section Recap - What Bob has learned...
- Quiz on MySQL Backup & Restore

### MySQL Server Replication

- Replication Concepts
- Replication Methods
- Replication Formats
- Replication Formats Comparison
- General Replication Setup Requirements
- Primary Server
- Assignment - Configure Primary Server
- Cleanup Options from Option File
- Demo 1 - Install MySQL On Replica Server
- Demo 2- Install MySQL On Replica Server
- Start MySQL on Replica
- Hot Backup on Primary for Replication
- Copy Hot Backup from Primary to Replica
- Restore Hot Backup on Replica
- Replica Server Configuration
- Assignment - Configure Replica
- Configure Binary Log Position Based Replication
- Assignment - Configure Binary Log Replication
- Set Report Host on Replica
- SHOW REPLICA STATUS
- Demo - Replica IO_THREAD
- Demo - Replica SQL_THREAD
- Demo - Ignore Database
- Demo - Ignore Table
- Cleanup Traditional Replication
- Setting up GTID Replication
- GTID Replication Requirements
- Prepare GTID Replication
- Assignment - Setup GTID Replication
- Start Replica Until Command
- Demo - Start Replica with Until
- Primary Replica Failover
- Prepare Primary Replica Failover
- Assignment - Failover Primary to Replica
- Assignment - Configure Old Primary to Replica
- Section Recap - What Bob has learned...
- Quiz on MySQL Server Replication

### Upgrading MySQL Server

- Types of MySQL Version Upgrades
- Preparing for Minor Version Upgrade
- Assignment - Perform Minor Version Upgrade
- Demo - Primary & Replica Version Compatibility
- Installing MySQL 5.7
- Download World Example Database
- mysqlcheck - Pre-Upgrade Check
- mysqlsh script - Pre-Upgrade Check
- Demo - Perform MySQL Major Version Upgrade
- Section Recap - What Bob has learned...
- Quiz on Upgrading MySQL Server

### Docker and MySQL

- Introduction
- Install Docker
- Pull & Inspect MySQL Docker Image
- Run MySQL as Container
- MySQL Container Logs
- MySQL Container Host
- Removing MySQL Container
- Exposing Port From Container to Host
- Create DBA User Bob
- Remotely Login to MySQL Container
- Demo - Data Loss at Container Removal
- Bind Volume For Data Persistence
- Demo - Persistant Volume
- Converting MySQL Instance to Container
- Installing MySQL Server on Docker Host
- Demo - Attach Container to Instance
- Section Recap - What Bob has learned...

### DBA Tips & Tricks Club

- Welcome to the DBA Club
- DBA Tip - Customizing MySQL Prompt
- Demo - Customizing MySQL Prompt
- Demo - Customization via local file
- DBA Tip - Validating MySQL Configurations File

### Cloud Database Administration

- Cloud Database Lab Setup Introduction
- Cloud Project Highlights
- Create Droplets on DigitalOcean
- Disable SELINUX & Reboot Droplets
- Install MySQL Server
- Secure Installation & Admin Users
- Restore Backup Primary to Replica
- Setup GTID Based Replication
- Add Report-Host for Replica
- Setup Cloud Replica on AWS
- Install MySQL on Cloud Replica
- Online Data Duplication Requirements
- Installing Requirement Tools
- Setup Cloud Replica

### Database Scripting

- What we will cover?
- Introduction to Shell Scripting
- Shell Script Executable Permissions
- Bash Script Shebang
- Mixing Text & Shell Commands
- Shell Script Arguments
- Adding Comments to Shell Script
- Create Your First Shell Script
- Using Shell Variables
- Demo - Shell Variables
- Output of Command as Variable
- For Loop in Bash Scripting
- Assignment - Create Shell Script to Create MySQL Users
- Solution - Shell Script to Create MySQL Accounts
- Assignment - Create Shell Script to Download Example Database
- Solution - Shell Script to Download Example Database
- Assignment - Shell Script to Create Table in Specific Databases
- Solution - Shell Script to Create Table in Specific Databases
- Introduction to Percona Toolkit
- Installing Percona Toolkit
- Getting MySQL Report from pt-mysql-summary
- Getting System Summary Report with pt-summary
- MySQL Slow Query Log
- Enabling Slow Query Log
- mysqldumpslow utility
- pt-query-digest utility
