'use client'

import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { getImgPath } from '@/utils/image'

// ============================================================
// SERVICES DELTA 2S — SÉCURITÉ ÉLECTRONIQUE
// ============================================================

const services = [
  {
    number: '01',
    title: 'Vidéosurveillance',
    label: 'SURVEILLANCE',
    description:
      'Des systèmes de vidéosurveillance professionnels pour surveiller vos espaces, sécuriser vos installations et garder le contrôle sur votre environnement.',
    items: [
      'Vidéosurveillance IP et HD',
      'Caméras intérieures et extérieures',
      'Enregistrement et stockage vidéo',
      'Visualisation à distance',
    ],
    icon: 'solar:videocamera-record-bold-duotone',
    image: '/images/services/security.jpg',
  },

  {
    number: '02',
    title: 'Alarme & détection intrusion',
    label: 'PROTECTION',
    description:
      'Des solutions de détection conçues pour identifier rapidement les tentatives d’intrusion et renforcer la protection de vos bâtiments.',
    items: [
      'Systèmes d’alarme',
      'Détecteurs de mouvement',
      'Détection d’ouverture',
      'Systèmes radio multifonctions EGON',
    ],
    icon: 'solar:shield-warning-bold-duotone',
    image: '/images/services/alarm.jpg',
  },

  {
    number: '03',
    title: 'Contrôle d’accès',
    label: 'ACCÈS SÉCURISÉ',
    description:
      'Maîtrisez les accès à vos bâtiments, bureaux et locaux techniques grâce à des solutions adaptées à votre organisation.',
    items: [
      'Contrôle d’accès électronique',
      'Identification des utilisateurs',
      'Gestion des autorisations',
      'Sécurisation des zones sensibles',
    ],
    icon: 'solar:lock-keyhole-bold-duotone',
    image: '/images/services/access-control.webp',
  },

  {
    number: '04',
    title: 'Détection incendie',
    label: 'SÉCURITÉ INCENDIE',
    description:
      'Des équipements dédiés à la prévention et à la détection des risques d’incendie pour protéger les personnes, les biens et les installations.',
    items: [
      'Détection incendie',
      'Équipements de sécurité incendie',
      'Vente d’extincteurs',
      'Entretien et recharge des extincteurs',
    ],
    icon: 'solar:fire-bold-duotone',
    image: '/images/services/fire-security.jpg',
  },

  {
    number: '05',
    title: 'Interphonie IP',
    label: 'COMMUNICATION',
    description:
      'Des solutions d’interphonie IP associant communication, identification et surveillance pour sécuriser les entrées et les accès.',
    items: [
      'Interphonie IP',
      'Communication audio et vidéo',
      'Caméra de surveillance intégrée',
      'Gestion des entrées et sorties',
    ],
    icon: 'solar:videocamera-add-bold-duotone',
    image: '/images/services/intercom.jpg',
  },

  {
    number: '06',
    title: 'Portails & automatismes',
    label: 'AUTOMATISATION',
    description:
      'Des solutions de motorisation et d’automatisation pour contrôler les ouvertures et améliorer la sécurité et le confort des accès.',
    items: [
      'Motorisation de portails',
      'Portails télescopiques',
      'Automatisation des accès',
      'Solutions adaptées aux espaces réduits',
    ],
    icon: 'solar:garage-bold-duotone',
    image: '/images/services/automation.jpg',
  },
]

// ============================================================
// COMPONENT
// ============================================================

const ServiceDetails = () => {
  return (
    <section
      id="services-details"
      className="bg-section dark:bg-darklight"
    >
      <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-20">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="mb-12 max-w-3xl lg:mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-success" />

            <span className="text-sm font-medium text-midnight_text dark:text-white/50">
              Nos solutions
            </span>

          </div>

          <h2
            className="
              pt-7
              pb-6
              text-3xl
              font-bold
              leading-tight
              text-midnight_text
              dark:text-white
              sm:text-4xl
            "
          >
            Une sécurité pensée pour
            <br className="hidden sm:block" />

            <span className="text-primary">
              {' '}chaque environnement.
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              text-base
              leading-7
              text-gray
              dark:text-white/60
            "
          >
            De la surveillance des espaces au contrôle des accès, Delta 2S
            propose des solutions de sécurité électronique conçues pour
            répondre aux besoins des environnements résidentiels,
            commerciaux, administratifs et industriels.
          </p>

        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <article
              key={service.number}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="700"
              className="
                group
                relative
                min-h-[470px]
                overflow-hidden
                border-b
                border-black/[0.07]
                bg-transparent
                p-7
                transition-all
                duration-500
                hover:bg-white
                md:border-r
                lg:p-8
                dark:border-white/[0.07]
                dark:hover:bg-darkmode
              "
            >

              {/* =================================================
                  TOP
              ================================================== */}

              <div className="relative z-20 mb-9 flex items-center justify-between">

                <span
                  className="
                    text-xs
                    font-semibold
                    tracking-[0.18em]
                    text-gray
                    transition-colors
                    duration-300
                    group-hover:text-primary
                    dark:text-white/40
                  "
                >
                  {service.number}
                </span>

                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    text-gray
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:border-primary
                    group-hover:bg-primary
                    group-hover:text-white
                    dark:border-white/10
                    dark:text-white/50
                  "
                >
                  <Icon
                    icon={service.icon}
                    width={22}
                    height={22}
                  />
                </span>

              </div>

              {/* =================================================
                  LARGE BACKGROUND NUMBER
              ================================================== */}

              <span
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-12
                  select-none
                  text-[100px]
                  font-bold
                  leading-none
                  text-midnight_text/[0.025]
                  transition-all
                  duration-700
                  group-hover:translate-x-2
                  group-hover:text-primary/[0.07]
                  dark:text-white/[0.025]
                "
              >
                {service.number}
              </span>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-20">

                <p
                  className="
                    mb-4
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-gray
                    transition-colors
                    duration-300
                    group-hover:text-primary
                    dark:text-white/40
                  "
                >
                  {service.label}
                </p>

                <h3
                  className="
                    max-w-[270px]
                    text-2xl
                    font-bold
                    leading-tight
                    text-midnight_text
                    dark:text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[310px]
                    text-sm
                    leading-6
                    text-gray
                    dark:text-white/50
                  "
                >
                  {service.description}
                </p>

              </div>

              {/* =================================================
                  SERVICE ITEMS
              ================================================== */}

              <div className="relative z-20 mt-7 space-y-3">

                {service.items.map((item, itemIndex) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-2.5
                      text-xs
                      leading-5
                      text-gray
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-midnight_text
                      dark:text-white/40
                      dark:group-hover:text-white/70
                    "
                    style={{
                      transitionDelay: `${itemIndex * 40}ms`,
                    }}
                  >

                    <span
                      className="
                        mt-[6px]
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-success
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:bg-primary
                      "
                    />

                    <span>
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* =================================================
                  PHOTO
              ================================================== */}

              <div
                className="
                  relative
                  mt-6
                  h-[110px]
                  w-full
                  overflow-hidden
                  rounded-xl
                  opacity-0
                  translate-y-3
                  scale-[0.97]
                  transition-all
                  duration-500
                  ease-out
                  group-hover:translate-y-0
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >

                <Image
                  src={getImgPath(service.image)}
                  alt={`Delta 2S - ${service.title}`}
                  fill
                  sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    300px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                  "
                />

                <span
                  className="
                    absolute
                    bottom-3
                    left-3
                    text-[9px]
                    font-semibold
                    tracking-[0.15em]
                    text-white
                  "
                >
                  {service.label}
                </span>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}

export default ServiceDetails