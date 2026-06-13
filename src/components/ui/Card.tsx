import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'light'
  hover?: boolean
}

export function Card({
  className,
  variant = 'dark',
  hover = true,
  children,
  ...props
}: CardProps) {
  const base = 'rounded-xl overflow-hidden'

  const variants = {
    dark: cn(
      'bg-primary-900 border border-primary-700/50 shadow-xl',
      hover &&
        'hover:border-accent-500/30 hover:shadow-glow-accent transition-all duration-300',
    ),
    light: cn(
      'bg-white shadow-md',
      hover && 'hover:shadow-lg transition-shadow duration-200',
    ),
  }

  return (
    <div className={cn(base, variants[variant], className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 pb-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('px-6 py-4 border-t border-primary-700/50', className)}
      {...props}
    >
      {children}
    </div>
  )
}
