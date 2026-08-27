'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import { getImgPath } from '@/utils/image'

// ============================================================
// DATA
// ============================================================

const solutions = [
  {
    number: '01',
    title: 'On-Grid',
    subtitle: 'Photovoltaïque raccordé au réseau',
    description:
      'Produire et consommer votre propre énergie solaire tout en restant raccordé au réseau électrique.',
    image: '/images/energie/on-grid.jpg',
    icon: 'solar:sun-2-linear',
  },
  {
    number: '02',
    title: 'Off-Grid',
    subtitle: 'Autonomie énergétique',
    description:
      'Des solutions photovoltaïques autonomes adaptées aux sites isolés ou aux zones non raccordées au réseau.',
    image: '/images/energie/off-grid.jpg',
    icon: 'solar:battery-charge-linear',
  },
  {
    number: '03',
    title: 'Pompage solaire',
    subtitle: "L'énergie au service de l'agriculture",
    description:
      'Des systèmes de pompage solaire conçus pour répondre aux besoins des exploitations agricoles.',
    image: '/images/energie/pompage-solaire.jpg',
    icon: 'solar:water-sun-linear',
  },
]

const projectSteps = [
  {
    number: '01',
    title: 'Étude',
    eyebrow: 'Analyser · Dimensionner',
    description:
      'Nous étudions votre besoin, les caractéristiques du site et les contraintes techniques afin de définir une solution photovoltaïque adaptée.',
    items: [
      'Analyse du site',
      'Étude de faisabilité',
      'Dimensionnement',
      'Choix des équipements',
    ],
  },
  {
    number: '02',
    title: 'Construction',
    eyebrow: 'Installer · Raccorder',
    description:
      "Nous assurons la réalisation de votre centrale, de l'installation des équipements jusqu'à la mise en service.",
    items: [
      'Préparation du chantier',
      'Installation',
      'Raccordement',
      'Mise en service',
    ],
  },
  {
    number: '03',
    title: 'Maintenance',
    eyebrow: 'Surveiller · Optimiser',
    description:
      'Nous assurons le suivi de votre installation afin de maintenir ses performances et de prévenir les éventuelles anomalies.',
    items: [
      'Maintenance préventive',
      'Maintenance corrective',
      'Diagnostic',
      'Optimisation',
    ],
  },
]

const engagements = [
  {
    number: '01',
    title: 'Qualité',
    icon: 'solar:verified-check-linear',
    description:
      "Une démarche d'amélioration continue pour garantir la qualité et la fiabilité de nos solutions.",
  },
  {
    number: '02',
    title: 'Adaptation',
    icon: 'solar:tuning-square-linear',
    description:
      'Des solutions conçues en fonction des contraintes réelles de chaque site et de chaque projet.',
  },
  {
    number: '03',
    title: 'Réactivité',
    icon: 'solar:headphones-round-linear',
    description:
      'Un accompagnement disponible pour assurer le suivi, le diagnostic et la maintenance de vos installations.',
  },
  {
    number: '04',
    title: 'Performance durable',
    icon: 'solar:leaf-linear',
    description:
      'Des installations pensées pour produire durablement et préserver leurs performances dans le temps.',
  },
]

// ============================================================
// COMPONENT
// ============================================================

