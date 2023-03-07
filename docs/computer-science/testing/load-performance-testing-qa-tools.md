# Load / Performance Testing/QA Tools

## Website Performance Testing Tools

- <https://gtmetrix.com>
- LightHouse
- <https://www.browserstack.com>
- <https://www.sitespeed.io>
- <https://estimator.dev>

## Bash - add artificial load to the CPU

```bash
while true; do i=0; done

i = 0
x = 2
while True:
  x = x*x
  i += 1
  if i == 32:
    break

while true:
  for i in range(1,1000000):
    pass
```

## dd -- convert and copy a file (Check read and write throughput)

The dd utility copies the standard input to the standard output. Input data is read and written in 512-byte blocks. If input reads are short, input from multiple reads are aggregated to form the output block. When finished, dd displays the number of complete and partial input and output blocks and truncated input records to the standard error output.

### server latency

`dd if=/dev/zero of=/tmp/test2.img bs=512 count=1000 oflag=dsync`

### server throughput

`if=/dev/zero of=/tmp/test1.img bs=1G count=1 oflag=dsync`

## Grinder

## JMeter

TheApache JMeter application is open source software. It is a pure Java application designed to load test an application and measure its performance.

<https://towardsdatascience.com/load-testing-of-a-real-time-pipeline-d32475163285>

## Gatling

Gatling is a highly capable load testing tool. It is designed for ease of use, maintainability and high performance.

