export function SiteHeader() {
  return (
<header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(74,14,23,0.06)]">
        <div className="w-full bg-primary text-on-primary py-space-xs px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-center">
            <div className="hidden md:flex items-center gap-space-sm">
              <span className="font-label-sm text-label-sm tracking-widest text-secondary-container uppercase">
                {"INR (₹)"}
              </span>
              <span className="text-outline-variant font-label-sm text-label-sm">
                {"•"}
              </span>
              <span className="font-label-sm text-label-sm text-surface-variant tracking-wider uppercase">
                {"India Delivery"}
              </span>
            </div>
            <p className="flex-1 font-label-sm text-label-sm tracking-widest text-surface uppercase px-space-xs">
              {
                "Complimentary Pan-India Express Shipping on Orders Above ₹3,999 | Worldwide Courier Available"
              }
            </p>
            <div className="flex items-center gap-space-md">
              <a
                className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container hover:text-on-primary transition-colors flex items-center gap-space-xs"
                href="#"
              >
                {"VIP Concierge"}
              </a>
            </div>
          </div>
        </div>
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between relative border-b border-secondary/20">
          <div className="flex items-center gap-space-md">
            <img
              alt="ISHAALYA Brand Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw3x7hrF0_Zfuhq_1zB55507Az5Y1Y8FIhRBEBSqcnus10kWJ7MZECnlSUu3K5OZEwODGgG1UsH6Jn_uTrSrQJXhJl55oE0VT9IeYa0qSHX8z49vX71Lbo-0i-D8m7ammKlLCSsb1TTOiqwgWGAzgnBjywwB9WjSCKwMzlkZHlefJ1YwzV18LtN8tJz-ROl5Cmg1WJtRwkWIlOe48C7iDIzOwr1z28oNTOsYgLkeE-DkDH2rm1wrJW"
            />
            <div className="flex flex-col text-left">
              <span className="font-headline-sm text-headline-sm tracking-widest text-primary font-serif uppercase leading-none">
                {"ISHAALYA"}
              </span>
              <span className="font-label-sm text-label-sm tracking-[0.24em] text-secondary uppercase mt-0.5">
                {"Unstitched Atelier"}
              </span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-space-lg">
            <a
              aria-current="page"
              className="uppercase tracking-[0.14em] transition-colors py-space-xs text-primary border-b-2 border-secondary font-semibold"
              href="#"
            >
              {"NEW ARRIVALS"}
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors py-space-xs"
              href="#"
            >
              {"UNSTITCHED SUITS"}
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors py-space-xs"
              href="#"
            >
              {"SUIT SETS"}
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors py-space-xs"
              href="#"
            >
              {"OCCASION EDIT"}
            </a>
            <a
              className="font-label-md text-label-md uppercase tracking-[0.14em] text-on-surface-variant hover:text-primary transition-colors py-space-xs"
              href="#"
            >
              {"CRAFTSMANSHIP & STORY"}
            </a>
          </nav>
          <div className="flex items-center gap-space-md">
            <button
              aria-label="Search Catalogue"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                {"search"}
              </span>
            </button>
            <button
              aria-label="Select Currency"
              className="hidden sm:flex items-center text-on-surface-variant hover:text-primary transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                {"public"}
              </span>
            </button>
            <a
              className="relative text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                {"favorite"}
              </span>
              <span className="absolute -top-1.5 -right-2 bg-primary text-on-primary font-label-sm text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {"0"}
              </span>
            </a>
            <a
              className="relative text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
              href="#"
            >
              <span className="material-symbols-outlined text-[20px]">
                {"shopping_bag"}
              </span>
              <span className="absolute -top-1.5 -right-2 bg-secondary text-on-secondary font-label-sm text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {"0"}
              </span>
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                {"person"}
              </span>
            </div>
          </div>
        </div>
      </header>
  );
}
