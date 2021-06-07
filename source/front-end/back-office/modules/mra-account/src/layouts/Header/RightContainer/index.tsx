import { Hidden, IconButton, makeStyles, Theme } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import Logo from "./Logo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "228px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  logoContainer: {
    display: "block",
    flexGrow: 1,
    WebkitBoxFlex: 1,
  },
  toggleMenu: {
    display: "inline-flex",
    justifyContent: "center",
  },
}));

type Props = {
  onToggleMenu: () => void;
};

const RightContainer = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <span className={classes.logoContainer}>
          <Logo />
        </span>
      </Hidden>
      <IconButton
        color="primary"
        className={classes.toggleMenu}
        onClick={props.onToggleMenu}
      >
        <Menu />
      </IconButton>
    </div>
  );
};

export default RightContainer;
