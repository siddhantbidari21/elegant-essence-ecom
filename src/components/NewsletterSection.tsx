import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
            Stay in Style
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-background border-border focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button variant="default" size="default">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 font-light">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};