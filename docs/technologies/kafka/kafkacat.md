# kafkacat

<https://github.com/edenhill/kafkacat>

kafkacat is a generic non-JVM producer and consumer for Apache Kafka >=0.8, think of it as a netcat for Kafka.

In producer mode kafkacat reads messages from stdin, delimited with a configurable delimiter (-D, defaults to newline), and produces them to the provided Kafka cluster (-b), topic (-t) and partition (-p).

In consumer mode kafkacat reads messages from a topic and partition and prints them to stdout using the configured message delimiter.

There's also support for the Kafka >=0.9 high-level balanced consumer, use the `-G <group>` switch and provide a list of topics to join the group.

kafkacat also features a Metadata list (-L) mode to display the current state of the Kafka cluster and its topics and partitions.

Supports Avro message deserialization using the Confluent Schema-Registry, and generic primitive deserializers (see examples below).

kafkacat is fast and lightweight; statically linked it is no more than 150Kb.

#### Installing

```bash
brew install kafkacat
apt-get install kafkacat
```

## Commands

### Consumers

High-level balanced KafkaConsumer: subscribe to topic1 and topic2 (requires broker >=0.9.0 and librdkafka version >=0.9.1)

```kafkacat -b localhost:9091 -G mygroup topic1 topic2```

Read messages from Kafka 'syslog' topic, print to stdout

```kafkacat -b kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092 -t druid_uncompressed -c 10```

Read the last 2000 messages from 'syslog' topic, then exit

```bash
kafkacat -C -b mybroker -t syslog -p 0 -o -2000 -e

kafkacat -C -b kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092 -t druid_compressed -p 0 -o -2000 -e
```

Consume from all partitions from 'syslog' topic

```kafkacat -C -b mybroker -t syslog```

Output consumed messages in JSON envelope:

```kafkacat -b mybroker -t syslog -J```

Decode Avro key (-s key=avro), value (-s value=avro) or both (-s avro) to JSON using schema from the Schema-Registry:

```kafkacat -b mybroker -t ledger -s avro -r <http://schema-registry-url:8080>```

Decode Avro message value and extract Avro record's "age" field:

```kafkacat -b mybroker -t ledger -s value=avro -r <http://schema-registry-url:8080> | jq .payload.age```

Decode key as 32-bit signed integer and value as 16-bit signed integer followed by an unsigned byte followed by string:

`kafkacat -b mybroker -t mytopic -s key='i$' -s value='hB s'`

`Hint: see./kafkacat -h for all available deserializer options.`

Output consumed messages according to format string:

```kafkacat -b mybroker -t syslog -f 'Topic %t [%p], offset: %o, key: %k, payload: %S bytes: %sn'```

Read the last 100 messages from topic 'syslog' with librdkafka configuration parameter 'broker.version.fallback' set to '0.8.2.1' :

`kafkacat -C -b mybroker -X broker.version.fallback=0.8.2.1 -t syslog -p 0 -o -100 -e`

Print headers in consumer:

`kafkacat -b mybroker -C -t mytopic -f 'Headers: %h: Message value: %sn'`

Enable the idempotent producer, providing exactly-once and strict-orderingproducerguarantees:

`kafkacat -b mybroker -X enable.idempotence=true -P -t mytopic ....`

## Metadata listing

```kafkacat -L -b kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092```

Metadata for all topics (from broker 1: mybroker:9092/1):

```bash
3 brokers:
broker 1 at mybroker:9092
broker 2 at mybrokertoo:9092
broker 3 at thirdbroker:9092
16 topics:
topic "syslog" with 3 partitions:
partition 0, leader 3, replicas: 1,2,3, isrs: 1,2,3
partition 1, leader 1, replicas: 1,2,3, isrs: 1,2,3
partition 2, leader 1, replicas: 1,2, isrs: 1,2
topic "rdkafkatest1_auto_49f744a4327b1b1e" with 2 partitions:
partition 0, leader 3, replicas: 3, isrs: 3
partition 1, leader 1, replicas: 1, isrs: 1
topic "rdkafkatest1_auto_e02f58f2c581cba" with 2 partitions:
partition 0, leader 3, replicas: 3, isrs: 3
partition 1, leader 1, replicas: 1, isrs: 1
```

JSON metadata listing

`kafkacat -b mybroker -L -J`

Pretty-printed JSON metadata listing

`kafkacat -b mybroker -L -J | jq .`

Query offset(s) by timestamp(s)

```bash
kafkacat -b **kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092** -Q -t druid_telemetry_data_Samhi:0:1569048234230

kafkacat -b **kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092** -Q -t druid_telemetry_data_Samhi:0:**1568989500000**
```

Consume messages between two timestamps

