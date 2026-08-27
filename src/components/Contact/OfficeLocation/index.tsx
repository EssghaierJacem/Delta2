'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Location = () => {
  return (
    <section className="relative overflow-hidden bg-midnight_text py-20 md:py-28">

      {/* =====================================================
          TECHNICAL BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[130px]
        "
      />

      {/* Technical lines */}

      <div className="absolute left-0 top-0 h-px w-[35%] bg-primary/70" />

      <div className="absolute bottom-0 right-0 h-px w-[25%] bg-primary/40" />


      <div className="container relative mx-auto max-w-6xl px-4">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="mb-12 max-w-2xl"
          data-aos="fade-up"
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-primary" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
              Notre implantation
            </span>

          </div>


          <h2
            className="
              mt-5
              text-[34px]
              font-bold
              leading-[1.05]
              tracking-[-0.025em]
              text-white
              md:text-[46px]
            "
          >
            Retrouvez-nous à

            <br />

            <span className="text-primary">
              Gafsa, en Tunisie.
            </span>
          </h2>


          <p className="mt-5 max-w-xl text-[12px] leading-7 text-white/45">
            Notre équipe Delta 2S vous accueille pour échanger autour de
            vos projets énergétiques et de vos besoins techniques.
          </p>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">


          {/* =================================================
              CONTACT CARD
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-white/[0.10]
              bg-white/[0.035]
              p-7
              backdrop-blur-sm
              md:p-9
            "
            data-aos="fade-right"
          >

            {/* Corner */}

            <div className="absolute right-0 top-0 h-16 w-16 border-r border-t border-primary/30" />


            {/* Location label */}

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  border
                  border-primary/25
                  bg-primary/10
                  text-primary
                "
              >
                <Icon
                  icon="solar:map-point-linear"
                  width={22}
                />
              </div>

              <div>

                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Bureau principal
                </span>

                <span className="mt-1 block text-[15px] font-semibold text-white">
                  Gafsa · Tunisie
                </span>

              </div>

            </div>


            {/* Address */}

            <div className="mt-10">

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                Adresse
              </span>

              <p className="mt-3 max-w-sm text-[15px] leading-7 text-white/75">
                Avenue Mohamed V,
                <br />
                Immeuble Lejri, 2ᵉ étage,
                <br />
                Bureau n° 4,
                <br />
                2100 Gafsa, Tunisie.
              </p>

            </div>


            {/* Divider */}

            <div className="my-8 h-px w-full bg-white/[0.08]" />


            {/* Phone */}

            <div className="flex items-center gap-4">

              <div className="flex h-9 w-9 items-center justify-center border border-white/10 text-primary">
                <Icon
                  icon="solar:phone-linear"
                  width={17}
                />
              </div>

              <div>

                <span className="block text-[8px] uppercase tracking-[0.16em] text-white/30">
                  Téléphone
                </span>

                <Link
                  href="tel:+21676203760"
                  className="mt-1 block text-[13px] font-medium text-white transition-colors hover:text-primary"
                >
                  +216 76 203 760
                </Link>

              </div>

            </div>


            {/* Email */}

            <div className="mt-5 flex items-center gap-4">

              <div className="flex h-9 w-9 items-center justify-center border border-white/10 text-primary">
                <Icon
                  icon="solar:letter-linear"
                  width={17}
                />
              </div>

              <div>

                <span className="block text-[8px] uppercase tracking-[0.16em] text-white/30">
                  Email
                </span>

                <Link
                  href="mailto:contact@delta2sgroup.com"
                  className="mt-1 block text-[13px] font-medium text-white transition-colors hover:text-primary"
                >
                  contact@delta2sgroup.com
                </Link>

              </div>

            </div>


            {/* Button */}

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Avenue+Mohamed+V+Gafsa+Tunisie"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-9
                inline-flex
                h-[48px]
                items-center
                gap-5
                bg-primary
                pl-6
                pr-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-midnight_text
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
              "
            >

              <span>
                Voir l'itinéraire
              </span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-white/25
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:border-midnight_text/20
                "
              >
                <Icon
                  icon="solar:arrow-right-up-linear"
                  width={15}
                />
              </span>

            </Link>

          </div>


          {/* =================================================
              MAP
          ================================================== */}

          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              border
              border-white/[0.10]
              bg-white/[0.03]
            "
            data-aos="fade-left"
          >

            {/* Map */}

            <iframe
              src="https://www.google.com/maps?q=Avenue%20Mohamed%20V%2C%20Gafsa%2C%20Tunisie&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
            />


            {/* Map overlay */}

            <div className="pointer-events-none absolute inset-0 border-[8px] border-midnight_text/20" />


            {/* Location marker */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="relative">

                <span className="absolute -inset-4 animate-ping rounded-full bg-primary/20" />

                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    text-white
                    shadow-[0_0_30px_rgba(0,0,0,0.25)]
                  "
                >
                  <Icon
                    icon="solar:map-point-bold"
                    width={23}
                  />
                </div>

              </div>

            </div>


            {/* Map label */}

            <div
              className="
                absolute
                bottom-5
                left-5
                border
                border-white/10
                bg-midnight_text/90
                px-5
                py-3
                backdrop-blur-md
              "
            >

              <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-primary">
                Delta 2S
              </span>

              <span className="mt-1 block text-[11px] text-white/80">
                Gafsa · Tunisie
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM TECHNICAL LINE
        ====================================================== */}

        <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">

          <span className="text-[8px] font-bold tracking-[0.2em] text-white/20">
            DELTA 2S
          </span>

          <div className="hidden items-center gap-3 sm:flex">

            <span className="text-[8px] tracking-[0.15em] text-white/20">
              ENERGY
            </span>

            <span className="h-px w-8 bg-primary/30" />

            <span className="text-[8px] tracking-[0.15em] text-white/20">
              ENGINEERING
            </span>

            <span className="h-px w-8 bg-primary/30" />

            <span className="text-[8px] tracking-[0.15em] text-white/20">
              SOLUTIONS
            </span>

          </div>

          <span className="text-[8px] text-white/20">
            © Delta 2S
          </span>

        </div>

      </div>

    </section>
  )
}

export default Location