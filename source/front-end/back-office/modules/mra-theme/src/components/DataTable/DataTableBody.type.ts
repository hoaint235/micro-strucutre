import { HeaderProps } from "./DataTableHeader.type";

export type DynamicTableBodyProps = {
  headers: HeaderProps[];
  source: Array<{}>;
  keyRow: string;
  bodyTemplate?: {
    [key: string]: (data) => any;
  };
  noResultFound?: string;
};
