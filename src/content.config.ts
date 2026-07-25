import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const interview = defineCollection({
  loader: glob({ base: './src/content/interview', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    questionNumber: z.number().int().min(1).max(48),
    category: z.string().trim().min(1),
    tags: z.array(z.string().trim().min(1)).default([]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    sourceName: z.string().trim().min(1).optional(),
    sourceUrl: z.url().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { interview };
