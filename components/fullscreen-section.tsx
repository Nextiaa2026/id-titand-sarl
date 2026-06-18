import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FullscreenSectionProps = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  fadeColor: string;
  light?: boolean;
  align?: "left" | "center";
  size?: "full" | "large" | "medium";
};

const sizeClasses = {
  full: "h-screen min-h-[640px]",
  large: "min-h-[75vh]",
  medium: "min-h-[55vh]",
};

export function FullscreenSection({
  image,
  eyebrow,
  title,
  description,
  cta,
  fadeColor,
  light = false,
  align = "left",
  size = "full",
}: FullscreenSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        sizeClasses[size]
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        priority={size === "full"}
        className="object-cover"
        sizes="100vw"
      />

      <div
        className="absolute inset-0"
        style={{
          background: light
            ? `linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, ${fadeColor}cc 55%, ${fadeColor} 100%)`
            : `linear-gradient(to bottom, rgba(46,49,146,0.55) 0%, rgba(46,49,146,0.82) 50%, ${fadeColor} 100%)`,
        }}
      />

      <div
        className={cn(
          "relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-24 pb-16 lg:px-8",
          align === "center" && "justify-center text-center"
        )}
      >
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto",
            light ? "text-brand-dark" : "text-white"
          )}
        >
          <p
            className={cn(
              "hero-eyebrow",
              light ? "text-brand" : "text-brand-light"
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={cn(
              size === "full" ? "hero-title" : "hero-title-sub"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "hero-body mt-5 max-w-2xl",
              light ? "text-brand-dark/75" : "text-white/80",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
          {cta && (
            <div
              className={cn(
                "mt-8 flex flex-wrap gap-4",
                align === "center" && "justify-center"
              )}
            >
              <Button
                asChild
                className={cn(
                  "h-11 rounded-full px-6 text-sm font-semibold",
                  light
                    ? "bg-brand text-white hover:bg-brand/90"
                    : "bg-brand-light text-brand hover:bg-white"
                )}
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
