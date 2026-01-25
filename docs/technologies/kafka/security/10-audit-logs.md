# Audit Logs

Up until now, we have dealt with protecting your data, your system, and its resources with respect to specific events: the login process as well as access to resources after a successful login.

However, your system may be targeted in some manner outside of these more orderly sequences. For example, a rogue client may spawn fake messages or you may experience a DDoS-style attack on broker resources. If one of these happened, how would you know you had been targeted, and how could you identify the perpetrators as well as the sequence of events? Furthermore, is there a way that you can prevent future attacks?

Audit logs can help because they provide records of everything that has happened on a system. Specifically, they provide:

- **Insight** – They provide insight into situations such as trying to determine if a particular group of users was successful in authenticating and getting access to the correct broker resources after a new ACL was added
- **Security** – They enhance security by letting you identify anomalies and unauthorized operations in the historical record so that you can take action as quickly as possible
- **Impact** – They let you see who, as well as which services, have been impacted by unusual activities, so that you can communicate with stakeholders as the situation progresses
- **Compliance** – They enable you to generate audit reports according to internal policies and external regulations, and also provide an official record in the event of a security breach

Apache Kafka doesn't provide audit logging out of the box. It does, however, support comprehensive audit logging with Log4j, which can be configured to deliver events from separate logger instances to separate destinations (typically files). By configuring separate appenders for the `log4j.properties` file on each broker, you can capture detailed information for auditing, monitoring, and debugging purposes.

## Kafka Authorizer Logger

**`kafka.authorizer.logger`** is used for authorization logging and generates INFO entries for events where access was denied and DEBUG entries for those where access was allowed. Each entry includes the principal, client host, the attempted operation, and the accessed resource (e.g., a topic):

**log4j.properties**

`log4j.logger.kafka.authorizer.logger=DEBUG`

**output**

```ini
DEBUG Principal = User:Alice is Allowed Operation = Write from host = 127.0.0.1 on resource = Topic:LITERAL:customerOrders for request = Produce with resourceRefCount = 1 (kafka.authorizer.logger)

INFO Principal = User:Mallory is Denied Operation = Describe from host = 10.0.0.13 on resource = Topic:LITERAL:customerOrders for request = Metadata with resourceRefCount = 1 (kafka.authorizer.logger)
```

## Kafka Request Logger

The **`kafka.request.logger`** logs the principal and client host at the DEBUG level as well as full details of the request when logging at the TRACE level:

**log4j.properties**

`log4j.logger.kafka.request.logger=DEBUG`

**output**

```ini
DEBUG Completed request:RequestHeader(apiKey=PRODUCE, apiVersion=8, clientId=producer-1, correlationId=6) -- {acks=-1,timeout=30000,partitionSizes=[customerOrders-0=15514]},response: {responses=[{topic=customerOrders,partition_responses=[{partition=0,error_code=0 ,base_offset=13,log_append_time=-1,log_start_offset=0,record_errors=[],error_mes sage=null}]}],throttle_time_ms=0} from connection 127.0.0.1:9094-127.0.0.1:61040-0;totalTime:2.42,requestQueueTime:0.112,local-Time:2.15,remoteTime:0.0,throttleTime:0,responseQueueTime:0.04,sendTime: 0.118,securityProtocol:SASL_SSL,principal:User:Alice,listener:SASL_SSL,clientInf ormation:ClientInformation(softwareName=apache-kafka-java, softwareVersion=2.7.0-SNAPSHOT) (kafka.request.logger)
```

## Considerations

Kafka's logs are bound to be useful to you, whether you use them for compliance, debugging, or anomaly detection. However, there are a few things to keep in mind:

- Make sure there is enough disk space if you are capturing logs for each broker and set an appropriate Log4j retention policy so as not to fill the disks. The request logger is particularly voluminous so you may only want to use it for debugging or within small retention windows.
- Since logs are per broker, you will need to consolidate all of the broker logs from the cluster to get a complete picture of your system.
- Kafka doesn't provide log analysis or visualization so we recommend that you use something like the "ELK" stack (Elasticsearch, Logstash, and Kibana) for these purposes. You might also direct your log output to a Kafka topic on another cluster and then perform a streaming analysis of your audit events!
