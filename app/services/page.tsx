import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ServicesList } from "@/components/landing/services-list";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { company, serviceProcess } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: `Découvrez les services IT de ${company.name} : assistance, cybersécurité, développement, conseil et formation.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos Services"
        title="Des solutions IT complètes pour chaque besoin"
        description="De l'assistance quotidienne à la cybersécurité avancée, en passant par le développement et la formation — nous accompagnons votre transformation digitale de A à Z."
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=80"
      />

      <ServicesList />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-eyebrow">// notre_methode</p>
            <h2 className="section-title mt-2 text-brand-dark">
              Comment nous travaillons
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceProcess.map((step) => (
              <article
                key={step.step}
                className="relative rounded-2xl border border-brand-dark/10 bg-brand-muted p-8 shadow-sm"
              >
                <span className="font-mono text-4xl font-bold text-brand/25">
                  {step.step}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-brand">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-dark/75 sm:text-lg">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand py-20">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="section-title text-white">
            Un projet en tête ?
          </h2>
          <p className="hero-body mx-auto mt-3 max-w-2xl text-white/80">
            Contactez-nous pour un devis gratuit et une consultation adaptée à
            vos besoins spécifiques.
          </p>
          <Button
            asChild
            className="mt-8 h-12 rounded-full bg-brand-light px-8 text-base font-semibold text-brand hover:bg-white"
          >
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
