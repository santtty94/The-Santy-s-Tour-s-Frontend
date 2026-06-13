import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_URL, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/constants'

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const stats = [
  { value: '8',    label: 'Experiencias seleccionadas' },
  { value: '4.9★', label: 'Valoración media' },
  { value: '100%', label: 'Clientes satisfechos' },
]

export default function HeroSection() {
  const whatsappHref = `${WHATSAPP_URL}?text=${WHATSAPP_DEFAULT_MESSAGE}`

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24">

      {/* Imagen de fondo */}
      <Image
        src="/images/hero-barcelona.png"
        alt="Barcelona al atardecer"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay oscuro — mantiene el texto legible sobre la foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />

      {/* Línea dorada decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="section-label mb-6">Barcelona · Cataluña · España</p>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance">
          Experiencias{' '}
          <span className="text-accent-500">auténticas</span>
          <br className="hidden sm:block" />
          {' '}que recordarás siempre
        </h1>

        <p className="mt-6 text-lg md:text-xl text-primary-200 max-w-2xl mx-auto leading-relaxed text-balance">
          Una selección curada de las mejores experiencias en Barcelona y Cataluña.
          Sin trampas para turistas — solo lo mejor de lo mejor.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-400 text-primary-900 font-semibold px-8 py-4 text-base rounded-lg transition-all duration-200 shadow-lg hover:shadow-glow-accent"
          >
            Ver todas las experiencias
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-accent-500 text-accent-500 hover:bg-accent-500/10 font-semibold px-8 py-4 text-base rounded-lg transition-all duration-200"
          >
            <WhatsAppIcon />
            ¿Tienes dudas?
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-10 border-t border-primary-700/30 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-accent-500">{stat.value}</div>
              <div className="text-sm text-primary-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-500">
        <span className="text-xs uppercase tracking-widest font-medium">Descubrir</span>
        <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
