import { Grid, makeStyles, Theme, MLogo, MTypography } from "@mra/theme";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: 1.2,
    color: theme.palette.primary.main,
  },
  logo: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid container alignItems="center">
      <Grid item sm={7} xs={12}>
        <MTypography.Subtitle
          className={classes.header}
          label={t(props.title)}
        />
      </Grid>
      <Grid item sm={5} xs={12} className={classes.logo}>
        <MLogo href="/" src="images/logo.svg" />
      </Grid>
    </Grid>
  );
};

export default Header;
