'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'

const contactItems = [
  {
    number: '01',
    label: 'Téléphone',
    value: '+216 76 203 760',
    description: 'Notre équipe est à votre écoute pour répondre à vos besoins.',
    href: 'tel:+21676203760',
    icon: 'solar:phone-linear',
    action: 'Nous appeler',
  },
  {
    number: '02',
    label: 'Email',
    value: 'contact@delta2sgroup.com',
    description: 'Échangez avec nous au sujet de votre projet ou de votre demande.',
    href: 'mailto:contact@delta2sgroup.com',
    icon: 'solar:letter-linear',
    action: 'Nous écrire',
  },
  {
    number: '03',
    label: 'Adresse',
    value: 'Avenue Mohamed V',
    description:
      'Immeuble Lejri, 2ᵉ étage, Bureau n° 4, 2100 Gafsa, Tunisie.',
    href: '#location',
    icon: 'solar:map-point-linear',
    action: 'Voir la localisation',
  },
]

const ContactInfo = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-darkmode md:py-24">

      {/* =====================================================
          DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 hidden h-[320px] w-[320px] opacity-[0.035] lg:block">
        <div
          className="
            h-full
            w-full
            [background-image:linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)]
            [background-size:45px_45px]
          "
        />
      </div>

      <div className="absolute left-0 top-0 h-px w-[25%] bg-primary/50" />

      <div className="container relative mx-auto max-w-7xl px-4">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="mb-12 max-w-2xl"
          data-aos="fade-up"
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-9 bg-primary" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary">
              Contact · Delta 2S
            </span>

          </div>

          <h2
            className="
              mt-5
              text-[34px]
              font-bold
              leading-[1.05]
              tracking-[-0.025em]
              text-midnight_text
              dark:text-white
              sm:text-[40px]
              md:text-[48px]
            "
          >
            Prenez contact
            <br />

            <span className="text-primary">
              avec notre entreprise.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-[13px] leading-7 text-gray dark:text-white/45">
            Une question, un projet ou un besoin d&apos;accompagnement ?
            Notre équipe vous accompagne pour étudier votre demande et vous
            proposer une solution adaptée.
          </p>

        </div>


        {/* =====================================================
            CONTACT CARDS
        ====================================================== */}

        <div className="grid gap-4 md:grid-cols-3">

          {contactItems.map((item, index) => (

            <article
              key={item.number}
              className="
                group
                relative
                overflow-hidden
                border
                border-black/[0.07]
                bg-section
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-white
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]
                dark:border-white/[0.08]
                dark:bg-darklight
                dark:hover:bg-darkmode
              "
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >

              {/* Technical corner */}

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-12
                  w-12
                  border-r
                  border-t
                  border-primary/20
                  transition-all
                  duration-500
                  group-hover:h-20
                  group-hover:w-20
                "
              />

              {/* Number */}

              <span
                className="
                  absolute
                  right-6
                  top-6
                  text-[10px]
                  font-bold
                  tracking-[0.15em]
                  text-black/10
                  dark:text-white/10
                "
              >
                {item.number}
              </span>


              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  border
                  border-primary/20
                  text-primary
                  transition-all
                  duration-500
                  group-hover:border-primary
                  group-hover:bg-primary
                  group-hover:text-white
                "
              >
                <Icon
                  icon={item.icon}
                  width={23}
                />
              </div>


              {/* Label */}

              <span
                className="
                  mt-7
                  block
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-primary
                "
              >
                {item.label}
              </span>


              {/* Value */}

              <h3
                className="
                  mt-3
                  text-[18px]
                  font-bold
                  leading-snug
                  tracking-[-0.015em]
                  text-midnight_text
                  dark:text-white
                "
              >
                {item.value}
              </h3>


              {/* Description */}

              <p
                className="
                  mt-3
                  min-h-[48px]
                  text-[11px]
                  leading-6
                  text-gray
                  dark:text-white/40
                "
              >
                {item.description}
              </p>


              {/* Action */}

              <Link
                href={item.href}
                className="
                  group/link
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  text-midnight_text
                  dark:text-white
                "
              >

                {item.action}

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    border
                    border-primary/20
                    text-primary
                    transition-all
                    duration-300
                    group-hover/link:border-primary
                    group-hover/link:bg-primary
                    group-hover/link:text-white
                  "
                >
                  <Icon
                    icon="solar:arrow-right-linear"
                    width={14}
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5"
                  />
                </span>

              </Link>


              {/* Bottom line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-primary
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

            </article>

          ))}

        </div>


        {/* =====================================================
            LOCATION / MAP
        ====================================================== */}

        <div
          id="location"
          className="mt-16 md:mt-20"
          data-aos="fade-up"
        >

          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-primary" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Notre localisation
                </span>

              </div>

              <h3
                className="
                  mt-4
                  text-[25px]
                  font-bold
                  tracking-[-0.02em]
                  text-midnight_text
                  dark:text-white
                  md:text-[30px]
                "
              >
                Retrouvez-nous à Gafsa.
              </h3>

            </div>

            <div className="flex items-center gap-2 text-[10px] text-gray dark:text-white/40">

              <Icon
                icon="solar:map-point-linear"
                width={16}
                className="text-primary"
              />

              <span>
                2100 Gafsa, Tunisie
              </span>

            </div>

          </div>


          {/* Map */}

          <div
            className="
              relative
              overflow-hidden
              border
              border-black/[0.07]
              bg-section
              dark:border-white/[0.08]
              dark:bg-darklight
            "
          >

            {/* Technical corner */}

            <div className="absolute left-0 top-0 z-10 h-16 w-16 border-l border-t border-primary/40" />

            <div className="absolute bottom-0 right-0 z-10 h-16 w-16 border-b border-r border-primary/40" />

            <iframe
              src="https://www.google.com/maps?q=Avenue%20Mohamed%20V%2C%20Gafsa%2C%20Tunisie&output=embed"
              width="100%"
              height="430"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.15]"
              title="Localisation Delta 2S - Gafsa"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactInfo