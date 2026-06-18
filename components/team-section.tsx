import Image from "next/image";

import { teamMembers } from "@/lib/site-data";

export function TeamSection() {
  return (
    <section id="team" className="bg-brand py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-light">
            Notre Équipe
          </p>
          <h2 className="section-title mt-2 text-white">
            Rencontrez nos experts
          </h2>
          <p className="section-body mx-auto mt-3 max-w-2xl text-white/70">
            Des professionnels passionnés, unis par la même mission : rendre la
            technologie accessible, sécurisée et performante pour chaque client.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-brand-light/40"
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-white sm:text-2xl">{member.name}</h3>
                <p className="mt-1 text-base font-medium text-brand-light sm:text-lg">
                  {member.role}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
