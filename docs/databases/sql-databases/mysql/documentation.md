# Documentation

1.3 Overview of the MySQL Database Management System

1.3.1 What is MySQL?

1.3.2 The Main Features of MySQL

1.3.3 History of MySQL

1.4 What Is New in MySQL 5.7

1.5 Server and Status Variables and Options Added, Deprecated, or Removed in MySQL

5.7

1.6 MySQL Information Sources

1.6.1 MySQL Websites

1.6.2 MySQL Community Support at the MySQL Forums

1.6.3 MySQL Enterprise

1.7 How to Report Bugs or Problems

1.8 MySQL Standards Compliance

1.8.1 MySQL Extensions to Standard SQL

1.8.2 MySQL Differences from Standard SQL

1.8.3 How MySQL Deals with Constraints

1.9 Credits

1.9.1 Contributors to MySQL

1.9.2 Documenters and translators

1.9.3 Packages that support MySQL

1.9.4 Tools that were used to create MySQL

1.9.5 Supporters of MySQL

2 Installing and Upgrading MySQL

2.1 General Installation Guidance

2.1.1 Which MySQL Version and Distribution to Install

2.1.2 How to Get MySQL

2.1.3 Verifying Package Integrity Using MD5 Checksums or GnuPG

2.1.4 Installation Layouts

2.1.5 Compiler-Specific Build Characteristics

2.2 Installing MySQL on Unix/Linux Using Generic Binaries

2.3 Installing MySQL on Microsoft Windows

2.3.1 MySQL Installation Layout on Microsoft Windows

2.3.2 Choosing an Installation Package

2.3.3 MySQL Installer for Windows

2.3.4 Installing MySQL on Microsoft Windows Using a noinstall ZIP Archive

2.3.5 Troubleshooting a Microsoft Windows MySQL Server Installation

2.3.6 Windows Postinstallation Procedures

2.3.7 Windows Platform Restrictions

2.4 Installing MySQL on macOS

2.4.1 General Notes on Installing MySQL on macOS

2.4.2 Installing MySQL on macOS Using Native Packages

2.4.3 Installing a MySQL Launch Daemon

2.4.4 Installing and Using the MySQL Preference Pane

2.5 Installing MySQL on Linux

2.5.1 Installing MySQL on Linux Using the MySQL Yum Repository

2.5.2 Replacing a Third-Party Distribution of MySQL Using the MySQL Yum

Repository

2.5.3 Installing MySQL on Linux Using the MySQL APT Repository

2.5.4 Installing MySQL on Linux Using the MySQL SLES Repository

2.5.5 Installing MySQL on Linux Using RPM Packages from Oracle

2.5.6 Installing MySQL on Linux Using Debian Packages from Oracle

2.5.7 Deploying MySQL on Linux with Docker

2.5.8 Installing MySQL on Linux from the Native Software Repositories

2.5.9 Installing MySQL on Linux with Juju

2.5.10 Managing MySQL Server with systemd

2.6 Installing MySQL Using Unbreakable Linux Network (ULN)

2.7 Installing MySQL on Solaris

2.7.1 Installing MySQL on Solaris Using a Solaris PKG

2.8 Installing MySQL on FreeBSD

2.9 Installing MySQL from Source

2.9.1 Source Installation Methods

2.9.2 Source Installation Prerequisites

2.9.3 MySQL Layout for Source Installation

2.9.4 Installing MySQL Using a Standard Source Distribution

2.9.5 Installing MySQL Using a Development Source Tree

2.9.6 Configuring SSL Library Support

2.9.7 MySQL Source-Configuration Options

2.9.8 Dealing with Problems Compiling MySQL

2.9.9 MySQL Configuration and Third-Party Tools

2.10 Postinstallation Setup and Testing

2.10.1 Initializing the Data Directory

2.10.2 Starting the Server

2.10.3 Testing the Server

2.10.4 Securing the Initial MySQL Account

2.10.5 Starting and Stopping MySQL Automatically

2.11 Upgrading MySQL

2.11.1 Before You Begin

2.11.2 Upgrade Paths

2.11.3 Changes in MySQL 5.7

2.11.4 Upgrading MySQL Binary or Package-based Installations on Unix/Linux

2.11.5 Upgrading MySQL with the MySQL Yum Repository

2.11.6 Upgrading MySQL with the MySQL APT Repository

2.11.7 Upgrading MySQL with the MySQL SLES Repository

2.11.8 Upgrading MySQL on Windows

2.11.9 Upgrading a Docker Installation of MySQL

2.11.10 Upgrading MySQL with Directly-Downloaded RPM Packages

2.11.11 Upgrade Troubleshooting

2.11.12 Rebuilding or Repairing Tables or Indexes

2.11.13 Copying MySQL Databases to Another Machine

2.12 Downgrading MySQL

2.12.1 Before You Begin

2.12.2 Downgrade Paths

2.12.3 Downgrade Notes

2.12.4 Downgrading Binary and Package-based Installations on Unix/Linux

2.12.5 Downgrade Troubleshooting

2.13 Perl Installation Notes

2.13.1 Installing Perl on Unix

2.13.2 Installing ActiveState Perl on Windows

2.13.3 Problems Using the Perl DBI/DBD Interface

3 Tutorial

3.1 Connecting to and Disconnecting from the Server

3.2 Entering Queries

3.3 Creating and Using a Database

3.3.1 Creating and Selecting a Database

3.3.2 Creating a Table

3.3.3 Loading Data into a Table

3.3.4 Retrieving Information from a Table

3.4 Getting Information About Databases and Tables

3.5 Using mysql in Batch Mode

3.6 Examples of Common Queries

3.6.1 The Maximum Value for a Column

3.6.2 The Row Holding the Maximum of a Certain Column

3.6.3 Maximum of Column per Group

3.6.4 The Rows Holding the Group-wise Maximum of a Certain Column

3.6.5 Using User-Defined Variables

3.6.6 Using Foreign Keys

3.6.7 Searching on Two Keys

3.6.8 Calculating Visits Per Day

3.6.9 Using AUTO_INCREMENT

3.7 Using MySQL with Apache

4 MySQL Programs

4.1 Overview of MySQL Programs

4.2 Using MySQL Programs

4.2.1 Invoking MySQL Programs

4.2.2 Specifying Program Options

4.2.3 Command Options for Connecting to the Server

4.2.4 Connecting to the MySQL Server Using Command Options

4.2.5 Connection Compression Control

4.2.6 Setting Environment Variables

4.3 Server and Server-Startup Programs

4.3.1 mysqld - The MySQL Server

4.3.2 mysqld_safe - MySQL Server Startup Script

4.3.3 mysql.server - MySQL Server Startup Script

4.3.4 mysqld_multi - Manage Multiple MySQL Servers

4.4 Installation-Related Programs

4.4.1 comp_err - Compile MySQL Error Message File

4.4.2 mysql_install_db - Initialize MySQL Data Directory

4.4.3 mysql_plugin - Configure MySQL Server Plugins

4.4.4 mysql_secure_installation - Improve MySQL Installation Security

4.4.5 mysql_ssl_rsa_setup - Create SSL/RSA Files

4.4.6 mysql_tzinfo_to_sql - Load the Time Zone Tables

4.4.7 mysql_upgrade - Check and Upgrade MySQL Tables

4.5 Client Programs

4.5.1 mysql - The MySQL Command-Line Client

4.5.2 mysqladmin - Client for Administering a MySQL Server

4.5.3 mysqlcheck - A Table Maintenance Program

4.5.4 mysqldump - A Database Backup Program

4.5.5 mysqlimport - A Data Import Program

4.5.6 mysqlpump - A Database Backup Program

4.5.7 mysqlshow - Display Database, Table, and Column Information

4.5.8 mysqlslap - Load Emulation Client

4.6 Administrative and Utility Programs

4.6.1 innochecksum - Offline InnoDB File Checksum Utility

