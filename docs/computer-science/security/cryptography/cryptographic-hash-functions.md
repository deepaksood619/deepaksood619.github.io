# Cryptographic Hash Functions

Acryptographic hash functionis a special class of [hash function](https://en.wikipedia.org/wiki/Hash_function) that has certain properties which make it suitable for use in [cryptography](https://en.wikipedia.org/wiki/Cryptography). It is a mathematical [algorithm](https://en.wikipedia.org/wiki/Algorithm) that [maps](https://en.wikipedia.org/wiki/Map_(mathematics)) data of arbitrary size to a [bit string](https://en.wikipedia.org/wiki/Bit_string) of a fixed size (a hash) and is designed to be a [one-way function](https://en.wikipedia.org/wiki/One-way_function), that is, a function which is [infeasible](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) to invert. The only way to recreate the input data from an ideal cryptographic hash function's output is to attempt a [brute-force search](https://en.wikipedia.org/wiki/Brute-force_search) of possible inputs to see if they produce a match, or use a [rainbow table](https://en.wikipedia.org/wiki/Rainbow_table) of matched hashes.[Bruce Schneier](https://en.wikipedia.org/wiki/Bruce_Schneier) has called one-way hash functions "the workhorses of modern cryptography".The input data is often called themessage, and the output (thehash valueorhash) is often called themessage digestor simply thedigest.
The ideal cryptographic hash function has five main properties:

- it is [deterministic](https://en.wikipedia.org/wiki/Deterministic_algorithm) so the same message always results in the same hash
- it is quick to compute the hash value for any given message
- it is [infeasible](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) to generate a message from its hash value except by trying all possible messages
- a small change to a message should change the hash value so extensively that the new hash value appears uncorrelated with the old hash value
- it is [infeasible](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) to find two different messages with the same hash value
Cryptographic hash functions have many [information-security](https://en.wikipedia.org/wiki/Information_security) applications, notably in [digital signatures](https://en.wikipedia.org/wiki/Digital_signature), [message authentication codes](https://en.wikipedia.org/wiki/Message_authentication_codes)(MACs), and other forms of [authentication](https://en.wikipedia.org/wiki/Authentication). They can also be used as ordinary [hash functions](https://en.wikipedia.org/wiki/Hash_function), to index data in [hash tables](https://en.wikipedia.org/wiki/Hash_table), for [fingerprinting](https://en.wikipedia.org/wiki/Fingerprint_(computing)), to detect duplicate data or uniquely identify files, and as [checksums](https://en.wikipedia.org/wiki/Checksum) to detect accidental data corruption. Indeed, in information-security contexts, cryptographic hash values are sometimes called (digital) fingerprints, checksums, or justhash values, even though all these terms stand for more general functions with rather different properties and purposes.

## Hash Function Design

## Merkle--Damgård construction

![image](../../../media/Cryptography-Intro_Cryptographic-Hash-Functions-image1.jpg)
A hash function must be able to process an arbitrary-length message into a fixed-length output. This can be achieved by breaking the input up into a series of equal-sized blocks, and operating on them in sequence using a [one-way compression function](https://en.wikipedia.org/wiki/One-way_compression_function). The compression function can either be specially designed for hashing or be built from a block cipher. A hash function built with the Merkle--Damgård construction is as resistant to collisions as is its compression function; any collision for the full hash function can be traced back to a collision in the compression function.
The last block processed should also be unambiguously [length padded](https://en.wikipedia.org/wiki/Padding_(cryptography)); this is crucial to the security of this construction. This construction is called the [Merkle--Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction). Most common classical hash functions, including [SHA-1](https://en.wikipedia.org/wiki/SHA-1) and [MD5](https://en.wikipedia.org/wiki/MD5), take this form.

### Wide pipe vs narrow pipe

A straightforward application of the Merkle--Damgård construction, where the size of hash output is equal to the internal state size (between each compression step), results in anarrow-pipehash design. This design causes many inherent flaws, including [length-extension](https://en.wikipedia.org/wiki/Length_extension_attack), multicollisions, long message attacks, generate-and-paste attacks, and also cannot be parallelized. As a result, modern hash functions are built on wide-pipe constructions that have a larger internal state size - which range from tweaks of the Merkle--Damgård construction to new constructions such as the [sponge construction](https://en.wikipedia.org/wiki/Sponge_construction) and [HAIFA construction](https://en.wikipedia.org/wiki/HAIFA_construction).None of the entrants in the [NIST hash function competition](https://en.wikipedia.org/wiki/NIST_hash_function_competition) use a classical Merkle--Damgård construction.
Meanwhile, truncating the output of a longer hash, such as used in SHA-512/256, also defeats many of these attacks.

## Salt

A "salt" is a random piece of data that is often added to the data you want to hash before you actually hash it. Adding a salt to your data before hashing it will make the output of the hash function different than it would be if you had only hashed the data.
When a user sets their password (often on signing up), a random salt should be generated and used to compute the password hash. The salt should then be stored with the password hash. When the user tries to log in, combine the salt with the supplied password, hash the combination of the two, and compare it to the hash in the database.

## Why should you use a salt?

Without going into too much detail, hackers commonly use [rainbow table attacks](https://www.geeksforgeeks.org/understanding-rainbow-table-attack/), [dictionary attacks](https://en.wikipedia.org/wiki/Dictionary_attack), and [brute-force attacks](http://www.tenminutetutor.com/data-formats/cryptography/attacks-on-hash-algorithms/) to try and crack password hashes. While hackers can't compute the original password given only a hash, they can take a long list of possible passwords and compute hashes for them to try and match them with the passwords in the database. This is effectively how these types of attacks work, although each of the above works somewhat differently.
A salt makes it much more difficult for hackers to perform these types of attacks. Depending on the hash function, salted hashes take nearly exponentially more time to crack than unsalted ones. They also make rainbow table attacks nearly impossible. It's therefore important to always use salts in your hashes.
<https://dev.to/kmistele/how-to-securely-hash-and-store-passwords-in-your-next-application-4e2f>

## Key derivation function

In [cryptography](https://en.wikipedia.org/wiki/Cryptography), akey derivation function(KDF) is a [cryptographic hash function](https://en.wikipedia.org/wiki/Cryptographic_hash_function) that derives one or more [secret keys](https://en.wikipedia.org/wiki/Key_(cryptography)) from a secret value such as a main key, a [password](https://en.wikipedia.org/wiki/Password), or a [passphrase](https://en.wikipedia.org/wiki/Passphrase) using a [pseudorandom function](https://en.wikipedia.org/wiki/Pseudorandom_function). KDFs can be used to stretch keys into longer keys or to obtain keys of a required format, such as converting a group element that is the result of a [Diffie--Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) into a symmetric key for use with [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard).[Keyed cryptographic hash functions](https://en.wikipedia.org/wiki/HMAC) are popular examples of pseudorandom functions used for key derivation.
There are many forms of KDF's, and not all functions used as KDF are explicitly named as KDF's. For instance, the KDF of TLS is simply called "the PRF" for Pseudo-Random-Functions, which is a much more generic term.
Key derivation functions derive bytes suitable for cryptographic operations from passwords or other data sources using a pseudo-random function (PRF). Different KDFs are suitable for different tasks such as:

- **Cryptographic key derivation**

Deriving a key suitable for use as input to an encryption algorithm. Typically this means taking a password and running it through an algorithm such as [PBKDF2HMAC](https://cryptography.io/en/latest/hazmat/primitives/key-derivation-functions/#cryptography.hazmat.primitives.kdf.pbkdf2.PBKDF2HMAC) or [HKDF](https://cryptography.io/en/latest/hazmat/primitives/key-derivation-functions/#cryptography.hazmat.primitives.kdf.hkdf.HKDF). This process is typically known as [key stretching](https://en.wikipedia.org/wiki/Key_stretching).

- **Password storage**

When storing passwords you want to use an algorithm that is computationally intensive. Legitimate users will only need to compute it once (for example, taking the user's password, running it through the KDF, then comparing it to the stored value), while attackers will need to do it billions of times. Ideal password storage KDFs will be demanding on both computational and memory resources.

## Variable Cost Algorithm

- **PBKDF2**

[PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)(Password Based Key Derivation Function 2) is typically used for deriving a cryptographic key from a password. It may also be used for key storage, but an alternate key storage KDF such as [Scrypt](https://cryptography.io/en/latest/hazmat/primitives/key-derivation-functions/#cryptography.hazmat.primitives.kdf.scrypt.Scrypt) is generally considered a better solution.

In [cryptography](https://en.wikipedia.org/wiki/Cryptography), **PBKDF1andPBKDF2(Password-Based Key Derivation Function 1and2)** are [key derivation functions](https://en.wikipedia.org/wiki/Key_derivation_function) with a sliding computational cost, used to reduce vulnerabilities of [brute-force attacks](https://en.wikipedia.org/wiki/Brute-force_attack).
PBKDF2 applies a [pseudorandom function](https://en.wikipedia.org/wiki/Pseudorandom_function), such as [hash-based message authentication code](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) (HMAC), to the input [password](https://en.wikipedia.org/wiki/Password) or [passphrase](https://en.wikipedia.org/wiki/Passphrase) along with a [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)) value and repeats the process many times to produce aderived key, which can then be used as a [cryptographic key](https://en.wikipedia.org/wiki/Key_(cryptography)) in subsequent operations. The added computational work makes [password cracking](https://en.wikipedia.org/wiki/Password_cracking) much more difficult, and is known as **[key stretching](https://en.wikipedia.org/wiki/Key_stretching).**

<https://en.wikipedia.org/wiki/PBKDF2> - Scrypt

Scrypt is a KDF designed for password storage by Colin Percival to be resistant against hardware-assisted attackers by having a tunable memory cost. It is described in [RFC 7914](https://tools.ietf.org/html/rfc7914.html).

## Fixed Cost Algorithm

- ConcatKDF

ConcatKDFHash (Concatenation Key Derivation Function) is defined by the NIST Special Publication [NIST SP 800-56Ar2](https://csrc.nist.gov/publications/detail/sp/800-56a/rev-2/final) document, to be used to derive keys for use after a Key Exchange negotiation operation.

Warning - ConcatKDFHash should not be used for password storage.- HKDF

[HKDF](https://en.wikipedia.org/wiki/HKDF)(HMAC-based Extract-and-Expand Key Derivation Function) is suitable for deriving keys of a fixed size used for other cryptographic operations.

Warning - ConcatKDFHash should not be used for password storage.- KBKDF

- X963KDF

<https://en.wikipedia.org/wiki/Key_derivation_function>

<https://cryptography.io/en/latest/hazmat/primitives/key-derivation-functions>

## Cryptographic Hash Functions

- MD5

    Was commonly used for password hashing, but now considered insecure for cryptographic purposes due to some vulnerabilities that were discovered in it

- SHA-1 (Standard Hash Algorithm)

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

    <https://auth0.com/blog/hashing-in-action-understanding-bcrypt>

- Whirlpool
- SHA-2
- SHA-3

Better than SHA-1, considered both safe and flexible

- BLAKE2
- NTLM

Commonly used in Windows active directory, but easy to crack. Use NTLMv2 instead.

- Argon2

A complicated but extremely secure hash function, resistant to brute force attacks. Can be difficult to implement.

Argon2is a [key derivation function](https://en.wikipedia.org/wiki/Key_derivation_function) that was selected as the winner of the [Password Hashing Competition](https://en.wikipedia.org/wiki/Password_Hashing_Competition) in July 2015.It was designed by [Alex Biryukov](https://en.wikipedia.org/wiki/Alex_Biryukov), Daniel Dinu, and [Dmitry Khovratovich](https://en.wikipedia.org/wiki/Dmitry_Khovratovich) from the [University of Luxembourg](https://en.wikipedia.org/wiki/University_of_Luxembourg).The reference implementation of Argon2 is released under a Creative Commons [CC0](https://en.wikipedia.org/wiki/CC0) license (i.e.[public domain](https://en.wikipedia.org/wiki/Public_domain)) or the [Apache License 2.0](https://en.wikipedia.org/wiki/Apache_License), and provides three related versions:

- Argon2d maximizes resistance to GPU cracking attacks. It accesses the memory array in a password dependent order, which reduces the possibility of [time--memory trade-off](https://en.wikipedia.org/wiki/Time%E2%80%93memory_trade-off)(TMTO) attacks, but introduces possible [side-channel attacks](https://en.wikipedia.org/wiki/Side-channel_attack).
- Argon2i is optimized to resist side-channel attacks. It accesses the memory array in a password independent order.
- Argon2id is a hybrid version. It follows the Argon2i approach for the first half pass over memory and the Argon2d approach for subsequent passes. The Internet draftrecommends using Argon2id except when there are reasons to prefer one of the other two modes.

All three modes allow specification by three parameters that control:

- execution time
- memory required
- degree of parallelism

<https://en.wikipedia.org/wiki/Argon2>

Performance-wise, a SHA-256 hash is about 20-30% slower to calculate than either MD5 or SHA-1 hashes.

## References

<https://en.wikipedia.org/wiki/Cryptographic_hash_function>

<https://medium.com/analytics-vidhya/password-hashing-pbkdf2-scrypt-bcrypt-and-argon2-e25aaf41598e>
