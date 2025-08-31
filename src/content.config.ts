import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const legal = defineCollection({
    loader: glob({ base: './src/content/legal', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        lastUpdated: z.string().transform((str) => new Date(str)),
        seo: z
            .object({
                title: z.string().optional(),
                description: z.string().optional(),
            })
            .optional(),
    }),
});

export const collections = { legal };
