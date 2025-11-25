"use client";

import Image from "next/image";
import logo from "@/assets/oLogo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import ReportIssueDialog from "@/components/report-issue-dialog";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FooterAlt() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to join waitlist");
            }

            setSuccess(true);
            setEmail("");
        } catch (error) {
            console.error("Error joining waitlist:", error);
            alert(error instanceof Error ? error.message : "Failed to join waitlist. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer id="waitlist-form" className="w-full bg-[#0A0A0A] border-t border-white/10 mt-20 flex flex-col items-center py-20 px-4 sm:px-6">
            {/* Logo and Signup Section */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
                <Image
                    src={logo}
                    alt="Limelight Logo"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
                />
                <h1 className="font-bold text-center tracking-tight text-[clamp(3rem,12vw,12rem)] leading-none bg-[linear-gradient(to_right,#fb923c_0%,#ED3558_60%,#ED3558_100%)] bg-clip-text text-transparent">
                    LIMELIGHT
                </h1>
            </div>
            <p className="text-xl mt-4 text-white max-w-lg text-center">
                Get early access to Limelight - the intelligent AI search engine for your data
            </p>

            <div className="mt-8 w-full max-w-sm h-12 relative">
                <AnimatePresence mode="wait">
                    {success ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="w-full h-full flex items-center justify-center bg-green-500/10 border border-green-500/20 rounded-xl text-green-500 font-medium gap-2"
                        >
                            <Check className="w-5 h-5" />
                            <span>You&apos;re on the list!</span>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            onSubmit={handleSubmit}
                            className="flex w-full items-center space-x-2"
                        >
                            <Input
                                type="email"
                                placeholder="Enter Your email"
                                className="bg-[#111] border-none text-white placeholder:text-white/40 h-12 rounded-xl"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                required
                            />
                            <Button
                                type="submit"
                                className="bg-white text-black hover:bg-white/90 h-12 px-6 rounded-xl font-medium"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full h-px bg-white/10 my-12 max-w-6xl" />

            {/* Top Section: Email / Socials / Phone */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-white/70 px-6">
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-xs uppercase text-white/50">Email</span>
                    <a href="mailto:hello@limelight.chat" className="hover:text-white transition">
                        hello@limelight.chat
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-xs uppercase text-white/50">Follow Us</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition">X</a>
                        <a href="#" className="hover:text-white transition">Instagram</a>
                        <a href="#" className="hover:text-white transition">Discord</a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-1">
                    <span className="text-xs uppercase text-white/50">Phone</span>
                    <a href="tel:+911234567890" className="hover:text-white transition">
                        +91
                    </a>
                </div>
            </div>

            {/* Bottom Navigation + Made in India */}
            <div className="w-full max-w-6xl border-t border-white/10 mt-12 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">

                {/* Navigation */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                    <a href="#" className="hover:text-white transition">Home</a>
                    <a href="#" className="hover:text-white transition">Photos</a>
                    <a href="#" className="hover:text-white transition">Videos</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                    <a href="#" className="hover:text-white transition">Privacy</a>

                    <ReportIssueDialog
                        trigger={
                            <button className="hover:text-white transition font-bold cursor-pointer">
                                Report an Issue
                            </button>
                        }
                    />
                </div>

                {/* Made in India */}
                <span className="flex items-center gap-1">
                    Made in <b>India</b>
                </span>
            </div>
        </footer>
    );
}