# JWT

JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with theHMACalgorithm) or a public/private key pair usingRSAorECDSA

JWT is a very modern, simple and secure approach which extends for Json Web Tokens. Json Web Tokens are a stateless solution for authentication. So there is no need to store any session state on the server, which of course is perfect for restful APIs. Restful APIs should always be stateless, and the most widely used alternative to authentication with JWTs is to just store the user's log-in state on the server using sessions. But then of course does not follow the principle that says that restful APIs should be stateless and that's why solutions like JWT became popular and effective.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus onsignedtokens. Signed tokens can verify theintegrityof the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

## When should you use JSON Web Tokens?

- **Authorization:** This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.
- **Information Exchange:** JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed - for example, using public/private key pairs - you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

JWT consists of three parts (seperated by "."):

#### Header

containing the type of the token and the hashing algorithm

The header typically consists of two parts: the token's type, and the hashing algorithm that is being used.

```json
{
 "alg": "HS256",
 "typ": "JWT"
}
```

#### Payload

containing the claims

```json
{
 "sub": "65165751325",
 "name": "Rajat S",
 "admin": true
}
```

#### Signature

which can be calculated as follows if you chose HMAC SHA256: HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)

The signature is used to verify that the message was not altered before reaching its destination. This is usually done by using private keys.

These three parts are usually encoded into three Base64-URI strings that are separated by a.in between them.

![image](../../../media/Authentication_JWT-image1.jpg)

## Payload

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims:registered,public, andprivateclaims.