4.6.2 myisam_ftdump - Display Full-Text Index information

4.6.3 myisamchk - MyISAM Table-Maintenance Utility

4.6.4 myisamlog - Display MyISAM Log File Contents

4.6.5 myisampack - Generate Compressed, Read-Only MyISAM Tables

4.6.6 mysql_config_editor - MySQL Configuration Utility

4.6.7 mysqlbinlog - Utility for Processing Binary Log Files

4.6.8 mysqldumpslow - Summarize Slow Query Log Files

4.7 Program Development Utilities

4.7.1 mysql_config - Display Options for Compiling Clients

4.7.2 my_print_defaults - Display Options from Option Files

4.7.3 resolve_stack_dump - Resolve Numeric Stack Trace Dump to Symbols

4.8 Miscellaneous Programs

4.8.1 lz4_decompress - Decompress mysqlpump LZ4-Compressed Output

4.8.2 perror - Display MySQL Error Message Information

4.8.3 replace - A String-Replacement Utility

4.8.4 resolveip - Resolve Host name to IP Address or Vice Versa

4.8.5 zlib_decompress - Decompress mysqlpump ZLIB-Compressed Output

4.9 Environment Variables

4.10 Unix Signal Handling in MySQL

5 MySQL Server Administration

5.1 The MySQL Server

5.1.1 Configuring the Server

5.1.2 Server Configuration Defaults

5.1.3 Server Option, System Variable, and Status Variable Reference

5.1.4 Server System Variable Reference

5.1.5 Server Status Variable Reference

5.1.6 Server Command Options

5.1.7 Server System Variables

5.1.8 Using System Variables

5.1.9 Server Status Variables

5.1.10 Server SQL Modes

5.1.11 IPv6 Support

5.1.12 MySQL Server Time Zone Support

5.1.13 Server-Side Help Support

5.1.14 Server Tracking of Client Session State Changes

5.1.15 The Server Shutdown Process

5.2 The MySQL Data Directory

5.3 The mysql System Database

5.4 MySQL Server Logs

5.4.1 Selecting General Query Log and Slow Query Log Output Destinations

5.4.2 The Error Log

5.4.3 The General Query Log

5.4.4 The Binary Log

5.4.5 The Slow Query Log

5.4.6 The DDL Log

5.4.7 Server Log Maintenance

5.5 MySQL Server Plugins

5.5.1 Installing and Uninstalling Plugins

5.5.2 Obtaining Server Plugin Information

5.5.3 MySQL Enterprise Thread Pool

5.5.4 The Rewriter Query Rewrite Plugin

5.5.5 Version Tokens

5.6 MySQL Server User-Defined Functions

5.6.1 Installing and Uninstalling User-Defined Functions

5.6.2 Obtaining User-Defined Function Information

5.7 Running Multiple MySQL Instances on One Machine

5.7.1 Setting Up Multiple Data Directories

5.7.2 Running Multiple MySQL Instances on Windows

5.7.3 Running Multiple MySQL Instances on Unix

5.7.4 Using Client Programs in a Multiple-Server Environment

5.8 Tracing mysqld Using DTrace

5.8.1 mysqld DTrace Probe Reference

6 Security

6.1 General Security Issues

6.1.1 Security Guidelines

6.1.2 Keeping Passwords Secure

6.1.3 Making MySQL Secure Against Attackers

6.1.4 Security-Related mysqld Options and Variables

6.1.5 How to Run MySQL as a Normal User

6.1.6 Security Issues with LOAD DATA LOCAL

6.1.7 Client Programming Security Guidelines

6.2 Access Control and Account Management

6.2.1 Account User Names and Passwords

6.2.2 Privileges Provided by MySQL

6.2.3 Grant Tables

6.2.4 Specifying Account Names

6.2.5 Access Control, Stage 1: Connection Verification

6.2.6 Access Control, Stage 2: Request Verification

6.2.7 Adding Accounts, Assigning Privileges, and Dropping Accounts

6.2.8 Reserved Accounts

6.2.9 When Privilege Changes Take Effect

6.2.10 Assigning Account Passwords

6.2.11 Password Management

https://dev.mysql.com/doc/refman/5.7/en/password-management.html

MySQL supports these password-management capabilities:

- Password expiration, to require passwords to be changed periodically.
- Password reuse restrictions, to prevent old passwords from being chosen again.
- Password verification, to require that password changes also specify the current password to be replaced.
- **Dual passwords**, to enable clients to connect using either a primary or secondary password.
- Password strength assessment, to require strong passwords.
- Random password generation, as an alternative to requiring explicit administrator-specified literal passwords.
- Password failure tracking, to enable temporary account locking after too many consecutive incorrect-password login failures.

https://dev.mysql.com/doc/mysql-security-excerpt/8.0/en/password-management.html

6.2.12 Server Handling of Expired Passwords

6.2.13 Pluggable Authentication

6.2.14 Proxy Users

6.2.15 Account Locking

## 6.2.16 Setting Account Resource Limits

One means of restricting client use of MySQL server resources is to set the global [max_user_connections](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_user_connections) system variable to a nonzero value. This limits the number of simultaneous connections that can be made by any given account, but places no limits on what a client can do once connected. In addition, setting [max_user_connections](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_user_connections) does not enable management of individual accounts. Both types of control are of interest to MySQL administrators.
To address such concerns, MySQL permits limits for individual accounts on use of these server resources:

- The number of queries an account can issue per hour
- The number of updates an account can issue per hour
- The number of times an account can connect to the server per hour
- The number of simultaneous connections to the server by an account

https://dev.mysql.com/doc/refman/8.0/en/user-resources.html
6.2.17 Troubleshooting Problems Connecting to MySQL

6.2.18 SQL-Based Account Activity Auditing

6.3 Using Encrypted Connections

6.3.1 Configuring MySQL to Use Encrypted Connections

6.3.2 Encrypted Connection TLS Protocols and Ciphers

6.3.3 Creating SSL and RSA Certificates and Keys

6.3.4 SSL Library-Dependent Capabilities

6.3.5 Connecting to MySQL Remotely from Windows with SSH

6.4 Security Plugins

6.4.1 Authentication Plugins

6.4.2 The Connection-Control Plugins

6.4.3 The Password Validation Plugin

6.4.4 The MySQL Keyring

6.4.5 MySQL Enterprise Audit

6.4.6 MySQL Enterprise Firewall

6.4.7 MySQL Enterprise Data Masking and De-Identification

7 Backup and Recovery

7.1 Backup and Recovery Types

7.2 Database Backup Methods

7.3 Example Backup and Recovery Strategy

7.3.1 Establishing a Backup Policy

7.3.2 Using Backups for Recovery

7.3.3 Backup Strategy Summary

7.4 Using mysqldump for Backups

7.4.1 Dumping Data in SQL Format with mysqldump

7.4.2 Reloading SQL-Format Backups

7.4.3 Dumping Data in Delimited-Text Format with mysqldump

7.4.4 Reloading Delimited-Text Format Backups

7.4.5 mysqldump Tips

7.5 Point-in-Time (Incremental) Recovery Using the Binary Log

7.5.1 Point-in-Time Recovery Using Event Times

7.5.2 Point-in-Time Recovery Using Event Positions

7.6 MyISAM Table Maintenance and Crash Recovery

7.6.1 Using myisamchk for Crash Recovery

7.6.2 How to Check MyISAM Tables for Errors

7.6.3 How to Repair MyISAM Tables

7.6.4 MyISAM Table Optimization

7.6.5 Setting Up a MyISAM Table Maintenance Schedule

8 Optimization

8.1 Optimization Overview

8.2 Optimizing SQL Statements

8.2.1 Optimizing SELECT Statements

8.2.2 Optimizing Subqueries, Derived Tables, and View References

8.2.3 Optimizing INFORMATION_SCHEMA Queries

