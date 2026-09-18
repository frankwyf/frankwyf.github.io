# Content Guide

## Languages

English is canonical. Core navigation, page headings, actions, project summaries, and flagship case studies must have Japanese and Simplified Chinese equivalents before release.

Use the same `translationKey` and `slug` across locale versions. English URLs live at root; Japanese and Chinese use `/ja/` and `/zh/`.

## Project claims

Write from evidence. Prefer:

- the business problem;
- the engineering decision;
- the implemented boundary;
- how correctness or safety is verified;
- current limitations.

Avoid lists of technologies without context. Never convert planned work into past tense.

## Professional evidence and source boundaries

Use `origin: professional` for employer-derived experience and `origin: personal` for
portfolio work. A professional case study may describe workflow, tools, investigation
patterns, and the human/AI responsibility boundary, but must not include employer,
client, internal route, identifier, prompt, fixture, source-code, or production-data details.
Keep private-source personal systems labelled `private-source` and write only reviewed,
public-safe case-study material.

The September 2026 evidence update adds two public-safe professional levels: `delivered`
for the Dalian Ryobi NX Python add-on and `poc` for the Canon Optics China
B2B credit-management ML proof of concept. Keep both separate from `ai-assisted` UAT
and `portfolio-system` personal projects. The current source order also includes
`career_context_merge_update_2026-09.md` and
`career_context_2026-09-17_project_dates_and_disclosure.md`; the latter is authoritative
for approved customer attribution and workbook-supported project dates.

Approved plain-text customer attribution is narrow: Hitachi High-Tech Group (with Intel
only as the approved end-user context), Credit Saison, Rheon Automatic Machinery,
Dalian Ryobi, and Canon Optics China. Attribution never permits logos, customer data,
internal identifiers, proprietary algorithms, screenshots, or unsupported outcomes.

For the current professional update, read the career source files in this order before
editing copy: `career_context_2026-09-05.md`, then
`career_context_2026-09-11_ai_assisted_uat.md`,
`career_context_merge_update_2026-09.md`,
`career_context_2026-09-17_project_dates_and_disclosure.md`,
`candidate_profile.md`, and `job_scoring_rules.md`. The newest dated files override
current-status assumptions while preserving factual history.

## Adding a case study

1. Add matching Markdown files under `src/content/case-studies/en`, `ja`, and `zh`.
2. Keep the same slug and translation key.
3. Complete every schema field.
4. Add or update the card in `src/data/projects.ts`.
5. Run the full validation suite.

For a new professional case, also verify all three locale files, the generated Contents
rail, and the publication audit before committing.

## Updating contact details

Edit `src/data/site.ts` only. Pages and structured metadata must not hard-code the email address.

## Status language

- **Implemented:** supported by current code and tests.
- **Locally validated:** exercised locally, not deployed publicly.
- **Planned:** design or roadmap only.
- **Not deployed:** infrastructure exists as a template but no runtime evidence exists.
