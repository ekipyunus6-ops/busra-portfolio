import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Studio Coşgun`,
    description: project.intro
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <PageShell>
      <article className="pb-[calc(var(--section-space)*1.15)] pt-[max(7rem,var(--hero-space))]">
        <div className="page-shell">
          <ButtonLink href="/#work" variant="inline">
            Seçili işlere dön
          </ButtonLink>

          <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] xl:gap-20">
            <div>
            <p className="section-eyebrow">
                {project.category} / {project.year}
              </p>
              <h1 className="hero-title mt-5 max-w-[7.6ch]">{project.title}</h1>
            </div>

            <p className="section-intro xl:pt-6">{project.intro}</p>
          </div>

          <div className="mt-16 grid gap-6 border-t border-border/70 pt-6 sm:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="section-eyebrow">Partner</p>
              <p className="mt-3 text-[1.03rem] text-text">{project.partner}</p>
            </div>
            <div>
              <p className="section-eyebrow">Sektör</p>
              <p className="mt-3 text-[1.03rem] text-text">{project.sector}</p>
            </div>
            <div>
              <p className="section-eyebrow">Servisler</p>
              <p className="mt-3 text-[1.03rem] leading-7 text-text">
                {project.services.join(", ")}
              </p>
            </div>
            <div>
              <p className="section-eyebrow">Teslimler</p>
              <p className="mt-3 text-[1.03rem] leading-7 text-text">
                {project.deliverables.join(", ")}
              </p>
            </div>
          </div>

          <div
            className={`relative mt-16 overflow-hidden rounded-[1rem] border border-border bg-surfaceAlt ${project.aspectClassName}`}
          >
            <Image
              src={project.coverImage}
              alt={project.coverAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-16 grid gap-16 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] xl:gap-24">
            <div>
              <p className="section-eyebrow">Genel bakış</p>
              <p className="mt-5 text-[1.32rem] leading-[1.72] tracking-[-0.025em] text-text/92 md:text-[1.55rem]">
                {project.intro}
              </p>
            </div>

            <div className="space-y-12">
              <section className="border-t border-border/70 pt-7">
                <p className="section-eyebrow">Zorluk</p>
                <p className="mt-5 text-[1.04rem] leading-8 text-muted">
                  {project.problem}
                </p>
              </section>

              <section className="border-t border-border/70 pt-7">
                <p className="section-eyebrow">Yaklaşım</p>
                <p className="mt-5 text-[1.04rem] leading-8 text-muted">
                  {project.approach}
                </p>
              </section>

              <section className="border-t border-border/70 pt-7">
                <p className="section-eyebrow">Sonuç</p>
                <p className="mt-5 text-[1.04rem] leading-8 text-muted">
                  {project.outcome}
                </p>
              </section>
            </div>
          </div>

          <figure className="mt-20 max-w-[45rem] border-t border-border/70 pt-8">
            <blockquote className="text-[1.4rem] leading-[1.7] tracking-[-0.03em] text-text/92 md:text-[1.7rem]">
              “{project.testimonial.quote}”
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-[1rem] border border-border bg-surfaceAlt">
                <Image
                  src={project.testimonial.avatar}
                  alt={project.testimonial.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[1rem] text-text">{project.testimonial.name}</p>
                <p className="mt-1 text-[0.96rem] text-muted">
                  {project.testimonial.role}
                </p>
              </div>
            </figcaption>
          </figure>

          <div className="mt-20 border-t border-border/70 pt-8">
            <p className="section-eyebrow">Sonraki vaka</p>
            <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-[clamp(2.4rem,4vw,4rem)] font-[300] leading-[0.96] tracking-[-0.055em] text-text">
                  {nextProject.title}
                </h2>
                <p className="mt-3 max-w-[32rem] text-[1rem] leading-8 text-muted">
                  {nextProject.description}
                </p>
              </div>
              <ButtonLink href={`/work/${nextProject.slug}`} variant="inline">
                Sonraki vakayı aç
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
