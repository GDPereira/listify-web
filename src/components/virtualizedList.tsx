import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList, FixedSizeListProps } from "react-window";

type OptionalProps = "height" | "itemCount" | "itemSize" | "width";

export interface VirtualizedListProps<T>
  extends Partial<Pick<FixedSizeListProps<T>, OptionalProps>>,
    Omit<FixedSizeListProps<T>, OptionalProps> {
  data: T[];
}

export const VirtualizedList = <T = Record<string, unknown>,>({
  data,
  ...props
}: VirtualizedListProps<T>) => {
  return (
    <AutoSizer>
      {({ width, height }) => {
        return (
          <FixedSizeList<T>
            height={height}
            itemCount={data.length}
            itemSize={70}
            width={width}
            {...props}
          />
        );
      }}
    </AutoSizer>
  );
};
