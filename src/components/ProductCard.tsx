import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isBestseller?: boolean;
  isOnSale?: boolean;
  isWishlisted?: boolean;
}

export const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  isBestseller,
  isOnSale,
  isWishlisted = false,
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-sm overflow-hidden shadow-card hover:shadow-float transition-all duration-300 animate-scale-in">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isBestseller && (
            <Badge variant="secondary" className="bg-luxury-gold text-luxury-gold-foreground">
              Bestseller
            </Badge>
          )}
          {isOnSale && (
            <Badge variant="destructive" className="bg-sale-red text-sale-red-foreground">
              Sale
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-white/90 hover:bg-white transition-all duration-200 ${
            isWishlisted ? 'text-sale-red' : 'text-muted-foreground hover:text-sale-red'
          }`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="sm" className="w-full backdrop-blur-sm bg-white/95 hover:bg-white">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-light text-lg mb-2 tracking-wide">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-light">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};