- [Registered claims](https://tools.ietf.org/html/rfc7519#section-4.1): These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are:iss(issuer),exp(expiration time),sub(subject),aud(audience), and [others](https://tools.ietf.org/html/rfc7519#section-4.1).

Notice that the claim names are only three characters long as JWT is meant to be compact.
The JWT specification defines some registered claim names and defines how they should be used. PyJWT supports these registered claim names:

- "exp" (Expiration Time) Claim
- "nbf" (Not Before Time) Claim
- "iss" (Issuer) Claim
- "aud" (Audience) Claim
- "iat" (Issued At) Claim

- [Public claims](https://tools.ietf.org/html/rfc7519#section-4.2): These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml) or be defined as a URI that contains a collision resistant namespace.- [Private claims](https://tools.ietf.org/html/rfc7519#section-4.3): These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.

An example payload could be:

```json
{
 "sub": "1234567890",
 "name": "John Doe",
 "admin": true
}
```

The payload is then Base64 Url encoded to form the second part of the JSON Web Token.

Do note that for signed tokens this information, though protected against tampering, is readable by anyone. Do not put secret information in the payload or header elements of a JWT unless it is encrypted.

## RFCs

- JWT - JSON Web Token
- JWS - JSON Web Signature
- JWE - JSON Web Encryption
- JWK - JSON Web Key
- JWA - JSON Web Algorithms

https://jwt.io

https://jwt.io/introduction

https://medium.com/@rahulgolwalkar/pros-and-cons-in-using-jwt-json-web-tokens-196ac6d41fb4

https://gist.github.com/deepaksood619/4cc5656a42158927ca6006a1ec7d5eea

https://www.pingidentity.com/en/company/blog/posts/2019/jwt-security-nobody-talks-about.html

https://auth0.com/learn/json-web-tokens

[OAuth Vs JWT | What is the difference? | Tech Primers](https://www.youtube.com/watch?v=a9R3Gq1BKxI)

[What Is JWT and Why Should You Use JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM)

[100% Stateless with JWT (JSON Web Token) by Hubert Sablonnière](https://www.youtube.com/watch?v=67mezK3NzpU&t=24s&ab_channel=Devoxx)

## If you can decode JWT, how are they secure?

JWTs can be either signed, encrypted or both. If a token is signed, but not encrypted, everyone can read its contents, but when you don't know the private key, you can't change it. Otherwise, the receiver will notice that the signature won't match anymore.

The short answer is that JWT doesn't concern itself with encryption. It cares about validation. That is to say, it can always get the answer for "Have the contents of this token been manipulated"? This means user manipulation of the JWT token is futile because the server will know and disregard the token. The server adds a signature based on the payload when issuing a token to the client. Later on it verifies the payload and matching signature.

The logical question is what is the motivation for not concerning itself with encrypted contents?

1. The simplest reason is because it assumes this is a solved problem for the most part. If dealing with a client like the web browser for example, you can store the JWT tokens in a cookie that issecure(is not transmitted via HTTP, only via HTTPS) andhttpOnly(can't be read by Javascript) and talks to the server over an encrypted channel (HTTPS). Once you know you have a secure channel between the server and client you can securely exchange JWT or whatever else you want.

2. This keeps thing simple. A simple implementation makes adoption easier but it also lets each layer do what it does best (let HTTPS handle encryption).

3. JWT isn't meant to store sensitive data. Once the server receives the JWT token and validates it, it is free to lookup the user ID in its own database for additional information for that user (like permissions, postal address, etc). This keeps JWT small in size and avoids inadvertent information leakage because everyone knows not to keep sensitive data in JWT.

It's not too different from how cookies themselves work. Cookies often contain unencrypted payloads. If you are using HTTPS then everything is good. If you aren't then it's advisable to encrypt sensitive cookies themselves. Not doing so will mean that a man-in-the-middle attack is possible--a proxy server or ISP reads the cookies and then replays them later on pretending to be you. For similar reasons, JWT should always be exchanged over a secure layer like HTTPS.

## How it works

The token is created using asecret stringthat isstored on a server. Next, the server then sends that JWT back to the client which will store it either in a cookie or in local storage.

So the server does in fact not know which user is actually logged in, but of course, the user knows that he's logged in because he has a valid Json Web Token which is a bit like a passport to access protected parts of the application.

All this communication must happen over https, so secure encrypted Http in order to prevent that anyone can get access to passwords or Json Web Tokens. Only then we have a really secure system.

The signing algorithm takes the header, the payload, and the secret to create a unique signature. So only this data plus the secret can create this signature, all right? Then together with the header and the payload, these signature forms the JWT, which then gets sent to the client.
Store your JWT in cookies for web applications, because of the additional security they provide, and the simplicity of protecting against CSRF with modern web frameworks. HTML5 Web Storage is vulnerable to XSS, has a larger attack surface area, and can impact all application users on a successful attack.

https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage

https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure

## pyjwt

PyJWTis a Python library which allows you to encode and decode JSON Web Tokens (JWT). JWT is an open, industry-standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) for representing claims securely between two parties.

```bash
pip install pyjwt

encoded_jwt = jwt.encode({"some": "payload"}, "secret", algorithm="HS256")
print(encoded_jwt)
# eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb21lIjoicGF5bG9hZCJ9.Joh1R2dYzkRvDkqv3sygm5YyK8Gi4ShZqbhK2gxcs2U

jwt.decode(encoded_jwt, "secret", algorithms=["HS256"])
{'some': 'payload'}
```

#### Example

```python
from datetime import datetime, timedelta
import jwt

JWT_SECRET = 'secret'
JWT_ALGORITHM = 'HS256'
JWT_EXP_DELTA_SECONDS = 20

async def login(request):
    post_data = await request.post()
    try:
        user = User.objects.get(email=post_data['email'])
        user.match_password(post_data['password'])
    except (User.DoesNotExist, User.PasswordDoesNotMatch):
        return json_response({'message': 'Wrong credentials'}, status=400)

    payload = {
        'user_id': user.id,
        'exp': datetime.utcnow() + timedelta(seconds=JWT_EXP_DELTA_SECONDS)
    }
    jwt_token = jwt.encode(payload, JWT_SECRET, JWT_ALGORITHM)
    return json_response({'token': jwt_token.decode('utf-8')})

app = web.Application()
app.router.add_route('POST', '/login', login)

# Auth Middleware
async def get_user(request):
return json_response({'user': str(request.user)})
async def auth_middleware(app, handler):
async def middleware(request):
request.user = None
jwt_token = request.headers.get('authorization', None)
if jwt_token:
    try:
        payload = jwt.decode(jwt_token, JWT_SECRET,
                                algorithms=[JWT_ALGORITHM])
    except (jwt.DecodeError, jwt.ExpiredSignatureError):
        return json_response({'message': 'Token is invalid'}, status=400)
request.user = User.objects.get(id=payload['user_id'])
return await handler(request)
return middleware
app = web.Application(middlewares=[auth_middleware])
app.router.add_route('GET', '/get-user', get_user)
```

https://steelkiwi.com/blog/jwt-authorization-python-part-1-practise
