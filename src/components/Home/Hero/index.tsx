'use client'

import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 dark:bg-darklight md:pt-40">

      {/* Subtle background detail */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/[0.025]
          blur-3xl
        "
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">

        <div className="grid grid-cols-12 items-center gap-10 lg:gap-16">

          {/* =====================================================
              LEFT — CONTENT
          ====================================================== */}
          <div
            className="col-span-12 md:col-span-6"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1000"
          >

            {/* Small heading */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-primary" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-midnight_text
                  dark:text-white/50
                "
              >
                Expertise acquise depuis 2016
              </span>

            </div>

            {/* Main title */}
            <h1
              className="
                max-w-[620px]
                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-midnight_text
                dark:text-white
                sm:text-5xl
                lg:text-[54px]
              "
            >
              Construire l’avenir avec l’énergie et la technologie
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[520px]
                text-[17px]
                font-medium
                leading-8
                text-grey
                dark:text-white/65
              "
            >
              Nous mettons notre savoir-faire au service de l’énergie,
              de l’industrie et de la sécurité.
            </p>

            {/* Contact */}
            <div className="mt-10 flex items-center gap-4">

              {/* Profiles */}
              <div className="flex items-center">

                <Image
                  src={getImgPath('/images/hero/hero-profile-1.jpg')}
                  alt="Expert Delta 2S"
                  width={42}
                  height={42}
                  quality={100}
                  className="
                    h-[42px]!
                    w-[42px]!
                    rounded-full
                    border-2
                    border-white
                    object-cover
                    dark:border-darklight
                  "
                />

                <Image
                  src={getImgPath('/images/hero/hero-profile-2.jpg')}
                  alt="Expert Delta 2S"
                  width={42}
                  height={42}
                  quality={100}
                  className="
                    -ml-3
                    h-[42px]!
                    w-[42px]!
                    rounded-full
                    border-2
                    border-white
                    object-cover
                    dark:border-darklight
                  "
                />

                <Image
                  src={getImgPath('/images/hero/hero-profile-3.jpg')}
                  alt="Expert Delta 2S"
                  width={42}
                  height={42}
                  quality={100}
                  className="
                    -ml-3
                    h-[42px]!
                    w-[42px]!
                    rounded-full
                    border-2
                    border-white
                    object-cover
                    dark:border-darklight
                  "
                />

              </div>

              {/* Contact text */}
              <div className="border-l border-black/10 pl-4 dark:border-white/10">

                <p className="max-w-[250px] text-sm leading-6 text-grey dark:text-white/50">
                  Besoin d’aide ?{' '}
                  <Link
                    href="/contact"
                    className="
                      font-semibold
                      text-primary
                      transition-colors
                      hover:text-blue-700
                    "
                  >
                    Contactez nos experts
                  </Link>{' '}
                  et parlez-nous de votre projet.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT — IMAGE
          ====================================================== */}
          <div
            className="col-span-12 md:col-span-6"
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="1000"
          >

            <div className="relative mx-auto max-w-[560px]">

              {/* =================================================
                  TECHNICAL FRAME
              ================================================== */}

              <div
                className="
                  absolute
                  -right-3
                  -top-3
                  h-full
                  w-full
                  border
                  border-primary/15
                "
              />

              {/* Small technical line */}
              <div
                className="
                  absolute
                  -right-3
                  top-8
                  z-20
                  h-px
                  w-16
                  bg-primary
                "
              />

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div
                className="
                  group
                  relative
                  z-10
                  overflow-hidden
                  bg-midnight_text
                  shadow-[0_30px_70px_rgba(15,23,42,0.16)]
                "
              >

                <Image
                  src={getImgPath('/images/hero/h3.jpg')}
                  alt="Delta 2S - Énergie, industrie et sécurité"
                  width={700}
                  height={550}
                  quality={100}
                  priority
                  className="
                    h-[390px]
                    w-full
                    object-cover
                    transition-transform
                    duration-[1600ms]
                    ease-out
                    group-hover:scale-[1.04]
                    md:h-[500px]
                  "
                />

                {/* Image gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/55
                    via-black/5
                    to-transparent
                  "
                />

                {/* =================================================
                    DELTA 2S SIGNATURE
                ================================================== */}

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    flex
                    items-center
                    gap-3
                  "
                >

                  <span className="h-2 w-2 rounded-full bg-primary" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white
                    "
                  >
                    Delta 2S
                  </span>

                </div>

                {/* =================================================
                    IMAGE BOTTOM
                ================================================== */}

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">

                  <div className="flex items-center gap-3">

                    <span className="h-px w-10 bg-primary" />

                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-white/75
                      "
                    >
                      Solutions techniques
                    </span>

                  </div>

                </div>

                {/* =================================================
                    CORNER
                ================================================== */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-20
                    w-20
                    border-r
                    border-t
                    border-primary/80
                  "
                />

              </div>


              {/* =================================================
                  BOTTOM TECHNICAL MARK
              ================================================== */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-5
                  z-20
                  hidden
                  h-20
                  w-20
                  border-b
                  border-l
                  border-primary/50
                  sm:block
                "
              />

              {/* Technical dots */}
              <div
                className="
                  absolute
                  -bottom-6
                  right-8
                  z-20
                  flex
                  gap-1.5
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <div className="container mx-auto mt-16 max-w-6xl px-4 md:mt-20">

        <div
          className="
            flex
            items-center
            gap-4
            border-t
            border-black/[0.07]
            pt-5
            dark:border-white/[0.08]
          "
        >

          <span className="h-1.5 w-1.5 rounded-full bg-primary" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-grey
              dark:text-white/35
            "
          >
            Industrie · Énergie · Technologie
          </span>

        </div>

      </div>

    </section>
  )
}

export default Hero