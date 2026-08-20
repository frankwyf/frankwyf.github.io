# Yifan Wang — Personal Portfolio

An English-first, trilingual portfolio for Yifan Wang (Frank Wang). The site presents production-oriented software, data, and Applied AI engineering through public-safe project case studies.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run format:check
npm run lint
npm run check
npm run test
npm run audit:public
npm run build
npm run validate:links
```

## Content updates

- Shared identity and contact details: `src/data/site.ts`
- Localized interface copy: `src/i18n/translations.ts`
- Project cards: `src/data/projects.ts`
- Flagship case studies: `src/content/case-studies/`
- Writing: `src/content/writing/`

Read `docs/CONTENT_GUIDE.md` and `docs/PUBLICATION_SAFETY.md` before publishing changes.

## Deployment boundary

The repository is prepared for `frankwyf.github.io`, but remote creation and push are intentionally excluded from local implementation. The repository owner must explicitly approve those actions.
