import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-flex",
    justifyContent: "center",
    webkitBoxPack: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <a href="/" className={classes.root}>
      <img
        src="https://berrydashboard.io/static/media/logo.74a2ce07.svg"
        alt="logo"
      />
    </a>
  );
};

export default Logo;
