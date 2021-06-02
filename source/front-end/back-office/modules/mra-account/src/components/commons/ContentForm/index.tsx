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
}));

const ContentForm = (props) => {
  const { children, title } = props;
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Typography className={classes.header}>{title}</Typography>
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
