import {
  makeStyles,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Theme,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { DynamicTableHeaderProps } from "./DynamicTableHeader.type";

const useStylesSortLabel = makeStyles((theme: Theme) => ({
  icon: {
    color: `${theme.palette.text.primary} !important`,
  },
}));

const useStylesTableCell = makeStyles((theme: Theme) => ({
  root: {
    fontWeight: theme.typography.fontWeightBold,
    position: "relative",
  },
}));

const useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
});

const DynamicTableHeader = (props: DynamicTableHeaderProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const classesSortLabel = useStylesSortLabel();
  const classesTableCell = useStylesTableCell();
  const { headers, order, orderBy, onSort } = props;

  const createSortHandler =
    (property: string) =>
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      onSort(event, property);
    };

  const renderSortHeader = (header) => {
    return (
      <TableSortLabel
        classes={{ ...classesSortLabel }}
        active={orderBy === header.id}
        direction={orderBy === header.id ? order : "asc"}
        onClick={createSortHandler(header.id)}
      >
        {t(header.label)}
        {orderBy === header.id ? (
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
        {headers.map((header) => (
          <TableCell
            classes={{ ...classesTableCell }}
            key={header.id}
            align={header.align || "left"}
            width={header.width}
            sortDirection={orderBy === header.id ? order : false}
          >
            {header.sort ? renderSortHeader(header) : t(header.label)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

DynamicTableHeader.DefaultProps = {
  width: 150,
};

export default DynamicTableHeader;
