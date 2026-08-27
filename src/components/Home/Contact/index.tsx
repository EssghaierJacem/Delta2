'use client'

import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

import { getImgPath } from '@/utils/image'

// ============================================================
// CLIENTS / REFERENCES
// ============================================================

const clients = [
  {
    name: 'TIFERT',
    logo: '/images/clients/tifert.png',
  },
  {
    name: 'Renault Trucks',
    logo: '/images/clients/renault-trucks.png',
  },
  {
    name: 'Yazaki',
    logo: '/images/clients/yazaki.jpg',
  },
  {
    name: 'Mazda',
    logo: '/images/clients/mazda.png',
  },
  {
    name: 'Poulina Group Holding',
    logo: '/images/clients/poulina.png',
  },
  {
    name: 'Groupe Loukil',
    logo: '/images/clients/loukil-1.jpg',
  },
  {
    name: 'SICAR / FRDCM',
    logo: '/images/clients/sicar1.png',
  },
  {
    name: 'GCT',
    logo: '/images/clients/gct.jpg',
  },
  {
    name: 'CRC',
    logo: '/images/clients/crc.png',
  },
  {
    name: 'Les Ateliers de Mécanique',
    logo: '/images/clients/ateliers-mecanique.png',
  },
  {
    name: 'BG Tunisia',
    logo: '/images/clients/bg_tunisia.jpg',
  },
  {
    name: 'CPG',
    logo: '/images/clients/cpg.png',
  },
  {
    name: 'Voltalia',
    logo: '/images/clients/voltalia1.png',
  },
  {
    name: 'Coromandel',
    logo: '/images/clients/coromandel.png',
  },
  {
    name: 'Gensun',
    logo: '/images/clients/gensun.webp',
  },
]

// ============================================================
// MARQUEE ITEM
// ============================================================

const ClientLogo = ({
  client,
}: {
  client: {
    name: string
    logo: string
  }
}) => {
  return (
    <div className="group flex h-24 w-[180px] shrink-0 items-center justify-center px-8 sm:w-[210px]">
      <div className="relative h-14 w-full transition-all duration-500 group-hover:scale-105">
        <Image
          src={getImgPath(client.logo)}
          alt={client.name}
          fill
          sizes="210px"
          className="object-contain opacity-50 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    </div>
  )
}

// ============================================================
// REFERENCES MARQUEE
// ============================================================

