import { api } from "@/lib/http";

export interface Product {
  _id: string;
  name: string;
  price: number;
}

interface ProductsResponse {
  success: boolean;
  data: {
    products: Product[];
  };
}

export const getProducts = async () => {
  const { data } = await api.get<ProductsResponse>("/products");

  return data;
};
