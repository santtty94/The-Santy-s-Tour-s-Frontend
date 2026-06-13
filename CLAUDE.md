# CLAUDE.md — Santy's Tours Web (Frontend)

Este archivo contiene todo el contexto del proyecto para que Claude pueda continuar el trabajo sin fricción.

---

## ¿Qué es este proyecto?

**Santy's Tours Barcelona** es un marketplace de experiencias turísticas auténticas en Barcelona y Cataluña. Modelo bootstrap, sin inversión externa. El objetivo es una selección curada de calidad — no competir por volumen contra GetYourGuide o Civitatis, sino atacar nichos específicos con experiencias premium.

**Filosofía de construcción:** No estamos construyendo un marketplace grande desde el inicio. Primero construimos una máquina de ventas simple para 8 experiencias, conseguimos 50 reservas mensuales rentables, y solo entonces escalamos.

---

## Equipo

| Persona | Rol | Responsabilidad |
|---------|-----|-----------------|
| Santiago (Santty) | Fundador Dev | Frontend, infraestructura, DevOps |
| Santiago (Comercial) | Fundador Comercial | Partners, acuerdos, ventas |
| Iván | Colaborador DAM | Backend, base de datos |

**Nota sobre Santty:** Estudiante de ASIR, primer año terminado. Sabe HTML, CSS y lo básico de JS. Está aprendiendo Next.js en el camino. Explicar conceptos con claridad cuando sea necesario. Iván (DAM, 4 años de experiencia) da soporte técnico al frontend cuando se necesita.

---

## Este repositorio

**`santys-tours-web`** — Solo el frontend. Este es el repo de Santty.

El backend está en un repositorio separado (`santys-tours-api`) desarrollado por Iván. La comunicación es via API REST en `http://localhost:4000` en local.

---

## Stack tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Pagos (frontend):** Stripe.js + @stripe/react-stripe-js
- **HTTP:** axios
- **Analytics:** Google Analytics 4 + Microsoft Clarity

---

## Estructura del proyecto

```
santys-tours-web/
├── src/
│   ├── app/                    # Páginas (App Router Next.js)
│   │   ├── layout.tsx          # Layout raíz (metadatos globales)
│   │   ├── page.tsx            # Landing principal "/"
│   │   ├── experiences/
│   │   │   ├── page.tsx        # Catálogo "/experiences"
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Ficha individual "/experiences/paella-..."
│   │   ├── booking/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx    # Formulario reserva
│   │   │   └── confirmation/
│   │   │       └── page.tsx    # Confirmación de reserva
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── components/
│   │   ├── ui/                 # Botones, cards, inputs, badges...
│   │   ├── layout/             # Header, Footer, Nav
│   │   └── experiences/        # ExperienceCard, ExperienceGallery...
│   ├── lib/                    # Llamadas a la API, helpers
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # Tipos TypeScript (Experience, Booking, etc.)
│   └── styles/
│       └── globals.css         # Tailwind + estilos globales
├── public/
│   └── images/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Variables de entorno

Copiar `.env.example` a `.env.local` antes de arrancar:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Arrancar en local

```bash
npm install
npm run dev
# → http://localhost:3000
```

El backend de Iván debe estar corriendo en `http://localhost:4000`.

---

## Páginas del MVP y su estado

| Ruta | Descripción | Estado |
|------|-------------|--------|
| `/` | Landing principal | 🔴 Por implementar |
| `/experiences` | Catálogo de experiencias | 🔴 Por implementar |
| `/experiences/[slug]` | Ficha individual | 🔴 Por implementar |
| `/booking/[slug]` | Formulario de reserva | 🔴 Por implementar |
| `/booking/confirmation` | Confirmación | 🔴 Por implementar |
| `/about` | Sobre nosotros | 🔴 Por implementar |
| `/contact` | Contacto | 🔴 Por implementar |
| `/blog` | Blog SEO | 🔴 Por implementar |
| `/blog/[slug]` | Artículo | 🔴 Por implementar |

---

## Secciones de la Landing (página principal)

1. **Hero** — Título, subtítulo, CTA principal ("Ver experiencias")
2. **Categorías** — Gastronomía, Cultura, Aventura, Premium, Naturaleza, Nocturna
3. **Experiencias destacadas** — Grid de cards con las 8 experiencias iniciales
4. **Reviews** — Testimonios de clientes
5. **FAQ** — Preguntas frecuentes
6. **CTA WhatsApp** — Botón de contacto directo

---

## Las 8 experiencias del catálogo inicial

