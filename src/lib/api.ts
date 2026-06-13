import axios from 'axios'
import type { Experience, Booking, BookingFormData } from '@/types'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10_000,
})

export async function getExperiences(): Promise<Experience[]> {
  const { data } = await api.get<Experience[]>('/api/experiences')
  return data
}

export async function getExperience(slug: string): Promise<Experience> {
  const { data } = await api.get<Experience>(`/api/experiences/${slug}`)
  return data
}

export async function createBooking(
  payload: BookingFormData & { experienceId: number },
): Promise<Booking> {
  const { data } = await api.post<Booking>('/api/bookings', payload)
  return data
}

export async function createPaymentSession(
  bookingId: number,
): Promise<{ url: string }> {
  const { data } = await api.post<{ url: string }>('/api/payments/checkout', { bookingId })
  return data
}

export async function sendContactForm(payload: {
  name: string
  email: string
  message: string
}): Promise<void> {
  await api.post('/api/contact', payload)
}

export default api
