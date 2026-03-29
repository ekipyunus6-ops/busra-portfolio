import Image from "next/image";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonialsContent } from "@/lib/site-content";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" delay={0.05}>
      <SectionHeader
        eyebrow={testimonialsContent.eyebrow}
        title={testimonialsContent.title}
        intro={testimonialsContent.intro}
        ghostText="Voices"
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {testimonialsContent.items.map((item, index) => (
          <figure
            key={item.name}
            className={`studio-panel px-6 py-7 sm:px-8 ${
              index % 2 === 1 ? "lg:translate-y-10" : ""
            }`}
          >
            <div className="relative z-10">
              <blockquote className="max-w-[31rem] text-[1.28rem] leading-[1.7] tracking-[-0.03em] text-text/92 md:text-[1.55rem]">
                “{item.quote}”
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-4 border-t border-border/70 pt-6">
                <div className="relative h-16 w-16 overflow-hidden rounded-[1.25rem] border border-border bg-[color:var(--color-surface-alt)]">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[1rem] text-text">{item.name}</p>
                  <p className="mt-1 text-[0.95rem] text-muted">{item.role}</p>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </Section>
  );
}