| Slug | Título | Precio | Categoría |
|------|--------|--------|-----------|
| `paella-cooking-experience-barcelona` | Paella Cooking Experience | 75€ | Gastronomía |
| `tapas-flamenco-evening-barcelona` | Tapas and Flamenco Evening | 65€ | Nocturna |
| `montserrat-day-tour-barcelona` | Montserrat Day Tour | 55€ | Naturaleza |
| `costa-brava-kayaking-barcelona` | Costa Brava Kayaking | 80€ | Aventura |
| `cocktail-making-experience-barcelona` | Cocktail Making Experience | 60€ | Gastronomía |
| `wine-tasting-barcelona` | Local Wine Tasting | 55€ | Gastronomía |
| `ghosts-legends-tour-barcelona` | Ghosts and Legends Tour | 30€ | Cultura |
| `yacht-charter-tapas-barcelona` | Yacht Charter with Tapas | 120€ | Premium |

---

## Tipos TypeScript principales

Definidos en `src/types/index.ts`:

- `Experience` — id, slug, title, description, price, commission (20€ fijo), duration, languages, images, category, partner, rating
- `Booking` — id, bookingRef, experience, customerName, customerEmail, customerWhatsapp, date, participants, totalAmount, status, paymentStatus
- `BookingStatus` — pending | confirmed | cancelled | completed | refunded
- `Partner` — id, name, commissionType, commissionValue
- `Review` — id, experienceId, rating, comment

---

## Identidad visual — Estilo Dark Premium

### Paleta de colores definitiva

| Variable | Hex | Uso |
|----------|-----|-----|
| `--color-night` | `#0a0908` | Fondo principal |
| `--color-carbon` | `#1a1814` | Cards y superficies |
| `--color-graphite` | `#2a2820` | Bordes y separadores |
| `--color-gold` | `#c9a84c` | Color de acento (dorado) |
| `--color-cream` | `#f5f0e8` | Texto principal |
| `--color-stone` | `#888780` | Texto secundario |

### Tipografía

- **Títulos:** Playfair Display (serif) — elegancia y carácter
- **Cuerpo y UI:** Inter (sans-serif) — legibilidad
- **Labels / categorías:** Inter en mayúsculas con letter-spacing 2px en color dorado

### Tailwind — colores personalizados a configurar

```js
// tailwind.config.ts
colors: {
  night:    '#0a0908',
  carbon:   '#1a1814',
  graphite: '#2a2820',
  gold:     '#c9a84c',
  cream:    '#f5f0e8',
  stone:    '#888780',
}
```

### Reglas de diseño

- Fondo de todas las páginas: `#0a0908` (night)
- Cards: `#1a1814` con borde `#2a2820`
- Botón primario: fondo `#c9a84c`, texto `#0a0908`
- Botón secundario: borde `#c9a84c`, texto `#c9a84c`, fondo transparente
- Texto principal: `#f5f0e8` (cream)
- Texto secundario: `#888780` (stone)
- Categorías / etiquetas: letras mayúsculas doradas con letter-spacing

### Logo (placeholder)
"SANTY'S TOURS" en Playfair Display, color dorado `#c9a84c`, letter-spacing 1.5px. Sustituir cuando se decida el nombre definitivo.

---

## Componentes reutilizables a construir

### `src/components/ui/`
- `Button.tsx` — variantes: primary, secondary, ghost
- `Card.tsx` — card base con shadow y hover
- `Badge.tsx` — etiquetas de categoría
- `Input.tsx` — campo de formulario
- `StarRating.tsx` — visualización de valoraciones

### `src/components/layout/`
- `Header.tsx` — logo, navegación, CTA WhatsApp
- `Footer.tsx` — links, redes sociales, legal
- `Nav.tsx` — menú de navegación

### `src/components/experiences/`
- `ExperienceCard.tsx` — card de experiencia para el catálogo
- `ExperienceGallery.tsx` — galería de imágenes en la ficha
- `BookingForm.tsx` — formulario de reserva
- `ReviewCard.tsx` — card de valoración

---

## Llamadas a la API

La API de Iván corre en `NEXT_PUBLIC_API_URL`. Endpoints que consume el frontend:

```
GET  /api/experiences          → lista de experiencias
GET  /api/experiences/:slug    → detalle de una experiencia
POST /api/bookings             → crear reserva
POST /api/payments/checkout    → iniciar pago Stripe
POST /api/contact              → formulario contacto
```

Crear en `src/lib/api.ts` el cliente axios con la base URL configurada.

---

## Contexto de negocio importante

- **Comisión:** 20€ fijos por reserva con el primer partner (no porcentaje)
- **Mercados principales:** España, Italia, UK, Alemania, EEUU. Italia es mercado clave en Barcelona — priorizar contenido en italiano.
- **Idiomas del MVP:** español + inglés. Italiano como siguiente prioridad.
- **Posicionamiento:** "Las mejores experiencias seleccionadas de Barcelona y Cataluña" — calidad sobre cantidad
- **Sin límite de edad** en ningún segmento de cliente
- **WhatsApp Business** como canal principal de soporte en MVP — CTA visible en toda la web

