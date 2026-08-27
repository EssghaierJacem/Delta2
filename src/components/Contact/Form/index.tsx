'use client'

import React from 'react'
import { Icon } from '@iconify/react'

const ContactForm = () => {
  return (
    <section className="relative overflow-hidden bg-section py-20 dark:bg-darklight md:py-28">

      {/* =====================================================
          BACKGROUND — TECHNICAL GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(0,0,0,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.7)_1px,transparent_1px)]
          [background-size:55px_55px]
          dark:opacity-[0.035]
          dark:[background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
        "
      />

      {/* Primary glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-primary/[0.06]
          blur-[100px]
        "
      />

      {/* Technical lines */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-[35%] bg-primary/60" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-px w-[25%] bg-primary/40" />

      <div className="pointer-events-none absolute right-8 top-16 hidden h-28 w-28 border-r border-t border-primary/15 lg:block">
        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
      </div>


      <div className="container relative mx-auto max-w-6xl px-4">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">


          {/* =====================================================
              LEFT
          ====================================================== */}

          <div
            className="lg:pt-5"
            data-aos="fade-right"
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-primary" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                Votre projet
              </span>

            </div>


            <h2
              className="
                mt-5
                max-w-md
                text-[34px]
                font-bold
                leading-[1.05]
                tracking-[-0.025em]
                text-midnight_text
                dark:text-white
                md:text-[44px]
              "
            >
              Parlons de votre

              <br />

              <span className="text-primary">
                projet énergétique.
              </span>
            </h2>


            <p className="mt-6 max-w-md text-[13px] leading-7 text-gray dark:text-white/50">
              Vous avez un projet photovoltaïque ou souhaitez améliorer
              votre installation ? Présentez-nous votre besoin et notre
              équipe vous orientera vers une solution adaptée.
            </p>


            {/* =================================================
                EXPERTISE BLOCK
            ================================================== */}

            <div className="mt-10 border-t border-black/[0.08] pt-7 dark:border-white/[0.08]">

              {/* Expertise */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-primary/20
                    bg-primary/[0.04]
                    text-primary
                  "
                >
                  <Icon
                    icon="solar:sun-2-linear"
                    width={21}
                  />
                </div>

                <div>

                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Expertise
                  </span>

                  <span className="mt-1 block text-[13px] font-medium text-midnight_text dark:text-white">
                    Photovoltaïque & solutions énergétiques
                  </span>

                </div>

              </div>


              {/* Approach */}

              <div className="mt-6 flex items-center gap-4">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-primary/20
                    bg-primary/[0.04]
                    text-primary
                  "
                >
                  <Icon
                    icon="solar:settings-linear"
                    width={21}
                  />
                </div>

                <div>

                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Notre approche
                  </span>

                  <span className="mt-1 block text-[13px] font-medium text-midnight_text dark:text-white">
                    Étude et solution sur mesure
                  </span>

                </div>

              </div>

            </div>


            {/* Small technical marker */}

            <div className="mt-12 hidden items-center gap-3 lg:flex">

              <span className="text-[8px] font-bold tracking-[0.2em] text-black/20 dark:text-white/20">
                DELTA 2S
              </span>

              <span className="h-px w-12 bg-primary/30" />

              <span className="text-[8px] tracking-[0.15em] text-black/20 dark:text-white/20">
                ENERGY SYSTEMS
              </span>

            </div>

          </div>


          {/* =====================================================
              FORM
          ====================================================== */}

          <div
            className="
              relative
              border
              border-black/[0.07]
              bg-white/95
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.06)]
              backdrop-blur-sm
              dark:border-white/[0.08]
              dark:bg-darkmode/95
              sm:p-8
              md:p-10
            "
            data-aos="fade-up"
          >

            {/* Corner decoration */}

            <div className="absolute right-0 top-0 h-14 w-14 border-r border-t border-primary/30" />

            <div className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-primary/15" />


            {/* Form header */}

            <div className="mb-8">

              <div className="flex items-center gap-3">

                <span className="h-px w-6 bg-primary" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Formulaire de contact
                </span>

              </div>

              <h3 className="mt-3 text-[25px] font-bold tracking-[-0.02em] text-midnight_text dark:text-white">
                Décrivez-nous votre besoin
              </h3>

              <p className="mt-2 max-w-md text-[11px] leading-6 text-gray dark:text-white/40">
                Quelques informations nous permettront de mieux comprendre
                votre demande.
              </p>

            </div>


            <form className="space-y-5">

              {/* Nom / Entreprise */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-midnight_text dark:text-white"
                  >
                    Nom & prénom
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    className="
                      h-12
                      w-full
                      border
                      border-black/[0.10]
                      bg-transparent
                      px-4
                      text-[12px]
                      text-midnight_text
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray/50
                      hover:border-black/20
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                      dark:border-white/[0.10]
                      dark:text-white
                      dark:placeholder:text-white/30
                      dark:hover:border-white/20
                    "
                  />

                </div>


                <div>

                  <label
                    htmlFor="company"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-midnight_text dark:text-white"
                  >
                    Entreprise
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nom de l'entreprise"
                    className="
                      h-12
                      w-full
                      border
                      border-black/[0.10]
                      bg-transparent
                      px-4
                      text-[12px]
                      text-midnight_text
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray/50
                      hover:border-black/20
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                      dark:border-white/[0.10]
                      dark:text-white
                      dark:placeholder:text-white/30
                      dark:hover:border-white/20
                    "
                  />

                </div>

              </div>


              {/* Email / Téléphone */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-midnight_text dark:text-white"
                  >
                    Adresse email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="
                      h-12
                      w-full
                      border
                      border-black/[0.10]
                      bg-transparent
                      px-4
                      text-[12px]
                      text-midnight_text
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray/50
                      hover:border-black/20
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                      dark:border-white/[0.10]
                      dark:text-white
                      dark:placeholder:text-white/30
                      dark:hover:border-white/20
                    "
                  />

                </div>


                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-midnight_text dark:text-white"
                  >
                    Téléphone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+216 ..."
                    className="
                      h-12
                      w-full
                      border
                      border-black/[0.10]
                      bg-transparent
                      px-4
                      text-[12px]
                      text-midnight_text
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray/50
                      hover:border-black/20
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                      dark:border-white/[0.10]
                      dark:text-white
                      dark:placeholder:text-white/30
                      dark:hover:border-white/20
                    "
                  />

                </div>

              </div>


              {/* Projet */}

              <div>

                <label
                  htmlFor="project"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-midnight_text dark:text-white"
                >
                  Type de projet
                </label>

                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  className="
                    h-12
                    w-full
                    border
                    border-black/[0.10]
                    bg-white
                    px-4
                    text-[12px]
                    text-midnight_text
                    outline-none
                    transition-all
                    duration-300
                    hover:border-black/20
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/10
                    dark:border-white/[0.10]
                    dark:bg-darkmode
                    dark:text-white
                    dark:hover:border-white/20
                  "
                >

                  <option value="" disabled>
                    Sélectionnez votre besoin
                  </option>

                  <option value="on-grid">
                    Photovoltaïque On-Grid
                  </option>

                  <option value="off-grid">
                    Photovoltaïque Off-Grid
                  </option>

                  <option value="pompage">
                    Pompage solaire
                  </option>

                  <option value="maintenance">
                    Maintenance / Optimisation
                  </option>

                  <option value="other">
                    Autre demande
                  </option>

                </select>

              </div>


              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-midnight_text dark:text-white"
                >
                  Votre message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="
                    w-full
                    resize-none
                    border
                    border-black/[0.10]
                    bg-transparent
                    px-4
                    py-3
                    text-[12px]
                    leading-6
                    text-midnight_text
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-gray/50
                    hover:border-black/20
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/10
                    dark:border-white/[0.10]
                    dark:text-white
                    dark:placeholder:text-white/30
                    dark:hover:border-white/20
                  "
                />

              </div>


              {/* =================================================
                  PREMIUM BUTTON
              ================================================== */}

              <div className="pt-2">

                <button
                  type="submit"
                  className="
                    group
                    relative
                    inline-flex
                    h-[52px]
                    items-center
                    overflow-hidden
                    bg-primary
                    pl-7
                    pr-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-midnight_text
                    hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                    dark:hover:bg-white
                    dark:hover:text-midnight_text
                  "
                >

                  <span className="relative z-10">
                    Envoyer ma demande
                  </span>

                  <span
                    className="
                      ml-6
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-white/25
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:border-white/50
                      dark:group-hover:border-midnight_text/20
                    "
                  >
                    <Icon
                      icon="solar:arrow-right-linear"
                      width={16}
                    />
                  </span>

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactForm