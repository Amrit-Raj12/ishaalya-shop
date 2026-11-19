
"use client";

import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/products.api";
import { productKeys } from "./use-products";

export function useProduct(slug: string) {
  return useQuery({
    queryKey: [...productKeys.all, "detail", slug],
    queryFn: () => productsApi.getBySlug(slug),
    enabled: Boolean(slug),
    staleTime: 60_000,
  });
}
