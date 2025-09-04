# confluent-kafka

[Streaming Data Governance \| Understanding the Confluent Cloud Stream Governance Platform - YouTube](https://www.youtube.com/playlist?list=PLa7VYi0yPIH1sKNegs6Y8m92PRoYrcQzm)
- ﻿﻿Streaming at Scale
- ﻿﻿Stream Governance
	- Availability
	- Usability
	- Integrity
	- Security
- ﻿﻿**Stream Quality**
- ﻿﻿Schema Registry
- ﻿﻿Stream Discoverability
- ﻿﻿**Stream Catalog**
- ﻿﻿Visualizing Streams
- ﻿﻿**Stream Lineage**
- Security
- Data as a product
- Flink + Tableflow

## Difference between open source Kafka vs Confluent

- hot vs cold storage in partitions
- fetch from replica instead of leader

## Confluent kafka-python

```bash
pip install confluent-kafka
pip install "confluent-kafka [avro]"
```

## Consumer

```python
from confluent_kafka import Consumer, KafkaError

consumer_config = {
    'bootstrap.servers': 'my-cluster-kafka-brokers.kafka:9092',
    'partition.assignment.strategy': 'roundrobin',
    'group.id': 'test_bank_data_consumer',
    'auto.offset.reset': 'earliest',  # earliest/latest
    'enable.auto.commit': 'false',
    # for limiting the amount of messages pre-fetched by librdkafka
    'queued.max.messages.kbytes': '32000',
    'fetch.message.max.bytes': '15728640',
}

c = Consumer(consumer_config)

# callbacks
def print_on_assign(consumer, partitions):
    logging.info(f'Assignment: {partitions}')

    for partition in partitions:
        logging.info(f'watermark: {c.get_watermark_offsets(partition=partition)}')

    logging.info(f'committed offsets for all partitions: {c.committed(partitions=partitions)}')

    logging.info(f'position: {c.position(partitions=partitions)}')

def print_on_revoke(consumer, partitions):
    logging.info(f'Revoke Assignment: {partitions}')

c.subscribe(['bank_data'], on_assign=print_on_assign, on_revoke=print_on_revoke)

timeout_seconds = 1

while True:
    msg = c.poll(1.0)

    # initial error handling
    if msg is None:
        continue

    if msg.error():
        if msg.error().code() == KafkaError._PARTITION_EOF:
            continue
        else:
            logging.error(f'druid consumer error: {msg.error()}')
            break

    logging.debug(f'{msg.topic()} [{msg.partition()}] at offset {msg.offset()}')

    try:
        # get value from message and convert bytes
        final_data = msg.value()
        final_data = json.loads(final_data.decode('utf-8'))
        c.commit()

    except Exception as e:
        try:
            logging.error(f'data/msg: {msg.value()}')
        except Exception:
            logging.exception(f'cannot print data')
        logging.exception(
            f'global exception occurred, Will not attempt for another {timeout_seconds} seconds.')
    else:
        continue

    # exponential back-off if exception occurred
    time.sleep(timeout_seconds)
    timeout_seconds *= 2
```

## Producer

```python
from confluent_kafka import Producer

p = Producer({
    'bootstrap.servers': 'my-cluster-kafka-brokers.kafka:9092',
    'queue.buffering.max.messages': '1000000',
    'queue.buffering.max.kbytes': '1048576',
    'message.max.bytes': '15728640',
    'delivery.timeout.ms': '10000',
    'request.timeout.ms': '5000'
})

def delivery_report(err, msg):
    """ Called once for each message produced to indicate delivery result.
        Triggered by poll() or flush(). """
    if err is not None:
        # raise error and handle using exception
        logging.exception(f'kafka deliver_report error: {err}')
    else:
        logging.debug(f'Message delivered topic: {msg.topic()} partition: {msg.partition()} offset: {msg.offset()}')

p.produce('bank_data', json.dumps(payload), callback=delivery_report)
p.flush()
```

## Others

- [Kora: The Cloud Native Engine for Apache Kafka](https://www.confluent.io/blog/cloud-native-data-streaming-kafka-engine/)

## Resources

- [Confluent Developer - YouTube](https://www.youtube.com/@ConfluentDeveloper)
- [Confluent - YouTube](https://www.youtube.com/@Confluent)
- https://github.com/confluentinc/confluent-kafka-python
- https://docs.confluent.io/current/clients/confluent-kafka-python
- https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION
- https://towardsdatascience.com/3-libraries-you-should-know-to-master-apache-kafka-in-python-c95fdf8700f2
- [Configure Kafka clients for LDAP Authentication in Confluent Platform | Confluent Documentation](https://docs.confluent.io/platform/current/security/authentication/ldap/client-authentication-ldap.html)
- [Confluent Cloud Cluster Types | Confluent Documentation](https://docs.confluent.io/cloud/current/clusters/cluster-types.html)
