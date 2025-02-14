# Vulnerabilities

1. Spectre
2. Meltdown
3. MDS (Microarchitectural Data Sampling) - https://www.redhat.com/en/blog/understanding-mds-vulnerability-what-it-why-it-works-and-how-mitigate-it
4. HeartBleed (2014)

Heartbleed allows hackers to steal private keys from what should be secure servers. Infected servers were left wide open to let anyone on the Internet read the memory in systems being protected by a vulnerable version of OpenSSL. The breach let threat actors steal data from servers or listen in on conversations or even spoof services and other users.

https://access.redhat.com/security/vulnerabilities

## Open Web Application Security Project (OWASP)

The Open Web Application Security Project (OWASP) is an online community that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of [web application security](https://en.wikipedia.org/wiki/Web_application_security).

[The History and Future of OWASP](https://youtu.be/FrU2xaOVDgE)

[OWASP API Security Top 10 Course - Secure Your Web Apps - YouTube](https://www.youtube.com/watch?v=YYe0FdfdgDU)

## OWASP Top Ten

### [Injection](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A1-Injection)

Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

### [Broken Authentication](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication)

Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users' identities temporarily or permanently.

### [Sensitive Data Exposure](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A3-Sensitive_Data_Exposure)

Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.

### [XML External Entities (XXE)](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A4-XML_External_Entities_(XXE))

Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.

### [Broken Access Control](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A5-Broken_Access_Control)

Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users' accounts, view sensitive files, modify other users' data, change access rights, etc.

### [Security Misconfiguration](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration)

Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. Not only must all operating systems, frameworks, libraries, and applications be securely configured, but they must be patched/upgraded in a timely fashion.

### [Cross-Site Scripting XSS](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS))

XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the victim's browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.

A type of computer security vulnerability typically found in web applications. XSS enables attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy.- Reflected XSS

It depends on site immediately reflecting a user input (the search query) back onto the page.- Stored XSS

This happens when the malicious code (usually an injected script, like in our example) isstored on the target site's servers. A classic example is storing user-generated comments without sanitizing them. An attacker could leave a malicious comment that injects a script, andanyone who views that comment would be affected.

Prevention - Sanitize user inputs

#### XSRF/CSRF - Cross Site Request Forgery

Cross-site request forgery, also known as one-click attack or session riding and abbreviated as CSRF or XSRF, is a type of malicious [exploit](https://en.wikipedia.org/wiki/Exploit_(computer_security)) of a [website](https://en.wikipedia.org/wiki/Website) where unauthorized commands are transmitted from a [user](https://en.wikipedia.org/wiki/User_(computing)) that the web application trusts. There are many ways in which a malicious website can transmit such commands; specially-crafted image tags, hidden forms, and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) XMLHttpRequests, for example, can all work without the user's interaction or even knowledge. Unlike [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)(XSS), which exploits the trust a user has for a particular site, CSRF exploits the trust that a site has in a user's browser

https://en.wikipedia.org/wiki/Cross-site_request_forgery

https://victorzhou.com/blog/csrf

https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html

https://www.freecodecamp.org/news/what-is-cross-site-request-forgery

https://victorzhou.com/blog/xss

### [Insecure Deserialization](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A8-Insecure_Deserialization)

Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks.

### [Using Components with Known Vulnerabilities](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities)

Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.

### [Insufficient Logging & Monitoring](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A10-Insufficient_Logging%252526Monitoring)

Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.

https://owasp.org/www-project-top-ten

https://www.cloudflare.com/learning/security/threats/owasp-top-10

https://www.toptal.com/security/owasp-top-10-changelog-2017-revision

## OWASP Cheat Sheet

- [AJAX Security](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html)
- [Abuse Case](https://cheatsheetseries.owasp.org/cheatsheets/Abuse_Case_Cheat_Sheet.html)
- [Access Control](https://cheatsheetseries.owasp.org/cheatsheets/Access_Control_Cheat_Sheet.html)
- [Attack Surface Analysis](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html)
- [Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Authorization Testing Automation](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Testing_Automation_Cheat_Sheet.html)
- [Bean Validation](https://cheatsheetseries.owasp.org/cheatsheets/Bean_Validation_Cheat_Sheet.html)
- [Choosing and Using Security Questions](https://cheatsheetseries.owasp.org/cheatsheets/Choosing_and_Using_Security_Questions_Cheat_Sheet.html)
- [Clickjacking Defense](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html)
- [Content Security Policy](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
- [Credential Stuffing Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Credential_Stuffing_Prevention_Cheat_Sheet.html)
- [Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [Cryptographic Storage](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [DOM based XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)
- [Database Security](https://cheatsheetseries.owasp.org/cheatsheets/Database_Security_Cheat_Sheet.html)
- [Denial of Service](https://cheatsheetseries.owasp.org/cheatsheets/Denial_of_Service_Cheat_Sheet.html)
- [Deserialization](https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html)
- [Docker Security](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)
- [DotNet Security](https://cheatsheetseries.owasp.org/cheatsheets/DotNet_Security_Cheat_Sheet.html)
- [Error Handling](https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html)
- [File Upload](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
- [Forgot Password](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)
- [HTML5 Security](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- [Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html)
- [Injection Prevention in Java](https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_in_Java_Cheat_Sheet.html)
- [Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [Insecure Direct Object Reference Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)
- [JAAS](https://cheatsheetseries.owasp.org/cheatsheets/JAAS_Cheat_Sheet.html)
- [JSON Web Token for Java](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html)
- [Key Management](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)
- [LDAP Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LDAP_Injection_Prevention_Cheat_Sheet.html)
- [Logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [Mass Assignment](https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html)
- [Microservices based Security Arch Doc](https://cheatsheetseries.owasp.org/cheatsheets/Microservices_based_Security_Arch_Doc_Cheat_Sheet.html)
- [Multifactor Authentication](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html)
- [Nodejs Security](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- [OS Command Injection Defense](https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html)
- [PHP Configuration](https://cheatsheetseries.owasp.org/cheatsheets/PHP_Configuration_Cheat_Sheet.html)
- [Password Storage](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Pinning](https://cheatsheetseries.owasp.org/cheatsheets/Pinning_Cheat_Sheet.html)
- [Query Parameterization](https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html)
- [REST Assessment](https://cheatsheetseries.owasp.org/cheatsheets/REST_Assessment_Cheat_Sheet.html)
- [REST Security](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
- [Ruby on Rails](https://cheatsheetseries.owasp.org/cheatsheets/Ruby_on_Rails_Cheat_Sheet.html)
- [SAML Security](https://cheatsheetseries.owasp.org/cheatsheets/SAML_Security_Cheat_Sheet.html)
- [SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [Securing Cascading Style Sheets](https://cheatsheetseries.owasp.org/cheatsheets/Securing_Cascading_Style_Sheets_Cheat_Sheet.html)
- [Server Side Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Session Management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [TLS Cipher String](https://cheatsheetseries.owasp.org/cheatsheets/TLS_Cipher_String_Cheat_Sheet.html)
- [Third Party Javascript Management](https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html)

## [Threat Modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)

Threat modeling is a process by which potential threats, such as [structural vulnerabilities](https://en.wikipedia.org/wiki/Structural_vulnerability_(computing)) or the absence of appropriate safeguards, can be identified, enumerated, and mitigations can be prioritized. The purpose of threat modeling is to provide defenders with a systematic analysis of what controls or defenses need to be included, given the nature of the system, the probable attacker's profile, the most likely attack vectors, and the assets most desired by an attacker. Threat modeling answers questions like"Where am I most vulnerable to attack?","What are the most relevant threats?", and"What do I need to do to safeguard against these threats?".

### Threat modeling methodologies

#### STRIDE

STRIDE is a model of threats developed by Praerit Garg and [Loren Kohnfelder](https://en.wikipedia.org/wiki/Loren_Kohnfelder) at [Microsoft](https://en.wikipedia.org/wiki/Microsoft) for identifying [computer security](https://en.wikipedia.org/wiki/Computer_security)[threats](https://en.wikipedia.org/wiki/Threat_(computer)).It provides a [mnemonic](https://en.wikipedia.org/wiki/Mnemonic) for security threats in six categories.

The threats are:

- [Spoofing](https://en.wikipedia.org/wiki/Spoofing_attack)
- [Tampering](https://en.wikipedia.org/wiki/Tampering_(crime))
- [Non-Repudiation](https://en.wikipedia.org/wiki/Non-repudiation)
    - Non-repudiation means **a user cannot deny (repudiate) having performed a transaction**. It combines authentication and integrity: non-repudiation authenticates the identity of a user who performs a transaction, and ensures the integrity of that transaction.
- Information disclosure ([privacy breach](https://en.wikipedia.org/wiki/Data_privacy) or [data leak](https://en.wikipedia.org/wiki/Data_leak))
- [Denial of service](https://en.wikipedia.org/wiki/Denial-of-service_attack)
- [Elevation of privilege](https://en.wikipedia.org/wiki/Privilege_escalation)

https://en.wikipedia.org/wiki/STRIDE_(security)

#### PASTA

Process for Attack Simulation and Threat Analysis (PASTA) is a seven-step, risk-centric methodology.

#### Trike

https://en.wikipedia.org/wiki/Threat_model- [Transaction Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html)

- [Transport Layer Protection](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)
- [Unvalidated Redirects and Forwards](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html)
- [User Privacy Protection](https://cheatsheetseries.owasp.org/cheatsheets/User_Privacy_Protection_Cheat_Sheet.html)
- [Virtual Patching](https://cheatsheetseries.owasp.org/cheatsheets/Virtual_Patching_Cheat_Sheet.html)
- [Vulnerability Disclosure](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html)
- [Vulnerable Dependency Management](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html)
- [Web Service Security](https://cheatsheetseries.owasp.org/cheatsheets/Web_Service_Security_Cheat_Sheet.html)
- [XML External Entity Prevention](https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html)
- [XML Security](https://cheatsheetseries.owasp.org/cheatsheets/XML_Security_Cheat_Sheet.html)

https://cheatsheetseries.owasp.org

## Social Engineering

"Social engineering" refers to the use of humans as an attack vector to compromise a system. It involves fooling or otherwise manipulating human personnel into revealing information or performing actions on the attacker's behalf. Social engineering is known to be a very effective attack strategy, since even the strongest security system can be compromised by a single poor decision. In some cases, highly secure systems that cannot be penetrated by computer or cryptographic means, can be compromised by simply calling a member of the target organization on the phone and impersonating a colleague or IT professional.
Common social engineering techniques include [phishing](https://en.wikipedia.org/wiki/Phishing), [clickjacking](https://en.wikipedia.org/wiki/Clickjacking), and [baiting](https://en.wikipedia.org/wiki/Social_engineering_%28security%29#Baiting), although several other tricks are at an attacker's disposal.

## Phishing

### Spear Phishing

Spear phishing involves selectively targetting employees, [and developers are especially vulnerable](https://www.teiss.co.uk/threats/developers-vulnerable-phishing-attacks/). Spear phishers will discover information about you, and then selectively use it against you.

### Impersonating Services

This is the most well-known form of phishing. It involves posing as a business, often styling emails to look like what that business would typically send.

### Smishing

Smishing (SMS phishing) is similar to standard phishing emails, but over SMS instead. Smishing texts will usually impersonate companies and encourage you to click on a link or give away your personal info.

### Vishing

Vishing ("voice" and "phishing") involves phishing through phone calls. Of course, this isn't a big deal to us, because what kind of developer seriously answers the phone nowadays? Just send me a text, FFS.

https://dev.to/kathyra_/protect-yourself-from-social-engineering-3ihk

## Kill Chain

The term kill chain was originally used as a [military](https://en.wikipedia.org/wiki/Military) concept related to the structure of an [attack](https://en.wikipedia.org/wiki/Offensive_(military)); consisting of target identification, force dispatch to target, decision and order to attack the target, and finally the destruction of the target.Conversely, the idea of "breaking" an opponent's kill chain is a method of [defense](https://en.wikipedia.org/wiki/Defense_(military)) or preemptive action.More recently, [Lockheed Martin](https://en.wikipedia.org/wiki/Lockheed_Martin) adapted this concept to [information security](https://en.wikipedia.org/wiki/Information_security), using it as a method for modeling intrusions on a [computer network](https://en.wikipedia.org/wiki/Computer_network).The cyber kill chain model has seen some adoption in the information security community.However, acceptance is not universal, with critics pointing to what they believe are fundamental flaws in the model.

https://en.wikipedia.org/wiki/Kill_chain

## Tab Nabbing

Tabnabbing is a computer exploit which persuades users to submit their login details and passwords. The attack takes advantage of user trust and inattention to detail in regard totabs, and the ability of browsers to navigate across a page's origin in inactivetabsa long time after the page is loaded. This attack can be done even if JavaScript is disabled, using the "meta refresh" meta element, an HTML attribute used for page redirection that causes a reload of a specified new page after a given time interval. The attack takes advantage of the trust of the victim and the ability of modern web pages to rewritetabsand their contents for a long time after the page has been loaded.

## Air Gap

An air gapped machine is simply one that cannot connect to any outside agents. From the highest level being the internet, to the lowest being an intranet or even bluetooth.
Air gapped machines are isolated from other computers, and are important for storing sensitive data or carrying out critical tasks that should be immune from outside interference. For example, a nuclear power plant should be operated from computers that are behind a full air gap. For the most part, real world air gapped computers are usually connected to some form of intranet in order to make data transfer and process execution easier. However, every connection increases the risk that outside actors will be able to penetrate the system.

https://www.toptal.com/security/interview-questions
