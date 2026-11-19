"use client";

export function NewsletterSection() {
  return (
<section className="w-full py-space-3xl bg-primary-container text-surface relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile lg:px-margin text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary-fixed mb-space-md">
                <span className="material-symbols-outlined text-2xl">
                  {"mail"}
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-surface font-serif font-normal tracking-tight mb-space-xs">
                {"\n        Stay in the World of ISHAALYA\n      "}
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-high max-w-lg mx-auto mb-space-xl">
                {
                  "\n        Be the first to discover new collections, exclusive bridal edits, and intimate stories of Indian handloom craftsmanship.\n      "
                }
              </p>
              <form
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  alert("Thank you for subscribing to ISHAALYA Privé.")
                }}
              >
                <div className="relative flex-1">
                  <input
                    className="w-full px-4 py-3.5 bg-surface text-on-surface placeholder:text-on-surface-variant font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Enter your email address..."
                    required
                    type="email"
                  />
                </div>
                <button
                  className="px-8 py-3.5 bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-[0.18em] font-semibold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
                  type="submit"
                >
                  {"\n          Subscribe\n        "}
                </button>
              </form>
              <p className="font-label-sm text-label-sm text-surface-variant/80 uppercase tracking-widest mt-space-md">
                {
                  "\n        Zero spam • Discretion assured • Unsubscribe anytime\n      "
                }
              </p>
            </div>
          </section>
  );
}
