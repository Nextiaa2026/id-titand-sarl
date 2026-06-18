"use client";

import Image from "next/image";
import { useState } from "react";

import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-brand-muted py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Témoignages</p>
          <h2 className="section-title mt-2 text-brand-dark">
            Ce que nos clients disent de nous
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[240px_1fr]">
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-2xl shadow-xl ring-4 ring-brand/10 lg:mx-0 lg:w-full">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>

          <div>
            <blockquote className="text-lg leading-relaxed text-brand-dark/85 sm:text-xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-base font-bold text-brand sm:text-lg">
                {current.name}
              </p>
              <p className="mt-1 text-base text-brand-dark/65 sm:text-lg">
                {current.role}
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Témoignage ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={cn(
                    "size-3 rounded-full transition-colors",
                    active === index ? "bg-brand" : "bg-brand/25 hover:bg-brand/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
