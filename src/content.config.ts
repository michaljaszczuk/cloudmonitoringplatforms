import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

// Define the schema for the directory collection
const directory = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{json}', base: "./src/data/directory" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    // Define the image field as an object
    image: z.object({
      url: z.string(),
      width: z.number().optional(),
      height: z.number().optional()
    }).optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    link: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/pages" }),
  schema: ({ image }) => z.object({
    image: image().optional(),
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: ({image}) => z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: image().optional(),
  }),
});

export const collections = {
  directory,
  pages,
  blog,
};