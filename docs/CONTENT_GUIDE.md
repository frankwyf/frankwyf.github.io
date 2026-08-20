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

## Adding a case study

1. Add matching Markdown files under `src/content/case-studies/en`, `ja`, and `zh`.
2. Keep the same slug and translation key.
3. Complete every schema field.
4. Add or update the card in `src/data/projects.ts`.
5. Run the full validation suite.

## Updating contact details

Edit `src/data/site.ts` only. Pages and structured metadata must not hard-code the email address.

## Status language

- **Implemented:** supported by current code and tests.
- **Locally validated:** exercised locally, not deployed publicly.
- **Planned:** design or roadmap only.
- **Not deployed:** infrastructure exists as a template but no runtime evidence exists.