```bash
# Working
kafkacat -b **kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092** -C -t druid_telemetry_data_Samhi -o s@1574063938000 -o e@1574063940000 **-**f 'nKey (%K bytes): %ktnValue (%S bytes): %snTimestamp: %TtPartition: %ptOffset: %on--n'

# Redirect logs to different topic
kafkacat -b kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092 -C -t **smap_samhi**-o s@**1568989590000**-o e@**1568989620000 | kafkacat -b**kafka0.example.com:31090,kafka1.example.com:31091,kafka2.example.com:31092 -P -t samhi_logs
```

## Producers

Read messages from stdin, produce to 'syslog' topic with snappy compression

```tail -f /var/log/syslog | kafkacat -b mybroker -t syslog -z snappy```

Produce messages from file (one file is one message)

`kafkacat -P -b mybroker -t filedrop -p 0 myfile1.bin /etc/motd thirdfile.tgz`

Produce a tombstone (a "delete" for compacted topics) for key "abc" by providing an empty message value which-Zinterpretes as NULL:

`echo "abc:" | kafkacat -b mybroker -t mytopic -Z -K:`

Produce with headers:

```echo "hello there" | kafkacat -b mybroker -H "header1=header value" -H "nullheader" -H "emptyheader=" -H "header1=duplicateIsOk"```

## Kafkacat documentation

`Usage: kafkacat <options> [file1 file2 .. | topic1 topic2 ..]]`

`kafkacat - Apache Kafka producer and consumer tool`

<https://github.com/edenhill/kafkacat>

```bash
-C | -P | -L | -Q  Mode: Consume, Produce, Metadata List, Query mode
   -G <group-id>      Mode: High-level KafkaConsumer (Kafka >=0.9 balanced consumer groups)
                      Expects a list of topics to subscribe to
   -t <topic>         Topic to consume from, produce to, or list
   -p <partition>     Partition
   -b <brokers,..>    Bootstrap broker(s) (host [:port])
   -D <delim>         Message delimiter character:
                      a-z.. | \r | \n | \t | \xNN
                      Default: \n
   -E                 Do not exit on non fatal error
   -K <delim>         Key delimiter (same format as -D)
   -c <cnt>           Limit message count
   -F <config-file>   Read configuration properties from file,
                      file format is "property=value".
                      The KAFKACAT_CONFIG=path environment can also be used, but -F takes preceedence.
                      The default configuration file is $HOME/.config/kafkacat.conf
   -X list            List available librdkafka configuration properties
   -X prop=val        Set librdkafka configuration property.
                      Properties prefixed with "topic." are
                      applied as topic properties.
   -X dump            Dump configuration and exit.
   -d <dbg1,...>      Enable librdkafka debugging:
                      all,generic,broker,topic,metadata,feature,queue,msg,protocol,cgrp,security,fetch,interceptor,plugin,consumer,admin,eos
   -q                 Be quiet (verbosity set to 0)
   -v                 Increase verbosity
   -V                 Print version
   -h                 Print usage help

 Producer options:
   -z snappy|gzip|lz4 Message compression. Default: none
   -p -1              Use random partitioner
   -D <delim>         Delimiter to split input into messages
   -K <delim>         Delimiter to split input key and message
   -k <str>           Use a fixed key for all messages.
                      If combined with -K, per-message keys
                      takes precendence.
   -H <header=value>  Add Message Headers (may be specified multiple times)
   -l                 Send messages from a file separated by
                      delimiter, as with stdin.
                      (only one file allowed)
   -T                 Output sent messages to stdout, acting like tee.
   -c <cnt>           Exit after producing this number of messages
   -Z                 Send empty messages as NULL messages
   file1 file2..      Read messages from files.
                      With -l, only one file permitted.
                      Otherwise, the entire file contents will
                      be sent as one single message.

 Consumer options:
   -o <offset>        Offset to start consuming from:
                      beginning | end | stored |
                      <value>  (absolute offset) |
                      -<value> (relative offset from end)
                      s@<value> (timestamp in ms to start at)
                      e@<value> (timestamp in ms to stop at (not included))
   -e                 Exit successfully when last message received
   -f <fmt..>         Output formatting string, see below.
                      Takes precedence over -D and -K.
   -J                 Output with JSON envelope
   -s key=<serdes>    Deserialize non-NULL keys using <serdes>.
   -s value=<serdes>  Deserialize non-NULL values using <serdes>.
   -s <serdes>        Deserialize non-NULL keys and values using <serdes>.
                      Available deserializers (<serdes>):
                        <pack-str> - A combination of:
                                     <: little-endian,
                                     >: big-endian (recommended),
                                     b: signed 8-bit integer
                                     B: unsigned 8-bit integer
                                     h: signed 16-bit integer
                                     H: unsigned 16-bit integer
                                     i: signed 32-bit integer
                                     I: unsigned 32-bit integer
                                     q: signed 64-bit integer
                                     Q: unsigned 64-bit integer
                                     c: ASCII character
                                     s: remaining data is string
                                     $: match end-of-input (no more bytes remaining or a parse error is raised).
                                        Not including this token skips any
                                        remaining data after the pack-str is
                                        exhausted.
   -D <delim>         Delimiter to separate messages on output
   -K <delim>         Print message keys prefixing the message
                      with specified delimiter.
   -O                 Print message offset using -K delimiter
   -c <cnt>           Exit after consuming this number of messages
   -Z                 Print NULL values and keys as "NULL"instead of empty.
                      For JSON (-J) the nullstr is always null.
   -u                 Unbuffered output

 Metadata options (-L):
   -t <topic>         Topic to query (optional)

 Query options (-Q):
   -t <t>:<p>:<ts>    Get offset for topic <t>,
                      partition <p>, timestamp <ts>.
                      Timestamp is the number of milliseconds
                      since epoch UTC.
                      Requires broker >= 0.10.0.0 and librdkafka >= 0.9.3.
                      Multiple -t .. are allowed but a partition
                      must only occur once.

 Format string tokens:
   %s                 Message payload
   %S                 Message payload length (or -1 for NULL)
   %R                 Message payload length (or -1 for NULL) serialized
                      as a binary big endian 32-bit signed integer
   %k                 Message key
   %K                 Message key length (or -1 for NULL)
   %T                 Message timestamp (milliseconds since epoch UTC)
   %h                 Message headers (n=v CSV)
   %t                 Topic
   %p                 Partition
   %o                 Message offset
   \n \r \t           Newlines, tab
   \xXX \xNNN         Any ASCII character
  Example:
   -f 'Topic %t [%p] at offset %o: key %k: %s\n'

 JSON message envelope (on one line) when consuming with -J:
  { "topic": str, "partition": int, "offset": int,
    "tstype": "create|logappend|unknown", "ts": int, // timestamp in milliseconds since epoch
    "headers": { "<name>": str, .. }, // optional
    "key": str|json, "payload": str|json,
    "key_error": str, "payload_error": str } //optional
  (note: key_error and payload_error are only included if deserialization failed)

 Consumer mode (writes messages to stdout):
    kafkacat -b <broker> -t <topic> -p <partition>
  or:
   kafkacat -C -b ...

 High-level KafkaConsumer mode:
   kafkacat -b <broker> -G <group-id> topic1 top2 ^aregex\d+

 Producer mode (reads messages from stdin):
   ... | kafkacat -b <broker> -t <topic> -p <partition>
  or:
   kafkacat -P -b ...

 Metadata listing:
   kafkacat -L -b <broker> [-t <topic>]

 Query offset by timestamp:
  kafkacat -Q -b broker -t <topic>:<partition>:<timestamp>
```

