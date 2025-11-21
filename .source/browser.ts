// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"getting-started.mdx": () => import("../content/blog/getting-started.mdx?collection=blogPosts"), }),
  docs: create.doc("docs", {"getting-started.mdx": () => import("../content/docs/getting-started.mdx?collection=docs"), "test-doc.mdx": () => import("../content/docs/test-doc.mdx?collection=docs"), }),
};
export default browserCollections;