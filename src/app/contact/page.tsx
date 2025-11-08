import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us — Limelight",
  description: "Get in touch with the Limelight team",
};

export default function Contact() {
  const accent = "#FF8E2B";

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#171616" }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Label */}
        <div className="mb-6 text-[11px] tracking-[0.25em] text-white/60 uppercase flex items-center gap-2">
          <span style={{ color: accent }}>●</span> Contact Us
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE – Hero Text */}
          <div className="text-white">
            <h1 className="text-[40px] sm:text-[54px] leading-[1.1] font-semibold mb-6">
              Transform the Way Your Team Works with Limelight
            </h1>

            <p className="text-[14px] sm:text-[15px] text-white/65 max-w-[520px] leading-relaxed">
              Limelight helps teams automate workflows, streamline operations, and move faster with AI-powered assistants. 
              Whether you're exploring partnership opportunities, need product guidance, or simply want to learn more — 
              we’d love to connect.
            </p>

            {/* Contact Info – redesigned to match new UI */}
            <div className="mt-10 space-y-6 text-[14px] text-white/80">
              <div className="flex items-start gap-3">
                <span className="text-white/60">Email:</span>
                <span className="text-white">{`team@limelight.chat`}</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-white/60">Phone:</span>
                <span className="text-white">+91 62397 22401</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-white/60">Office:</span>
                <span className="text-white">
                  Limelight HQ <br /> Ludhiana, India
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Form Card */}
          <div
            className="rounded-2xl border border-white/10 p-6 sm:p-8"
            style={{ background: "rgba(255, 255, 255, 0.03)" }}
          >
            {/* Your existing form component will inherit the new styling container */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
