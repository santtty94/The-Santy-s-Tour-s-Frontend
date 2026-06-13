'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  maxRating?: number
  reviewCount?: number
  interactive?: boolean
  size?: 'sm' | 'md' | 'lg'
  onChange?: (rating: number) => void
  className?: string
}

const starPath =
  'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'

const sizes = {
  sm: { star: 'h-3.5 w-3.5', text: 'text-xs' },
  md: { star: 'h-5 w-5',   text: 'text-sm' },
  lg: { star: 'h-6 w-6',   text: 'text-base' },
}

export default function StarRating({
  rating,
  maxRating = 5,
  reviewCount,
  interactive = false,
  size = 'md',
  onChange,
  className,
}: StarRatingProps) {
  const [hovered, setHovered] = useState(0)
  const displayed = interactive && hovered > 0 ? hovered : rating

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={cn(sizes[size].star, filled ? 'text-accent-500' : 'text-primary-600')}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d={starPath} />
    </svg>
  )

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div
        className="flex items-center gap-0.5"
        role={interactive ? undefined : 'img'}
        aria-label={`${rating} de ${maxRating} estrellas`}
      >
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((star) =>
          interactive ? (
            <button
              key={star}
              type="button"
              onClick={() => onChange?.(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              className="cursor-pointer transition-transform duration-100 hover:scale-110"
              aria-label={`${star} de ${maxRating} estrellas`}
            >
              <StarIcon filled={star <= displayed} />
            </button>
          ) : (
            <span key={star}>
              <StarIcon filled={star <= displayed} />
            </span>
          ),
        )}
      </div>

      {(rating > 0 || reviewCount !== undefined) && (
        <span className={cn('text-primary-300', sizes[size].text)}>
          {rating > 0 && (
            <span className="font-semibold text-white">{rating.toFixed(1)}</span>
          )}
          {reviewCount !== undefined && (
            <span className="ml-1">
              ({reviewCount} {reviewCount === 1 ? 'reseña' : 'reseñas'})
            </span>
          )}
        </span>
      )}
    </div>
  )
}
