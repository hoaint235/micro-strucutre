import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import React from 'react';
import { DataTableHeaderProps, HeaderProps } from './DataTableHeader.type';
import {
  useStyles,
  useStylesSortLabel,
  useStylesTableCell,
} from './DataTableHeader.style';
import Typography from '../Typography';

const DataTableHeader = (props: DataTableHeaderProps) => {
  const classes = useStyles();
  const classesSortLabel = useStylesSortLabel();
  const classesTableCell = useStylesTableCell();
  const { headers, order, orderBy, onSort } = props;

  const handlerSort =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onSort(event, property);
    };

  const HeaderLabel = (label: string | undefined) => (
    <Typography.Label
      style={{ fontWeight: 'bold' }}
      color="textPrimary"
      label={label || ''}
    />
  );

  const HeaderSort = (header: HeaderProps) => {
    const { field } = header;
    return (
      <TableSortLabel
        classes={{ ...classesSortLabel }}
        active={orderBy === field}
        direction={orderBy === field ? order : 'asc'}
        onClick={handlerSort(field)}
      >
        {HeaderLabel(header.label)}
        {orderBy === field ? (
          <span className={classes.visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
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
            align={header.align || 'left'}
            width={header.width}
            sortDirection={orderBy === header.field ? order : false}
          >
            {header.sort ? HeaderSort(header) : HeaderLabel(header.label)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default DataTableHeader;
