# Post Quantum Cryptography

Post-quantum cryptography (PQC) is the development of cryptographic algorithms that are resistant to attacks from quantum computers. It's also known as quantum-proof, quantum-safe, or quantum-resistant.

PQC algorithms are usually public-key algorithms. They rely on mathematical problems that are thought to be difficult for quantum computers to solve.

Some classes of PQC systems include:

1. **Lattice-based cryptography:** This approach relies on the hardness of certain problems associated with lattices, which are mathematical structures. - [Lattice-based cryptography: The tricky math of dots - YouTube](https://www.youtube.com/watch?v=QDdOoYdb748&ab_channel=ChalkTalk)

2. **Hash-based cryptography:** This involves using hash functions to achieve secure digital signatures, key exchange, and other cryptographic functionalities.

3. **Code-based cryptography:** It leverages the hardness of decoding random linear codes to achieve security.

4. **Multivariate polynomial cryptography:** This approach uses the difficulty of solving systems of multivariate polynomial equations for cryptographic purposes.

5. **Isogeny-based cryptography:** It utilizes the difficulty of finding isogenies between elliptic curves for key exchange and other cryptographic tasks.

6. **Symmetric-key post-quantum cryptography:** This involves developing quantum-resistant symmetric-key encryption and authentication algorithms.

## Standards

- FIPS203
- FIPS204
- FIPS205
- [Module-Lattice-Based Key-Encapsulation Mechanism Standard](https://csrc.nist.gov/pubs/fips/203/ipd)

### Dilithium

Dilithium is a digital signature scheme that is strongly secure under chosen message attacks based on the hardness of lattice problems over module lattices. The security notion means that an adversary having access to a signing oracle cannot produce a signature of a message whose signature he hasn't yet seen, nor produce a different signature of a message that he already saw signed. Dilithium is one of the candidate algorithms submitted to the [NIST post-quantum cryptography project](https://csrc.nist.gov/Projects/Post-Quantum-Cryptography).

[Dilithium](https://pq-crystals.org/dilithium/)

## Quantum key distribution

**Quantum key distribution** (**QKD**) is a [secure communication](https://en.wikipedia.org/wiki/Secure_communication "Secure communication") method that implements a [cryptographic protocol](https://en.wikipedia.org/wiki/Cryptographic_protocol "Cryptographic protocol") involving components of [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics "Quantum mechanics"). It enables two parties to produce a shared [random](https://en.wikipedia.org/wiki/Randomness "Randomness") secret [key](https://en.wikipedia.org/wiki/Key_(cryptography) "Key (cryptography)") known only to them, which then can be used to encrypt and decrypt [messages](https://en.wikipedia.org/wiki/Messages "Messages"). The process of quantum key distribution is not to be confused with [quantum cryptography](https://en.wikipedia.org/wiki/Quantum_cryptography "Quantum cryptography"), as it is the best-known example of a quantum-cryptographic task.

[Quantum key distribution - Wikipedia](https://en.wikipedia.org/wiki/Quantum_key_distribution)

## Questions

### 1. Algorithm Suitability and Performance

- Which post-quantum cryptographic algorithms are most suitable for different applications (e.g., public-key encryption, digital signatures, key exchange)?
- How do the performance characteristics of post-quantum algorithms compare to traditional cryptographic algorithms in terms of speed, key sizes, and memory requirements?

### 2. Security Analysis

- What is the level of security provided by various post-quantum cryptographic algorithms, especially in the face of potential quantum attacks?
- How do these algorithms fare against both classical and quantum adversaries?

### 3. Integration Challenges

- How smoothly can post-quantum cryptographic algorithms be integrated into existing systems and protocols?
- Are there potential compatibility issues with legacy systems, and how can they be addressed?

### 4. Standardization and Interoperability

- What standardization efforts are needed to ensure a smooth transition to post-quantum cryptography?
- How can interoperability between different post-quantum cryptographic solutions be achieved?

### 5. Quantum-Safe Protocols

- What modifications are necessary for current cryptographic protocols to become quantum-safe?
- Can existing protocols be adapted, or do new protocols need to be developed?

### 6. Quantum Key Distribution (QKD)

- How practical and scalable are quantum key distribution systems in real-world scenarios?
- What are the challenges in deploying and maintaining QKD networks?

### 7. Key Management

- What are the best practices for key management in a post-quantum cryptographic environment?
- How can organizations securely transition from traditional to post-quantum cryptographic systems?

### 8. Efficiency and Resource Constraints

- How can the efficiency of post-quantum cryptographic algorithms be improved without compromising security?
- What strategies can be employed to minimize resource requirements for post-quantum cryptography in resource-constrained environments?

### 9. Cryptanalysis and NIST PQC Standardization

- What progress has been made in cryptanalysis of post-quantum cryptographic algorithms?
- How can the ongoing NIST Post-Quantum Cryptography Standardization process address emerging challenges and ensure the selection of robust algorithms?

### 10. Public Awareness and Adoption

- How can awareness about the importance of post-quantum cryptography be increased among organizations and the general public?
- What are the challenges in achieving widespread adoption of post-quantum cryptographic solutions?

## Others

- harvest now decrypt later

## Links

[Post-quantum cryptography - Wikipedia](https://en.wikipedia.org/wiki/Post-quantum_cryptography)

[Post-quantum Cryptography - Microsoft Research](https://www.microsoft.com/en-us/research/project/post-quantum-cryptography/)

[Home | Synergy Quantum](https://www.synergyquantum.swiss/)

[Post-quantum cryptography: Security after Shor’s algorithm - YouTube](https://www.youtube.com/watch?v=_C5dkUiiQnw)
[Learning with errors: Encrypting with unsolvable equations - YouTube](https://www.youtube.com/watch?v=K026C5YaB3A&ab_channel=ChalkTalk)

[Introducing s2n-tls, a New Open Source TLS Implementation | AWS Security Blog](https://aws.amazon.com/blogs/security/introducing-s2n-a-new-open-source-tls-implementation/)

[Post-Quantum Cryptography - YouTube](https://www.youtube.com/playlist?list=PLA-8aGQm6tkK3-tamUTrVgYsNP3hNY3t2)

[HSMs & PKCS#11 Explained - YouTube](https://www.youtube.com/playlist?list=PLA-8aGQm6tkIgd8-zi4PtCO79qmmtKyCm)

[Java Keystores Explained - YouTube](https://www.youtube.com/playlist?list=PLA-8aGQm6tkJgHnLcTyKo_4Qmhc6it5AF)
