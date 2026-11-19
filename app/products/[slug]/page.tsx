
import { Suspense } from "react";
import type { Metadata } from "next";

import { ProductDetails } from "@/features/products/components/product-details";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug.replace(/-/g, " ")} | Ishaalya`,
    description: `Explore ${slug.replace(/-/g, " ")} at Ishaalya.`,
  };
}

function ProductDetailsSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading product"
      className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className="aspect-[3/4] animate-pulse bg-surface-container-high" />

      <div className="space-y-6">
        <div className="h-4 w-24 animate-pulse bg-surface-container-high" />

        <div className="h-12 w-3/4 animate-pulse bg-surface-container-high" />

        <div className="h-8 w-36 animate-pulse bg-surface-container-high" />

        <div className="h-24 w-full animate-pulse bg-surface-container-high" />
      </div>
    </div>
  );
}

async function ProductPageContent({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  return <ProductDetails slug={slug} />;
}

export default function ProductPage({
  params,
}: ProductPageProps) {
 return (
  <main className="min-h-screen bg-surface">
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductPageContent params={params} />
    </Suspense>
  </main>
);
}
