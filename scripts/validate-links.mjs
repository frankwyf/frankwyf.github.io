import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('dist');

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else if (entry.name.endsWith('.html')) files.push(target);
  }
  return files;
}

function targetFor(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '/') return path.join(output, 'index.html');
  const relative = clean.replace(/^\//, '');
  if (path.extname(relative)) return path.join(output, relative);
  return path.join(output, relative, 'index.html');
}

const failures = [];
const pages = await walk(output);
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  if (!/<html\s+lang="[^"]+"/i.test(html)) failures.push(`${page}: missing html lang`);
  if (!/<link\s+rel="canonical"/i.test(html)) failures.push(`${page}: missing canonical link`);

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    try {
      await access(targetFor(href));
    } catch {
      failures.push(`${page}: broken internal link ${href}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Build validation failed:\n' + failures.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${pages.length} generated HTML pages.`);
