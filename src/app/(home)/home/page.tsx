"use client";

import { FilterOption } from "@/components/filterOption";
import { Header } from "@/components/header";
import { ProductItem } from "@/components/productItem";
import { VirtualizedList } from "@/components/virtualizedList";
import "@ant-design/v5-patch-for-react-19";
import { Flex, Layout, Spin, Typography } from "antd";
import { useHome } from "./_hooks/useHome";

export default function HomePage() {
  const {
    selectSort,
    productsFiltered,
    isLoading,
    setFilter,
    setSelectedProducts,
    selectedProducts,
    filter,
  } = useHome();

  return (
    <Layout className="h-dvh">
      <Header />

      <Flex vertical justify="center" align="center" className="h-full">
        {isLoading && <Spin size="large" />}
        {!isLoading && (
          <>
            <div className="flex flex-col items-center border rounded-md p-5 mb-5 bg-blue-200">
              <Typography.Title>Filters</Typography.Title>
              <div className="flex gap-5">
                <FilterOption
                  title="Only Selecteds"
                  onClick={() =>
                    setFilter((prev) => ({
                      ...prev,
                      onlySelected: !prev.onlySelected,
                    }))
                  }
                  checked={filter.onlySelected}
                />

                <FilterOption
                  title="Price - Low to High"
                  onClick={selectSort("low")}
                  checked={filter.sort === "low"}
                />

                <FilterOption
                  title="Price - Hight to Low"
                  onClick={selectSort("high")}
                  checked={filter.sort === "high"}
                />
              </div>
            </div>
            <div className="w-6/12 h-2/3">
              <VirtualizedList data={productsFiltered}>
                {({ index, style }) => {
                  const item = productsFiltered[index];
                  const isSelected = selectedProducts.has(item.name);
                  const isEven = index % 2 === 0;

                  return (
                    <ProductItem
                      product={item}
                      isSelected={isSelected}
                      className={isEven && "bg-blue-100"}
                      style={style}
                      onClick={() => {
                        if (isSelected) {
                          return setSelectedProducts((prev) => {
                            prev.delete(item.name);

                            return new Set([...prev]);
                          });
                        }

                        return setSelectedProducts(
                          (prev) => new Set([...prev.add(item.name)]),
                        );
                      }}
                      key={index}
                    />
                  );
                }}
              </VirtualizedList>
            </div>
          </>
        )}
      </Flex>
    </Layout>
  );
}
