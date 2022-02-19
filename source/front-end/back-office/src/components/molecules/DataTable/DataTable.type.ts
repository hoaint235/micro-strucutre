import { DataTableBodyProps, OrderProps } from '@atoms';

export type PagingProps = {
  newPage: number;
  oldPage: number;
  limit: number;
  offset: number;
};

export type SortProps = {
  order: OrderProps;
  orderBy: string;
};

export type DataTableProps = DataTableBodyProps & {
  totalItems: number;
  rowPerPage?: Array<number>;
  defaultRowPerPage?: number;
  defaultPage?: number;
  defaultOrderBy?: string;
  defaultOrder?: OrderProps;
  onSort?: (data: SortProps) => void;
  onPaging?: (data: PagingProps) => void;
};
