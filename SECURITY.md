# Security Policy

## PII Redaction Protocols

At The Loyalty Loop, we prioritize the security and privacy of our merchants and their customers. For our enterprise partners ($500K+ ARR), we implement strict Personally Identifiable Information (PII) redaction protocols to ensure compliance and build trust:

1. **Data Masking at Ingestion**: All PII (including names, email addresses, phone numbers, and physical addresses) is automatically masked or tokenized at the ingestion layer before entering our core agentic loops.
2. **Zero-Retention Inference**: Our AI models process customer sentiment and behavioral heuristics in memory. PII is never stored in model weights, training logs, or prompt histories.
3. **In-Transit & At-Rest Encryption**: All data is encrypted in transit using TLS 1.3 and at rest utilizing AES-256 encryption.
4. **Role-Based Access Control (RBAC)**: Access to unmasked data (where explicitly authorized for support or integration purposes) is strictly limited to authorized personnel and requires multi-factor authentication.
5. **Audit Logging**: All access to sensitive data and system configurations is logged, immutable, and actively monitored for anomalous behavior.

## Reporting a Vulnerability

If you discover a security vulnerability or have concerns regarding our PII handling, please send an email to security@theloyaltyloop.com. We will review and respond within 24 hours.
