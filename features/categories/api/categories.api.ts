
import { apiClient } from "@/lib/api/client";

import type {
  Category,
  CategoriesResponse,
} from "../types/category.types";

export const categoriesApi = {
  async getAll(): Promise<Category[]> {
    const response =
      await apiClient.get<CategoriesResponse>("/categories");

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data.data.filter(
      (category) => category.isActive
    );
  },
};
