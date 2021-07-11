import { Table } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import PropTypes from "prop-types";
import { OrderProps } from "./DataTableHeader.type";
import { DataTableProps, PagingProps } from "./DataTable.type";
import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";

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

const DataTable = (props: DataTableProps) => {
  const classes = useStyles();
  const {
    totalItems,
    rowPerPage,
    defaultPage,
    defaultRowPerPage,
    defaultOrderBy,
    defaultOrder,
    onSort,
    onPaging,
    ...propsHeader
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
        <Table stickyHeader>
          <DataTableHeader
            headers={props.headers}
            order={order}
            orderBy={orderBy}
            onSort={handleRequestSort}
          />
          <DataTableBody {...propsHeader} />
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

DataTable.propTypes = {
  source: PropTypes.array.isRequired,
};

DataTable.defaultProps = {
  defaultPage: 0,
  defaultRowPerPage: 5,
  rowPerPage: [5, 10, 25],
};

export default DataTable;
