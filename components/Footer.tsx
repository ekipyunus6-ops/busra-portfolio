import { footerContent } from "@/lib/site-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 pb-8 pt-8">
      <div className="page-shell">
        <div className="studio-panel px-6 py-8 sm:px-8 sm:py-9">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.6fr)_minmax(0,0.6fr)]">
            <div className="max-w-[32rem]">
              <p className="section-eyebrow text-text/70">Studio Coşgun</p>
              <p className="mt-5 text-[1.08rem] leading-8 text-muted">
                {footerContent.statement}
              </p>
            </div>

            <div>
              <p className="section-eyebrow">Navigate</p>
              <ul className="mt-5 space-y-3 text-[0.96rem] text-text/88">
                {footerContent.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-eyebrow">Social</p>
              <ul className="mt-5 space-y-3 text-[0.96rem] text-text/88">
                {footerContent.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="transition-colors duration-200 hover:text-white"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-10 mt-10 flex flex-col gap-2 border-t border-border/70 pt-5 text-[0.88rem] text-subtle md:flex-row md:items-center md:justify-between">
            <p>© {year} Studio Coşgun</p>
            <p>Istanbul / Remote portfolio studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
