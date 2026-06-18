import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { brandServices } from "@/lib/site-data";

const previewServices = brandServices.slice(0, 2);

export function ServicesPreview() {
  return (
    <section id="services" className="bg-brand-muted py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="section-eyebrow">// nos_services</p>
          <h2 className="section-title mt-2 font-mono text-brand">
            Nos pôles d&apos;expertise
          </h2>
          <p className="section-body mt-3">
            Assistance, cybersécurité, développement, réseaux et conseil — un
            accompagnement complet pour votre transformation digitale.
          </p>
        </div>

        <div className="space-y-16">
          {previewServices.map((service) => (
            <article
              key={service.id}
              className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[340px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand/10" />
                <Badge className="absolute top-4 left-4 border-0 bg-brand-light font-mono text-sm text-brand">
                  {service.badge}
                </Badge>
              </div>

              <div>
                <p className="font-mono text-sm text-brand-light">
                  {service.code}
                </p>
                <h3 className="section-title mt-2 text-brand-dark">
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
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 h-10 rounded-full border-brand/30 px-5 text-sm font-semibold text-brand hover:bg-brand/5"
                >
                  <Link href={`/services#${service.id}`}>En savoir plus</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            asChild
            className="h-12 rounded-full bg-brand px-8 text-sm font-semibold text-white hover:bg-brand/90"
          >
            <Link href="/services">Voir tous nos services →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
