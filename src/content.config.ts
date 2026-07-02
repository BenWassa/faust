import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const archetypes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/archetypes' }),
  schema: z.object({
    title: z.string(),
    num: z.string(),
    order: z.number(),
    icon: z.string(),
    tagline: z.string(),
    coreLogic: z.string(),
    medicine: z.string(),
  }),
})

export const collections = { archetypes }
