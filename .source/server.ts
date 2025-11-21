// @ts-nocheck
import * as __fd_glob_2 from "../content/docs/test-doc.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/getting-started.mdx?collection=docs"
import * as __fd_glob_0 from "../content/blog/getting-started.mdx?collection=blogPosts"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blogPosts = await create.doc("blogPosts", "content/blog", {"getting-started.mdx": __fd_glob_0, });

export const docs = await create.docs("docs", "content/docs", {}, {"getting-started.mdx": __fd_glob_1, "test-doc.mdx": __fd_glob_2, });