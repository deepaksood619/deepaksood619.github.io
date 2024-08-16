# redis-py

### check pending list in redis

```python
pip install ipython
ipython

from config.redis_setup import redis_client

def get_pending(queue):
 last_id = redis_client.xinfo_groups(queue)[0]["last-delivered-id"]
 return len(redis_client.xread({queue: last_id})[0][1])

get_pending("send:pinpoint_sms")
get_pending("send:offer_email")
get_pending("send:sms")
get_pending("send:offer_sms")
get_pending("send:push_notification")
get_pending("send:offer_push_notification")
get_pending("send:whatsapp_sms")
get_pending("send:whatsapp_offer_sms")

pip install redis==3.4.1
```

```python
import redis

r = redis.Redis(host='redis', port=6379, db=0, password='password')

r.set('foo', 'bar')

r.get('foo')
for key, value in enumerate(r.keys('test:*')):

redis_key = value.decode("utf-8")

size = r.debug_object(redis_key)

print(f'{key},{redis_key},{r.ttl(redis_key)},{r.llen(redis_key)},{size ["serializedlength"]},{size ["ql_uncompressed_size"]}')

for key, value in enumerate(r.keys('test:*')):
    print(key, value)

class redis.Redis(host=u'localhost',port=6379,db=0, password=None, socket_timeout=None, socket_connect_timeout=None, socket_keepalive=None, socket_keepalive_options=None, connection_pool=None, unix_socket_path=None, encoding=u'utf-8', encoding_errors=u'strict', charset=None, errors=None, decode_responses=False, retry_on_timeout=False, ssl=False, ssl_keyfile=None, ssl_certfile=None, ssl_cert_reqs=u'required', ssl_ca_certs=None, max_connections=None, single_connection_client=False, health_check_interval=0)
```

- `get(name)` - Return the value at key name, or None if the key doesn't exist
- `getset(name,value)` - Sets the value at key name to value and returns the old value at key name atomically
- `exists(*names)` Returns the number of names that exist
- `keys(pattern=u'*')` - Returns a list of keys matching pattern
- `append(key,value)` - Appends the string value to the value at key. If key doesn't already exist, create it with a value of value. Returns the new length of the value at key.
- `rpush(name,*values)` - Push values onto the tail of the list name
- `rpushx(name,value)` - Push value onto the tail of the list name if name exists
- `lrange(name,start,end)` - Return a slice of the list name between position start and end. start and end can be negative numbers just like Python slicing notation
- `ttl(name)` - Returns the number of seconds until the key name will expire
- `type(name)` - Returns the type of key name

`set(name,value,ex=None,px=None,nx=False,xx=False, keepttl=False)`

- Set the value at key name to value
- `ex` sets an expire flag on key name for ex seconds.
- `px` sets an expire flag on keynameforpxmilliseconds.
- `nx` if set to True, set the value at key name to value only if it does not exist.
- `xx` if set to True, set the value at key name to value only if it already exists.
- keepttl if True, retain the time to live associated with the key. (Available since Redis 6.0)

## Sentinel

redis-py can be used together with [Redis Sentinel](https://redis.io/topics/sentinel) to discover Redis nodes. You need to have at least one Sentinel daemon running in order to use redis-py's Sentinel support.

https://redis-py.readthedocs.io/en/latest

https://realpython.com/python-redis

https://pypi.org/project/redis

https://github.com/andymccurdy/redis-py

### purge queue

```python

z = redis_client.xpending_range('send:offer_push_notification', 'offer_push_notification_consumer', "-", "+", 10000000)

for i in z:
   redis_client.xack('send:offer_push_notification', 'offer_push_notification_consumer', i['message_id'])

z = redis_client.xpending_range('send:whatsapp_offer_sms', 'offer_whatsapp_consumer', "-", "+", 100000)

for i in z:
   redis_client.xack('send:whatsapp_offer_sms', 'offer_whatsapp_consumer', i['message_id'])
```

### Redis-OM

https://github.com/redis/redis-om-python

https://redis.com/blog/introducing-redis-om-client-libraries
