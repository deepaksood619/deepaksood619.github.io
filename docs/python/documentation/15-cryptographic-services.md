# 15. Cryptographic Services

- [hashlib - Secure hashes and message digests](https://docs.python.org/3/library/hashlib.html)
  - [Hash algorithms](https://docs.python.org/3/library/hashlib.html#hash-algorithms)
  - [SHAKE variable length digests](https://docs.python.org/3/library/hashlib.html#shake-variable-length-digests)
  - [Key derivation](https://docs.python.org/3/library/hashlib.html#key-derivation)
  - [**BLAKE2**](https://docs.python.org/3/library/hashlib.html#blake2)
    - [Creating hash objects](https://docs.python.org/3/library/hashlib.html#creating-hash-objects)
    - [Constants](https://docs.python.org/3/library/hashlib.html#constants)
    - [Examples](https://docs.python.org/3/library/hashlib.html#examples)
      - [Simple hashing](https://docs.python.org/3/library/hashlib.html#simple-hashing)
      - [Using different digest sizes](https://docs.python.org/3/library/hashlib.html#using-different-digest-sizes)
      - [Keyed hashing](https://docs.python.org/3/library/hashlib.html#keyed-hashing)
      - [Randomized hashing](https://docs.python.org/3/library/hashlib.html#randomized-hashing)
      - [Personalization](https://docs.python.org/3/library/hashlib.html#personalization)
      - [Tree mode](https://docs.python.org/3/library/hashlib.html#tree-mode)
    - [Credits](https://docs.python.org/3/library/hashlib.html#credits)
- [hmac - Keyed-Hashing for Message Authentication](https://docs.python.org/3/library/hmac.html)
- [**secrets - Generate secure random numbers for managing secrets**](https://docs.python.org/3/library/secrets.html)
  - [Random numbers](https://docs.python.org/3/library/secrets.html#random-numbers)
  - [Generating tokens](https://docs.python.org/3/library/secrets.html#generating-tokens)
    - [How many bytes should tokens use?](https://docs.python.org/3/library/secrets.html#how-many-bytes-should-tokens-use)
  - [Other functions](https://docs.python.org/3/library/secrets.html#other-functions)
  - [Recipes and best practices](https://docs.python.org/3/library/secrets.html#recipes-and-best-practices)

```python
import secrets

secrets.token_hex(16)

secrets.token_urlsafe(16)
```

<https://docs.python.org/3/library/secrets.html>

## Libraries

<https://github.com/Legrandin/pycryptodome>

AES - <https://qvault.io/cryptography/aes-256-cipher-python-cryptography-examples>

<https://github.com/chrissimpkins/crypto>

## Fernet

<https://github.com/pyca/cryptography>

<https://cryptography.io/en/latest>

cryptographyincludes both high level recipes and low level interfaces to common cryptographic algorithms such as symmetric ciphers, message digests, and key derivation functions. For example, to encrypt something withcryptography's high level symmetric encryption recipe:

```python
from cryptography.fernet import Fernet
# Put this somewhere safe!
key = Fernet.generate_key()
f = Fernet(key)
token = f.encrypt(b"A really secret message. Not for prying eyes.")
token
b'...'
f.decrypt(token)
b'A really secret message. Not for prying eyes.'
```

### encryption_service.py

```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import codecs

class IrctcEncryptDecrypt:
    block_size = 16

    def __init__(self):

        self.key = "abfb7c8d48dfc4f1ce7ed92a44989f25".encode()
        self.iv = "232fcfdc2e2b4767".encode()

  #PKCS5
    def pad(self, message):
        return  message + (self.block_size - len(message) % self.block_size) * chr(self.block_size - len(message) % self.block_size)

  #PKCS5
    def unpad(self, message):
        return message[0:-ord(message[-1])]

    def encrypt(self, message):
        message = self.pad(message).encode()
        cipher = Cipher(algorithms.AES(self.key), modes.CBC(self.iv))
        encryptor = cipher.encryptor()
        ct = encryptor.update(message) + encryptor.finalize()
        ct = codecs.encode(ct, 'hex').decode()
        return ct

    def decrypt(self, cipher_text):
        cipher_text = cipher_text.encode()
        cipher_text = codecs.decode(cipher_text, 'hex')
        cipher = Cipher(algorithms.AES(self.key), modes.CBC(self.iv))
        decrypter = cipher.decryptor()
        ct = decrypter.update(cipher_text) + decrypter.finalize()
        ct = self.unpad(ct.decode())
        return ct
```

<https://medium.com/coinmonks/if-youre-struggling-picking-a-crypto-suite-fernet-may-be-the-answer-95196c0fec4b>
