# Commands

`git clone -b master <https://github.com/emqx/emqx-docker.git>`

`cd emqx-docker && docker build -t emqx:latest .`

## Docker

`docker run --rm -ti --name=emqx --net=confluent -p 18083:18083 -p 1883:1883 emqx:latest`

## Dashboard

<http://localhost:18083>

## HTTP API for eMQTT

- Create an app in dashboard for creating appid and app password
- Use Basic authentication header for sending HTTP calls
- <http://emqtt.io/docs/v3/rest.html>
- Basic Auth: curl -v --basic -u appid:appsecret -k <http://localhost:8080/api/v3/brokers>
- List all API: <http://localhost:8080/api/v3>
- POST: <http://localhost:8080/api/v3/mqtt/publish>
- Data

```json
{
  "topic": "foo",
  "payload": "hello from mqtt",
  "qos": 1,
  "retain": false,
  "client_id": "mqttjs_ab9069449e"
}
```

## Commands

```bash
./bin/emqx_ctl

mgmt list # List Applications
mgmt insert appid <Name> # Add Application of REST API
mgmt update appid <status> # Update Application of REST API
mgmt lookup appid # Get Application of REST API
mgmt delete appid # Delete Application of REST API

status # Show broker status

broker # Show broker version, uptime and description
broker stats # Show broker statistics of clients, topics, subscribers
broker metrics # Show broker metrics

cluster join <Node> # Join the cluster
cluster leave # Leave the cluster
cluster force-leave <Node> # Force the node leave from cluster
cluster status # Cluster status

acl reload # reload etc/acl.conf

clients list # List all clients
clients show <ClientId> # Show a client
clients kick <ClientId> # Kick out a client

sessions list # List all sessions
sessions list persistent # List all persistent sessions
sessions list transient # List all transient sessions
sessions show <ClientId> # Show a session

routes list # List all routes
routes show <Topic> # Show a route

subscriptions list # List all subscriptions
subscriptions show <ClientId> # Show subscriptions of a client
subscriptions add <ClientId> <Topic> <QoS> # Add a static subscription manually
subscriptions del <ClientId> <Topic> # Delete a static subscription manually

plugins list # Show loaded plugins
plugins load <Plugin> # Load plugin
plugins unload <Plugin> # Unload plugin

bridges list # List bridges
bridges start <Name> # Start a bridge
bridges stop <Name> # Stop a bridge
bridges forwards <Name> # Show a bridge forward topic
bridges add-forward <Name> <Topic> # Add bridge forward topic
bridges del-forward <Name> <Topic> # Delete bridge forward topic
bridges subscriptions <Name> # Show a bridge subscriptions topic
bridges add-subscription <Name> <Topic> <Qos> # Add bridge subscriptions topic
bridges del-subscription <Name> <Topic> # Delete bridge subscriptions topic

vm all # Show info of Erlang VM
vm load # Show load of Erlang VM
vm memory # Show memory of Erlang VM
vm process # Show process of Erlang VM
vm io # Show IO of Erlang VM
vm ports # Show Ports of Erlang VM

mnesia # Mnesia system info

log primary-level # Show the primary log level now
log primary-level <Level> # Set the primary log level
log handlers list # Show log handlers
log handlers set-level <HandlerId> <Level> # Set log level of a log handler

trace list # List all traces started
trace start client <ClientId> <File> [<Level>] # Traces for a client
trace stop client <ClientId> # Stop tracing for a client
trace start topic <Topic> <File> [<Level>] # Traces for a topic
trace stop topic <Topic> # Stop tracing for a topic

## listeners # List listeners
listeners stop <Proto> <Port> # Stop a listener

retainer info # Show the count of retained messages
retainer topics # Show all topics of retained messages
retainer clean # Clean all retained messages

admins add username password tags # Add dashboard user
admins passwd username password # Reset dashboard user password
admins del username # Delete dashboard user

# emqx_auth_username commands
users list # List users
users add username password # Add User
users del username # Delete User
```

## Add Plugin to emqx

```bash
load emqx_auth_username plugin

./bin/emqx_ctl plugins load emqx_auth_username
```

## Plugins emqx.auth.username

```bash
Add username/password by./bin/emqx_ctl usersCLI:

$ ./bin/emqx_ctl users add username password

or by configuringetc/plugins/emqx_auth_username.conf:

auth.username.test = public

./bin/emqx_ctl users add **example_mqtt_client xitanez123**
```

## Others

```bash
docker run --net=example-docker -e EMQTT_URL=<http://emqx:8080> -e EMQTT_API_USER=admin -e EMQTT_API_PASS=public oxygen0211/emqtt-prometheus-exporter
```
