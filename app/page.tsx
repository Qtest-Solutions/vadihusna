import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import MessagesSection from "@/components/MessagesSection";
import FacilitiesPreview from "@/components/FacilitiesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vadi Husna Public School | Excellence through Education",
  description:
    "Welcome to Vadi Husna Public School, Elettil. A premier CBSE institution dedicated to academic excellence, holistic development, and nurturing future leaders since 1996.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <FacilitiesPreview />
      <MessagesSection />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}
