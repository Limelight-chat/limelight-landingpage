import { BlogNavbar } from "@/components/blog-navbar";
import Footer from "@/components/footer";
import { RootProvider } from 'fumadocs-ui/provider/next';

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RootProvider search={{ options: { api: '/api/blog-search' } }}>
            <BlogNavbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </RootProvider>
    );
}
