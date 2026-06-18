import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceGallery } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServiceGallerySection() {
  return (
    <section className="bg-brand-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
            Catalogue Complet
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-dark sm:text-4xl">
            Tous nos services en détail
          </h2>
          <p className="mt-4 text-brand-dark/70">
            De l&apos;assistance quotidienne à la cybersécurité avancée, découvrez
            comment nous protégeons et modernisons votre infrastructure IT.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGallery.map((service) => (
            <Card
              key={service.title}
              className={cn(
                "group overflow-hidden border-0 p-0 shadow-md ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                service.featured
                  ? "ring-brand bg-brand"
                  : "ring-brand-dark/10 bg-white"
              )}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t to-transparent",
                    service.featured
                      ? "from-brand via-brand/40"
                      : "from-brand/80 via-brand/20"
                  )}
                />
                <Badge
                  className={cn(
                    "absolute top-4 left-4 border-0",
                    service.featured
                      ? "bg-brand-light text-brand-dark"
                      : "bg-white/90 text-brand"
                  )}
                >
                  {service.badge}
                </Badge>
              </div>

              <CardHeader className="px-5 pt-5">
                <CardTitle
                  className={cn(
                    "text-base font-bold",
                    service.featured ? "text-white" : "text-brand-dark"
                  )}
                >
                  {service.title}
                </CardTitle>
                <CardDescription
                  className={cn(
                    "text-sm leading-relaxed",
                    service.featured ? "text-white/80" : "text-brand-dark/70"
                  )}
                >
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="px-5 pb-5">
                <Link
                  href="/services"
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-semibold transition-colors",
                    service.featured
                      ? "text-brand-light hover:text-white"
                      : "text-brand hover:text-brand-light"
                  )}
                >
                  En savoir plus →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            className="h-12 rounded-full bg-brand px-8 text-sm font-semibold text-white hover:bg-brand/90"
          >
            <Link href="/contact">Demander un devis gratuit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
