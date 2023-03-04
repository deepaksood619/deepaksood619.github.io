# Hash Functions

## Bad Hash Functions

- First 3 digits of a phone number
- Memory address of an object (will only be power of 2's so odd locations will never get filled)

## MurmurHash / MurmurHash3

MurmurHashis a non-[cryptographic](https://en.wikipedia.org/wiki/Cryptographic_hash_function)[hash function](https://en.wikipedia.org/wiki/Hash_function) suitable for general hash-based lookup.It was created by Austin Appleby in 2008and is currently hosted on GitHub along with its test suite named 'SMHasher'. It also exists in a number of variants,all of which have been released into the public domain. The name comes from two basic operations, multiply (MU) and rotate (R), used in its inner loop.
Unlike [cryptographic hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function), it is not specifically designed to be difficult to reverse by an adversary, making it unsuitable for cryptographic purposes.
<https://en.wikipedia.org/wiki/MurmurHash>

## SipHash (for strings in python dictionary implementation)

SipHashis a relatively fast hash function. On a 64-bit machine, SipHash returns a 64-bit hash. The hash is then converted into an index to be used in an array.
SipHashis an [add--rotate--xor](https://en.wikipedia.org/wiki/Block_cipher#ARX_(add%E2%80%93rotate%E2%80%93xor))(ARX) based family of [pseudorandom functions](https://en.wikipedia.org/wiki/Pseudorandom_function) created by [Jean-Philippe Aumasson](https://en.wikipedia.org/w/index.php?title=Jean-Philippe_Aumasson&action=edit&redlink=1) and [Daniel J. Bernstein](https://en.wikipedia.org/wiki/Daniel_J._Bernstein) in 2012, in response to a spate of "hash flooding"[denial-of-service attacks](https://en.wikipedia.org/wiki/Denial-of-service_attack) in late 2011.
Although designed for use as a [hash function](https://en.wikipedia.org/wiki/Hash_function) in the computer science sense, SipHash is fundamentally different from [cryptographic hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_functions) like [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) in that it is only suitable as a [message authentication code](https://en.wikipedia.org/wiki/Message_authentication_code): akeyedhash function like [HMAC](https://en.wikipedia.org/wiki/HMAC). That is, SHA is designed so that it is difficult for an attacker to find two messagesXandYsuch that SHA(X) = SHA(Y), even though anyone may compute SHA(X). SipHash instead guarantees that, having seenXiand SipHash(Xi,k), an attacker who does not know the keykcannot find (any information about) kor SipHash(Y,k) for any messageY∉ {Xi} which they have not seen before.
<https://en.wikipedia.org/wiki/SipHash>
