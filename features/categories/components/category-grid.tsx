
"use client";

import { CategoryCard } from "@/components/molecules/category-card";
import { useCategories } from "../hooks/use-categories";

export function CategoryGrid() {
  const { data, isPending, isError, refetch } = useCategories();

  if (isPending) {
    return (
      <div
        role="status"
        aria-label="Loading categories"
        className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-3"
      >
        {Array.from({ length: 3 }).map((_, index) => (
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
          Unable to load categories.
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="bg-primary px-5 py-2 text-on-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <p className="py-12 text-center text-on-surface-variant">
        No categories available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 lg:grid-cols-3">
      {data.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}
