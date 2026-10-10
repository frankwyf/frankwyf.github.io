---
title: AI Revenue & Credit Operations Platform
translationKey: ai-revenue-credit-operations
routeSlug: ai-revenue-credit-operations
locale: en
origin: personal
maturity: portfolio-system
summary: A production-minded B2B operations platform that keeps financial logic deterministic while using AI for grounded retrieval and bounded assistance.
status: Local release candidate · Cloud templates not deployed
visibility: private-source
technologies:
  - Python
  - FastAPI
  - PostgreSQL
  - pgvector
  - RAG
  - RBAC
  - Evaluation
  - AWS design
lastVerified: 2026-10-10
draft: false
---

## The business problem

Revenue and credit teams often work across customer, contract, invoice, payment, refund, usage, and credit-limit data. They need fast answers, but a fluent model response is not an acceptable source of truth for money, permissions, or high-impact actions.

The platform explores how an AI-assisted workflow can help analysts find evidence and prepare recommendations without weakening the underlying accounting, tenancy, authorization, approval, or audit boundaries.

## The engineering response

The system starts with a deterministic core: exact monetary calculations, currency isolation, aging, reconciliation, data-quality validation, and persisted evidence. AI capabilities sit outside that core and cannot redefine its results.

Contract retrieval is tenant-scoped and evidence-backed. Answers require supporting citations; missing evidence produces a refusal. Tools are allow-listed, schema validated, permission checked, bounded, and audited. The model cannot create a new permission or call arbitrary SQL or shell commands.

## Human control and audit

Recommendations are drafts rather than actions. A separate authorized reviewer must approve the current version before an idempotent dry-run adapter can simulate the result. Creator/reviewer separation, optimistic concurrency, approval-bound tokens, and append-only redacted audit events make the control path visible.

## Engineering Evidence

The architecture keeps financial truth in deterministic services and places retrieval and optional AI assistance behind explicit identity, tenant, tool, and human-review boundaries.

<figure class="case-architecture">
  <img src="/images/architecture/ai-revenue-credit-operations.svg" alt="Sanitised architecture: authenticated requests pass identity and tenant checks, deterministic finance and data services, tenant-scoped evidence retrieval, optional bounded AI, allow-listed tools, separate human review, and an audited dry-run." />
  <figcaption>A public-safe architecture summary; it omits source-level and deployment-specific details.</figcaption>
</figure>

### Implemented capabilities

- Exact `Decimal` financial summaries, aging, and reconciliation with currency isolation.
- Synthetic-data quality validation, quarantine, persisted quality runs, and versioned rules.
- Tenant-filtered contract retrieval with citations and refusal when evidence is missing.
- Allow-listed, schema-validated, permission-aware, audited tools and bounded orchestration.
- Signed local identities, five-role RBAC, separate creator/reviewer control, approval-bound idempotent dry-run actions, and redacted audit events.
- Versioned evaluation fixtures for retrieval, tool use, financial checks, adversarial handling, and tenant boundaries.

### Local verification

The private local checkout was checked on 10 October 2026 with `make check` and the synthetic evaluation runner (`python -m scripts.run_evaluations --report <output-file>`). The repository suite passed 122 tests with 92% application coverage. The evaluation runner passed 18 fixture cases; its default `schema-oracle-v1` validates dataset/report plumbing, not model quality. These are local verification results, not a public CI badge or hosted-service claim.

### Technical decisions and demonstration

- Keep money, permissions, and policy in deterministic code rather than generated text.
- Require tenant-scoped evidence and citations for contract answers; missing evidence fails closed.
- Restrict tool calls by schema and permission, then require a separate reviewer for simulated high-impact actions.
- Use deterministic fake providers by default; optional local inference stays behind provider interfaces.

There is no hosted interactive demo or approved public screenshot linked from this case study. The source and generated reports remain private; the public page exposes only this sanitised diagram and reviewed capability summary.

Container and AWS infrastructure definitions are reviewable engineering artifacts, not deployment claims. Cloud configuration remains disabled by default and has not been applied to a paid account.

## Honest boundary

This is a private-source portfolio system using synthetic data. It is not a production finance platform, and it does not perform irreversible collection or credit actions. Production use would require reviewed identity integration, deployed infrastructure validation, operational security testing, recovery exercises, and accountable business ownership.
