// src/app/(navbar)/pricing/page.tsx
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose the perfect plan for your needs",
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
      price: "$0",
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
      className="min-h-screen w-full"
      style={{
        background: "#171616",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="mb-6 text-xs tracking-[0.2em] text-white/60 uppercase">
          <span style={{ color: accent }}>●</span> Plans
        </div>


        <h1 className="text-[40px] sm:text-[48px] leading-[1.1] font-semibold text-white">
          Pricing Plans
        </h1>
        <p className="mt-3 text-[13px] sm:text-sm text-white/60 max-w-[720px]">
          Tailored pricing for teams of every size, from startups to enterprises.
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
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

              <div className="absolute left-3 top-3 text-[10px] tracking-[0.25em] text-white/60 uppercase select-none">
                {String(idx + 1).padStart(2, "0")}{" "}
                <span className="text-white/70">{plan.name}</span>
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6 lg:p-7">
                {/* Plan header */}
                <div className="pt-4 pb-5">
                  <div className="flex items-baseline gap-2">
                    <div className="text-[28px] sm:text-[32px] font-semibold text-white">
                      {plan.name}
                    </div>
                  </div>
                  <div className="mt-2 flex items-end gap-1">
                    <div className="text-[28px] sm:text-[32px] font-semibold text-white">
                      {plan.price}
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      {plan.period}
                    </div>
                  </div>
                  <p className="mt-3 text-[13px] text-white/60">
                    {plan.description}
                  </p>
                </div>

                {/* dotted divider */}
                <div className="my-3 border-t border-dotted border-white/15" />

                {/* Feature groups (single group to mirror screenshot spacing) */}
                <div className="space-y-4 text-[13px]">
                  {/* Section title mimic */}
                  <div className="text-white/70 tracking-[0.18em] uppercase text-[11px]">
                    Core features
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-white/80 leading-relaxed"
                      >
                        {/* check icon */}
                        <svg
                          className="mt-[2px] h-4 w-4 shrink-0"
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


                <div className="my-5 border-t border-dotted border-white/15" />

                {/* CTA */}
                <div className="pt-1">
                  <Button
                    className={[
                      "w-full h-9 rounded-full",
                      "justify-center gap-2",
                      "text-[13px] font-medium",
                      "bg-accent hover:bg-accent/90 text-black",
                      "transition-colors",
                    ].join(" ")}
                    style={{ ["--accent" as any]: accent }}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    <span aria-hidden>→</span>
                  </Button>


                  {plan.popular && (
                    <div
                      className="mt-3 inline-flex items-center rounded-full px-3 py-1 text-[10px] tracking-wide uppercase"
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

        <div className="mt-8 sm:mt-10 lg:mt-12 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.02)] p-5 sm:p-6">
          <div className="text-[13px] text-white/70">
            All plans include a 14-day free trial. No credit card required. Need
            a custom solution?{" "}
            <a
              href="/contact"
              className="underline decoration-1 underline-offset-4"
              style={{ color: accent }}
            >
              Contact us
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
