'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setProgressValues(ProgressData)

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="about"
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-7 md:grid-cols-12">

          {/* =====================================================
              IMAGE
          ====================================================== */}
          <div
            className={`flex justify-center md:col-span-6 transition-all duration-[1200ms] ease-out ${
              isVisible
                ? 'translate-x-0 scale-100 opacity-100'
                : '-translate-x-20 scale-95 opacity-0'
            }`}
          >
            <Image
              src={getImgPath(
                '/images/work-progress/delta2s-home-chart-exact-style.png'
              )}
              alt="Delta2S - Nos points forts"
              width={530}
              height={550}
              quality={100}
              className="hidden rounded-2xl object-cover shadow-lg transition-transform duration-700 hover:scale-[1.02] md:block"
            />
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}
          <div className="md:col-span-6">

            {/* PETIT TITRE */}
            <div
              className={`flex items-center gap-2 transition-all duration-700 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }`}
            >
              <span className="h-3 w-3 rounded-full bg-success" />

              <span className="text-sm font-medium text-midnight_text dark:text-white/50">
                Quels sont nos points forts ?
              </span>
            </div>

            {/* TITRE */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: '150ms',
              }}
            >
              <h2 className="pb-8 pt-9 text-4xl font-bold text-midnight_text dark:text-white">
                Des solutions conçues pour durer
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: '300ms',
              }}
            >
              <p className="text-base font-semibold text-gray dark:text-white/70">
                Nous sommes à votre écoute pour vous conseiller et vous fournir
                une solution personnalisée adaptée à vos besoins.
              </p>
            </div>

            {/* =====================================================
                PROGRESS BARS
            ====================================================== */}
            <div className="mx-auto block pt-12">

              {progressValues.map((item, index) => (
                <div
                  key={index}
                  className={`mb-8 flex flex-wrap transition-all duration-700 ease-out ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${500 + index * 180}ms`,
                  }}
                >

                  {/* NOM + POURCENTAGE */}
                  <div className="mb-2 flex w-full items-center justify-between">

                    <span className="text-sm font-normal text-grey dark:text-white/50">
                      {item.title}
                    </span>

                    <span className="text-sm font-normal text-grey dark:text-white/50">
                      {item.Progress}%
                    </span>

                  </div>

                  {/* BARRE */}
                  <div className="relative h-1 w-full overflow-hidden rounded-md bg-primary/20">

                    <div
                      className="absolute left-0 top-0 h-full rounded-md bg-primary"
                      style={{
                        width: isVisible ? `${item.Progress}%` : '0%',
                        transition: `width 1600ms cubic-bezier(0.65, 0, 0.35, 1) ${
                          700 + index * 200
                        }ms`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork