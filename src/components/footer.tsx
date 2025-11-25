"use client";

import { usePathname } from "next/navigation";

import ReportIssueDialog from "@/components/report-issue-dialog";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/consumer") return null;


  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">

        {/* Big Title */}
        <h1 className="font-bold text-center bg-[linear-gradient(to_right,#fb923c_0%,#ED3558_60%,#ED3558_100%)] bg-clip-text text-transparent tracking-tight text-[clamp(3rem,12vw,12rem)] leading-none">
          LIMELIGHT
        </h1>

        <div className="w-full h-px bg-white/10 my-12" />

        {/* Top Section: Email / Socials / Phone */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-white/70">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-xs uppercase text-white/50">Email</span>
            <a href="mailto:example@limelight.ai" className="hover:text-white transition">
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
      </div>

      {/* Bottom Navigation + Made in India */}
      <div className="border-t border-white/10 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">

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

