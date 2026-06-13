'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'

interface NavProps {
  orientation?: 'horizontal' | 'vertical'
  onLinkClick?: () => void
}

export default function Nav({ orientation = 'horizontal', onLinkClick }: NavProps) {
  const pathname = usePathname()

  return (
    <ul
      className={cn(
        'flex',
        orientation === 'horizontal'
          ? 'flex-row items-center gap-8'
          : 'flex-col gap-0',
      )}
    >
      {NAV_LINKS.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href + '/')

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onLinkClick}
              className={cn(
                'relative font-medium transition-colors duration-200',
                orientation === 'horizontal'
                  ? [
                      'text-sm',
                      'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent-500',
                      'after:transition-all after:duration-200 hover:after:w-full',
                      isActive
                        ? 'text-accent-500 after:w-full'
                        : 'text-white/75 hover:text-white',
                    ]
                  : [
                      'block px-4 py-3 text-base border-l-2 transition-all duration-200',
                      isActive
                        ? 'text-accent-500 border-accent-500 bg-accent-500/5'
                        : 'text-white/75 border-transparent hover:text-white hover:border-primary-600',
                    ],
              )}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
