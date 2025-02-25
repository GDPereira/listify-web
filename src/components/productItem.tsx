import { cn } from "@/lib/utils";
import { Product } from "@/services/productsData";
import { Checkbox, List } from "antd";
import { ClassValue } from "clsx";
import { CSSProperties } from "react";

interface ProductItemProps {
  product: Product;
  style: CSSProperties;
  isSelected: boolean;
  onClick: () => void;
  className?: ClassValue;
}

export const ProductItem = ({
  isSelected,
  style,
  product,
  className,
  onClick,
}: ProductItemProps) => {
  return (
    <List.Item
      style={style}
      onClick={onClick}
      className={cn("rounded-md bg-blue-50 flex items-center", className)}
    >
      <Checkbox className="px-5" checked={isSelected} />
      <List.Item.Meta
        className="px-5 w-full"
        title={<span className="flex w-full flex-1">{product.name}</span>}
        description={`US$ ${product.price}`}
      />
    </List.Item>
  );
};
