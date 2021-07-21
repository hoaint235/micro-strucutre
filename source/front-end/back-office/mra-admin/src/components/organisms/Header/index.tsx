import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { Logo } from "../../atoms";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fff",
    paddingTop: 8,
  },
}));

const useStyleToolBar = makeStyles(() => ({
  root: {
    minHeight: 64,
  },
}));

type Props = {
  onToggle: () => void;
};

const Header = (props: Props) => {
  const classes = useStyles();
  const classToolBar = useStyleToolBar();

  return (
    <AppBar position="fixed" elevation={0} className={classes.root}>
      <Toolbar classes={{ ...classToolBar }}>
        <Logo href="/" src="images/logo.svg" />

        <div style={{ flexGrow: 1 }}></div>
        <div style={{ flexGrow: 1 }}></div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
