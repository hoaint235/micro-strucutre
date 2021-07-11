import { HeaderProps, OrderProps } from "./DataTableHeader.type";

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

export type DataTableProps = {
  headers: HeaderProps[];
  source: Array<{}>;
  keyRow: string;
  totalItems: number;
  rowPerPage?: Array<number>;
  defaultRowPerPage?: number;
  defaultPage?: number;
  defaultOrderBy?: string;
  defaultOrder?: OrderProps;
  onSort?: (data: SortProps) => void;
  onPaging?: (data: PagingProps) => void;
  bodyTemplate?: {
    [key: string]: (data) => any;
  };
};
