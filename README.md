# ISHAALYA — Unstitched Atelier

A modern, responsive fashion e-commerce storefront for **Ishaalya**, focused on unstitched suits and curated ethnic wear. The customer-facing experience combines an editorial, luxury-inspired visual language with live product and category information from the Ishaalya backend.

> **Development status:** The landing page, dynamic category and product listings, and product details experience are in progress. Cart, checkout, online payment, and courier-serviceability actions are not yet connected.

## About the Brand & Products

Ishaalya presents unstitched suits and ethnic-wear collections with an emphasis on fabric, embroidery, colour, and styling details. The storefront is designed to help customers discover collections, browse individual garments, inspect product imagery, compare prices, and review available variants.

Product information is loaded from the backend, including:

- Product name, description, brand, and category
- Selling price and optional comparison price
- Product photographs hosted on Cloudflare R2
- Available variants, such as size and colour
- Included garments and wash-care information, where provided
- Featured and new-arrival indicators

## Landing Page UI

The landing page is based on a **Google Stitch-generated design** and is being refactored into reusable React components while preserving its visual identity.

### Design Direction

- **Palette:** Deep burgundy, muted gold, and warm ivory
- **Typography:** Editorial serif headings paired with clean sans-serif supporting text
- **Layout:** Responsive sections, generous whitespace, fashion imagery, and refined product cards
- **Experience:** Luxury-inspired storefront presentation with accessible, reusable UI elements

### Homepage Sections

| Section | Purpose |
| --- | --- |
| Header & navigation | Brand identity and primary storefront navigation |
| Hero | Editorial introduction to the Ishaalya collection |
| Shop by occasion | Occasion-led collection discovery |
| Categories | Dynamic categories fetched from the backend |
| Featured products | Products marked as featured in the backend |
| Shop Our Collection | Product listing with category and new-arrival filters |
| Craftsmanship | Editorial brand and craft storytelling |
| Community | Lifestyle and community-focused presentation |
| Brand benefits & promise | Brand-focused supporting content |
| Newsletter | Newsletter UI section |
| Footer | Supporting navigation and brand information |

**Note:** Editorial sections are part of the visual storefront. Their presence does not imply that newsletter subscriptions or other external integrations are operational.

## Product Details UI

The dynamic route `/products/[slug]` retrieves product details from the existing backend.

The product page includes or is being developed to include:

- Responsive gallery using real product images
- Thumbnail selection, hover inspection, and fullscreen image preview
- Breadcrumb navigation
- Product title, category, brand, and pricing
- Comparison price and discount display when applicable
- Colour and size/variant selection from available backend variants
- Quantity selector
- Product inclusions, description, and wash-care information where available
- Expandable information sections
- Stitch-inspired purchase and courier-availability panels

**Not yet functional:** Add to Atelier Bag, Buy It Now, payment checkout, and courier PIN-code verification require integration with the relevant backend services. Product stock, delivery estimates, and reviews are not fabricated.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui |
| Server state | TanStack Query |
| HTTP client | Axios |
| Icons | Lucide React and Material Symbols |
| Image delivery | Cloudflare R2, Next.js Image |
| API | Existing Express.js / TypeScript backend |
| Database (backend) | PostgreSQL with Prisma |

## Architecture

The frontend uses an **Atomic Design and feature-oriented** structure:

```text
app/
  page.tsx
  products/
    layout.tsx
    [slug]/
      page.tsx
components/
  atoms/
  molecules/
  organisms/
  templates/
features/
  home/
    components/
  products/
    api/
    components/
    hooks/
    lib/
    types/
  categories/
    api/
    components/
    hooks/
    types/
lib/
  api/
  providers/
```

This separation keeps presentational components reusable and isolates backend data fetching and product mapping inside their respective features.

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16
- npm
- Running Ishaalya backend API

### Installation

```bash
git clone https://github.com/Amrit-Raj12/ishaalya-shop.git
cd ishaalya-shop
npm install
```

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

Open **http://localhost:3000**.

### Production Build

```bash
npx tsc --noEmit
npm run build
npm run start
```

> The API URL must point to an accessible backend. Browser requests also require an appropriate CORS configuration on the backend. Never commit `.env.local` or secrets.

## API Integration

The storefront currently uses these existing backend endpoints:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/products` | Fetch products for storefront listings |
| GET | `/api/products/:slug` | Fetch product details by slug (confirm route matches backend configuration) |
| GET | `/api/categories` | Fetch categories |

API responses use a `success`, `message`, and `data` envelope. Prices are supplied as strings and converted for presentation. Product images are served from Cloudflare R2.

## Development Roadmap

- [x] Stitch-inspired responsive landing page
- [x] Reusable Atomic Design components
- [x] Axios and TanStack Query setup
- [x] Dynamic product and category data
- [x] Product detail route and gallery
- [x] Variant and quantity selection UI
- [ ] Cart API integration and cart badge
- [ ] Checkout and payment integration
- [ ] Courier serviceability verification
- [ ] Complete storefront search and filtering
- [ ] Product SEO, metadata, and structured data enhancements
- [ ] End-to-end testing and production deployment

## Repository

[github.com/Amrit-Raj12/ishaalya-shop](https://github.com/Amrit-Raj12/ishaalya-shop)

---

**ISHAALYA** — A thoughtfully designed storefront for curated ethnic wear.