const ReferencesMarquee = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-darkmode py-10 dark:bg-darklight">
      {/* Header */}

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-primary">
                Nos références
              </span>
            </div>

            <h3 className="text-[24px] font-bold tracking-[-0.02em] text-white sm:text-[30px]">
              Ils nous font confiance.
            </h3>
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
              Industrie · Énergie · Technologie
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

            <span className="text-sm font-semibold text-white/60">
              {clients.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Fade gauche */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-darkmode to-transparent dark:from-darklight sm:w-32" />

      {/* Fade droite */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-darkmode to-transparent dark:from-darklight sm:w-32" />

      {/* Marquee */}

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {/* Première série */}

          <div className="flex items-center border-y border-white/[0.06]">
            {clients.map((client) => (
              <div
                key={`first-${client.name}`}
                className="border-r border-white/[0.06]"
              >
                <ClientLogo client={client} />
              </div>
            ))}
          </div>

          {/* Deuxième série identique pour créer la boucle */}

          <div className="flex items-center border-y border-white/[0.06]">
            {clients.map((client) => (
              <div
                key={`second-${client.name}`}
                className="border-r border-white/[0.06]"
              >
                <ClientLogo client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile information */}

      <div className="container mx-auto mt-6 max-w-7xl px-4 sm:hidden">
        <div className="flex items-center justify-between">
          <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
            Industrie · Énergie · Technologie
          </span>

          <span className="text-xs font-semibold text-white/50">
            {clients.length.toString().padStart(2, '0')} références
          </span>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// CONTACT FORM
// ============================================================

const ContactForm = () => {
  return (
    <section className="relative overflow-hidden bg-darkmode py-20 dark:bg-darklight md:py-28">
      {/* Technical background */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Decorative circles */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-primary/[0.08]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full border border-white/[0.05]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* ==================================================
              LEFT — INFORMATIONS
          ================================================== */}

          <div
            className="lg:col-span-5"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Eyebrow */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary">
                Votre projet
              </span>
            </div>

            {/* Title */}

            <h2 className="max-w-lg text-[32px] font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-[40px] md:text-[46px]">
              Parlons de votre
              <br />
              <span className="text-primary">besoin.</span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-lg text-[13px] leading-7 text-white/50 sm:text-[14px]">
              Vous avez un projet en photovoltaïque, automatisme, sécurité
              électronique ou électricité industrielle ? Notre équipe est à
              votre écoute pour étudier votre besoin et vous accompagner dans
              sa réalisation.
            </p>

            {/* Contact information */}

            <div className="mt-10 space-y-7 border-t border-white/[0.08] pt-8">
              {/* Phone */}

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 text-primary">
                  <Icon icon="solar:phone-linear" width={18} />
                </div>

                <div>
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Téléphone
                  </span>

                  <a
                    href="tel:+21676203760"
                    className="mt-1 block text-[14px] font-semibold text-white transition-colors hover:text-primary"
                  >
                    +216 76 203 760
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 text-primary">
                  <Icon icon="solar:letter-linear" width={18} />
                </div>

                <div>
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Email
                  </span>

                  <a
                    href="mailto:contact@delta2sgroup.com"
                    className="mt-1 block text-[14px] font-semibold text-white transition-colors hover:text-primary"
                  >
                    contact@delta2sgroup.com
                  </a>
                </div>
              </div>

              {/* Address */}

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 text-primary">
                  <Icon icon="solar:map-point-linear" width={18} />
                </div>

                <div>
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Adresse
                  </span>

                  <p className="mt-1 max-w-sm text-[13px] leading-6 text-white/70">
                    Avenue Mohamed V, Immeuble Lejri, 2ᵉ étage, Bureau n°4,
                    2100 Gafsa, Tunisie.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom label */}

            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_5px_rgba(47,115,242,0.10)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Une réponse personnalisée
              </span>
            </div>
          </div>

          {/* ==================================================
              RIGHT — FORM
          ================================================== */}

          <div
            className="lg:col-span-7"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div className="relative border border-white/[0.08] bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-8 md:p-10 dark:bg-darkmode">
              {/* Corner decoration */}

              <div className="absolute right-0 top-0 h-14 w-14 border-r border-t border-primary/40" />

              <div className="mb-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Votre demande
                </span>

                <h3 className="mt-3 text-[25px] font-bold tracking-[-0.02em] text-midnight_text dark:text-white sm:text-[30px]">
                  Parlons de votre besoin
                </h3>

                <p className="mt-3 max-w-xl text-[12px] leading-6 text-gray dark:text-white/40">
                  Décrivez-nous votre projet et notre équipe reviendra vers
                  vous dans les meilleurs délais.
                </p>
              </div>

              <form className="grid gap-4">
                {/* Name */}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nom"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-midnight_text dark:text-white/50"
                    >
                      Nom
                    </label>

                    <input
                      id="nom"
                      type="text"
                      placeholder="Votre nom"
                      className="h-12 w-full rounded-none border border-border bg-transparent px-4 text-sm text-midnight_text outline-none transition-colors placeholder:text-grey focus:border-primary dark:border-white/[0.10] dark:text-white"
                    />
                  </div>

                  {/* First name */}

                  <div>
                    <label
                      htmlFor="prenom"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-midnight_text dark:text-white/50"
                    >
                      Prénom
                    </label>

                    <input
                      id="prenom"
                      type="text"
                      placeholder="Votre prénom"
                      className="h-12 w-full rounded-none border border-border bg-transparent px-4 text-sm text-midnight_text outline-none transition-colors placeholder:text-grey focus:border-primary dark:border-white/[0.10] dark:text-white"
                    />
                  </div>
                </div>

                {/* Email + Country */}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-midnight_text dark:text-white/50"
                    >
                      Email professionnel
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="vous@entreprise.com"
                      className="h-12 w-full rounded-none border border-border bg-transparent px-4 text-sm text-midnight_text outline-none transition-colors placeholder:text-grey focus:border-primary dark:border-white/[0.10] dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pays"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-midnight_text dark:text-white/50"
                    >
                      Pays
                    </label>

                    <input
                      id="pays"
                      type="text"
                      placeholder="Tunisie"
                      className="h-12 w-full rounded-none border border-border bg-transparent px-4 text-sm text-midnight_text outline-none transition-colors placeholder:text-grey focus:border-primary dark:border-white/[0.10] dark:text-white"
                    />
                  </div>
                </div>

                {/* Phone */}

                <div>
                  <label
                    htmlFor="telephone"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-midnight_text dark:text-white/50"
                  >
                    Téléphone
                  </label>

                  <input
                    id="telephone"
                    type="tel"
                    placeholder="+216"
                    className="h-12 w-full rounded-none border border-border bg-transparent px-4 text-sm text-midnight_text outline-none transition-colors placeholder:text-grey focus:border-primary dark:border-white/[0.10] dark:text-white"
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-midnight_text dark:text-white/50"
                  >
                    Votre projet
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Décrivez votre besoin, votre projet ou votre demande..."
                    className="w-full resize-none rounded-none border border-border bg-transparent px-4 py-3 text-sm leading-6 text-midnight_text outline-none transition-colors placeholder:text-grey focus:border-primary dark:border-white/[0.10] dark:text-white"
                  />
                </div>

                {/* Terms */}

                <label className="flex cursor-pointer items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                  />

                  <span className="text-[11px] leading-5 text-gray dark:text-white/40">
                    J'ai lu et j'accepte les{' '}
                    <span className="cursor-pointer font-medium text-primary">
                      Termes et Conditions
                    </span>
                  </span>
                </label>

                {/* Submit */}

                <button
                  type="submit"
                  className="group mt-2 flex h-12 w-full items-center justify-center gap-4 bg-primary px-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_15px_35px_rgba(47,115,242,0.25)]"
                >
                  Envoyer ma demande

                  <span className="flex h-7 w-7 items-center justify-center border border-white/30 transition-all duration-300 group-hover:border-white">
                    <Icon
                      icon="solar:arrow-right-linear"
                      width={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// MAIN COMPONENT
// ============================================================

const Contactform = () => {
  return (
    <div className="overflow-hidden">
      <ContactForm />

      <ReferencesMarquee />
    </div>
  )
}

export default Contactform