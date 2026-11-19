export function SiteFooter() {
  return (
<footer className="w-full bg-surface-container-low border-t border-secondary/20 pt-space-2xl pb-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl mb-space-2xl">
            <div className="flex flex-col gap-space-sm">
              <span className="font-headline-sm text-headline-sm font-serif tracking-widest text-primary uppercase">
                {"ISHAALYA"}
              </span>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">
                {"Unstitched Atelier"}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                {
                  "Curating regal handcrafted unstitched textiles, pure zari weaves, and heirloom Indian suit cuts tailored to quiet luxury."
                }
              </p>
            </div>
            <div>
              <h4 className="font-label-md text-label-md uppercase tracking-[0.14em] text-primary mb-space-md">
                {"Atelier Collections"}
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Banarasi Chanderi Silks"}
                </li>
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Organza Embroidered Sets"}
                </li>
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Handloom Tussar & Muga"}
                </li>
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Pashmina & Kashidakari"}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md uppercase tracking-[0.14em] text-primary mb-space-md">
                {"Patron Care"}
              </h4>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Custom Stitching Assistance"}
                </li>
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Domestic & International Shipping"}
                </li>
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Fabric Care & Preservation"}
                </li>
                <li className="hover:text-primary cursor-pointer transition-colors">
                  {"Returns & Authenticity Certificate"}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-md text-label-md uppercase tracking-[0.14em] text-primary mb-space-md">
                {"Private Concierge"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                {
                  "Connect with our personal textile master for bridal trousseau consultations."
                }
              </p>
              <a
                className="inline-block font-label-md text-label-md uppercase tracking-[0.14em] text-primary border-b border-primary pb-0.5 hover:text-secondary hover:border-secondary transition-colors"
                href="#"
              >
                {"Book Atelier Appointment →"}
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-secondary/15 pt-space-md font-label-sm text-label-sm text-on-surface-variant">
            <p>
              {
                "© 2025 ISHAALYA ATELIER. Handcrafted in India. All Rights Reserved."
              }
            </p>
            <div className="flex items-center gap-space-lg mt-space-sm sm:mt-0">
              <span className="hover:text-primary cursor-pointer">
                {"Privacy Charter"}
              </span>
              <span className="hover:text-primary cursor-pointer">
                {"Terms of Heritage"}
              </span>
              <span className="hover:text-primary cursor-pointer">
                {"Authenticity Seal"}
              </span>
            </div>
          </div>
        </div>
      </footer>
  );
}
