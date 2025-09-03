import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Fashion Collection"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-hero opacity-60" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            Minimal
            <br />
            <span className="text-luxury-gold">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
            Discover our curated collection of contemporary fashion pieces designed for the modern individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm">
              Explore Collection
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              View Bestsellers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};