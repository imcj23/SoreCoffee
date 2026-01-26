import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Location from "../components/Location";
import TestimonialSection from "../components/Testimoni";
// import InstagramSection from "../components/InstagramSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Location />
      <TestimonialSection />
      {/*<InstagramSection/> */}
      <Footer />
    </>
  );
}
