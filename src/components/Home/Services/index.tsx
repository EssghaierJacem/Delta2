'use client'

import React from 'react'
import { Servicebox } from '@/app/api/data'
import Image from 'next/image'

const Services = () => {
  return (
    <section
      className="bg-section dark:bg-darklight overflow-hidden"
      id="services"
    >
      <div className="container mx-auto max-w-6xl px-4">

        {/* =====================================================
            LABEL
        ====================================================== */}
        <div
          className="flex gap-2 items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span className="w-3 h-3 rounded-full bg-success"></span>

          <span className="font-medium text-midnight_text text-sm dark:text-white/50">
            Nos services
          </span>
        </div>

        {/* =====================================================
            TITLE
        ====================================================== */}
        <h2
          className="
            sm:text-4xl
            text-[28px]
            leading-tight
            font-bold
            text-midnight_text
            md:text-center
            text-start
            pt-7
            pb-20
            md:w-4/6
            w-full
            m-auto
            dark:text-white
          "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          Des solutions techniques conçues selon vos exigences.
        </h2>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <div className="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7">

          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="900"
              data-aos-offset="180"
              className="
                group
                col-span-4
                relative
                flex
                flex-col
                justify-between
                items-center
                text-center
                py-12
                px-7
                bg-white
                dark:bg-darkmode
                rounded-xl
                gap-7
                shadow-service
                border
                border-transparent
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:border-primary/10
                hover:shadow-xl
              "
            >

              {/* =================================================
                  DECORATIVE ELEMENT
              ================================================= */}
              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-1
                  w-0
                  rounded-b-full
                  bg-primary
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              />

              {/* =================================================
                  ICON
              ================================================= */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-[76px]
                  h-[76px]
                  rounded-2xl
                  bg-primary/5
                  dark:bg-primary/10
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-primary/10
                "
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={0}
                  height={0}
                  className="
                    w-10
                    h-10
                    bg-no-repeat
                    inline-block
                    bg-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* =================================================
                  TITLE
              ================================================= */}
              <h3
                className="
                  max-w-44
                  mx-auto
                  text-2xl
                  font-bold
                  text-midnight_text
                  dark:text-white
                  transition-colors
                  duration-300
                  group-hover:text-primary
                "
              >
                {item.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}
              <p
                className="
                  dark:text-white/50
                  text-gray
                  text-base
                  font-normal
                  leading-7
                "
              >
                {item.description}
              </p>

              {/* =================================================
                  BOTTOM INDICATOR
              ================================================= */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-primary
                  text-sm
                  font-medium
                  opacity-0
                  translate-y-3
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                <span>En savoir plus</span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services