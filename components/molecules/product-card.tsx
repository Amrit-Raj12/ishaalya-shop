import { Price } from "@/components/atoms/price";
import { ProductBadge } from "@/components/atoms/product-badge";
import Link from "next/link";

export type ProductCardData = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  price: number;
  originalPrice?: number | null;
  description?: string;
  badge?: string;

  categoryId: string;
  categorySlug: string;
  isFeatured: boolean;
  isNewArrival: boolean;
};

type ProductCardProps = {
  product: ProductCardData;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col bg-surface-container-lowest p-3 shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
        <div
          role="img"
          aria-label={product.name}
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url("${product.imageUrl}")`,
          }}
        />

        {product.badge && <ProductBadge label={product.badge} />}
      </div>

      <div className="flex flex-1 flex-col justify-between pt-3 pb-1">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="mb-1 font-display text-title-lg text-primary">
              {product.name}
            </h3>
          </Link>

          {product.description && (
            <p className="mb-2 line-clamp-2 text-body-sm text-on-surface-variant">
              {product.description}
            </p>
          )}
        </div>

        <Price
          amount={product.price}
          originalAmount={product.originalPrice}
          className="mt-2"
        />
      </div>
    </article>
  );
}