# Cryptographic Hash Functions

A cryptographic hash function is a special class of [hash function](https://en.wikipedia.org/wiki/Hash_function) that has certain properties which make it suitable for use in [cryptography](https://en.wikipedia.org/wiki/Cryptography). It is a mathematical [algorithm](https://en.wikipedia.org/wiki/Algorithm) that [maps](https://en.wikipedia.org/wiki/Map_(mathematics)) data of arbitrary size to a [bit string](https://en.wikipedia.org/wiki/Bit_string) of a fixed size (a hash) and is designed to be a [one-way function](https://en.wikipedia.org/wiki/One-way_function), that is, a function which is [infeasible](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) to invert. The only way to recreate the input data from an ideal cryptographic hash function's output is to attempt a [brute-force search](https://en.wikipedia.org/wiki/Brute-force_search) of possible inputs to see if they produce a match, or use a [rainbow table](https://en.wikipedia.org/wiki/Rainbow_table) of matched hashes.[Bruce Schneier](https://en.wikipedia.org/wiki/Bruce_Schneier) has called one-way hash functions "the workhorses of modern cryptography". The input data is often called the message, and the output (the hash value or hash) is often called the message digestor simply the digest.

The ideal cryptographic hash function has five main properties:

- it is [deterministic](https://en.wikipedia.org/wiki/Deterministic_algorithm) so the same message always results in the same hash
- it is quick to compute the hash value for any given message
- it is [infeasible](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) to generate a message from its hash value except by trying all possible messages
- a small change to a message should change the hash value so extensively that the new hash value appears uncorrelated with the old hash value
- it is [infeasible](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) to find two different messages with the same hash value

Cryptographic hash functions have many [information-security](https://en.wikipedia.org/wiki/Information_security) applications, notably in [digital signatures](https://en.wikipedia.org/wiki/Digital_signature), [message authentication codes](https://en.wikipedia.org/wiki/Message_authentication_codes)(MACs), and other forms of [authentication](https://en.wikipedia.org/wiki/Authentication). They can also be used as ordinary [hash functions](https://en.wikipedia.org/wiki/Hash_function), to index data in [hash tables](https://en.wikipedia.org/wiki/Hash_table), for [fingerprinting](https://en.wikipedia.org/wiki/Fingerprint_(computing)), to detect duplicate data or uniquely identify files, and as [checksums](https://en.wikipedia.org/wiki/Checksum) to detect accidental data corruption. Indeed, in information-security contexts, cryptographic hash values are sometimes called (digital) fingerprints, checksums, or justhash values, even though all these terms stand for more general functions with rather different properties and purposes.

## Variable Cost Algorithm

### PBKDF2

[PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)(Password Based Key Derivation Function 2) is typically used for deriving a cryptographic key from a password. It may also be used for key storage, but an alternate key storage KDF such as [Scrypt](https://cryptography.io/en/latest/hazmat/primitives/key-derivation-functions/#cryptography.hazmat.primitives.kdf.scrypt.Scrypt) is generally considered a better solution.

In [cryptography](https://en.wikipedia.org/wiki/Cryptography), **PBKDF1andPBKDF2(Password-Based Key Derivation Function 1and2)** are [key derivation functions](https://en.wikipedia.org/wiki/Key_derivation_function) with a sliding computational cost, used to reduce vulnerabilities of [brute-force attacks](https://en.wikipedia.org/wiki/Brute-force_attack).

PBKDF2 applies a [pseudorandom function](https://en.wikipedia.org/wiki/Pseudorandom_function), such as [hash-based message authentication code](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) (HMAC), to the input [password](https://en.wikipedia.org/wiki/Password) or [passphrase](https://en.wikipedia.org/wiki/Passphrase) along with a [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)) value and repeats the process many times to produce aderived key, which can then be used as a [cryptographic key](https://en.wikipedia.org/wiki/Key_(cryptography)) in subsequent operations. The added computational work makes [password cracking](https://en.wikipedia.org/wiki/Password_cracking) much more difficult, and is known as **[key stretching](https://en.wikipedia.org/wiki/Key_stretching).**

https://en.wikipedia.org/wiki/PBKDF2

### Scrypt

Scrypt is a KDF designed for password storage by Colin Percival to be resistant against hardware-assisted attackers by having a tunable memory cost. It is described in [RFC 7914](https://tools.ietf.org/html/rfc7914.html).

[Hashing Algorithms - SHA256 vs Scrypt](https://www.linkedin.com/pulse/hashing-algorithms-sha256-vs-scrypt-kalana-wijenayake/)

[SHA256 vs Scrypt: How Comparing Hash Rates is Misleading | NKMAG](https://www.nkmag.com/sha256-vs-scrypt-how-comparing-hash-rates-of-different-hashing-algorithms-is-misleading/)

## Fixed Cost Algorithm

### ConcatKDF

ConcatKDFHash (Concatenation Key Derivation Function) is defined by the NIST Special Publication [NIST SP 800-56Ar2](https://csrc.nist.gov/publications/detail/sp/800-56a/rev-2/final) document, to be used to derive keys for use after a Key Exchange negotiation operation.

Warning - ConcatKDFHash should not be used for password storage.- HKDF

[HKDF](https://en.wikipedia.org/wiki/HKDF)(HMAC-based Extract-and-Expand Key Derivation Function) is suitable for deriving keys of a fixed size used for other cryptographic operations.

Warning - ConcatKDFHash should not be used for password storage.- KBKDF

### X963KDF

https://en.wikipedia.org/wiki/Key_derivation_function

https://cryptography.io/en/latest/hazmat/primitives/key-derivation-functions

## Cryptographic Hash Functions

### MD5

Was commonly used for password hashing, but now considered insecure for cryptographic purposes due to some vulnerabilities that were discovered in it

### SHA-1 (Secure Hash Algorithm)

Originally designed by the NSA for various purposes, now considered deprecated and insecure

- RIPEMD-160 (RACE Integrity Primitives Evaluation Message Digest)
- bcrypt

A slow hash function that is resistant to brute-force cracks. Commonly used in some Linux distributions. Considered very secure.

```python
import bcrypt

from models import db, User
def insert_user_into_db(username, password):

password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(12))

user = User(password=password_hash, username=username)

db.session.add(user)

db.session.commit()
```

https://auth0.com/blog/hashing-in-action-understanding-bcrypt

- Whirlpool
- SHA-2
- SHA-3

Better than SHA-1, considered both safe and flexible

- BLAKE2
- NTLM

Commonly used in Windows active directory, but easy to crack. Use NTLMv2 instead.

[SHA-1 - Wikipedia](https://en.wikipedia.org/wiki/SHA-1)

### SHA-2 (Secure Hash Algorithm 2)

**SHA-2** is a set of [cryptographic hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function "Cryptographic hash function") designed by the United States [National Security Agency](https://en.wikipedia.org/wiki/National_Security_Agency "National Security Agency") (NSA) and first published in 2001. They are built using the [Merkle-Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction "Merkle-Damgård construction"), from a [one-way compression function](https://en.wikipedia.org/wiki/One-way_compression_function "One-way compression function") itself built using the [Davies-Meyer structure](https://en.wikipedia.org/wiki/One-way_compression_function#Davies%E2%80%93Meyer "One-way compression function") from a specialized block cipher.

SHA-2 includes significant changes from its predecessor, [SHA-1](https://en.wikipedia.org/wiki/SHA-1 "SHA-1"). The SHA-2 family consists of six hash functions with digests (hash values) that are 224, 256, 384 or 512 bits: **SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256**. SHA-256 and SHA-512 are novel hash functions computed with eight 32-bit and 64-bit words, respectively. They use different shift amounts and additive constants, but their structures are otherwise virtually identical, differing only in the number of rounds. SHA-224 and SHA-384 are truncated versions of SHA-256 and SHA-512 respectively, computed with different initial values. SHA-512/224 and SHA-512/256 are also truncated versions of SHA-512, but the initial values are generated using the method described in [Federal Information Processing Standards](https://en.wikipedia.org/wiki/Federal_Information_Processing_Standards "Federal Information Processing Standards") (FIPS) PUB 180-4.

[SHA-2 - Wikipedia](https://en.wikipedia.org/wiki/SHA-2)

### Argon2

A complicated but extremely secure hash function, resistant to brute force attacks. Can be difficult to implement.

Argon2 is a [key derivation function](https://en.wikipedia.org/wiki/Key_derivation_function) that was selected as the winner of the [Password Hashing Competition](https://en.wikipedia.org/wiki/Password_Hashing_Competition) in July 2015.It was designed by [Alex Biryukov](https://en.wikipedia.org/wiki/Alex_Biryukov), Daniel Dinu, and [Dmitry Khovratovich](https://en.wikipedia.org/wiki/Dmitry_Khovratovich) from the [University of Luxembourg](https://en.wikipedia.org/wiki/University_of_Luxembourg).The reference implementation of Argon2 is released under a Creative Commons [CC0](https://en.wikipedia.org/wiki/CC0) license (i.e.[public domain](https://en.wikipedia.org/wiki/Public_domain)) or the [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License), and provides three related versions:

- Argon2d maximizes resistance to GPU cracking attacks. It accesses the memory array in a password dependent order, which reduces the possibility of [time--memory trade-off](https://en.wikipedia.org/wiki/Time%E2%80%93memory_trade-off)(TMTO) attacks, but introduces possible [side-channel attacks](https://en.wikipedia.org/wiki/Side-channel_attack).
- Argon2i is optimized to resist side-channel attacks. It accesses the memory array in a password independent order.
- Argon2id is a hybrid version. It follows the Argon2i approach for the first half pass over memory and the Argon2d approach for subsequent passes. The Internet draftrecommends using Argon2id except when there are reasons to prefer one of the other two modes.

All three modes allow specification by three parameters that control:

- execution time
- memory required
- degree of parallelism

https://en.wikipedia.org/wiki/Argon2

Performance-wise, a SHA-256 hash is about 20-30% slower to calculate than either MD5 or SHA-1 hashes.

## References

https://en.wikipedia.org/wiki/Cryptographic_hash_function

https://medium.com/analytics-vidhya/password-hashing-pbkdf2-scrypt-bcrypt-and-argon2-e25aaf41598e
