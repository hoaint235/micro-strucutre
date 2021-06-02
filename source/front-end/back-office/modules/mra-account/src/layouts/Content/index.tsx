import { makeStyles, Paper, Card, CardContent } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 475,
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(97, 97, 97)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "none",
    backgroundImage: "none",
    borderRadius: 12,
    overflow: "hidden",
    border: "1px solid rgba(144, 202, 249, 0.46)",
    padding: 40,
  },
}));

const Content = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Paper component={Card} className={classes.root}>
      <CardContent>{children}</CardContent>
    </Paper>
  );
};

export default Content;
