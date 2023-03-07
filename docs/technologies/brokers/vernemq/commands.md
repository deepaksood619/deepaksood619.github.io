# Commands

```bash
vmq-admin
Usage: vmq-admin <sub-command>
Administrate the cluster.
Sub-commands:
    node        Manage this node
    cluster     Manage this nodes cluster membership
    session     Retrieve session information
  show
  disconnect
  reauthorize
    plugin      Manage plugin system
    listener    Manage listener interfaces
    metrics     Retrieve System Metrics
    api-key     Manage API keys for the HTTP management interface
    trace       Trace various aspects of VerneMQ
  Use --help after a sub-command for more details.

vmq-admin session show
 Usage: vmq-admin session show

   Show and filter information about MQTT sessions

 Default options:
   --client_id --is_online --mountpoint --peer_host --peer_port --user

 Options

   --limit=<NumberOfResults>
       Limit the number of results returned from each node in the cluster.
       Defaults is 100.

   --rowtimeout=<NumberOfMilliseconds>
       Limits the time spent when fetching a single row.
       Default is 100 milliseconds.
   --node
   --mountpoint
   --client_id
   --queue_pid
   --queue_size
   --session_pid
   --is_offline
   --is_online
   --statename
   --deliver_mode
   --offline_messages
   --online_messages
   --num_sessions
   --clean_session
   --is_plugin
   --queue_started_at
   --user
   --peer_host
   --peer_port
   --protocol
   --waiting_acks
   --session_started_at
   --topic
   --qos
   --rap
   --no_local
   --msg_ref
   --msg_qos
   --routing_key
   --dup
   --payload

 Examples
  vmq-admin session show --node --is_online --client_id=client1
  vmq-admin session show --topic --client_id
  vmq-admin session show --topic --client_id --topic=some/topic
  vmq-admin session show --client_id=client1 --queue_started_at --session_started_at

  vmq-admin session show --client_id --clean_session=false

  vmq-admin session show --limit=1000   --client_id --is_online --mountpoint --peer_host --peer_port --user  --queue_size   --offline_messages  --qos

# Commands
docker run -e "DOCKER_VERNEMQ_ALLOW_ANONYMOUS=on" -p 1883:1883 -p 8888:8888 --name vernemq -d erlio/docker-vernemq

vmq-admin session disconnect client-id=client1 --cleanup

vmq-admin listener show

vmq-admin trace client client-id=<client-id>
vmq-admin trace client client-id=/Samhi-01

vmq-admin trace client client-id=/Samhi-42 | grep Samhi-42

vmq-admin trace client client-id=/Samhi-42 | grep Samhi-42 >> trace.log 2>&1 &
```
