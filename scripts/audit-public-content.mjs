import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const roots = ['src', 'public', 'docs'];
const extensions = new Set([
  '.astro',
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.mjs',
  '.ts',
  '.txt',
  '.yml',
  '.yaml',
]);
const forbidden = [
  { label: 'AWS access key', pattern: /AKIA[0-9A-Z]{16}/g },
  { label: 'GitHub token', pattern: /gh[pousr]_[A-Za-z0-9_]{30,}/g },
  { label: 'private key', pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
  { label: 'local user path', pattern: /\/(?:Users|home)\/[A-Za-z0-9._-]+\//g },
  { label: 'local volume path', pattern: /\/Volumes\/[A-Za-z0-9._-]+\//g },
  {
    label: 'private repository URL',
    pattern:
      /https?:\/\/(?:www\.)?github\.com\/frankwyf\/(?:ai-revenue-credit-operations-platform|Company_Credit_Score)(?:\.git)?/gi,
  },
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else if (extensions.has(path.extname(entry.name))) files.push(target);
  }
  return files;
}

const findings = [];
const rootsToScan = [...roots];
try {
  if ((await stat('dist')).isDirectory()) rootsToScan.push('dist');
} catch {
  // A source-only audit runs before the first build; dist is checked when present.
}

for (const root of rootsToScan) {
  try {
    if (!(await stat(root)).isDirectory()) continue;
  } catch {
    continue;
  }
  for (const file of await walk(root)) {
    const content = await readFile(file, 'utf8');
    for (const rule of forbidden) {
      rule.pattern.lastIndex = 0;
      if (rule.pattern.test(content)) findings.push(`${file}: ${rule.label}`);
    }
  }
}

if (findings.length > 0) {
  console.error('Public-content audit failed:\n' + findings.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}

console.log('Public-content audit passed.');
