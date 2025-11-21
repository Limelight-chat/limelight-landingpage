"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle";

export function DocNavbar() {
  const pathname = usePathname();

  const isDocs = pathname.startsWith("/docs");
  const isBlog = pathname.startsWith("/blog");

  const searchCategory = isDocs ? "docs" : isBlog ? "blog" : "global";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={32} height={32} alt="Logo" />
          <span className="text-lg font-semibold">Limelight</span>
        </Link>
        
        {/* Center: Search */}
        <div className="hidden md:block w-1/3">
          <SearchToggle />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm">Login</Link>
          <Link
            href="/get-started"
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}
