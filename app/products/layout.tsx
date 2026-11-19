
import type { ReactNode } from "react";

import { StorefrontLayout } from "@/components/templates/storefront-layout";

export default function ProductsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <StorefrontLayout>{children}</StorefrontLayout>;
}
