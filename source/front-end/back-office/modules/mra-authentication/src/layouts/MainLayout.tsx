import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  jutifyContent: {
    display: "flex",
    justifyContent: "center",
  },
}));

const MainLayout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={7} md={6} className={classes.jutifyContent}>
        {children}
      </Grid>
      <Grid item lg={5} md={6}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;
