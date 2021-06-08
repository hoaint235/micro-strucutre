export type OrderProps = "asc" | "desc";
export type AlignProps = "left" | "right";

export type HeaderProps = {
  id: string;
  align?: AlignProps;
  width?: number;
  sort?: boolean;
  label?: string;
};

export type DynamicTableHeaderProps = {
  headers: HeaderProps[];
  order: OrderProps;
  orderBy: string;
  onSort: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    property: string
  ) => void;
};
