# Hands On: Setting Up Encryption

In this exercise, we’ll show you how to put a lot of the things we’ve talked about so far into practice. First, we’ll set up our Kafka environment to use SSL/TLS to encrypt our data in motion by creating certificates, and then we'll configure our brokers to use SSL.

To follow along you’ll need to clone the GitHub repository for this course, so head to [https://github.com/confluentinc/learn-kafka-courses](https://github.com/confluentinc/learn-kafka-courses) and clone the repo. The files for this course are located in the fund-kafka-security folder.

Before we start Kafka, there are a few changes we need to make to get things set up.

1. First, let's take a look at the docker-compose file that has the instructions for Docker, but also our server configuration parameters.

This environment has three instances of ZooKeeper as well as three brokers. With this configuration we have two listeners configured, the default PLAINTEXT listener and the internal BROKER listener. You can also see the advertised listeners that have been configured on the next line.

Let's go ahead and comment both those lines out, and remove the comment from the next two lines adding in the SSL listener. We’ll want to do that for each broker:

```yaml
Broker 1:
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:19092,BROKER://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:19092,BROKER://kafka-1:9092
      #KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:19092,SSL://0.0.0.0:19093,BROKER://0.0.0.0:9092
      #KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:19092,SSL://localhost:19093,BROKER://kafka-1:9092

Broker 2:
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:29092,BROKER://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:29092,BROKER://kafka-2:9092
      #KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:29092,SSL://0.0.0.0:29093,BROKER://0.0.0.0:9092
      #KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:29092,SSL://localhost:29093,BROKER://kafka-2:9092

Broker 3:
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:39092,BROKER://0.0.0.0:9092
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:39092,BROKER://kafka-3:9092
      #KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:39092,SSL://0.0.0.0:39093,BROKER://0.0.0.0:9092
      #KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:39092,SSL://localhost:39093,BROKER://kafka-3:9092
```

Notice we also have `KAFKA_LISTENER_SECURITY_PROTOCOL_MAP` set to accept SSL connections as well. This is the property that determines the communication protocol used by listeners.

2. Next, we'll create the certification authority key and certificate by running the following command in the terminal (in this exercise we are using a certificate that is self-signed; as mentioned in the previous modules if you are using a production environment we recommend using a trusted certificate authority (CA) rather than a self-signed certificate):

```bash
openssl req -new -nodes \
   -x509 \
   -days 365 \
   -newkey rsa:2048 \
   -keyout /home/training/learn-kafka-courses/fund-kafka-security/ca.key \
   -out /home/training/learn-kafka-courses/fund-kafka-security/ca.crt \
   -config /home/training/learn-kafka-courses/fund-kafka-security/ca.cnf
```

We are creating a new key and certificate that is valid for 365 days, uses the rsa:2048 encryption, and uses the values we’ve stored in the `ca.cnf` file on the machine. Feel free to take a look at that file if you are interested in the parameters used as it’s created.

You should see an output similar to the one on-screen as well as the two new files that appear in the `tls` directory.

3. We now need to convert those files over to a `.pem` file:

```bash
cat /home/training/learn-kafka-courses/fund-kafka-security/ca.crt /home/training/learn-kafka-courses/fund-kafka-security/ca.key > /home/training/learn-kafka-courses/fund-kafka-security/ca.pem
```

4. Create the server key and certificate by running the following command:

```bash
openssl req -new \
    -newkey rsa:2048 \
    -keyout /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.key \
    -out /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.csr \
    -config /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.cnf \
    -nodes
```

5. Then sign the certificate with the certificate authority:

```bash
openssl x509 -req \
    -days 3650 \
    -in /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.csr \
    -CA /home/training/learn-kafka-courses/fund-kafka-security/ca.crt \
    -CAkey /home/training/learn-kafka-courses/fund-kafka-security/ca.key \
    -CAcreateserial \
    -out /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.crt \
    -extfile /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.cnf \
    -extensions v3_req
```

6. We’ll need to convert the server certificate over to the pkcs12 format:

```bash
openssl pkcs12 -export \
    -in /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.crt \
    -inkey /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.key \
    -chain \
    -CAfile /home/training/learn-kafka-courses/fund-kafka-security/ca.pem \
    -name kafka-1 \
    -out /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.p12 \
    -password pass:confluent
```

7. Now, we need to create the broker keystore and import the certificate:

```bash
keytool -importkeystore \
    -deststorepass confluent \
    -destkeystore /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka.kafka-1.keystore.pkcs12 \
    -srckeystore /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1.p12 \
    -deststoretype PKCS12  \
    -srcstoretype PKCS12 \
    -noprompt \
    -srcstorepass confluent
```

8. Verify the kafka-1 broker keystore:

```bash
keytool -list -v \
    -keystore /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka.kafka-1.keystore.pkcs12 \
    -storepass confluent
```

9. Last, we'll need to save the credentials:

```bash
sudo tee /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1_sslkey_creds << EOF >/dev/null
confluent
EOF

sudo tee /home/training/learn-kafka-courses/fund-kafka-security/kafka-1-creds/kafka-1_keystore_creds << EOF >/dev/null
confluent
EOF
```

10. While we could do this for each of our brokers, we’ve simplified the steps by scripting all we just did for the two remaining brokers. Feel free to take a look at the file if you're curious; you can redo the same steps for brokers 2 and 3, or just run the command:

```bash
sudo /home/training/learn-kafka-courses/fund-kafka-security/scripts/keystore-create-kafka-2-3.sh
```

11. These saved credentials are needed for the broker ssl.keystore.credentials and ssl.key.credentials broker configuration parameters. These parameters are set for our lab environment brokers in the environment section of the docker-compose.yml file:

```ini
KAFKA_SSL_KEYSTORE_CREDENTIALS: kafka-1_keystore_creds
KAFKA_SSL_KEY_CREDENTIALS: kafka-1_sslkey_creds
```

12. Now we’ll change to the fund-kafka-security directory and start our Docker instance:

```bash
cd fund-kafka-security

docker-compose up -d
```

And make sure that everything is up and running:

`docker-compose ps`

13. Then we’ll open an SSL connection with our kafka-1 broker to verify that things are working:

```bash
openssl s_client -connect localhost:19093 -tls1_3 -showcerts
```

Close the connection with Ctrl+C.

14. We'll also open the connection with brokers 2 and 3 just to make sure that

everything is running as expected:

```bash
openssl s_client -connect localhost:29093 -tls1_3 -showcerts

openssl s_client -connect localhost:39093 -tls1_3 -showcerts
```

Congratulations! You've successfully added an SSL listener to your brokers, created a CA, created broker keystores, imported the CA into your broker keystore, and configured the SSL properties.

In the next exercise, we'll create the Kafka client truststore and import the CA, configure the Kafka client to encrypt data in transit, and require SSL for client-to-broker traffic.