## Example Commands

### metadata listing

```bash
kafkacat -L -b kafka0.example.com:9094,kafka1.example.com,kafka2.example.com

kafkacat -L -b localhost:9094
```

### consumer - get data from bank_data

```bash
kafkacat -C -b my-cluster-kafka-brokers.kafka:9092 -t bank_data -p 0 -o -2000 -e

kafkacat -C -b kafka0.example.com:9094,kafka1.example.com,kafka2.example.com -t test

kafkacat -C -b kafka0.example.com:9094,kafka1.example.com:9094,kafka2.example.com:9094 -t test_bank_data -o -2000 -f 'nKey (%K bytes): %ktnValue (%S bytes): %snTimestamp: %TtPartition: %ptOffset: %on--n'
```

### get size of the packets

```bash
kafkacat -C -b kafka0.example.com:9094,kafka1.example.com:9094,kafka2.example.com:9094 -t test_bank_data -o -2000 -f 'nValue (%S bytes) t Timestamp: %TtPartition: %ptOffset: %o'

kafkacat -C -b kafka0.example.com:9094,kafka1.example.com:9094,kafka2.example.com:9094 -t test_bank_data -o -2000 -f 'n%S,%T,%p,%o'
```

### producer

```bash
echo "hello" | kafkacat -P -b my-cluster-kafka-brokers.kafka:9092 -t test

while true; do echo $(($(date +%s%N)/1000000)) | kafkacat -P -b my-cluster-kafka-brokers.kafka:9092 -t test; sleep 2; echo $(($(date +%s%N)/1000000)); done

kafkacat -b kafka0.example.com:9094,kafka1.example.com:9094,kafka2.example.com:9094 -t test -c 10
```
