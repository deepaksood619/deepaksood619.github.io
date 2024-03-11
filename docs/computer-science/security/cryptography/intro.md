# Cryptography

Dance like no one is watching; encrypt like everyone is. Encrypt everything."

If you have a secret and wish to keep it a secret until your death, how do you guarantee its cryptographic integrity until that time, especially with computing advances that could make today's state-of-the-art encryption crackable? And how do you enable the secret to be released, but only after death?

Cryptography is the art or science of **Secret writing**. It is concerned with the development of algorithms

- To conceal the content of messages from all except sender and recipient
- To verify the correctness of message or its sender and recipient

## Terminologies

- Encryption / Enciphering, E - Process of encoding the message so that meaning is not obvious or not in understandable form
- Decryption / Deciphering, D - Reverse process of encryption
- Plain text, P - The original form of the message
- Cipher text, C - Disguised (encrypted) message

C = E(P), P = D(C)

P = D (E (P))- Key - Critical (secret) information used in cipher and known only to sender and receiver
    - Symmetric - Shared Key
    - Asymmetric - Public Key

- Code - Algorithm used for transforming the intelligible (plain text) to unintelligible (cipher text)
- Cipher - Algorithm / Code used for transforming plain text to cipher text
- Cryptanalysis (Code Breaking) - Study of method for transforming cipher text to plaintext without having knowledge of any key
- Cryptology - Area of cryptography and cryptanalysis together is called as crytology
- Protected health information (PHI) and Personally identifiable information (PII) - **Responsible disclosure**

## What Principles are Important When You're Developing a Cipher?

Kerckhoff's principle states that a cryptographic system should be secure, even if all the details (other than the key) are known publicly. Claude Shannon later rewrote this message as 'The enemy knows the system.'

Essentially, a very well designed system should be able to send secret messages even if an attacker can encrypt and decrypt their own messages using the same algorithm (with a different key). The security of the encrypted message should depend entirely on the key.
Additionally, in order to hinder statistical analysis (attempts to break an encryption algorithm), a good cryptographic system should employ the principles of **confusion and diffusion.**

Confusion requires that the key does not relate to the ciphertext in a simple manner. Each character of the ciphertext should depend on multiple parts of the key. The goal is to make it very difficult for an attacker to determine the key from the ciphertext

Diffusion means that if a single character of the plaintext is changed, then several characters of the ciphertext should change. And if a single character of the ciphertext is changed, then several characters of the plaintext should change

Ideally, the relationship between the ciphertext and the plaintext is hidden. No diffusion is perfect (all will have some patterns), but the best diffusion scatters patterns widely, even scrambling several patterns together.
Diffusion makes patterns hard for an attacker to spot, and requires the attacker to have more data in order to mount a successful attack.

## Types of Ciphers

Both block and stream ciphers are symmetric key ciphers (like DES, RCx, Blowfish, and Rijndael AES).
Most modern symmetric algorithms are block ciphers, though the block sizes vary (such as DES (64 bits), AES (128, 192, and 256 bits), and so on).

1. Stream Cipher - Converts plaintext to ciphertext one bit at a time.
2. Block Cipher - It takes a given length of data as input and produces different length of encrypted data. Block ciphers convert plaintext to ciphertext block by block

## What are the common modes of Block Ciphers?

In order to encrypt data which is longer than a single block, there are several 'modes' which have been developed. These describe how to apply the single block principles to longer messages.
There are 5 confidentiality modes for block ciphers. Some of these modes require an initialization vector (IV) in order to function.

1. **Electronic Code Book Mode (ECB)**

    There is a fixed mapping between input blocks of plaintext and output blocks of ciphertext (essentially like an actual code book where ciphertext words directly relate to plaintext words).

2. **Cipher Block Chaining Mode (CBC)**

    This mode 'chains' or combines new plaintext blocks with the previous ciphertext block when encrypting them which requires an IV for the first block. The IV doesn't need to be secret, but it needs to be unpredictable.

3. **Cipher Feedback Mode (CFB)**

    CFB is similar to CBC, but instead of using the entire previous ciphertext block to compute the next block, CFB uses a fraction of the previous block.

4. **Output Feedback (OFB)**

    OFB is similar to CFB, but instead of processing s < b bits into a b-bits to b-bits transformation, it processes s bits directly. Similarly to CFB, OFB can be functionally used as a stream cipher.

5. **Counter (CTR)**

    CTR applies the encryption algorithm to a set of unique input blocks (counters) in order to produce outputs which are XORed with the plaintext to produce ciphertext.

## How do Attackers Attempt to Break Ciphers?

There are a number of techniques attackers use, but they broadly fall into the following categories of attack, based on information required to carry it out.

This isn't an exhaustive list (there are other attacks such side channel attacks), but many of the most common fall into one of these categories.

### Known Ciphertext Attack

An attacker has some ciphertext, but does not know what plaintext was used to generate this ciphertext. The attacker does not get to choose which ciphertext they have and they cannot obtain/produce more.

### Known Plaintext Attack

An attacker has some plaintext and ciphertext pairs which they didn't choose (so the attacker didn't choose the message that was encrypted, but was able to successfully steal a plaintext message and its associated ciphertext). The attacker cannot obtain/produce more pairs.

### Chosen Plaintext Attack

An attacker can choose any plaintext and obtain the ciphertext in return (but they can't see the key itself).

### Chosen Ciphertext Attack

This is the opposite of the last attack, where the attacker can choose any ciphertext and obtain the plaintext in return (but they can't see the key itself).

https://www.freecodecamp.org/news/what-is-a-block-cipher

## Padding

Padding standards are mechanisms for appending some predefined values to messages. They are used with algorithms which deal with blocks of data. Typical examples of such operations are [block symmetric ciphers](http://www.crypto-it.net/eng/symmetric/index.html) and [MAC algorithms](http://www.crypto-it.net/eng/theory/mac.html). These algorithms work on the whole data blocks. Therefore, if amessage length is not amultiple of the block size, astardard for adding some number of bytes to the end of the message is required.- Bit Padding

- TBC (Trailing Bit Complement) Padding
- PKCS#5 and PKCS#7 Padding
- ISO 7816-4 Padding
- ISO 10126-2 Padding
- ANSI X9.23 Padding
- Zero Byte Padding

http://www.crypto-it.net/eng/theory/padding.html

## Courses

[Applied Cryptography - YouTube](https://www.youtube.com/playlist?list=PLAwxTw4SYaPnCeih6BPvJ5GdqqThGcWlX)

[Cryptography Course - YouTube](https://www.youtube.com/playlist?list=PLE4V3KXzxPRQYUil17HB6XcIu-JMebD7n)
