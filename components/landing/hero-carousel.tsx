"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const total = heroSlides.length;
  const slide = heroSlides[active];

  const goTo = useCallback(
    (index: number) => setActive((index + total) % total),
    [total]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {heroSlides.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-hidden={index !== active}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: item.light
                ? `linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, ${item.fadeColor}cc 55%, ${item.fadeColor} 100%)`
                : `linear-gradient(to bottom, rgba(46,49,146,0.55) 0%, rgba(46,49,146,0.82) 50%, ${item.fadeColor} 100%)`,
            }}
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-24 pb-28 lg:px-8">
        <div
          key={slide.id}
          className={cn(
            "max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500",
            slide.light ? "text-brand-dark" : "text-white"
          )}
        >
          <p
            className={cn(
              "hero-eyebrow",
              slide.light ? "text-brand" : "text-brand-light"
            )}
          >
            {slide.eyebrow}
          </p>
          <h1 className="hero-title">{slide.title}</h1>
          <p
            className={cn(
              "hero-body mt-5 max-w-2xl",
              slide.light ? "text-brand-dark/75" : "text-white/80"
            )}
          >
            {slide.description}
          </p>
          {slide.cta && (
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className={cn(
                  "h-11 rounded-full px-6 text-sm font-semibold",
                  slide.light
                    ? "bg-brand text-white hover:bg-brand/90"
                    : "bg-brand-light text-brand hover:bg-white"
                )}
              >
                <Link href={slide.cta.href}>{slide.cta.label}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.eyebrow}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                active === index
                  ? "w-8 bg-brand-light"
                  : "w-2 bg-white/40 hover:bg-white/70"
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Slide précédent"
            onClick={() => goTo(active - 1)}
            className="flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-5" />
          </button>
          <span className="font-mono text-sm text-white/70">
            {String(active + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Slide suivant"
            onClick={() => goTo(active + 1)}
            className="flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
