'use client'

import { useState } from 'react'
import ExperienceCard from '@/components/experiences/ExperienceCard'
import { MOCK_EXPERIENCES } from '@/lib/mock-data'

const CATEGORIES = [
  { value: 'all',         label: 'Todas' },
  { value: 'gastronomia', label: '🍽️ Gastronomía' },
  { value: 'aventura',    label: '🧗 Aventura' },
  { value: 'cultura',     label: '🏛️ Cultura' },
  { value: 'naturaleza',  label: '🌿 Naturaleza' },
  { value: 'nocturna',    label: '🌙 Vida nocturna' },
  { value: 'premium',     label: '⭐ Premium' },
] as const

type Category = typeof CATEGORIES[number]['value']

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered = activeCategory === 'all'
    ? MOCK_EXPERIENCES
    : MOCK_EXPERIENCES.filter(e => e.category === activeCategory)

  return (
    <main className="min-h-screen bg-primary-950">

      {/* Hero de sección */}
      <section className="relative py-20 border-b border-primary-700/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Catálogo completo</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Todas las <span className="text-accent-500">experiencias</span>
          </h1>
          <p className="mt-4 text-primary-300 text-lg max-w-xl mx-auto">
            Seleccionadas a mano para que cada momento en Barcelona sea inolvidable.
          </p>
        </div>
      </section>

      {/* Filtros + Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Filtros por categoría */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat.value
                  ? 'bg-accent-500 text-primary-950 shadow-glow-accent'
                  : 'bg-primary-900 text-primary-300 border border-primary-700/50 hover:border-accent-500/40 hover:text-accent-400',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Contador de resultados */}
        <p className="text-primary-400 text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? 'experiencia' : 'experiencias'}
          {activeCategory !== 'all' && (
            <span> en <span className="text-accent-500">{CATEGORIES.find(c => c.value === activeCategory)?.label}</span></span>
          )}
        </p>

        {/* Grid de tarjetas */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(experience => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-primary-400 text-lg">No hay experiencias en esta categoría todavía.</p>
          </div>
        )}
      </section>
    </main>
  )
}
