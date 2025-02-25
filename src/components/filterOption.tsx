import { Checkbox } from "antd";

interface FilterOptionProps {
  onClick: () => void;
  checked: boolean;
  title: string;
}

export const FilterOption = ({
  onClick,
  checked,
  title,
}: FilterOptionProps) => {
  return (
    <div className="flex flex-row gap-1 cursor-pointer" onClick={onClick}>
      <Checkbox checked={checked} />
      <span>{title}</span>
    </div>
  );
};
