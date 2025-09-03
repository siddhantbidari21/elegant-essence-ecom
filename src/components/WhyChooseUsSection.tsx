import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on orders over $100 worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is processed securely and safely.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns on all purchases.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer service team is available around the clock.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            We're committed to providing you with an exceptional shopping experience from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-light mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};