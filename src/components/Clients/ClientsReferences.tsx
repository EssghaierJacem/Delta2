'use client'

import Image from 'next/image'
import { getImgPath } from '@/utils/image'

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
]

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
]

const ClientsReferences = () => {
  return (
    <>
      {/* =====================================================
          CLIENTS
      ====================================================== */}

      <section
        id="clients"
        className="
          relative
          overflow-hidden
          bg-white
          dark:bg-darkmode
        "
      >
        <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-20">

          {/* HEADER */}

          <div
            className="
              grid
              items-end
              gap-8
              lg:grid-cols-12
            "
            data-aos="fade-up"
            data-aos-duration="800"
          >

            {/* LEFT */}

            <div className="lg:col-span-7">

              <div className="mb-5 flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-success" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-gray
                    dark:text-white/40
                  "
                >
                  01 — Clients
                </span>

              </div>

              <h2
                className="
                  max-w-2xl
                  text-3xl
                  font-bold
                  leading-[1.1]
                  text-midnight_text
                  dark:text-white
                  sm:text-4xl
                "
              >
                Des collaborations
                <span className="text-primary">
                  {' '}qui comptent.
                </span>
              </h2>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-5">

              <p
                className="
                  max-w-md
                  text-sm
                  leading-7
                  text-gray
                  dark:text-white/55
                "
              >
                Industriels, acteurs de l’énergie et entreprises
                technologiques : nos références témoignent de la
                confiance accordée à Delta pour des projets techniques
                exigeants.
              </p>

            </div>

          </div>

          {/* LOGOS */}

          <div
            className="
              mt-12
              grid
              grid-cols-2
              border-l
              border-t
              border-black/[0.07]
              dark:border-white/[0.07]
              sm:grid-cols-3
              lg:grid-cols-5
            "
          >

            {clients.map((client, index) => (
              <div
                key={client.name}
                data-aos="fade-up"
                data-aos-delay={index * 40}
                data-aos-duration="600"
                className="
                  group
                  relative
                  flex
                  h-28
                  items-center
                  justify-center
                  overflow-hidden
                  border-b
                  border-r
                  border-black/[0.07]
                  bg-white
                  px-6
                  transition-all
                  duration-500
                  hover:bg-section
                  dark:border-white/[0.07]
                  dark:bg-darkmode
                  dark:hover:bg-darklight
                "
              >

                {/* subtle hover accent */}

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-primary
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <div
                  className="
                    relative
                    h-14
                    w-full
                    opacity-60
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
                    sizes="180px"
                    className="object-contain"
                  />
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projets"
        className="
          relative
          overflow-hidden
          bg-section
          dark:bg-darklight
        "
      >

        <div className="container mx-auto max-w-6xl px-4 py-16 lg:py-20">

          {/* HEADER */}

          <div
            className="
              grid
              items-end
              gap-8
              border-b
              border-black/[0.07]
              pb-10
              dark:border-white/[0.07]
              lg:grid-cols-12
            "
            data-aos="fade-up"
            data-aos-duration="800"
          >

            {/* LEFT */}

            <div className="lg:col-span-8">

              <div className="mb-5 flex items-center gap-2">

                <span className="h-2.5 w-2.5 rounded-full bg-success" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-gray
                    dark:text-white/40
                  "
                >
                  02 — Projets réalisés
                </span>

              </div>

              <h2
                className="
                  max-w-3xl
                  text-3xl
                  font-bold
                  leading-[1.1]
                  text-midnight_text
                  dark:text-white
                  sm:text-4xl
                "
              >
                Du savoir-faire
                <span className="text-primary">
                  {' '}à la réalisation.
                </span>
              </h2>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-4">

              <p
                className="
                  max-w-sm
                  text-sm
                  leading-7
                  text-gray
                  dark:text-white/55
                "
              >
                Quelques réalisations illustrant notre capacité à
                concevoir et déployer des solutions adaptées aux
                réalités du terrain.
              </p>

            </div>

          </div>

          {/* PROJECT LIST */}

          <div className="divide-y divide-black/[0.07] dark:divide-white/[0.07]">

            {projects.map((project, index) => (
              <article
                key={project.number}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                data-aos-duration="700"
                className="
                  group
                  grid
                  gap-8
                  py-8
                  transition-all
                  duration-500
                  lg:grid-cols-12
                  lg:items-center
                  lg:py-10
                "
              >

                {/* NUMBER */}

                <div
                  className="
                    hidden
                    lg:col-span-1
                    lg:block
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-[0.15em]
                      text-primary
                    "
                  >
                    {project.number}
                  </span>
                </div>

                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-52
                    overflow-hidden
                    rounded-2xl
                    lg:col-span-4
                    lg:h-56
                  "
                >

                  <Image
                    src={getImgPath(project.image)}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
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
                      from-black/50
                      via-transparent
                      to-transparent
                      opacity-60
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-4
                      left-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white
                    "
                  >
                    {project.category}
                  </span>

                </div>

                {/* CONTENT */}

                <div
                  className="
                    lg:col-span-6
                    lg:pl-6
                  "
                >

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-midnight_text
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      dark:text-white
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-sm
                      leading-6
                      text-gray
                      dark:text-white/50
                    "
                  >
                    {project.description}
                  </p>

                </div>

                {/* ARROW */}

                <div
                  className="
                    flex
                    items-center
                    lg:col-span-1
                    lg:justify-end
                  "
                >

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      text-gray
                      transition-all
                      duration-300
                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-white
                      dark:border-white/10
                    "
                  >
                    <span
                      className="
                        text-lg
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    >
                      →
                    </span>
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>
    </>
  )
}

export default ClientsReferences