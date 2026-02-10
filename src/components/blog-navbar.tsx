"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/assets/logo.png";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { BlogSearch } from "@/components/blog-search";

const BlogNavbar = () => {
    const pathname = usePathname();

    const isConsumerPage = pathname.startsWith("/consumer");
    const consumerLabel = isConsumerPage ? "Business" : "Consumer";
    const consumerHref = isConsumerPage ? "/" : "/consumer";

    return (
        <section className="py-4 relative z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <nav className="flex items-center justify-between relative">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1 shrink-0">
                        <Image
                            src={Logo}
                            className="max-h-9"
                            alt="Navbar Logo"
                            width={14}
                            height={14}
                        />
                        <span className="text-lg font-semibold tracking-tighter m-1">
                            Limelight
                        </span>
                    </Link>

                    {/* Desktop Search — centered on the screen */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-full max-w-lg">
                        <BlogSearch />
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden items-center gap-4 lg:flex shrink-0">
                        <Button variant="secondary">Log In</Button>
                        <Button variant="outline">Get Started</Button>
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href="/" className="flex items-center gap-1">
                                        <Image
                                            src={Logo}
                                            className="max-h-9"
                                            alt="Navbar Logo"
                                            width={14}
                                            height={14}
                                        />
                                        <span className="text-lg font-semibold tracking-tighter">
                                            Limelight
                                        </span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col p-4">
                                <div className="mb-6">
                                    <BlogSearch />
                                </div>

                                <div className="flex flex-col gap-6">
                                    <Link href={consumerHref} className="font-medium">
                                        {consumerLabel}
                                    </Link>

                                    <Link href="/pricing" className="font-medium">
                                        Pricing
                                    </Link>
                                    <Link href="/blog" className="font-medium">
                                        Blog
                                    </Link>
                                    <Link href="/docs" className="font-medium">
                                        Docs
                                    </Link>
                                    <Link href="/contact" className="font-medium">
                                        Contact Us
                                    </Link>
                                </div>

                                <div className="mt-6 flex flex-col gap-4">
                                    <Button variant="outline">Log In</Button>
                                    <Button>Get Started</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export { BlogNavbar };
