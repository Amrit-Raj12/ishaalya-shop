
import Image from "next/image";

import type { Category } from "@/features/categories/types/category.types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden bg-surface-container">
      {category.imageUrl ? (
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-surface-container-high">
          <span className="font-serif text-xl text-primary">
            {category.name}
          </span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-serif text-2xl">
          {category.name}
        </h3>

        {category.description && (
          <p className="mt-2 line-clamp-2 text-sm text-white/80">
            {category.description}
          </p>
        )}
      </div>
    </article>
  );
}
