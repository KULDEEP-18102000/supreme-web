import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProductSection from "@/components/sections/ProductSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
    <Header />
    <main className="relative">
      <HeroSection />
      <ProductSection /> 
      <ContactSection />
    </main>
    <Footer/>
    </>
  );
}