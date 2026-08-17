import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseProcess from "@/components/home/WhyChooseProcess";
import Testimonials from "@/components/home/Testimonials";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseProcess />
      <Testimonials />
      <CtaBand />
    </>
  );
}