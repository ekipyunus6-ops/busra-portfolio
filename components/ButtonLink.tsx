import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "inline";
  className?: string;
};

const variantClassNames = {
  primary: "button-base button-primary",
  secondary: "button-base button-secondary",
  inline: "button-inline"
} as const;

export function ButtonLink({
  href,
  children,
  external = false,
  variant = "secondary",
  className = ""
}: ButtonLinkProps) {
  const arrow = external ? "↗" : "→";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${variantClassNames[variant]} ${className}`.trim()}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-[1rem] leading-none">
        {arrow}
      </span>
    </a>
  );
}
