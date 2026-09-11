import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    translationKey: z.string(),
    routeSlug: z.string(),
    locale: z.enum(['en', 'ja', 'zh']),
    origin: z.enum(['professional', 'personal']),
    summary: z.string(),
    status: z.string(),
    visibility: z.enum(['private-source', 'case-study-only']),
    technologies: z.array(z.string()),
    lastVerified: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies };
