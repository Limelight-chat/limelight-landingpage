import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BlogCardProps {
    title: string;
    description: string;
    date?: string;
    image?: string;
    href: string;
    tags?: string[];
    className?: string;
}

export function BlogCard({
    title,
    description,
    date,
    image,
    href,
    tags,
    className,
}: BlogCardProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(255,142,43,0.3)]",
                className
            )}
        >
            <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-800">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={450}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-neutral-700">
                        <span className="text-4xl font-bold opacity-20">Limelight</span>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {tags && tags.length > 0 && (
                        <span className="text-primary">{tags[0]}</span>
                    )}
                    {date && (
                        <>
                            <span className="h-1 w-1 rounded-full bg-neutral-600" />
                            <span>{date}</span>
                        </>
                    )}
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="mb-6 line-clamp-3 text-muted-foreground">
                    {description}
                </p>

                <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-wide text-primary">
                    Read Post
                    <svg
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
