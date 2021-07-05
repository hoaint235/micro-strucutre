import {
  Card,
  CardContent,
  Container,
  Grid,
  Hidden,
  Paper,
  UIProvider,
} from "@mra/theme";
import React from "react";
import { LoadingProvider } from "../../components";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import useStyles from "./NoAuthLayout.style";

const NoAuthLayout = (props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <UIProvider name="mra-layout">
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
    </UIProvider>
  );
};

export default NoAuthLayout;
