'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const steps = [
  {
    number: '01',
    title: 'Étude',
    category: 'COMPRENDRE',
    description:
      'Nous analysons votre environnement, vos besoins de sécurité et les contraintes spécifiques de votre site afin de définir la solution la plus adaptée.',
    detail: 'Analyse · Besoins · Contraintes',
    icon: 'solar:document-text-bold-duotone',
  },

  {
    number: '02',
    title: 'Conception',
    category: 'CONCEVOIR',
    description:
      'Nous élaborons une solution de sécurité cohérente en sélectionnant les équipements et technologies adaptés à votre environnement.',
    detail: 'Architecture · Dimensionnement · Équipements',
    icon: 'solar:pen-new-square-bold-duotone',
  },

  {
    number: '03',
    title: 'Intégration',
    category: 'INTÉGRER',
    description:
      'Nous intégrons les différents équipements afin de créer un système de sécurité performant, cohérent et simple à exploiter.',
    detail: 'Intégration · Configuration · Coordination',
    icon: 'solar:layers-bold-duotone',
  },

  {
    number: '04',
    title: 'Installation',
    category: 'RÉALISER',
    description:
      'Nos équipes assurent l’installation et la mise en œuvre des équipements dans le respect des exigences techniques et des règles de sécurité.',
    detail: 'Installation · Câblage · Mise en service',
    icon: 'solar:buildings-2-bold-duotone',
  },

  {
    number: '05',
    title: 'Formation & suivi',
    category: 'ACCOMPAGNER',
    description:
      'Nous formons vos utilisateurs et assurons le suivi de vos installations afin de garantir leur efficacité et leur pérennité.',
    detail: 'Formation · Maintenance · Suivi',
    icon: 'solar:settings-minimalistic-bold-duotone',
  },
]

