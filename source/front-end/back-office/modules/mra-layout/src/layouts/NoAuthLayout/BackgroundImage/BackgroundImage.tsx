import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./BackgroundImage.style";

const BackgroundImage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

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
              <Typography component="h2" variant="h3" color="textPrimary">
                {t("auth.backgroundTitle")}
              </Typography>
              <Typography component="p" variant="body1" color="textPrimary">
                {t("auth.backgroundSubtitle")}
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BackgroundImage;
