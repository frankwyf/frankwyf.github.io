# Publication Safety

This portfolio is public-facing even while it is developed locally.

## Never publish

- secrets, credentials, cookies, tokens, or `.env` files;
- real customer, employer, applicant, or production data;
- private repository or clone URLs;
- local absolute paths, usernames, or machine identifiers;
- prompts, internal task files, private datasets, or commercial algorithms;
- screenshots containing private tabs, terminals, file paths, or identifiers;
- synthetic metrics represented as real-world business performance;
- cloud templates represented as deployed infrastructure.

## Flagship case-study boundary

Both flagship codebases are private. Public pages may show reviewed architecture, synthetic demonstrations, evaluation design, security controls, and honest limitations. Code excerpts require separate owner review.

## Before a local commit

1. Run `npm run audit:public`.
2. Inspect the complete diff.
3. Confirm generated output and secrets are untracked.
4. Confirm all claims match current evidence.
5. Do not push without explicit approval.
