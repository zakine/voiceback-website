import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ToolsSection from '@/components/ToolsSection';
import EarlyAccessSection from '@/components/EarlyAccessSection';
import PricingSection from '@/components/PricingSection';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';
import BackgroundGrid from '@/components/BackgroundGrid';

export default function Home() {
  return (
    <>
      {/* Background elements */}
      <BackgroundGrid />

      {/* Main content */}
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <TrustStrip />
        <FeaturesSection />
        <HowItWorksSection />
        <ToolsSection />
        <EarlyAccessSection />
        <PricingSection />
        <DownloadCTA />
      </main>

      <Footer />
    </>
  );
}
