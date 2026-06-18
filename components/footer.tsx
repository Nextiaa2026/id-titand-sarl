import Image from "next/image";
import Link from "next/link";

import { company, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="bg-brand-gradient h-1.5 w-full" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo/ID TITAND (2).png"
              alt={company.shortName}
              width={180}
              height={54}
              className="mb-6 h-12 w-auto object-contain"
            />
            <p className="max-w-md text-base leading-relaxed text-white/75">
              <span className="font-semibold text-brand-light">
                {company.slogan}
              </span>{" "}
              — Votre partenaire de confiance pour l&apos;assistance IT, la
              cybersécurité, le développement et la transformation digitale.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-light">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/75 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-light">
              Contact
            </h3>
            <ul className="space-y-3 text-base text-white/75">
              <li>{company.address}</li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-brand-light"
                >
                  {company.email}
                </a>
              </li>
              <li>{company.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>
          <p className="text-brand-light/80">{company.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
