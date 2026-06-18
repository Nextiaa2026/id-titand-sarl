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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mainServices } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap = {
  wrench: Wrench01Icon,
  network: Wifi01Icon,
  shield: Shield01Icon,
  code: CodeIcon,
  book: BookOpen01Icon,
} as const;

export function OfferSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-light">
              Nos 5 Pôles de Services
            </p>
            <h2 className="mt-3 text-4xl font-bold text-brand sm:text-5xl">
              Ce que nous offrons pour vous
            </h2>
            <p className="mt-3 max-w-xl text-lg text-brand-dark/70">
              Chaque pôle couvre un aspect essentiel de votre système
              d&apos;information. Cliquez pour accéder au détail complet.
            </p>
          </div>
          <Button
            asChild
            className="h-11 shrink-0 rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand/90"
          >
            <Link href="/services">Page services complète</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Link key={service.title} href={service.href} className="group">
                <Card
                  className={cn(
                    "h-full border-0 py-0 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl",
                    service.featured
                      ? "bg-brand text-white ring-brand/20"
                      : "bg-brand-muted ring-brand-dark/5"
                  )}
                >
                  <CardHeader className="px-5 pt-6">
                    <div
                      className={cn(
                        "mb-3 flex size-12 items-center justify-center rounded-full",
                        service.featured
                          ? "bg-white/15 text-brand-light"
                          : "bg-brand/10 text-brand"
                      )}
                    >
                      <HugeiconsIcon icon={Icon} className="size-6" />
                    </div>
                    <CardTitle
                      className={cn(
                        "text-lg font-bold leading-snug",
                        service.featured ? "text-white" : "text-brand-dark"
                      )}
                    >
                      {service.shortTitle}
                    </CardTitle>
                    <CardDescription
                      className={cn(
                        "text-base leading-relaxed",
                        service.featured ? "text-white/80" : "text-brand-dark/70"
                      )}
                    >
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-6">
                    <ul className="space-y-1.5">
                      {service.items?.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "flex items-start gap-2 text-base",
                            service.featured
                              ? "text-white/75"
                              : "text-brand-dark/65"
                          )}
                        >
                          <span className="mt-1 size-1 shrink-0 rounded-full bg-brand-light" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span
                      className={cn(
                        "mt-4 inline-block text-base font-semibold",
                        service.featured
                          ? "text-brand-light group-hover:text-white"
                          : "text-brand group-hover:text-brand-light"
                      )}
                    >
                      En savoir plus →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
