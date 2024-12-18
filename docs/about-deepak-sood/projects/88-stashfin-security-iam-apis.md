# Stashfin Security / IAM / APIs

## Security

### External + processes

Followed - AAA - Authentication, Authorization and Audit with best practices

- Cloudflare WAF + fixing all our own APIs that were getting blocked because of using unsafe practices like non-escaped inputs, unsanitized inputs, etc
- Regular VAPT tests and fixing each vulnerability, scheduled the reports monthly, so in monthly hackathons, whole team can address multiple vulnerabilities in one sitting
- Regularly and automated rotating all keys
- Service mesh + Cloudflare for monitoring all APIs and status codes

### Internal

- Added private VPN and blocked all internet traffic coming from outside to internal applications, added openvpn for developers to access internal resources and jump server to access internal compute instances
- Eventually moved to zero trust access, between applications too, where each application will have it’s own api keys to access another application.
- Centralized internal IAM for internal users’ applications access using keycloak for devops resources and django-admin for other applications
- Using groups for permissions and adding users to groups instead of individual permissions
- Immutable audit logs for all changes
- No access to production databases
- Rate limits for ddos protection in open public client APIs

### Immutable Logs for Audit

![stashfin-immutable-audit-logs](../../media/Pasted%20image%2020231201175020.jpg)

### Authorization

![stashfin-authorization](../../media/Pasted%20image%2020231201175035.jpg)

### Postman implementation and documentation of all APIs

[Stashfin Partners API](https://documenter.getpostman.com/view/16927648/TzzGGtg9)

![stashfin-screenshot](../../media/Pasted%20image%2020231201175731.jpg)

![stashfin-screenshot](../../media/Pasted%20image%2020231201175751.jpg)

#### API Testing

![stashfin-screenshot](../../media/Pasted%20image%2020231201175759.jpg)

## WebView Implementations

### WebView inside Apps

- Customer support
- Payments
- New products
    - referral
    - brand ambassador program
    - stashearn

![stasfin-screenshot](../../media/Pasted%20image%2020231201180310.jpg)

![stashfin-screenshot](../../media/Pasted%20image%2020231201180349.jpg)

![stashfin-screenshot](../../media/Pasted%20image%2020231201180442.jpg)
