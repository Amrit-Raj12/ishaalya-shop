
"use client";

import { useQuery } from "@tanstack/react-query";

import { categoriesApi } from "../api/categories.api";

export const categoryKeys = {
  all: ["categories"] as const,
  lists: () => [...categoryKeys.all, "list"] as const,
};

export function useCategories() {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: categoriesApi.getAll,
    staleTime: 5 * 60 * 1000,
  });
}
