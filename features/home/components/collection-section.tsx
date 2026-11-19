
import { ProductCollection } from "@/features/products/components/product-collection";

export function CollectionSection() {
  return (
    <section
      id="collection"
      className="w-full bg-surface-container-low py-space-3xl"
    >
      <div className="mx-auto max-w-7xl px-margin-mobile lg:px-margin">
        {/* Section heading */}
        <div className="mx-auto mb-space-xl max-w-2xl text-center">
          <span className="mb-1 block font-label-sm text-label-sm font-semibold uppercase tracking-[0.24em] text-secondary">
            Couture Vault
          </span>

          <h2 className="font-headline-lg text-headline-lg font-serif font-normal tracking-tight text-primary">
            Shop Our Collection
          </h2>

          <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
            Explore artisanal weaves, hand-dyed palettes, and pure silk
            textures created for bespoke tailoring.
          </p>
        </div>

        {/* Dynamic product filters and real API products */}
        <div className="mb-space-2xl">
          <ProductCollection />
        </div>

        {/* Collection navigation — enable when listing route exists */}
        <div className="text-center">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 bg-primary px-10 py-4 font-label-md text-label-md uppercase tracking-[0.18em] text-surface shadow-md transition-all hover:bg-primary-container"
          >
            <span>Explore Collections</span>

            <span className="material-symbols-outlined text-sm text-secondary-fixed">
              east
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
