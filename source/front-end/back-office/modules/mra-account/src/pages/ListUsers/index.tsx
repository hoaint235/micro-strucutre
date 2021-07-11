import { Grid } from "@mra/theme";
import React from "react";
import MainContainer from "../../components/MainContainer";
import SearchUser from "./SearchUser";
import TableUsers from "./TableUsers";

const ListUsers = () => {
  return (
    <MainContainer title="account.listUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchUser />
        </Grid>
        <Grid item xs={12}>
          <TableUsers />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default ListUsers;