const EnergieRenewable = () => {
  return (
    <main className="overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-midnight_text md:min-h-[720px]">

        <Image
          src={getImgPath('/images/energie/energie-hero.jpg')}
          alt="Énergies renouvelables - Delta 2S"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-[2000ms] hover:scale-[1.02]"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />

        {/* Technical grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.07]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        {/* Technical corner */}

        <div className="absolute right-8 top-32 hidden h-28 w-28 border-r border-t border-white/20 lg:block">
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
        </div>

        <div className="container relative mx-auto flex min-h-[620px] max-w-7xl items-end px-4 pb-20 md:min-h-[720px] md:pb-24">

          <div
            className="max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >

            {/* Label */}

            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-primary" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Delta 2S · Energy Systems
              </span>

            </div>

            {/* Title */}

            <h1
              className="
                max-w-3xl
                text-[38px]
                font-semibold
                leading-[1.05]
                tracking-[-0.035em]
                text-white
                sm:text-[46px]
                md:text-[58px]
                lg:text-[66px]
              "
            >
              L'énergie solaire,
              <br />

              <span className="font-medium text-primary">
                pensée pour votre projet.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[15px]">
              Delta 2S accompagne les porteurs de projets dans la réalisation
              et la maintenance de leurs centrales photovoltaïques.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="#solutions"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-primary
                  px-6
                  py-3.5
                  text-[10px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-midnight_text
                "
              >
                Découvrir nos solutions

                <Icon
                  icon="solar:arrow-down-linear"
                  width={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-white/25
                  px-6
                  py-3.5
                  text-[10px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-midnight_text
                "
              >
                Parler de votre projet

                <Icon
                  icon="solar:arrow-right-linear"
                  width={15}
                />
              </Link>

            </div>

          </div>

        </div>

        {/* Hero information */}

        <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/10 bg-black/20 px-7 py-4 backdrop-blur-sm lg:block">

          <div className="flex items-center gap-8">

            <div>

              <span className="block text-[8px] uppercase tracking-[0.15em] text-white/35">
                Expertise
              </span>

              <strong className="mt-1 block text-[10px] font-medium text-white/75">
                Photovoltaïque
              </strong>

            </div>

            <div className="h-7 w-px bg-white/10" />

            <div>

              <span className="block text-[8px] uppercase tracking-[0.15em] text-white/35">
                Approche
              </span>

              <strong className="mt-1 block text-[10px] font-medium text-white/75">
                Sur mesure
              </strong>

            </div>

            <div className="h-7 w-px bg-white/10" />

            <div>

              <span className="block text-[8px] uppercase tracking-[0.15em] text-white/35">
                Engagement
              </span>

              <strong className="mt-1 block text-[10px] font-medium text-white/75">
                Durable
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 dark:bg-darkmode md:py-24">

        {/* Technical grid */}

        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[25%] opacity-[0.035] lg:block">

          <div
            className="
              h-full
              [background-image:linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)]
              [background-size:45px_45px]
            "
          />

        </div>

        <div className="container relative mx-auto max-w-7xl px-4">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            {/* Left */}

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-primary" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Notre expertise
                </span>

              </div>

              <h2
                className="
                  mt-5
                  max-w-lg
                  text-[29px]
                  font-semibold
                  leading-[1.12]
                  tracking-[-0.03em]
                  text-midnight_text
                  dark:text-white
                  md:text-[38px]
                "
              >
                Une énergie propre,
                <br />

                <span className="font-medium text-primary">
                  une approche maîtrisée.
                </span>
              </h2>

            </div>

            {/* Right */}

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="relative"
            >

              <span
                className="
                  absolute
                  -right-2
                  -top-10
                  text-[80px]
                  font-bold
                  leading-none
                  text-black/[0.025]
                  dark:text-white/[0.025]
                "
              >
                01
              </span>

              <p className="relative max-w-2xl text-[16px] leading-8 text-midnight_text dark:text-white/75">
                Delta 2S accompagne les porteurs de projets dans les
                différentes phases de réalisation de leurs installations
                photovoltaïques.
              </p>

              <p className="mt-5 max-w-2xl text-[13px] leading-7 text-gray dark:text-white/45">
                De l'étude au dimensionnement, de la construction à la mise en
                service et jusqu'à la maintenance, nous proposons des solutions
                adaptées aux besoins des entreprises, des particuliers et des
                exploitations agricoles.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ====================================================== */}

      <section
        id="solutions"
        className="relative overflow-hidden bg-section py-20 dark:bg-darklight md:py-24"
      >

        {/* Technical accents */}

        <div className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-primary/40" />

        <div className="pointer-events-none absolute right-0 top-24 hidden h-40 w-40 border-r border-t border-primary/10 lg:block" />

        <div className="container relative mx-auto max-w-7xl px-4">

          {/* Header */}

          <div
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
            data-aos="fade-up"
          >

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-primary" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Nos solutions
                </span>

              </div>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  text-[30px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.03em]
                  text-midnight_text
                  dark:text-white
                  md:text-[38px]
                "
              >
                Des solutions solaires
                <br />

                <span className="font-medium text-primary">
                  adaptées à chaque besoin.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-[12px] leading-6 text-gray dark:text-white/40">
              Chaque installation est pensée selon les caractéristiques
              du site, les besoins énergétiques et les objectifs du projet.
            </p>

          </div>


          {/* =================================================
              SOLUTION CARDS
          ================================================== */}

          <div className="grid gap-5 md:grid-cols-3">

            {solutions.map((solution, index) => (

              <article
                key={solution.number}
                className="
                  group
                  relative
                  flex
                  min-h-[420px]
                  flex-col
                  overflow-hidden
                  border
                  border-black/[0.07]
                  bg-white
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  dark:border-white/[0.08]
                  dark:bg-darkmode
                "
                data-aos="fade-up"
                data-aos-delay={index * 140}
              >

                {/* IMAGE */}

                <div className="relative h-[175px] overflow-hidden">

                  <Image
                    src={getImgPath(solution.image)}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Number */}

                  <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center border border-white/30 bg-black/20 text-[9px] font-bold text-white backdrop-blur-sm">
                    {solution.number}
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      bg-primary
                      text-white
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  >

                    <Icon
                      icon={solution.icon}
                      width={21}
                    />

                  </div>

                </div>


                {/* CONTENT */}

                <div className="relative flex flex-1 flex-col p-6">

                  {/* Corner */}

                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-10
                      w-10
                      border-r
                      border-t
                      border-primary/20
                      transition-all
                      duration-500
                      group-hover:h-16
                      group-hover:w-16
                    "
                  />

                  {/* Subtitle */}

                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {solution.subtitle}
                  </span>

                  {/* Title */}

                  <h3
                    className="
                      mt-3
                      text-[21px]
                      font-semibold
                      leading-tight
                      tracking-[-0.025em]
                      text-midnight_text
                      dark:text-white
                    "
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-[12px] leading-6 text-gray dark:text-white/45">
                    {solution.description}
                  </p>


                  {/* Bottom */}

                  <div className="mt-auto pt-7">

                    <div className="mb-5 h-px w-full bg-black/[0.07] dark:bg-white/[0.08]" />

                    <Link
                      href="/contact"
                      className="
                        group/link
                        flex
                        items-center
                        justify-between
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-midnight_text
                        dark:text-white
                      "
                    >

                      <span>
                        Étudier cette solution
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
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
                          className="
                            transition-transform
                            duration-300
                            group-hover/link:translate-x-1
                          "
                        />

                      </span>

                    </Link>

                  </div>

                </div>

                {/* Active line */}

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

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 dark:bg-darkmode md:py-28">

        <div className="container relative mx-auto max-w-7xl px-4">

          {/* Header */}

          <div
            className="max-w-2xl"
            data-aos="fade-up"
          >

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-primary" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                Notre méthode
              </span>

            </div>

            <h2
              className="
                mt-5
                text-[31px]
                font-semibold
                leading-[1.08]
                tracking-[-0.03em]
                text-midnight_text
                dark:text-white
                md:text-[40px]
              "
            >
              Plus qu'une installation,
              <br />

              <span className="font-medium text-primary">
                un projet maîtrisé.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[13px] leading-7 text-gray dark:text-white/45">
              De la conception à l'exploitation, Delta 2S vous accompagne
              avec une approche structurée et orientée performance.
            </p>

          </div>


          {/* Timeline */}

          <div className="relative mt-20">

            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-black/[0.08] md:block dark:bg-white/[0.08]" />

            <div className="grid gap-10 md:grid-cols-3">

              {projectSteps.map((step, index) => (

                <div
                  key={step.number}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >

                  {/* Number */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      border
                      border-primary
                      bg-white
                      text-[12px]
                      font-bold
                      text-primary
                      transition-all
                      duration-500
                      group-hover:bg-primary
                      group-hover:text-white
                      dark:bg-darkmode
                    "
                  >
                    {step.number}
                  </div>

                  {/* Content */}

                  <div className="mt-7">

                    <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {step.eyebrow}
                    </span>

                    <h3 className="mt-2 text-[21px] font-semibold tracking-[-0.02em] text-midnight_text dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[12px] leading-6 text-gray dark:text-white/40">
                      {step.description}
                    </p>

                  </div>

                  {/* Tags */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {step.items.map((item) => (

                      <span
                        key={item}
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          border
                          border-black/[0.07]
                          px-2.5
                          py-1.5
                          text-[8px]
                          text-gray
                          transition-all
                          duration-300
                          group-hover:border-primary/25
                          dark:border-white/[0.08]
                          dark:text-white/40
                        "
                      >

                        <span className="h-1 w-1 rounded-full bg-primary" />

                        {item}

                      </span>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGAGEMENTS
      ====================================================== */}

      <section className="bg-section py-24 dark:bg-darklight md:py-28">

        <div className="container mx-auto max-w-7xl px-4">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            {/* Intro */}

            <div data-aos="fade-right">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-primary" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Nos engagements
                </span>

              </div>

              <h2
                className="
                  mt-5
                  max-w-md
                  text-[31px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.03em]
                  text-midnight_text
                  dark:text-white
                  md:text-[40px]
                "
              >
                Une installation solaire
                <br />

                <span className="font-medium text-primary">
                  pensée pour durer.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-[13px] leading-7 text-gray dark:text-white/45">
                Notre engagement repose sur une approche technique,
                responsable et durable pour accompagner chaque projet dans
                le temps.
              </p>

            </div>


            {/* Cards */}

            <div className="grid gap-3 sm:grid-cols-2">

              {engagements.map((item, index) => (

                <article
                  key={item.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    border
                    border-black/[0.07]
                    bg-white
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-xl
                    dark:border-white/[0.08]
                    dark:bg-darkmode
                  "
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >

                  {/* Bottom line */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-start justify-between">

                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
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
                        width={21}
                      />

                    </div>

                    <span className="text-[10px] font-bold text-black/10 dark:text-white/10">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.01em] text-midnight_text dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-6 text-gray dark:text-white/40">
                    {item.description}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-midnight_text py-20 md:py-24">

        {/* Technical grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.05]
            [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />

        <div className="absolute left-0 top-0 h-px w-[35%] bg-primary/70" />

        <div className="absolute bottom-0 right-0 h-px w-[25%] bg-primary/40" />

        <div className="container relative mx-auto max-w-7xl px-4">

          <div
            className="
              flex
              flex-col
              justify-between
              gap-10
              md:flex-row
              md:items-center
            "
            data-aos="fade-up"
          >

            <div>

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-primary" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Parlons énergie
                </span>

              </div>

              <h2
                className="
                  mt-5
                  max-w-2xl
                  text-[29px]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.03em]
                  text-white
                  md:text-[40px]
                "
              >
                Votre projet mérite une solution
                <br />

                <span className="font-medium text-primary">
                  pensée pour ses contraintes.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[12px] leading-6 text-white/45">
                Étude, construction et maintenance :
                Delta 2S vous accompagne à chaque étape.
              </p>

            </div>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-4
                border
                border-white/20
                px-6
                py-4
                text-[10px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-primary
                hover:bg-primary
              "
            >

              Contacter Delta 2S

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-white/20
                  transition-all
                  duration-300
                  group-hover:border-white/40
                "
              >

                <Icon
                  icon="solar:arrow-right-linear"
                  width={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default EnergieRenewable