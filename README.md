# santys-tours-web — Frontend

Frontend de Santy's Tours Barcelona. Desarrollado por Santiago (Dev).

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing principal |
| `/experiences` | Catálogo de experiencias |
| `/experiences/[slug]` | Ficha individual de experiencia |
| `/booking/[slug]` | Formulario de reserva |
| `/booking/confirmation` | Confirmación de reserva |
| `/about` | Sobre nosotros |
| `/contact` | Contacto |
| `/blog` | Blog SEO |
| `/blog/[slug]` | Artículo individual |

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local
# Editar .env.local con la URL de la API

# Arrancar en desarrollo
npm run dev
```

La web arranca en `http://localhost:3000`.
La API (repo separado) debe estar corriendo en `http://localhost:4000`.

## Estructura

```
src/
├── app/            # Páginas (App Router de Next.js)
├── components/
│   ├── ui/         # Botones, cards, inputs reutilizables
│   ├── layout/     # Header, Footer, Nav
│   └── experiences/# Componentes específicos de experiencias
├── lib/            # Llamadas a la API, utilidades
├── hooks/          # Custom React hooks
├── types/          # Tipos TypeScript
└── styles/         # CSS global
```

## Relación con el backend

Este repo solo contiene el frontend. Los datos vienen de la API (repo `The-Santy-s-Tour-s-Backend`).
Para que funcione en local, debe tener el backend corriendo en `http://localhost:4000`.
