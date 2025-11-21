// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"Edge-AI.mdx": () => import("../content/blog/Edge-AI.mdx?collection=blogPosts"), "Minimalist-UI.mdx": () => import("../content/blog/Minimalist-UI.mdx?collection=blogPosts"), "getting-started.mdx": () => import("../content/blog/getting-started.mdx?collection=blogPosts"), }),
  developer: create.doc("developer", {"getting-started.mdx": () => import("../content/docs/developer/getting-started.mdx?collection=developer"), "index.mdx": () => import("../content/docs/developer/index.mdx?collection=developer"), "test-doc.mdx": () => import("../content/docs/developer/test-doc.mdx?collection=developer"), }),
  helpbook: create.doc("helpbook", {"getting-started.mdx": () => import("../content/docs/helpbook/getting-started.mdx?collection=helpbook"), "index.mdx": () => import("../content/docs/helpbook/index.mdx?collection=helpbook"), }),
};
export default browserCollections;