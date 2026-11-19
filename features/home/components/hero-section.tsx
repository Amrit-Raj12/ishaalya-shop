export function HeroSection() {
  return (
<section className="relative w-full -mt-28 min-h-[92vh] flex items-center overflow-hidden bg-primary-container">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center md:bg-[center_top_20%] scale-105 transition-transform duration-1000 ease-out"
                data-alt="Editorial portrait of an Indian woman wearing an ethereal ivory and antique gold unstitched anarkali suit standing inside an illuminated sandstone palace courtyard with soft architectural sunbeams filtering through scalloped arches, decorated with marigold pots."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2sspAPyYgbxeJw8JZGHuvXrv5BeB3Ca_jJNUAqhesD1Vlain8o7gnPb5XoG_Qx8g6DuuN2Co8YUiuuf2f_JVW0_GS_KFWyBLEr_Lnx9IiPAMwO4j4jN-ECexxVtywd2_2N6Q56u3ZzO2-vju5Bwco-oI9H8R_DqfD6Ce3ES1hf9xr8jpXLx45Pfo41xgJ6C3nHOvaCTV0xTKZG8aAqApymFG8zE0it0EToYmYbLWV4-tbAmqthWja')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-36 pb-space-2xl">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-space-sm px-3.5 py-1 rounded-full bg-secondary-fixed/15 backdrop-blur-md mb-space-md">
                  <span className="text-secondary-fixed text-label-sm tracking-[0.28em] uppercase font-label-sm font-semibold">
                    {"The Art of Timeless Dressing"}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
                  <span className="text-surface-variant text-label-sm uppercase tracking-widest font-label-sm">
                    {"Haute Couture 2025"}
                  </span>
                </div>
                <h1 className="font-display text-display text-surface font-normal tracking-tight mb-space-md leading-[1.08] drop-shadow-sm">
                  {"\n          Elegance, Woven "}
                  <br className="hidden sm:inline" />
                  <span className="italic font-display text-secondary-fixed">
                    {"in Every Thread"}
                  </span>
                </h1>
                <p className="font-body-lg text-body-lg text-surface-container-high font-normal max-w-xl mb-space-xl leading-relaxed">
                  {
                    "\n          Discover our curated collection of artisanal unstitched suits, pure zari weaves, and heirloom drapes thoughtfully envisioned for your bespoke silhouette.\n        "
                  }
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
                  <a
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-surface font-label-md text-label-md uppercase tracking-[0.16em] transition-all duration-300 hover:bg-tertiary-container shadow-xl group"
                    href="#collection"
                  >
                    <span>{"Shop Suits"}</span>
                    <span className="material-symbols-outlined ml-2 text-secondary-fixed transition-transform group-hover:translate-x-1">
                      {"arrow_forward"}
                    </span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center px-8 py-4 bg-surface/10 backdrop-blur-md text-surface font-label-md text-label-md uppercase tracking-[0.16em] transition-all duration-300 hover:bg-surface/20"
                    href="#occasion"
                  >
                    <span>{"Explore Collection"}</span>
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-space-md pt-space-xl mt-space-xl max-w-lg">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-secondary-fixed block font-serif">
                      {"100%"}
                    </span>
                    <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider block mt-0.5">
                      {"Pure Handloom Silk"}
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-secondary-fixed block font-serif">
                      {"40+"}
                    </span>
                    <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider block mt-0.5">
                      {"Artisan Clusters"}
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-secondary-fixed block font-serif">
                      {"Bespoke"}
                    </span>
                    <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider block mt-0.5">
                      {"Custom Tailoring"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
