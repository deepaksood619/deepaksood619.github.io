# kafka-python

Python client for the Apache Kafka distributed stream processing system. (consumer iterators)

## Kafka Consumer

The consumer iterator returns ConsumerRecords, which are simple namedtuples that expose basic message attributes: topic, partition, offset, key, and value:

```python
from kafka import KafkaConsumer
consumer = KafkaConsumer('my_favorite_topic')
for msg in consumer:
    print (msg)
```

## Kafka Producer

[KafkaProducer](https://kafka-python.readthedocs.io/en/master/apidoc/kafka.html#kafka.KafkaProducer) is a high-level, asynchronous message producer.

```python
from kafka import KafkaProducer
producer = KafkaProducer(bootstrap_servers='localhost:1234')
for _ in range(100):
    producer.send('foobar', b'some_message_bytes')
```

The KafkaProducer can be used across threads without issue, unlike the KafkaConsumer which cannot.

## Kafka Producer Settings

- retries
- batch_size
- linger_ms
- buffer_memory

## Corner cases

- Broker down
- Internet connection down
- Internet connection slow
- Data encoding error
- Ack not received (write error on broker)

## Questions

- Should be asynchronous / block until delivered, and what to do if error arises after some time, when the thread is moved on further.
- How to handle error logs? Use LogStash and Elasticsearch? (Errors like No brokers error or any other error that arises?)

## Errors

- If the net is not there in first attempt, then kafka doesn't run after the net is back.

## Enhancements

- **msgpack** / lz4 / snappy for compression

## References

https://kafka-python.readthedocs.io/en/master

https://kafka-python.readthedocs.io/en/master/apidoc/KafkaProducer.html

https://kafka-python.readthedocs.io/en/master/usage.html

https://github.com/edenhill/kafkacat

https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION

https://towardsdatascience.com/3-libraries-you-should-know-to-master-apache-kafka-in-python-c95fdf8700f2
