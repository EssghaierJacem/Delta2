'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getImgPath } from '@/utils/image'

const strengths = [
  {
    icon: 'solar:settings-linear',
    title: 'Solutions adaptées',
  },
  {
    icon: 'solar:layers-linear',
    title: 'Approche intégrée',
  },
  {
    icon: 'solar:chat-round-linear',
    title: 'Proximité & écoute',
  },
  {
    icon: 'solar:shield-check-linear',
    title: 'Engagement & fiabilité',
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-section
        dark:bg-darklight
      "
    >
      {/* =====================================================
          ÉLÉMENTS GRAPHIQUES DISCRETS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          hidden
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-primary/[0.05]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[100px]
          -top-[100px]
          hidden
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-primary/[0.07]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[40%]
          hidden
          h-px
          w-[10%]
          bg-primary/20
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[68%]
          hidden
          h-px
          w-[8%]
          bg-primary/15
          lg:block
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          container
          relative
          z-10
          mx-auto
          max-w-6xl
          px-4
          pt-20
          pb-12
          lg:pt-28
          lg:pb-14
        "
      >
        <div
          className="
            grid
            items-center
            gap-14
            md:grid-cols-12
            lg:gap-20
          "
        >

          {/* =====================================================
              IMAGE
          ====================================================== */}

          <div
            className="md:col-span-6"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="900"
          >
            <div className="group relative">

              {/* Cadre décalé */}

              <div
                className="
                  absolute
                  -bottom-4
                  -left-4
                  h-full
                  w-full
                  border
                  border-primary/15
                  transition-all
                  duration-700
                  group-hover:-bottom-6
                  group-hover:-left-6
                  group-hover:border-primary/30
                "
              />

              {/* Angle supérieur gauche */}

              <div
                className="
                  absolute
                  -left-2
                  -top-2
                  z-20
                  h-10
                  w-10
                  border-l
                  border-t
                  border-primary/60
                "
              />

              {/* Angle inférieur droit */}

              <div
                className="
                  absolute
                  -bottom-2
                  -right-2
                  z-20
                  h-10
                  w-10
                  border-b
                  border-r
                  border-primary/60
                "
              />

              {/* Image */}

              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  bg-white
                  shadow-[0_25px_70px_rgba(0,0,0,0.10)]
                  dark:bg-darkmode
                "
              >
                <Image
                  src={getImgPath(
                    '/images/testimonial/delta2s-about.jpg'
                  )}
                  alt="Delta 2S - Solutions techniques"
                  width={650}
                  height={550}
                  quality={100}
                  className="
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "
                />

                {/* Signature Delta 2S */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    border-l-2
                    border-primary
                    pl-3
                  "
                >
                  <span
                    className="
                      block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white
                    "
                  >
                    Delta 2S
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-white/65
                    "
                  >
                    Industrie · Énergie · Technologie
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              TEXTE
          ====================================================== */}

          <div
            className="md:col-span-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="900"
          >

            {/* Label */}

            <div
              className="mb-6 flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="700"
            >
              <span className="h-px w-9 bg-primary" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-primary
                "
              >
                Qui sommes-nous ?
              </span>
            </div>

            {/* Titre */}

            <h2
              className="
                max-w-xl
                text-3xl
                font-bold
                leading-[1.15]
                tracking-[-0.03em]
                text-midnight_text
                dark:text-white
                sm:text-4xl
                lg:text-[44px]
              "
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="800"
            >
              Des solutions techniques
              <span className="text-primary">
                {' '}pensées pour vos projets.
              </span>
            </h2>

            {/* Premier paragraphe */}

            <p
              className="
                mt-7
                max-w-xl
                text-[15px]
                font-medium
                leading-7
                text-gray
                dark:text-white/65
              "
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="800"
            >
              Delta 2S accompagne les entreprises dans la conception,
              l’intégration et la mise en œuvre de solutions techniques
              adaptées à leurs enjeux.
            </p>

            {/* Deuxième paragraphe */}

            <p
              className="
                mt-4
                max-w-xl
                text-[14px]
                leading-7
                text-gray
                dark:text-white/50
              "
              data-aos="fade-up"
              data-aos-delay="550"
              data-aos-duration="800"
            >
              Notre approche associe plusieurs expertises complémentaires
              pour répondre aux exigences des environnements industriels,
              énergétiques et professionnels, avec une attention portée
              à la qualité, à la sécurité et à la continuité des installations.
            </p>

            {/* =====================================================
                POINTS FORTS
            ====================================================== */}

            <div
              className="
                mt-9
                grid
                grid-cols-1
                gap-x-8
                gap-y-5
                sm:grid-cols-2
              "
            >
              {strengths.map((item, index) => (
                <div
                  key={item.title}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    border-b
                    border-black/[0.06]
                    pb-4
                    transition-all
                    duration-300
                    hover:translate-x-1
                    dark:border-white/[0.08]
                  "
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                  data-aos-duration="700"
                >
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
                      bg-primary/[0.05]
                      text-primary
                      transition-all
                      duration-300
                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-white
                    "
                  >
                    <Icon
                      icon={item.icon}
                      width={18}
                    />
                  </span>

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-midnight_text
                      dark:text-white/75
                    "
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* =====================================================
                CTA
            ====================================================== */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-5
              "
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="800"
            >
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-primary
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                "
              >
                <span>
                  Découvrir Delta 2S
                </span>

                <Icon
                  icon="solar:arrow-right-linear"
                  width={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <span
                className="
                  text-xs
                  text-gray
                  dark:text-white/40
                "
              >
                Industrie · Énergie · Technologie
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About