---
slug: /fedramp-20x-authorization-framework
title: FedRAMP 20x
description: A new approach to cloud security assessment and authorization that moves beyond traditional compliance narratives to automated, continuous validation of Key Security Indicators.
created: 2026-08-25
updated: 2026-08-25
---

FedRAMP 20x is the Federal Risk and Authorization Management Program's next-generation authorization framework. It replaces hundreds of narrative NIST 800-53 control descriptions with **Key Security Indicators (KSIs)** — measurable security outcomes that cloud service providers (CSPs) must prove through automated, machine-readable evidence rather than point-in-time paperwork audits.

## Why it was created

OMB Memorandum M-24-15 (July 2024) replaced prior FedRAMP policy with a vision centered on new authorization paths, automation, and government-wide cloud adoption — aiming to cut the time and cost of getting a cloud service authorized for federal use.

## Five Core Principles

1. **Transparency** — honest security information without arbitrary compliance bars
2. **Flexibility** — engineering decisions producing secure outcomes appropriate to the provider
3. **Accountability** — continuous enforcement, monitoring, and reporting instead of point-in-time audits
4. **Accuracy** — assess the effectiveness of decisions, not just the validity of each decision on paper
5. **Automatic Validation** — status and outcomes are enforced automatically wherever possible

## Key Security Indicators (KSIs)

63 KSIs are organized across 12 themes:

| Theme | Count | Focus |
|---|---|---|
| Cross-Cutting (CSX) | 3 | Implementation summaries, scope, priority ordering |
| Authorization by FedRAMP (AFR) | 10 | Vulnerability disclosure, scanning, POA&M, continuous monitoring |
| Cloud Native Architecture (CNA) | 8 | Network segmentation, DDoS protection, API security |
| Change Management (CMT) | 4 | Change control, immutable infrastructure |
| Identity and Access Management (IAM) | 7 | Phishing-resistant MFA, least privilege, JIT access |
| Monitoring, Logging, Auditing (MLA) | 5 | Audit logs, SIEM integration, config evaluation |
| Service Configuration (SVC) | 8 | Encryption, FIPS cryptography, secrets management |
| Recovery Planning (RPL) | 4 | RTO/RPO, backup procedures, recovery testing |
| Policy and Inventory (PIY) | 5 | Asset inventory, SDLC security |
| Incident Response (INR) | 3 | Response plans, post-incident reviews |
| Cybersecurity Education (CED) | 4 | Training programs across roles |
| Supply Chain Risk (SCR) | 2 | Risk assessments, third-party monitoring |

**Evidence and automation:**

- Automated validation must cover at least `70%` of KSIs (Phase 2 pilot requirement); every KSI must be addressed in both human-readable and machine-readable formats
- Machine-based KSI validation must run at least every 3 days for moderate-impact systems; non-machine KSIs require validation at least every 3 months
- Three validation buckets: fully automatable (e.g. encryption, MFA enforcement via config/security-hub tooling), process & documentation (e.g. training records, executive attestation), and hybrid (e.g. vulnerability detection requiring both scanning and remediation SLAs)
- In the Phase 2 pilot: 56 KSIs for the Low impact baseline, 61 for the Moderate impact baseline

## Certification Classes

- **Class A** — mature security programs entering the federal marketplace; minimal upfront requirements
- **Class B** — small-scale or light-use services with limited ongoing burden
- **Class C** — common enterprise services likely used across agencies
- **Class D** — future addition (Phase 4, estimated FY27 Q1-Q2), covering High-impact systems

## Rollout Phases (2025-2027)

- **Phase 1** (completed FY25) — Low-impact pilot, 26 submissions, 13 reviews completed
- **Phase 2** (completed FY26 Q1-Q2) — Moderate-impact pilot, 14 qualifying submissions
- **Phase 3** (active FY26 Q3-Q4) — wide-scale adoption; submission pipeline opens July 2026
- **Phase 4** (estimated FY27) — Class D (High-impact) pilot
- **Phase 5** (estimated FY27) — end of life for new Rev5 authorizations (June 11, 2027)

## How it differs from traditional FedRAMP

Traditional FedRAMP evaluates compliance against a uniform, government-wide set of controls with binary "secure/not secure" verdicts, assessed largely through narrative documentation at a point in time. FedRAMP 20x instead lets providers make context-dependent engineering decisions appropriate to their architecture, and continuously proves those decisions work via automated, machine-readable evidence — shifting from "did you document a plan" to "can you prove the control is operating right now."

## Related

- [Compliances](compliance.md) — SOC 2, PCI-DSS, and other compliance frameworks

## Links

- [FedRAMP 20x](https://www.fedramp.gov/20x/)
- [Deep dive into FedRAMP 20x Key Security Indicators: Decoding the 63 KSIs - AWS Public Sector Blog](https://aws.amazon.com/blogs/publicsector/deep-dive-into-fedramp-20x-key-security-indicators-decoding-the-63-ksis/)
