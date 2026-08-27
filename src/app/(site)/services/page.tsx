import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import { getImgPath } from '@/utils/image'

import ServiceDetails from '@/components/Home/Services/ServiceDetails'
import ServiceProcess from '@/components/Home/Services/ServiceProcess'
import ServiceCTA from '@/components/Home/Services/ServiceCTA'

export const metadata: Metadata = {
  title: 'Nos services | Delta 2S',
  description:
    'Delta 2S accompagne les particuliers et les professionnels dans leurs projets de sécurité électronique, de protection incendie et d’automatisation.',
}

const ServicesPage = () => {
  return (
    <>
      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-section
          dark:bg-darklight
          pt-28
          md:pt-44
        "
      >
        <div className="container mx-auto max-w-6xl px-4">

          <div className="grid lg:grid-cols-2">

            {/* =================================================
                IMAGE
            ================================================== */}

            <div
              className="
                relative
                min-h-[340px]
                overflow-hidden
                lg:min-h-[480px]
              "
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <Image
                src={getImgPath('/images/services/delta-services.png')}
                alt="Delta 2S - Solutions de sécurité électronique"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-[1400ms]
                  hover:scale-[1.04]
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                "
              />

              {/* Image label */}

              <div className="absolute bottom-6 left-6">

                <div className="flex items-center gap-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-success" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white
                    "
                  >
                    Sécurité & technologie
                  </span>

                </div>

              </div>
            </div>

            {/* =================================================
                CONTENT
            ================================================== */}

            <div
              className="
                relative
                flex
                flex-col
                justify-between
                bg-white
                dark:bg-darkmode
              "
              data-aos="fade-left"
              data-aos-delay="150"
              data-aos-duration="900"
            >

              {/* Accent */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-24
                  w-1
                  bg-primary
                "
              />

              <div className="px-7 py-9 sm:px-10 lg:px-12 lg:py-12">

                {/* Label */}

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-success" />

                  <span
                    className="
                      text-xs
                      font-medium
                      text-midnight_text
                      dark:text-white/45
                    "
                  >
                    Nos services
                  </span>

                </div>

                {/* Title */}

                <h1
                  className="
                    mt-8
                    max-w-xl
                    text-3xl
                    font-bold
                    leading-[1.15]
                    text-midnight_text
                    dark:text-white
                    sm:text-4xl
                  "
                >
                  La sécurité,
                  <br />

                  <span className="text-primary">
                    pensée pour vos espaces.
                  </span>
                </h1>

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-md
                    text-sm
                    leading-7
                    text-gray
                    dark:text-white/55
                  "
                >
                  Delta 2S met son expertise technique au service de vos
                  projets pour concevoir et intégrer des solutions fiables,
                  évolutives et adaptées à chaque environnement.
                </p>

                {/* CTA */}

                <Link
                  href="#services-details"
                  className="
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    text-xs
                    font-semibold
                    text-primary
                  "
                >
                  Découvrir nos solutions

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-primary/20
                      transition-all
                      duration-300
                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon
                      icon="solar:arrow-right-linear"
                      width={16}
                      height={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>

                </Link>

              </div>

              {/* =================================================
                  BOTTOM INFORMATION
              ================================================== */}

              <div
                className="
                  mx-7
                  border-t
                  border-black/[0.08]
                  py-5
                  sm:mx-10
                  lg:mx-12
                  dark:border-white/[0.08]
                "
              >

                <div className="grid grid-cols-3">

                  {/* Expertise */}

                  <div
                    className="
                      border-r
                      border-black/[0.08]
                      pr-4
                      dark:border-white/[0.08]
                    "
                  >

                    <span
                      className="
                        block
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-gray
                        dark:text-white/35
                      "
                    >
                      Expertise
                    </span>

                    <strong
                      className="
                        mt-1
                        block
                        text-xs
                        font-semibold
                        text-midnight_text
                        dark:text-white/70
                      "
                    >
                      Sécurité
                    </strong>

                  </div>

                  {/* Solutions */}

                  <div
                    className="
                      border-r
                      border-black/[0.08]
                      px-4
                      dark:border-white/[0.08]
                    "
                  >

                    <span
                      className="
                        block
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-gray
                        dark:text-white/35
                      "
                    >
                      Solutions
                    </span>

                    <strong
                      className="
                        mt-1
                        block
                        text-xs
                        font-semibold
                        text-midnight_text
                        dark:text-white/70
                      "
                    >
                      Sur mesure
                    </strong>

                  </div>

                  {/* Accompagnement */}

                  <div className="pl-4">

                    <span
                      className="
                        block
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-gray
                        dark:text-white/35
                      "
                    >
                      Accompagnement
                    </span>

                    <strong
                      className="
                        mt-1
                        block
                        text-xs
                        font-semibold
                        text-midnight_text
                        dark:text-white/70
                      "
                    >
                      De A à Z
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <ServiceDetails />

      {/* =====================================================
          NOTRE MÉTHODE
      ====================================================== */}

      <ServiceProcess />

      {/* =====================================================
          CONTACT / CTA
      ====================================================== */}

      <ServiceCTA />
    </>
  )
}

export default ServicesPage