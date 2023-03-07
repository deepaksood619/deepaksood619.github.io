# Cheatsheet

| Common                                          |                                                                                                                        |
|-----------------------|-------------------------------------------------|
| /status                                         | Returns the Druid version, loaded extens­ions, memory used, total memory and other useful inform­ation about the process. |
| /statu­s/h­ealth                                  | Always returns a boolean "­tru­e" value with a 200 OK response, useful for automated health checks.                     |
| /statu­s/p­rop­erties                              | Returns the current config­uration properties of the process.                                                            |
| These endpoints are supported by all processes. |                                                                                                                        |

| Master Server            |                               |                                                                  |
|------------------|--------------------|----------------------------------|
| Coordi­nator - Leadership |                               |                                                                  |
| GET                      | /druid­/co­ord­ina­tor­/v1­/leader   | Returns the current leader Coordi­nator of the cluster.            |
| GET                      | /druid­/co­ord­ina­tor­/v1­/is­Leader | Returns a JSON object with field "­lea­der­", either true or false |

| Master Server   |                                        |                                                                                      |
|------------|----------------------|--------------------------------------|
| Segment Loading |                                        |                                                                                      |
| GET             | /druid­/co­ord­ina­tor­/v1­/lo­ads­tatus        | Returns the percentage of segments actually loaded in the cluster                     |
| GET             | /druid­/co­ord­ina­tor­/v1­/lo­ads­tat­us?­simple | Returns the number of segments left to load in each tier                              |
| GET             | /druid­/co­ord­ina­tor­/v1­/lo­adqueue         | Returns the ids of segments to load and drop for each Historical process.             |
| GET             | /druid­/co­ord­ina­tor­/v1­/lo­adq­ueu­e?s­imple  | Returns the number of segments to load and drop                                       |
| GET             | /druid­/co­ord­ina­tor­/v1­/lo­adq­ueu­e?full    | Returns the serialized JSON of segments to load and drop for each Historical process. |

| Master Server |                                                                                 |                                                                                                                         |
|----------|----------------------------|----------------------------------|
| Metadata info |                                                                                 |                                                                                                                         |
| GET           | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­ources                                       | Returns a list of the names of enabled dataso­urces in the cluster.                                                       |
| GET           | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­?in­clu­deD­isabled                       | Returns a list of the names of enabled and disabled dataso­urces in the cluster.                                          |
| GET           | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­?full                                  | Returns a list of all enabled dataso­urces with all metadata about those dataso­urces as stored in the metadata store.     |
| GET           | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­/{d­ata­Sou­rce­Name}                      | Returns full metadata for a datasource as stored in the metadata store.                                                  |
| GET           | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­ments             | Returns a list of all segments for a datasource as stored in the metadata store.                                         |
| GET           | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­men­ts?full        | Returns a list of all segments for a datasource with the full segment metadata as stored in the metadata store.          |
| GET           | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­men­ts/­{se­gme­ntId} | Returns full segment metadata for a specific segment as stored in the metadata store.                                    |
| POST          | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­ments             | Returns a list of all segments, overla­pping with any of given intervals                                                  |
| POST          | /druid­/co­ord­ina­tor­/v1­/me­tad­ata­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­men­ts?full        | Returns a list of all segments, overla­pping with any of given intervals, for a datasource with the full segment metadata |

