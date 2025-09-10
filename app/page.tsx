import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutPreview from '@/components/AboutPreview';
import FacilitiesPreview from '@/components/FacilitiesPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FacilitiesPreview />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}