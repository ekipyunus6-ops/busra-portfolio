import Image from "next/image";

import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { workContent } from "@/lib/site-content";

export function WorkSection() {
  return (
    <Section id="work" delay={0.05} revealMode="static">
      <SectionHeader
        eyebrow={workContent.eyebrow}
        title={workContent.title}
        intro={workContent.intro}
        ghostText="Selected"
      />

      <div className="mt-16 space-y-8">
        {workContent.projects.map((project, index) => (
          <article
            key={project.slug}
            className={`group relative overflow-hidden rounded-[2rem] border border-border bg-[color:var(--color-surface-strong)] shadow-[0_32px_70px_var(--shadow-deep)] transition-transform duration-500 hover:-translate-y-1 ${
              index % 2 === 1 ? "lg:ml-16" : "lg:mr-16"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,169,255,0.24),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)]" />
            <div className={`relative min-h-[24rem] ${project.aspectClassName}`}>
              <Image
                src={project.coverImage}
                alt={project.coverAlt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:-translate-y-1"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,13,0.08),rgba(5,8,13,0.72)_72%,rgba(5,8,13,0.92)_100%)]" />
            </div>

            <div className="relative z-10 flex min-h-[22rem] flex-col justify-between px-6 pb-7 pt-7 sm:px-8 sm:pb-8 lg:px-10">
              <div className="flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] text-subtle">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <div className="mt-8 max-w-[38rem]">
                <h3 className="text-[clamp(2.6rem,5vw,5rem)] font-[350] leading-[0.92] tracking-[-0.065em] text-text transition-transform duration-500 group-hover:translate-x-1">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-[31rem] text-[1.04rem] leading-8 text-muted">
                  {project.description}
                </p>
                <p className="mt-6 text-[0.74rem] uppercase tracking-[0.18em] text-subtle">
                  {project.services.join(" / ")}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-5">
                <p className="max-w-[26rem] text-[0.94rem] leading-7 text-text/82">
                  {project.partner} için kurulan bu yapı, slug tabanlı vaka akışının
                  ana sayfa sunumuna nasıl bağlanacağını gösteriyor.
                </p>

                <ButtonLink
                  href={`/work/${project.slug}`}
                  variant="inline"
                  className="shrink-0"
                >
                  {project.ctaLabel}
                </ButtonLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
