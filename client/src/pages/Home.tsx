import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import RiskDisclaimer from "@/components/RiskDisclaimer";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <TeamSection />
      <RiskDisclaimer />
      <Footer />
      <ChatBot />
    </div>
  );
}