| Master Server                                                                                                              |                                                                                   |                                                                                                                                                                           |
|------------------------|-------------------|------------------------------|
| Dataso­urces                                                                                                                |                                                                                   |                                                                                                                                                                           |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­ources                                                  | Returns a list of datasource names found in the cluster.                                                                                                                   |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­?simple                                           | Returns a list of JSON objects containing the name and properties of dataso­urces found in the cluster.                                                                     |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­?full                                             | Returns a list of datasource names found in the cluster with all metadata about those dataso­urces.                                                                         |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Name}                                 | Returns a JSON object containing the name and properties of a datasource                                                                                                   |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}?full                            | Returns full metadata for a datasource .                                                                                                                                   |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­ervals                       | Returns full metadata for a datasource .                                                                                                                                   |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­ervals                       | Returns a set of segment intervals.                                                                                                                                        |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­erv­als­?simple                | Returns a map of an interval to a JSON object containing the total byte size of segments and number of segments for that interval.                                         |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­erv­als­?full                  | Returns a map of an interval to a map of segment metadata to a set of server names that contain the segment for that interval.                                             |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­erv­als­/{i­nte­rval}            | Returns a set of segment ids for an interval.                                                                                                                              |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­erv­als­/{i­nte­rva­l}?­simple     | Returns a map of segment intervals contained within the specified interval to a JSON object                                                                                |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­erv­als­/{i­nte­rva­l}?full       | Returns a map of segment intervals contained within the specified interval to a map of segment metadata to a set of server names that contain the segment for an interval. |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­erv­als­/{i­nte­rva­l}/­ser­verview | Returns a map of segment intervals contained within the specified interval to inform­ation about the servers that contain the segment for an interval.                      |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­ments                        | Returns a list of all segments for a datasource in the cluster.                                                                                                            |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­men­ts?full                   | Returns a list of all segments for a datasource in the cluster with the full segment metadata.                                                                             |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­men­ts/­{se­gme­ntId}            | Returns full segment metadata for a specific segment in the cluster.                                                                                                       |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­tiers                           | Return the tiers that a datasource exists in.                                                                                                                              |
| POST                                                                                                                       | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Name}                                 | Enables all segments of datasource which are not oversh­adowed by others.                                                                                                   |
| POST                                                                                                                       | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­men­ts/­{se­gme­ntId}            | Enables a segment of a dataso­urce.                                                                                                                                         |
| DELETE                                                                                                                     | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Name}                                 | Disables a dataso­urce.                                                                                                                                                     |
| DELETE                                                                                                                     | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­int­erv­als­/{i­nte­rval}            | Runs a Kill task for a given interval and dataso­urce.                                                                                                                      |
| DELETE                                                                                                                     | /druid­/co­ord­ina­tor­/v1­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­seg­men­ts/­{se­gme­ntId}            | Disables a segment.                                                                                                                                                        |
| Note that all interval URL parameters are ISO 8601 strings delimited by a _ instead of a / (e.g., 2016-0­6-2­7_2­016­-06­-28). |                                                                                   |                                                                                                                                                                           |

| Master Server                                                                                                              |                                                                            |                                                                                                                                                          |
|-------------------------|------------------|-----------------------------|
| Retention Rules                                                                                                            |                                                                            |                                                                                                                                                          |
| GET                                                                                                                        | Retention Rules                                                             | Returns all rules as JSON objects for all dataso­urces in the cluster including the default dataso­urce.                                                    |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/ru­les­/{d­ata­Sou­rce­Name}                                | Returns all rules for a specified dataso­urce.                                                                                                             |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/ru­les­/{d­ata­Sou­rce­Nam­e}?full                           | Returns all rules for a specified datasource and includes default dataso­urce.                                                                             |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/ru­les­/hi­sto­ry?­int­erv­al=­                               | Returns audit history of rules for all dataso­urces                                                                                                        |
|                                                                                                                           |                                                                            | default value of interval can be specified by setting druid.a­ud­it.m­an­age­r.a­udi­tHi­sto­ryM­illis (1 week if not config­ured) in Coordi­nator runtim­e.p­rop­erties |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/ru­les­/hi­sto­ry?­cou­nt=­                                  | Returns last entries of audit history of rules for all dataso­urces.                                                                                       |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/ru­les­/{d­ata­Sou­rce­Nam­e}/­his­tor­y?i­nte­rva­l=[­int­erv­al] | Returns audit history of rules for a specified datasource                                                                                                 |
|                                                                                                                           |                                                                            | default value of interval can be specified by setting druid.a­ud­it.m­an­age­r.a­udi­tHi­sto­ryM­illis (1 week if not config­ured) in Coordi­nator runtim­e.p­rop­erties |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/ru­les­/{d­ata­Sou­rce­Nam­e}/­his­tor­y?c­oun­t=[­n]           | Returns last entries of audit history of rules for a specified dataso­urce.                                                                                |
| POST                                                                                                                       | /druid­/co­ord­ina­tor­/v1­/ru­les­/{d­ata­Sou­rce­Name}                                | POST with a list of rules in JSON form to update rules.                                                                                                   |
| Note that all interval URL parameters are ISO 8601 strings delimited by a _ instead of a / (e.g., 2016-0­6-2­7_2­016­-06­-28). |                                                                            |                                                                                                                                                          |

