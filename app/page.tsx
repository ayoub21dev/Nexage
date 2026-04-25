import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="home" className="relative overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Footer />
    </main>
  );
}
