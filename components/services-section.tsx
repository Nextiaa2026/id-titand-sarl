import { HugeiconsIcon } from "@hugeicons/react";
import {
  BookOpen01Icon,
  CodeIcon,
  Shield01Icon,
  Wifi01Icon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { detailedServices, mainServices } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap = {
  wrench: Wrench01Icon,
  network: Wifi01Icon,
  shield: Shield01Icon,
  code: CodeIcon,
  book: BookOpen01Icon,
} as const;

type ServicesSectionProps = {
  compact?: boolean;
};

export function ServicesSection({ compact = false }: ServicesSectionProps) {
  const services = compact ? mainServices.slice(0, 3) : mainServices;

  return (
    <section className="bg-brand-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
              Nos Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
              Ce que nous offrons pour vous
            </h2>
          </div>
          <p className="max-w-md text-brand-dark/70">
            Une gamme complète de services IT pour sécuriser, moderniser et
            faire grandir votre organisation.
          </p>
        </div>

        <div
          className={cn(
            "grid gap-6",
            compact ? "mb-10 md:grid-cols-3" : "mb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          )}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <article
                key={service.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1",
                  service.featured
                    ? "bg-brand text-white shadow-xl shadow-brand/25"
                    : "bg-white text-brand-dark shadow-md"
                )}
              >
                <div
                  className={cn(
                    "mb-6 flex size-14 items-center justify-center rounded-full",
                    service.featured
                      ? "bg-white/15 text-brand-light"
                      : "bg-brand/10 text-brand"
                  )}
                >
                  <HugeiconsIcon icon={Icon} className="size-7" />
                </div>
                <h3 className="text-lg font-bold leading-snug">
                  {service.shortTitle ?? service.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    service.featured ? "text-white/80" : "text-brand-dark/70"
                  )}
                >
                  {service.description}
                </p>
                {!compact && service.items && (
                  <ul className="mt-5 space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "flex items-start gap-2 text-sm",
                          service.featured ? "text-white/75" : "text-brand-dark/65"
                        )}
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-light" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>

        {!compact && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service) => (
              <article
                key={service.title}
                className={cn(
                  "rounded-2xl border p-6 transition-shadow hover:shadow-lg",
                  service.highlighted
                    ? "border-brand bg-brand text-white shadow-lg shadow-brand/20"
                    : "border-brand-dark/10 bg-white"
                )}
              >
                <h3
                  className={cn(
                    "text-lg font-bold",
                    service.highlighted ? "text-white" : "text-brand"
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    service.highlighted ? "text-white/80" : "text-brand-dark/70"
                  )}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        )}

        {compact && (
          <div className="text-center">
            <Button
              asChild
              className="h-12 rounded-full bg-brand px-8 text-sm font-semibold text-white hover:bg-brand/90"
            >
              <Link href="/services">Voir tous les services</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