8.2.4 Optimizing Data Change Statements

8.2.5 Optimizing Database Privileges

8.2.6 Other Optimization Tips

8.3 Optimization and Indexes

8.3.1 How MySQL Uses Indexes

8.3.2 Primary Key Optimization

8.3.3 Foreign Key Optimization

8.3.4 Column Indexes

8.3.5 Multiple-Column Indexes

8.3.6 Verifying Index Usage

8.3.7 InnoDB and MyISAM Index Statistics Collection

8.3.8 Comparison of B-Tree and Hash Indexes

8.3.9 Use of Index Extensions

8.3.10 Optimizer Use of Generated Column Indexes

8.3.11 Indexed Lookups from TIMESTAMP Columns

8.4 Optimizing Database Structure

8.4.1 Optimizing Data Size

8.4.2 Optimizing MySQL Data Types

8.4.3 Optimizing for Many Tables

8.4.4 Internal Temporary Table Use in MySQL

8.4.5 Limits on Number of Databases and Tables

8.4.6 Limits on Table Size

8.4.7 Limits on Table Column Count and Row Size

- MySQL has hard limit of 4096 columns per table, but the effective maximum may be less for a given table.
- [InnoDB](https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html) has a limit of 1017 columns per table.
- The internal representation of a MySQL table has a maximum row size limit of 65,535 bytes

https://dev.mysql.com/doc/refman/8.0/en/column-count-limit.html

8.5 Optimizing for InnoDB Tables

8.5.1 Optimizing Storage Layout for InnoDB Tables

8.5.2 Optimizing InnoDB Transaction Management

8.5.3 Optimizing InnoDB Read-Only Transactions

8.5.4 Optimizing InnoDB Redo Logging

8.5.5 Bulk Data Loading for InnoDB Tables

8.5.6 Optimizing InnoDB Queries

8.5.7 Optimizing InnoDB DDL Operations

8.5.8 Optimizing InnoDB Disk I/O

8.5.9 Optimizing InnoDB Configuration Variables

8.5.10 Optimizing InnoDB for Systems with Many Tables

8.6 Optimizing for MyISAM Tables

8.6.1 Optimizing MyISAM Queries

8.6.2 Bulk Data Loading for MyISAM Tables

8.6.3 Optimizing REPAIR TABLE Statements

8.7 Optimizing for MEMORY Tables

8.8 Understanding the Query Execution Plan

8.8.1 Optimizing Queries with EXPLAIN

8.8.2 EXPLAIN Output Format

8.8.3 Extended EXPLAIN Output Format

8.8.4 Obtaining Execution Plan Information for a Named Connection

8.8.5 Estimating Query Performance

8.9 Controlling the Query Optimizer

8.9.1 Controlling Query Plan Evaluation

8.9.2 Switchable Optimizations

8.9.3 Optimizer Hints

8.9.4 Index Hints

8.9.5 The Optimizer Cost Model

To generate execution plans, the optimizer uses a cost model that is based on estimates of the cost of various operations that occur during query execution. The optimizer has a set of compiled-in default"cost constants" available to it to make decisions regarding execution plans.

https://dev.mysql.com/doc/refman/5.7/en/cost-model.html

8.10 Buffering and Caching

8.10.1 InnoDB Buffer Pool Optimization

8.10.2 The MyISAM Key Cache

8.10.3 The MySQL Query Cache

8.10.4 Caching of Prepared Statements and Stored Programs

8.12 Optimizing the MySQL Server

8.12.1 System Factors

8.12.2 Optimizing Disk I/O

8.12.3 Using Symbolic Links

8.12.4 Optimizing Memory Use

8.12.5 Optimizing Network Use

8.13 Measuring Performance (Benchmarking)

8.13.1 Measuring the Speed of Expressions and Functions

8.13.2 Using Your Own Benchmarks

8.13.3 Measuring Performance with performance_schema

8.14 Examining Thread Information

8.14.1 Thread Command Values

8.14.2 General Thread States

8.14.3 Query Cache Thread States

8.14.4 Replication Master Thread States

8.14.5 Replication Slave I/O Thread States

8.14.6 Replication Slave SQL Thread States

8.14.7 Replication Slave Connection Thread States

8.14.8 NDB Cluster Thread States

8.14.9 Event Scheduler Thread States

9 Language Structure

9.1 Literal Values

9.1.1 String Literals

9.1.2 Numeric Literals

9.1.3 Date and Time Literals

9.1.4 Hexadecimal Literals

9.1.5 Bit-Value Literals

9.1.6 Boolean Literals

9.1.7 NULL Values

9.2 Schema Object Names

9.2.1 Identifier Length Limits

9.2.2 Identifier Qualifiers

9.2.3 Identifier Case Sensitivity

9.2.4 Mapping of Identifiers to File Names

9.2.5 Function Name Parsing and Resolution

9.3 Keywords and Reserved Words

9.4 User-Defined Variables

9.5 Expressions

9.6 Comment Syntax

10 Character Sets, Collations, Unicode

SQLServer collation refers to a set of character and character encoding rules, and influences how information is stored according to the order in the data page, how data is matched by comparing two columns, and how information is arranged in the T-SQL query statement.

10.1 Character Sets and Collations in General

10.2 Character Sets and Collations in MySQL

10.2.1 Character Set Repertoire

10.2.2 UTF-8 for Metadata

10.3 Specifying Character Sets and Collations

10.3.1 Collation Naming Conventions

10.3.2 Server Character Set and Collation

10.3.3 Database Character Set and Collation

10.3.4 Table Character Set and Collation

10.3.5 Column Character Set and Collation

10.3.6 Character String Literal Character Set and Collation

10.3.7 The National Character Set

10.3.8 Character Set Introducers

10.3.9 Examples of Character Set and Collation Assignment

10.3.10 Compatibility with Other DBMSs

10.4 Connection Character Sets and Collations

10.5 Configuring Application Character Set and Collation

10.6 Error Message Character Set

10.7 Column Character Set Conversion

10.8 Collation Issues

10.8.1 Using COLLATE in SQL Statements - Collation is a set of rules that tell database engine how to compare and sort the character data in SQL Server.

10.8.2 COLLATE Clause Precedence

10.8.3 Character Set and Collation Compatibility

10.8.4 Collation Coercibility in Expressions

10.8.5 The binary Collation Compared to _bin Collations

10.8.6 Examples of the Effect of Collation

10.8.7 Using Collation in INFORMATION_SCHEMA Searches

10.9 Unicode Support

10.9.1 The utf8mb4 Character Set (4-Byte UTF-8 Unicode Encoding)

10.9.2 The utf8mb3 Character Set (3-Byte UTF-8 Unicode Encoding)

10.9.3 The utf8 Character Set (Alias for utf8mb3)

10.9.4 The ucs2 Character Set (UCS-2 Unicode Encoding)

10.9.5 The utf16 Character Set (UTF-16 Unicode Encoding)

10.9.6 The utf16le Character Set (UTF-16LE Unicode Encoding)

10.9.7 The utf32 Character Set (UTF-32 Unicode Encoding)

10.9.8 Converting Between 3-Byte and 4-Byte Unicode Character Sets

10.10 Supported Character Sets and Collations

10.10.1 Unicode Character Sets

10.10.2 West European Character Sets

10.10.3 Central European Character Sets

10.10.4 South European and Middle East Character Sets

10.10.5 Baltic Character Sets

10.10.6 Cyrillic Character Sets

10.10.7 Asian Character Sets

10.10.8 The Binary Character Set

10.11 Restrictions on Character Sets

10.12 Setting the Error Message Language

10.13 Adding a Character Set

10.13.1 Character Definition Arrays

10.13.2 String Collating Support for Complex Character Sets

10.13.3 Multi-Byte Character Support for Complex Character Sets

10.14 Adding a Collation to a Character Set

10.14.1 Collation Implementation Types

