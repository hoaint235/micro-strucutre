import { Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

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

const ContentForm = (props) => {
  const { children, title } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item md={7}>
            <Typography className={classes.header}>{title}</Typography>
          </Grid>
          <Grid item md={5} className={classes.logo}>
            <a href="/">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ContentForm;
