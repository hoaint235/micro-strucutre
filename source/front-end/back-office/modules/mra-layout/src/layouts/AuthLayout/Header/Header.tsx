import { AppBar, makeStyles, Toolbar } from "@mra/theme";
import React from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import SearchContainer from "./SearchContainer/SearchContainer";

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

const Header = (props) => {
  const classes = useStyles();
  const classToolBar = useStyleToolBar();

  return (
    <AppBar position="fixed" elevation={0} className={classes.root}>
      <Toolbar classes={{ ...classToolBar }}>
        <LeftContainer onToggleMenu={props.onToggle} />

        <SearchContainer />

        <div style={{ flexGrow: 1 }}></div>
        <div style={{ flexGrow: 1 }}></div>

        <RightContainer />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
