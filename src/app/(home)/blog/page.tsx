import { blog } from '@/lib/source';
import { BlogCard } from '@/components/blog-card';
import { BlogNavbar } from "@/components/blog-navbar";
import Footer from "@/components/footer";

export default function BlogPage() {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? 0).getTime() - new Date(a.data.date ?? 0).getTime()
  );

  // Get the featured post (latest one)
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <main className="min-h-screen bg-background pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-20 max-w-4xl">
            <h1 className="text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9]">
              Inside <br />
              <span className="text-primary">Limelight</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl">
              Updates, stories, and design philosophy from the team building the next generation of AI tools.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-20">
              <BlogCard
                title={featuredPost.data.title}
                description={featuredPost.data.description || ''}
                date={featuredPost.data.date ? new Date(featuredPost.data.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                }) : undefined}
                image={featuredPost.data.image}
                href={featuredPost.url}
                tags={featuredPost.data.tags}
                className="grid md:grid-cols-2 gap-8 border-none bg-transparent hover:border-none hover:shadow-none hover:bg-transparent"
              />
            </div>
          )}

          {/* Grid Layout for Remaining Posts */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <BlogCard
                key={post.url}
                title={post.data.title}
                description={post.data.description || ''}
                date={post.data.date ? new Date(post.data.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                }) : undefined}
                image={post.data.image}
                href={post.url}
                tags={post.data.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}