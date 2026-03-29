type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  titleAs?: "h2" | "h3";
  className?: string;
  ghostText?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  titleAs = "h2",
  className = "",
  ghostText
}: SectionHeaderProps) {
  const HeadingTag = titleAs;

  return (
    <div className={`relative ${className}`.trim()}>
      {ghostText ? (
        <p aria-hidden="true" className="section-ghost">
          {ghostText}
        </p>
      ) : null}

      <div className="relative z-10">
        <p className="section-eyebrow">{eyebrow}</p>
        <div className="mt-5 grid gap-8 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.6fr)] xl:gap-16">
          <HeadingTag className="section-title max-w-[10ch]">{title}</HeadingTag>
          {intro ? (
            <p className="section-intro max-w-[30rem] xl:pt-3">{intro}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
