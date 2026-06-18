"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { brandServices } from "@/lib/site-data";

export function ServicesList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="bg-brand-muted py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="section-eyebrow">// catalogue_complet</p>
          <h2 className="section-title mt-2 text-brand-dark">
            Tous nos services
          </h2>
          <p className="section-body mt-3">
            Chaque pôle répond à un besoin précis de votre système
            d&apos;information. Sélectionnez un service pour afficher le détail.
          </p>
        </div>

        <div className="space-y-20">
          {brandServices.map((service) => {
            const expanded = expandedId === service.id;

            return (
              <article key={service.id} id={service.id} className="scroll-mt-28">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:sticky lg:top-28 lg:aspect-[3/4] lg:min-h-[420px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-brand/10 to-transparent" />
                    <Badge className="absolute top-4 left-4 border-0 bg-brand-light font-mono text-sm text-brand">
                      {service.badge}
                    </Badge>
                    <p className="absolute bottom-4 left-4 font-mono text-sm text-white/90">
                      {service.code}
                    </p>
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <h3 className="section-title text-brand-dark">
                      {service.title}
                    </h3>
                    <p className="section-body mt-4">{service.summary}</p>

                    <ul className="mt-5 space-y-2">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-mono text-sm text-brand-dark/75"
                        >
                          <span className="text-brand-light">&gt;</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() =>
                          setExpandedId(expanded ? null : service.id)
                        }
                        className="h-10 rounded-full border-brand/30 px-5 text-sm font-semibold text-brand hover:bg-brand/5"
                      >
                        {expanded ? "Moins de détails" : "Plus de détails"}
                      </Button>
                      <Button
                        asChild
                        className="h-10 rounded-full bg-brand px-5 text-sm font-semibold text-white hover:bg-brand/90"
                      >
                        <Link href="/contact">Demander ce service</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {expanded && (
                  <div className="mt-8 border-t border-brand/15 pt-8 animate-in fade-in slide-in-from-top-2 duration-300 lg:pl-[calc(47.5%+3rem)]">
                    <p className="section-body max-w-3xl">
                      {service.details.description}
                    </p>

                    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
                      <div>
                        <h4 className="font-mono text-sm font-bold text-brand">
                          // inclus
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {service.details.includes.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-brand-dark/70"
                            >
                              · {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-mono text-sm font-bold text-brand">
                          // benefices
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {service.details.benefits.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-brand-dark/70"
                            >
                              · {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="mt-8 max-w-3xl rounded-xl bg-white px-5 py-4 text-sm text-brand-dark/75 ring-1 ring-brand/10">
                      <span className="font-mono font-semibold text-brand">
                        forWho:{" "}
                      </span>
                      {service.details.forWho}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
