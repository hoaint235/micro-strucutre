import { Table } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import stringHelper from "../../../utils/helpers/stringHelper";
import DynamicTableHeader from "../DynamicTableHeader";
import { DynamicTableProps, PagingProps } from "./DynamicTable.type";
import { OrderProps } from "../DynamicTableHeader/DynamicTableHeader.type";

const prefixBody = "body";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  container: {
    maxHeight: 440,
  },
}));

const DynamicTable = (props: DynamicTableProps) => {
  const classes = useStyles();
  const {
    headers,
    source,
    totalItems,
    keyRow,
    rowPerPage,
    defaultPage,
    defaultRowPerPage,
    defaultOrderBy,
    defaultOrder,
    onSort,
    onPaging,
    bodyTemplate,
  } = props;
  const [page, setPage] = useState<number>(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowPerPage);
  const [orderBy, setOrderBy] = useState<string>(defaultOrderBy);
  const [order, setOrder] = useState<OrderProps>(defaultOrder);

  const createModelPaging = (currentPage, numbersOfPage) => {
    const paging: PagingProps = {
      newPage: currentPage,
      oldPage: page,
      limit: numbersOfPage,
      offset: numbersOfPage * currentPage,
    };
    return paging;
  };

  const renderBody = useMemo(
    () =>
      source.map((row) => {
        return (
          <TableRow hover tabIndex={-1} key={row[keyRow]}>
            {headers.map((header) => {
              const id = header.id;
              const value = row[id];
              const idV4 = uuidv4();
              const column = `${prefixBody}${stringHelper.toUpperCaseFirst(
                id
              )}`;

              return (
                <TableCell key={idV4} align={header.align}>
                  {bodyTemplate[column] ? bodyTemplate[column](row) : value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      }),
    [source, headers, keyRow, bodyTemplate]
  );

  const handleChangePage = (event, newPage: number) => {
    setPage(newPage);
    onPaging(createModelPaging(newPage, rowsPerPage));
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    onSort({ order, orderBy });
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (event) => {
    const numbersOfPage = +event.target.value;
    setRowsPerPage(numbersOfPage);
    setPage(0);
    onPaging(createModelPaging(0, numbersOfPage));
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <DynamicTableHeader
            headers={headers}
            order={order}
            orderBy={orderBy}
            onSort={handleRequestSort}
          />
          <TableBody>{renderBody}</TableBody>
        </Table>
      </TableContainer>
      {!!onPaging && (
        <TablePagination
          rowsPerPageOptions={rowPerPage}
          component="div"
          count={totalItems}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};

DynamicTable.propTypes = {
  source: PropTypes.array.isRequired,
};

DynamicTable.defaultProps = {
  defaultPage: 0,
  defaultRowPerPage: 5,
  rowPerPage: [5, 10, 25],
};

export default DynamicTable;
