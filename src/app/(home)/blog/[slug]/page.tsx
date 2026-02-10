import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { baseOptions } from '@/lib/layout.shared';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <DocsLayout tree={blog.pageTree} {...baseOptions()} sidebar={{ enabled: false }}>
      <article className="flex flex-col gap-8 pb-20 pt-12">
        {/* Header Section - Centered Column */}
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            {/* Tags/Category (optional) */}
            {page.data.tags && (
              <div className="flex gap-2">
                {page.data.tags.map((tag) => (
                  <span key={tag} className="text-sm font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              {page.data.title}
            </h1>

            {page.data.description && (
              <p className="text-xl text-muted-foreground text-balance">
                {page.data.description}
              </p>
            )}

            {/* Author & Date */}
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                {/* Placeholder Avatar if needed */}
                <span className="font-medium text-foreground">{page.data.author}</span>
              </div>
              <span>•</span>
              <time dateTime={page.data.date?.toString()}>
                {new Date(page.data.date ?? 0).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
          </div>
        </div>

        {/* Wide Image Section */}
        {page.data.image && (
          <div className="container mx-auto mt-8 max-w-5xl px-4 sm:px-6">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl border bg-muted">
              {/* Note: Using standard img for now if next/image config is tricky with external URLs, 
                  but ideally use next/image */}
              <img
                src={page.data.image}
                alt={page.data.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content Section - Narrow Column */}
        <div className="container mx-auto max-w-3xl px-6">
          <div className="prose prose-lg dark:prose-invert mx-auto mt-8 min-w-0">
            <InlineTOC items={page.data.toc} />
            <Mdx components={defaultMdxComponents} />
          </div>

          <div className="mt-16 flex justify-center border-t pt-8">
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </DocsLayout>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}