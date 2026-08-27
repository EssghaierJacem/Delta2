import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

import { getImgPath } from '@/utils/image';

/* ============================================================
   METADATA
============================================================ */

export const metadata: Metadata = {
  title: 'Références | Delta 2S',
  description:
    'Découvrez les références, réalisations et partenaires de Delta 2S dans les domaines de l’énergie, de l’industrie et des solutions techniques.',
};

/* ============================================================
   CLIENTS
============================================================ */

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
];

/* ============================================================
   PROJECTS
============================================================ */

const projects = [
  {
    number: '01',
    title: 'Station météo de Skhira',
    category: 'Monitoring & contrôle',
    description:
      'Suivi et contrôle continu des équipements de la station afin d’assurer la disponibilité et la fiabilité des données.',
    image: '/images/clients/skhira.png',
  },
  {
    number: '02',
    title: 'Mât de mesure — Akarit',
    category: 'Mesure & supervision',
    description:
      'Solution de suivi et de contrôle dédiée à la station de mesure du site d’Akarit.',
    image: '/images/clients/akarit.png',
  },
  {
    number: '03',
    title: 'Station météo de Menzel Habib',
    category: 'Monitoring & contrôle',
    description:
      'Mise en place d’une solution de contrôle continu pour assurer la surveillance des équipements.',
    image: '/images/clients/menzel-habib.png',
  },
  {
    number: '04',
    title: 'Pompage solaire',
    category: 'Énergie solaire',
    description:
      'Solution photovoltaïque destinée à assurer le pompage de l’eau de manière autonome et durable.',
    image: '/images/clients/pompage-solair.png',
  },
];

/* ============================================================
   HERO
============================================================ */

const ReferencesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-darkmode">

      {/* TECHNICAL BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
            [background-size:70px_70px]
            dark:opacity-[0.035]
            dark:[background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          "
        />

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-primary/[0.08]
          "
        />

        <div
          className="
            absolute
            -right-20
            -top-20
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-primary/[0.06]
          "
        />

        <span className="absolute right-[22%] top-[22%] h-2 w-2 rounded-full bg-primary/40" />
        <span className="absolute right-[10%] top-[42%] h-1.5 w-1.5 rounded-full bg-primary/30" />
        <span className="absolute left-[8%] top-[30%] h-1.5 w-1.5 rounded-full bg-primary/30" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">

        <div
          className="
            grid
            min-h-[650px]
            items-center
            gap-14
            py-28
            lg:grid-cols-12
            lg:gap-10
            lg:py-32
          "
        >

          {/* LEFT */}
          <div
            className="lg:col-span-6"
            data-aos="fade-up"
            data-aos-duration="900"
          >

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                Delta 2S · Références
              </span>
            </div>

            <h1
              className="
                max-w-3xl
                text-[44px]
                font-bold
                leading-[1.02]
                tracking-[-0.035em]
                text-midnight_text
                dark:text-white
                sm:text-[54px]
                md:text-[64px]
              "
            >
              Des projets qui
              <br />
              <span className="text-primary">
                parlent pour nous.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-xl
                text-[14px]
                leading-7
                text-gray
                dark:text-white/50
                md:text-[15px]
              "
            >
              Au fil des années, Delta 2S a développé son savoir-faire
              aux côtés d’entreprises et d’acteurs industriels exigeants,
              en apportant des solutions techniques adaptées aux réalités
              de chaque projet.
            </p>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-8
                border-t
                border-black/[0.08]
                pt-7
                dark:border-white/[0.08]
              "
            >

              <div>
                <strong
                  className="
                    block
                    text-2xl
                    font-bold
                    text-midnight_text
                    dark:text-white
                  "
                >
                  15+
                </strong>

                <span
                  className="
                    mt-1
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-gray
                    dark:text-white/35
                  "
                >
                  Collaborations
                </span>
              </div>

              <div className="h-10 w-px bg-black/[0.08] dark:bg-white/[0.08]" />

              <div>
                <strong
                  className="
                    block
                    text-2xl
                    font-bold
                    text-midnight_text
                    dark:text-white
                  "
                >
                  04
                </strong>

                <span
                  className="
                    mt-1
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-gray
                    dark:text-white/35
                  "
                >
                  Réalisations
                </span>
              </div>

              <div className="h-10 w-px bg-black/[0.08] dark:bg-white/[0.08]" />

              <div>
                <strong
                  className="
                    block
                    text-2xl
                    font-bold
                    text-primary
                  "
                >
                  360°
                </strong>

                <span
                  className="
                    mt-1
                    block
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-gray
                    dark:text-white/35
                  "
                >
                  Approche projet
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              relative
              flex
              min-h-[430px]
              items-center
              justify-center
              lg:col-span-6
            "
            data-aos="zoom-in"
            data-aos-duration="1000"
          >

            <div
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                border
                border-primary/[0.10]
                sm:h-[390px]
                sm:w-[390px]
              "
            />

            <div
              className="
                absolute
                h-[270px]
                w-[270px]
                rounded-full
                border
                border-dashed
                border-primary/20
                animate-[spin_30s_linear_infinite]
                sm:h-[320px]
                sm:w-[320px]
              "
            />

            <div className="absolute h-[390px] w-[390px]">

              <span className="absolute left-1/2 top-0 h-10 w-px bg-primary/20" />
              <span className="absolute bottom-0 left-1/2 h-10 w-px bg-primary/20" />
              <span className="absolute left-0 top-1/2 h-px w-10 bg-primary/20" />
              <span className="absolute right-0 top-1/2 h-px w-10 bg-primary/20" />

            </div>

            <span
              className="
                absolute
                left-1/2
                top-[18px]
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-primary
                shadow-[0_0_0_5px_rgba(47,115,242,0.08)]
              "
            />

            <span
              className="
                absolute
                bottom-[65px]
                left-[20%]
                h-1.5
                w-1.5
                rounded-full
                bg-primary/50
              "
            />

            <span
              className="
                absolute
                right-[17%]
                top-[30%]
                h-1.5
                w-1.5
                rounded-full
                bg-primary/40
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-44
                w-44
                flex-col
                items-center
                justify-center
                rounded-full
                border
                border-primary/20
                bg-white
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                dark:bg-darkmode
              "
            >

              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-primary/20
                "
              >
                <span
                  className="
                    text-3xl
                    font-bold
                    tracking-[0.08em]
                    text-primary
                  "
                >
                  D2S
                </span>
              </div>

              <span
                className="
                  mt-3
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-gray
                  dark:text-white/35
                "
              >
                Delta 2S
              </span>
            </div>

            <div
              className="
                absolute
                left-[2%]
                top-[35%]
                hidden
                md:block
              "
            >
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gray/50">
                Expertise
              </span>

              <span className="mt-1 block text-[10px] font-medium text-midnight_text dark:text-white/60">
                Technique
              </span>
            </div>

            <div
              className="
                absolute
                bottom-[28%]
                right-[2%]
                hidden
                text-right
                md:block
              "
            >
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gray/50">
                Engagement
              </span>

              <span className="mt-1 block text-[10px] font-medium text-midnight_text dark:text-white/60">
                Durabilité
              </span>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-black/[0.06] dark:bg-white/[0.06]" />
    </section>
  );
};

/* ============================================================
   CLIENTS
============================================================ */

const ClientsSection = () => {
  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-section dark:bg-darklight"
    >
      <div className="container mx-auto max-w-7xl px-4 py-20 lg:py-24">

        <div
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
          data-aos="fade-up"
        >

          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-primary
                "
              >
                Notre réseau
              </span>
            </div>

            <h2
              className="
                max-w-xl
                text-[34px]
                font-bold
                leading-[1.05]
                tracking-[-0.025em]
                text-midnight_text
                dark:text-white
                md:text-[44px]
              "
            >
              Des partenaires
              <br />
              <span className="text-primary">
                qui nous font confiance.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p
              className="
                max-w-md
                text-[13px]
                leading-7
                text-gray
                dark:text-white/45
              "
            >
              Une diversité d’acteurs issus de l’industrie,
              de l’énergie et des technologies nous confient
              leurs projets et leurs enjeux techniques.
            </p>
          </div>

        </div>

        <div
          className="
            mt-14
            grid
            grid-cols-2
            border-l
            border-t
            border-black/[0.07]
            sm:grid-cols-3
            lg:grid-cols-5
            dark:border-white/[0.07]
          "
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              data-aos="fade-up"
              data-aos-delay={index * 40}
              className="
                group
                relative
                flex
                h-32
                items-center
                justify-center
                overflow-hidden
                border-b
                border-r
                border-black/[0.07]
                bg-white
                px-7
                transition-all
                duration-500
                hover:shadow-[inset_0_-2px_0_0_rgba(47,115,242,1)]
                dark:border-white/[0.07]
                dark:bg-darkmode
              "
            >
              <div
                className="
                  relative
                  h-16
                  w-full
                  opacity-55
                  grayscale
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:opacity-100
                  group-hover:grayscale-0
                "
              >
                <Image
                  src={getImgPath(client.logo)}
                  alt={client.name}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-black/[0.07]
            pt-5
            dark:border-white/[0.07]
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-gray
              dark:text-white/30
            "
          >
            Entreprises · Industrie · Énergie
          </span>

          <span
            className="
              text-xs
              font-semibold
              text-midnight_text
              dark:text-white/50
            "
          >
            {clients.length.toString().padStart(2, '0')} références
          </span>
        </div>

      </div>
    </section>
  );
};