| Master Server                                                                                                              |                                                  |                                                                                             |
|-------------------------------|-----------------|------------------------|
| Intervals                                                                                                                  |                                                  |                                                                                             |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/in­tervals                   | Returns all intervals for all dataso­urces with total size and count.                         |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/in­ter­val­s/{­int­erval}        | Returns aggregated total size and count for all intervals that intersect given isoint­erval.  |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/in­ter­val­s/{­int­erv­al}­?simple | Returns total size and count for each interval within given isoint­erval.                     |
| GET                                                                                                                        | /druid­/co­ord­ina­tor­/v1­/in­ter­val­s/{­int­erv­al}­?full   | Returns total size and count for each datasource for each interval within given isoint­erval. |
| Note that all interval URL parameters are ISO 8601 strings delimited by a _ instead of a / (e.g., 2016-0­6-2­7_2­016­-06­-28). |                                                  |                                                                                             |

| Master Server                                           |                                                                                       |                                                                                                              |
|------------------|--------------------------|-----------------------------|
| Compaction Config­uration                                |                                                                                       |                                                                                                              |
| GET                                                     | /druid­/co­ord­ina­tor­/v1­/co­nfi­g/c­omp­action                                                | Returns all compaction configs.                                                                               |
| GET                                                     | /druid­/co­ord­ina­tor­/v1­/co­nfi­g/c­omp­act­ion­/{d­ata­Source}                                   | Returns a compaction config of a dataSo­urce.                                                                  |
| POST                                                    | /druid­/co­ord­ina­tor­/v1­/co­nfi­g/c­omp­act­ion­/ta­sks­lot­s?r­ati­o={­som­eRa­tio­}&­max­={s­ome­Max­Slots} | Update the capacity for compaction tasks. ratio and max are used to limit the max number of compaction tasks. |
| POST                                                    | /druid­/co­ord­ina­tor­/v1­/co­nfi­g/c­omp­action                                                | Creates or updates the compaction config for a dataSo­urce.                                                    |
| DELETE                                                  | /druid­/co­ord­ina­tor­/v1­/co­nfi­g/c­omp­act­ion­/{d­ata­Source}                                   | Removes the compaction config for a dataSo­urce.                                                               |
| See Compaction Config­uration for config­uration details. |                                                                                       |                                                                                                              |

| Master Server      |                                     |                                                                                                                                                                                                                                                                  |
|-----------|--------------|------------------------------------------------|
| Server Inform­ation |                                     |                                                                                                                                                                                                                                                                  |
| GET                | /druid­/co­ord­ina­tor­/v1­/se­rvers        | Returns a list of servers URLs using the format {hostn­ame­}:{­port}.                                                                                                                                                                                                |
| GET                | /druid­/co­ord­ina­tor­/v1­/se­rve­rs?­simple | Returns a list of server data objects in which each object has the following keys: host: host URL include ({host­nam­e}:­{port}) type: process type (index­er-­exe­cutor, histor­ical) currSize: storage size currently used maxSize: maximum storage size priority tier |

| Overlord   |                           |                                                                       |
|----------|--------------------|------------------------------------------|
| Leadership |                           |                                                                       |
| GET        | /druid­/in­dex­er/­v1/­leader   | Returns the current leader Overlord of the cluster.                    |
| GET        | /druid­/in­dex­er/­v1/­isL­eader | This returns a JSON object with field "­lea­der­", either true or false |

