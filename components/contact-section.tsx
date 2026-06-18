import Link from "next/link";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-24">
      <div className="absolute inset-0 bg-brand/20" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="section-eyebrow text-white/90">Contactez-nous</p>
        <h2 className="section-title mt-2 text-white">
          Prêt à sécuriser et transformer votre IT ?
        </h2>
        <p className="hero-body mx-auto mt-3 max-w-2xl text-white/90">
          Parlons de vos besoins en assistance, cybersécurité, développement ou
          formation. Notre équipe vous répond sous 24 heures.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="h-12 rounded-full bg-white px-8 text-base font-semibold text-brand hover:bg-brand-muted"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/15"
          >
            <Link href="/about#team">Rencontrer l&apos;équipe</Link>
          </Button>
        </div>

        <p className="mt-8 text-base text-white/80 sm:text-lg">
          Ou écrivez-nous directement à{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-white underline-offset-4 hover:underline"
          >
            {company.email}
          </a>
        </p>
      </div>
    </section>
  );
}
