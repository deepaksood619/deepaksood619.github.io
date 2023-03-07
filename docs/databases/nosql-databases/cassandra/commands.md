# Commands

docker run --name cas1 -p 9042:9042 -e CASSANDRA_CLUSTER_NAME=MyCluster -e CASSANDRA_ENDPOINT_SNITCH=GossipingPropertyFileSnitch -e CASSANDRA_DC=datacenter1 -d cassandra
docker run --name cas2 -e CASSANDRA_SEEDS="$(docker inspect --format='{{ .NetworkSettings.IPAddress }}' cas1)" -e CASSANDRA_CLUSTER_NAME=MyCluster -e CASSANDRA_ENDPOINT_SNITCH=GossipingPropertyFileSnitch -e CASSANDRA_DC=datacenter1 -d cassandra:latest
docker exec -it cas1 nodetool status

docker exec -it cas1 nodetool ring

docker exec -it cas1 nodetool getendpoints killrvideo videos '1645ea59-14bd-11e5-a993-8138354b7e31'
docker exec -it cas2 cqlsh

## cqlsh - Cassandra cli tools

brew install cassandra

./bin/cqlsh

## nodetool

- assassinate Forcefully remove a dead node without re-replicating any data. Use as a last resort if you cannot removenode
- bootstrap Monitor/manage node's bootstrap process
- cleanup Triggers the immediate cleanup of keys no longer belonging to a node. By default, clean all keyspaces
- clearsnapshot Remove the snapshot with the given name from the given keyspaces. If no snapshotName is specified we will remove all snapshots
- compact Force a (major) compaction on one or more tables or user-defined compaction on given SSTables
- compactionhistory Print history of compaction
- compactionstats Print statistics on compactions
- decommission Decommission the *node I am connecting to*
- describecluster Print the name, snitch, partitioner and schema version of a cluster
- describering Shows the token ranges info of a given keyspace
- disableautocompaction Disable autocompaction for the given keyspace and table
- disablebackup Disable incremental backup
- disablebinary Disable native transport (binary protocol)
- disablegossip Disable gossip (effectively marking the node down)
- disablehandoff Disable storing hinted handoffs
- disablehintsfordc Disable hints for a data center
- disablethrift Disable thrift server
- drain Drain the node (stop accepting writes and flush all tables)
- enableautocompaction Enable autocompaction for the given keyspace and table
- enablebackup Enable incremental backup
- enablebinary Reenable native transport (binary protocol)
- enablegossip Reenable gossip
- enablehandoff Reenable future hints storing on the current node
- enablehintsfordc Enable hints for a data center that was previsouly disabled
- enablethrift Reenable thrift server
- failuredetector Shows the failure detector information for the cluster
- flush Flush one or more tables
- garbagecollect Remove deleted data from one or more tables
- gcstats Print GC Statistics
- getcompactionthreshold Print min and max compaction thresholds for a given table
- getcompactionthroughput Print the MB/s throughput cap for compaction in the system
- getconcurrentcompactors Get the number of concurrent compactors in the system.
- **getendpoints Print the end points that owns the key**

returns the IP addresses of the node(s)which store the partitions withthe respective partition key value

- getinterdcstreamthroughput Print the Mb/s throughput cap for inter-datacenter streaming in the system
- getlogginglevels Get the runtime logging levels
- getsstables Print the sstable filenames that own the key
- getstreamthroughput Print the Mb/s throughput cap for streaming in the system
- gettimeout Print the timeout of the given type in ms
- gettraceprobability Print the current trace probability value
- gossipinfo Shows the gossip information for the cluster
- help Display help information
- **info Print node information (uptime, load, ...)**
- invalidatecountercache Invalidate the counter cache
- invalidatekeycache Invalidate the key cache
- invalidaterowcache Invalidate the row cache
- join Join the ring
- listsnapshots Lists all the snapshots along with the size on disk and true size.
- move Move node on the token ring to a new token
- netstats Print network information on provided host (connecting node by default)
- pausehandoff Pause hints delivery process
- proxyhistograms Print statistic histograms for network operations
- rangekeysample Shows the sampled keys held across all keyspaces
- rebuild Rebuild data by streaming from other nodes (similarly to bootstrap)
- rebuild_index A full rebuild of native secondary indexes for a given table
- refresh Load newly placed SSTables to the system without restart
- refreshsizeestimates Refresh system.size_estimates
- reloadlocalschema Reload local node schema from system tables
- reloadtriggers Reload trigger classes
- relocatesstables Relocates sstables to the correct disk
- removenode Show status of current node removal, force completion of pending removal or remove provided ID
- repair Repair one or more tables
- replaybatchlog Kick off batchlog replay and wait for finish
- resetlocalschema Reset node's local schema and resync
- resumehandoff Resume hints delivery process
- **ring Print information about the token ring**
- scrub Scrub (rebuild sstables for) one or more tables
- setcachecapacity Set global key, row, and counter cache capacities (in MB units)
- setcachekeystosave Set number of keys saved by each cache for faster post-restart warmup. 0 to disable
- setcompactionthreshold Set min and max compaction thresholds for a given table
- setcompactionthroughput Set the MB/s throughput cap for compaction in the system, or 0 to disable throttling
- setconcurrentcompactors Set number of concurrent compactors in the system.
- sethintedhandoffthrottlekb Set hinted handoff throttle in kb per second, per delivery thread.
- setinterdcstreamthroughput Set the Mb/s throughput cap for inter-datacenter streaming in the system, or 0 to disable throttling
- setlogginglevel Set the log level threshold for a given class. If both class and level are empty/null, it will reset to the initial configuration
- setstreamthroughput Set the Mb/s throughput cap for streaming in the system, or 0 to disable throttling
- settimeout Set the specified timeout in ms, or 0 to disable timeout
- settraceprobability Sets the probability for tracing any given request to value. 0 disables, 1 enables for all requests, 0 is the default
- snapshot Take a snapshot of specified keyspaces or a snapshot of the specified table
- **status Print cluster information (state, load, IDs, ...)**
- statusbackup Status of incremental backup
- statusbinary Status of native transport (binary protocol)
- statusgossip Status of gossip
- statushandoff Status of storing future hints on the current node
- statusthrift Status of thrift server
- stop Stop compaction
- **stopdaemon Stop cassandra daemon**
- tablehistograms Print statistic histograms for a given table
- tablestats Print statistics on tables
- toppartitions Sample and print the most active partitions for a given column family
- tpstats Print usage statistics of thread pools
- truncatehints Truncate all hints on the local node, or truncate hints for the endpoint(s) specified.
- upgradesstables Rewrite sstables (for the requested tables) that are not on the current version (thus upgrading them to said current version)
- verify Verify (check data checksum for) one or more tables
- version Print cassandra version
- viewbuildstatus Show progress of a materialized view build
