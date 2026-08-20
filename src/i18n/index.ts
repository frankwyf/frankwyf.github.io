export const locales = ['en', 'ja', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; lang: string }> = {
  en: { label: 'EN', lang: 'en' },
  ja: { label: '日本語', lang: 'ja' },
  zh: { label: '中文', lang: 'zh-CN' },
};

export function localizedPath(locale: Locale, path = ''): string {
  const normalized = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return normalized ? `${prefix}/${normalized}/` : `${prefix || ''}/`;
}

export function localizedAlternates(path = ''): Record<Locale, string> {
  return {
    en: localizedPath('en', path),
    ja: localizedPath('ja', path),
    zh: localizedPath('zh', path),
  };
}
