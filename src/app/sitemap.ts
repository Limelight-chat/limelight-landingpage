import { blog } from "@/lib/source";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPages = blog.getPages().map((page) => ({
    url: `https://www.limelight.chat/blog/${page.slugs[0]}`,
    lastModified: page.data.date ? new Date(page.data.date) : new Date(),
  }));

  return [
    {
      url: "https://www.limelight.chat",
      lastModified: new Date(),
    },
    {
      url: "https://www.limelight.chat/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://www.limelight.chat/product",
      lastModified: new Date(),
    },
    {
      url: "https://www.limelight.chat/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.limelight.chat/deck",
      lastModified: new Date(),
    },
    ...blogPages,
  ];
}