10.14.2 Choosing a Collation ID

10.14.3 Adding a Simple Collation to an 8-Bit Character Set

10.14.4 Adding a UCA Collation to a Unicode Character Set

10.15 Character Set Configuration

10.16 MySQL Server Locale Support

12 Functions and Operators

12.1 Function and Operator Reference

12.2 Type Conversion in Expression Evaluation

12.3 Operators

12.3.1 Operator Precedence

12.3.2 Comparison Functions and Operators

12.3.3 Logical Operators

12.3.4 Assignment Operators

12.4 Control Flow Functions

12.5 Numeric Functions and Operators

12.5.1 Arithmetic Operators

12.5.2 Mathematical Functions

12.6 Date and Time Functions

12.7 String Functions and Operators

12.7.1 String Comparison Functions and Operators

12.7.2 Regular Expressions

12.7.3 Character Set and Collation of Function Results

12.8 What Calendar Is Used By MySQL?

12.9 Full-Text Search Functions

12.9.1 Natural Language Full-Text Searches

12.9.2 Boolean Full-Text Searches

12.9.3 Full-Text Searches with Query Expansion

12.9.4 Full-Text Stopwords

12.9.5 Full-Text Restrictions

12.9.6 Fine-Tuning MySQL Full-Text Search

12.9.7 Adding a Collation for Full-Text Indexing

12.9.8 ngram Full-Text Parser

12.9.9 MeCab Full-Text Parser Plugin

12.10 Cast Functions and Operators

12.11 XML Functions

12.12 Bit Functions and Operators

12.13 Encryption and Compression Functions

12.14 Locking Functions

12.15 Information Functions

12.16 Spatial Analysis Functions

12.16.1 Spatial Function Reference

12.16.2 Argument Handling by Spatial Functions

12.16.3 Functions That Create Geometry Values from WKT Values

12.16.4 Functions That Create Geometry Values from WKB Values

12.16.5 MySQL-Specific Functions That Create Geometry Values

12.16.6 Geometry Format Conversion Functions

12.16.7 Geometry Property Functions

12.16.8 Spatial Operator Functions

12.16.9 Functions That Test Spatial Relations Between Geometry Objects

12.16.10 Spatial Geohash Functions

12.16.11 Spatial GeoJSON Functions

12.16.12 Spatial Convenience Functions

12.17 JSON Functions

12.17.1 JSON Function Reference

12.17.2 Functions That Create JSON Values

12.17.3 Functions That Search JSON Values

12.17.4 Functions That Modify JSON Values

12.17.5 Functions That Return JSON Value Attributes

12.17.6 JSON Utility Functions

12.18 Functions Used with Global Transaction Identifiers (GTIDs)

12.19 MySQL Enterprise Encryption Functions

12.19.1 MySQL Enterprise Encryption Installation

12.19.2 MySQL Enterprise Encryption Usage and Examples

12.19.3 MySQL Enterprise Encryption Function Reference

12.19.4 MySQL Enterprise Encryption Function Descriptions

12.20 Aggregate (GROUP BY) Functions

12.20.1 Aggregate (GROUP BY) Function Descriptions

12.20.2 GROUP BY Modifiers

12.20.3 MySQL Handling of GROUP BY

12.20.4 Detection of Functional Dependence

12.21 Miscellaneous Functions

12.22 Precision Math

12.22.1 Types of Numeric Values

12.22.2 DECIMAL Data Type Characteristics

12.22.3 Expression Handling

12.22.4 Rounding Behavior

12.22.5 Precision Math Examples

13 SQL Statements

13.1 Data Definition Statements

13.1.1 ALTER DATABASE Statement

13.1.2 ALTER EVENT Statement

13.1.3 ALTER FUNCTION Statement

13.1.4 ALTER INSTANCE Statement

13.1.5 ALTER LOGFILE GROUP Statement

13.1.6 ALTER PROCEDURE Statement

13.1.7 ALTER SERVER Statement

13.1.8 ALTER TABLE Statement

13.1.9 ALTER TABLESPACE Statement

13.1.10 ALTER VIEW Statement

13.1.11 CREATE DATABASE Statement

13.1.12 CREATE EVENT Statement

13.1.13 CREATE FUNCTION Statement

13.1.14 CREATE INDEX Statement

13.1.15 CREATE LOGFILE GROUP Statement

13.1.16 CREATE PROCEDURE and CREATE FUNCTION Statements

13.1.17 CREATE SERVER Statement

13.1.18 CREATE TABLE Statement

13.1.19 CREATE TABLESPACE Statement

13.1.20 CREATE TRIGGER Statement

13.1.21 CREATE VIEW Statement

13.1.22 DROP DATABASE Statement

13.1.23 DROP EVENT Statement

13.1.24 DROP FUNCTION Statement

13.1.25 DROP INDEX Statement

13.1.26 DROP LOGFILE GROUP Statement

13.1.27 DROP PROCEDURE and DROP FUNCTION Statements

13.1.28 DROP SERVER Statement

13.1.29 DROP TABLE Statement

13.1.30 DROP TABLESPACE Statement

13.1.31 DROP TRIGGER Statement

13.1.32 DROP VIEW Statement

13.1.33 RENAME TABLE Statement

13.1.34 TRUNCATE TABLE Statement

13.2 Data Manipulation Statements

13.2.1 CALL Statement

13.2.2 DELETE Statement

13.2.3 DO Statement

13.2.4 HANDLER Statement

13.2.5 INSERT Statement

13.2.6 LOAD DATA Statement

13.2.7 LOAD XML Statement

13.2.8 REPLACE Statement

13.2.9 SELECT Statement

13.2.10 Subqueries

13.2.11 UPDATE Statement

13.3.7 XA Transactions

13.4 Replication Statements

13.4.1 SQL Statements for Controlling Master Servers

13.4.2 SQL Statements for Controlling Slave Servers

13.4.3 SQL Statements for Controlling Group Replication

13.5 Prepared Statements

13.5.1 PREPARE Statement

13.5.2 EXECUTE Statement

13.5.3 DEALLOCATE PREPARE Statement

13.6 Compound Statements

13.6.1 BEGIN

13.6.2 Statement Labels

13.6.3 DECLARE Statement

13.6.4 Variables in Stored Programs

13.6.5 Flow Control Statements

13.6.6 Cursors

13.6.7 Condition Handling

13.7 Database Administration Statements

13.7.1 Account Management Statements

13.7.2 Table Maintenance Statements

13.7.3 Plugin and User-Defined Function Statements

13.7.4 SET Statements

13.7.5 SHOW Statements

13.7.6 Other Administrative Statements

13.8 Utility Statements

13.8.1 DESCRIBE Statement

13.8.2 EXPLAIN Statement

13.8.3 HELP Statement

13.8.4 USE Statement

14 The InnoDB Storage Engine

14.1 Introduction to InnoDB

14.1.1 Benefits of Using InnoDB Tables

14.1.2 Best Practices for InnoDB Tables

14.1.3 Verifying that InnoDB is the Default Storage Engine

14.1.4 Testing and Benchmarking with InnoDB

14.1.5 Turning Off InnoDB

14.2 InnoDB and the ACID Model

14.3 InnoDB Multi-Versioning

14.4 InnoDB Architecture

14.5 InnoDB In-Memory Structures

14.5.1 Buffer Pool

14.5.2 Change Buffer

14.5.3 Adaptive Hash Index

14.5.4 Log Buffer

14.6 InnoDB On-Disk Structures

14.6.1 Tables

14.6.2 Indexes

### 14.6.3 Tablespaces

Tablespaces are physical storage locations, while schemas are logical containers for database objects. Tablespaces are used for managing storage locations, while schemas help organize database objects and control access. Tablespaces are typically used at the database level, whereas schemas are used within a database.

