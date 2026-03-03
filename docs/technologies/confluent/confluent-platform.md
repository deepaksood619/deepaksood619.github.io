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

### Cleanup

```bash
confluent local services stop

confluent local destroy
```
