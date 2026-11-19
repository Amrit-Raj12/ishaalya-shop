
"use client";

import { useMemo, useState } from "react";
import { Price } from "@/components/atoms/price";
import type { Product } from "../types/product.types";

interface ProductInformationProps {
  product: Product;
}

export function ProductInformation({
  product,
}: ProductInformationProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null
  );
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [openSection, setOpenSection] = useState<string | null>(
    "description"
  );

  const selectedVariant = useMemo(
    () =>
      product.variants.find(
        (variant) => variant.id === selectedVariantId
      ) ?? product.variants[0],
    [product.variants, selectedVariantId]
  );

  const currentPrice = Number(
    selectedVariant?.price ?? product.basePrice
  );

  const comparePrice = product.comparePrice
    ? Number(product.comparePrice)
    : null;

  const discount =
    comparePrice && comparePrice > currentPrice
      ? Math.round(((comparePrice - currentPrice) / comparePrice) * 100)
      : 0;

  const colors = useMemo(() => {
    const unique = new Map<
      string,
      { name: string; code: string | null; variantId: string }
    >();

    for (const variant of product.variants) {
      if (!variant.color) continue;
      const key = variant.color.trim().toLowerCase();

      if (!unique.has(key)) {
        unique.set(key, {
          name: variant.color,
          code: variant.colorCode,
          variantId: variant.id,
        });
      }
    }

    return [...unique.values()];
  }, [product.variants]);

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  const toggleSection = (section: string) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <div className="flex flex-col gap-5 text-on-surface">
      {/* Atelier label and product title */}
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-secondary">
            Atelier Collection
          </span>

          {product.isNewArrival && (
            <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary">
              New Arrival
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl leading-[1.15] tracking-tight text-primary lg:text-4xl">
          {product.name}
        </h1>

        <p className="mt-3 text-xs uppercase tracking-[0.12em] text-on-surface-variant">
          {product.brand ?? product.category.name}
          {" · "}
          {product.category.name}
        </p>
      </div>

      {/* Luxury price panel */}
      <div className="rounded-lg border border-secondary/15 bg-surface-container-low p-5">
        <div className="flex flex-wrap items-center gap-3">
          <Price
            amount={currentPrice}
            originalAmount={comparePrice}
          />
        </div>

        {discount > 0 && (
          <p className="mt-2 text-xs text-on-surface-variant">
            You save {formatMoney(comparePrice! - currentPrice)}
            {" "}({discount}% off)
          </p>
        )}

        <p className="mt-3 text-[11px] text-on-surface-variant">
          Final taxes and shipping charges, if applicable, are
          calculated during checkout.
        </p>
      </div>

      {/* Real color variants */}
      {colors.length > 0 && (
        <div className="border-b border-secondary/15 pb-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
              Colourway
            </h2>

            <span className="text-xs text-secondary">
              {selectedVariant?.color}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {colors.map((color) => {
              const selected =
                selectedVariant?.color?.toLowerCase() ===
                color.name.toLowerCase();

              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedVariantId(color.variantId)}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                  aria-pressed={selected}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border p-1 transition-all ${
                    selected
                      ? "border-primary ring-1 ring-primary"
                      : "border-secondary/20 hover:border-primary"
                  }`}
                >
                  <span
                    className="h-full w-full rounded-full border border-black/10"
                    style={{
                      backgroundColor: color.code || "#d5d0c8",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Size and variant selection */}
      {product.variants.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
              Select Size / Variant
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => {
              const selected = selectedVariant?.id === variant.id;

              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariantId(variant.id)}
                  aria-pressed={selected}
                  className={`min-w-16 border px-4 py-2 text-xs font-semibold transition-colors ${
                    selected
                      ? "border-primary bg-primary text-on-primary"
                      : "border-secondary/20 bg-surface hover:border-primary"
                  }`}
                >
                  {[variant.size, variant.color]
                    .filter(Boolean)
                    .join(" / ") || "Default"}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Product fabric / inclusion specifications */}
      <div className="rounded-lg border border-secondary/20 bg-surface-container-lowest">
        <div className="flex items-center justify-between border-b border-secondary/15 px-4 py-3">
          <h2 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            <span className="material-symbols-outlined text-base text-secondary">
              texture
            </span>
            Atelier Specifications
          </h2>

          <span className="text-[10px] uppercase tracking-widest text-secondary">
            Product Details
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 text-xs">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-wider text-secondary">
              Category
            </p>
            <p className="text-primary">{product.category.name}</p>
          </div>

          <div>
            <p className="mb-1 text-[10px] uppercase tracking-wider text-secondary">
              Brand
            </p>
            <p className="text-primary">{product.brand ?? "Not specified"}</p>
          </div>

          {selectedVariant?.size && (
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-wider text-secondary">
                Size
              </p>
              <p className="text-primary">{selectedVariant.size}</p>
            </div>
          )}

          {selectedVariant?.color && (
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-wider text-secondary">
                Colour
              </p>
              <p className="text-primary">{selectedVariant.color}</p>
            </div>
          )}

          {product.includes && (
            <div className="col-span-2 border-t border-secondary/15 pt-3">
              <p className="mb-1 text-[10px] uppercase tracking-wider text-secondary">
                What's Included
              </p>
              <p className="leading-6 text-primary">{product.includes}</p>
            </div>
          )}
        </div>
      </div>

      {/* Quantity and purchase actions */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex h-12 items-center border border-secondary/25">
            <button
              type="button"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="flex h-full w-10 items-center justify-center text-primary disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-lg">
                remove
              </span>
            </button>

            <output className="w-8 text-center text-sm font-semibold">
              {quantity}
            </output>

            <button
              type="button"
              onClick={() => setQuantity((value) => value + 1)}
              aria-label="Increase quantity"
              className="flex h-full w-10 items-center justify-center text-primary"
            >
              <span className="material-symbols-outlined text-lg">
                add
              </span>
            </button>
          </div>

          <button
            type="button"
            disabled
            title="Cart integration coming next"
            className="flex h-12 flex-1 items-center justify-center gap-2 bg-primary px-3 text-[11px] font-bold uppercase tracking-wider text-on-primary opacity-60"
          >
            <span className="material-symbols-outlined text-lg">
              shopping_bag
            </span>
            Add to Atelier Bag
          </button>
        </div>

        <button
          type="button"
          disabled
          title="Checkout integration coming next"
          className="flex h-12 w-full items-center justify-center gap-2 bg-secondary px-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white opacity-60"
        >
          <span className="material-symbols-outlined text-lg">
            bolt
          </span>
          Buy It Now
        </button>

        <p className="text-center text-[11px] text-on-surface-variant">
          Online purchase will be enabled after cart and checkout integration.
        </p>
      </div>

      {/* Delivery availability */}
      <div className="rounded-lg border border-secondary/20 bg-surface-container-low p-4">
        <h2 className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
          <span className="material-symbols-outlined text-base text-secondary">
            local_shipping
          </span>
          Check Atelier Courier Availability
        </h2>

        <div className="flex gap-2">
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={pincode}
            onChange={(event) =>
              setPincode(event.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter 6-digit PIN code"
            aria-label="Delivery PIN code"
            className="h-10 min-w-0 flex-1 border border-secondary/25 bg-surface px-3 text-sm text-primary outline-none focus:border-primary"
          />

          <button
            type="button"
            disabled
            title="Courier serviceability integration pending"
            className="bg-primary px-5 text-[11px] font-bold uppercase tracking-wider text-on-primary opacity-60"
          >
            Verify
          </button>
        </div>

        <p className="mt-3 text-[11px] leading-5 text-on-surface-variant">
          Delivery estimates will appear here once courier serviceability
          is connected.
        </p>
      </div>

      {/* Product details accordions */}
      <div className="divide-y divide-secondary/15 border-y border-secondary/15">
        {[
          {
            id: "description",
            title: "Atelier Story & Product Description",
            content: product.description,
            isHtml: true,
          },
          {
            id: "includes",
            title: "What Is Included",
            content: product.includes,
            isHtml: false,
          },
          {
            id: "care",
            title: "Fabric Care Instructions",
            content: product.washCare,
            isHtml: false,
          },
        ]
          .filter((section) => Boolean(section.content))
          .map((section) => {
            const expanded = openSection === section.id;

            return (
              <div key={section.id}>
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-serif text-sm font-semibold text-primary">
                    {section.title}
                  </span>

                  <span className="material-symbols-outlined text-lg text-secondary">
                    {expanded ? "remove" : "add"}
                  </span>
                </button>

                {expanded && (
                  <div className="pb-5 text-sm leading-7 text-on-surface-variant">
                    {section.isHtml ? (
                      <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: section.content ?? "",
                        }}
                      />
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
