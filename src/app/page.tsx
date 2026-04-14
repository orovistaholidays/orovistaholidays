import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Destinations } from "@/components/sections/Destinations";
import { About } from "@/components/sections/About";
import { MapCTA } from "@/components/sections/MapCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import { ReadyToExplore } from "@/components/sections/ReadyToExplore";
import { Team } from "@/components/sections/Team";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { Packages } from "@/components/sections/Packages";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { OrovistaAdvantage } from "@/components/sections/OrovistaAdvantage";
import { RealJourneys } from "@/components/sections/RealJourneys";
import { FloatingCTA } from "@/components/sections/FloatingCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Team />
        <ServiceCategories />
        <Packages />
          <OrovistaAdvantage />
        <GlobalPresence />
      
        <RealJourneys />
      
        <FAQ />
        <ReadyToExplore />
        <FloatingCTA />
      </main>
      <Footer />
    </div>
  );
}
