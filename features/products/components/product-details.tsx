
"use client";

import Link from "next/link";

import { useProduct } from "../hooks/use-product";
import { ProductGallery } from "./product-gallery";
import { ProductInformation } from "./product-information";

interface ProductDetailsProps {
  slug: string;
}

export function ProductDetails({ slug }: ProductDetailsProps) {
  const {
    data: product,
    isPending,
    isError,
    refetch,
  } = useProduct(slug);

  // Loading state
  if (isPending) {
    return (
      <section
        role="status"
        aria-label="Loading product details"
        className="mx-auto w-full max-w-7xl px-margin-mobile py-space-xl lg:px-margin lg:py-space-2xl"
      >
        <div className="grid grid-cols-1 items-start gap-y-space-xl lg:grid-cols-12 lg:gap-x-space-2xl">
          {/* Gallery skeleton */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-12">
              <div className="order-2 flex gap-space-sm md:order-1 md:col-span-2 md:flex-col">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-20 w-16 shrink-0 animate-pulse rounded bg-surface-container-high md:h-24 md:w-full"
                  />
                ))}
              </div>

              <div className="order-1 aspect-[3/4] animate-pulse rounded-lg bg-surface-container-high md:order-2 md:col-span-10" />
            </div>
          </div>

          {/* Product information skeleton */}
          <div className="space-y-space-md lg:col-span-5">
            <div className="h-4 w-32 animate-pulse rounded bg-surface-container-high" />
            <div className="h-12 w-3/4 animate-pulse rounded bg-surface-container-high" />
            <div className="h-6 w-full animate-pulse rounded bg-surface-container-high" />
            <div className="h-24 animate-pulse rounded bg-surface-container-high" />
            <div className="h-20 animate-pulse rounded bg-surface-container-high" />
            <div className="h-12 animate-pulse rounded bg-surface-container-high" />
          </div>
        </div>
      </section>
    );
  }

  // API error state
  if (isError) {
    return (
      <section className="mx-auto max-w-7xl px-margin-mobile py-space-3xl text-center lg:px-margin">
        <span className="material-symbols-outlined mb-4 text-5xl text-secondary">
          error_outline
        </span>

        <h1 className="mb-space-sm font-headline-md text-headline-md font-serif text-primary">
          Unable to Load Product
        </h1>

        <p className="mb-space-lg font-body-md text-body-md text-on-surface-variant">
          We couldn't retrieve the product details. Please try again.
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="inline-flex items-center justify-center gap-2 rounded bg-primary px-8 py-3 font-label-md text-label-md uppercase tracking-[0.14em] text-on-primary transition-colors hover:bg-primary-container"
        >
          <span className="material-symbols-outlined text-lg">
            refresh
          </span>
          Try Again
        </button>
      </section>
    );
  }

  // Product unavailable
  if (!product || product.status !== "ACTIVE") {
    return (
      <section className="mx-auto max-w-7xl px-margin-mobile py-space-3xl text-center lg:px-margin">
        <span className="material-symbols-outlined mb-4 text-5xl text-secondary">
          inventory_2
        </span>

        <h1 className="mb-space-sm font-headline-md text-headline-md font-serif text-primary">
          Product Unavailable
        </h1>

        <p className="mb-space-lg font-body-md text-body-md text-on-surface-variant">
          This product is currently unavailable in our collection.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-label-md text-label-md uppercase tracking-[0.14em] text-on-primary transition-colors hover:bg-primary-container"
        >
          <span className="material-symbols-outlined text-lg">
            arrow_back
          </span>
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <div className="w-full bg-surface">
      {/* Breadcrumb navigation */}
      <section className="w-full border-b border-secondary/15 bg-surface-container-low/60 py-space-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-margin-mobile md:flex-row md:items-center md:justify-between lg:px-margin">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant"
          >
            <Link
              href="/"
              className="transition-colors hover:text-primary"
            >
              Home
            </Link>

            <span className="font-serif text-secondary/50">
              ❖
            </span>

            <Link
              href="/#collection"
              className="transition-colors hover:text-primary"
            >
              Collections
            </Link>

            <span className="font-serif text-secondary/50">
              ❖
            </span>

            <span>{product.category.name}</span>

            <span className="font-serif text-secondary/50">
              ❖
            </span>

            <span
              aria-current="page"
              className="font-semibold tracking-wider text-primary"
            >
              {product.name}
            </span>
          </nav>

          {product.isNewArrival && (
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
              <span className="material-symbols-outlined text-[16px]">
                new_releases
              </span>
              New Arrival
            </span>
          )}
        </div>
      </section>

      {/* Main product stage — Stitch 7:5 layout */}
      <section className="mx-auto w-full max-w-7xl px-margin-mobile py-space-xl lg:px-margin lg:py-space-2xl">
        <div className="grid grid-cols-1 items-start gap-y-space-xl lg:grid-cols-12 lg:gap-x-space-2xl">
          {/* Left: Editorial product gallery */}
          <div className="min-w-0 lg:col-span-7">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          {/* Right: Product information */}
          <div className="min-w-0 lg:col-span-5">
            <ProductInformation product={product} />
          </div>
        </div>
      </section>

      {/* Decorative Stitch divider */}
      <div className="mx-auto my-space-lg flex w-full max-w-7xl items-center justify-center px-margin-mobile lg:px-margin">
        <div className="relative flex h-px w-full items-center justify-center bg-secondary/20">
          <span className="bg-surface px-4 font-serif text-base text-secondary">
            ❖ ⊰ ❦ ⊱ ❖
          </span>
        </div>
      </div>
    </div>
  );
}
