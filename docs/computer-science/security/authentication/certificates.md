# Certificates

## Types of certificates

- Domain-validated certificates
- Extended validation (EV) certificates
- High-assurance certificates
- Wildcard certificates (*.example.com)
- Subject alternative name (SAN) certificates (example.comandexample.net)

## X.509

In [cryptography](https://en.wikipedia.org/wiki/Cryptography),X.509is a standard defining the format of [public key certificates](https://en.wikipedia.org/wiki/Public_key_certificate). X.509 certificates are used in many Internet protocols, including [TLS/SSL](https://en.wikipedia.org/wiki/Transport_Layer_Security), which is the basis for HTTPS , the secure protocol for browsing the [web](https://en.wikipedia.org/wiki/World_Wide_Web). They are also used in offline applications, like [electronic signatures](https://en.wikipedia.org/wiki/Electronic_signature). An X.509 certificate contains a public key and an identity (a hostname, or an organization, or an individual), and is either signed by a [certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) or self-signed. When a certificate is signed by a trusted certificate authority, or validated by other means, someone holding that certificate can rely on the public key it contains to establish secure communications with another party, or validate documents [digitally signed](https://en.wikipedia.org/wiki/Digital_signature) by the corresponding [private key](https://en.wikipedia.org/wiki/Private_key).
X.509 also defines [certificate revocation lists](https://en.wikipedia.org/wiki/Certificate_revocation_list), which are a means to distribute information about certificates that have been deemed invalid by a signing authority, as well as a [certification path validation algorithm](https://en.wikipedia.org/wiki/Certification_path_validation_algorithm), which allows for certificates to be signed by intermediate CA certificates, which are, in turn, signed by other certificates, eventually reaching a [trust anchor](https://en.wikipedia.org/wiki/Trust_anchor).
X.509 is defined by the [International Telecommunications Union's](https://en.wikipedia.org/wiki/International_Telecommunication_Union) Standardization sector ([ITU-T](https://en.wikipedia.org/wiki/ITU-T)), and is based on [ASN.1](https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One), another ITU-T standard.
<https://en.wikipedia.org/wiki/X.509>
