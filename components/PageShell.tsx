import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { TopNav } from "@/components/TopNav";
import { navigation, topNavCta } from "@/lib/site-content";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div aria-hidden="true" className="page-atmosphere">
        <span className="page-atmosphere__orb page-atmosphere__orb--top" />
        <span className="page-atmosphere__orb page-atmosphere__orb--left" />
        <span className="page-atmosphere__orb page-atmosphere__orb--right" />
        <span className="page-atmosphere__mesh" />
      </div>
      <TopNav items={navigation} cta={topNavCta} />
      <main id="main-content" className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
