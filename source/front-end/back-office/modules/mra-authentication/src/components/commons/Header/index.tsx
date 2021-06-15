import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { memo } from "react";

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

  return (
    <Grid container alignItems="center">
      <Grid item sm={7} xs={12}>
        <Typography className={classes.header}>{props.title}</Typography>
      </Grid>
      <Grid item sm={5} xs={12} className={classes.logo}>
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
      </Grid>
    </Grid>
  );
};

export default memo(Header);
