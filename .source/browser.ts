// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"AI-J-Curve.mdx": () => import("../content/blog/AI-J-Curve.mdx?collection=blogPosts"), "Minimalist-UI.mdx": () => import("../content/blog/Minimalist-UI.mdx?collection=blogPosts"), "limelight-launch.mdx": () => import("../content/blog/limelight-launch.mdx?collection=blogPosts"), }),
  developer: create.doc("developer", {"api-overview.mdx": () => import("../content/docs/developer/api-overview.mdx?collection=developer"), "getting-started.mdx": () => import("../content/docs/developer/getting-started.mdx?collection=developer"), "index.mdx": () => import("../content/docs/developer/index.mdx?collection=developer"), "search-api.mdx": () => import("../content/docs/developer/search-api.mdx?collection=developer"), "test-doc.mdx": () => import("../content/docs/developer/test-doc.mdx?collection=developer"), }),
  helpbook: create.doc("helpbook", {"getting-started.mdx": () => import("../content/docs/helpbook/getting-started.mdx?collection=helpbook"), "index.mdx": () => import("../content/docs/helpbook/index.mdx?collection=helpbook"), "integrations.mdx": () => import("../content/docs/helpbook/integrations.mdx?collection=helpbook"), "search-basics.mdx": () => import("../content/docs/helpbook/search-basics.mdx?collection=helpbook"), }),
};
export default browserCollections;