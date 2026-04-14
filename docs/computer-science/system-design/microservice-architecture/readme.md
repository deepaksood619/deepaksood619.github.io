# Microservice Architecture

- [Mircroservice Architecture](computer-science/system-design/microservice-architecture/intro.md)
- [Design Patterns](computer-science/system-design/microservice-architecture/design-patterns.md)
- [Domain Driven Design](domain-driven-design)
- [Example](computer-science/system-design/microservice-architecture/example.md)

[Data Sharing Between Microservices - ByteByteGo Newsletter](https://blog.bytebytego.com/p/data-sharing-between-microservices)

![Data Sharing Between Microservices](../../../media/Screenshot%202024-10-18%20at%206.55.20%20PM.jpg)

[text \| Muhammed Umar posted on the topic \| LinkedIn](https://www.linkedin.com/posts/umar482_fire-anyone-who-suggests-microservices-before-share-7448356773079756800-iGL2)

Founder raises $500K. CTO proposes "scalable architecture."

Founder agrees because CTO went to Stanford.

Month 1: Kubernetes setup
Month 2: CI/CD pipeline configuration
Month 3: Microservices architecture debate
Month 4: GraphQL vs REST holy war
Month 8: $400K burned. Zero users. Zero revenue.

Meanwhile competitor:

- Next.js + Supabase + Stripe
- Launched in 6 weeks
- $50K MRR
- $86/month infrastructure bill

The brutal math:
Your "enterprise" stack:
→ $52K/month AWS bill
→ 3 DevOps engineers at $150K each
→ 8 months to first feature
→ $0 revenue

Their "amateur" stack:

- $86/month total
- 0 DevOps engineers
- 6 weeks to first customer
- $50K MRR

Your 47-user startup with 14 microservices has more infrastructure than WhatsApp had at 100M users.

The one test for every architectural decision: Does this help us get the next paying customer?

Kubernetes: No.
GraphQL: No.
Redis: No.
Microservices: No.

Next.js + Supabase + Stripe: Yes.

Complexity is not competence.
