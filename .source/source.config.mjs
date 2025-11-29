// source.config.ts
import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var helpbook = defineDocs({
  dir: "content/docs/helpbook"
});
var developer = defineDocs({
  dir: "content/docs/developer"
});
var blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()),
    tags: z.array(z.string()).optional(),
    image: z.string().optional()
  })
});
var source_config_default = defineConfig();
export {
  blogPosts,
  source_config_default as default,
  developer,
  helpbook
};
