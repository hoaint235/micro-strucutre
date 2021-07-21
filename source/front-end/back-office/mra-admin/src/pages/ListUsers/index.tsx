import { Grid } from "@material-ui/core";
import React from "react";
import { Button } from "../../components/atoms";
import { MainContainer } from "../../components/organisms";
import { CognitoService } from "../../services";

const ListUsers = () => {
  console.log("render list user");
  const callAuthen = async () => {
    const auth = await CognitoService.isAuthenticated();
    console.log(auth);
  };

  return (
    <MainContainer title="listUserPage.title">
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Button.Primary label="test" onClick={callAuthen} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </MainContainer>
  );
};

export default ListUsers;
