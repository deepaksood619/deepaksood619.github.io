# Hands On: Requiring Encryption for Broker Traffic

In the previous exercise, we enabled SSL on our Kafka brokers. Now we'll take it even further by creating the Kafka client truststore and importing the CA, configuring the Kafka client to encrypt data in transit using SSL, and requiring SSL for client-broker traffic.

1. If you didn't complete the previous exercise, you can easily set up your environment by running the `mod2-init.sh` inside the `scripts` folder:

`./home/training/learn-kafka-courses/fund-kafka-security/scripts/mod2-init.sh`

This will load in the correct docker-compose file as well as create the certificates and save all the credentials.

2. Start the Docker containers by changing to the fund-kafka-security directory and running

docker-compose:

```bash
cd fund-kafka-security

docker-compose up -d
```

3. The first thing we are going to do is create a new topic:

```bash
kafka-topics \
    --bootstrap-server localhost:19092 \
    --create \
    --topic test-topic \
    --replica-assignment 101:102:103
```

4. Now we need to monitor our network traffic while also producing so we can see and verify that our connection is encrypted. First, we'll set up the monitoring by downloading and running a netshoot Docker image:

```bash
docker run --rm -it --net container:kafka-1  \
    nicolaka/netshoot  \
    tcpdump -c 40 -X port 19092 or port 19093
```

Once that image has been downloaded and started you should see an output similar to the one in the video.

5. Next, we'll open a new terminal window and run our console producer:

```bash
kafka-console-producer \
    --bootstrap-server localhost:19092 \
    --topic test-topic
```

Then produce a message:

`Kafka Rocks!`

Exit the console producer by typing Ctrl-D.

If we head back over to our monitoring terminal we can clearly read both the topic that we wrote to as well as the message "Kafka Rocks" in plaintext.

6. Let's go back to the terminal where we were producing our messages and create the client truststore and import the CA certificate:

```bash
keytool -keystore /home/training/learn-kafka-courses/fund-kafka-security/client-creds/kafka.client.truststore.pkcs12 \
    -alias CARoot \
    -import \
    -file /home/training/learn-kafka-courses/fund-kafka-security/ca.crt \
    -storepass confluent  \
    -noprompt \
    -storetype PKCS12
```

7. This time when we run the console producer, we'll use the SSL port to produce the messages:

```bash
kafka-console-producer \
    --bootstrap-server localhost:19093 \
    --topic test-topic
```

Almost immediately we start to see errors. Any idea why? Consider the command above. While we provided the SSL port, we also needed to provide the configuration settings. We can see what these are by looking at the client-ssl.properties file:

`cat /home/training/learn-kafka-courses/fund-kafka-security/client-creds/client-ssl.properties`

Let's try that command again, but this time provide the configuration file.

First, we'll start our monitoring again:

```bash
docker run --rm -it --net container:kafka-1  \
    nicolaka/netshoot  \
    tcpdump -c 40 -X port 19092 or port 19093
```

Then we'll run the same command, but with the location of the client-ssl.properties file:

```bash
kafka-console-producer \
    --bootstrap-server localhost:19093 \
    --topic test-topic \
    --producer.config /home/training/learn-kafka-courses/fund-kafka-security/client-creds/client-ssl.properties
```

Fantastic, no error messages. Let's send a message:

`Kafka Rocks!`

Then close the producer by typing Ctrl-D.

This time when we look at the output we can see that the message was encrypted and is no longer in plaintext.

8. Now that we know that the encryption is working, let's disable the plaintext listener. Open the docker-compose.yml file and scroll to the kafka-1 broker environment. We are looking for the `KAFKA_LISTENERS` and `KAFKA_ADVERTISED_LISTENERS` lines.

Go ahead and delete the `PLAINTEXT` sections from the line, and then do it for our other two brokers as well.

You can also delete it from the `KAFKA_LISTENER_SECURITY_PROTOCOL_MAP` section.

9. Now recreate our brokers by typing:

`docker-compose up -d`

10. After things have come back up, we'll go ahead and try to retrieve the messages we sent to our test-topic:

```bash
kafka-console-consumer \
    --bootstrap-server localhost:19092 \
    --topic test-topic \
    --from-beginning
```

After you see the errors close the connection with Ctrl-C.

Similar to what we previously saw, the consumer was attempting to use the plaintext listener to retrieve the messages.

11. If we now try to retrieve the messages from the SSL port and provide the configuration file we'll actually see our messages:

```bash
kafka-console-consumer \
    --bootstrap-server localhost:19093 \
    --topic test-topic \
    --consumer.config /home/training/learn-kafka-courses/fund-kafka-security/client-creds/client-ssl.properties \
    --from-beginning
```

Press Ctrl-C to stop the consumer.

Congratulations! You successfully configured Kafka clients to encrypt traffic between themselves and your Kafka brokers (with plaintext listeners disabled).
