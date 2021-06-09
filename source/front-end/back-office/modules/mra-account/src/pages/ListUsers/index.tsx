import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import MainContainer from "../../components/commons/MainContainer";
import DynamicTable from "../../components/controls/DynamicTable";
import { HeaderProps } from "../../components/controls/DynamicTableHeader/DynamicTableHeader.type";
import { API } from "@mra/utility";

const headers: HeaderProps[] = [
  {
    id: "id",
    label: "Id",
    align: "left",
  },
  {
    id: "name",
    label: "Name",
    align: "left",
    sort: true,
  },
  {
    id: "action",
    label: "Action",
  },
];

const data = [
  {
    id: "123",
    name: "Hello",
  },
  {
    id: "456",
    name: "Hello 1",
  },
  {
    id: "789",
    name: "Hello 2",
  },
];

const ListUsers = () => {
  const fetchUsers = async () => {
    await API.get("/account/users");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
    <MainContainer title="List Users">
      <DynamicTable
        keyRow="id"
        defaultOrderBy="name"
        defaultOrder="asc"
        source={data}
        headers={headers}
        totalItems={data.length}
        bodyTemplate={{ bodyAction: renderAction }}
      ></DynamicTable>
    </MainContainer>
  );
};

export default ListUsers;
