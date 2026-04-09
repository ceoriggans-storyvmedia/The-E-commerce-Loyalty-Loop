# Security Review Checklist

This checklist must be completed to ensure any Python middleware used for PII redaction is audited before interacting with the Vertex AI APIs.

## PII Redaction (Middleware)
- [ ] Redaction layer is implemented in `/middleware`.
- [ ] All incoming payloads from Shopify/Salesforce are routed through the redaction layer.
- [ ] Names, emails, phone numbers, and physical addresses are successfully masked or tokenized.
- [ ] Redaction logic has been unit tested with edge cases.

## Vertex AI API Interaction
- [ ] No unmasked PII is sent to Vertex AI or any LLM endpoints.
- [ ] `google-cloud-aiplatform` is configured with least-privilege IAM roles.
- [ ] Zero-retention policies are verified for in-memory processing.

## Integrations (Shopify & Salesforce)
- [ ] Secure OAuth modules are used in `/integrations`.
- [ ] Tokens are stored securely and refreshed appropriately.
- [ ] API scopes are restricted to the minimum required for the loyalty agent logic.

## Audit & Compliance
- [ ] Code review completed by a security-designated engineer.
- [ ] Audit logging is enabled for all sensitive data access.
