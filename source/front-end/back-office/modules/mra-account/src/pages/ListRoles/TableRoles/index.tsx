import { Button, Grid, Link } from "@material-ui/core";
import React, { useState } from "react";
import DynamicTable from "../../../components/controls/DynamicTable";
import { HeaderProps } from "../../../components/controls/DynamicTableHeader/DynamicTableHeader.type";
import useListRole from "../../../hooks/useListRole";

const headers: HeaderProps[] = [
  {
    id: "name",
    label: "Name",
    sort: true,
  },
  {
    id: "description",
    label: "Description",
    sort: true,
  },
  {
    id: "action",
    label: "Action",
  },
];

const TableRoles = () => {
  const { data } = useListRole();

  const renderAction = (data) => {
    return (
      <Grid container spacing={1}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.pushState({}, "", `/user/${data.id}`)}
          >
            Edit
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="inherit">
            Delete
          </Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <DynamicTable
      keyRow="id"
      defaultOrderBy="name"
      defaultOrder="asc"
      source={data}
      headers={headers}
      totalItems={data.length}
      bodyTemplate={{ bodyAction: renderAction }}
    ></DynamicTable>
  );
};

export default TableRoles;
