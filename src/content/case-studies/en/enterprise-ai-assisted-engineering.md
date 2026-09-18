---
title: AI-assisted engineering for enterprise planning workflows
translationKey: enterprise-ai-assisted-engineering
routeSlug: enterprise-ai-assisted-engineering
locale: en
origin: professional
maturity: ai-assisted
summary: End-to-end UAT and engineering automation for connected enterprise planning workflows, combining Python/Playwright, browser and network evidence, AI-assisted regression work, and human verification.
status: Professional experience · Public summary
visibility: case-study-only
technologies:
  - Python
  - Playwright
  - UAT
  - Browser and network inspection
  - Cross-layer debugging
  - AI-assisted engineering
lastVerified: 2026-09-11
draft: false
---

## Context

During the UAT phase of an enterprise planning-management system, I validated four connected areas: master-data maintenance, file import and replacement, aggregation and correction, and final confirmation. The work required reading business requirements and processing specifications alongside UAT data, application behavior, and source code.

This page is an anonymized professional summary. It does not expose internal screen identifiers, client details, source code, test fixtures, prompts, or issue links.

## My contribution

I designed end-to-end test plans and manual procedures, maintained Python/Playwright automation, and used browser interaction, network inspection, console logs, screenshots, and structured evidence to make failures reproducible. I also drafted structured Japanese GitHub Issues and prepared source-aware handoffs for remediation and regression verification.

AI agents supported test planning, regression execution, evidence collection, result summarization, and issue drafting. I retained responsibility for deciding whether behavior was defective, interpreting the specification, selecting safe test data, reviewing root causes, and approving final verification.

## Workflow

The working loop was:

1. Requirements and processing specifications
2. Test design and controlled browser execution
3. Network, console, screenshot, and output evidence
4. Frontend, backend, routing, and parser inspection
5. Structured developer handoff
6. Human-reviewed fix verification and regression

This joined business understanding with engineering diagnosis. A fluent AI summary was treated as a draft; the evidence and final judgment remained reviewable.

## Engineering investigations

Several investigations showed why cross-layer validation matters:

- **Import correctness:** a mismatch between an input file header and a parser assumption caused amount columns to be skipped and values to become zero. The investigation connected the file contract, parser behavior, and transformed output.
- **Backend filtering:** a request carried the intended business-unit parameter, but the returned rows were not filtered accordingly. Network evidence and source inspection separated a frontend request issue from a backend behavior defect.
- **Workflow integrity:** cross-screen routing, preview export availability, and final confirmation behavior were checked against the specification. Dangerous or state-changing operations were not executed casually in shared UAT data.

## Human review and safety

Navigation, dialog inspection, screenshots, and cancellation before confirmation could be automated in the shared environment. Save, reset, locking, final confirmation, and other state-changing operations required explicit human approval. Human review also covered defect interpretation, remediation acceptance, and final regression evidence.

## What this demonstrates

This experience demonstrates controlled AI-assisted engineering: requirements-to-code reasoning, reproducible evidence, Python/Playwright automation, source-level debugging, financial-data correctness, structured handoff, and safe human-in-the-loop operation. It complements my enterprise software, data integration, and personal Applied AI portfolio work.

## Boundary

The system and its internal materials remain private. This public page is a factual, anonymized summary of professional work. It is not a claim of autonomous testing, an enterprise-wide AI transformation, a production-scale agent platform, or mature production GenAI delivery.
