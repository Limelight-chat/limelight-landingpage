import Link from "next/link";

export default function Banner() {
    return (
        <div className="relative w-full bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium">
                    <span className="md:hidden">
                        Ask Your Data. Limelight AI Data Analyst is live!
                    </span>
                    <span className="hidden md:inline">
                        Ask Your Data Questions. Get Answers. Instantly. Limelight’s AI Data Analyst is now live.
                    </span>
                    <Link
                        href="/contact"
                        className="ml-2 font-bold underline decoration-2 underline-offset-4 hover:text-blue-100 transition-colors"
                    >
                        👉 Now opening pilot partnerships.
                    </Link>
                </p>
            </div>
        </div>
    );
}
