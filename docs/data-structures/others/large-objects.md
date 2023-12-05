# Large Objects

## Types of Large Objects (LOBs)

There are different kinds of LOBs which can be stored either in the database or in external files.

### Internal LOBs

LOBs in the database are stored in a way that optimizes the space and provides efficient access within the database tablespaces.

Internal LOBs (BLOBs, CLOBs, NCLOBs) also provide transactional support (Commit, Rollback, and so on) of the database server.

- **BLOBs (Binary LOBs)** used to store unstructured binary (also called "raw") data, such as video clips.
- **CLOBs (Character LOBs)** used to store large blocks of character data from the database character set.
- **NCLOBs (National Character LOBs)** used to store large blocks of character data from the National Character Set.

### Persistent and Temporary LOBs

Internal LOBs can be either persistent or temporary. A persistent LOB is an instance of LOB that exists in a table row in the database. A temporary LOB instance is created when you instantiate a LOB only within the scope of your local application.
A temporary instance would become a persistent instance when you insert the instance into a table row.

Persistent LOBs uses copy semantics method and also participate in database transactions. You can also recover persistent LOB in any events of transaction or system failure & could be easily committed or rolled back. In other words, as per ACID property that pertains to use database objects pertain to use persistent LOBs.

### External LOBs and the BFILE Datatype

External LOBs are data objects stored in operating system files outside the database tablespaces, that have no transactional support from the database server.
BFILEs are having read-only datatypes. The database allows read-only byte stream access to data stored in BFILEs. You cannot write to a BFILE from within your application.

The database uses reference semantics with BFILE columns. Data stored in a table column of type BFILE is physically located in an operating system file, not in the database tablespace.

BFILEs basically used to hold:

- Binary data, which does not change while your application is running, such as graphics.
- Data that is loaded into other large object types, such as a CLOB or BLOB where the data can be manipulated.
- Data which is appropriate for byte-stream access, such as multimedia.
- Read-only data which is relatively large in size, so that it will avoid taking up large amounts database tablespace.

Any storage device accessed by the operating system can hold BFILE data, including hard disk drives, CD-ROMs, CDs and DVDs. The database can access BFILEs provided the operating system supports stream-mode access to the operating system files.

### Security for BFILEs

Basically, a DIRECTORY object is used to access and use BFILEs. The DIRECTORY is an alias name for the actual physical directory in the server file system containing the file. Users are permitted to access the file only if authorized on the DIRECTORY object.

- The DDL (Data Definition Language) SQL statements like CREATE, REPLACE, ALTER, and DROP are used with DIRECTORY database objects.
- The DML (Data Management Language) SQL statements are used to GRANT and REVOKE object privileges on DIRECTORY objects.

Up to 10 BFILES can be opened simultaneously in one session.

| **Large Objects Datatypes** | **Description** |
|---|---|
| Binary Large Object (BLOB) | Stores any kind of data in binary format such as images, audio, and video. |
| Character Large Object (CLOB) | Stores string data in the database having character set format. Used for large set of characters/strings or documents that use the database character. |
| National Character Large Object (NCLOB) | Stores string data in National Character Set format. Used for large set of characters/strings or documents in the National Character Set. Supports characters of varying width format. |
| External Binary File (BFILE) | BFILEs can be accessed from your application on a read-only basis. Use BFILEs to store static data, such as image data, that does not need to be manipulated in applications. |

## References

- https://www.geeksforgeeks.org/types-of-large-objectslobs
- https://www.geeksforgeeks.org/introducing-lob-locators
- https://www.geeksforgeeks.org/basic-operations-and-working-of-lob
- https://www.geeksforgeeks.org/large-objectslobs-for-semi-structured-and-unstructured-data
