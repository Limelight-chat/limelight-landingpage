// @ts-nocheck
import * as __fd_glob_11 from "../content/docs/helpbook/search-basics.mdx?collection=helpbook"
import * as __fd_glob_10 from "../content/docs/helpbook/integrations.mdx?collection=helpbook"
import * as __fd_glob_9 from "../content/docs/helpbook/index.mdx?collection=helpbook"
import * as __fd_glob_8 from "../content/docs/helpbook/getting-started.mdx?collection=helpbook"
import * as __fd_glob_7 from "../content/docs/developer/test-doc.mdx?collection=developer"
import * as __fd_glob_6 from "../content/docs/developer/search-api.mdx?collection=developer"
import * as __fd_glob_5 from "../content/docs/developer/index.mdx?collection=developer"
import * as __fd_glob_4 from "../content/docs/developer/getting-started.mdx?collection=developer"
import * as __fd_glob_3 from "../content/docs/developer/api-overview.mdx?collection=developer"
import * as __fd_glob_2 from "../content/blog/limelight-launch.mdx?collection=blogPosts"
import * as __fd_glob_1 from "../content/blog/Minimalist-UI.mdx?collection=blogPosts"
import * as __fd_glob_0 from "../content/blog/AI-J-Curve.mdx?collection=blogPosts"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blogPosts = await create.doc("blogPosts", "content/blog", {"AI-J-Curve.mdx": __fd_glob_0, "Minimalist-UI.mdx": __fd_glob_1, "limelight-launch.mdx": __fd_glob_2, });

export const developer = await create.docs("developer", "content/docs/developer", {}, {"api-overview.mdx": __fd_glob_3, "getting-started.mdx": __fd_glob_4, "index.mdx": __fd_glob_5, "search-api.mdx": __fd_glob_6, "test-doc.mdx": __fd_glob_7, });

export const helpbook = await create.docs("helpbook", "content/docs/helpbook", {}, {"getting-started.mdx": __fd_glob_8, "index.mdx": __fd_glob_9, "integrations.mdx": __fd_glob_10, "search-basics.mdx": __fd_glob_11, });