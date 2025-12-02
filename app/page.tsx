import { Navigation } from '@/components/navigation';
import { BackgroundAnimation } from '@/components/background-animation';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ExperienceSection } from '@/components/sections/experience';
import { ServicesSection } from '@/components/sections/services';
import { PortfolioSection } from '@/components/sections/portfolio';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="relative">
      <BackgroundAnimation />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  );
}
