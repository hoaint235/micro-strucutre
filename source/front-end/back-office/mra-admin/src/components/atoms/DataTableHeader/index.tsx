import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React from "react";
import { DataTableHeaderProps, HeaderProps } from "./DataTableHeader.type";
import {
  useStyles,
  useStylesSortLabel,
  useStylesTableCell,
} from "./DataTableHeader.style";
import { useTranslation } from "react-i18next";

const DataTableHeader = (props: DataTableHeaderProps) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const classesSortLabel = useStylesSortLabel();
  const classesTableCell = useStylesTableCell();
  const { headers, order, orderBy, onSort } = props;

  const handlerSort =
    (property: string) =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      onSort(event, property);
    };

  const SortHeader = (header: HeaderProps) => {
    const field = header.field;
    return (
      <TableSortLabel
        classes={{ ...classesSortLabel }}
        active={orderBy === field}
        direction={orderBy === field ? order : "asc"}
        onClick={handlerSort(field)}
      >
        {t(header.label || "")}
        {orderBy === field ? (
          <span className={classes.visuallyHidden}>
            {order === "desc" ? "sorted descending" : "sorted ascending"}
          </span>
        ) : null}
      </TableSortLabel>
    );
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map((header: HeaderProps) => (
          <TableCell
            classes={{ ...classesTableCell }}
            key={header.field}
            align={header.align || "left"}
            width={header.width}
            sortDirection={orderBy === header.field ? order : false}
          >
            {header.sort ? SortHeader(header) : t(header.label || "")}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default DataTableHeader;
