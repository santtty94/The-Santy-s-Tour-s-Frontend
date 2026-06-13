import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: {
    default: 'Santy\'s Tours Barcelona — Experiencias Auténticas',
    template: '%s | Santy\'s Tours Barcelona',
  },
  description: 'Las mejores experiencias seleccionadas de Barcelona y Cataluña. Reserva fácil, confianza garantizada, autenticidad asegurada.',
  keywords: ['tours barcelona', 'experiencias barcelona', 'actividades barcelona', 'paella barcelona', 'flamenco barcelona'],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US', 'it_IT'],
    siteName: 'Santy\'s Tours Barcelona',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
