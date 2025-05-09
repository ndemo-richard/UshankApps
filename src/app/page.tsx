
import Hero from "./components/Hero";
import AppSection from "./components/AppSection";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AppSection />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

