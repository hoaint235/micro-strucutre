import { Table, TableContainer, TablePagination } from "@material-ui/core";
import { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { DataTableProps, PagingProps } from "./DataTable.type";
import { DataTableHeader, DataTableBody, OrderProps } from "../../atoms";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const DataTable = (props: DataTableProps) => {
  const classes = useStyles();
  const {
    totalItems,
    rowPerPage = [5, 10, 25],
    defaultPage = 0,
    defaultRowPerPage = 10,
    defaultOrderBy = "",
    defaultOrder = "asc",
    onSort,
    onPaging,
    ...propsHeader
  } = props;
  const [page, setPage] = useState<number>(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowPerPage);
  const [orderBy, setOrderBy] = useState<string>(defaultOrderBy);
  const [order, setOrder] = useState<OrderProps>(defaultOrder);
  const { t } = useTranslation();

  const createModelPaging = (currentPage: number, numbersOfPage: number) => {
    const paging: PagingProps = {
      newPage: currentPage,
      oldPage: page,
      limit: numbersOfPage,
      offset: numbersOfPage * currentPage,
    };
    return paging;
  };

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
    onPaging && onPaging(createModelPaging(newPage, rowsPerPage));
  };

  const handleRequestSort = (
    e: React.MouseEvent<unknown>,
    property: string
  ) => {
    e.preventDefault();
    const isAsc = orderBy === property && order === "asc";
    const orderType = isAsc ? "desc" : "asc";
    onSort && onSort({ order: orderType, orderBy: orderBy || property });
    setOrder(orderType);
    setOrderBy(property);
  };

  const handleChangeRowsPerPage = (event: any) => {
    const numbersOfPage = +event.target.value;
    setRowsPerPage(numbersOfPage);
    setPage(0);
    onPaging && onPaging(createModelPaging(0, numbersOfPage));
  };

  return (
    <Paper className={classes.root}>
      <TableContainer>
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
          labelRowsPerPage={t("table.rowsPerPage")}
          onPageChange={(_, newPage) => handleChangePage(newPage)}
          onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
        />
      )}
    </Paper>
  );
};

export default DataTable;
