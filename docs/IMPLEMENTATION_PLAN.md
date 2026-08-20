# Yifan Wang Personal Portfolio — Implementation Plan

Status: Initial local MVP implemented; awaiting owner review

Last updated: 2026-08-21

Repository root: `Frank_Personal_Wiki/`

Remote publishing status: **Not authorized**

## 1. Confirmed identity and priorities

- Formal name: **Yifan Wang**
- Common English name: **Frank Wang**
- Primary language: **English**
- Additional languages: **Japanese and Simplified Chinese**
- Primary objective: international and Japanese-market job search
- Secondary objective: preserve a path for future productization or consulting
- Public email: `wyf_frank66@outlook.com`
- Public profiles: GitHub and LinkedIn

The site must communicate this professional direction:

> Enterprise Software → Operational Data → Data Engineering → Production-oriented Applied AI

The site is not a generic resume template and must not present AI work as API demos. It should show how business problems become dependable software, data, AI, security, evaluation, and deployment decisions.

## 2. Product positioning

Primary English positioning:

> **Yifan Wang**
>
> Also known as Frank Wang
>
> Software & Data Engineer building reliable AI systems for real-world operations.

Supporting statement:

> I design production-oriented systems that combine deterministic business logic, data engineering, cloud architecture, and applied AI—with security, evaluation, and human oversight built in.

Audience priority:

1. Recruiters and hiring managers
2. Engineering managers and technical interviewers
3. Applied AI, Data & AI, Backend, Platform, and Forward Deployed teams
4. Potential collaborators or future customers

Commercial language must remain secondary. The first call to action is to inspect engineering work, not to buy a product.

## 3. Flagship project policy

Both flagship codebases must be treated as private-source projects on the website:

1. **AI Revenue & Credit Operations Platform**
2. **OpenScorecard / Company Credit Score**

They may be presented through public-safe case studies containing:

- business problem and target user;
- architecture and engineering boundaries;
- synthetic-data demonstrations;
- approved screenshots;
- evaluation design and reproducible evidence;
- security and human-approval controls;
- honest delivery status and limitations.

They must not expose:

- source code or private repository URLs;
- prompts, internal task files, or unpublished implementation details;
- customer, employer, or production data;
- secrets, credentials, private paths, or machine identifiers;
- commercial algorithms or unreviewed code snippets;
- fabricated metrics or unverified cloud-deployment claims.

## 4. Technical architecture

- Astro static site generation
- TypeScript strict mode
- Astro build-time Content Collections
- Markdown/MDX content
- Native HTML and CSS
- Minimal browser JavaScript for theme and navigation only
- npm with committed lockfile
- GitHub Actions for validation and GitHub Pages deployment
- No server, database, authentication, CMS, payments, or paid hosting

Target future repository: `frankwyf/frankwyf.github.io`

Target future URL: `https://frankwyf.github.io`

The local repository must remain fully functional without a configured remote.

## 5. Localization architecture

English is canonical and must live at root URLs. Japanese and Simplified Chinese use prefixes:

```text
/                     English home
/projects/            English projects
/about/               English about
/ja/                  Japanese home
/ja/projects/         Japanese projects
/ja/about/            Japanese about
/zh/                  Simplified Chinese home
/zh/projects/         Simplified Chinese projects
/zh/about/             Simplified Chinese about
```

Requirements:

- language switcher links to the equivalent page when available;
- `lang`, canonical, and `hreflang` metadata on every localized page;
- English fallback when a translation does not exist;
- no empty or machine-placeholder translation pages;
- all navigation, buttons, labels, and core MVP content translated;
- content schemas record locale and translation group.

## 6. Information architecture

### Home

- identity and one-sentence positioning;
- primary actions: View Projects, GitHub, LinkedIn, Contact;
- professional progression from enterprise engineering to Applied AI;
- two flagship private-source case studies;
- selected public engineering projects;
- evidence-oriented engineering principles;
- concise contact call to action.

### Projects

- Flagship Case Studies
- Applied AI & Data
- Backend & Enterprise Systems
- Native / Systems Engineering
- project status and evidence labels

The site must curate projects rather than mirror every GitHub repository.

### Flagship case study: AI Revenue & Credit Operations Platform

- revenue/credit operations problem;
- deterministic money and aging calculations;
- data quality and quarantine;
- tenant-scoped contract retrieval and citations;
- allow-listed tools and bounded orchestration;
- RBAC, separation of duties, approvals, audit;
- evaluation, adversarial testing, observability;
- disabled-by-default cloud architecture;
- honest limitations and private-source notice.

### Flagship case study: OpenScorecard

- B2B trade-credit problem;
- observation and performance windows;
- deterministic synthetic SME portfolio;
- leakage and data-quality gates;
- Champion/Challenger comparison;
- out-of-time validation, calibration, and stability;
- model-risk and decision-policy separation;
- governance decisions and human review;
- honest research/portfolio limitations and private-source notice.

### AI Engineering

- LLM application engineering
- grounded retrieval
- controlled tool calling
- agent harness, skills, and MCP
- evaluation and observability
- security, authorization, audit, and human oversight

### About

- enterprise software background;
- operational data and cloud work;
- transition toward Applied AI engineering;
- languages and certifications;
- no unsupported employment dates or education claims.

### Writing

