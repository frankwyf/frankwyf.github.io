# Repository Instructions for Coding Agents

## Mission

Maintain a fast, accessible, public-safe portfolio for Yifan Wang (Frank Wang). Job-search communication takes priority over future commercial positioning.

## Required reading

Before changing the site, read:

1. `docs/IMPLEMENTATION_PLAN.md`
2. `docs/CONTENT_GUIDE.md`
3. `docs/PUBLICATION_SAFETY.md`
4. the content and components directly related to the task

## Architecture rules

- Keep the site statically generated and compatible with GitHub Pages.
- Do not introduce SSR, a database, authentication, a server, or paid services.
- Prefer Astro components, semantic HTML, CSS, and minimal browser JavaScript.
- Keep English at root URLs; Japanese uses `/ja/` and Simplified Chinese uses `/zh/`.
- Every core interface change must be implemented in all three languages.
- Contact details must come from `src/data/site.ts`.
- Project claims must be backed by reviewed repository evidence.

## Private project rules

Treat both flagship codebases as private source:

- AI Revenue & Credit Operations Platform
- OpenScorecard / Company Credit Score

Do not publish source code, private repository URLs, prompts, internal task files, local paths, proprietary algorithms, customer data, or unverified metrics. Clearly distinguish implemented, planned, locally validated, and not-deployed capabilities.

## Quality checks

Run, at minimum:

```bash
npm run format:check
npm run lint
npm run check
npm run test
npm run audit:public
npm run build
npm run validate:links
```

Never claim a command passed unless it actually ran.

## Git boundary

Local commits are allowed for approved implementation tasks. Do not create a remote, push, publish, enable GitHub Pages, or configure a domain without explicit owner approval.
