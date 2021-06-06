import {
  Card,
  CardContent,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Paper,
} from "@material-ui/core";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import LoadingProvider from "./LoadingProvider";
import StyleProvider from "./StyleProvider";

const useStyles = makeStyles(() => ({
  rootContainer: {
    maxWidth: 475,
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(97, 97, 97)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    backgroundImage: "none",
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(144, 202, 249, 0.46)",
    padding: 40,
  },
  jutifyContent: {
    display: "flex",
    justifyContent: "center",
  },
  backgroundContainer: {
    position: "relative",
    margin: 0,
    boxSizing: "border-box",
    alignSelf: "stretch",
  },
}));

const MainLayout = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <StyleProvider>
      <Grid container alignItems="center">
        <Grid item lg={7} md={6} sm={12} className={classes.jutifyContent}>
          <Container maxWidth="md" className={classes.jutifyContent}>
            <Paper component={Card} className={classes.rootContainer}>
              <CardContent>{children}</CardContent>
            </Paper>
          </Container>
        </Grid>
        <Hidden smDown>
          <Grid item lg={5} md={6} className={classes.backgroundContainer}>
            <BackgroundImage />
          </Grid>
        </Hidden>
      </Grid>

      <LoadingProvider />
    </StyleProvider>
  );
};

export default MainLayout;
