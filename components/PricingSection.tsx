"use client";

import { useState } from "react";

import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { pricingContent } from "@/lib/site-content";

type BillingMode = "monthly" | "yearly";

export function PricingSection() {
  const [billingMode, setBillingMode] = useState<BillingMode>("monthly");

  return (
    <Section id="pricing" delay={0.04}>
      <SectionHeader
        eyebrow={pricingContent.eyebrow}
        title={pricingContent.title}
        intro={pricingContent.intro}
        ghostText="Pricing"
      />

      <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="studio-panel w-fit px-2 py-2">
          <div className="relative z-10 flex items-center gap-1">
            {(["monthly", "yearly"] as BillingMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                className={`rounded-full px-4 py-2 text-[0.76rem] uppercase tracking-[0.18em] transition-all duration-200 ${
                  billingMode === mode
                    ? "bg-white/10 text-text shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-muted hover:text-text"
                }`}
                onClick={() => setBillingMode(mode)}
              >
                {pricingContent.toggle[mode]}
              </button>
            ))}
          </div>
        </div>

        <p className="max-w-[31rem] text-[0.96rem] leading-7 text-muted">
          {pricingContent.note}
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {pricingContent.plans.map((plan) => (
          <article
            key={plan.title}
            className={`studio-panel px-6 py-7 sm:px-8 sm:py-8 ${
              plan.featured ? "lg:-translate-y-3" : ""
            }`}
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <p className="section-eyebrow">{plan.label}</p>
                {plan.featured ? (
                  <span className="hero-badge">Best fit</span>
                ) : null}
              </div>

              <h3 className="mt-8 text-[clamp(2.45rem,4vw,4rem)] font-[350] leading-[0.92] tracking-[-0.06em] text-text">
                {plan.title}
              </h3>
              <p className="mt-4 max-w-[29rem] text-[1rem] leading-8 text-muted">
                {plan.description}
              </p>

              <div className="mt-10 border-t border-border/70 pt-7">
                <p className="text-[clamp(2.7rem,4vw,4.3rem)] font-[350] leading-none tracking-[-0.06em] text-text">
                  {plan.pricing[billingMode]}
                </p>
                <p className="mt-3 text-[0.74rem] uppercase tracking-[0.18em] text-subtle">
                  {plan.cadence[billingMode]}
                </p>
              </div>

              <ul className="mt-10 space-y-4 text-[1rem] leading-7 text-text/84">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="text-[0.95rem] text-[color:var(--color-accent)]"
                    >
                      ✦
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={plan.href}
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-10 w-fit"
              >
                {plan.ctaLabel}
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
