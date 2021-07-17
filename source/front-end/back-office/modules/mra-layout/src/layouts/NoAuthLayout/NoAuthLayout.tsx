import {
  Card,
  CardContent,
  Container,
  Grid,
  Hidden,
  MProvider,
  Paper,
} from "@mra/theme";
import React from "react";
import { LoadingProvider } from "../../components";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import useStyles from "./NoAuthLayout.style";
import { BrowserRouter as Router } from "react-router-dom";

const NoAuthLayout = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <MProvider name="mra-layout">
      <div className={classes.root}>
        <Grid container alignItems="center">
          <Grid item lg={7} md={6} sm={12} className={classes.jutifyContent}>
            <Container maxWidth="md" className={classes.jutifyContent}>
              <Paper component={Card} className={classes.contentContainer}>
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
      </div>
    </MProvider>
  );
};

export default NoAuthLayout;
