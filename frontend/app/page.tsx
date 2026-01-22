import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/FAQ";
import MouseFollower from "@/components/MouseFollower";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Workflow />
      <FAQ />
      <CTA />
      <Footer />
      <MouseFollower />
    </div>
  );
}
