"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { serviceOptions } from "@/lib/site-data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand/20 bg-brand/5 p-8 text-center">
        <p className="text-lg font-semibold text-brand">Message envoyé !</p>
        <p className="mt-2 text-sm text-brand-dark/70">
          Merci pour votre message. Notre équipe vous répondra dans les 24
          heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className="w-full rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+237 6XX XXX XXX"
            className="w-full rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-brand-dark"
          >
            Service concerné
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand-dark"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre besoin ou votre projet..."
          className="w-full resize-none rounded-xl border border-brand-dark/15 bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <Button
        type="submit"
        className="h-12 w-full rounded-full bg-brand text-sm font-semibold text-white hover:bg-brand/90 sm:w-auto sm:px-10"
      >
        Envoyer le message
      </Button>
    </form>
  );
}
