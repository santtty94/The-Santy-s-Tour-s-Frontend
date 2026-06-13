import HeroSection from '@/components/home/HeroSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedExperiencesSection from '@/components/home/FeaturedExperiencesSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import FAQSection from '@/components/home/FAQSection'
import WhatsAppFloat from '@/components/home/WhatsAppFloat'
import { MOCK_EXPERIENCES, MOCK_REVIEWS } from '@/lib/mock-data'
// TODO: Fase 5+ → reemplazar por: import { getExperiences } from '@/lib/api'

export default async function HomePage() {
  // TODO: const experiences = await getExperiences()
  const experiences = MOCK_EXPERIENCES
  const reviews     = MOCK_REVIEWS

  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedExperiencesSection experiences={experiences} />
      <ReviewsSection reviews={reviews} />
      <FAQSection />
      <WhatsAppFloat />
    </>
  )
}
