import { Grid } from "@material-ui/core";
import React from "react";
import { MainContainer } from "../../components/organisms";

const ListUsers = () => {
  return (
    <MainContainer title="listUserPage.title">
      <Grid container item xs={12}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </MainContainer>
  );
};

export default ListUsers;
