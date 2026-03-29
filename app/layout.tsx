import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Studio Coşgun",
  description:
    "Calm editorial portfolio systems, case-study pages, and quieter digital launches for design-led brands."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${interTight.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="bg-bg font-sans text-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-5 focus:z-[70] focus:rounded-full focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-3 focus:text-sm focus:text-text"
        >
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
