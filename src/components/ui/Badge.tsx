import { cn } from '@/lib/utils'
import type { ExperienceCategory } from '@/types'

export const categoryConfig: Record<
  ExperienceCategory,
  { label: string; className: string }
> = {
  gastronomia: {
    label: 'Gastronomía',
    className: 'bg-accent-500/20 text-accent-400 border border-accent-500/30',
  },
  cultura: {
    label: 'Cultura',
    className: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
  },
  aventura: {
    label: 'Aventura',
    className: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
  },
  nocturna: {
    label: 'Nocturna',
    className: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
  },
  premium: {
    label: 'Premium',
    className: 'bg-amber-400/20 text-amber-300 border border-amber-400/40',
  },
  naturaleza: {
    label: 'Naturaleza',
    className: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
  },
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  category?: ExperienceCategory
  variant?: 'default' | 'outline' | 'solid'
}

export function Badge({
  category,
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  const base =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'

  if (category) {
    const config = categoryConfig[category]
    return (
      <span className={cn(base, config.className, className)} {...props}>
        {config.label}
      </span>
    )
  }

  const variants = {
    default: 'bg-primary-700/50 text-primary-200 border border-primary-600/50',
    outline: 'border border-accent-500 text-accent-500',
    solid: 'bg-accent-500 text-primary-900 font-semibold',
  }

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  )
}
