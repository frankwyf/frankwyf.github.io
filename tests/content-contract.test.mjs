import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const root = process.cwd();

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else files.push(target);
  }
  return files;
}

test('public email is centralized in site data', async () => {
  const files = await walk(path.join(root, 'src'));
  let occurrences = 0;
  for (const file of files) {
    const content = await readFile(file, 'utf8');
    occurrences += content.split('wyf_frank66@outlook.com').length - 1;
  }
  assert.equal(occurrences, 1);
});

test('all case studies have complete locale coverage and origin labels', async () => {
  const expected = [
    'ai-revenue-credit-operations',
    'b2b-credit-management-ml-poc',
    'enterprise-ai-assisted-engineering',
    'nx-python-add-on-delivery',
    'openscorecard',
  ];
  for (const locale of ['en', 'ja', 'zh']) {
    const directory = path.join(root, 'src', 'content', 'case-studies', locale);
    const entries = (await readdir(directory)).sort();
    assert.deepEqual(entries, expected.map((slug) => `${slug}.md`).sort());
    for (const slug of expected) {
      const content = await readFile(path.join(directory, `${slug}.md`), 'utf8');
      assert.match(content, new RegExp(`^translationKey: ${slug}$`, 'm'));
      assert.match(content, new RegExp(`^routeSlug: ${slug}$`, 'm'));
      assert.match(content, /^origin: (professional|personal)$/m);
      assert.match(
        content,
        /^maturity: (delivered|poc|production-integration|ai-assisted|portfolio-system|in-progress|research)$/m,
      );
      assert.match(content, /^lastVerified: \d{4}-\d{2}-\d{2}$/m);
    }
  }
});

