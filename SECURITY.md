# Security & Compliance Policy

## Enterprise-Grade Data Protection

At The Loyalty Loop, we prioritize the security and privacy of our merchants and their customers. Designed specifically for enterprise partners ($500K+ ARR), our architecture implements strict Personally Identifiable Information (PII) redaction protocols to ensure compliance with global data protection regulations (including GDPR, CCPA, and SOC 2 standards).

### 1. PII Redaction Protocols
- **Data Masking at Ingestion**: All PII (including names, email addresses, phone numbers, and physical addresses) is automatically masked or tokenized at the ingestion layer (`/middleware`) before entering our core agentic loops.
- **Zero-Retention Inference**: Our AI models process customer sentiment and behavioral heuristics entirely in memory. PII is never stored in model weights, training logs, or prompt histories.

### 2. Infrastructure Security
- **In-Transit & At-Rest Encryption**: All data is encrypted in transit using TLS 1.3 and at rest utilizing AES-256 encryption within our Google Cloud Platform (GCP) environment.
- **VPC Service Controls**: Our backend services run within isolated Virtual Private Clouds (VPCs) to mitigate data exfiltration risks.

### 3. Access & Governance
- **Role-Based Access Control (RBAC)**: Access to unmasked data (where explicitly authorized for support or integration purposes) is strictly limited to authorized personnel and requires multi-factor authentication (MFA).
- **Audit Logging**: All access to sensitive data and system configurations is logged, immutable, and actively monitored for anomalous behavior using GCP Cloud Audit Logs.

### 4. Data Processing Agreement (DPA)
For our enterprise merchants, we offer a comprehensive Data Processing Agreement (DPA) that outlines our obligations as a data processor, ensuring your customer data is handled with the highest level of legal and technical scrutiny.

## Incident Response & Vulnerability Reporting

We maintain a 24/7/365 incident response team. If you discover a security vulnerability or have concerns regarding our PII handling, please send an email to **security@theloyaltyloop.com**. 

*Critical vulnerabilities reported by enterprise partners are guaranteed a response within 4 hours.*