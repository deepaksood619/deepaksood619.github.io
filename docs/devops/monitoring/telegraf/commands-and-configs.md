# Commands & Configs

## Telegraf

```bash
#run default conf file
docker run --rm --net=influxdb --name telegraf telegraf

# get conf file for editing
docker run --rm telegraf telegraf config > telegraf.conf

docker run --rm -d --net=influxdb -e "HOST_PROC=/rootfs/proc" -e "HOST_SYS=/rootfs/sys" -e "HOST_ETC=/rootfs/etc" -v $PWD/telegraf.conf:/etc/telegraf/telegraf.conf:ro -v /var/run/docker.sock:/var/run/docker.sock:ro -v /sys:/rootfs/sys:ro -v /proc:/rootfs/proc:ro -v /etc:/rootfs/etc:ro --name telegraf telegraf

docker run --rm -d --net=influxdb -v $PWD/telegraf.conf:/etc/telegraf/telegraf.conf:ro -v /var/run/docker.sock:/var/run/docker.sock:ro -v /rootfs/sys:/sys:ro -v /rootfs/proc:/proc:ro -v /rootfs/etc:/etc:ro -v /var/run/utmp:/var/run/utmp -v --name telegraf telegraf

--add-host="influxdb:192.168.0.73"
```

## Commands

```bash
#conf file
sudo nano /etc/telegraf/telegraf.conf

# restart telegraf and load telegraf.conf
sudo service telegraf restart

sudo service telegraf status

#telegraf logs
tail -f /var/log/telegraf/telegraf.log
```

## Test Telegraf

```bash
telegraf -config telegraf.conf -test

sudo sed -i 's+telegraf:.*+telegraf:x:0:0::/etc/telegraf:/bin/false+g' /etc/passwd
```

## Config

```toml
[global_tags]
  dc = "$CLUSTER"
  user = "$USER_SYSTEM"

[agent]
  interval = "10s"
  round_interval = true
  metric_batch_size = 1000
  metric_buffer_limit = 10000
  collection_jitter = "2s"
  flush_interval = "30s"
  flush_jitter = "2s"
  precision = ""
  debug = $DEBUG
  quiet = false
  logfile = ""
  hostname = "$HOSTNAME_SYSTEM"
  omit_hostname = false

[[outputs.influxdb]]
  urls = ["http://servermonitor.zenatix.com:8086"]
  database = "telegraf"
  username = ""
  password = ""
  namedrop = ["tail", "docker_log"]

[[outputs.elasticsearch]]
  urls = ["http://elasticsearch.zenatix.com:9200"]
  timeout = "1m"
  enable_sniffer = false
  health_check_interval = "0s"
  index_name = "server_log-%Y.%m.%d"
  manage_template = true
  template_name = "telegraf"
  overwrite_template = false
  namepass = ["tail", "docker_log"]

[[inputs.cpu]]
  percpu = true
  totalcpu = true
  collect_cpu_time = false
  report_active = false

[[inputs.disk]]
  ignore_fs = ["tmpfs", "devtmpfs", "devfs", "overlay", "aufs", "squashfs"]

[[inputs.kernel]]

[[inputs.mem]]

[[inputs.processes]]

[[inputs.swap]]

[[inputs.system]]

[[inputs.diskio]]

[[inputs.docker]]
  endpoint = "unix:///var/run/docker.sock"
  gather_services = false
  container_names = []
  timeout = "5s"
  perdevice = true
  total = false

[[inputs.internal]]

[[inputs.interrupts]]

[[inputs.net]]

[[inputs.net_response]]
  protocol = "tcp"
  address = "localhost:80"

[[inputs.netstat]]

[[inputs.tail]]
  files = ["/rootfs/var/log/cron/*.log", "/rootfs/var/log/nginx/error.log"]
  from_beginning = false
  pipe = false
  watch_method = "inotify"
  data_format = "value"
  data_type = "string"

[[inputs.docker_log]]
  endpoint = "unix:///var/run/docker.sock"
  from_beginning = false
  timeout = "5s"
  container_name_include = []
  container_name_exclude = []
  container_state_include = []
  container_state_exclude = []
  docker_label_include = []
  docker_label_exclude = []

[[inputs.logparser]]
  files = ["/rootfs/var/log/nginx/access.log"]
  from_beginning = false
  watch_method = "inotify"

  [inputs.logparser.grok]
    patterns = ["%{COMBINED_LOG_FORMAT}"]
    measurement = "nginx_access_log"
    timezone = "Asia/Kolkata"
```
