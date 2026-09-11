---
title: OpenScorecard
translationKey: openscorecard
routeSlug: openscorecard
locale: en
origin: personal
summary: A reproducible B2B credit decisioning and model-governance lab built around temporal labels, explainable models, and reviewable policy.
status: Locally validated portfolio system · Not a production underwriting service
visibility: private-source
technologies:
  - Python
  - FastAPI
  - Explainable ML
  - OOT validation
  - Model governance
  - Synthetic data
lastVerified: 2026-08-21
draft: false
---

## The decision problem

The reference scenario is a B2B supplier deciding how to manage trade credit for SME customers. The target is defined in time: whether a company reaches 30 or more days past due during a 90-day performance window after an observation date.

That contract matters. Features must be available at the observation date, and future payment behavior must not leak into training inputs.

## Reproducible evidence

The workflow generates a deterministic synthetic SME portfolio, validates its schema and temporal rules, and reuses the same data contract across training, validation, and out-of-time periods. Failed quality or leakage gates block further modeling work.

A logistic baseline, an interpretable WOE scorecard candidate, and a tree challenger are compared on the same temporal split. The review considers discrimination, calibration, stability, sample evidence, and policy impact rather than selecting a model from one headline metric.

## Model governance and policy separation

Model approval is explicit. A versioned Model Card and governance decision record the evidence and can reject a candidate when mandatory gates fail.

The model estimates risk; a separate versioned policy maps that estimate to grades, terms, proposed limits, reason codes, and human-review requirements. This separation allows policy thresholds to change without pretending the model itself made the business decision.

## Review experience

A read-only local experience connects portfolio overview, company review, model validation, and monitoring evidence. Score contributions can reconstruct the total score and support ranked reasons. Monitoring separates immediately available drift signals from performance evidence that only becomes meaningful after labels mature.

## Honest boundary

The system uses synthetic data and is presented as a research and portfolio lab. Synthetic performance does not represent a real credit portfolio. Production underwriting would require representative data, independent validation, fairness and legal review, authentication, controlled model operations, durable audit retention, and accountable human oversight.
