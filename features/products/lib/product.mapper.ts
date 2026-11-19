
import type { Product } from "../types/product.types";
import type { ProductCardData } from "@/components/molecules/product-card";

function getPrimaryImage(product: Product): string {
  const primaryImage = product.images.find(
    (image) => image.isPrimary
  );

  const firstImage = [...product.images].sort(
    (a, b) => a.sortOrder - b.sortOrder
  )[0];

  return primaryImage?.url ?? firstImage?.url ?? "";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function mapProductToCard(
  product: Product
): ProductCardData {
  return {
    categoryId: product.categoryId,
    categorySlug: product.category.slug,
    isFeatured: product.isFeatured,
    isNewArrival: product.isNewArrival,
    id: product.id,
    name: product.name,
    slug: product.slug,
    imageUrl: getPrimaryImage(product),
    price: Number(product.basePrice),
    originalPrice: product.comparePrice
      ? Number(product.comparePrice)
      : null,
    description: product.includes || (
      product.description
        ? stripHtml(product.description)
        : undefined
    ),
    badge: product.isNewArrival
      ? "New Arrival"
      : product.isFeatured
        ? "Featured"
        : undefined,
  };
}