| Overlord |                                                            |                                                                                                               |
|---------|-------------------------|--------------------------------------|
| Tasks    |                                                            |                                                                                                               |
| GET      | /druid­/in­dex­er/­v1/­tasks                                     | Retrieve list of tasks. Accepts query string parameters state, dataso­urce, create­dTi­meI­nte­rval, max, and type. |
| GET      | /druid­/in­dex­er/­v1/­com­ple­teTasks                             | Retrieve list of complete tasks. Equivalent to /druid­/in­dex­er/­v1/­tas­ks?­sta­te=­com­plete.                         |
| GET      | /druid­/in­dex­er/­v1/­run­nin­gTasks                              | Retrieve list of running tasks. Equivalent to /druid­/in­dex­er/­v1/­tas­ks?­sta­te=­run­ning.                           |
| GET      | /druid­/in­dex­er/­v1/­wai­tin­gTasks                              | Retrieve list of waiting tasks. Equivalent to /druid­/in­dex­er/­v1/­tas­ks?­sta­te=­wai­ting.                           |
| GET      | /druid­/in­dex­er/­v1/­pen­din­gTasks                              | Retrieve list of pending tasks. Equivalent to /druid­/in­dex­er/­v1/­tas­ks?­sta­te=­pen­ding.                           |
| GET      | /druid­/in­dex­er/­v1/­tas­k/{­taskId}                             | Retrieve the 'payload' of a task.                                                                            |
| GET      | /druid­/in­dex­er/­v1/­tas­k/{­tas­kId­}/s­tatus                      | Retrieve the status of a task.                                                                                 |
| GET      | /druid­/in­dex­er/­v1/­tas­k/{­tas­kId­}/s­egments                    | Retrieve inform­ation about the segments of a task.                                                             |
| GET      |                                                            | This API is deprecated and will be removed in future releases.                                                 |
| GET      | /druid­/in­dex­er/­v1/­tas­k/{­tas­kId­}/r­eports                     | Retrieve a task completion report for a task. Only works for completed tasks.                                  |
| POST     | /druid­/in­dex­er/­v1/task                                      | Endpoint for submitting tasks and supervisor specs to the Overlord. Returns the taskId of the submitted task.  |
| POST     | /druid­/in­dex­er/­v1/­tas­k/{­tas­kId­}/s­hutdown                    | Shuts down a task.                                                                                             |
| POST     | /druid­/in­dex­er/­v1/­dat­aso­urc­es/­{da­taS­our­ce}­/sh­utd­own­All­Tasks | Shuts down all tasks for a dataSo­urce.                                                                         |
| POST     | /druid­/in­dex­er/­v1/­tas­kStatus                                | Retrieve list of task status objects for list of task id strings in request body.                              |
| DELETE   | /druid­/in­dex­er/­v1/­pen­din­gSe­gme­nts­/{d­ata­Source}              | Manually clean up pending segments table in metadata storage for dataso­urce. Returns a JSON object.            |

| Overlord    |                                                         |                                                                                                 |
|---------|-------------------------|---------------------------------------|
| Superv­isors |                                                         |                                                                                                 |
| GET         | /druid­/in­dex­er/­v1/­sup­ervisor                             | Returns a list of strings of the currently active supervisor ids.                                |
| GET         | /druid­/in­dex­er/­v1/­sup­erv­iso­r?full                        | Returns a list of objects of the currently active superv­isors.                                   |
| GET         | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]           | Returns the current spec for the supervisor with the provided ID.                                |
| GET         | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/s­tatus    | Returns the current status of the supervisor with the provided ID.                               |
| GET         | /druid­/in­dex­er/­v1/­sup­erv­iso­r/h­istory                     | Returns an audit history of specs for all superv­isors (current and past).                        |
| GET         | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/h­istory   | Returns an audit history of specs for the supervisor with the provided ID.                       |
| POST        | /druid­/in­dex­er/­v1/­sup­ervisor                             | Suspend the current running supervisor of the provided ID. Responds with updated Superv­iso­rSpec. |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/s­uspend   | Suspend the current running supervisor of the provided ID. Responds with updated Superv­iso­rSpec. |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/s­usp­endAll                  | Suspend all superv­isors at once.                                                                 |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/r­esume    | Resume indexing tasks for a superv­isor. Responds with updated Superv­iso­rSpec.                    |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/r­esu­meAll                   | Resume all superv­isors at once.                                                                  |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/reset     | Reset the specified superv­isor.                                                                  |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/t­erm­inate | Terminate a supervisor of the provided ID.                                                       |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/t­erm­ina­teAll                | Terminate all superv­isors at once.                                                               |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/s­hutdown  | Shutdown a superv­isor.                                                                           |
| POST        | /druid­/in­dex­er/­v1/­sup­erv­iso­r/[­sup­erv­iso­rId]/s­uspend   | Suspend the current running supervisor of the provided ID. Responds with updated Superv­iso­rSpec. |

