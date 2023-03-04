# Security

Security is a very important part of any communication. MQTT itself keeps everything as simple as possible and relies on other proven technologies for safeguards instead of reinventing the wheel.

## USERNAME / PASSWORD AUTHENTICATION

An MQTT CONNECT message can contain a username and password. The broker can authenticate and authorize with this information if such a mechanism is implemented. Many open-source brokers rely on Access Control Lists while other enterprise brokers allow coupling with user databases and/or LDAP systems.

## TRANSPORT SECURITY: TLS

A best practice when using MQTT is to add transport layer security if possible. With TLS, the complete communication between client and broker is encrypted, and no attacker can read any message exchanged. If feasible, X509 client certificate authentication adds an additional layer of security to the clients: trust. Some MQTT brokers, like HiveMQ, allow the use of X509 certificates in the plugin system for further processing (e.g. authorization).

## OTHER SECURITY MECHANISMS

Most enterprise MQTT brokers add additional security mechanisms, e.g. a plugin system where concrete logic can be hooked in. Additional security for MQTT communications can be gained when adding the following to clients / brokers:

- **Payload encryption:** This is application-specific. Clients can encrypt the payload of their PUBLISH messages. The shared secret has to be provisioned to all communication participants beforehand.
- **Payload signing:** If the MQTT broker of choice supports intercepting MQTT messages (e.g. with a plugin system), every received message payload can be intercepted
    and signed with a private key before distributing. The distributed messages can then be verified by the MQTT clients to make sure no one has modified the message.
- **Complex authentication protocols:** For many enterprise MQTT brokers, additional authentication methods can be implemented (e.g. OAuth 2, Kerberos, OpenID Connect, etc.).
- **Authorization / Topic Permissions:** Securing access to topics is often done with a permission concept. Some brokers offer restricting publish / subscribe permissions with a plugin system. This makes sure no one can subscribe to more information than needed, and that only specific clients can publish on specific topics.
