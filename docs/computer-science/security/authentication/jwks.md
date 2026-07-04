---
slug: /json-web-key-sets-jwks
title: JSON Web Key Sets (JWKS)
description: A JSON object that represents a set of cryptographic keys used to verify JWT signatures
created: 2026-07-04
updated: 2026-07-04
---

A JSON Web Key Set (JWKS) is a JSON object that represents a set of JWKs (JSON Web Keys). The JSON object MUST have a `keys` member, which is an array of JWKs.

JWKS contains public keys used to verify any JSON Web Token (JWT) signed with RS256 algorithm.

## Structure

A JWK Set is a JSON object that represents a set of JWKs. The JSON object MUST have a 'keys' member:

```json
{
  "keys": [
    /* Array of JWK values */
  ]
}
```

## JSON Web Key (JWK)

A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key.

### Required Member

- **kty** (Key Type): identifies the cryptographic algorithm family used with the key, such as 'RSA' or 'EC'
  - This member MUST be present in a JWK

### Optional Common Parameters

- **use** (Public Key Use): Values include "sig" (signature) or "enc" (encryption)
- **key_ops** (Key Operations): Array of operations like "sign", "verify", "encrypt", "decrypt", "wrapKey", "unwrapKey"
- **alg** (Algorithm): identifies the algorithm intended for use with the key
- **kid** (Key ID): used to match a specific key

### X.509 Certificate Parameters

- **x5u** (X.509 URL): URI referring to X.509 public key certificate resource
- **x5c** (X.509 Certificate Chain): Array of base64-encoded DER PKIX certificates
- **x5t** (X.509 SHA-1 Thumbprint): base64url-encoded SHA-1 thumbprint
- **x5t#S256** (X.509 SHA-256 Thumbprint): base64url-encoded SHA-256 thumbprint

## Example JWK (Elliptic Curve)

```json
{
  "kty": "EC",
  "crv": "P-256",
  "x": "MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4",
  "y": "4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM",
  "use": "enc",
  "kid": "1"
}
```

## Key Signing Algorithms

- **RS256**: Asymmetric - private key must be used to sign the JWT and a different public key must be used to verify the signature
- **HS256**: Also supported

## Usage

- Auth0 exposes JWKS endpoint at `https://{yourDomain}/.well-known/jwks.json`
- Uses JSON Web Key (JWK) specification (RFC 7517) for representing cryptographic keys
- Each Auth0 tenant has its own JWKS endpoint
- Currently, Auth0 signs with only one JWK at a time; however, it is important to assume this endpoint could contain multiple JWKs
- Multiple keys appear during key rotation

## Security

Access to JWKs containing non-public key material by parties without legitimate access to the non-public information MUST be prevented.

Recommended approach: Use JWE (JSON Web Encryption) with "cty" header value of "jwk+json" for encrypted JWKs, or "jwk-set+json" for encrypted JWK Sets.

## Links

- [Auth0 JWKS Documentation](https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-key-sets)
- [RFC 7517 - JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517)
- [Understanding JWKS - SuperTokens](https://supertokens.com/blog/understanding-jwks)
- [JWT Documentation](computer-science/security/authentication/jwt.md)