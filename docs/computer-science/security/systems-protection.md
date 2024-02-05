# Systems Protection

### Protection against Buffer Overflow attacks / Stash smashing attacks

1. NX bit protection
2. Canaries
3. SSP (Stack Smashing Protector)
4. **ASLR (Address Space Layout Randomization)**
5. Non-Executable Stacks
6. OS hardening
7. Object Code Checking (Provided by GCC)

https://www.freecodecamp.org/news/buffer-overflow-attacks

### Access Controls

1. DAC (Discretionary Access Control) - Owners of objects can modify their permissions
2. MAC (Mandatory Access Control) - System enforced rules based on access control hierarchy
3. RBAC (Role Baed Access Control) - Relies on a hierarchy of roles
4. ACLs (Access Control Lists) in mordern OSes
5. Access control matrix - describes who has access to which resource.
6. RBAC (Role Based Access Control)
7. ABAC (Attribute Based Access Control)

### Security Models

1. Bell-LaPadula Model
2. Biba Model (Reversed Bell-LaPadula Model)
3. Saltzer and Shroeder model

Public/private cryptography

Integrity protection

- Cryptographic libraries
    - OpenSSL
    - GPG

## GNU Privacy Guard (GnuPG or GPG)

GPG is a [free-software](https://en.wikipedia.org/wiki/Free-software) replacement for [Symantec](https://en.wikipedia.org/wiki/NortonLifeLock)'s [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) [cryptographic](https://en.wikipedia.org/wiki/Cryptography) software suite, and is compliant with [RFC 4880](https://tools.ietf.org/html/rfc4880), the [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) standards-track specification of [OpenPGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy#OpenPGP). Modern versions of [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) are [interoperable](https://en.wikipedia.org/wiki/Interoperability) with GnuPG and other OpenPGP-compliant systems.

GPG is the Gnu Privacy Guard and it is an implementation of OpenPGP (Open Pretty Good Privacy). It is an encryption technique that was originally developed for use in e-mail exchanges that is now used in a number of different applications such as code signing for Linux code repositories and source code repositories like github. OpenPGP is a hybrid of the two-key cryptography approach where the message to be exchanged (called plaintext) is first compressed and then a session key is created as a one-time use secret key. The compressed plaintext is then encrypted with the session key. The session key is then encrypted with the destination's public key and bundled with the encrypted message (called ciphertext). The destination can decrypt the session key with their private key then then decompress it to recover the original plaintext.

There are several different ways to create a GPG key. The easiest is with the "gpg" or "gpg2" commands available on many major operating systems. Many commercial encryption programs also include a way to generate a GPG key. You can then store the public version on a public key server so folks can start sending you encrypted files/message traffic. Only you will be able to decrypt it because only you have the associated private key.

https://gnupg.org

https://www.digitalocean.com/community/tutorials/how-to-use-gpg-to-encrypt-and-sign-messages- LibSSL - SSL/TLS

- Libcrypto - Encryption and Decryption
- EVP - Envelope Functions
    - Can be used for both symmetric and asymmetric cryptography
    - Various Encryption / Decryption algorithms
    - Various message digest (hash) algorithms
    - HMAC - Signing

## PGP

Pretty Good Privacy(PGP) is an [encryption program](https://en.wikipedia.org/wiki/Encryption_software) that provides [cryptographic](https://en.wikipedia.org/wiki/Cryptographic) [privacy](https://en.wikipedia.org/wiki/Privacy) and [authentication](https://en.wikipedia.org/wiki/Authentication) for [data communication](https://en.wikipedia.org/wiki/Data_communication). PGP is used for [signing](https://en.wikipedia.org/wiki/Digital_signature), encrypting, and decrypting texts, [e-mails](https://en.wikipedia.org/wiki/Email), files, directories, and whole disk partitions and to increase the security of e-mail communications.[Phil Zimmermann](https://en.wikipedia.org/wiki/Phil_Zimmermann) developed PGP in 1991.

PGP and similar software follow the [OpenPGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy#OpenPGP), an open standard of PGP encryption software, standard ([RFC 4880](https://en.wikipedia.org/wiki/Request_for_Comments)) for encrypting and decrypting data.

https://en.wikipedia.org/wiki/Pretty_Good_Privacy

## Air Gap Networking

An **air gap**, **air wall** or **air gapping** is a [network security](https://en.wikipedia.org/wiki/Network_security) measure employed on one or more computers to ensure that a secure [computer network](https://en.wikipedia.org/wiki/Computer_network) is physically isolated from unsecured networks, such as the public [Internet](https://en.wikipedia.org/wiki/Internet) or an unsecured [local area network](https://en.wikipedia.org/wiki/Local_area_network). It means a computer or network has no [network interfaces](https://en.wikipedia.org/wiki/Network_interface) connected to other networks, with a physical or conceptual air gap, analogous to the [air gap](https://en.wikipedia.org/wiki/Air_gap_(plumbing)) used in plumbing to maintain water quality.

https://en.wikipedia.org/wiki/Air_gap_(networking)

## Bastion Host

A **bastion host** is a special purpose computer on a network specifically designed and configured to withstand attacks. The computer generally hosts a single application, for example a [proxy server](https://en.wikipedia.org/wiki/Proxy_server), and all other services are removed or limited to reduce the threat to the computer. It is hardened in this manner primarily due to its location and purpose, which is either on the outside of a [firewall](https://en.wikipedia.org/wiki/Firewall_(computing)) or in a demilitarized zone ([DMZ](https://en.wikipedia.org/wiki/Demilitarized_zone_(computing))) and usually involves access from untrusted networks or computers.

https://en.wikipedia.org/wiki/Bastion_host
