import {
  ProductCard,
  type ProductCardData,
} from "@/components/molecules/product-card";

type ProductGridProps = {
  products: ProductCardData[];
};

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-12 text-center text-on-surface-variant">
        No products available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}