# Confluent Platform

- Confluent Secrets and Identity Management (CSID)
	- [GitHub - confluentinc/csid-secrets-providers: Enables use of external third-party systems for storing/retrieving key/value pairs with Confluent clusters.](https://github.com/confluentinc/csid-secrets-providers)
- [Manage Confluent Platform Licenses \| Confluent Documentation](https://docs.confluent.io/platform/current/installation/license.html)

## Installation

[Quick Start for Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/get-started/platform-quickstart.html)

```bash
curl -O https://packages.confluent.io/archive/8.1/confluent-8.1.1.tar.gz

tar -xvf confluent-8.1.1.tar.gz

cd confluent-8.1.1

export CONFLUENT_HOME=`pwd`

export PATH=$PATH:$CONFLUENT_HOME/bin

confluent-hub install --no-prompt confluentinc/kafka-connect-datagen:latest

confluent local services start

confluent local services status

# new terminal - installation of Control Center
curl -O https://packages.confluent.io/confluent-control-center-next-gen/archive/confluent-control-center-next-gen-2.3.1.tar.gz

tar -xvf confluent-control-center-next-gen-2.3.1.tar.gz

cd confluent-control-center-next-gen-2.3.1

export CONTROL_CENTER_HOME=`pwd`

# Edit etc/confluent-control-center/prometheus-generated.yml, locate the alertmanagers section, and change the target port from 9093 to 9098.
alerting:
  alertmanagers:
  - static_configs:
    - targets:
      - localhost:9098

bash bin/prometheus-start

# in new terminal
cd confluent-control-center-next-gen-2.3.1

export CONTROL_CENTER_HOME=`pwd`

export ALERTMANAGER_PORT=9098
bash bin/alertmanager-start

# in new terminal
cd confluent-control-center-next-gen-2.3.1

export CONTROL_CENTER_HOME=`pwd`

# Edit $CONTROL_CENTER_HOME/etc/confluent-control-center/control-center-dev.properties and uncomment or add the following line:
confluent.controlcenter.alertmanager.url=http://localhost:9098

./bin/control-center-start $CONTROL_CENTER_HOME/etc/confluent-control-center/control-center-dev.properties

# Open Control Center in your browser at http://localhost:9021
```

#### Install Community Components only

```bash
# Confluent Platform
curl -O https://packages.confluent.io/archive/8.1/confluent-8.1.1.zip

# Confluent Platform using only Confluent Community components
curl -O https://packages.confluent.io/archive/8.1/confluent-community-8.1.1.zip

unzip confluent-8.1.1.zip

export CONFLUENT_HOME=~/confluent-8.1.1

export PATH=$PATH:$CONFLUENT_HOME/bin

confluent --help
```

[Install Confluent Platform using ZIP and TAR Archives \| Confluent Documentation](https://docs.confluent.io/platform/current/installation/installing_cp/zip-tar.html)

### Cleanup

```bash
confluent local services stop

confluent local destroy
```

### Using docker

```bash
git clone https://github.com/confluentinc/cp-all-in-one.git

cd cp-all-in-one

git checkout 8.1.1-post

cd cp-all-in-one

docker-compose up -d

✔ Network cp-all-in-one_default  Created       0.0s
✔ Container flink-jobmanager     Started       0.5s
✔ Container broker               Started       0.5s
✔ Container prometheus           Started       0.5s
✔ Container flink-taskmanager    Started       0.5s
✔ Container flink-sql-client     Started       0.5s
✔ Container alertmanager         Started       0.5s
✔ Container schema-registry      Started       0.5s
✔ Container connect              Started       0.6s
✔ Container rest-proxy           Started       0.6s
✔ Container ksqldb-server        Started       0.6s
✔ Container control-center       Started       0.7s

docker compose ps
```

[Quick Start for Confluent Platform \| Confluent Documentation](https://docs.confluent.io/platform/current/get-started/platform-quickstart.html)

## System Requirements

| Component and Service        | Default Port | Internal Only? |
| ---------------------------- | ------------ | -------------- |
| **KRaft Controller**         |              |                |
| - peer-to-peer communication | 9093         | Yes            |
| - Jolokia*                   | 7770         | No             |
| **Kafka Broker**             |              |                |
| - Interbroker listener       | 9091         | Yes            |
| - External listener          | 9092         | No             |
| - Metadata Service (MDS)     | 8090         | No             |
| - Confluent Server REST API  | 8090         | No             |
| - Jolokia*                   | 7771         | No             |
| **(Standalone) REST Proxy**  | 8082         | No             |
| **Confluent Control Center** | 9021         | No             |
| **Kafka Connect**            |              |                |
| - REST API                   | 8083         | No             |
| - Jolokia*                   | 7773         | No             |
| **ksqlDB Server**            |              |                |
| - REST API                   | 8088         | No             |
| - Jolokia*                   | 7774         | No             |
| **Schema Registry**          |              |                |
| - REST API                   | 8081         | No             |
| - Jolokia*                   | 7772         | No             |

`*` Reserve the Jolokia ports only when you deploy Confluent Platform using Ansible.

[Confluent Platform System Requirements \| Confluent Documentation](https://docs.confluent.io/platform/current/installation/system-requirements.html)
