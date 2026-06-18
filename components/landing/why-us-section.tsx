import { HugeiconsIcon } from "@hugeicons/react";
import {
  CustomerSupportIcon,
  Rocket01Icon,
  SecurityCheckIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    icon: SecurityCheckIcon,
    title: "Expertise certifiée",
    description:
      "Des techniciens formés aux dernières normes de cybersécurité, réseaux et développement.",
  },
  {
    icon: CustomerSupportIcon,
    title: "Proximité & réactivité",
    description:
      "Interventions sur site à Douala et support à distance avec un délai de réponse garanti sous 24h.",
  },
  {
    icon: Rocket01Icon,
    title: "Solutions évolutives",
    description:
      "Des architectures pensées pour grandir avec votre entreprise, sans surcoût inutile.",
  },
  {
    icon: UserGroupIcon,
    title: "Accompagnement humain",
    description:
      "Formation, conseil et suivi post-projet pour que vos équipes maîtrisent les outils déployés.",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-brand-muted py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Pourquoi nous choisir</p>
          <h2 className="section-title mt-2 text-brand-dark">
            Un partenaire IT complet, pas seulement un prestataire
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="border-0 bg-white shadow-md ring-1 ring-brand-dark/5"
            >
              <CardHeader className="px-6 pt-6">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <HugeiconsIcon icon={reason.icon} className="size-6" />
                </div>
                <CardTitle className="text-base font-bold text-brand-dark sm:text-lg">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="section-body">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
