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

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        featuredImage: z.string().optional(),
        publishDate: z.date(),
        categories: z.array(z.string()),
        publish: z.boolean().optional().default(true),
    }),
});

const team = defineCollection({
    loader: glob({ base: './src/content/team', pattern: '**/*.md' }),
    schema: z.object({
        name: z.string(),
        jobTitle: z.string(),
        headshot: z.string().optional(),
        order: z.number(),
        publish: z.boolean().optional().default(true),
    }),
});

export const collections = { legal, blog, team };
