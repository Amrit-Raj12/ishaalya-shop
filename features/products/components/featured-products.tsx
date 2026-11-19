
"use client";

import { useMemo } from "react";

import { ProductGrid } from "./product-grid";
import { useProducts } from "../hooks/use-products";
import { mapProductToCard } from "../lib/product.mapper";

export function FeaturedProducts() {
  const { data, isPending, isError, refetch } = useProducts();

  const products = useMemo(() => {
    return (data ?? [])
      .filter(
        (product) =>
          product.status === "ACTIVE" &&
          product.isFeatured
      )
      .slice(0, 4)
      .map(mapProductToCard);
  }, [data]);

  if (isPending) {
    return (
      <div
        className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4"
        role="status"
        aria-label="Loading featured products"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="aspect-[3/4] animate-pulse bg-surface-container-high"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-12 text-center">
        <p className="mb-4 text-on-surface-variant">
          Unable to load products.
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="px-5 py-2 bg-primary text-on-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return <ProductGrid products={products} />;
}
