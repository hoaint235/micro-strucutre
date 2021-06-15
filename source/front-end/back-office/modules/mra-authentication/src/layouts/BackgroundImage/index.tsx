import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const BackgroundImage = () => {
  const classes = useStyles();

  return (
    <Box component="span" className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item className={classes.imageContainer}>
          <img
            alt="background"
            className={classes.image}
            src="/images/background.svg"
          />
        </Grid>
        <Grid item>
          <Box pb={10}>
            <div className={classes.contentContainer}>
              <Typography component="h2" variant="h3">
                Micro Architecture
              </Typography>
              <Typography component="p" variant="body1">
                Powerful and easy to use multipurpose theme
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BackgroundImage;
