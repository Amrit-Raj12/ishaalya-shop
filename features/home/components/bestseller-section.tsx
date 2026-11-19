import { FeaturedProducts } from "@/features/products/components/featured-products";

export function BestsellerSection() {
  return (
<section className="w-full py-space-3xl bg-surface">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.24em] font-semibold block mb-1">
                    {"Connoisseur Choices"}
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-normal tracking-tight">
                    {"Most Loved by You"}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                    {
                      "\n            Discover the iconic silhouettes our patrons can't stop treasuring.\n          "
                    }
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    {"Showing 4 of 38 pieces"}
                  </span>
                </div>
              </div>
              <FeaturedProducts />
            </div>
          </section>
  );
}
