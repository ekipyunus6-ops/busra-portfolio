import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { servicesContent } from "@/lib/site-content";

export function ServicesSection() {
  return (
    <Section id="services" delay={0.04}>
      <SectionHeader
        eyebrow={servicesContent.eyebrow}
        title={servicesContent.title}
        intro={servicesContent.intro}
        ghostText="Services"
      />

      <div className="mt-16 space-y-6">
        {servicesContent.items.map((item, index) => (
          <article
            key={item.title}
            className={`studio-panel group px-6 py-7 transition-transform duration-500 hover:-translate-y-1 sm:px-8 sm:py-8 ${
              index % 2 === 1 ? "lg:ml-14" : "lg:mr-14"
            }`}
          >
            <div className="relative z-10 grid gap-6 lg:grid-cols-[4.5rem_minmax(0,0.95fr)_minmax(0,0.7fr)] lg:gap-10">
              <p className="section-eyebrow text-text/70">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div>
                <h3 className="text-[clamp(2.3rem,4vw,4.5rem)] font-[350] leading-[0.92] tracking-[-0.06em] text-text transition-transform duration-500 group-hover:translate-x-1">
                  {item.title}
                </h3>
              </div>

              <div className="max-w-[28rem] lg:pt-1">
                <p className="text-[1.03rem] leading-8 text-muted">
                  {item.description}
                </p>
                <p className="mt-5 text-[0.74rem] uppercase tracking-[0.18em] text-subtle">
                  {item.detail}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
