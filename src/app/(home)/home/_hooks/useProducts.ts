import { getProducts } from "@/services/productsData";
import { useQuery } from "@tanstack/react-query";

const getProductsKey = "getProducts";

export const useProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [getProductsKey],
    queryFn: getProducts,
  });

  return { data, error, isLoading };
};
