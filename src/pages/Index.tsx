import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BestsellerSection } from "@/components/BestsellerSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BestsellerSection />
        <WhyChooseUsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
