import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing — Limelight",
  description: "Simple and transparent pricing for the Limelight workspace.",
};

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export default function Pricing() {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: "$8",
      period: "/month",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 1,000 queries/month",
        "WhatsApp integration",
        "Essential connectors for individuals & small teams",
      ],
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Up to x queries/month",
        "Full connector catalog",
        "Flexible API access",
        "Priority support",
        "Advanced workflow integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited queries",
        "Enterprise security",
        "On-premise deployment",
        "Dedicated support",
        "SLA guarantee",
      ],
    },
  ];

  const accent = "#FF8E2B";

  return (
    <div
      className="min-h-screen w-full flex justify-center "
      style={{ background: "#171616" }}
    >
      <div
        className="
          mx-auto w-full max-w-[1200px]
          px-4 sm:px-6 lg:px-8
          py-6 sm:py-8 lg:py-6
          flex flex-col justify-center
        "
      >
        {/* Label */}
        <div className="mb-4 text-xs tracking-[0.2em] text-white/60 uppercase">
          <span style={{ color: accent }}>●</span> Plans
        </div>

        <h1 className="text-[32px] sm:text-[44px] lg:text-[42px] leading-[1.1] font-semibold text-white">
          Pricing Plans
        </h1>
        <p className="mt-2 text-[12px] sm:text-sm text-white/60 max-w-[620px]">
          Tailored pricing for teams of every size, from startups to enterprises.
        </p>

        {/* Cards */}
        <div className="mt-6 grid gap-4 md:gap-5 lg:gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={[
                "relative rounded-xl border",
                "bg-[rgba(255,255,255,0.02)]",
                "border-white/10",
                "hover:border-white/20 transition-colors",
                plan.popular ? "ring-1 ring-accent" : "",
              ].join(" ")}
              style={{ ["--accent" as any]: accent }}
            >
              <div className="absolute left-3 top-3 text-[9px] tracking-[0.25em] text-white/60 uppercase select-none">
                {String(idx + 1).padStart(2, "0")}{" "}
                <span className="text-white/70">{plan.name}</span>
              </div>

              <div className="p-5 sm:p-5 lg:p-6">
                {/* Plan header */}
                <div className="pt-4 pb-4">
                  <div className="flex items-baseline gap-2">
                    <div className="text-[24px] sm:text-[28px] lg:text-[26px] font-semibold text-white">
                      {plan.name}
                    </div>
                  </div>
                  <div className="mt-1 flex items-end gap-1">
                    <div className="text-[26px] sm:text-[30px] lg:text-[28px] font-semibold text-white">
                      {plan.price}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/50">
                      {plan.period}
                    </div>
                  </div>
                  <p className="mt-2 text-[12px] text-white/60">
                    {plan.description}
                  </p>
                </div>

                <div className="my-2 border-t border-dotted border-white/15" />

                <div className="space-y-3 text-[12px] sm:text-[13px]">
                  <div className="text-white/70 tracking-[0.18em] uppercase text-[10px]">
                    Core features
                  </div>

                  <ul className="space-y-1.5">
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/80 leading-relaxed"
                      >
                        <svg
                          className="mt-[1px] h-3.5 w-3.5 shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          style={{ color: "#6CE37E" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.296a1 1 0 010 1.414l-8.01 8.01a1 1 0 01-1.415 0l-3.99-3.99A1 1 0 114.7 9.316l3.283 3.282 7.303-7.302a1 1 0 011.418 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="my-3 border-t border-dotted border-white/15" />

                <div className="pt-1">
                  <Button
                    className={[
                      "w-full h-8 sm:h-9 rounded-full",
                      "text-[12px] sm:text-[13px] font-medium",
                      "bg-accent hover:bg-accent/90 text-black",
                    ].join(" ")}
                    style={{ ["--accent" as any]: accent }}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"} →
                  </Button>

                  {plan.popular && (
                    <div
                      className="mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-[9px] tracking-wide uppercase"
                      style={{
                        background: "rgba(255, 142, 43, 0.12)",
                        color: accent,
                        border: `1px solid ${accent}33`,
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer bar - shrunk for no scroll */}
        <div className="mt-4 lg:mt-6 rounded-lg border border-white/10 bg-[rgba(255,255,255,0.02)] p-3">
          <div className="text-[11px] sm:text-[12px] text-white/70">
            14-day free trial. No credit card required.{" "}
            <a href="/contact" className="underline underline-offset-4" style={{ color: accent }}>
              Contact us
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
