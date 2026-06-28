import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container-page">
        <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-balance text-3xl sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-accent/40 to-background py-14 sm:py-20">
      <div className="container-page max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-balance text-4xl sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
