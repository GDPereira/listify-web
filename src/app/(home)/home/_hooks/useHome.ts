import { Product } from "@/services/productsData";
import { useCallback, useState } from "react";
import { useProducts } from "./useProducts";

type SortProduct = "id" | "low" | "high";

interface Filter {
  onlySelected: boolean;
  sort: SortProduct;
}

export const useHome = () => {
  const [selectedProducts, setSelectedProducts] = useState(new Set<string>());
  const [filter, setFilter] = useState<Filter>({
    onlySelected: false,
    sort: "id",
  });

  const { data, isLoading } = useProducts();
  const allProducts = data?.data.products ?? [];

  const filterProducts = useCallback(
    ({
      data,
      selectedProducts,
      filter: { sort, onlySelected },
    }: {
      data: Product[];
      filter: Filter;
      selectedProducts: Set<string>;
    }) => {
      if (onlySelected) {
        data = data.filter((product) => selectedProducts.has(product.name));
      }

      data.sort((productA, productB) => {
        if (sort === "id") {
          return productA._id.toString().localeCompare(productB._id.toString());
        }

        if (sort === "low") {
          return productA.price - productB.price;
        }

        return productB.price - productA.price;
      });

      return data;
    },
    [],
  );

  const productsFiltered = filterProducts({
    filter,
    selectedProducts,
    data: allProducts,
  });

  const selectSort = (sortBy: SortProduct) => () => {
    setFilter((prev) => {
      const { sort } = prev;

      return { ...prev, sort: sort === sortBy ? "id" : sortBy };
    });
  };

  return {
    selectedProducts,
    setSelectedProducts,
    filter,
    setFilter,
    isLoading,
    productsFiltered,
    selectSort,
  };
};
