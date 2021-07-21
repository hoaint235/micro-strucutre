import { Box, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Typography } from "../../atoms";
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
              <Typography.Title label={t("auth.backgroundTitle")} />
              <Typography.Subtitle label={t("auth.backgroundSubtitle")} />
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BackgroundImage;
