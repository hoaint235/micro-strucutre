import {
  Card,
  CardContent,
  Container,
  Grid,
  Hidden,
  Paper,
} from "@material-ui/core";
import React from "react";
import LoadingProvider from "../../components/LoadingProvider";
import MessageProvider from "../../components/MessageProvider";
import Routes from "../../routes";
import { MaterialProvider } from "../../theme";
import BackgroundImage from "./BackgroundImage";
import useStyles from "./MainLayout.style";

const MainLayout = () => {
  const classes = useStyles();

  return (
    <MaterialProvider>
      <div className={classes.root}>
        <Grid container alignItems="center">
          <Grid item lg={7} md={6} sm={12} className={classes.jutifyContent}>
            <Container maxWidth="md" className={classes.jutifyContent}>
              <Paper component={Card} className={classes.contentContainer}>
                <CardContent>
                  <Routes />
                </CardContent>
              </Paper>
            </Container>
          </Grid>
          <Hidden smDown>
            <Grid item lg={5} md={6} className={classes.backgroundContainer}>
              <BackgroundImage />
            </Grid>
          </Hidden>
        </Grid>

        <MessageProvider />
        <LoadingProvider />
      </div>
    </MaterialProvider>
  );
};

export default MainLayout;
