import Link from 'next/link';
import { Navbar5 } from "@/components/navbar5";
import Footer from "@/components/footer";
import { Book, Code2 } from 'lucide-react';

export default function DocsLandingPage() {
    return (
        <>
            <Navbar5 />
            <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center py-20 px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Limelight <span className="text-primary">[docs]</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Meet the AI search engine for your business data — scalable, powerful, and production-ready.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                    <Link href="/docs/helpbook" className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative z-10 flex flex-col h-full items-center text-center">
                            <div className="mb-6 rounded-full bg-primary/10 p-4 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                                <Book className="h-10 w-10 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Helpbook</h2>
                            <p className="text-muted-foreground">
                                Guides and tutorials for using Limelight. Learn how to get the most out of your AI search engine.
                            </p>
                        </div>
                    </Link>

                    <Link href="/docs/developer" className="group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative z-10 flex flex-col h-full items-center text-center">
                            <div className="mb-6 rounded-full bg-primary/10 p-4 ring-1 ring-primary/20 group-hover:scale-110 transition-transform duration-300">
                                <Code2 className="h-10 w-10 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Developer Documentation</h2>
                            <p className="text-muted-foreground">
                                Technical documentation, APIs, and SDKs. Build powerful integrations with Limelight.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
