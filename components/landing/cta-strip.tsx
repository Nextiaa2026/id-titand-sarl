import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaStripProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "brand" | "dark" | "light";
};

export function CtaStrip({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "brand",
}: CtaStripProps) {
  return (
    <section
      className={cn(
        "py-14",
        variant === "brand" && "bg-brand-gradient",
        variant === "dark" && "bg-brand",
        variant === "light" && "bg-brand-muted"
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <h3
            className={cn(
              "section-title",
              variant === "light" ? "text-brand-dark" : "text-white"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "mt-2 max-w-xl section-body",
              variant === "light" ? "text-brand-dark/75" : "text-white/85"
            )}
          >
            {description}
          </p>
        </div>
        <Button
          asChild
          className={cn(
            "h-12 shrink-0 rounded-full px-8 text-base font-semibold",
            variant === "light"
              ? "bg-brand text-white hover:bg-brand/90"
              : "bg-brand-light text-brand hover:bg-white"
          )}
        >
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
