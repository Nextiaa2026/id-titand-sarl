import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/site-data";

export function TeamPreviewSection() {
  return (
    <section className="bg-brand py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
          <p className="section-eyebrow text-brand-light">Notre Équipe</p>
          <h2 className="section-title mt-2 text-white">
              Rencontrez nos experts
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10"
          >
            <Link href="/about#team">Voir toute l&apos;équipe</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-brand-light/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-base font-medium text-brand-light">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
