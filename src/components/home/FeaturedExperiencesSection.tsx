import Link from 'next/link'
import ExperienceCard from '@/components/experiences/ExperienceCard'
import type { Experience } from '@/types'

interface FeaturedExperiencesSectionProps {
  experiences: Experience[]
}

export default function FeaturedExperiencesSection({
  experiences,
}: FeaturedExperiencesSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary-950/50">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Catálogo</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Experiencias destacadas
            </h2>
          </div>
          <Link
            href="/experiences"
            className="shrink-0 text-accent-500 hover:text-accent-400 text-sm font-medium flex items-center gap-1.5 transition-colors duration-200"
          >
            Ver todas
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}
