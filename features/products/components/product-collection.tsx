
"use client";

import { useMemo, useState } from "react";

import { ProductGrid } from "./product-grid";
import { useProducts } from "../hooks/use-products";
import { mapProductToCard } from "../lib/product.mapper";

type Filter =
  | "all"
  | "unstitched-suits"
  | "suit-sets"
  | "stitched-suits"
  | "new-arrivals"
  | "best-sellers";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Unstitched Suits", value: "unstitched-suits" },
  { label: "Suit Sets", value: "suit-sets" },
  { label: "Stitched Suits", value: "stitched-suits" },
  { label: "New Arrivals", value: "new-arrivals" },
  { label: "Best Sellers", value: "best-sellers" },
];

export function ProductCollection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const { data, isPending, isError, refetch } = useProducts();

  const products = useMemo(() => {
    const activeProducts = (data ?? []).filter(
      (product) => product.status === "ACTIVE"
    );

    const filteredProducts = activeProducts.filter((product) => {
      switch (activeFilter) {
        case "all":
          return true;

        case "new-arrivals":
          return product.isNewArrival;

        case "best-sellers":
          // Temporary: featured products until the backend
          // exposes actual bestseller information.
          return product.isFeatured;

        default:
          return product.category.slug === activeFilter;
      }
    });

    return filteredProducts.map(mapProductToCard);
  }, [data, activeFilter]);

  return (
    <>
      <div
        className="mb-space-2xl flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label="Filter products"
      >
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={isActive}
              className={[
                "filter-tab px-5 py-2",
                "text-label-md font-label-md",
                "uppercase tracking-[0.14em] transition-all",
                isActive
                  ? "bg-primary text-on-primary"
                  : "bg-surface text-on-surface hover:bg-surface-container-high",
              ].join(" ")}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {isPending ? (
        <div
          className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-4"
          role="status"
          aria-label="Loading products"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[3/4] animate-pulse bg-surface-container-high"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center">
          <p className="mb-4 text-on-surface-variant">
            Unable to load products.
          </p>

          <button
            type="button"
            onClick={() => refetch()}
            className="bg-primary px-5 py-2 text-on-primary"
          >
            Try Again
          </button>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </>
  );
}
