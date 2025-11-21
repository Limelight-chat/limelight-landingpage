import { helpbook, developer, blogPosts } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";

export const helpbookSource = loader({
  baseUrl: "/docs/helpbook",
  source: helpbook.toFumadocsSource(),
});

export const developerSource = loader({
  baseUrl: "/docs/developer",
  source: developer.toFumadocsSource(),
});

export const blog = loader({
  baseUrl: '/blog',
  source: toFumadocsSource(blogPosts, []),
})