- Applied AI
- AI Agents
- Data Engineering
- Cloud
- Software Engineering
- Career and Learning

The MVP may include an honest “writing in progress” state but must not fabricate articles.

### Contact

- GitHub
- LinkedIn
- `wyf_frank66@outlook.com`
- future Request Demo / Business Inquiry structure without a form backend

## 7. Content model

Projects and case studies must be content-driven and schema validated. Core fields:

```yaml
title:
translationKey:
locale:
summary:
kind:
status:
visibility:
featured:
technologies:
sourceUrl:
demoUrl:
lastVerified:
evidence:
draft:
```

Allowed visibility states:

```text
public-source
private-source
case-study-only
```

Contact data must be defined in one shared configuration file so the email can be changed once without editing pages.

## 8. Planned repository structure

```text
Frank_Personal_Wiki/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── projects/
│   │   ├── case-studies/
│   │   └── writing/
│   ├── data/
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   └── content.config.ts
├── public/
│   ├── images/
│   ├── screenshots/
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   ├── audit-public-content.mjs
│   └── validate-links.mjs
├── tests/
├── docs/
│   ├── IMPLEMENTATION_PLAN.md
│   ├── CONTENT_GUIDE.md
│   ├── PUBLICATION_SAFETY.md
│   └── ROADMAP.md
├── .github/workflows/
├── AGENTS.md
├── README.md
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 9. Design system

Visual direction: **Engineering Dossier / Systems Map**

- professional, editorial, and engineering-oriented;
- strong typography and deliberate whitespace;
- restrained ink, warm-neutral, blue, and green palette;
- accessible light, dark, and system themes;
- architecture flows made with semantic HTML/CSS where practical;
- minimal animation with `prefers-reduced-motion` support;
- no skill percentages, stock robots, glowing brains, particle effects, or decorative 3D;
- project evidence and engineering decisions take priority over technology logos.

## 10. Security and publication controls

The build must run a public-content audit that rejects:

- common secret patterns;
- local absolute paths;
- `.env` content;
- private repository URLs;
- prompt directories or internal task paths;
- claims marked as unverified;
- accidental customer or production-data references.

Every flagship page must visibly distinguish:

- implemented behavior;
- planned behavior;
- locally validated behavior;
- cloud templates that have not been deployed;
- synthetic evidence versus real-world performance.

## 11. Implementation phases

### Phase 1 — Foundation

- initialize local Git;
- create Astro and TypeScript configuration;
- add linting, formatting, build, and validation scripts;
- create README and AGENTS.md;
- make a focused local commit.

### Phase 2 — Shell and design system

- global layout, navigation, footer, theme control;
- responsive typography, spacing, buttons, cards, and status labels;
- localized navigation and metadata helpers.

### Phase 3 — Content architecture

- project, case-study, and writing schemas;
- identity, contact, certification, and link data;
- translation dictionaries and fallback rules;
- publication-safety audit.

### Phase 4 — MVP pages

- English, Japanese, and Chinese home pages;
- projects, two flagship case studies, AI Engineering, About, Writing, Contact, and 404;
- equivalent-language navigation;
- honest project-status and private-source labeling.

### Phase 5 — SEO and deployment preparation

- title, description, canonical, Open Graph, and `hreflang`;
- sitemap, robots, favicon;
- GitHub Pages workflow;
- no remote creation or push.

### Phase 6 — Verification

Required checks:

```text
npm ci
npm run format:check
npm run lint
npm run check
npm run test
npm run audit:public
npm run build
npm run validate:links
```

Also verify:

- desktop, tablet, and mobile layout;
- keyboard navigation and visible focus;
- color contrast and reduced motion;
- valid internal links and GitHub Pages routes;
- no private data or secrets in source or build output;
- clean local Git status after final commit.

## 12. Local completion boundary

Local implementation is complete when:

- the site builds successfully;
- English, Japanese, and Chinese core routes exist;
- both private flagship case studies are present and public-safe;
- email and profile links are centrally configurable;
- documentation explains how future agents update content;
- GitHub Pages deployment configuration is ready;
- all changes are committed locally;
- no remote repository has been created and nothing has been pushed.

Remote creation, GitHub Pages activation, custom domain work, analytics, product pricing, and contact-form backends require separate owner approval.

## 13. Initial implementation snapshot

Completed locally on 2026-08-21:

- initialized the standalone `Frank_Personal_Wiki` Git repository on `main`;
- implemented 25 static pages across English, Japanese, and Simplified Chinese;
- published public-safe, private-source case studies for both flagship projects;
- added the Engineering Dossier / Systems Map responsive design system;
- centralized identity, email, and public profile links in `src/data/site.ts`;
- added theme selection, canonical and `hreflang` metadata, sitemap, robots, and favicon;
- added CI and a GitHub Pages workflow without configuring a remote;
- added formatting, linting, Astro type/content checking, content-contract tests,
  public-content auditing, and generated-link validation;
- completed a clean production build with 25 generated HTML pages.

Deliberately deferred until owner review:

- repository creation, remote configuration, push, and GitHub Pages activation;
- visual adjustments based on review of the first local preview;
- bespoke screenshots, diagrams, social preview artwork, downloadable résumé, and real articles;
- analytics, contact-form backend, product pricing, and commercial calls to action.
