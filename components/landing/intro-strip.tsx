import Link from "next/link";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/site-data";

export function IntroStrip() {
  return (
    <section className="border-y border-brand-dark/10 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 text-center lg:px-8">
        <p className="section-eyebrow">// id_titand</p>
        <p className="hero-title-sub max-w-3xl text-brand">{company.slogan}</p>
        <p className="section-body max-w-2xl">
          Nous réunissons assistance, réseaux, cybersécurité, développement et
          conseil au sein d&apos;un seul partenaire IT — pour que votre
          organisation avance sans rupture.
        </p>
        <Button
          asChild
          variant="outline"
          className="h-10 rounded-full border-brand/30 px-5 text-sm font-semibold text-brand hover:bg-brand/5"
        >
          <Link href="/about">Découvrir notre histoire</Link>
        </Button>
      </div>
    </section>
  );
}
