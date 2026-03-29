"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { heroContent } from "@/lib/site-content";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const topWordmarkY = useTransform(scrollYProgress, [0, 0.24], [0, -60]);
  const bottomWordmarkY = useTransform(scrollYProgress, [0, 0.24], [0, 45]);
  const portraitY = useTransform(scrollYProgress, [0, 0.24], [0, 32]);

  return (
    <Section
      id="hero"
      className="overflow-hidden pb-[calc(var(--section-space)*1.2)] pt-[var(--hero-space)]"
      revealMode="static"
    >
      <div className="relative">
        <motion.div
          aria-hidden="true"
          className="hero-wordmark top-[5.5rem]"
          style={prefersReducedMotion ? undefined : { y: topWordmarkY }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={`top-${index}`}>{heroContent.wordmark}</span>
          ))}
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="hero-wordmark top-[17rem]"
          style={prefersReducedMotion ? undefined : { y: bottomWordmarkY }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <span key={`bottom-${index}`}>{heroContent.secondaryWordmark}</span>
          ))}
        </motion.div>

        <div className="relative z-10 pt-10">
          <p className="section-eyebrow text-center">{heroContent.eyebrow}</p>

          <motion.div
            className="hero-portrait-shell mt-12"
            style={prefersReducedMotion ? undefined : { y: portraitY }}
          >
            <motion.div
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: [0, -0.4, 0.4, 0] }
              }
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="hero-portrait-frame">
                <Image
                  src={heroContent.portrait.src}
                  alt={heroContent.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 76vw, 480px"
                  className="object-cover"
                />
              </div>

              <div className="pointer-events-none absolute left-5 top-5">
                <span className="hero-badge">{heroContent.portraitTag}</span>
              </div>

              <div className="pointer-events-none absolute bottom-5 right-5">
                <span className="hero-badge">{heroContent.portraitNote}</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="mx-auto mt-12 max-w-[46rem] text-center">
            <h1 className="hero-title">{heroContent.title}</h1>
            <p className="hero-support mx-auto mt-6 max-w-[35rem]">
              {heroContent.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href={heroContent.primaryCta.href} variant="primary">
                {heroContent.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={heroContent.secondaryCta.href} variant="secondary">
                {heroContent.secondaryCta.label}
              </ButtonLink>
            </div>

            <p className="mt-8 text-[0.76rem] uppercase tracking-[0.18em] text-subtle">
              {heroContent.ambientLine}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[62rem] gap-4 md:grid-cols-3">
            {heroContent.details.map((detail) => (
              <div key={detail.label} className="studio-panel px-5 py-5">
                <p className="section-eyebrow">{detail.label}</p>
                <p className="mt-3 text-[0.98rem] leading-7 text-text/90">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
