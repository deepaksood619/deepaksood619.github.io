# 19. Internet Data Handling

- [19.1.email - An email and MIME handling package](https://docs.python.org/3/library/email.html)
- [19.2.json - JSON encoder and decoder](https://docs.python.org/3/library/json.html)
- [19.3.mailcap - Mailcap file handling](https://docs.python.org/3/library/mailcap.html)
- [19.4.mailbox - Manipulate mailboxes in various formats](https://docs.python.org/3/library/mailbox.html)
- [19.5.mimetypes - Map filenames to MIME types](https://docs.python.org/3/library/mimetypes.html)
- [19.6.base64 - Base16, Base32, Base64, Base85 Data Encodings](https://docs.python.org/3/library/base64.html)
- [19.7.binhex - Encode and decode binhex4 files](https://docs.python.org/3/library/binhex.html)
- [19.8.binascii - Convert between binary and ASCII](https://docs.python.org/3/library/binascii.html)
- [19.9.quopri - Encode and decode MIME quoted-printable data](https://docs.python.org/3/library/quopri.html)
- [19.10.uu - Encode and decode uuencode files](https://docs.python.org/3/library/uu.html)

## base64 encoding

```python
import base64

usrPass = b"0efdd7a253a93:Mjg0Nzg3MjQ5OTg2MTExODA0NzM0NDg5NDU0OTg3ODM3NDE"

b64Val = base64.b64encode(usrPass)

b64Val

>>>b'MGVmZGQ3YTI1M2E5MzpNamcwTnpnM01qUTVPVGcyTVRFeE9EQTBOek0wTkRnNU5EVTBPVGczT0RNM05ERQ=='
```
