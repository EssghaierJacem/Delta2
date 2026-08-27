'use client'

import React from 'react'
import Link from 'next/link'

const ServiceCTA = () => {
  return (
    <section className="bg-section dark:bg-darklight">

      <div className="container mx-auto max-w-6xl px-4 py-20">

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-primary
            px-8
            py-14
            lg:px-16
            lg:py-16
            text-center
          "
          data-aos="zoom-in"
          data-aos-duration="900"
        >

          {/* =====================================================
              DECORATIVE ELEMENTS
          ====================================================== */}

          <div
            className="
              absolute
              -top-20
              -right-20
              w-60
              h-60
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-20
              w-60
              h-60
              rounded-full
              bg-white/10
            "
          />

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div className="relative z-10">

            <h2
              className="
                text-3xl
                lg:text-4xl
                font-bold
                text-white
                mb-5
              "
            >
              Vous avez un projet ?
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto
                text-white/80
                text-base
                leading-7
                mb-8
              "
            >
              Notre équipe est à votre disposition pour étudier votre besoin
              et vous proposer une solution technique adaptée.
            </p>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-white
                px-7
                py-3.5
                text-sm
                font-semibold
                text-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Parlons de votre projet

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}

export default ServiceCTA