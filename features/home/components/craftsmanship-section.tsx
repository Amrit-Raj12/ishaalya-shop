export function CraftsmanshipSection() {
  return (
<section className="w-full py-space-3xl bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
                <div className="lg:col-span-6 relative">
                  <div className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden shadow-2xl">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      data-alt="Artisan hands weaving shimmering antique gold zardozi zari threads onto fine handloom silk on a wooden traditional Indian loom in a warm artisanal studio."
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDYDw4b83eNonE9dCytNCk71WnVEJdO3ngGwthjTSGMo-0qmnwZQ7WN6oNbep0Obf0bvWsLZbJCi6BwCVVE4H-oAkwUDXSEaqiwHIdww4iutDiUDPm6m2Ky6fw2OrFpYLjADemmz4stzRDvCLNz1LThLuBeA7u_x6wpcpVbOr1c-pCUt9Goo2jgk-Sp92GKptzi2NKpEzkftfxjxvUJXIU_-EWNYsyWjbqbRZ6Eajt1qd2OLc0W2U-')",
                      }}
                    ></div>
                  </div>

                  <div className="absolute -bottom-8 -right-4 md:right-8 bg-surface-container-lowest p-space-md md:p-space-lg shadow-xl max-w-xs">
                    <div className="flex items-center gap-2 text-secondary mb-1">
                      <span className="material-symbols-outlined text-base">
                        {"verified"}
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest">
                        {"Handloom Certified"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                      {
                        '\n              "Each ensemble passes through the deft hands of at least 8 master craftsmen before reaching your wardrobe."\n            '
                      }
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:pl-space-xl mt-space-xl lg:mt-0">
                  <div className="inline-flex items-center gap-2 text-secondary mb-space-xs">
                    <span className="w-6 h-0.5 bg-secondary"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.24em] font-semibold">
                      {"Heritage Atelier"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-serif font-normal tracking-tight mb-space-md">
                    {"\n            Rooted in Tradition. "}
                    <br />
                    <span className="italic font-display text-secondary">
                      {"Designed for You."}
                    </span>
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant font-normal leading-relaxed mb-space-md">
                    {
                      "\n            At ISHAALYA, we celebrate the enduring romance of Indian craftsmanship. Every yard of unstitched fabric tells an ancestry tale—from the heritage looms of Varanasi and Chanderi to the intricate needlecraft of Lucknow and Kashmir.\n          "
                    }
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-xl">
                    {
                      "\n            We reject mass production in favor of mindful curation, honoring authentic weaves that drape effortlessly and allow you the bespoke liberty to sculpt garments true to your personal sovereignty.\n          "
                    }
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mb-space-xl pt-space-md">
                    <div className="p-space-md bg-surface-container-low">
                      <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                        {"gesture"}
                      </span>
                      <h4 className="font-title-md text-title-md text-primary font-serif font-semibold">
                        {"Pure Weaves"}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        {
                          "100% pure silk and cotton with certified authenticity seals."
                        }
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low">
                      <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                        {"spa"}
                      </span>
                      <h4 className="font-title-md text-title-md text-primary font-serif font-semibold">
                        {"Zero Synthetics"}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        {
                          "Naturally breathable fibers dyed using gentle botanical pigments."
                        }
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low">
                      <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                        {"diversity_3"}
                      </span>
                      <h4 className="font-title-md text-title-md text-primary font-serif font-semibold">
                        {"Fair Patronage"}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        {
                          "Direct livelihood sustenance to over 150 weaver families across India."
                        }
                      </p>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-surface font-label-md text-label-md uppercase tracking-[0.16em] hover:bg-tertiary-container transition-all"
                    href="#"
                  >
                    <span>{"Our Story & Artisans"}</span>
                    <span className="material-symbols-outlined ml-2 text-sm text-secondary-fixed">
                      {"arrow_forward"}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
  );
}
