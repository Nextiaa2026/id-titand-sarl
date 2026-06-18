import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title mt-2 text-brand-dark">
              Questions fréquemment posées
            </h2>
            <p className="section-body mt-3">
              Vous avez une question ? Consultez nos réponses les plus courantes
              ou contactez-nous directement.
            </p>

            <Accordion type="single" collapsible className="mt-10 w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-base text-brand-dark hover:text-brand sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-brand-dark/75 sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative hidden aspect-square overflow-hidden rounded-2xl lg:block">
            <Image
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Support technique ID TitanD"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/80 via-brand/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-4xl font-bold text-white">FAQ</p>
              <p className="mt-2 text-lg text-white/85">
                Tout ce que vous devez savoir sur nos services IT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
