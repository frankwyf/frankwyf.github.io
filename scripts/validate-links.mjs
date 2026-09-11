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

function pageUrlFor(href) {
  try {
    const url = new globalThis.URL(href, 'https://frankwyf.github.io');
    if (url.origin !== 'https://frankwyf.github.io') return null;
    return url;
  } catch {
    return null;
  }
}

const failures = [];
const pages = await walk(output);
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  if (!/<html\s+lang="[^"]+"/i.test(html)) failures.push(`${page}: missing html lang`);
  if (!/<link\s+rel="canonical"/i.test(html)) failures.push(`${page}: missing canonical link`);

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const [pathPart, fragment = ''] = href.split('#');
    try {
      await access(targetFor(pathPart));
    } catch {
      failures.push(`${page}: broken internal link ${href}`);
    }
    if (fragment && pathPart === '' && !ids.has(decodeURIComponent(fragment))) {
      failures.push(`${page}: missing fragment ${href}`);
    }
  }

  for (const match of html.matchAll(/<link\s+[^>]*rel="alternate"[^>]*href="([^"]+)"/gi)) {
    const url = pageUrlFor(match[1]);
    if (!url) continue;
    try {
      await access(targetFor(url.pathname));
    } catch {
      failures.push(`${page}: broken alternate link ${match[1]}`);
    }
  }

  for (const match of html.matchAll(/<img\s+[^>]*src="([^"]+)"/gi)) {
    const src = match[1];
    if (src.startsWith('data:') || src.startsWith('http://') || src.startsWith('https://'))
      continue;
    try {
      await access(path.join(output, src.replace(/^\//, '')));
    } catch {
      failures.push(`${page}: missing image ${src}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Build validation failed:\n' + failures.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${pages.length} generated HTML pages.`);