const ServiceProcess = () => {
  const [activeStep, setActiveStep] = useState(0)

  const active = steps[activeStep]

  return (
    <section
      id="service-process"
      className="relative overflow-hidden bg-white dark:bg-darkmode"
    >
      <div className="container mx-auto max-w-6xl px-4 py-20 lg:py-28">

        {/* HEADER */}

        <div
          className="mb-14 max-w-2xl"
          data-aos="fade-up"
          data-aos-duration="800"
        >

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-success" />

            <span className="text-sm font-medium text-midnight_text dark:text-white/50">
              Notre accompagnement
            </span>

          </div>

          <h2
            className="
              pt-7
              pb-6
              text-4xl
              font-bold
              text-midnight_text
              dark:text-white
            "
          >
            De l'étude au suivi,
            <br />
            <span className="text-primary">
              nous vous accompagnons.
            </span>
          </h2>

          <p
            className="
              max-w-xl
              text-base
              leading-7
              text-gray
              dark:text-white/60
            "
          >
            Notre accompagnement couvre l'ensemble du projet :
            intégration, installation, formation et suivi.
          </p>

        </div>

        {/* MAIN PROCESS */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-12
            lg:gap-16
            lg:min-h-[570px]
          "
        >

          {/* LEFT */}

          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[2rem]
              bg-section
              dark:bg-darklight
              lg:col-span-5
              lg:min-h-[570px]
            "
            data-aos="fade-right"
            data-aos-duration="900"
          >

            {/* Decorative circles */}

            <div
              className="
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                border
                border-primary/10
              "
            />

            <div
              className="
                absolute
                -bottom-24
                -left-24
                h-72
                w-72
                rounded-full
                border
                border-primary/10
              "
            />

            {/* Vertical line */}

            <div
              className="
                absolute
                bottom-10
                left-10
                top-10
                w-px
                bg-black/[0.06]
                dark:bg-white/[0.08]
              "
            />

            <div
              key={active.number}
              className="
                relative
                z-10
                flex
                h-full
                min-h-[430px]
                flex-col
                justify-between
                p-8
                lg:min-h-[570px]
                lg:p-10
              "
            >

              {/* TOP */}

              <div className="pl-8">

                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.22em]
                    text-primary
                  "
                >
                  {active.category}
                </span>

                <div className="mt-6 flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      text-white
                      shadow-lg
                      shadow-primary/20
                    "
                  >
                    <Icon
                      icon={active.icon}
                      width={28}
                      height={28}
                    />
                  </div>

                  <span
                    className="
                      text-xs
                      font-medium
                      tracking-[0.18em]
                      text-gray
                      dark:text-white/40
                    "
                  >
                    ÉTAPE {active.number}
                  </span>

                </div>

              </div>

              {/* BIG NUMBER */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-7
                  top-1/2
                  -translate-y-1/2
                  select-none
                "
              >
                <span
                  className="
                    text-[170px]
                    font-bold
                    leading-none
                    text-midnight_text/[0.035]
                    dark:text-white/[0.035]
                  "
                >
                  {active.number}
                </span>
              </div>

              {/* BOTTOM */}

              <div className="relative z-10 pl-8">

                <h3
                  className="
                    text-4xl
                    font-bold
                    text-midnight_text
                    dark:text-white
                  "
                >
                  {active.title}
                </h3>

                <p
                  className="
                    mt-5
                    max-w-md
                    text-sm
                    leading-7
                    text-gray
                    dark:text-white/60
                  "
                >
                  {active.description}
                </p>

                <div
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/[0.07]
                    bg-white/70
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-gray
                    dark:border-white/[0.08]
                    dark:bg-darkmode/70
                    dark:text-white/50
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />

                  {active.detail}
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-col
              justify-center
              lg:col-span-7
            "
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >

            <div className="mb-7">

              <span
                className="
                  text-[11px]
                  font-semibold
                  tracking-[0.2em]
                  text-gray
                  dark:text-white/40
                "
              >
                PARCOURS D'UN PROJET
              </span>

            </div>

            <div className="relative">

              {/* Main line */}

              <div
                className="
                  absolute
                  bottom-6
                  left-[23px]
                  top-6
                  w-px
                  bg-black/[0.08]
                  dark:bg-white/[0.08]
                "
              />

              {/* Progress */}

              <div
                className="
                  absolute
                  left-[22px]
                  top-6
                  w-[3px]
                  rounded-full
                  bg-primary
                  transition-all
                  duration-700
                "
                style={{
                  height: `${(activeStep / (steps.length - 1)) * 100}%`,
                }}
              />

              <div className="space-y-2">

                {steps.map((step, index) => {

                  const isActive = activeStep === index

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onMouseEnter={() => setActiveStep(index)}
                      onFocus={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                      className={`
                        group
                        relative
                        flex
                        w-full
                        items-center
                        gap-5
                        rounded-2xl
                        px-3
                        py-5
                        text-left
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? 'bg-section dark:bg-darklight'
                            : 'hover:bg-section/60 dark:hover:bg-darklight/60'
                        }
                      `}
                    >

                      {/* NUMBER */}

                      <span
                        className={`
                          relative
                          z-10
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          text-xs
                          font-semibold
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? 'scale-110 border-primary bg-primary text-white shadow-lg shadow-primary/20'
                              : 'border-black/10 bg-white text-gray dark:border-white/10 dark:bg-darkmode dark:text-white/40'
                          }
                        `}
                      >
                        {isActive ? (
                          <Icon
                            icon={step.icon}
                            width={20}
                            height={20}
                          />
                        ) : (
                          step.number
                        )}
                      </span>

                      {/* TEXT */}

                      <span className="min-w-0 flex-1">

                        <span
                          className={`
                            block
                            text-xl
                            font-bold
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? 'translate-x-1 text-primary'
                                : 'text-midnight_text dark:text-white'
                            }
                          `}
                        >
                          {step.title}
                        </span>

                        <span
                          className={`
                            mt-1
                            block
                            text-xs
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? 'text-gray dark:text-white/50'
                                : 'text-gray/60 dark:text-white/30'
                            }
                          `}
                        >
                          {step.category}
                        </span>

                      </span>

                      {/* ARROW */}

                      <span
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? 'border-primary bg-primary text-white'
                              : 'border-black/10 text-gray opacity-0 group-hover:opacity-100 dark:border-white/10'
                          }
                        `}
                      >
                        <Icon
                          icon="solar:arrow-right-linear"
                          width={18}
                          height={18}
                        />
                      </span>

                    </button>
                  )
                })}

              </div>

            </div>

            {/* BOTTOM */}

            <div
              className="
                mt-8
                flex
                items-center
                justify-between
                border-t
                border-black/[0.07]
                pt-6
                dark:border-white/[0.08]
              "
            >

              <div>

                <span
                  className="
                    block
                    text-xs
                    font-semibold
                    text-midnight_text
                    dark:text-white/70
                  "
                >
                  Un accompagnement complet
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-xs
                    text-gray
                    dark:text-white/40
                  "
                >
                  Intégration · Installation · Formation · Suivi
                </span>

              </div>

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
                  hover:border-primary
                  hover:bg-primary
                  hover:text-white
                  dark:border-white/10
                "
              >
                ↓
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ServiceProcess