test('professional case studies preserve disclosure and evidence boundaries', async () => {
  const allowedClients = ['Dalian Ryobi', 'Canon Optics China'];
  for (const slug of ['nx-python-add-on-delivery', 'b2b-credit-management-ml-poc']) {
    const content = await readFile(
      path.join(root, 'src', 'content', 'case-studies', 'en', `${slug}.md`),
      'utf8',
    );
    assert.match(content, /^origin: professional$/m);
    assert.match(content, new RegExp(`^client: (${allowedClients.join('|')})$`, 'm'));
    const claimBody = content.split(/## (?:Evidence and )?Boundary/i)[0];
    assert.doesNotMatch(
      claimBody,
      /production (?:ML|GenAI) platform|deployed underwriting service/i,
    );
    assert.doesNotMatch(
      claimBody,
      /(?:^|\n)(?:accuracy|revenue impact|loss reduction|user count):/i,
    );
  }
});

test('flagship engineering evidence stays localized, private-safe, and dated', async () => {
  const headings = {
    en: '## Engineering Evidence',
    ja: '## エンジニアリングの証拠',
    zh: '## 工程证据',
  };
  for (const locale of ['en', 'ja', 'zh']) {
    for (const slug of ['ai-revenue-credit-operations', 'openscorecard']) {
      const content = await readFile(
        path.join(root, 'src', 'content', 'case-studies', locale, `${slug}.md`),
        'utf8',
      );
      assert.match(content, /^visibility: private-source$/m);
      assert.match(content, /^lastVerified: \d{4}-\d{2}-\d{2}$/m);
      assert.ok(content.includes(headings[locale]));
      assert.match(content, /<figure class="case-architecture" tabindex="0">/);
      assert.match(content, /<img[^>]+alt="[^"]+"/);
      assert.doesNotMatch(content, /github\.com\/frankwyf\/Company_Credit_Score/);
      assert.doesNotMatch(content, /github\.com\/frankwyf\/ai-revenue-credit-operations-platform/);
    }
  }
  await assert.doesNotReject(() =>
    readFile(
      path.join(root, 'public', 'images', 'architecture', 'ai-revenue-credit-operations.svg'),
    ),
  );
  await assert.doesNotReject(() =>
    readFile(path.join(root, 'public', 'images', 'architecture', 'openscorecard.svg')),
  );
});

test('English architecture diagrams have localized, visible flow summaries and scroll guidance', async () => {
  const scrollCue = {
    en: 'Swipe horizontally to inspect the diagram.',
    ja: '図は横スクロールで確認できます。',
    zh: '图示可横向滚动查看。',
  };
  const flowCue = {
    en: 'Flow:',
    ja: '流れ：',
    zh: '流程：',
  };
  for (const locale of ['en', 'ja', 'zh']) {
    for (const slug of ['ai-revenue-credit-operations', 'openscorecard']) {
      const content = await readFile(
        path.join(root, 'src', 'content', 'case-studies', locale, `${slug}.md`),
        'utf8',
      );
      const figure = content.match(/<figure class="case-architecture"[\s\S]*?<\/figure>/)?.[0];
      assert.ok(figure);
      assert.match(figure, /<img[^>]+alt="[^"]+"/);
      assert.match(figure, new RegExp(`<figcaption>${scrollCue[locale]}[^<]*${flowCue[locale]}`));
    }
  }
});

test('home prioritizes backend and data evidence with three localized actions', async () => {
  const home = await readFile(path.join(root, 'src', 'components', 'HomePage.astro'), 'utf8');
  const translations = await readFile(path.join(root, 'src', 'i18n', 'translations.ts'), 'utf8');
  const projects = await readFile(path.join(root, 'src', 'data', 'projects.ts'), 'utf8');
  assert.match(
    home,
    /featuredExperienceIds = \['nx-python-add-on', 'canon-credit-ml', 'rheon-bom-integration'\]/,
  );
  assert.match(translations, /engineeringCta: 'View Engineering Work'/);
  assert.match(translations, /projectsCta: 'Explore Projects'/);
  assert.match(translations, /contactCta: 'Contact'/);
  assert.match(translations, /engineeringCta: '実務のエンジニアリングを見る'/);
  assert.match(translations, /engineeringCta: '查看工程实践'/);
  assert.doesNotMatch(home, /2\+ years enterprise engineering|3 working languages/);
  const engineeringProjects = projects.slice(projects.indexOf("slug: 'python-search-tooling'"));
  const order = ['python-search-tooling', 'gym-product', 'heat-simulation', 'yolo-region-mapping'];
  assert.deepEqual(
    order.map((slug) => engineeringProjects.indexOf(`slug: '${slug}'`)),
    [...order].map((slug) => engineeringProjects.indexOf(`slug: '${slug}'`)).sort((a, b) => a - b),
  );
});

test('latest professional case studies use confirmed scope and maturity boundaries', async () => {
  const readCase = (locale, slug) =>
    readFile(path.join(root, 'src', 'content', 'case-studies', locale, `${slug}.md`), 'utf8');
  const [credit, nx, uat] = await Promise.all([
    readCase('en', 'b2b-credit-management-ml-poc'),
    readCase('en', 'nx-python-add-on-delivery'),
    readCase('en', 'enterprise-ai-assisted-engineering'),
  ]);

  assert.match(credit, /^maturity: production-integration$/m);
  assert.match(credit, /resulting model is now used in the customer's business platform/i);
  assert.match(credit, /assigned model component/i);
  assert.match(credit, /do not claim sole ownership of the model or independent deployment/i);
  assert.match(nx, /customer deployed and continues to use/i);
  assert.match(nx, /partial follow-up maintenance/i);
  assert.match(nx, /A colleague handled on-site customer communication/i);
  assert.match(nx, /I independently delivered the technical implementation/i);
  assert.match(nx, /does not claim a formal technical-lead title/i);
  assert.match(uat, /^maturity: in-progress$/m);
  assert.match(uat, /individual responsibilities are being confirmed/i);
  const uatDescription = uat.replace(/^---[\s\S]*?---\s*/, '').split('## Boundary')[0];
  assert.doesNotMatch(uatDescription, /Playwright|AI agent|AI-assisted|test-automation system/i);
  assert.match(uat, /not evidence of a completed AI agent, test-automation system/i);
});

test('profile copy reflects current credentials, languages, and enterprise stack', async () => {
  const translations = await readFile(path.join(root, 'src', 'i18n', 'translations.ts'), 'utf8');
  const siteData = await readFile(path.join(root, 'src', 'data', 'site.ts'), 'utf8');
  const experience = await readFile(path.join(root, 'src', 'data', 'experience.ts'), 'utf8');
  assert.match(
    translations,
    /Japanese — JLPT N2; basic conversation, limited spontaneous business conversation/,
  );
  assert.match(translations, /日本語 — JLPT N2、日常会話初級。即興のビジネス会話には制約あり/);
  assert.match(translations, /日语 — JLPT N2，基础日常会话；即兴商务会话有限/);
  assert.doesNotMatch(
    translations,
    /C#\/.NET|Japanese — JLPT N2 \/ business communication|JLPT N2 \/ 業務コミュニケーション|JLPT N2 \/ 商务沟通/,
  );
  assert.match(translations, /VB\.NET maintenance and feature work/);
  assert.match(translations, /VB\.NET 系统维护与功能开发/);
  assert.doesNotMatch(siteData, /Data Engineer – Associate \(DEA-C01\)/);
  assert.match(
    translations,
    /AWS Certified Data Engineer – Associate \(DEA-C01\)\. Not yet earned/,
  );
  assert.match(experience, /id: 'enterprise-planning-uat'/);
  assert.match(experience, /id: 'workflow-feasibility-study'/);
  assert.doesNotMatch(experience, /200,?000|20万/);
});

test('localized core route files exist', async () => {
  const required = [
    'src/pages/index.astro',
    'src/pages/ja/index.astro',
    'src/pages/zh/index.astro',
    'src/pages/projects/index.astro',
    'src/pages/ja/projects/index.astro',
    'src/pages/zh/projects/index.astro',
    'src/pages/experience.astro',
    'src/pages/ja/experience.astro',
    'src/pages/zh/experience.astro',
  ];
  for (const file of required)
    await assert.doesNotReject(() => readFile(path.join(root, file), 'utf8'));
});

test('social preview image has the declared Open Graph dimensions', async () => {
  const image = await readFile(path.join(root, 'public', 'og.png'));
  assert.equal(image.subarray(1, 4).toString('ascii'), 'PNG');
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
});

test('placeholder writing pages remain out of search indexes', async () => {
  const component = await readFile(
    path.join(root, 'src', 'components', 'WritingPage.astro'),
    'utf8',
  );
  assert.match(component, /\bnoIndex\b/);
});
