import { HeaderProps } from '../DataTableHeader/DataTableHeader.type';

export type DataTableBodyProps<T extends object = GlobalProps> = {
  headers: HeaderProps[];
  source: Array<T>;
  keyRow?: string;
  bodyTemplate?: {
    [key: string]: (data: T) => React.ReactNode | GlobalProps;
  };
  noResultFound?: string;
};
