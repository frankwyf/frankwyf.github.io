---
title: OpenScorecard
translationKey: openscorecard
routeSlug: openscorecard
locale: en
origin: personal
maturity: portfolio-system
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
lastVerified: 2026-10-10
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

## Engineering Evidence

The workflow treats the dataset contract and observation date as first-class inputs. Candidate models are compared on separated temporal evidence, while governance and credit policy remain independent decisions.

<figure class="case-architecture" tabindex="0">
  <img src="/images/architecture/openscorecard.svg" alt="Sanitised OpenScorecard workflow: a deterministic synthetic SME portfolio passes schema, time, and leakage gates; train, validation, and out-of-time data support model comparison, governance, separate policy, and a local read-only review." />
  <figcaption>Swipe horizontally to inspect the diagram. Flow: synthetic SME data → schema, time, and leakage checks → time-separated model comparison → governance gates → versioned credit policy → local read-only review. This is a local portfolio system, not a deployed underwriting service.</figcaption>
</figure>

### Implemented capabilities

- Deterministic synthetic SME portfolio generation with explicit observation and performance windows.
- Schema, data-quality, and temporal leakage checks before modeling.
- Explainable scorecard, logistic baseline, and tree challenger comparison on the same temporal split.
- Out-of-time, calibration, stability, and segment evidence with explicit governance gates and a versioned Model Card.
- Separate, versioned decision policy with contribution-grounded reason codes and human-review bands.
- Read-only local review views for portfolio overview, company evidence, validation, and monitoring.

### Local verification

On 10 October 2026, the local source suite completed with 486 passed and 3 skipped; two skips require `pyarrow`, and one requires local socket binding. Ruff and the dependency-lock check passed. `python scripts/validate_portfolio_evidence.py` passed for the synthetic fixture (`companies=3`, `files=1`); it checks public-safe markers, deterministic ordering, probability semantics, governance fields, and reconstructable score contributions, not ML quality. Mypy was unavailable in this checkout, so no type-check result is claimed. The repository is private-source and these results are local, not a public CI badge.

### Technical decisions and demonstration

- Keep the target label and observation/performance windows explicit so future information cannot leak into model inputs.
- Compare candidates using the same temporal evidence rather than one headline metric.
- Keep model risk estimates separate from versioned grades, terms, and human-review policy.
- Keep the browser review experience read-only and use synthetic portfolio evidence.

The canonical local experiment is available in the private source checkout through `make portfolio`; it generates versioned synthetic artifacts. No hosted interactive demo or approved public screenshot is linked here, and local generated results are not bundled into this site.

## Honest boundary

The system uses synthetic data and is presented as a research and portfolio lab. Synthetic performance does not represent a real credit portfolio. Production underwriting would require representative data, independent validation, fairness and legal review, authentication, controlled model operations, durable audit retention, and accountable human oversight.
