"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { faqContent } from "@/lib/site-content";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="faq" delay={0.03}>
      <SectionHeader
        eyebrow={faqContent.eyebrow}
        title={faqContent.title}
        intro={faqContent.intro}
        ghostText="Questions"
      />

      <div className="studio-panel mt-16 px-6 py-4 sm:px-8 sm:py-5">
        <div className="relative z-10">
          {faqContent.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="border-b border-border/70 py-5 last:border-b-0"
              >
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 text-left text-[1.12rem] font-[350] leading-[1.32] tracking-[-0.04em] text-text transition-colors duration-200 hover:text-white md:text-[1.4rem]"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex((current) => (current === index ? -1 : index))
                    }
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="rounded-full border border-border/70 px-3 py-1 text-[1rem] leading-none text-subtle"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? false
                          : { height: 0, opacity: 0, filter: "blur(8px)" }
                      }
                      animate={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { height: "auto", opacity: 1, filter: "blur(0px)" }
                      }
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0, filter: "blur(8px)" }
                      }
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[40rem] pt-5 text-[1rem] leading-8 text-muted md:text-[1.04rem]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
