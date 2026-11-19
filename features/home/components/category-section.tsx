import { CategoryGrid } from "@/features/categories/components/category-grid";

export function CategorySection() {
  return (
<section className="w-full py-space-3xl bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="text-center max-w-xl mx-auto mb-space-2xl">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.24em] font-semibold block mb-1">
                  {"Tailored To Your Desires"}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-normal tracking-tight">
                  {"Find Your Signature Style"}
                </h2>
                <div className="w-12 h-0.5 bg-secondary/40 mx-auto mt-space-sm mb-space-xs"></div>
              </div>
              <CategoryGrid />
            </div>
          </section>
  );
}
