# Security and DR

## Security Architecture and Compliance

As a financial institution, BFB operates under strict regulatory frameworks (GDPR, CCPA, GLBA). The "Unknown Applicant" flow requires transmitting PII (SSN) to external bureaus, making security paramount.

### Client-Side Field Level Encryption (CSFLE)

Encryption at Rest (disk encryption) and Encryption in Transit (TLS) are insufficient. If an internal BFB administrator or a malicious actor gains access to the Kafka topic, they could read the SSNs.

**Solution: CSFLE**

We implement **Client-Side Field Level Encryption**.

1. **Encryption at Source:** The POS system (Producer) identifies sensitive fields (SSN, Date of Birth) based on the Schema Registry tags (`confluent:tags = 'PII'`).
2. **Key Management:** The POS system requests a Key Encryption Key (KEK) from BFB’s internal Key Management Service (AWS KMS or HashiCorp Vault).
3. **Ciphertext:** The producer encrypts _only_ the sensitive fields before the message leaves the POS application memory. The message payload sent to Confluent Cloud contains ciphertext for these fields.
4. **Confluent’s Role:** Confluent Cloud stores the message but _cannot_ decrypt it because it does not have access to the KEKs.

**Implications for Flink:**

To query the Credit Bureau, Flink _needs_ the plaintext SSN. This requires a specific security configuration:

- BFB must grant the Flink Compute Pool a specialized Identity/Role that has access to the KMS.
- Flink decrypts the SSN in volatile memory _only_ for the split-second required to construct the API request.
- The SSN is never written to any log or disk in plaintext.
- This pattern satisfies the "Need to Know" principle while enabling the necessary computation.

### RBAC and Audit Logging

Confluent Cloud’s Role-Based Access Control (RBAC) ensures separation of duties.

- **Developers:** Can view metadata and schema but cannot consume data from `loan_applications`.
- **Service Accounts:** The Flink App Service Account is strictly scoped to consume `loan_applications` and produce to `loan_decisions`.
- **Audit Logs:** Every access, decryption attempt, and configuration change is logged to an immutable Audit Log topic, which is sunk to BFB’s SIEM (Security Information and Event Management) system for compliance monitoring.

## Reliability and Disaster Recovery Strategy

BFB requires high availability. A regional outage cannot stop loan processing across the country.

### Cluster Linking for Disaster Recovery (DR)

We utilize **Confluent Cluster Linking** to create a robust DR strategy.

- **Architecture:** Active-Passive.
    - **Region A (Primary):** Handles all POS traffic and Flink processing.  
    - **Region B (DR):** Serves as a standby.
    - **Replication:** A Cluster Link is established from Region A to Region B. It replicates the `loan_applications`, `customer_360`, and `loan_decisions` topics byte-for-byte.
- **Offset Sync:** Crucially, Cluster Linking replicates **Consumer Offsets**. This means the state of the Flink application (which records it has processed) is constantly backed up to Region B.
- **Failover:** In the event of a Region A outage:
    1. POS systems are redirected to Region B’s API endpoint.
    2. Flink jobs are started in Region B.
    3. Because offsets are synced, Flink resumes processing exactly where it left off in Region A, ensuring zero data loss and minimal reprocessing (low RPO/RTO).
