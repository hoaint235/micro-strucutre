export type OrderProps = 'asc' | 'desc';
export type AlignProps = 'left' | 'right';

export type HeaderProps = {
  id?: string;
  field: string;
  align?: AlignProps;
  width?: number;
  sort?: boolean;
  label?: string;
};

export type DataTableHeaderProps = {
  headers: HeaderProps[];
  order: OrderProps;
  orderBy: string;
  onSort: (event: React.MouseEvent<unknown>, property: string) => void;
};
