# Others

## SE Radio - 321: End to End Encryption - Kim Carter with Peter Budai

IM, Voice over IP, Email scenarios, as well as inter service communication scenarios such as securing data in use with full memory encryption, CPU-based key storage, enclaves, cryptographic protocols (Secure multi-party computation and Homomorphic encryption).

## Tor (anonymity network)

Tor is [free and open-source software](https://en.wikipedia.org/wiki/Free_and_open-source_software) for enabling [anonymous communication](https://en.wikipedia.org/wiki/Internet_anonymity). The name is derived from an acronym for the original software project name "The Onion Router".Tor directs Internet traffic through a free, worldwide, volunteer [overlay network](https://en.wikipedia.org/wiki/Overlay_network) consisting of more than seven thousand relaysto conceal a user's location and usage from anyone conducting [network surveillance](https://en.wikipedia.org/wiki/Computer_surveillance#Network_surveillance) or [traffic analysis](https://en.wikipedia.org/wiki/Traffic_analysis#In_computer_security). Using Tor makes it more difficult to trace Internet activity to the user: this includes "visits to Web sites, online posts, instant messages, and other communication forms".Tor's intended use is to protect the personal privacy of its users, as well as their freedom and ability to conduct confidential communication by keeping their Internet activities from being monitored.

[Onion routing](https://en.wikipedia.org/wiki/Onion_routing) is implemented by [encryption](https://en.wikipedia.org/wiki/Encryption) in the [application layer](https://en.wikipedia.org/wiki/Application_layer) of a [communication protocol](https://en.wikipedia.org/wiki/Communication_protocol) stack, nested like the layers of an [onion](https://en.wikipedia.org/wiki/Onion). Tor encrypts the data, including the next node destination [IP address](https://en.wikipedia.org/wiki/IP_address), multiple times and sends it through a [virtual circuit](https://en.wikipedia.org/wiki/Virtual_circuit) comprising successive, random-selection Tor relays. Each relay decrypts a layer of [encryption](https://en.wikipedia.org/wiki/Encryption) to reveal the next relay in the circuit to pass the remaining encrypted data on to it. The final relay decrypts the innermost layer of encryption and sends the original data to its destination without revealing or knowing the source IP address. Because the routing of the communication was partly concealed at every hop in the Tor circuit, this method eliminates any single point at which the communicating peers can be determined through [network surveillance](https://en.wikipedia.org/wiki/Computer_and_network_surveillance) that relies upon knowing its source and destination.

duckduckgo - http://3g2upl4pq6kufc4m.onion

Facebook - https://www.facebookcorewwwi.onion

Hidden Wiki - http://zqktlwi4fecvo6ri.onion/wiki/index.php/Main_Page

https://en.wikipedia.org/wiki/Tor_(anonymity_network)

https://skerritt.blog/designing-effective-peer-to-peer-networks

## steganography

Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video. The word steganography combines the Greek words steganos, meaning "covered, concealed, or protected", and graphein meaning "writing".

https://en.wikipedia.org/wiki/Steganography

https://www.boxentriq.com/code-breaking

https://29a.ch/photo-forensics

[What is Steganography? How to Hide Data Inside Data](https://www.freecodecamp.org/news/what-is-steganography-hide-data-inside-data/)

[How to Build a Photo Encryption App using Steganography](https://www.freecodecamp.org/news/build-a-photo-encryption-app/)

## stegosploit

Stegosploit creates a new way to encode "drive-by" browser exploits and deliver them through image files. These payloads are undetectable using current means. This paper discusses two broad underlying techniques used for image based exploit delivery - Steganography and Polyglots. Drive-by browser exploits are steganographically encoded into JPG and PNG images. The resultant image file is fused with HTML and Javascript decoder code, turning it into an HTML+Image polyglot. The polyglot looks and feels like an image, but is decoded and triggered in a victim's browser when loaded.

[https://stegosploit.info](https://stegosploit.info/)

DMARC (Domain-based Message Authentication, Reporting and Conformance)

## Capture the Flag (CTF)

https://0x00sec.org/c/ctf

https://picoctf.org

CMDCTRL - https://cmdnctrl.net

## NT (New Technology) LAN Manager(NTLM)

In a [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) network, **NT (New Technology) LAN Manager(NTLM)** is a suite of [Microsoft](https://en.wikipedia.org/wiki/Microsoft) security protocols intended to provide authentication, integrity, and confidentiality to users.NTLM is the successor to the authentication protocol in Microsoft [LAN Manager](https://en.wikipedia.org/wiki/LAN_Manager)(LANMAN), an older Microsoft product. The NTLM protocol suite is implemented in a [Security Support Provider](https://en.wikipedia.org/wiki/SSPI#Windows_SSPs), which combines the [LAN Manager](https://en.wikipedia.org/wiki/LAN_Manager) authentication protocol, NTLMv1, NTLMv2 and NTLM2 Session protocols in a single package. Whether these protocols are used or can be used on a system is governed by [Group Policy](https://en.wikipedia.org/wiki/Group_Policy) settings, for which different versions of Windows have different default settings. NTLM passwords are considered weak because they can be brute-forced very easily with modern hardware.

## Zero Knowledge Proofs

What if the average developer could benefit from proofs of computational integrity (CI) that would normally require an in-depth knowledge of cryptography to implement?

CI proofs, of which zero-knowledge proofs (ZKPs) are a subset, are a cryptographic technology that let you do seemingly impossible things. For example, you can run a computation and get some result. You can then use a CI proof to convince anyone that you did the computation correctly without their having to rerun the computation themselves.And they can verify this correctness in just a few milliseconds, regardless of how complex or long-running the original computation was

https://engineering.fb.com/2021/08/04/open-source/winterfell

## Others

https://www.freecodecamp.org/news/what-is-devsecops

[What is a zero day attack? - YouTube](https://www.youtube.com/watch?v=aBuERMIJhZk)
