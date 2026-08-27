import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import ContactForm from '@/components/Contact/Form'
import Location from '@/components/Contact/OfficeLocation'

export const metadata: Metadata = {
  title: 'Contact | Delta 2S',
  description:
    'Contactez Delta 2S pour vos projets en photovoltaïque, automatisme, sécurité électronique et électricité industrielle.',

  icons: {
    icon: '/favicon.ico',
  },
  }
const ContactPage = () => {
  return (
    <main className="overflow-hidden">

      {/* =====================================================
          HERO — DELTA 2S
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          pt-24
          pb-16
          dark:bg-darkmode
          md:pt-32
          md:pb-24
        "
      >

        {/* =================================================
            TECHNICAL BACKGROUND
        ================================================== */}

        {/* Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            dark:opacity-[0.04]
            [background-image:linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)]
            [background-size:70px_70px]
            dark:[background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          "
        />

        {/* Ligne technique gauche */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-1/2
            hidden
            h-px
            w-[18%]
            bg-primary/30
            lg:block
          "
        />

        {/* Ligne technique droite */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-[38%]
            hidden
            h-px
            w-[12%]
            bg-primary/20
            lg:block
          "
        />

        {/* Grand cercle */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-black/[0.06]
            dark:border-white/[0.06]
          "
        />

        {/* Petit cercle */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-primary/[0.12]
          "
        />

        {/* Carré technique */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-12
            left-[7%]
            hidden
            h-16
            w-16
            border
            border-black/[0.07]
            dark:border-white/[0.07]
            lg:block
          "
        >
          <span className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-primary" />
        </div>

        {/* =================================================
            CONTENT
        ================================================== */}

        <div className="container relative mx-auto max-w-7xl px-4">

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[1fr_0.65fr]
            "
          >

            {/* =================================================
                LEFT — CONTENT
            ================================================== */}

            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="relative"
            >

              {/* Eyebrow */}

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-primary" />

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-primary
                  "
                >
                  Delta 2S · Contact
                </span>

              </div>

              {/* Title */}

              <h1
                className="
                  max-w-3xl
                  text-[36px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-midnight_text
                  dark:text-white
                  sm:text-[42px]
                  md:text-[50px]
                  lg:text-[56px]
                "
              >
                Parlons de votre
                <br />

                <span className="text-primary">
                  prochain projet.
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-xl
                  text-[13px]
                  leading-7
                  text-gray
                  dark:text-white/55
                  md:text-[14px]
                "
              >
                Une question, un besoin ou un projet à étudier ?
                Notre équipe vous accompagne pour identifier la solution
                technique la plus adaptée à vos objectifs.
              </p>

              {/* CTA */}

              <div className="mt-7 flex flex-wrap items-center gap-4">

                <Link
                  href="#contact-form"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    bg-primary
                    px-6
                    py-3.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                  "
                >
                  Nous contacter

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      border
                      border-white/30
                      transition-all
                      duration-300
                      group-hover:border-white
                    "
                  >
                    <Icon
                      icon="solar:arrow-down-linear"
                      width={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-y-0.5
                      "
                    />
                  </span>
                </Link>

                <Link
                  href="/"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-midnight_text
                    transition-colors
                    hover:text-primary
                    dark:text-white
                  "
                >
                  Découvrir Delta 2S

                  <Icon
                    icon="solar:arrow-right-linear"
                    width={15}
                  />
                </Link>

              </div>

            </div>

            {/* =================================================
                RIGHT — DELTA 2S SIGNATURE
            ================================================== */}

            <div
              data-aos="fade-left"
              data-aos-delay="150"
              className="relative hidden lg:block"
            >

              <div
                className="
                  relative
                  ml-auto
                  max-w-[340px]
                  border
                  border-black/[0.07]
                  bg-white/70
                  p-8
                  backdrop-blur-sm
                  dark:border-white/[0.08]
                  dark:bg-white/[0.02]
                "
              >

                {/* Corner */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-12
                    w-12
                    border-r
                    border-t
                    border-primary/40
                  "
                />

                {/* Header */}

                <div className="mb-8 flex items-center justify-between">

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-primary
                    "
                  >
                    Delta 2S
                  </span>

                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[0.15em]
                      text-black/20
                      dark:text-white/20
                    "
                  >
                    02
                  </span>

                </div>

                {/* Technical symbol */}

                <div
                  className="
                    relative
                    flex
                    h-28
                    items-center
                    justify-center
                    border
                    border-black/[0.06]
                    dark:border-white/[0.07]
                  "
                >

                  {/* Vertical line */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      h-full
                      w-px
                      bg-primary/20
                    "
                  />

                  {/* Horizontal line */}

                  <div
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-px
                      w-full
                      bg-primary/20
                    "
                  />

                  {/* Center */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      border
                      border-primary
                      bg-white
                      text-primary
                      dark:bg-darkmode
                    "
                  >
                    <Icon
                      icon="solar:dialog-2-linear"
                      width={25}
                    />
                  </div>

                </div>

                {/* Text */}

                <div className="mt-7">

                  <h2
                    className="
                      text-[20px]
                      font-bold
                      tracking-[-0.02em]
                      text-midnight_text
                      dark:text-white
                    "
                  >
                    Une équipe à votre écoute.
                  </h2>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      leading-6
                      text-gray
                      dark:text-white/45
                    "
                  >
                    Échangeons sur vos besoins en énergie,
                    automatisme, sécurité ou électricité industrielle.
                  </p>

                </div>

                {/* Bottom */}

                <div className="mt-7 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-gray
                      dark:text-white/35
                    "
                  >
                    Réponse personnalisée
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <div
            className="
              mt-14
              border-t
              border-black/[0.07]
              pt-6
              dark:border-white/[0.08]
              md:mt-16
            "
            data-aos="fade-up"
            data-aos-delay="250"
          >

            <div className="grid gap-6 sm:grid-cols-3">

              {/* PHONE */}

              <div className="flex items-center gap-4">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-primary/20
                    text-primary
                  "
                >
                  <Icon
                    icon="solar:phone-linear"
                    width={17}
                  />
                </span>

                <div>

                  <span
                    className="
                      block
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-gray
                      dark:text-white/35
                    "
                  >
                    Téléphone
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[11px]
                      font-semibold
                      text-midnight_text
                      dark:text-white
                    "
                  >
                    +216 76 203 760
                  </span>

                </div>

              </div>

              {/* EMAIL */}

              <div className="flex items-center gap-4">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-primary/20
                    text-primary
                  "
                >
                  <Icon
                    icon="solar:letter-linear"
                    width={17}
                  />
                </span>

                <div>

                  <span
                    className="
                      block
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-gray
                      dark:text-white/35
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[11px]
                      font-semibold
                      text-midnight_text
                      dark:text-white
                    "
                  >
                    contact@delta2sgroup.com
                  </span>

                </div>

              </div>

              {/* LOCATION */}

              <div className="flex items-center gap-4">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-primary/20
                    text-primary
                  "
                >
                  <Icon
                    icon="solar:map-point-linear"
                    width={17}
                  />
                </span>

                <div>

                  <span
                    className="
                      block
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-gray
                      dark:text-white/35
                    "
                  >
                    Localisation
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[11px]
                      font-semibold
                      text-midnight_text
                      dark:text-white
                    "
                  >
                    Gafsa · Tunisie
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}

      <section id="contact-form">
        <ContactForm />
      </section>

      {/* =====================================================
          LOCATION
      ====================================================== */}

      <Location />

    </main>
  )
}

export default ContactPage