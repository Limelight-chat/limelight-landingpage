import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const helpbook = defineDocs({
  dir: 'content/docs/helpbook',
});

export const developer = defineDocs({
  dir: 'content/docs/developer',
});

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',

  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
  }),
})

export default defineConfig();