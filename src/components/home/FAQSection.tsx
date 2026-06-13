import { WHATSAPP_URL, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/constants'

const faqs = [
  {
    q: '¿Cómo reservo una experiencia?',
    a: 'Selecciona la experiencia, elige la fecha y el número de participantes, completa el formulario con tus datos y paga de forma segura con tarjeta. Recibirás confirmación inmediata por email con todos los detalles.',
  },
  {
    q: '¿Qué métodos de pago aceptáis?',
    a: 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, Amex) a través de Stripe, plataforma de pagos encriptada y certificada. No almacenamos datos de tarjeta en nuestros servidores.',
  },
  {
    q: '¿Puedo cancelar o cambiar la fecha?',
    a: 'Sí. Puedes cancelar o modificar tu reserva sin cargo hasta 48 horas antes de la experiencia. Las cancelaciones con menos de 48 horas de antelación no tienen reembolso. Si tienes alguna situación especial, escríbenos por WhatsApp.',
  },
  {
    q: '¿Las experiencias son aptas para niños?',
    a: 'La mayoría de nuestras experiencias no tienen límite de edad mínima. Te recomendamos revisar la descripción de cada experiencia. Si tienes dudas sobre si una actividad es adecuada para tu familia, consúltanos por WhatsApp.',
  },
  {
    q: '¿En qué idiomas se realizan las experiencias?',
    a: 'Ofrecemos experiencias en español, inglés e italiano. Cada experiencia indica los idiomas disponibles en su ficha. Si necesitas un idioma específico no listado, escríbenos y buscamos una solución.',
  },
  {
    q: '¿Qué incluye el precio?',
    a: 'El precio es por persona e incluye todo lo descrito en la ficha de la experiencia (materiales, guía, degustaciones, etc.). Salvo que se indique lo contrario, no incluye el transporte hasta el punto de encuentro.',
  },
]

export default function FAQSection() {
  const whatsappHref = `${WHATSAPP_URL}?text=${WHATSAPP_DEFAULT_MESSAGE}`

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary-950/50">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Accordion nativo — sin JavaScript, accesible */}
        <div className="divide-y divide-primary-700/50">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6">
                <span className="text-white font-medium text-base md:text-lg leading-snug">
                  {faq.q}
                </span>
                <svg
                  className="h-5 w-5 text-accent-500 shrink-0 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-3 text-primary-300 leading-relaxed text-sm md:text-base">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center p-8 bg-primary-900/50 border border-primary-700/50 rounded-xl">
          <p className="text-white font-medium mb-2">¿No encuentras lo que buscas?</p>
          <p className="text-primary-300 text-sm mb-5">
            Estamos disponibles por WhatsApp para resolver cualquier duda al instante.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-primary-900 font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-glow-accent"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pregúntanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