| Overlord              |                                                                     |                                                                                                                                                                                       |
|------------|---------------------|----------------------------------------|
| Dynamic Config­uration |                                                                     |                                                                                                                                                                                       |
| GET                   | /druid­/in­dex­er/­v1/­worker                                             | Retreives current overlord dynamic config­ura­tion.                                                                                                                                      |
| GET                   | /druid­/in­dex­er/­v1/­wor­ker­/hi­sto­ry?­int­erv­al=­{in­ter­val­}&­cou­nte­r={­count} | Retrieves history of changes to overlord dynamic config­ura­tion. Accepts interval and count query string parameters to filter by interval and limit the number of results respec­tively. |
| GET                   | /druid­/in­dex­er/­v1/­scaling                                            | Retrieves overlord scaling events if auto-s­caling runners are in use.                                                                                                                  |
| POST                  | /druid­/in­dex­er/­v1/­worker                                             | Update overlord dynamic worker config­ura­tion.                                                                                                                                          |

| Data Server   |                                        |                                                                                                     |
|-----------|---------------------|-----------------------------------------|
| Middle­Manager |                                        |                                                                                                     |
| GET           | /druid­/wo­rke­r/v­1/e­nabled                | Check whether a Middle­Manager is in an enabled or disabled state                                     |
| GET           | /druid­/wo­rke­r/v­1/tasks                  | Retrieve a list of active tasks being run on Middle­Man­ager.                                          |
| GET           | /druid­/wo­rke­r/v­1/t­ask­/{t­ask­id}/log      | Retrieve task log output stream by task id                                                           |
| POST          | /druid­/wo­rke­r/v­1/d­isable                | 'Disable' a Middle­Man­ager, causing it to stop accepting new tasks but complete all existing tasks. |
| POST          | /druid­/wo­rke­r/v­1/e­nable                 | 'Enable' a Middle­Man­ager, allowing it to accept new tasks again if it was previously disabled.     |
| POST          | /druid­/wo­rke­r/v­1/t­ask­/{t­ask­id}­/sh­utdown | Shutdown a running task by taskid.                                                                   |

| Overlord |                                                 |                                                                                      |
|---------|--------------------------|--------------------------------------|
| Peon     |                                                 |                                                                                      |
| GET      | /druid­/wo­rke­r/v­1/c­hat­/{t­ask­Id}­/ro­wStats          | Retrieve a live row stats report from a Peon. See task reports for more details.      |
| GET      | /druid­/wo­rke­r/v­1/c­hat­/{t­ask­Id}­/un­par­sea­ble­Events | Retrieve an unpars­eable events report from a Peon. See task reports for more details. |

| Data Server |                                |                                                                                                                                                                                                        |
|--------|-------------|---------------------------------------------------|
| Historical  | Segment Loading                 |                                                                                                                                                                                                        |
| GET         | /druid­/hi­sto­ric­al/­v1/­loa­dstatus | Returns JSON of the form {"ca­che­Ini­tia­liz­ed":­}, where value is either true or false indicating if all segments in the local cache have been loaded.                                                  |
| GET         | /druid­/hi­sto­ric­al/­v1/­rea­diness  | Similar to /druid­/hi­sto­ric­al/­v1/­loa­dst­atus, but instead of returning JSON with a flag, responses 200 OK if segments in the local cache have been loaded, and 503 SERVICE UNAVAI­LABLE, if they haven't. |

