# kafka-rest proxy

curl -s -X GET <http://104.211.229.18:8082/topics>

curl -s -X GET <http://104.211.229.18:8082/topics>

## Kafka-connect

curl -s -X GET <http://kafka-connect:8082/connectors>

curl -s -X GET <http://kafka-connect:8082/connector-plugins>

curl -s -X POST -H "Content-Type: application/json" --data '{"name": "smap-mqtt-source-lenses", "config": {"connector.class": "com.datamountaineer.streamreactor.connect.mqtt.source.MqttSourceConnector", "tasks.max":"1", "connect.mqtt.hosts":"tcp://**104.211.220.105:1883**", "connect.mqtt.username":"example_mqtt_client", "connect.mqtt.password":"xitanez123", "connect.mqtt.service.quality":"1", "connect.mqtt.kcql":"**INSERT INTO smap_telemetry_data SELECT * FROM** telemetry**/+/+ WITHCONVERTER=`**com.datamountaineer.streamreactor.connect.converters.source.BytesConverter**`**"}}' <http://localhost:8083/connectors>

curl -s -X POST -H "Content-Type: application/json" --data '{"name": "smap-mqtt-source-lenses-test", "config": {"connector.class": "com.datamountaineer.streamreactor.connect.mqtt.source.MqttSourceConnector", "tasks.max":"1", "connect.mqtt.hosts":"tcp://**104.211.220.105:1883**", "connect.mqtt.username":"example_mqtt_client", "connect.mqtt.password":"xitanez123", "connect.mqtt.service.quality":"1", "connect.mqtt.kcql":"**INSERT INTO smap_telemetry_data_test SELECT * FROM /**telemetry_test**/+/+ WITHCONVERTER=`**com.datamountaineer.streamreactor.connect.converters.source.BytesConverter**`**"}}' <http://localhost:8083/connectors>

curl -s -X POST -H "Content-Type: application/json" --data '{"name": "smap-mqtt-source-lenses-test", "config": {"connector.class": "com.datamountaineer.streamreactor.connect.mqtt.source.MqttSourceConnector", "tasks.max":"1", "connect.mqtt.hosts":"tcp://**104.211.220.105:1883**", "connect.mqtt.username":"example_mqtt_client", "connect.mqtt.password":"xitanez123", "connect.mqtt.service.quality":"1", "connect.mqtt.kcql":"**INSERT INTO smap_telemetry_data_test SELECT * FROM /**telemetry_test**/+/+ WITHCONVERTER=`**com.datamountaineer.streamreactor.connect.converters.source.**JsonSimpleConverter`**"}}' <http://localhost:8083/connectors>

curl -s -X GET <http://localhost:8083/connectors>

curl -s -X GET <http://kafka.example.com:8083/connectors>

curl -X DELETE <http://localhost:8083/connectors/smap-mqtt-source-lenses>

curl -X DELETE <http://localhost:8083/connectors/smap-mqtt-source-lenses-test>
