import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { TeamSection } from "@/components/team-section";
import { Button } from "@/components/ui/button";
import { aboutContent, company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "À propos",
  description: `Découvrez ${company.name}, notre mission, nos valeurs et notre équipe d'experts IT.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={company.name}
        description={`${company.slogan} — Un partenaire IT engagé à vos côtés pour l'assistance, la sécurité, le développement et la formation.`}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="section-eyebrow">Notre Mission</p>
            <h2 className="section-title mt-2 text-brand-dark">
              L&apos;expertise IT au service de votre croissance
            </h2>
            <p className="section-body mt-4">
              {aboutContent.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-11 rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand/90"
              >
                <Link href="/services">Nos services</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-brand/30 px-6 text-sm font-semibold text-brand hover:bg-brand/5"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Équipe ID TitanD au travail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">Notre Vision</p>
            <p className="mt-3 text-lg leading-relaxed text-brand-dark/80 sm:text-xl">
              {aboutContent.vision}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {aboutContent.values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <span className="text-lg font-bold">◆</span>
                </div>
                <h3 className="text-lg font-bold text-brand">{value.title}</h3>
                <p className="section-body mt-2">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="bg-brand py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="section-title text-white">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="mt-4 text-lg text-white/85 sm:text-xl">
            Que vous ayez besoin d&apos;un dépannage urgent ou d&apos;une
            stratégie digitale complète, nous sommes à votre écoute.
          </p>
          <Button
            asChild
            className="mt-8 h-12 rounded-full bg-brand-light px-8 text-sm font-semibold text-brand hover:bg-white"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
