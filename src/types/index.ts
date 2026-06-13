// ─── EXPERIENCIAS ─────────────────────────────────────────────────────────────

export interface Experience {
  id: number
  slug: string
  title: string
  description: string
  shortDescription: string
  price: number          // precio al público
  commission: number     // comisión fija (ej: 20€)
  duration: string       // "3 horas", "Día completo"
  languages: string[]    // ["es", "en", "it"]
  maxParticipants: number
  meetingPoint: string
  images: string[]       // URLs S3/CloudFront
  category: ExperienceCategory
  partner: Partner
  rating: number
  reviewCount: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export type ExperienceCategory =
  | 'gastronomia'
  | 'cultura'
  | 'aventura'
  | 'nocturna'
  | 'premium'
  | 'naturaleza'

// ─── PARTNER ──────────────────────────────────────────────────────────────────

export interface Partner {
  id: number
  name: string
  email: string
  phone: string
  commissionType: 'fixed' | 'percentage'
  commissionValue: number
  isActive: boolean
}

// ─── RESERVAS ─────────────────────────────────────────────────────────────────

export interface Booking {
  id: number
  bookingRef: string     // referencia única, ej: "ST-2026-001"
  experience: Experience
  customerName: string
  customerEmail: string
  customerWhatsapp: string
  date: string
  participants: number
  totalAmount: number
  status: BookingStatus
  paymentStatus: PaymentStatus
  stripePaymentId?: string
  createdAt: string
}

export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed'
  | 'refunded'

export type PaymentStatus =
  | 'pending'
  | 'paid'
  | 'failed'
  | 'refunded'

// ─── FORMULARIO DE RESERVA ────────────────────────────────────────────────────

export interface BookingFormData {
  customerName: string
  customerEmail: string
  customerWhatsapp: string
  date: string
  participants: number
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────

export interface Review {
  id: number
  experienceId: number
  bookingId: number
  customerName: string
  rating: number         // 1-5
  comment: string
  createdAt: string
}
