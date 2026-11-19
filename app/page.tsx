import { StorefrontLayout } from "@/components/templates/storefront-layout";
import { HeroSection } from "@/features/home/components/hero-section";
import { OccasionSection } from "@/features/home/components/occasion-section";
import { CategorySection } from "@/features/home/components/category-section";
import { BestsellerSection } from "@/features/home/components/bestseller-section";
import { CollectionSection } from "@/features/home/components/collection-section";
import { CraftsmanshipSection } from "@/features/home/components/craftsmanship-section";
import { CommunitySection } from "@/features/home/components/community-section";
import { BenefitsSection } from "@/features/home/components/benefits-section";
import { NewsletterSection } from "@/features/home/components/newsletter-section";
import { BrandPromiseSection } from "@/features/home/components/brand-promise-section";

export default function HomePage() {
  return (
    <StorefrontLayout>
    <main className="w-full pt-28 bg-surface">
      <div className="flex flex-col w-full">
        <HeroSection />
        <OccasionSection />
        <CategorySection />
        <BestsellerSection />
        <CollectionSection />
        <CraftsmanshipSection />
        <CommunitySection />
        <BenefitsSection />
        <NewsletterSection />
        <BrandPromiseSection />
      </div>
    </main>
    </StorefrontLayout>
  );
}
