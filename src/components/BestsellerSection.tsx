import { ProductCard } from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const bestsellerProducts = [
  {
    id: "1",
    name: "Essential Black Tee",
    price: 29,
    originalPrice: 45,
    image: product1,
    isBestseller: true,
    isOnSale: true,
  },
  {
    id: "2", 
    name: "Luxury Blazer",
    price: 189,
    image: product2,
    isBestseller: true,
  },
  {
    id: "3",
    name: "Minimal Dress",
    price: 89,
    originalPrice: 120,
    image: product3,
    isBestseller: true,
    isOnSale: true,
  },
];

export const BestsellerSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
            Bestsellers
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Discover our most loved pieces, carefully selected by our customers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bestsellerProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};