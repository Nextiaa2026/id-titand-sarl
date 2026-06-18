import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CallIcon,
  Clock01Icon,
  Location01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { company, contactInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${company.name} pour vos besoins en assistance IT, cybersécurité, développement et formation.`,
};

const contactCards = [
  {
    icon: Location01Icon,
    title: "Adresse",
    value: company.address,
    href: undefined,
  },
  {
    icon: Mail01Icon,
    title: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: CallIcon,
    title: "Téléphone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Clock01Icon,
    title: "Horaires",
    value: contactInfo.hours,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Que ce soit pour un dépannage urgent, un audit de sécurité ou un projet de développement, notre équipe est à votre écoute."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-brand-muted py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              Envoyez-nous un message
            </h2>
            <p className="mt-2 text-lg text-brand-dark/75">
              Remplissez le formulaire ci-dessous et nous vous répondrons sous
              24 heures.
            </p>
            <div className="mt-8 rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              Nos coordonnées
            </h2>
            <p className="mt-2 text-lg text-brand-dark/75">
              {contactInfo.responseTime}
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="flex gap-4 rounded-2xl border border-brand-dark/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <HugeiconsIcon icon={card.icon} className="size-5" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-brand sm:text-lg">
                      {card.title}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="mt-1 block text-base text-brand-dark/75 transition-colors hover:text-brand sm:text-lg"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base text-brand-dark/75 sm:text-lg">
                        {card.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand p-6 text-white">
              <h3 className="text-xl font-bold sm:text-2xl">Besoin urgent ?</h3>
              <p className="mt-2 text-base text-white/85 sm:text-lg">
                Pour les incidents critiques affectant votre activité, appelez
                notre ligne d&apos;assistance directement.
              </p>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="mt-4 inline-block text-lg font-semibold text-brand-light hover:underline"
              >
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
