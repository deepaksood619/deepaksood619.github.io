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

## Email Security

### Domain-based Message Authentication, Reporting and Conformance (DMARC)

DMARC, or Domain-based Message Authentication, Reporting, and Conformance, is ==an email security protocol that helps protect email senders and recipients from fraud==. DMARC builds on the Domain Name System (DNS), DomainKeys Identified Mail (DKIM), and Sender Policy Framework (SPF) protocols to verify email senders.

Here are some benefits of DMARC:

- Protects against impersonation fraud: DMARC helps prevent phishing scams and other types of spoofing attacks.
- Improves visibility: Administrators can monitor emails sent from a domain to ensure they are properly authenticated.
- Troubleshoots delivery issues: DMARC allows domain owners to specify how to handle emails that fail authentication.

### DKIM

DomainKeys Identified Mail (DKIM) is ==an email authentication method that helps prevent spoofed senders and spam==. It works by adding a digital signature to an email, which is then verified using a public key in the domain's DNS records. DKIM is one of the most common ways to authenticate an email sender, along with SPF and DMARC.

Here's how DKIM works:

- Signing: The sender identifies the fields they want to include in the DKIM signature, such as the subject, body, and "from" address.
- Encryption: The email is encrypted using public and private keys.
- Verification: The public key in the domain's DNS records is used to decrypt the signature and verify that the email's content hasn't been changed.

DKIM signatures are usually not visible to the end user.

Here are some things to keep in mind about DKIM:

- Key management - DKIM key management is important for security, and longer keys are more secure.
- DNS - DKIM keys are long strings of random-looking data that can be easily mistyped in DNS. Even a simple copy and paste error can cause legitimate emails to fail DKIM.
- Integration - DKIM can be used with DMARC and SPF to protect domains from malicious emails.

### SPF Record

An SPF record, or Sender Policy Framework record, is a type of DNS TXT record that is used to validate the source of an email. It does this by specifying which IP addresses and domains are authorized to send emails from a particular domain.

**How SPF Records Work**

1. **Creation:** A domain owner creates an SPF record and adds it to their DNS zone.
2. **Email Sending:** When someone sends an email from a domain with an SPF record, the receiving mail server checks the SPF record to see if the sending server is authorized.
3. **Validation:** If the sending server is authorized, the email is accepted. If not, the email may be rejected or quarantined.

**Benefits of Using SPF Records**

- **Email Authentication:** SPF helps to prevent spam and phishing attacks by ensuring that only authorized servers can send emails from a domain.
- **Improved Deliverability:** Emails sent from domains with valid SPF records are more likely to be delivered to recipients' inboxes.
- **Reputation Management:** SPF can help to protect your domain's reputation by reducing the number of emails that are rejected or quarantined as spam.

**How to Create an SPF Record**

There are a number of online tools that can help you create an SPF record. You can also create one manually by following the instructions provided by your DNS provider.

**SPF Record Syntax**

SPF records are written as a single line of text, using a specific syntax. The record starts with the "v=" tag, followed by the SPF version number (currently "spf1"). The rest of the record consists of a series of mechanisms and modifiers that define which IP addresses and domains are authorized to send emails from the domain.

**Example:**

v=spf1 mx ip4:192.168.1.1 include:_spf.google.com ~all

This record specifies that two servers are authorized to send emails from the domain: an MX server and an IP address with the address 192.168.1.1. It also includes a wildcard mechanism that allows any server that is not explicitly listed to send emails from the domain.

### Difference

==DMARC, DKIM, and SPF are email authentication methods that work together to prevent email spoofing and spam==:

- Sender Policy Framework (SPF)

    Lists the IP addresses of servers that can send emails from a domain. SPF uses DNS to publish this information.

- DomainKeys Identified Mail (DKIM)

    Uses cryptography to verify that an email came from the domain by adding a digital signature to the email. DKIM uses DNS to advertise the public keys that can be used to authenticate emails.

- Domain-based Message Authentication Reporting and Conformance (DMARC)

    Tells mail servers what to do if SPF or DKIM fail. DMARC uses DNS to advertise the policies that should be applied to emails that fail SPF or DKIM.

DMARC policies can include quarantining emails that fail SPF or DKIM. An email can pass DMARC if it passes either SPF or DKIM and aligns with the domain specified in the "From" header.

You can add SPF, DKIM, and DMARC records to your DNS settings, but you'll usually need to create and add them yourself. You can ask your web hosting service for help, or use a third-party tool or service.

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
