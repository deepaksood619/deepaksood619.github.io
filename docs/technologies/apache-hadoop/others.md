# Others

Traditionally, Hadoop saves its data internally in flat sequence files, which is a binary storage format for key value pairs. It has the benefit of being more compact than text and fits well the map-reduce output format. Sequence files can be compressed on value, or block level, to improve its IO profile further. Unfortunately, sequence files are not an optimal solution for Hive since it saves a complete row as a single binary value. Consequently, Hive has to read a full row and decompress it even if only one column is being requested.

## [Azkaban](https://azkaban.github.io/)

**Azkaban** is a batch workflow job scheduler created at LinkedIn to run Hadoop jobs. Azkaban resolves the ordering through job dependencies and provides an easy to use web user interface to maintain and track your workflows.
