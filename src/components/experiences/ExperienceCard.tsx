import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import StarRating from '@/components/ui/StarRating'
import type { Experience } from '@/types'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { slug, title, price, duration, category, rating, reviewCount, images } = experience

  return (
    <Link href={`/experiences/${slug}`} className="group block h-full">
      <article
        className={cn(
          'h-full flex flex-col',
          'bg-primary-900 border border-primary-700/50 rounded-xl overflow-hidden shadow-xl',
          'hover:border-accent-500/30 hover:shadow-glow-accent transition-all duration-300',
        )}
      >
        {/* Imagen */}
        <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-primary-800">
          {images[0] ? (
            <Image
              src={images[0]}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
              <svg
                className="h-14 w-14 text-primary-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
          {/* Badge categoría */}
          <div className="absolute top-3 left-3">
            <Badge category={category} />
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3
            className={cn(
              'font-display text-white font-semibold text-lg leading-snug line-clamp-2',
              'group-hover:text-accent-400 transition-colors duration-200',
            )}
          >
            {title}
          </h3>

          <div className="flex items-center gap-1.5 text-sm text-primary-300">
            <svg
              className="h-3.5 w-3.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duration}
          </div>

          <StarRating rating={rating} reviewCount={reviewCount} size="sm" />

          {/* Footer con precio */}
          <div className="mt-auto pt-3 border-t border-primary-700/50 flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-accent-500 font-bold text-xl">{price}€</span>
              <span className="text-primary-400 text-xs">/ persona</span>
            </div>
            <span className="text-sm font-medium text-primary-400 group-hover:text-accent-500 group-hover:translate-x-0.5 transition-all duration-200 flex items-center gap-1">
              Ver más
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
