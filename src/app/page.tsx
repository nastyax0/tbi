import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroWithCarousel from "@/components/hero";
import AboutUs from "@/components/aboutus";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import IncubateesSection from "@/components/incubatee";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithCarousel />
      <AboutUs />
      <Services />
      <Gallery />
      <IncubateesSection />
      <Footer />
    </>
  );
}
