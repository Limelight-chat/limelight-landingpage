"use client";

import { LargeSearchToggle } from "fumadocs-ui/components/layout/search-toggle";

export function BlogSearch() {
    return (
        <div className="w-full max-w-sm lg:max-w-lg">
            <LargeSearchToggle
                className="
                    w-full justify-between
                    text-foreground font-medium
                    bg-background/60 backdrop-blur-md
                    border border-zinc-300/60 dark:border-zinc-700/60
                    shadow-lg shadow-black/5
                    hover:shadow-xl
                    transition-all rounded-xl px-4 py-2
                    cursor-pointer
                    flex items-center
                "
            />
        </div>
    );
}
