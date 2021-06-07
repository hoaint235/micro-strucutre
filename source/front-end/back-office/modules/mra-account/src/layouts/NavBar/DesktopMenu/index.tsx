import { Drawer, makeStyles } from "@material-ui/core";
import React from "react";
import MenuList from "../MenuList";

const useStyles = makeStyles(() => ({
  root: {
    flexShrink: 0,
    width: 260,
  },
  desktopDrawer: {
    width: 260,
    top: 88,
    height: "calc(100% - 88px)",
    borderRight: "none",
    background: "#fff",
  },
}));

const DesktopMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        style={{ zIndex: 10 }}
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        <MenuList />
      </Drawer>
    </div>
  );
};

export default DesktopMenu;