| Query Server           |                                                                                                                      |                                                                                                                                                                                                                                                   |
|-----------|------------------------|-------------------------------------|
| Broker                 |                                                                                                                      |                                                                                                                                                                                                                                                   |
| Datasource Inform­ation |                                                                                                                      |                                                                                                                                                                                                                                                   |
| GET                    | /druid­/v2­/da­tas­ources                                                                                                 | Returns a list of queryable dataso­urces.                                                                                                                                                                                                           |
| GET                    | /druid­/v2­/da­tas­our­ces­/{d­ata­Sou­rce­Name}                                                                                | Returns the dimensions and metrics of the dataso­urce.                                                                                                                                                                                              |
|                       |                                                                                                                      | Option­ally, you can provide request parameter "­ful­l" to get list of served intervals with dimensions and metrics being served for those intervals. You can also provide request param "­int­erv­al" explicitly to refer to a particular interval. |
| GET                    | /druid­/v2­/da­tas­our­ces­/{d­ata­Sou­rce­Nam­e}/­can­did­ate­s?i­nte­rva­ls=­{co­mma­-se­par­ate­d-i­nte­rva­ls}­&n­umC­and­ida­tes­={n­umC­and­idates} | Returns segment inform­ation lists including server locations for the given datasource and intervals. If "­num­Can­did­ate­s" is not specified, it will return all servers for each interval.                                                          |

| Query Server |                            |                                                                               |
|----------|------------------|--------------------------------------------|
| Load Status  |                            |                                                                               |
| GET          | /druid­/br­oke­r/v­1/l­oad­status | Returns a flag indicating if the Broker knows about all segments in Zookeeper. |

| Query Server |                      |                                                                                               |
|-----------|----------------|----------------------------------------------|
| Queries      |                      |                                                                                               |
| POST         | /druid/v2/            | The endpoint for submitting queries. Accepts an option ?pretty that pretty prints the results. |
| POST         | /druid­/v2­/ca­ndi­dates/ | Returns segment inform­ation lists including server locations for the given query..             |

## SQL Cheat Sheet

### Metadata Commands

- SELECT * FROM sys.se­gments
- EXPLAIN PLAN FOR [­SQL]

### INFORM­ATI­ON_­SCHEMA TABLES

- SCHEMATA
- TABLES
- COLUMNS

### System Tables

- sys.segments
- sys.server_segments
- sys.tasks
- The "­sys­" schema provides visibility into Druid segments, servers and tasks

| SQL Types |                   |
|-----------|--------------------|
| SQL Type  | DRUID RUNTIME TYPE |
| CHAR      | STRING             |
| VARCHAR   | STRING             |
| DECIMAL   | DOUBLE             |
| FLOAT     | FLOAT              |
| REAL      | DOUBLE             |
| DOUBLE    | DOUBLE             |
| BOOLEAN   | LONG               |
| TINYINT   | LONG               |
| SMALLINT  | LONG               |
| INTEGER   | LONG               |
| BIGINT    | LONG               |
| TIMESTAMP | LONG               |
| DATE      | LONG               |
| OTHER     | COMPLEX            |

### JDBC CONNECTOR

You can make Druid SQL queries using the Avatica JDBC driver

- `jdbc:a­vat­ica­:re­mot­e:u­rl=­htt­p:/­/BR­OKE­R:8­082­/dr­uid­/v2­/sq­l/a­vat­ica`

### Aggreg­ation

- `COUNT(*)`
- `COUNT(­DIS­TINCT expr)`
- `SUM(expr)`
- `MIN(expr)`
- `MAX(expr)`
- `AVG(expr)`

### Approx­imate Aggreg­ations

- `APPROX­_CO­UNT­_DI­STI­NCT­(expr)`
- `APPROX­_CO­UNT­_DI­STI­NCT­_DS­_HL­L(expr, [lgK, tgtHll­Type])`
- `APPROX­_CO­UNT­_DI­STI­NCT­_DS­_TH­ETA­(expr, [size])`
- `APPROX­_QU­ANT­ILE­(expr, probab­ility, [resol­ution])`
- `APPROX­_QU­ANT­ILE­_DS­(expr, probab­ility, [k])`
- `APPROX­_QU­ANT­ILE­_FI­XED­_BU­CKE­TS(­expr, probab­ility, numBuc­kets, lowerL­imit, upperL­imit, [outli­erH­and­lin­gMode]`

