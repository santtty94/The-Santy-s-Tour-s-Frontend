// TODO: Reemplazar con el número real de WhatsApp Business (formato internacional sin +)
export const WHATSAPP_NUMBER = '34613684300'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const WHATSAPP_DEFAULT_MESSAGE = encodeURIComponent(
  "Hola, me gustaría información sobre las experiencias de Santy's Tours Barcelona.",
)

export const NAV_LINKS = [
  { href: '/experiences', label: 'Experiencias' },
  { href: '/about',       label: 'Sobre nosotros' },
  { href: '/blog',        label: 'Blog' },
  { href: '/contact',     label: 'Contacto' },
] as const