Gatlingis an open-source load and performance testing framework based on [Scala](https://en.wikipedia.org/wiki/Scala_(programming_language)), [Akka](https://en.wikipedia.org/wiki/Akka_(toolkit)) and [Netty](https://en.wikipedia.org/wiki/Netty_(software)). The first stable release was published on January 13, 2012. In 2015, Gatling's founder, Stéphane Landelle, created a company (named "Gatling Corp"), dedicated to the development of the open-source project. According to Gatling Corp's official blog, Gatling was downloaded more than 800,000 times (August 2017). In June 2016, Gatling officially presented Gatling FrontLine, Gatling's Enterprise Version with additional features

<https://en.wikipedia.org/wiki/Gatling_(software)>

[https://gatling.io](https://gatling.io/)

## Tsung

Tsung is an open-source multi-protocol distributed load testing tool. It can be used to stress HTTP, WebDAV, SOAP, PostgreSQL, MySQL, LDAP, MQTT, and Jabber/XMPP servers.

## Siege

Siege is an HTTP load testing and benchmarking utility. Siege supports basic authentication, cookies, HTTP, HTTPS and FTP protocols. It lets its user hit a server with a configurable number of simulated clients.

## Httperf

Httperf is a tool for measuring web server performance. It provides a flexible facility for generating various HTTP workloads and for measuring server performance.

## Taurus

Although not specifically related to Perf testing, Taurus provides an automation-friendly framework for continuous testing, including functional and performance.

## Artillery

Artillery is a modern, powerful & easy-to-use load testing and functional testing toolkit. Use it to shipscalable applications that stayperformant &resilientunder high load.

## Goad

Goad takes full advantage of the power of Amazon Lambdas for distributed load testing. You can use goad to launch HTTP loads from up to four AWS regions at once. Each lambda can handle hundreds of concurrent connections, able to achieve peak loads of up to100,000 concurrent requests.

## Apache Bench

abis a tool for benchmarking your Apache Hypertext Transfer Protocol (HTTP) server. It is designed to give you an impression of how your current Apache installation performs.

## See Also

Locust

## HTTP Load Testing Tools

- [wrk](https://github.com/wg/wrk)

```bash
wrk --duration 20s --threads 10 --connections 200 [URL]

wrk -c 5 -t 5 -d 99999 -H "Connection: Close" <http://application-cpu>

wrk -c 5 -t 5 -d 99999 -H "Connection: Close" <https://facebook.com>
```

- **Apache Bench - [Apache HTTP Server Benchmarking Tool](https://httpd.apache.org/docs/2.4/programs/ab.html) (for percentiles)**

```bash
apt install apache2
brew install apache2
ab -c 50 -n 500 -s 90 <http://www.example.com>

ab -c 50 -n 500 -s 90 <http://example-website.staging>

ab -c 100 -n 500 -s 90 <http://example-website.staging> (Success)

ab -c 500 -n 5000 -s 90 <http://example-website.staging> (Fail)

ab -c 500 -n 5000 -s 90 <http://bigbet-nlb-7ac1185001d91c31.elb.us-west-2.amazonaws.com>

## ab -c 500 -n 5000 -s 90 [URL]

## ab -c 500 -n 500 -s 90

ab -c 50 -n 5000 -s 90 -p data.json -T application/json -rk <https://staff.lendenclub.com/core/lender_app/prospect/verify>

-r Don't exit on socket receive errors.

-k Enable the HTTP KeepAlive feature, i.e., perform multiple requests within one HTTP session. Default is no KeepAlive.

```

- [Siege](https://github.com/JoeDog/siege) (for constant load)

```bash
apt-get install -y siege

siege -c2 -t2m [URL]
```

- hey / boom

```bash
hey <https://dev.example.com>
<https://github.com/rakyll/hey>
```

- <https://k6.io>
Open source load testing tool and SaaS for engineering teams

- [**https://fortio.org/**](https://fortio.org/)

Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats.
Fortio runs at a specified query per second (qps) and records an histogram of execution time and calculates percentiles (e.g. p99 ie the response time such as 99% of the requests take less than that number (in seconds, SI unit)). It can run for a set duration, for a fixed number of calls, or until interrupted (at a constant target QPS, or max speed/load per connection/thread).

## Datasets for load testing databases

- TPCC benchmark
- Yahoo! Cloud Serving Benchmark (YCSB)
  - Key value pair workload
  - 20 million tuples
  - Each tuple is 1KB (total database is ~20GB)
  - Each transactions reads/modifies 16 tuples

## Test application

<https://github.com/blueperf>

## References

<https://www.testingexcellence.com/top-10-open-source-performance-testing-tools>

## Locust

Locust is an easy-to-use, distributed, user load testing tool. It is intended for load-testing websites (or other systems) and figuring out how many concurrent users a system can handle.
Locust is a scalable load testing framework written in Python
Locust is completely event-based, and therefore it's possible to support thousands of concurrent users on a single machine. In contrast to many other event-based apps it doesn't use callbacks. Instead it uses light-weight processes, through [gevent](http://www.gevent.org/). Each locust swarming your site is actually running inside its own process (or greenlet, to be correct). This allows you to write very expressive scenarios in Python without complicating your code with callbacks.

## Running Locust Distributed

You start one instance of Locust in master mode using the--masterflag. This is the instance that will be running Locust's web interface where you start the test and see live statistics. The master node doesn't simulate any users itself. Instead you have to start one or -most likely - multiple slave Locust nodes using the--slaveflag, together with the--master-host(to specify the IP/hostname of the master node).

## Commands

```bash
locust -f tasks.py --host localhost:5000
locust --no-reset-stats -f mqttClient.py

locust -f mqttClient.py

locust -f mqttClient.py --master
locust -f mqttClient.py --slave --master-host=[master-ip]

locust -f mqttClient.py --master --expect-slaves=5 #when running locust without webui in distributed mode

locust -f mqttClient.py --no-web -c 1000 -r 100 #running locust without webui

locust -f mqttClient.py --no-web -c 1000 -r 100 --run-time 1h30m #setting time limit for each test

locust -f mqttClient.py --csv=example --no-web -t10m #retrieve test statistics in csv format
locust -f mqttClient.py --no-web -c 2 -r 1
## Dashboard

localhost:8089
<https://locust.io>

<https://docs.locust.io/en/stable/quickstart.html>

<https://docs.locust.io/en/stable/running-locust-distributed.html>

## MQTT Stresser

docker run inovex/mqtt-stresser -broker tcp://[104.211.220.105:1883](http://104.211.220.105:1883/) -num-clients 100 -num-messages 10 -rampup-delay 1s -rampup-size 10 -global-timeout 180s -timeout 20s -username *example_mqtt_client -password xitanez123*
## EMQTT Benchmark

docker run -d --name bench --network example-docker rkosyk/emqtt-benchmark

docker exec -it bench /bin/bash
## Subscribe

create 50K concurrent clients at the arrival rate of 100/sec:

./emqtt_bench_sub -h mqtt.example.com -c 50000 -i 10 -t bench/%i -q 2

./emqtt_bench_sub -h mqtt.example.com -c 2000 -i 10 -t bench/%i -q 2

./emqtt_bench_sub -h mqtt.example.com -u example_mqtt_client -p xitanez123 -c 5 -i 5 -t bench/%i -q 1

./emqtt_bench_sub -h mqtt.example.com -c 2200 -i 10 -t bench/%i -q 2

./emqtt_bench_sub -h emqx -c 10 -i 10 -t bench/%i -q 2
Around 1985 connections are no longer accepted (because of local)
./emqtt_bench_sub -h mqtt.example.com -c 10 -i 10 -t bench/%i -q 2 -C false
## Publish

create 100 clients and each client publish messages at the rate of 100 msg/sec with 256 Byte data size

./emqtt_bench_pub -h mqtt.example.com -c 100 -I 10 -t bench/%i -s 256

./emqtt_bench_pub -h mqtt.example.com -c 10 -I 1 -t bench/%i -s 256 -q 1 -C false
## Final

Subscribe

./emqtt_bench_sub -h mqtt.example.com -u example_mqtt_client -P xitanez123 -c 1000 -i 10 -t bench/%i -q 1 -C false
./emqtt_bench_sub -h mqtt.example.com -u example_mqtt_client -P xitanez123 -c 1 -i 10 -t bench/+ -q 1 -C false
## Publish

## Publish doesn't need persistent connection (clean session = true)

# payload size 10KB

./emqtt_bench_pub -h mqtt.example.com -u example_mqtt_client -P xitanez123 -c 500 -I 10000 -t bench/%i -s 10000 -q 1
# payload size 1KB

./emqtt_bench_pub -h mqtt.example.com -u example_mqtt_client -P xitanez123 -c 100 -I 1000 -t bench/%i -s 1000 -q 1
10000 Clients with 10KB Payload at 30 sec at QoS 1

./emqtt_bench_pub -h mqtt.example.com -u example_mqtt_client -P xitanez123 -c 10000 -I 30000 -t bench/%i -s 10000 -q 1
<https://github.com/emqtt/emqtt_benchmark>
```

## QA Companies

- Browserstack
- Saucelabs
- Lambdatest

## Others

<https://aws.amazon.com/about-aws/whats-new/2021/05/introducing-distributed-load-testing-v1-3>
