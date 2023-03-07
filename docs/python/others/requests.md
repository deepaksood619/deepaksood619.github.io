# Requests

```python
r = requests.get('https://api.github.com/user', auth=('user', 'pass'))
r.status_code
r.headers ['content-type']
r.encoding
r.text
r.json()

payload = {'cust_id': cust_id}
resp = requests.get('http://localhost/score', params=payload, timeout=1)

With Query String
 import requests

 url = "https://desk.zoho.com/api/v1/tickets/search"

 querystring = {"ticketNumber":"1532"}

 headers = {
     'orgId': "653254821",
     'Authorization': "Zoho-oauthtoken 1000.606931199362ee10a466f1bf41f9f58a.b70d5103f939a7402b5889953e82f52c",
     }

 response = requests.request("GET", url, headers=headers, params=querystring)

 response = requests.post(url, headers=headers, data=dict_obj)
 response = requests.post(url, headers=headers, json=json_obj)

    print(response.text)
```

<https://julien.danjou.info/python-and-fast-http-clients>

## httpx

HTTPX is a fully featured HTTP client for Python 3, which provides sync and async APIs, and support for both HTTP/1.1 and HTTP/2.

<https://github.com/encode/httpx>

<https://www.youtube.com/watch?v=m_a0fN48Alw>