---

## Plan de ejecución del frontend (10 fases)

### FASE 1 — Setup inicial *(1 sesión)*
- `npm install` — instalar todas las dependencias
- Crear `.env.local` desde `.env.example` y configurar variables
- Verificar que arranca: `npm run dev` → localhost:3000
- Instalar extensiones VS Code: ESLint, Tailwind CSS IntelliSense, TypeScript
- Revisar y entender la estructura de carpetas antes de empezar

### FASE 2 — Componentes UI base *(2-3 sesiones)*
- `Button.tsx` — variantes: primary (azul), secondary (outline), ghost
- `Card.tsx` — card base con sombra y efecto hover
- `Badge.tsx` — etiquetas de categoría: Gastronomía, Aventura, Premium...
- `Input.tsx` + `Select.tsx` — campos del formulario con validación visual
- `StarRating.tsx` — visualización de valoraciones 1-5 estrellas
- `ImageWithFallback.tsx` — wrapper de imagen con placeholder

### FASE 3 — Layout: Header y Footer *(1-2 sesiones)*
- `Header.tsx` — logo (placeholder), navegación, botón CTA WhatsApp
- Header responsive — menú hamburguesa para móvil
- `Footer.tsx` — links, redes sociales, aviso legal
- Integrar Header y Footer en `layout.tsx`

### FASE 4 — Landing principal *(2-3 sesiones)*
- Sección Hero — título, subtítulo, CTA "Ver experiencias" + imagen Barcelona
- Sección Categorías — grid de 6 categorías con icono
- Experiencias destacadas — grid de cards con las 8 experiencias
- Sección Reviews — testimonios de clientes
- Sección FAQ — preguntas frecuentes
- CTA WhatsApp — botón flotante o sección fija

### FASE 5 — Catálogo de experiencias *(1-2 sesiones)*
- Filtros por categoría — botones para filtrar el listado
- Grid de ExperienceCards — imagen, título, duración, precio, rating, CTA
- Metadatos SEO de la página

### FASE 6 — Ficha individual de experiencia *(2-3 sesiones)*
- Galería de imágenes — imagen principal + miniaturas
- Info completa — título, descripción, duración, idiomas, punto de encuentro, precio
- Reviews de la experiencia
- Widget de reserva — selector fecha, nº personas, botón "Reservar ahora"
- Metadatos SEO dinámicos por experiencia (crítico para posicionamiento)

### FASE 7 — Formulario de reserva + Stripe *(2-3 sesiones)*
- Formulario: nombre, email, WhatsApp, fecha, número de personas
- Validación de campos en tiempo real
- Integración Stripe Checkout
- Página de confirmación tras pago exitoso
- Email de confirmación automático (gestiona Iván desde la API)

### FASE 8 — Páginas secundarias *(1-2 sesiones)*
- About `/about` — historia, equipo, valores
- Contact `/contact` — formulario + WhatsApp + email
- Aviso legal y política de privacidad (generar con iubenda.com)

### FASE 9 — SEO y optimización *(1-2 sesiones)*
- `sitemap.xml` dinámico — Next.js lo genera automáticamente
- `robots.txt`
- Open Graph images — preview al compartir en redes y WhatsApp
- Responsive completo — revisar todas las páginas en móvil
- Optimización de imágenes con `next/image`, lazy loading
- Instalar GA4 + Microsoft Clarity

### FASE 10 — Preparación para lanzamiento *(1 sesión)*
- Conectar dominio definitivo (cuando se decida el nombre)
- Deploy en AWS EC2
- Certificado SSL con Let's Encrypt (obligatorio para Stripe)
- Cambiar URL de localhost:4000 a la URL del servidor de producción
- Prueba completa de una reserva real de principio a fin

---

**Tiempo estimado total:** 4-6 semanas a ritmo constante.

---

## Estado de la Fase 1 — Completada ✓

- `npm install` ejecutado — dependencias instaladas correctamente
- `.env.local` creado con las variables de entorno configuradas
- `next.config.mjs` configurado (rewrites a la API, imágenes S3)
- `npm run dev` verificado — proyecto arranca en localhost:3000
- Carpeta `.next/` generada — compilación correcta

**Siguiente fase:** Fase 2 — Componentes UI base

---

## Reglas del proyecto

- **Calidad sobre velocidad** en el código, pero **velocidad sobre perfección** en el MVP
- SEO es crítico — cada página de experiencia debe tener metadatos optimizados
- El nombre definitivo de la empresa está **pendiente de decidir** — usar "Santy's Tours Barcelona" como placeholder
- La identidad visual (logo, colores definitivos) está **pendiente** — los colores actuales son provisionales