/* ============================================================
   PROJECTS
============================================================ */

const ProjectsSection = () => {
  return (
    <section
      id="references"
      className="relative overflow-hidden bg-white dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-7xl px-4 py-20 lg:py-28">

        <div
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
          data-aos="fade-up"
        >

          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-primary
                "
              >
                Réalisations
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                text-[34px]
                font-bold
                leading-[1.05]
                tracking-[-0.025em]
                text-midnight_text
                dark:text-white
                md:text-[44px]
              "
            >
              Des solutions
              <br />
              <span className="text-primary">
                concrètement réalisées.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p
              className="
                max-w-md
                text-[13px]
                leading-7
                text-gray
                dark:text-white/45
              "
            >
              Chaque réalisation traduit notre capacité à transformer
              un besoin technique en une solution fiable, fonctionnelle
              et durable.
            </p>
          </div>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                relative
                overflow-hidden
                border
                border-black/[0.07]
                bg-section
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                dark:border-white/[0.07]
                dark:bg-darklight
              "
            >

              <div className="relative h-[290px] overflow-hidden">

                <Image
                  src={getImgPath(project.image)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/75
                    via-black/10
                    to-transparent
                  "
                />

                <span
                  className="
                    absolute
                    left-6
                    top-6
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-white/70
                  "
                >
                  {project.number}
                </span>

                <span
                  className="
                    absolute
                    bottom-6
                    left-6
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                  "
                >
                  {project.category}
                </span>

              </div>

              <div className="p-7 lg:p-8">

                <div className="flex items-start justify-between gap-6">

                  <h3
                    className="
                      text-[21px]
                      font-bold
                      leading-tight
                      text-midnight_text
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      dark:text-white
                    "
                  >
                    {project.title}
                  </h3>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-black/10
                      text-primary
                      transition-all
                      duration-300
                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-white
                      dark:border-white/10
                    "
                  >
                    <Icon
                      icon="solar:arrow-up-right-linear"
                      width={16}
                    />
                  </div>

                </div>

                <p
                  className="
                    mt-4
                    text-[12px]
                    leading-6
                    text-gray
                    dark:text-white/45
                  "
                >
                  {project.description}
                </p>

              </div>

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
  );
};

/* ============================================================
   CTA
============================================================ */

const ReferencesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-midnight_text">

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          [background-size:55px_55px]
        "
      />

      <div className="container relative mx-auto max-w-7xl px-4">

        <div
          className="
            flex
            flex-col
            gap-8
            py-16
            md:flex-row
            md:items-center
            md:justify-between
            md:py-20
          "
          data-aos="fade-up"
        >

          <div>

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-primary
              "
            >
              Un projet en préparation ?
            </span>

            <h2
              className="
                mt-4
                max-w-2xl
                text-[30px]
                font-bold
                leading-tight
                text-white
                md:text-[40px]
              "
            >
              Construisons ensemble
              <br />
              <span className="text-primary">
                votre prochaine réalisation.
              </span>
            </h2>

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
              uppercase
              tracking-[0.1em]
              text-white
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
            "
          >
            Parlons de votre projet

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
  );
};

/* ============================================================
   PAGE
============================================================ */

const ClientsPage = () => {
  return (
    <main className="overflow-hidden">
      <ReferencesHero />
      <ClientsSection />
      <ProjectsSection />
      <ReferencesCTA />
    </main>
  );
};

export default ClientsPage;