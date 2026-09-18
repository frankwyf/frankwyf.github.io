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
      assert.match(content, /^maturity: (delivered|poc|ai-assisted|portfolio-system)$/m);
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
    const claimBody = content.split('## Boundary')[0];
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
