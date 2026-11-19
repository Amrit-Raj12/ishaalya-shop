
"use client";

import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../api/products.api";

export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
};

export function useProducts() {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: productsApi.getAll,
    staleTime: 60_000,
  });
}
