'use client'

import { useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, Maximize } from "lucide-react";

export default function DeckPage() {
    const accent = "#FF8E2B";
    const iframeRef = useRef<HTMLDivElement>(null);

    const handleFullScreen = () => {
        if (iframeRef.current) {
            if (iframeRef.current.requestFullscreen) {
                iframeRef.current.requestFullscreen();
            }
        }
    };

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center"
            style={{ background: "#171616" }}
        >
            <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start"
                >
                    <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col items-start">
                            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold tracking-tight" style={{ color: accent }}>
                                Product Demo
                            </h1>
                            <p className="mt-2 text-xs sm:text-sm text-white/40 font-medium tracking-wide uppercase">
                                Visualizing the future of business intelligence
                            </p>
                        </div>

                        <div className="flex items-center gap-3 md:mb-2">
                            <Button
                                onClick={handleFullScreen}
                                size="icon"
                                className="h-10 w-10 md:h-12 md:w-12 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer shrink-0"
                                title="Fullscreen"
                            >
                                <Maximize className="h-4 w-4 md:h-5 md:w-5" />
                            </Button>
                            <a
                                href="/deck/Product Demo.pdf"
                                download
                                className="w-full md:w-auto"
                            >
                                <Button className="h-10 md:h-12 w-full md:w-auto rounded-xl bg-white text-black hover:bg-white/90 px-4 md:px-6 text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                                    <FileDown className="h-4 w-4 md:h-5 md:w-5" />
                                    Download as PDF
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Viewer Container */}
                <motion.div
                    ref={iframeRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-10 md:mt-16 relative w-full aspect-video md:aspect-16/10 bg-[rgba(255,255,255,0.01)] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] h-auto md:h-[80vh] min-h-[300px] md:min-h-[500px]"
                >
                    <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent pointer-events-none" />
                    <iframe
                        src="https://www.canva.com/design/DAHChFy5Xao/B0QZYX62F8C57rr_grX3dQ/view?embed"
                        className="w-full h-full border-none"
                        title="Product Demo Deck"
                        allowFullScreen
                        allow="fullscreen"
                    />
                </motion.div>

                {/* Footer info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="text-white/40 text-sm">
                        © 2026 Limelight AI. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <a href="/pricing" className="text-white/40 hover:text-white transition-colors text-sm">Pricing</a>
                        <a href="/contact" className="text-white/40 hover:text-white transition-colors text-sm">Contact Support</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