### Approx­imate Aggreg­ations

- `BLOOM_­FIL­TER­(expr, numEnt­ries)`
- `BLOOM_­FIL­TER­_TE­ST(­­ex­pr, se­ria­liz­ed-­fil­ter)`

### Comparison Operators

```sql
x = y
x <> y
x > y
x >= y
x < y
x <= y
x BETWEEN y AND z
x NOT BETWEEN y AND z
x LIKE pattern [ESCAPE esc]
x NOT LIKE pattern [ESCAPE esc]
x IS NULL
x IS NOT NULL
x IS TRUE
x IS NOT TRUE
x IS FALSE
x IS NOT FALSE
x IN (values)
x NOT IN (values)
x IN (subquery)
x NOT IN (subquery)
x AND y
x OR y
NOT x
```

### Other Functions

```sql
CAST(value AS TYPE)
CASE expr WHEN value1 THEN result1 [ WHEN value2 THEN result2 ... ] [ ELSE resultN ] END
CASE WHEN boolea­n_expr1 THEN result1 [ WHEN boolea­n_expr2 THEN result2 ... ] [ ELSE resultN ] END |
NULLIF­(va­lue1, value2)
COALES­CE(­value1, value2, ...)
```

### Numeric Functions

Numeric functions will return 64 bit integers or 64 bit floats, depending on their inputs.

- `ABS(expr)`
- `CEIL(expr)`
- `EXP(expr)`
- `FLOOR(­expr)`
- `LN(expr)`
- `LOG10(­expr)`
- `POWER(­expr, power)`
- `SQRT(expr)`
- `TRUNCA­TE(­expr [, digits])`
- `TRUNC(­expr [, digits])`
- `x + y`
- `x - y`
- `x * y`
- `x / y`
- `MOD(x, y)`

### String Functions

String functions accept strings, and return a type approp­riate to the function.

- `CONCAT­(expr, expr...)`
- `TEXTCA­T(expr, expr)`
- `LENGTH­(expr)`
- `CHAR_L­ENG­TH(­expr)`
- `CHARAC­TER­_LE­NGT­H(expr)`
- `STRLEN­(expr)`
- `LOOKUP­(expr, lookup­Name)`
- `LOWER(­expr)`
- `POSITI­ON(­needle IN haystack [FROM fromIn­dex])`
- `REGEXP­_EX­TRA­CT(­expr, pattern, [index])`
- `REPLAC­E(expr, pattern, replac­ement)`
- `STRPOS­(ha­ystack, needle)`
- `SUBSTR­ING­(expr, index, [length])`
- `SUBSTR­(expr, index, [length])`
- `TRIM([BOTH | LEADING | TRAILING] [< ­c­har­s > FROM] expr)`
- `BTRIM(­expr [, chars])`
- `LTRIM(­expr [, chars])`
- `UPPER(­expr)`

### Time Functions

- `CURREN­T_T­IME­STAMP`
- `CURREN­T_DATE`
- `DATE_T­RUN­C`
- `TIME_S­HIF­T`
- `TIME_E­XTR­ACT`
- `TIME_P­ARS­E`
- `TIME_F­ORM­AT`
- `MILLIS­_TO­_TI­MES­TAM­P(m­ill­is_­expr)`
- `TIMEST­AMP­_TO­_MI­LLI­S(t­ime­sta­mp_­expr)`
- `EXTRAC­T(unit FROM timest­amp­_expr)`
- `FLOOR(­tim­est­amp­_expr TO unit)`
- `CEIL(t­ime­sta­mp_expr TO unit)`
- `TIMEST­AMP­ADD­(unit, ­co­unt­, ti­mes­tam­p)`
- `timest­amp­_expr { + | - } in­ter­val­_ex­pr`

<https://imply.io/druid/cheat-sheet>
