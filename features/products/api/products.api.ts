
import { apiClient } from "@/lib/api/client";

import type {
  ApiResponse,
  Product,
} from "../types/product.types";

export const productsApi = {
  async getAll(): Promise<Product[]> {
    const response = await apiClient.get<ApiResponse<Product[]>>(
      "/products"
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  },

  async getBySlug(slug: string): Promise<Product> {
    const response = await apiClient.get<ApiResponse<Product>>(
      `/products/${encodeURIComponent(slug)}`
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  },
};
