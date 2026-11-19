
export type ProductStatus = "ACTIVE" | "INACTIVE" | "DRAFT" | (string & {});

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductImage {
  id: string;
  productId: string;
  url: string;
  objectKey: string;
  altText: string | null;
  sortOrder: number;
  isPrimary: boolean;
  createdAt: string;
}

export interface ProductVariant {
  id: string;
  size: string | null;
  color: string | null;
  colorCode: string | null;
  price: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string | null;
  brand: string | null;
  basePrice: string;
  comparePrice: string | null;
  status: ProductStatus;
  isFeatured: boolean;
  isNewArrival: boolean;
  washCare: string | null;
  includes: string | null;
  createdAt: string;
  updatedAt: string;
  category: ProductCategory;
  images: ProductImage[];
  variants: ProductVariant[];
  attributes: unknown[];
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
