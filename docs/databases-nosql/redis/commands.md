# Commands

## Installation

```bash
brew install redis
apt-get install redis

docker run --name redis -p 6379:6379 redis

docker run --name redis -e ALLOW_EMPTY_PASSWORD=yes --rm -p 6379:6379 bitnami/redis:latest
docker exec -it redis bash
```

```yaml
redis:
    stdin_open: true
    tty: true
    restart: "no"
    image: bitnami/redis:5.0.8
    container_name: redis
    env_file:
        - decision_engine.env
    ports:
        - 6379:6379
    healthcheck:
        test: "redis-cli -h localhost -p 6379 ping"
        interval: 10s
        timeout: 10s
        retries: 5
    volumes:
    - ./data/redis:/bitnami/redis/data
```

## Redis Insight

`docker run -rm -it -v redisinsight:/db -p 8001:8001 redislabs/redisinsight`

## Kubernetes

https://github.com/bitnami/charts/tree/master/bitnami/redis

https://raw.githubusercontent.com/bitnami/charts/master/bitnami/redis/values-production.yaml

`helm upgrade --install redis --values k8s/infra/redis-values-production.yaml --namespace apps bitnami/redis`

| **Redis** | **Redis Cluster** |
|---|---|
| Supports multiple databases | Supports only one database. Better if you have a big dataset |
| Single write point (single master) | Multiple write points (multiple masters) |
| ![image](../../../media/Redis_Commands-image1.jpg) |  |

### Commands

```bash
redis-cli ping

# staging decision-engine
redis-cli -h localhost -p 6379 -a 'a6ad92769ef04b711eea18dccfff85ea' ping

redis-cli -h redis -p 6379 -a a6ad92769ef04b711eea18dccfff85ea ping
redis-cli -h redis-dashboard -p 6379 -a a6ad92769ef04b711eea18dccfff85ea

# decision engine
redis-cli -h localhost -p 6379 -a a6ad92769ef04b711eea18dccfff85ea
# streams
redis-cli -h localhost -p 6379 -a y2Tb8FaxGyk6qm1s

# find out all keys with no ttl set
redis-cli -a a6ad92769ef04b711eea18dccfff85ea --no-auth-warning --scan | while read LINE ; do TTL=`redis-cli --no-auth-warning -a a6ad92769ef04b711eea18dccfff85ea ttl "$LINE"`; if [ $TTL -eq -1 ]; then echo "$LINE"; fi; done;

# DML
CONFIG GET *
info # https://redis.io/commands/info
config set maxmemory <value>
config set maxmemory 2gb
config set maxmemory 5gb
config set maxmemory 48gb
config set maxmemory 80gb
maxmemory-policy

# Cleanups
BGREWRITEAOF #Compress AOF

# auto-aof-rewrite-percentage
CONFIG SET auto-aof-rewrite-percentage 50
https://www.oreilly.com/library/view/redis-4x-cookbook/9781783988167/64284aa9-a324-4383-b9f4-9db3ae95ffb4.xhtml

# DDL
# -n for setting database
redis-cli -h redis-dashboard -p 6379 -a DGfYvYv5b55LwMmBiPgctk1CtKvxlouQ1jqNn70sQ -n 1

redis-cli -a DGfYvYv5b55LwMmBiPgctk1CtKvxlouQ1jqNn70sQ -p 6379. FLUSHALL

redis-cli
subscribe <channel_name>
publish <channel_name> "message"
flushdb

keys *
keys sms:key:*

> set mykey somevalue
> set mykey 100 ex 10 # mykey will expire after 10 seconds
> get mykey
> incr counter
> incrby counter 50
> mset a 10 b 20 c 30
> mget a b c
> del mykey
> exists mykey
> type mykey
> expire mykey 5 # 5 second expiry time for key
> ttl key # how many seconds to expire
> pexpire mykey 5 # 5 milliseconds time for key
> pttl key # how many milliseconds to expire
> rpush mylist 1 2 3 4 5 "foo bar"
> lrange mylist 0 -1
> rpop mylist
> lpop mylist
> ltrim mylist 0 2 # removes elements other than index 0 to 2
> brpop tasks 5
> blpop tasks 5
> rpoplpush
> brpoplpush
> llen mylist
> hmset user:1000 username antirez birthyear 1977 verified 1
> hget user:1000 username
> hgetall user:1000
> DEBUG OBJECT <key> #show size of key

> scan 0 MATCH sms:score:*
> sscan myset 0 match f*
> hscan seen: 0
> zscan queue:default 0

# Delete redis stream - send:whatsapp_offer_sms
redis-cli -h localhost -p 6379 -a y2Tb8FaxGyk6qm1s
auth default y2Tb8FaxGyk6qm1s
del send:whatsapp_offer_sms
del send:offer_push_notification

https://redis.io/commands/scan

ACL GENPASS
ACL GETUSER default

Some of the commands that are considered dangerous include: FLUSHDB, FLUSHALL, KEYS, PEXPIRE, DEL, CONFIG, SHUTDOWN, BGREWRITEAOF, BGSAVE, SAVE, SPOP, SREM, RENAME, and DEBUG.
```
