# Notifications

```bash
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=xxx:xxx-xxx' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "to": "xxx",
    "data":{
        "body":"Test Notification !!!",
        "title":"Test Title !!!"
    }
}'
```
