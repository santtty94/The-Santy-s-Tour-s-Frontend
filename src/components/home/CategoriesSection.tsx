import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ExperienceCategory } from '@/types'

interface CategoryMeta {
  label: string
  description: string
  href: string
  colorClasses: string
  icon: React.ReactNode
}

const categories: Record<ExperienceCategory, CategoryMeta> = {
  gastronomia: {
    label: 'Gastronomía',
    description: 'Cocina, vinos y sabores únicos',
    href: '/experiences?category=gastronomia',
    colorClasses: 'text-accent-400 bg-accent-500/10 border-accent-500/20 hover:border-accent-500/50',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2h-3c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h3v5a2 2 0 01-2 2h-3a2 2 0 01-2-2v-2" />
      </svg>
    ),
  },
  cultura: {
    label: 'Cultura',
    description: 'Historia, arte y misterios de Barcelona',
    href: '/experiences?category=cultura',
    colorClasses: 'text-violet-300 bg-violet-500/10 border-violet-500/20 hover:border-violet-500/50',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4L2 9h20L12 4zM4 9v11M8 9v11M12 9v11M16 9v11M20 9v11M2 20h20" />
      </svg>
    ),
  },
  aventura: {
    label: 'Aventura',
    description: 'Kayak, senderismo y adrenalina',
    href: '/experiences?category=aventura',
    colorClasses: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/50',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18L12 3 3 21zM12 9l3 6H9l3-6z" />
      </svg>
    ),
  },
  nocturna: {
    label: 'Nocturna',
    description: 'Flamenco, tapas y vida nocturna',
    href: '/experiences?category=nocturna',
    colorClasses: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/50',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
  },
  premium: {
    label: 'Premium',
    description: 'Yate privado y experiencias exclusivas',
    href: '/experiences?category=premium',
    colorClasses: 'text-amber-300 bg-amber-500/10 border-amber-400/20 hover:border-amber-400/50',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a3 3 0 100 6 3 3 0 000-6zM12 8v8M5 12h14M5 20c0-2.5 3.1-4 7-4s7 1.5 7 4" />
      </svg>
    ),
  },
  naturaleza: {
    label: 'Naturaleza',
    description: 'Montserrat, Costa Brava y paisajes únicos',
    href: '/experiences?category=naturaleza',
    colorClasses: 'text-teal-300 bg-teal-500/10 border-teal-500/20 hover:border-teal-500/50',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A7 7 0 0118 13V3s-7 7.2-7 17M11 20c0-4.4 2.4-8.2 7-10" />
      </svg>
    ),
  },
}

export default function CategoriesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="section-label mb-3">Explora</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            ¿Qué tipo de experiencia buscas?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {(Object.entries(categories) as [ExperienceCategory, CategoryMeta][]).map(
            ([key, cat]) => (
              <Link key={key} href={cat.href} className="group">
                <div
                  className={cn(
                    'flex flex-col items-center text-center gap-4 p-6 md:p-8',
                    'rounded-xl border bg-primary-900/50',
                    'transition-all duration-300',
                    cat.colorClasses,
                  )}
                >
                  <div className={cn('transition-transform duration-300 group-hover:scale-110')}>
                    {cat.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-lg">{cat.label}</p>
                    <p className="text-sm text-primary-300 mt-1 leading-relaxed hidden sm:block">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
