# Stages

A Snowflake stage is a location in cloud storage that you use to load and unload data from a table.

### Internal stages

Used to store data files internally within Snowflake. Each user and table in Snowflake gets an internal stage by default for staging data files.

Internal stages can be further categorized as follows:

- **User stages:** Each of these stages pertains to a specific user, so they'll be assigned to every user by default for storing files.
- **Table stages:** Each of these stages pertains to a specific database table, so they'll be assigned to every table by default.
- **Internal named stages:** Compared to the user or table stages, these stages offer a greater degree of flexibility. As these are some of the Snowflake objects, all operations that can be performed on objects can also be performed on internally named stages. These stages must be created manually and we can specify file formats when creating these stages.

### External stages

Used to store data files externally in Amazon S3, Google Cloud Storage, or Microsoft Azure. If your data is already stored in these cloud storage services, you can use an external stage to load data in Snowflake tables.
