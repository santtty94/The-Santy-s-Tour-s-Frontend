import StarRating from '@/components/ui/StarRating'
import type { ReviewDisplay } from '@/lib/mock-data'

interface ReviewsSectionProps {
  reviews: ReviewDisplay[]
}

function QuoteIcon() {
  return (
    <svg
      className="h-8 w-8 text-accent-500/40"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="section-label mb-3">Testimonios</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-primary-300 max-w-xl mx-auto">
            Opiniones reales de viajeros de todo el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col gap-4 p-6 bg-primary-900 border border-primary-700/50 rounded-xl shadow-xl"
            >
              {/* Stars + comillas */}
              <div className="flex items-start justify-between">
                <StarRating rating={review.rating} size="sm" />
                <QuoteIcon />
              </div>

              {/* Comentario */}
              <p className="text-primary-200 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* Cliente */}
              <div className="pt-4 border-t border-primary-700/50">
                <p className="text-white font-semibold text-sm">{review.customerName}</p>
                <p className="text-primary-400 text-xs mt-0.5">{review.customerOrigin}</p>
                <p className="text-accent-500/70 text-xs mt-1 font-medium">
                  {review.experienceTitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
