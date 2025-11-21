import Link from 'next/link';
import { Navbar5 } from "@/components/navbar5";
import Footer from "@/components/footer";
// Actually, let's use standard HTML/Tailwind first to be safe, or check if shadcn is installed.
// The user mentioned "Nextjs + Fumadocs", likely has shadcn or similar.
// But to be safe and avoid dependency issues, I'll use Tailwind classes directly for now.

export default function DocsLandingPage() {
    return (
        <>
            <Navbar5 />
            <div className="container mx-auto py-12 min-h-[calc(100vh-200px)]">
                <h1 className="text-4xl font-bold mb-8 text-center">Documentation</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <Link href="/docs/helpbook" className="block group">
                        <div className="border rounded-lg p-6 h-full hover:border-primary transition-colors">
                            <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">Helpbook</h2>
                            <p className="text-muted-foreground">
                                Guides and tutorials for using Limelight.
                            </p>
                        </div>
                    </Link>
                    <Link href="/docs/developer" className="block group">
                        <div className="border rounded-lg p-6 h-full hover:border-primary transition-colors">
                            <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">Developer Documentation</h2>
                            <p className="text-muted-foreground">
                                Technical documentation, APIs, and SDKs.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
