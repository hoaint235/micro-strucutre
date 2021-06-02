import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import Content from "./Content";
import StyleProvider from "./StyleProvider";

const useStyles = makeStyles(() => ({
  jutifyContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundContainer: {
    position: "relative",
    margin: 0,
    boxSizing: "border-box",
    alignSelf: "stretch",
  },
}));

const MainLayout = (props) => {
  const classes = useStyles();

  return (
    <StyleProvider>
      <Grid container>
        <Grid item lg={7} md={6} className={classes.jutifyContent}>
          <Content {...props} />
        </Grid>
        <Grid item lg={5} md={6} className={classes.backgroundContainer}>
          <BackgroundImage />
        </Grid>
      </Grid>
    </StyleProvider>
  );
};

export default MainLayout;