[mysql - What is a tablespace and why is it used? - Stack Overflow](https://stackoverflow.com/questions/37805316/what-is-a-tablespace-and-why-is-it-used)

14.6.4 InnoDB Data Dictionary

14.6.5 Doublewrite Buffer

14.6.6 Redo Log

14.6.7 Undo Logs

14.7 InnoDB Locking and Transaction Model

14.7.1 InnoDB Locking

14.7.2 InnoDB Transaction Model

14.7.3 Locks Set by Different SQL Statements in InnoDB

14.7.4 Phantom Rows

14.7.5 Deadlocks in InnoDB

14.8 InnoDB Configuration

14.8.1 InnoDB Startup Configuration

14.8.2 Configuring InnoDB for Read-Only Operation

14.8.3 InnoDB Buffer Pool Configuration

14.8.4 Configuring the Memory Allocator for InnoDB

14.8.5 Configuring Thread Concurrency for InnoDB

14.8.6 Configuring the Number of Background InnoDB I/O Threads

14.8.7 Using Asynchronous I/O on Linux

14.8.8 Configuring InnoDB I/O Capacity

14.8.9 Configuring Spin Lock Polling

14.8.10 Purge Configuration

14.8.11 Configuring Optimizer Statistics for InnoDB

14.8.12 Configuring the Merge Threshold for Index Pages

14.9 InnoDB Table and Page Compression

## 14.9.1 InnoDB Table Compression

https://dev.mysql.com/doc/refman/8.0/en/innodb-compression-usage.html

https://dev.mysql.com/doc/refman/8.0/en/innodb-compression-internals.html

14.9.2 InnoDB Page Compression

14.10 InnoDB File-Format Management

14.10.1 Enabling File Formats

14.10.2 Verifying File Format Compatibility

14.10.3 Identifying the File Format in Use

14.10.4 Modifying the File Format

14.11 InnoDB Row Formats

14.12 InnoDB Disk I/O and File Space Management

14.12.1 InnoDB Disk I/O

14.12.2 File Space Management

14.12.3 InnoDB Checkpoints

14.12.4 Defragmenting a Table

14.12.5 Reclaiming Disk Space with TRUNCATE TABLE

14.13 InnoDB and Online DDL

14.13.1 Online DDL Operations

14.13.2 Online DDL Performance and Concurrency

14.13.3 Online DDL Space Requirements

14.13.4 Simplifying DDL Statements with Online DDL

14.13.5 Online DDL Failure Conditions

14.13.6 Online DDL Limitations

14.14 InnoDB Data-at-Rest Encryption

14.15 InnoDB Startup Options and System Variables

14.16 InnoDB INFORMATION_SCHEMA Tables

14.16.1 InnoDB INFORMATION_SCHEMA Tables about Compression

14.16.2 InnoDB INFORMATION_SCHEMA Transaction and Locking Information

14.16.3 InnoDB INFORMATION_SCHEMA System Tables

14.16.4 InnoDB INFORMATION_SCHEMA FULLTEXT Index Tables

14.16.5 InnoDB INFORMATION_SCHEMA Buffer Pool Tables

14.16.6 InnoDB INFORMATION_SCHEMA Metrics Table

14.16.7 InnoDB INFORMATION_SCHEMA Temporary Table Info Table

14.16.8 Retrieving InnoDB Tablespace Metadata from

INFORMATION_SCHEMA.FILES

14.17 InnoDB Integration with MySQL Performance Schema

14.17.1 Monitoring ALTER TABLE Progress for InnoDB Tables Using Performance

Schema

14.17.2 Monitoring InnoDB Mutex Waits Using Performance Schema

14.18 InnoDB Monitors

14.18.1 InnoDB Monitor Types

14.18.2 Enabling InnoDB Monitors

14.18.3 InnoDB Standard Monitor and Lock Monitor Output

14.19 InnoDB Backup and Recovery

14.19.1 InnoDB Backup

14.19.2 InnoDB Recovery

14.20 InnoDB and MySQL Replication

14.21 InnoDB memcached Plugin

14.21.1 Benefits of the InnoDB memcached Plugin

14.21.2 InnoDB memcached Architecture

14.21.3 Setting Up the InnoDB memcached Plugin

14.21.4 Security Considerations for the InnoDB memcached Plugin

14.21.5 Writing Applications for the InnoDB memcached Plugin

14.21.6 The InnoDB memcached Plugin and Replication

14.21.7 InnoDB memcached Plugin Internals

14.21.8 Troubleshooting the InnoDB memcached Plugin

14.22 InnoDB Troubleshooting

14.22.1 Troubleshooting InnoDB I/O Problems

14.22.2 Forcing InnoDB Recovery

14.22.3 Troubleshooting InnoDB Data Dictionary Operations

14.22.4 InnoDB Error Handling

14.23 InnoDB Limits

14.24 InnoDB Restrictions and Limitations

15 Alternative Storage Engines

15.1 Setting the Storage Engine

15.2 The MyISAM Storage Engine

15.2.1 MyISAM Startup Options

15.2.2 Space Needed for Keys

15.2.3 MyISAM Table Storage Formats

15.2.4 MyISAM Table Problems

15.3 The MEMORY Storage Engine

15.4 The CSV Storage Engine

15.4.1 Repairing and Checking CSV Tables

15.4.2 CSV Limitations

15.5 The ARCHIVE Storage Engine

15.6 The BLACKHOLE Storage Engine

15.7 The MERGE Storage Engine

15.7.1 MERGE Table Advantages and Disadvantages

15.7.2 MERGE Table Problems

15.8 The FEDERATED Storage Engine

15.8.1 FEDERATED Storage Engine Overview

15.8.2 How to Create FEDERATED Tables

15.8.3 FEDERATED Storage Engine Notes and Tips

15.8.4 FEDERATED Storage Engine Resources

15.9 The EXAMPLE Storage Engine

15.10 Other Storage Engines

15.11 Overview of MySQL Storage Engine Architecture

15.11.1 Pluggable Storage Engine Architecture

15.11.2 The Common Database Server Layer

16 Replication

16.1 Configuring Replication

16.1.1 Binary Log File Position Based Replication Configuration Overview

16.1.2 Setting Up Binary Log File Position Based Replication

16.1.3 Replication with Global Transaction Identifiers

16.1.4 MySQL Multi-Source Replication

16.1.5 Changing Replication Modes on Online Servers

16.1.6 Replication and Binary Logging Options and Variables

16.1.7 Common Replication Administration Tasks

16.2 Replication Implementation

16.2.1 Replication Formats

16.2.2 Replication Implementation Details

16.2.3 Replication Channels

16.2.4 Replication Relay and Status Logs

16.2.5 How Servers Evaluate Replication Filtering Rules

16.3 Replication Solutions

16.3.1 Using Replication for Backups

16.3.2 Handling an Unexpected Halt of a Replication Slave

16.3.3 Using Replication with Different Master and Slave Storage Engines

16.3.4 Using Replication for Scale-Out

16.3.5 Replicating Different Databases to Different Slaves

16.3.6 Improving Replication Performance

16.3.7 Switching Masters During Failover

16.3.8 Setting Up Replication to Use Encrypted Connections

16.3.9 Semisynchronous Replication

16.3.10 Delayed Replication

16.4 Replication Notes and Tips

16.4.1 Replication Features and Issues

16.4.2 Replication Compatibility Between MySQL Versions

16.4.3 Upgrading a Replication Setup

xvi

16.4.4 Troubleshooting Replication

16.4.5 How to Report Replication Bugs or Problems

17 Group Replication

17.1 Group Replication Background

17.1.1 Replication Technologies

17.1.2 Group Replication Use Cases

17.1.3 Group Replication Details

17.2 Getting Started

17.2.1 Deploying Group Replication in Single-Primary Mode

17.2.2 Deploying Group Replication Locally

17.3 Monitoring Group Replication

17.3.1 Group Replication Server States

17.3.2 The replication_group_members Table

17.3.3 The replication_group_member_stats Table

17.4 Group Replication Operations

17.4.1 Deploying in Multi-Primary or Single-Primary Mode

17.4.2 Tuning Recovery

17.4.3 Network Partitioning

17.4.4 Using MySQL Enterprise Backup with Group Replication

17.5 Group Replication Security

17.5.1 Group Replication IP Address Whitelisting

17.5.2 Group Replication Secure Socket Layer (SSL) Support

17.5.3 Group Replication and Virtual Private Networks (VPNs)

17.6 Group Replication System Variables

17.7 Requirements and Limitations

17.7.1 Group Replication Requirements

17.7.2 Group Replication Limitations

17.8 Frequently Asked Questions

17.9 Group Replication Technical Details

17.9.1 Group Replication Plugin Architecture

17.9.2 The Group

17.9.3 Data Manipulation Statements

17.9.4 Data Definition Statements

17.9.5 Distributed Recovery

17.9.6 Observability

17.9.7 Group Replication Performance

18 MySQL Shell

19 Using MySQL as a Document Store

19.1 Preproduction Status - Legal Notice

19.2 Key Concepts

19.3 Setting Up MySQL as a Document Store

19.3.1 Installing MySQL Shell

19.3.2 Starting MySQL Shell

19.4 Quick-Start Guide: MySQL Shell for JavaScript

19.4.1 Introduction

19.4.2 Import Database Sample

19.4.3 MySQL Shell

19.4.4 Documents and Collections

19.4.5 Relational Tables

19.4.6 Documents in Tables

19.5 Quick-Start Guide: MySQL Shell for Python

19.5.1 Introduction

19.5.2 Import Database Sample

19.5.3 MySQL Shell

19.5.4 Documents and Collections

19.5.5 Relational Tables

19.5.6 Documents in Tables

19.6 Quick-Start Guide: MySQL for Visual Studio

19.7 X Plugin

19.7.1 Using Secure Connections with X Plugin

19.7.2 X Plugin Options and Variables

19.7.3 Monitoring X Plugin

20 InnoDB Cluster

20.1 Introducing InnoDB Cluster

20.2 Creating an InnoDB Cluster

20.2.1 Deployment Scenarios

20.2.2 InnoDB Cluster Requirements

20.2.3 Methods of Installing

20.2.4 Sandbox Deployment of InnoDB Cluster

20.2.5 Production Deployment of InnoDB Cluster

20.2.6 Adopting a Group Replication Deployment

20.3 Using MySQL Router with InnoDB Cluster

20.4 Working with InnoDB Cluster

20.5 Known Limitations

21 MySQL NDB Cluster 7.5 and NDB Cluster 7.6

21.1 NDB Cluster Overview

21.1.1 NDB Cluster Core Concepts

21.1.2 NDB Cluster Nodes, Node Groups, Replicas, and Partitions

21.1.3 NDB Cluster Hardware, Software, and Networking Requirements

21.1.4 What is New in NDB Cluster

21.1.5 NDB: Added, Deprecated, and Removed Options, Variables, and Parameters

21.1.6 MySQL Server Using InnoDB Compared with NDB Cluster

21.1.7 Known Limitations of NDB Cluster

21.2 NDB Cluster Installation

21.2.1 The NDB Cluster Auto-Installer (NDB 7.5)

21.2.2 The NDB Cluster Auto-Installer (NDB 7.6)

21.2.3 Installation of NDB Cluster on Linux

21.2.4 Installing NDB Cluster on Windows

21.2.5 Initial Configuration of NDB Cluster

21.2.6 Initial Startup of NDB Cluster

21.2.7 NDB Cluster Example with Tables and Data

21.2.8 Safe Shutdown and Restart of NDB Cluster

21.2.9 Upgrading and Downgrading NDB Cluster

21.3 Configuration of NDB Cluster

21.3.1 Quick Test Setup of NDB Cluster

21.3.2 Overview of NDB Cluster Configuration Parameters, Options, and Variables

21.3.3 NDB Cluster Configuration Files

21.3.4 Using High-Speed Interconnects with NDB Cluster

21.4 NDB Cluster Programs

21.4.1 ndbd - The NDB Cluster Data Node Daemon

21.4.2 ndbinfo_select_all - Select From ndbinfo Tables

21.4.3 ndbmtd - The NDB Cluster Data Node Daemon (Multi-Threaded)

21.4.4 ndb_mgmd - The NDB Cluster Management Server Daemon

21.4.5 ndb_mgm - The NDB Cluster Management Client

21.4.6 ndb_blob_tool - Check and Repair BLOB and TEXT columns of NDB

Cluster Tables

21.4.7 ndb_config - Extract NDB Cluster Configuration Information

21.4.8 ndb_cpcd - Automate Testing for NDB Development

21.4.9 ndb_delete_all - Delete All Rows from an NDB Table

21.4.10 ndb_desc - Describe NDB Tables

21.4.11 ndb_drop_index - Drop Index from an NDB Table

21.4.12 ndb_drop_table - Drop an NDB Table

21.4.13 ndb_error_reporter - NDB Error-Reporting Utility

21.4.14 ndb_import - Import CSV Data Into NDB

21.4.15 ndb_index_stat - NDB Index Statistics Utility

21.4.16 ndb_move_data - NDB Data Copy Utility

21.4.17 ndb_perror - Obtain NDB Error Message Information

21.4.18 ndb_print_backup_file - Print NDB Backup File Contents

21.4.19 ndb_print_file - Print NDB Disk Data File Contents

21.4.20 ndb_print_frag_file - Print NDB Fragment List File Contents

21.4.21 ndb_print_schema_file - Print NDB Schema File Contents

21.4.22 ndb_print_sys_file - Print NDB System File Contents

21.4.23 ndb_redo_log_reader - Check and Print Content of Cluster Redo Log

21.4.24 ndb_restore - Restore an NDB Cluster Backup

21.4.25 ndb_select_all - Print Rows from an NDB Table

21.4.26 ndb_select_count - Print Row Counts for NDB Tables

21.4.27 ndb_setup.py - Start browser-based Auto-Installer for NDB Cluster

21.4.28 ndb_show_tables - Display List of NDB Tables

21.4.29 ndb_size.pl - NDBCLUSTER Size Requirement Estimator

21.4.30 ndb_top - View CPU usage information for NDB threads

21.4.31 ndb_waiter - Wait for NDB Cluster to Reach a Given Status

21.4.32 Options Common to NDB Cluster Programs - Options Common to NDB

Cluster Programs

21.5 Management of NDB Cluster

21.5.1 Summary of NDB Cluster Start Phases

21.5.2 Commands in the NDB Cluster Management Client

21.5.3 Online Backup of NDB Cluster

21.5.4 MySQL Server Usage for NDB Cluster

21.5.5 Performing a Rolling Restart of an NDB Cluster

21.5.6 Event Reports Generated in NDB Cluster

21.5.7 NDB Cluster Log Messages

21.5.8 NDB Cluster Single User Mode

21.5.9 Quick Reference: NDB Cluster SQL Statements

21.5.10 ndbinfo: The NDB Cluster Information Database

21.5.11 INFORMATION_SCHEMA Tables for NDB Cluster

21.5.12 NDB Cluster Security Issues

21.5.13 NDB Cluster Disk Data Tables

21.5.14 Online Operations with ALTER TABLE in NDB Cluster

21.5.15 Adding NDB Cluster Data Nodes Online

21.5.16 Distributed Privileges Using Shared Grant Tables

21.5.17 NDB API Statistics Counters and Variables

21.6 NDB Cluster Replication

21.6.1 NDB Cluster Replication: Abbreviations and Symbols

21.6.2 General Requirements for NDB Cluster Replication

21.6.3 Known Issues in NDB Cluster Replication

21.6.4 NDB Cluster Replication Schema and Tables

21.6.5 Preparing the NDB Cluster for Replication

21.6.6 Starting NDB Cluster Replication (Single Replication Channel)

21.6.7 Using Two Replication Channels for NDB Cluster Replication

21.6.8 Implementing Failover with NDB Cluster Replication

21.6.9 NDB Cluster Backups With NDB Cluster Replication

21.6.10 NDB Cluster Replication: Multi-Master and Circular Replication

21.6.11 NDB Cluster Replication Conflict Resolution

21.7 NDB Cluster Release Notes

22 Partitioning

22.1 Overview of Partitioning in MySQL

22.2 Partitioning Types

22.2.1 RANGE Partitioning

22.2.2 LIST Partitioning

22.2.3 COLUMNS Partitioning

22.2.4 HASH Partitioning

22.2.5 KEY Partitioning

22.2.6 Subpartitioning

22.2.7 How MySQL Partitioning Handles NULL

22.3 Partition Management

22.3.1 Management of RANGE and LIST Partitions

22.3.2 Management of HASH and KEY Partitions

22.3.3 Exchanging Partitions and Subpartitions with Tables

22.3.4 Maintenance of Partitions

22.3.5 Obtaining Information About Partitions

22.4 Partition Pruning

22.5 Partition Selection

22.6 Restrictions and Limitations on Partitioning

22.6.1 Partitioning Keys, Primary Keys, and Unique Keys

22.6.2 Partitioning Limitations Relating to Storage Engines

22.6.3 Partitioning Limitations Relating to Functions

22.6.4 Partitioning and Locking

23 Stored Objects

23.1 Defining Stored Programs

23.2 Using Stored Routines

23.2.1 Stored Routine Syntax

23.2.2 Stored Routines and MySQL Privileges

23.2.3 Stored Routine Metadata

23.2.4 Stored Procedures, Functions, Triggers, and LAST_INSERT_ID()

23.5 Using Views

23.5.1 View Syntax

23.5.2 View Processing Algorithms

23.5.3 Updatable and Insertable Views

23.5.4 The View WITH CHECK OPTION Clause

23.5.5 View Metadata

23.6 Stored Object Access Control

23.7 Stored Program Binary Logging

23.8 Restrictions on Stored Programs

23.9 Restrictions on Views

24 INFORMATION_SCHEMA Tables

24.1 Introduction

24.2 The INFORMATION_SCHEMA CHARACTER_SETS Table

24.3 The INFORMATION_SCHEMA COLLATIONS Table

24.4 The INFORMATION_SCHEMA COLLATION_CHARACTER_SET_APPLICABILITY

Table

24.5 The INFORMATION_SCHEMA COLUMNS Table

24.6 The INFORMATION_SCHEMA COLUMN_PRIVILEGES Table

24.7 The INFORMATION_SCHEMA ENGINES Table

24.8 The INFORMATION_SCHEMA EVENTS Table

24.9 The INFORMATION_SCHEMA FILES Table

24.10 The INFORMATION_SCHEMA GLOBAL_STATUS and SESSION_STATUS Tables

24.11 The INFORMATION_SCHEMA GLOBAL_VARIABLES and SESSION_VARIABLES

Tables

24.12 The INFORMATION_SCHEMA KEY_COLUMN_USAGE Table

24.13 The INFORMATION_SCHEMA ndb_transid_mysql_connection_map Table

24.14 The INFORMATION_SCHEMA OPTIMIZER_TRACE Table

24.15 The INFORMATION_SCHEMA PARAMETERS Table

24.16 The INFORMATION_SCHEMA PARTITIONS Table

24.17 The INFORMATION_SCHEMA PLUGINS Table

24.18 The INFORMATION_SCHEMA PROCESSLIST Table

24.19 The INFORMATION_SCHEMA PROFILING Table

24.20 The INFORMATION_SCHEMA REFERENTIAL_CONSTRAINTS Table

24.21 The INFORMATION_SCHEMA ROUTINES Table

24.22 The INFORMATION_SCHEMA SCHEMATA Table

24.23 The INFORMATION_SCHEMA SCHEMA_PRIVILEGES Table

24.24 The INFORMATION_SCHEMA STATISTICS Table

24.25 The INFORMATION_SCHEMA TABLES Table

24.26 The INFORMATION_SCHEMA TABLESPACES Table

24.27 The INFORMATION_SCHEMA TABLE_CONSTRAINTS Table

24.28 The INFORMATION_SCHEMA TABLE_PRIVILEGES Table

24.29 The INFORMATION_SCHEMA TRIGGERS Table

24.30 The INFORMATION_SCHEMA USER_PRIVILEGES Table

24.31 The INFORMATION_SCHEMA VIEWS Table

24.32 INFORMATION_SCHEMA InnoDB Tables

24.32.1 The INFORMATION_SCHEMA INNODB_BUFFER_PAGE Table

24.32.2 The INFORMATION_SCHEMA INNODB_BUFFER_PAGE_LRU Table

24.32.3 The INFORMATION_SCHEMA INNODB_BUFFER_POOL_STATS Table

24.32.4 The INFORMATION_SCHEMA INNODB_CMP and INNODB_CMP_RESET

Tables

24.32.5 The INFORMATION_SCHEMA INNODB_CMPMEM and

INNODB_CMPMEM_RESET Tables

24.32.6 The INFORMATION_SCHEMA INNODB_CMP_PER_INDEX and

INNODB_CMP_PER_INDEX_RESET Tables

24.32.7 The INFORMATION_SCHEMA INNODB_FT_BEING_DELETED Table

24.32.8 The INFORMATION_SCHEMA INNODB_FT_CONFIG Table

24.32.9 The INFORMATION_SCHEMA INNODB_FT_DEFAULT_STOPWORD Table .

24.32.10 The INFORMATION_SCHEMA INNODB_FT_DELETED Table

24.32.11 The INFORMATION_SCHEMA INNODB_FT_INDEX_CACHE Table

24.32.12 The INFORMATION_SCHEMA INNODB_FT_INDEX_TABLE Table

24.32.13 The INFORMATION_SCHEMA INNODB_LOCKS Table

24.32.14 The INFORMATION_SCHEMA INNODB_LOCK_WAITS Table

24.32.15 The INFORMATION_SCHEMA INNODB_METRICS Table

24.32.16 The INFORMATION_SCHEMA INNODB_SYS_COLUMNS Table

24.32.17 The INFORMATION_SCHEMA INNODB_SYS_DATAFILES Table

24.32.18 The INFORMATION_SCHEMA INNODB_SYS_FIELDS Table

24.32.19 The INFORMATION_SCHEMA INNODB_SYS_FOREIGN Table

24.32.20 The INFORMATION_SCHEMA INNODB_SYS_FOREIGN_COLS Table

24.32.21 The INFORMATION_SCHEMA INNODB_SYS_INDEXES Table

24.32.22 The INFORMATION_SCHEMA INNODB_SYS_TABLES Table

24.32.23 The INFORMATION_SCHEMA INNODB_SYS_TABLESTATS View

24.32.24 The INFORMATION_SCHEMA INNODB_SYS_VIRTUAL Table

24.32.25 The INFORMATION_SCHEMA INNODB_TEMP_TABLE_INFO Table

24.32.26 The INFORMATION_SCHEMA INNODB_TRX Table

24.33 INFORMATION_SCHEMA Thread Pool Tables

24.33.1 The INFORMATION_SCHEMA TP_THREAD_GROUP_STATE Table

24.33.2 The INFORMATION_SCHEMA TP_THREAD_GROUP_STATS Table

24.33.3 The INFORMATION_SCHEMA TP_THREAD_STATE Table

24.34 INFORMATION_SCHEMA Connection-Control Tables

24.34.1 The INFORMATION_SCHEMA

CONNECTION_CONTROL_FAILED_LOGIN_ATTEMPTS Table

24.35 Extensions to SHOW Statements

25 MySQL Performance Schema

25.1 Performance Schema Quick Start

25.2 Performance Schema Build Configuration

25.3 Performance Schema Startup Configuration

25.4 Performance Schema Runtime Configuration

25.4.1 Performance Schema Event Timing

25.4.2 Performance Schema Event Filtering

25.4.3 Event Pre-Filtering

25.4.4 Pre-Filtering by Instrument

25.4.5 Pre-Filtering by Object

25.4.6 Pre-Filtering by Thread

25.4.7 Pre-Filtering by Consumer

25.4.8 Example Consumer Configurations

25.4.9 Naming Instruments or Consumers for Filtering Operations

25.4.10 Determining What Is Instrumented

25.5 Performance Schema Queries

25.6 Performance Schema Instrument Naming Conventions

25.7 Performance Schema Status Monitoring

25.8 Performance Schema Atom and Molecule Events

25.9 Performance Schema Tables for Current and Historical Events

25.10 Performance Schema Statement Digests

25.11 Performance Schema General Table Characteristics

25.12 Performance Schema Table Descriptions

25.12.1 Performance Schema Table Index

25.12.2 Performance Schema Setup Tables

25.12.3 Performance Schema Instance Tables

25.12.4 Performance Schema Wait Event Tables

25.12.5 Performance Schema Stage Event Tables

25.12.6 Performance Schema Statement Event Tables

25.12.7 Performance Schema Transaction Tables

25.12.8 Performance Schema Connection Tables

25.12.9 Performance Schema Connection Attribute Tables

25.12.10 Performance Schema User-Defined Variable Tables

25.12.11 Performance Schema Replication Tables

25.12.12 Performance Schema Lock Tables

25.12.13 Performance Schema System Variable Tables

25.12.14 Performance Schema Status Variable Tables

25.12.15 Performance Schema Summary Tables

25.12.16 Performance Schema Miscellaneous Tables

25.13 Performance Schema Option and Variable Reference

25.14 Performance Schema Command Options

25.15 Performance Schema System Variables

25.16 Performance Schema Status Variables

25.17 The Performance Schema Memory-Allocation Model

25.18 Performance Schema and Plugins

25.19 Using the Performance Schema to Diagnose Problems

25.19.1 Query Profiling Using Performance Schema

25.20 Migrating to Performance Schema System and Status Variable Tables

25.21 Restrictions on Performance Schema

26 MySQL sys Schema

26.1 Prerequisites for Using the sys Schema

26.2 Using the sys Schema

26.3 sys Schema Progress Reporting

26.4 sys Schema Object Reference

26.4.1 sys Schema Object Index

26.4.2 sys Schema Tables and Triggers

26.4.3 sys Schema Views

26.4.4 sys Schema Stored Procedures

26.4.5 sys Schema Stored Functions

27 Connectors and APIs

27.1 MySQL Connector/C++

27.2 MySQL Connector/J

27.3 MySQL Connector/NET

27.4 MySQL Connector/ODBC

27.5 MySQL Connector/Python

27.6 libmysqld, the Embedded MySQL Server Library

27.6.1 Compiling Programs with libmysqld

27.6.2 Restrictions When Using the Embedded MySQL Server

27.6.3 Options with the Embedded Server

27.6.4 Embedded Server Examples

27.7 MySQL C API

27.7.1 MySQL C API Implementations

27.7.2 Example C API Client Programs

27.7.3 Building and Running C API Client Programs

27.7.4 C API Data Structures

27.7.5 C API Function Overview

27.7.6 C API Function Descriptions

27.7.7 C API Prepared Statements

27.7.8 C API Prepared Statement Data Structures

27.7.9 C API Prepared Statement Function Overview

27.7.10 C API Prepared Statement Function Descriptions

27.7.11 C API Threaded Function Descriptions

27.7.12 C API Embedded Server Function Descriptions

27.7.13 C API Client Plugin Functions

27.7.14 C API Encrypted Connection Support

27.7.15 C API Multiple Statement Execution Support

27.7.16 C API Prepared Statement Handling of Date and Time Values

27.7.17 C API Prepared CALL Statement Support

27.7.18 C API Prepared Statement Problems

27.7.19 C API Automatic Reconnection Control

27.7.20 C API Common Issues

27.8 MySQL PHP API

27.9 MySQL Perl API

27.10 MySQL Python API

27.11 MySQL Ruby APIs

27.11.1 The MySQL/Ruby API

27.11.2 The Ruby/MySQL API

27.12 MySQL Tcl API

27.13 MySQL Eiffel Wrapper

28 Extending MySQL

28.1 MySQL Internals

28.1.1 MySQL Threads

28.1.2 The MySQL Test Suite

28.2 The MySQL Plugin API

28.2.1 Types of Plugins

28.2.2 Plugin API Characteristics

28.2.3 Plugin API Components

28.2.4 Writing Plugins

28.3 MySQL Services for Plugins

- 28.3.1 The Locking Service
- 28.3.2 The Keyring Service
- 28.4 Adding Functions to MySQL
- 28.4.1 Features of the User-Defined Function Interface
- 28.4.2 Adding a User-Defined Function
- 28.4.3 Adding a Native Function
- 28.5 Debugging and Porting MySQL
- 28.5.1 Debugging a MySQL Server
- 28.5.2 Debugging a MySQL Client
- 28.5.3 The DBUG Package
- 29 MySQL Enterprise Edition
- 29.1 MySQL Enterprise Monitor Overview
- 29.2 MySQL Enterprise Backup Overview
- 29.3 MySQL Enterprise Security Overview
- 29.4 MySQL Enterprise Encryption Overview
- 29.5 MySQL Enterprise Audit Overview
- 29.6 MySQL Enterprise Firewall Overview
- 29.7 MySQL Enterprise Thread Pool Overview
- 29.8 MySQL Enterprise Data Masking and De-Identification Overview
- 30 MySQL Workbench

### A MySQL 5.7 Frequently Asked Questions

- A.1 MySQL 5.7 FAQ: General
- A.2 MySQL 5.7 FAQ: Storage Engines
- A.3 MySQL 5.7 FAQ: Server SQL Mode
- A.4 MySQL 5.7 FAQ: Stored Procedures and Functions
- A.5 MySQL 5.7 FAQ: Triggers
- A.6 MySQL 5.7 FAQ: Views
- A.7 MySQL 5.7 FAQ: INFORMATION_SCHEMA
- A.8 MySQL 5.7 FAQ: Migration
- A.9 MySQL 5.7 FAQ: Security
- A.10 MySQL 5.7 FAQ: NDB Cluster
- A.11 MySQL 5.7 FAQ: MySQL Chinese, Japanese, and Korean Character Sets
- A.12 MySQL 5.7 FAQ: Connectors & APIs
- A.13 MySQL 5.7 FAQ: C API, libmysql
- A.14 MySQL 5.7 FAQ: Replication
- A.15 MySQL 5.7 FAQ: MySQL Enterprise Thread Pool
- A.16 MySQL 5.7 FAQ: InnoDB Change Buffer
- A.17 MySQL 5.7 FAQ: InnoDB Data-at-Rest Encryption
- A.18 MySQL 5.7 FAQ: Virtualization Support

- B Errors, Error Codes, and Common Problems
- B.1 Error Message Sources and Components
- B.2 Error Information Interfaces
- B.3 Error Message Reference
- B.3.1 Server Error Message Reference
- B.3.2 Client Error Message Reference
- B.3.3 Global Error Message Reference
- B.4 Problems and Common Errors
- B.4.1 How to Determine What Is Causing a Problem
- B.4.2 Common Errors When Using MySQL Programs
- B.4.3 Administration-Related Issues
- B.4.4 Query-Related Issues
- B.4.5 Optimizer-Related Issues
- B.4.6 Table Definition-Related Issues
- B.4.7 Known Issues in MySQL

https://dev.mysql.com/doc/refman/8.0/en
