import { Grid, makeStyles, Theme, Typography } from "@mra/theme";
import React from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "@mra/theme";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    margin: "0px 0px 0.35em",
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
        <Typography className={classes.header}>{t(props.title)}</Typography>
      </Grid>
      <Grid item sm={5} xs={12} className={classes.logo}>
        <Logo src="images/logo.svg" onClick={() => console.log("asdas")} />
      </Grid>
    </Grid>
  );
};

export default Header;
